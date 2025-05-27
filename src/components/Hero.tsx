
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

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
        <div className="absolute inset-0 bg-transparent w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/50"></div>
          {/* Added bottom gradient overlay for better transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        
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
              <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
                <h1 className={`${isMobile ? 'text-[2.5rem]' : 'text-[7rem]'} font-bold text-white tracking-wider whitespace-nowrap elegant-title`}>
                  <span className="text-white font-extralight">G-bits</span>
                  <span className="text-white font-normal"> 技术中心</span>
                </h1>
              </motion.div>
              {/* Moved the mission statement down by adjusting the margin-top */}
              <motion.p className="text-white text-lg md:text-xl lg:text-2xl mb-8 opacity-90 mt-[10px]" variants={itemVariants}>
                我们的使命是用技术为项目赋能，我们的愿景是成为行业技术标杆
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Circular scroll down indicator - now positioned higher */}
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
