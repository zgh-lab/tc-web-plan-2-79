
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <div className="banner-container bg-black relative overflow-hidden h-[100vh] w-full">
        <div className="absolute inset-0 bg-black w-full">
          <img src="/lovable-uploads/ad035e58-e29d-4fe6-8c92-a5392cdeb028.png" alt="G-bits Technology Center" 
               className={`w-full h-full object-cover opacity-100 ${isMobile ? 'object-center' : 'object-[70%_center]'}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/50"></div>
        </div>
        
        
        <div className="banner-overlay bg-transparent pt-21 md:pt-24 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.div className="flex items-center justify-center mb-8" variants={itemVariants}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light">
                  <span className="text-white font-bold">G</span>
                  <span className="text-white">-</span>
                  <span className="text-blue-400 font-bold">bits</span>
                  <span className="text-white">技术中心</span>
                </h1>
              </motion.div>
              <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 justify-center" variants={itemVariants}>
                <Link 
                  to="/tech-cooperation" 
                  className="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-300/20 flex items-center justify-center group text-sm md:text-base"
                >
                  技术合作
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/achievements" 
                  className="px-6 md:px-8 py-2 md:py-3 bg-gray-700/70 backdrop-blur-sm text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm md:text-base"
                >
                  成果展示
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        
        <div className="absolute bottom-10 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 z-10">
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6" variants={containerVariants} initial="hidden" animate="visible" transition={{
            delay: 0.6
          }}>
            <motion.div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-500/20 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[220px] md:min-h-[260px]" variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-white">游戏开发</h3>
              <p className="text-gray-200 text-sm md:text-base">专业游戏开发技术与解决方案，打造卓越的游戏体验。</p>
            </motion.div>
            
            <motion.div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-500/20 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[220px] md:min-h-[260px]" variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-white">人工智能</h3>
              <p className="text-gray-200 text-sm md:text-base">应用前沿AI技术，为游戏带来智能化升级与创新体验。</p>
            </motion.div>
            
            <motion.div className="bg-black/20 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-blue-500/20 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md min-h-[220px] md:min-h-[260px]" variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 md:mb-3 text-white">云计算</h3>
              <p className="text-gray-200 text-sm md:text-base">高效可靠的云计算基础设施，支持游戏产业数字化转型。</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>;
};

export default Hero;
