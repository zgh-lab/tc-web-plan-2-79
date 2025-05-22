
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
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
  
  return <motion.div className="relative mt-16 md:mt-0 w-full max-w-[100vw]" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-transparent relative overflow-hidden h-[100vh] w-full">
        <div className="absolute inset-0 bg-transparent w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/50"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-21 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-full text-center" variants={itemVariants}>
              <motion.div className="flex items-center justify-center mb-4" variants={itemVariants}>
                <h1 className={`${isMobile ? 'text-[2.5rem]' : 'text-[7rem]'} font-bold text-white tracking-wider whitespace-nowrap`}>
                  <span className="text-white">G-bits</span>
                  <span className="text-white"> 技术中心</span>
                </h1>
              </motion.div>
              <motion.p className="text-white text-lg md:text-xl lg:text-2xl mb-8 opacity-90" variants={itemVariants}>
                我们的使命是用技术为项目赋能，我们的愿景是成为行业技术标杆
              </motion.p>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-8 text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-sm mb-2 opacity-80">向下滚动</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={24} className="animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;
