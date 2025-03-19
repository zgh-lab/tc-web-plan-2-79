
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Code, Cpu, Layers } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const xOffset = ((x / rect.width) - 0.5) * 20;
      const yOffset = ((y / rect.height) - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.floating-element');
      elements.forEach((el, index) => {
        const factor = (index + 1) * 0.4;
        (el as HTMLElement).style.transform = `translate(${xOffset * factor}px, ${yOffset * factor}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-wrlds-accent/30 rounded-full filter blur-3xl opacity-60 floating-element"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-wrlds-teal/20 rounded-full filter blur-3xl opacity-50 floating-element"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center fade-in-stagger">
          <div className="inline-block mb-3 px-3 py-1 bg-wrlds-teal/10 text-wrlds-teal rounded-full text-sm font-medium">
            AI-Powered Smart Sensors
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            End-to-End <span className="text-wrlds-teal">AI Integration</span> for Smart Products
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We build prototypes, handle manufacturing and licensing, and provide continuous support—giving you 100% ownership of your product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-wrlds-teal text-white rounded-md hover:bg-wrlds-teal/90 transition-all shadow-lg hover:shadow-xl hover:shadow-wrlds-teal/20 flex items-center justify-center group"
            >
              View Our Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#process" 
              className="px-8 py-3 bg-white border border-wrlds-teal/20 text-wrlds-dark rounded-md hover:bg-wrlds-muted transition-all flex items-center justify-center"
            >
              Our Process
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-wrlds-teal/10 flex items-center justify-center rounded-lg text-wrlds-teal mb-4">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Sensors</h3>
            <p className="text-gray-600">Custom motion sensors with embedded AI for real-time data analytics.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-wrlds-teal/10 flex items-center justify-center rounded-lg text-wrlds-teal mb-4">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI/ML Integration</h3>
            <p className="text-gray-600">Advanced algorithms tailored to your specific product requirements.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover-lift">
            <div className="w-12 h-12 bg-wrlds-teal/10 flex items-center justify-center rounded-lg text-wrlds-teal mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Full Support</h3>
            <p className="text-gray-600">Continuous updates, error handling, and maintenance for your products.</p>
          </div>
        </div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
