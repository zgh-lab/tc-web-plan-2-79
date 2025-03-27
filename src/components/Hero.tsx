
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return <div className="relative mt-16 md:mt-0 w-full max-w-[100vw]">
      {/* Banner with the provided image */}
      <div className="banner-container bg-blue-500 relative overflow-hidden h-[450px] md:h-[500px] w-full">
        {/* Background Image with blue fade overlay */}
        <div className="absolute inset-0 bg-blue-500 w-full">
          <img 
            src="/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png" 
            alt="WRLDS Technologies Connected People" 
            className={`w-full h-full object-cover opacity-30 contrast-125 brightness-90 ${isMobile ? 'object-right' : 'object-center'}`} 
            // Added contrast-125 and brightness-90, reduced opacity for better contrast
          />
          {/* Blue fade overlay - positioned at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-28 md:pt-28 w-full">
          <div className={`w-full mx-auto ${isMobile ? 'px-4' : 'px-4 sm:px-6 lg:px-8'} flex flex-col items-start justify-center h-full`}>
            <div className={`${isMobile ? 'w-full' : 'max-w-xl'} text-left`}>
              <h1 className="banner-title text-white animate-fade-in text-3xl md:text-5xl lg:text-6xl font-bold">
                Revolutionary Textile <span className="text-white text-[1.1em] font-extrabold">Sensor</span> Technology
              </h1>
              <p className="banner-subtitle text-white animate-fade-in animation-delay-200 mt-4 md:mt-6 text-sm md:text-base">
                We integrate AI-powered textile sensors into clothing, footwear, and wearables—transforming everyday garments into intelligent data collection devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 animate-fade-in animation-delay-400">
                <a href="#projects" className="px-6 md:px-8 py-2 md:py-3 bg-white text-blue-500 rounded-md hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-700/20 flex items-center justify-center group text-sm md:text-base">
                  Explore Projects
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#process" className="px-6 md:px-8 py-2 md:py-3 bg-blue-600 border border-blue-400 text-white rounded-md hover:bg-blue-700 transition-all flex items-center justify-center text-sm md:text-base">
                  Our Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-blue-600 p-4 md:p-5 rounded-xl shadow-sm border border-blue-400 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-700 flex items-center justify-center rounded-lg text-white mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-white">Smart Textiles</h3>
            <p className="text-white text-xs md:text-sm">Intelligent fabric sensors that seamlessly integrate into clothing and footwear.</p>
          </div>
          
          <div className="bg-blue-600 p-4 md:p-5 rounded-xl shadow-sm border border-blue-400 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-700 flex items-center justify-center rounded-lg text-white mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-white">Adaptive AI</h3>
            <p className="text-white text-xs md:text-sm">Industry-specific algorithms that transform textile sensor data into meaningful insights.</p>
          </div>
          
          <div className="bg-blue-600 p-4 md:p-5 rounded-xl shadow-sm border border-blue-400 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-200">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-700 flex items-center justify-center rounded-lg text-white mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-white">Cross-Industry</h3>
            <p className="text-white text-xs md:text-sm">Solutions for sports, military, healthcare, industrial, and professional environments.</p>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
