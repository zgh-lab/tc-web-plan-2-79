
import { ArrowRight, Code, Cpu, Layers, MousePointer, ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

const Hero = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  
  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const cards = [
    {
      icon: <Cpu className="w-10 h-10 text-white" />,
      title: "Smart Textiles",
      description: "Intelligent fabric sensors that seamlessly integrate into clothing and footwear."
    },
    {
      icon: <Code className="w-10 h-10 text-white" />,
      title: "Adaptive AI",
      description: "Industry-specific algorithms that transform textile sensor data into meaningful insights."
    },
    {
      icon: <Layers className="w-10 h-10 text-white" />,
      title: "Cross-Industry",
      description: "Solutions for sports, military, healthcare, industrial, and professional environments."
    }
  ];
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black to-blue-900">
      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full opacity-30">
          <img 
            src="/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png" 
            alt="WRLDS Technologies" 
            className="w-full h-full object-cover"
            style={{ 
              transform: `translateY(${scrolled ? -20 : 0}px)`,
              transition: "transform 0.5s ease-out"
            }}
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/60 to-blue-900/80"></div>
        
        {/* Interactive particles/dots for decoration */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-500/30 animate-pulse-slow"
              style={{
                width: Math.random() * 10 + 5 + "px",
                height: Math.random() * 10 + 5 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: Math.random() * 5 + "s",
                animationDuration: Math.random() * 8 + 4 + "s"
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated logo appearance */}
          <div className="mb-8 transform transition-all duration-700 hover:scale-110">
            <img 
              src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
              alt="WRLDS Technologies Logo" 
              className="h-16 sm:h-20 mx-auto"
            />
          </div>
          
          {/* Animated title with typing effect - Fixed spacing issue by adding mb-2 to the first span */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 relative overflow-hidden">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white mb-2 inline-block">
              Revolutionary Textile 
            </span>
            <br />
            <span className="text-blue-500 relative inline-block mt-2">
              Sensor
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 animate-pulse"></span>
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-white"> Technology</span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            We integrate AI-powered textile sensors into clothing, footwear, and wearables—transforming everyday garments into intelligent data collection devices.
          </p>
          
          {/* Interactive CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg overflow-hidden transition-all hover:bg-blue-500 shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center justify-center text-lg font-medium">
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            
            <a 
              href="#process" 
              className="group relative px-8 py-4 bg-transparent text-white border border-blue-500 rounded-lg overflow-hidden transition-all hover:border-blue-300"
            >
              <span className="relative z-10 flex items-center justify-center text-lg font-medium">
                Our Process
              </span>
              <span className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
          
          {/* Interactive card showcase - Made container taller (h-96 instead of h-72) to fit all content */}
          <div className="relative h-96 w-full max-w-3xl mx-auto">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-500 flex flex-col items-center justify-center p-8 rounded-2xl backdrop-blur-md border border-blue-500/30 
                  ${index === activeCard 
                    ? 'opacity-100 transform-none z-30' 
                    : index === (activeCard + 1) % 3 
                      ? 'opacity-60 translate-x-[40%] scale-90 z-20' 
                      : 'opacity-60 -translate-x-[40%] scale-90 z-20'}`}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 58, 138, 0.4) 100%)'
                }}
                onClick={() => setActiveCard(index)}
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-blue-600 mb-4 transform transition-transform hover:scale-110 hover:rotate-12">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-blue-200 text-center">{card.description}</p>
              </div>
            ))}
            
            {/* Card navigation */}
            <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
              {cards.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-3 h-3 rounded-full transition-all ${index === activeCard ? 'bg-blue-500 w-10' : 'bg-blue-500/50'}`}
                  onClick={() => setActiveCard(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <a href="#features" className="text-white opacity-80 hover:opacity-100">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <ArrowDown className="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
