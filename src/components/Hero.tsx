
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return <div className="relative mt-16 md:mt-0 w-full max-w-[100vw]">
      {/* Banner with image and gradient overlay */}
      <div className="banner-container relative overflow-hidden h-[450px] md:h-[500px] w-full bg-gradient-to-r from-blue-600 to-blue-500">
        {/* Background Image with fade overlay */}
        <div className="absolute inset-0 w-full">
          <img 
            src="/lovable-uploads/818a3d3c-18a3-43ec-a580-c326a1d69265.png" 
            alt="WRLDS Technologies Textile Sensors" 
            className={`w-full h-full object-cover opacity-50 ${isMobile ? 'object-right' : 'object-center'}`}
          />
          {/* Dark gradient overlay - more subtle blue */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-blue-700/60"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-28 md:pt-28 w-full">
          <div className={`w-full mx-auto ${isMobile ? 'px-0 pr-4' : 'px-4 sm:px-6 lg:px-8'} flex flex-col items-start justify-center h-full`}>
            <div className={`${isMobile ? 'w-full' : 'max-w-xl'} text-left`}>
              <h1 className="banner-title text-white animate-fade-in text-3xl md:text-5xl lg:text-6xl font-bold">
                Revolutionary Textile <span className="text-white text-[1.1em] font-extrabold">Sensor</span> Technology
              </h1>
              <p className="banner-subtitle text-white animate-fade-in animation-delay-200 mt-4 md:mt-6 text-sm md:text-base">
                We integrate AI-powered textile sensors into clothing, footwear, and wearables—transforming everyday garments into intelligent data collection devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 animate-fade-in animation-delay-400">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl" asChild>
                  <a href="#projects">
                    Explore Projects
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                  <a href="#process">Our Process</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Card 1 - Smart Textiles */}
          <div className="group relative overflow-hidden rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1558598942-7c6733c0203e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Smart Textile Fabric" 
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 md:p-5 relative z-20 text-white h-full flex flex-col">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-lg mb-2 md:mb-3">
                <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Smart Textiles</h3>
              <p className="text-white/90 text-xs md:text-sm">Intelligent fabric sensors that seamlessly integrate into clothing and footwear.</p>
            </div>
          </div>
          
          {/* Card 2 - Adaptive AI */}
          <div className="group relative overflow-hidden rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 to-blue-600/70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AI Technology" 
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 md:p-5 relative z-20 text-white h-full flex flex-col">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-lg mb-2 md:mb-3">
                <Code className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Adaptive AI</h3>
              <p className="text-white/90 text-xs md:text-sm">Industry-specific algorithms that transform textile sensor data into meaningful insights.</p>
            </div>
          </div>
          
          {/* Card 3 - Cross-Industry */}
          <div className="group relative overflow-hidden rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700/80 to-blue-500/70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Multiple Industries" 
              className="w-full h-full object-cover absolute inset-0 transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-4 md:p-5 relative z-20 text-white h-full flex flex-col">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-lg mb-2 md:mb-3">
                <Layers className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Cross-Industry</h3>
              <p className="text-white/90 text-xs md:text-sm">Solutions for sports, military, healthcare, industrial, and professional environments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default Hero;
