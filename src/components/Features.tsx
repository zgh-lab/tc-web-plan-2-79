import { useEffect, useRef, useState } from 'react';
import { Cpu, Server, Database, BrainCircuit, Cloud, Rocket } from "lucide-react";
const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          // Make sure the element remains visible after animation
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
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
  const features = [{
    icon: <Cpu className="w-10 h-10 text-wrlds-teal transition-transform duration-300 transform" />,
    title: "Motion Sensors",
    description: "Cutting-edge motion sensing technology that captures precise movements and real-time data."
  }, {
    icon: <BrainCircuit className="w-10 h-10 text-wrlds-teal transition-transform duration-300 transform" />,
    title: "AI/ML Integration",
    description: "Sophisticated machine learning algorithms that transform raw data into actionable insights."
  }, {
    icon: <Database className="w-10 h-10 text-wrlds-teal transition-transform duration-300 transform" />,
    title: "Embedded Software",
    description: "Custom software solutions that optimize performance while minimizing power consumption."
  }, {
    icon: <Cloud className="w-10 h-10 text-wrlds-teal transition-transform duration-300 transform" />,
    title: "Cloud Integration",
    description: "Seamless cloud connectivity for data storage, analysis, and remote management capabilities."
  }, {
    icon: <Rocket className="w-10 h-10 text-wrlds-teal transition-transform duration-300 transform" />,
    title: "Mechanical Engineering",
    description: "Precision-engineered hardware designs that ensure durability and optimal performance."
  }, {
    icon: <Server className="w-10 h-10 text-wrlds-teal transition-transform duration-300 transform" />,
    title: "End-to-End Platform",
    description: "Complete solution from concept to production, with ongoing support and updates."
  }];
  return <section id="features" className="relative bg-white overflow-hidden py-[25px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={featuresRef}>
        <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-wrlds-teal rounded-full text-sm font-medium">
            Our Services
          </div>
          <h2 className="text-3xl font-bold mb-3 relative">
            Comprehensive Technologies for Smart Products
          </h2>
          <p className="text-gray-600 mt-4">
            We combine cutting-edge AI, sensor technology, and engineering expertise to create intelligent products that transform industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => <div key={index} className="feature-item bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1" style={{
          transitionDelay: `${index * 100}ms`
        }} onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)}>
              <div className="mb-3 inline-block p-3 bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-110">
                <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              <div className={`w-0 h-0.5 bg-blue-500 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : ''}`}></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Features;