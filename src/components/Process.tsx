
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Check } from "lucide-react";

const processes = [
  {
    id: 1,
    title: "Idea & Prototyping",
    description: "We begin by conceptualizing your vision and rapidly prototyping using our specialized facilities. Our team works closely with you to understand your requirements and objectives.",
    steps: [
      "Initial consultation and requirement gathering",
      "Concept development and refinement",
      "Rapid prototyping and early testing",
      "Feasibility assessment and component selection"
    ]
  },
  {
    id: 2,
    title: "Development & Integration",
    description: "Our engineering team develops customized sensors, embedded software, battery management solutions, and cloud integration tailored specifically to your needs.",
    steps: [
      "Sensor and hardware customization",
      "Embedded software development",
      "Power management optimization",
      "Cloud platform integration and security implementation"
    ]
  },
  {
    id: 3,
    title: "AI & Data Management",
    description: "We deploy Tiny ML algorithms and use our AI toolbox to provide powerful data analytics and insights, transforming raw data into valuable business intelligence.",
    steps: [
      "Algorithm development and training",
      "Data pipeline establishment",
      "Analytics dashboard creation",
      "Machine learning model optimization"
    ]
  },
  {
    id: 4,
    title: "Production & Certification",
    description: "We provide full support during initial production stages and assist in obtaining all necessary product certifications to ensure compliance with industry standards.",
    steps: [
      "Manufacturing partner selection",
      "Quality assurance processes",
      "Regulatory compliance and certification",
      "Initial production run supervision"
    ]
  },
  {
    id: 5,
    title: "Deployment & Scaling",
    description: "Leveraging our extensive network for manufacturing and app development, we help you effectively scale your products to meet market demands.",
    steps: [
      "Go-to-market strategy refinement",
      "Production scaling planning",
      "Distribution channel establishment",
      "Continuous improvement processes"
    ]
  }
];

const Process = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('animate-fade-in');
          // Make sure the element remains visible after animation
          (entries[0].target as HTMLElement).style.opacity = '1';
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={processRef} style={{ opacity: 0 }}>
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-wrlds-teal rounded-full text-sm font-medium">
            Our Process
          </div>
          <h2 className="text-3xl font-bold mb-3">
            From Concept to Reality
          </h2>
          <p className="text-gray-600">
            Our comprehensive development process ensures your idea transforms into a market-ready product with cutting-edge technology.
          </p>
        </div>
        
        <div className="relative mt-12">
          {/* Process timeline */}
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-blue-200 -translate-x-1/2"></div>
          
          <div className="space-y-10 relative">
            {processes.map((process, index) => (
              <div 
                key={process.id} 
                className={cn(
                  "relative flex flex-col md:flex-row md:items-center gap-6",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
                )}
              >
                <div className="md:w-1/2">
                  <div 
                    className={cn(
                      "md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300",
                      activeProcess === process.id 
                        ? "bg-wrlds-teal text-white" 
                        : "bg-white text-wrlds-teal border border-wrlds-teal/30"
                    )}
                    onClick={() => setActiveProcess(process.id)}
                  >
                    <span className="font-bold">{process.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0">{process.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{process.description}</p>
                  
                  <button 
                    onClick={() => setActiveProcess(process.id)}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      activeProcess === process.id ? "text-wrlds-teal" : "text-gray-500 hover:text-wrlds-teal"
                    )}
                  >
                    {activeProcess === process.id ? "Currently Viewing" : "View Details"}
                  </button>
                </div>
                
                <div 
                  className={cn(
                    "md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-300",
                    activeProcess === process.id 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer"
                  )}
                  onClick={() => setActiveProcess(process.id)}
                >
                  <h4 className="font-semibold mb-3 text-wrlds-teal">Key Activities:</h4>
                  <ul className="space-y-2">
                    {process.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 mr-2">
                          <Check className="w-3 h-3 text-wrlds-teal" />
                        </span>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
