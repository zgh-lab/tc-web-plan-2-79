
import { useEffect, useRef, useState } from 'react';
import { Cpu, Server, Database, BrainCircuit, Cloud, Rocket } from "lucide-react";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            // Make sure the element remains visible after animation
            (entry.target as HTMLElement).style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        // Only set initial opacity if not already animated
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Cpu className="w-12 h-12 text-wrlds-teal transition-transform duration-300 transform" />,
      title: "Motion Sensors",
      description: "Cutting-edge motion sensing technology that captures precise movements and real-time data."
    },
    {
      icon: <BrainCircuit className="w-12 h-12 text-wrlds-teal transition-transform duration-300 transform" />,
      title: "AI/ML Integration",
      description: "Sophisticated machine learning algorithms that transform raw data into actionable insights."
    },
    {
      icon: <Database className="w-12 h-12 text-wrlds-teal transition-transform duration-300 transform" />,
      title: "Embedded Software",
      description: "Custom software solutions that optimize performance while minimizing power consumption."
    },
    {
      icon: <Cloud className="w-12 h-12 text-wrlds-teal transition-transform duration-300 transform" />,
      title: "Cloud Integration",
      description: "Seamless cloud connectivity for data storage, analysis, and remote management capabilities."
    },
    {
      icon: <Rocket className="w-12 h-12 text-wrlds-teal transition-transform duration-300 transform" />,
      title: "Mechanical Engineering",
      description: "Precision-engineered hardware designs that ensure durability and optimal performance."
    },
    {
      icon: <Server className="w-12 h-12 text-wrlds-teal transition-transform duration-300 transform" />,
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Comprehensive Technologies for Smart Products
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full animate-pulse-slow"></div>
          </h2>
          <p className="text-gray-600 text-lg">
            We combine cutting-edge AI, sensor technology, and engineering expertise to create intelligent products that transform industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="mb-5 inline-block p-3 bg-wrlds-muted rounded-lg transition-all duration-300 transform hover:scale-110">
                <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className={`w-0 h-0.5 bg-blue-500 mt-4 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Features;
