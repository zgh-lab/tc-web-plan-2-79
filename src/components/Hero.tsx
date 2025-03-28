
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const Hero = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <motion.div 
      className="relative mt-16 md:mt-0 w-full max-w-[100vw]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Banner with the provided image */}
      <div className="banner-container bg-white relative overflow-hidden h-[450px] md:h-[500px] w-full">
        {/* Background Image with white fade overlay */}
        <div className="absolute inset-0 bg-white w-full">
          <img src="/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png" alt="WRLDS Technologies Connected People" className={`w-full h-full object-cover ${isMobile ? 'object-right' : 'object-center'}`} />
          {/* White fade overlay - positioned at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-28 md:pt-28 w-full">
          <div className={`w-full mx-auto ${isMobile ? 'px-4' : 'px-4 sm:px-6 lg:px-8'} flex flex-col items-start justify-center h-full`}>
            <motion.div className={`${isMobile ? 'w-full' : 'max-w-xl'} text-left`} variants={itemVariants}>
              <motion.h1 className="banner-title text-black text-3xl md:text-5xl lg:text-6xl font-bold" variants={itemVariants}>
                Revolutionary Textile <span className="text-blue-600 text-[1.1em]">Sensor</span> Technology
              </motion.h1>
              <motion.p className="banner-subtitle text-black mt-4 md:mt-6 text-sm md:text-base" variants={itemVariants}>
                We integrate AI-powered textile sensors into clothing, footwear, and wearables—transforming everyday garments into intelligent data collection devices.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8" variants={itemVariants}>
                <a href="#projects" className="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-300/20 flex items-center justify-center group text-sm md:text-base">
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#process" className="px-6 md:px-8 py-2 md:py-3 bg-white border border-blue-200 text-gray-800 rounded-md hover:bg-blue-50 transition-all flex items-center justify-center text-sm md:text-base">
                  Our Process
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div 
          className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Smart Textiles</h3>
            <p className="text-gray-600 text-xs md:text-sm">Intelligent fabric sensors that seamlessly integrate into clothing and footwear.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Adaptive AI</h3>
            <p className="text-gray-600 text-xs md:text-sm">Industry-specific algorithms that transform textile sensor data into meaningful insights.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            variants={itemVariants}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Cross-Industry</h3>
            <p className="text-gray-600 text-xs md:text-sm">Solutions for sports, military, healthcare, industrial, and professional environments.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
