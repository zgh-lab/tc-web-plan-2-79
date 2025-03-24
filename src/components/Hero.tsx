
import { useRef } from 'react';
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative pt-16">
      {/* Banner Image */}
      <div className="banner-container">
        <img 
          src="https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=2079&auto=format&fit=crop" 
          alt="AI-Powered Sensor Technology" 
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1 className="banner-title">End-to-End AI-Powered Sensor Solutions</h1>
          <p className="banner-subtitle">
            We build prototypes, handle manufacturing and licensing, and provide continuous support—giving you 100% ownership of your product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
          <div className="glass-card p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Sensors</h3>
            <p className="text-gray-600">Custom motion sensors with embedded AI for real-time data analytics.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg text-blue-500 mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI/ML Integration</h3>
            <p className="text-gray-600">Advanced algorithms tailored to your specific product requirements.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift">
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
