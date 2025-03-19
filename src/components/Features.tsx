
import { useEffect, useRef } from 'react';
import { Cpu, Server, Database, BrainCircuit, Cloud, Rocket } from "lucide-react";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        el.classList.remove('animate-fade-in');
        // Fix for the error TS2339: Property 'style' does not exist on type 'Element'
        // We need to cast el to HTMLElement to access the style property
        (el as HTMLElement).style.opacity = '0';
        observer.observe(el);
      });
    }
    
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Cpu className="w-12 h-12 text-wrlds-teal" />,
      title: "Motion Sensors",
      description: "Cutting-edge motion sensing technology that captures precise movements and real-time data."
    },
    {
      icon: <BrainCircuit className="w-12 h-12 text-wrlds-teal" />,
      title: "AI/ML Integration",
      description: "Sophisticated machine learning algorithms that transform raw data into actionable insights."
    },
    {
      icon: <Database className="w-12 h-12 text-wrlds-teal" />,
      title: "Embedded Software",
      description: "Custom software solutions that optimize performance while minimizing power consumption."
    },
    {
      icon: <Cloud className="w-12 h-12 text-wrlds-teal" />,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity for data storage, analysis, and remote management capabilities."
    },
    {
      icon: <Rocket className="w-12 h-12 text-wrlds-teal" />,
      title: "Mechanical Engineering",
      description: "Precision-engineered hardware designs that ensure durability and optimal performance."
    },
    {
      icon: <Server className="w-12 h-12 text-wrlds-teal" />,
      title: "End-to-End Platform",
      description: "Complete solution from concept to production, with ongoing support and updates."
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-wrlds-light overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container" ref={featuresRef}>
        <div className="text-center mb-16 max-w-3xl mx-auto feature-item">
          <div className="inline-block mb-3 px-3 py-1 bg-wrlds-teal/10 text-wrlds-teal rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Technologies for Smart Products
          </h2>
          <p className="text-gray-600 text-lg">
            We combine cutting-edge AI, sensor technology, and engineering expertise to create intelligent products that transform industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 inline-block p-3 bg-wrlds-muted rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Features;
