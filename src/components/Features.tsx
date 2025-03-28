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
      icon: <Shirt className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Smart Apparel",
      description: "Advanced textile sensors integrated into clothing for real-time biometric monitoring and motion analysis.",
      backgroundImage: "https://images.unsplash.com/photo-1561214078-f3247647fc5e?auto=format&fit=crop&q=80"
    },
    {
      icon: <Activity className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Sports Performance",
      description: "Specialized fabrics that analyze form, provide instant feedback, and help prevent injuries in athletic equipment.",
      backgroundImage: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80"
    },
    {
      icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Military & Defense",
      description: "Tactical gear with embedded sensors for soldier health monitoring, environmental awareness, and enhanced safety.",
      backgroundImage: "https://images.unsplash.com/photo-1542457927-8b82e6e0b48c?auto=format&fit=crop&q=80"
    },
    {
      icon: <HardHat className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Industrial Safety",
      description: "Protective workwear that detects hazards, monitors fatigue, and prevents workplace injuries through early intervention.",
      backgroundImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
    },
    {
      icon: <UserCheck className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Professional Wellness",
      description: "Office attire integrated with sensors that encourage movement, proper posture, and stress reduction for white-collar workers.",
      backgroundImage: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80"
    },
    {
      icon: <Zap className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Thermal Regulation",
      description: "Adaptive heating and cooling textiles that respond to body temperature and environmental conditions.",
      backgroundImage: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&q=80"
    }
  ];
  
  return <section id="features" className="relative bg-blue-500 overflow-hidden py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}>
        <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
            Textile Sensor Applications
          </div>
          <h2 className="text-3xl font-bold mb-3 relative text-white">
            Innovative Solutions Across All Industries
          </h2>
          <p className="text-white mt-4">
            Our textile sensor technology transforms ordinary fabrics into intelligent interfaces that collect data, monitor conditions, and enhance performance across diverse sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item bg-blue-600 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-400 transform hover:-translate-y-1 relative overflow-hidden" 
              style={{
                transitionDelay: `${index * 100}ms`
              }} 
              onMouseEnter={() => setHoveredFeature(index)} 
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="absolute inset-0 opacity-20">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${feature.backgroundImage}')` }}
                ></div>
              </div>
              <div className="relative z-10">
                <div className="flex flex-col mb-3">
                  <div className="flex items-start justify-between">
                    <div className="mb-3 inline-block p-3 bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-110">
                      <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white text-sm">{feature.description}</p>
                <div className={`w-0 h-0.5 bg-white mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Features;
