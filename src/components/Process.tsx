import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check } from "lucide-react";

const processes = [
  {
    id: 1,
    title: "Textile Sensor Design",
    description: "We begin by designing custom textile sensors specifically for your industry and use case, selecting appropriate conductive materials and sensor types.",
    steps: ["Industry-specific requirement analysis", "Sensor type and material selection", "Prototype sensor development", "Initial testing and calibration"]
  },
  {
    id: 2,
    title: "Garment Integration",
    description: "Our engineering team seamlessly integrates sensors into clothing and footwear while maintaining comfort, durability, and washability.",
    steps: ["Ergonomic placement optimization", "Non-intrusive integration techniques", "Durability and washability testing", "Comfort and user experience validation"]
  },
  {
    id: 3,
    title: "AI & Data Analytics",
    description: "We develop specialized algorithms that transform textile sensor data into actionable insights unique to your industry requirements.",
    steps: ["Industry-specific algorithm development", "ML model training with domain data", "Real-time analytics implementation", "Insight delivery optimization"]
  },
  {
    id: 4,
    title: "Production & Certification",
    description: "We handle manufacturing, quality control, and ensure all textile sensor products meet relevant industry standards and certifications.",
    steps: ["Textile manufacturing partner selection", "Quality assurance processes", "Industry-specific certification procurement", "Initial production supervision"]
  },
  {
    id: 5,
    title: "Deployment & Support",
    description: "We provide comprehensive training, implementation assistance, and ongoing support to ensure successful adoption and continuous improvement.",
    steps: ["User training and onboarding", "Data interpretation guidance", "Performance monitoring", "Continuous improvement iterations"]
  }
];

const Process = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      
      let closestSection = null;
      let closestDistance = Infinity;
      
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section id="process" className="bg-white relative overflow-hidden py-[80px] w-full">
      {/* White to blue fade gradient at top - increased height */}
      <div className="absolute inset-0 w-full h-24 bg-gradient-to-b from-blue-500 to-white opacity-100"></div>
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={processRef} style={{
      opacity: 0
    }}>
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Our Approach
          </div>
          <h2 className="text-3xl font-bold mb-3 text-blue-600">
            From Textile to Intelligence
          </h2>
          <p className="text-blue-600 mt-4">
            Our comprehensive process ensures seamless integration of textile sensors into your specific industry application with maximum effectiveness.
          </p>
        </div>
        
        <div className="relative mt-12">
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-blue-200 -translate-x-1/2"></div>
          
          <div className="space-y-10 relative">
            {processes.map((process, index) => <div key={process.id} ref={el => processSectionsRef.current[index] = el} className={cn("relative flex flex-col md:flex-row md:items-center gap-6", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right")}>
                <div className="md:w-1/2">
                  <div className={cn("md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300", activeProcess === process.id ? "bg-blue-500 text-white scale-110" : "bg-blue-100 text-blue-600 border border-blue-200")} onClick={() => setActiveProcess(process.id)}>
                    <span className="font-bold">{process.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0 text-blue-600">{process.title}</h3>
                  <p className="text-blue-500 mb-3 text-sm">{process.description}</p>
                  
                  <button onClick={() => setActiveProcess(process.id)} className={cn("text-sm font-medium transition-colors", activeProcess === process.id ? "text-blue-600" : "text-blue-400 hover:text-blue-600")}>
                    {activeProcess === process.id ? "Currently Viewing" : "View Details"}
                  </button>
                </div>
                
                <div className={cn("md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-blue-200 transition-all duration-300", activeProcess === process.id ? "opacity-100 translate-y-0 shadow-md border-blue-300" : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer")} onClick={() => setActiveProcess(process.id)}>
                  <h4 className="font-semibold mb-3 text-blue-600">Key Activities:</h4>
                  <ul className="space-y-2">
                    {process.steps.map((step, stepIndex) => <li key={stepIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-2">
                          <Check className="w-3 h-3 text-blue-600" />
                        </span>
                        <span className="text-gray-600 text-sm text-left">{step}</span>
                      </li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* White to blue fade gradient at bottom - increased height */}
    </section>
  );
};

export default Process;
