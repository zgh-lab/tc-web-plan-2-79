import { ArrowRight, Code, Cpu, Layers } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero = () => {
  const isMobile = useIsMobile();
  return <div className="relative mt-16 md:mt-0"> {/* Added explicit top margin to create space below navbar */}
      {/* Banner with the provided image */}
      <div className="banner-container bg-white relative overflow-hidden h-[450px] md:h-[500px]">
        {/* Background Image with white fade overlay */}
        <div className="absolute inset-0 bg-white">
          <img src="/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png" alt="WRLDS Technologies Connected People" className={`w-full h-full object-cover ${isMobile ? 'object-right' : 'object-center'}`} />
          {/* White fade overlay - positioned at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-28 md:pt-28"> {/* Adjusted padding top for both mobile and desktop */}
          <div className="max-w-7xl w-full mx-auto sm:px-6 lg:px-8 flex flex-col items-start justify-center h-full px-0">
            <div className={`${isMobile ? 'pr-0' : 'max-w-xl'} text-left`}> {/* Adjusted max-width based on mobile */}
              <h1 className="banner-title text-black animate-fade-in text-3xl md:text-5xl lg:text-6xl font-bold">
                End-to-End AI-Powered Sensor Solutions
              </h1>
              <p className="banner-subtitle text-black animate-fade-in animation-delay-200 mt-4 md:mt-6 text-sm md:text-base"> {/* Adjusted spacing to 20-30px */}
                We build prototypes, handle manufacturing and licensing, and provide continuous support—giving you 100% ownership of your product.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 animate-fade-in animation-delay-400"> {/* Adjusted spacing to 20-30px */}
                <a href="#projects" className="px-6 md:px-8 py-2 md:py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-300/20 flex items-center justify-center group text-sm md:text-base">
                  View Our Projects
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#process" className="px-6 md:px-8 py-2 md:py-3 bg-white border border-blue-200 text-gray-800 rounded-md hover:bg-blue-50 transition-all flex items-center justify-center text-sm md:text-base">
                  Our Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Smart Sensors</h3>
            <p className="text-gray-600 text-xs md:text-sm">Custom motion sensors with embedded AI for real-time data analytics.</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">AI/ML Integration</h3>
            <p className="text-gray-600 text-xs md:text-sm">Advanced algorithms tailored to your specific product requirements.</p>
          </div>
          
          <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-200">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-2 md:mb-3">
              <Layers className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Full Support</h3>
            <p className="text-gray-600 text-xs md:text-sm">Continuous updates, error handling, and maintenance for your products.</p>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;