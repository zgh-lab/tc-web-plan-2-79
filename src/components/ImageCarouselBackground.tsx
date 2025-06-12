
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 轮播图片数据
const carouselImages = [
  {
    id: 1,
    src: '/lovable-uploads/51b5a971-43cb-4c84-9586-b7279288237d.png',
    alt: '仙侠风格艺术图1'
  },
  {
    id: 2,
    src: '/lovable-uploads/e21f5034-a01f-4dc0-af06-3b78ddb51bc6.png',
    alt: '仙侠风格艺术图2'
  },
  {
    id: 3,
    src: '/lovable-uploads/0595cb68-9d07-4344-afea-87afb1f25ebb.png',
    alt: '仙侠风格艺术图3'
  },
  {
    id: 4,
    src: '/lovable-uploads/60cda6fe-1875-42d0-8cb4-94e5e1b92b7f.png',
    alt: '仙侠风格艺术图4'
  },
  {
    id: 5,
    src: '/lovable-uploads/1f30623e-230a-4b29-af8a-6d2a55908221.png',
    alt: '仙侠风格艺术图5'
  }
];

interface ImageCarouselBackgroundProps {
  variant?: 'default' | 'cooperation' | 'achievements';
}

const ImageCarouselBackground = ({ variant = 'default' }: ImageCarouselBackgroundProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 自动轮播 - 每6秒切换一张图片
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // 先变暗，然后切换图片
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % carouselImages.length
        );
        setIsTransitioning(false);
      }, 600); // 变暗持续600ms
    }, 6000); // 改为6秒切换

    return () => clearInterval(interval);
  }, []);

  // 预加载图片
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = carouselImages.map(image => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = image.src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        setIsLoaded(true); // 即使失败也继续显示
      }
    };

    preloadImages();
  }, []);

  // 根据页面变体调整滤镜效果
  const getFilterStyle = (variant: string) => {
    switch (variant) {
      case 'cooperation':
        return 'grayscale(30%) brightness(0.7) contrast(1.1)';
      case 'achievements':
        return 'hue-rotate(20deg) brightness(0.8) contrast(1.2)';
      default:
        return 'brightness(0.6) contrast(1.1)';
    }
  };

  if (!isLoaded) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* 轮播图片容器 */}
      <div className="relative w-full h-full">
        <img
          src={carouselImages[currentImageIndex].src}
          alt={carouselImages[currentImageIndex].alt}
          className="w-full h-full object-cover"
          style={{
            filter: getFilterStyle(variant)
          }}
        />
        
        {/* 切换时的黑色遮罩 */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-600 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* 图片上的渐变遮罩 */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(45deg, 
                rgba(0, 0, 0, 0.7) 0%, 
                rgba(0, 0, 0, 0.4) 25%,
                rgba(0, 0, 0, 0.3) 50%, 
                rgba(0, 0, 0, 0.5) 75%,
                rgba(0, 0, 0, 0.8) 100%),
              radial-gradient(circle at center, 
                rgba(59, 130, 246, 0.1) 0%, 
                rgba(0, 0, 0, 0.6) 70%)
            `
          }}
        />
      </div>

      {/* 动态粒子效果叠加 */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselBackground;
