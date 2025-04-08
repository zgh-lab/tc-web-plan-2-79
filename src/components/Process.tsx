
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check } from "lucide-react";

const processes = [{
  id: 1,
  title: "Textile Sensor Design",
  description: "We begin by designing custom textile sensors specifically for your industry and use case, selecting appropriate conductive materials and sensor types.",
  steps: ["Industry-specific requirement analysis", "Sensor type and material selection", "Prototype sensor development", "Initial testing and calibration"]
}, {
  id: 2,
  title: "Garment Integration",
  description: "Our engineering team seamlessly integrates sensors into clothing and footwear while maintaining comfort, durability, and washability.",
  steps: ["Ergonomic placement optimization", "Non-intrusive integration techniques", "Durability and washability testing", "Comfort and user experience validation"]
}, {
  id: 3,
  title: "AI & Data Analytics",
  description: "We develop specialized algorithms that transform textile sensor data into actionable insights unique to your industry requirements.",
  steps: ["Industry-specific algorithm development", "ML model training with domain data", "Real-time analytics implementation", "Insight delivery optimization"]
}, {
  id: 4,
  title: "Production & Certification",
  description: "We handle manufacturing, quality control, and ensure all textile sensor products meet relevant industry standards and certifications.",
  steps: ["Textile manufacturing partner selection", "Quality assurance processes", "Industry-specific certification procurement", "Initial production supervision"]
}, {
  id: 5,
  title: "Deployment & Support",
  description: "We provide comprehensive training, implementation assistance, and ongoing support to ensure successful adoption and continuous improvement.",
  steps: ["User training and onboarding", "Data interpretation guidance", "Performance monitoring", "Continuous improvement iterations"]
}];

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
    
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-16 bg-white" ref={processRef}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Development Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Process Sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-24 space-y-1">
              {processes.map(process => (
                <button
                  key={process.id}
                  onClick={() => setActiveProcess(process.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg transition-all flex items-start gap-3",
                    process.id === activeProcess 
                      ? "bg-gray-100 text-black font-medium" 
                      : "hover:bg-gray-50 text-gray-600"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mt-0.5",
                    process.id === activeProcess 
                      ? "bg-blue-600 text-white" 
                      : "border border-gray-300 text-gray-400"
                  )}>
                    {process.id === activeProcess 
                      ? <Check className="h-4 w-4" /> 
                      : process.id}
                  </div>
                  <span>{process.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Process Details */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="space-y-12">
              {processes.map(process => (
                <div 
                  key={process.id}
                  ref={el => processSectionsRef.current[process.id - 1] = el}
                  className={cn(
                    "scroll-mt-24 transition-opacity duration-500",
                    process.id === activeProcess ? "opacity-100" : "opacity-50"
                  )}
                >
                  <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h4 className="font-medium mb-4">Key Activities:</h4>
                    <ul className="space-y-3">
                      {process.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
