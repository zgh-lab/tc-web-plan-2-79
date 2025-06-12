
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

  // 自动轮播 - 每4.5秒切换一张图片
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 4500);

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
      {/* 轮播图片容器 - 使用 AnimatePresence 实现更柔和的淡入淡出 */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={carouselImages[currentImageIndex].src}
            alt={carouselImages[currentImageIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: getFilterStyle(variant)
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut",
              scale: { duration: 2 }
            }}
          />
        </AnimatePresence>
        
        {/* 黑色背景层，在图片切换时显示 */}
        <div className="absolute inset-0 bg-black -z-10" />
        
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
