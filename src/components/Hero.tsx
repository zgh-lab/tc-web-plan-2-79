
import { useRef, useEffect } from 'react';
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate the shapes with more varied movement
    const shapes = svgRef.current?.querySelectorAll('.shape');
    
    if (shapes) {
      shapes.forEach((shape, index) => {
        // Create more dynamic animations with different durations and directions
        const duration = 3 + (index % 4);
        const delay = index * 0.4;
        
        // Randomize animation properties for more varied movement
        const direction = index % 2 === 0 ? 'alternate' : 'alternate-reverse';
        shape.style.animation = `float ${duration}s ease-in-out ${delay}s infinite ${direction}`;
        
        // Add slight rotation to some shapes
        if (index % 3 === 0) {
          shape.style.transformOrigin = 'center';
          shape.style.animationName = 'rotate-float';
        }
      });
    }

    // Animate the connecting lines with more dynamic effects
    const lines = svgRef.current?.querySelectorAll('path:not(.shape)');
    
    if (lines) {
      lines.forEach((line, index) => {
        const delay = index * 0.2;
        line.style.animation = `pulse-line 3s ease-in-out ${delay}s infinite`;
        line.style.strokeDasharray = '5,5';
        line.style.strokeDashoffset = String(index * 5);
      });
    }

  }, []);

  return (
    <div className="relative">
      {/* Banner with Abstract Blue Shapes */}
      <div className="banner-container bg-white relative overflow-hidden h-[450px]">
        <div className="absolute inset-0">
          <svg 
            ref={svgRef} 
            width="100%" 
            height="100%" 
            viewBox="0 0 1200 450" 
            preserveAspectRatio="xMidYMid slice" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Abstract Shapes */}
            <path d="M300,220 Q350,180 400,220 T500,180 T600,220 T700,180" fill="none" stroke="#BFDBFE" strokeWidth="1" />
            <path d="M200,250 Q300,200 400,250 T600,200 T800,250" fill="none" stroke="#93C5FD" strokeWidth="1" />
            
            {/* Rectangle (Data Collection) */}
            <rect x="150" y="150" width="80" height="60" rx="10" className="shape" fill="#3B82F6" opacity="0.7" />
            
            {/* Triangle (Processing) */}
            <polygon points="400,180 440,240 360,240" className="shape" fill="#3B82F6" opacity="0.7" />
            
            {/* Pentagon (Analysis) */}
            <polygon points="600,150 625,180 615,215 585,215 575,180" className="shape" fill="#3B82F6" opacity="0.7" />
            
            {/* Hexagon (Distribution) */}
            <polygon points="800,200 830,180 860,200 860,230 830,250 800,230" className="shape" fill="#3B82F6" opacity="0.7" />
            
            {/* Star (Insights) */}
            <polygon points="950,150 965,180 1000,180 975,200 985,230 950,215 915,230 925,200 900,180 935,180" className="shape" fill="#3B82F6" opacity="0.6" />
            
            {/* Connecting Lines - Data Flow */}
            <path d="M230,180 C300,100 350,240 400,210" fill="none" stroke="#BFDBFE" strokeWidth="1.5" />
            <path d="M400,220 C500,180 550,200 600,180" fill="none" stroke="#BFDBFE" strokeWidth="1.5" />
            <path d="M600,180 C700,150 750,190 800,210" fill="none" stroke="#BFDBFE" strokeWidth="1.5" />
            <path d="M800,210 C850,250 900,180 950,170" fill="none" stroke="#BFDBFE" strokeWidth="1.5" />
          </svg>
        </div>
        
        <div className="banner-overlay bg-transparent pt-8">
          <h1 className="banner-title text-gray-800 animate-fade-in">End-to-End AI-Powered Sensor Solutions</h1>
          <p className="banner-subtitle text-gray-600 animate-fade-in animation-delay-200 max-w-2xl mx-auto">
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
