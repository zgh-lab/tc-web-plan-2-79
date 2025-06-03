import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect } from "react";
import ThreeDBackground from "./ThreeDBackground";
import ParticleTitle from "./ParticleTitle";

const Hero = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  
  // 使用 useScroll 监听滚动进度
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // 基于滚动进度创建动画值
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // 背景动画值
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  
  // 鼠标移动交互
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // 更新CSS变量用于背景渐变
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <motion.div 
      ref={ref}
      className="relative mt-16 md:mt-0 w-full max-w-[100vw]" 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
    >
      <div className="banner-container bg-transparent relative overflow-hidden h-[100vh] w-full">
        <motion.div 
          className="absolute inset-0 w-full"
          style={{
            y: backgroundY,
            opacity: backgroundOpacity
          }}
        >
          <ThreeDBackground />
        </motion.div>
        
        <motion.div 
          className="banner-overlay bg-transparent pt-21 md:pt-24 w-full"
          style={{
            opacity,
            scale,
            y
          }}
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-full text-center" variants={itemVariants}>
              {/* 增强的粒子标题效果 */}
              <motion.div className="relative h-40 mb-8" variants={itemVariants}>
                <ParticleTitle />
                {/* 提高后备文字透明度和增强效果 */}
                <h1 className={`${isMobile ? 'text-[2.5rem]' : 'text-[7rem]'} font-bold text-white tracking-wider whitespace-nowrap elegant-title absolute inset-0 flex items-center justify-center opacity-25`}>
                  <span className="text-white font-extralight">G-bits</span>
                  <span className="text-white font-normal"> 技术中心</span>
                </h1>
              </motion.div>
              
              <motion.p className="text-white text-lg md:text-xl lg:text-2xl mb-8 opacity-95 mt-[10px]" variants={itemVariants}>
                我们的使命是用技术为项目赋能，我们的愿景是成为行业技术标杆
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* 滚动指示器 */}
        <motion.div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ opacity }}
        >
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/70"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={18} className="text-white/90" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
