
import { useRef, useEffect } from 'react';
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animate the shapes
    const circles = svgRef.current?.querySelectorAll('circle');
    
    if (circles) {
      circles.forEach((circle, index) => {
        // Create floating animation
        const duration = 3 + (index % 3);
        const delay = index * 0.5;
        
        circle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;
      });
    }

    // Animate the lines with pulsing effect
    const lines = svgRef.current?.querySelectorAll('path');
    
    if (lines) {
      lines.forEach((line, index) => {
        const delay = index * 0.3;
        line.style.animation = `pulse-line 4s ease-in-out ${delay}s infinite`;
      });
    }

  }, []);

  return (
    <div className="relative pt-16">
      {/* Banner with Abstract Blue Shapes */}
      <div className="banner-container bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <svg 
            ref={svgRef} 
            width="100%" 
            height="100%" 
            viewBox="0 0 1200 400" 
            preserveAspectRatio="xMidYMid slice" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="blue-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="blue-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <linearGradient id="blue-gradient-3" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            
            {/* Abstract Shapes */}
            <path d="M300,220 Q350,180 400,220 T500,180 T600,220 T700,180" fill="none" stroke="#BFDBFE" strokeWidth="1" className="animate-path" />
            <path d="M200,250 Q300,200 400,250 T600,200 T800,250" fill="none" stroke="#93C5FD" strokeWidth="1" className="animate-path" />
            
            {/* Shapes */}
            <circle cx="200" cy="150" r="60" fill="url(#blue-gradient-1)" opacity="0.7" className="animate-circle" />
            <circle cx="400" cy="220" r="40" fill="url(#blue-gradient-2)" opacity="0.6" className="animate-circle" />
            <circle cx="600" cy="180" r="50" fill="url(#blue-gradient-3)" opacity="0.8" className="animate-circle" />
            <circle cx="800" cy="220" r="45" fill="url(#blue-gradient-1)" opacity="0.7" className="animate-circle" />
            <circle cx="950" cy="150" r="55" fill="url(#blue-gradient-2)" opacity="0.6" className="animate-circle" />
            
            {/* Connecting Lines */}
            <path d="M200,150 C300,100 350,240 400,220" fill="none" stroke="#BFDBFE" strokeWidth="1.5" className="animate-line" />
            <path d="M400,220 C500,180 550,200 600,180" fill="none" stroke="#BFDBFE" strokeWidth="1.5" className="animate-line" />
            <path d="M600,180 C700,150 750,190 800,220" fill="none" stroke="#BFDBFE" strokeWidth="1.5" className="animate-line" />
            <path d="M800,220 C850,250 900,180 950,150" fill="none" stroke="#BFDBFE" strokeWidth="1.5" className="animate-line" />
          </svg>
        </div>
        
        <div className="banner-overlay bg-transparent">
          <h1 className="banner-title text-gray-800 animate-fade-in">End-to-End AI-Powered Sensor Solutions</h1>
          <p className="banner-subtitle text-gray-600 animate-fade-in animation-delay-200">
            We build prototypes, handle manufacturing and licensing, and provide continuous support—giving you 100% ownership of your product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in animation-delay-400">
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
      
      <div className="section-container relative z-10 pt-8">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl hover-lift transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Sensors</h3>
            <p className="text-gray-600">Custom motion sensors with embedded AI for real-time data analytics.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animation-delay-100">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI/ML Integration</h3>
            <p className="text-gray-600">Advanced algorithms tailored to your specific product requirements.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animation-delay-200">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Full Support</h3>
            <p className="text-gray-600">Continuous updates, error handling, and maintenance for your products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
