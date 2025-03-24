
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Banner with the provided image */}
      <div className="banner-container bg-white relative overflow-hidden h-[450px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-white">
          <img 
            src="/lovable-uploads/761e2d9d-3a1c-458b-9848-dd1d7b42d1b9.png" 
            alt="WRLDS Technologies Connected People" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-500 bg-opacity-5"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="banner-title text-gray-800 animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold">
              End-to-End AI-Powered Sensor Solutions
            </h1>
            <p className="banner-subtitle text-gray-600 animate-fade-in animation-delay-200 max-w-2xl mx-auto mt-4">
              We build prototypes, handle manufacturing and licensing, and provide continuous support—giving you 100% ownership of your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 animate-fade-in animation-delay-400">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-300/20 flex items-center justify-center group"
              >
                View Our Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#process" 
                className="px-8 py-3 bg-white border border-blue-200 text-gray-800 rounded-md hover:bg-blue-50 transition-all flex items-center justify-center"
              >
                Our Process
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-3">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Sensors</h3>
            <p className="text-gray-600 text-sm">Custom motion sensors with embedded AI for real-time data analytics.</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-100">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-3">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI/ML Integration</h3>
            <p className="text-gray-600 text-sm">Advanced algorithms tailored to your specific product requirements.</p>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md animation-delay-200">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-3">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Full Support</h3>
            <p className="text-gray-600 text-sm">Continuous updates, error handling, and maintenance for your products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
