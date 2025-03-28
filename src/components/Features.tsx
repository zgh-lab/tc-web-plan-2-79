
import { useEffect, useRef, useState } from 'react';
import { Cpu, Server, Database, BrainCircuit, Cloud, Rocket, Shield, Activity, Zap, HardHat, Shirt, UserCheck } from "lucide-react";

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
  
  const features = [
    {
      icon: <Shirt className="w-10 h-10 text-blue-500 transition-transform duration-300 transform" />,
      title: "Smart Apparel",
      description: "Advanced textile sensors integrated into clothing for real-time biometric monitoring and motion analysis."
    },
    {
      icon: <Activity className="w-10 h-10 text-blue-500 transition-transform duration-300 transform" />,
      title: "Sports Performance",
      description: "Specialized fabrics that analyze form, provide instant feedback, and help prevent injuries in athletic equipment."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500 transition-transform duration-300 transform" />,
      title: "Military & Defense",
      description: "Tactical gear with embedded sensors for soldier health monitoring, environmental awareness, and enhanced safety."
    },
    {
      icon: <HardHat className="w-10 h-10 text-blue-500 transition-transform duration-300 transform" />,
      title: "Industrial Safety",
      description: "Protective workwear that detects hazards, monitors fatigue, and prevents workplace injuries through early intervention."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-blue-500 transition-transform duration-300 transform" />,
      title: "Professional Wellness",
      description: "Office attire integrated with sensors that encourage movement, proper posture, and stress reduction for white-collar workers."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-500 transition-transform duration-300 transform" />,
      title: "Thermal Regulation",
      description: "Adaptive heating and cooling textiles that respond to body temperature and environmental conditions."
    }
  ];
  
  return (
    <section id="features" className="relative bg-white overflow-hidden py-[80px] w-full">
      {/* White to blue fade gradient at top */}
      <div className="absolute inset-0 w-full h-24 bg-gradient-to-b from-blue-500 to-white opacity-100"></div>
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}>
        <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Textile Sensor Applications
          </div>
          <h2 className="text-3xl font-bold mb-3 relative text-blue-600">
            Innovative Solutions Across All Industries
          </h2>
          <p className="text-blue-600 mt-4">
            Our textile sensor technology transforms ordinary fabrics into intelligent interfaces that collect data, monitor conditions, and enhance performance across diverse sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => <div key={index} className="feature-item bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-200 transform hover:-translate-y-1" style={{
          transitionDelay: `${index * 100}ms`
        }} onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)}>
              <div className="mb-3 inline-block p-3 bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-110">
                <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-blue-600">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
              <div className={`w-0 h-0.5 bg-blue-500 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : ''}`}></div>
            </div>)}
        </div>
      </div>
      {/* White to blue fade gradient at bottom - longer fade effect */}
      <div className="absolute bottom-0 inset-x-0 w-full h-24 bg-gradient-to-t from-blue-500 to-white opacity-100"></div>
    </section>
  );
};

export default Features;
