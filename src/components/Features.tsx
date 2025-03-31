
import { useEffect, useRef, useState } from 'react';
import { Cpu, Server, Database, BrainCircuit, Cloud, Rocket, Shield, Activity, Zap, HardHat, Shirt, UserCheck } from "lucide-react";
import { cn } from '@/lib/utils';

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
      image: "/lovable-uploads/e2f944f7-0d40-4c33-8ce1-30ef7cd3a4b0.png"
    },
    {
      icon: <Activity className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Sports Performance",
      description: "Specialized fabrics that analyze form, provide instant feedback, and help prevent injuries in athletic equipment.",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png"
    },
    {
      icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Military & Defense",
      description: "Tactical gear with embedded sensors for soldier health monitoring, environmental awareness, and enhanced safety.",
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
    },
    {
      icon: <HardHat className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Industrial Safety",
      description: "Protective workwear that detects hazards, monitors fatigue, and prevents workplace injuries through early intervention.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png"
    },
    {
      icon: <UserCheck className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Professional Wellness",
      description: "Office attire integrated with sensors that encourage movement, proper posture, and stress reduction for white-collar workers.",
      image: "/lovable-uploads/6fdd3d0d-5dca-470a-a845-bd7b07bff599.png"
    },
    {
      icon: <Zap className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Thermal Regulation",
      description: "Adaptive heating and cooling textiles that respond to body temperature and environmental conditions.",
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png"
    }
  ];
  
  return <section id="features" className="relative bg-white overflow-hidden py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
        <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
          <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            Textile Sensor Applications
          </div>
          <h2 className="text-3xl font-bold mb-3 relative">
            Innovative Solutions Across All Industries
          </h2>
          <p className="text-gray-600 mt-4">
            Our textile sensor technology transforms ordinary fabrics into intelligent interfaces that collect data, monitor conditions, and enhance performance across diverse sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 h-[280px] relative shadow-lg" 
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredFeature(index)} 
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Background image with black overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover grayscale"
                />
                <div className={cn(
                  "absolute inset-0 bg-black/60 transition-opacity duration-300",
                  hoveredFeature === index ? "opacity-50" : "opacity-70"
                )}></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                <div>
                  <div className="mb-4 inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110">
                    <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/90 text-sm">{feature.description}</p>
                </div>
                <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};

export default Features;
