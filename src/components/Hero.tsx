
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import ParticleTitle from './ParticleTitle';
import BlueParticleBackground from './BlueParticleBackground';

const Hero = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  
  // 使用 useScroll 监听滚动进度
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
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
        {/* 蓝色粒子背景层 - 调整到最底层 */}
        <div className="absolute inset-0 z-0">
          <BlueParticleBackground />
        </div>
        
        {/* 粒子背景层 */}
        <div className="absolute inset-0 z-[1]">
          <ParticleTitle />
        </div>
        
        <motion.div 
          className="banner-overlay bg-transparent pt-21 md:pt-24 w-full relative z-[2]"
          style={{
            opacity,
            scale,
            y
          }}
        >
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-full text-center" variants={itemVariants}>
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight"
                variants={itemVariants}
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontWeight: 550,
                  letterSpacing: '-0.025em'
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              >
                <span 
                  className="text-sky-300"
                  style={{
                    textShadow: '0 0 10px rgba(125, 211, 252, 0.3), 0 0 20px rgba(125, 211, 252, 0.1), 0 4px 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  G-
                </span>
                <span 
                  className="text-white"
                  style={{
                    textShadow: '0 4px 20px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  bits 技术中心
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-200 text-lg md:text-xl lg:text-2xl mb-8 opacity-90 mt-[15px]" 
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  color: 'rgba(229, 231, 235, 1)',
                  transition: { duration: 0.4 }
                }}
              >
                我们的使命是用技术为项目赋能，我们的愿景是成为行业技术标杆
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* 滚动指示器 */}
        <motion.div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-[3]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ opacity }}
          onClick={() => {
            const scrollTarget = document.getElementById('content-section');
            if (scrollTarget) {
              scrollTarget.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          whileHover={{ 
            scale: 1.2, 
            transition: { duration: 0.3 } 
          }}
        >
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/70 hover:border-white/90 transition-colors"
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
