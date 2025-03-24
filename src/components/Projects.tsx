
import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

const projects = [
  {
    id: 1,
    title: "Smart Uniform",
    brand: "WRLDS Innovation",
    description: "Integrated AI sensors in smart uniforms that enhance safety and productivity with real-time data analytics, providing comprehensive health and movement tracking for industrial applications.",
    tags: ["Motion Sensors", "Health Monitoring", "Industrial", "Cloud Analytics"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Multi-Sensor Security Device",
    brand: "WRLDS Secure",
    description: "Advanced security solution featuring heart rate monitoring, impact detection, GPS tracking, and 5G connectivity with powerful real-time analytics.",
    tags: ["Security", "GPS Tracking", "5G", "Real-time Monitoring"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Off-Ice Training Sensors",
    brand: "WRLDS Sports",
    description: "Innovative training devices incorporating speed radars, interactive targets, and a gamification engine to provide engaging performance analytics.",
    tags: ["Sports", "Performance Analytics", "Gamification", "Mobile Integration"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Direction Finder",
    brand: "WRLDS Navigation",
    description: "Precision navigation solution featuring a miniaturized 9-axis motion sensor, Bluetooth connectivity, and intelligent automatic calibration systems.",
    tags: ["Navigation", "Bluetooth", "Miniaturized", "Precision"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Health & Safety Sensor",
    brand: "WRLDS Health",
    description: "Comprehensive health monitoring system providing heart rate, temperature, fall detection, and activity tracking with seamless cloud integration.",
    tags: ["Healthcare", "Elderly Care", "Monitoring", "Safety"],
    imageUrl: "/placeholder.svg"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-16 bg-white" ref={projectsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Our Projects
          </div>
          <h2 className="text-3xl font-bold mb-3">
            Transforming Industries with Smart Technology
          </h2>
          <p className="text-gray-600">
            Explore our portfolio of successful projects and collaborations that have redefined what's possible with AI-powered sensors.
          </p>
        </div>
        
        <ScrollArea className="w-full h-[550px] pb-8">
          <div className="flex flex-nowrap gap-4 pb-6 px-2">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="w-[300px] md:w-[350px] flex-shrink-0"
              >
                <Card className="overflow-hidden h-[500px] border border-blue-100 shadow-sm hover:shadow-md flex flex-col group transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-blue-50 p-6 flex items-center justify-center h-48">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center transform transition-all duration-500 animate-pulse-slow">
                      <span className="text-blue-500 text-4xl font-bold">{project.id}</span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-blue-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-blue-500 text-sm font-medium">{project.brand}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs animate-pulse-slow"
                            style={{ animationDelay: `${idx * 300}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href="#contact" 
                        className="text-blue-500 flex items-center hover:underline relative overflow-hidden group"
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center items-center space-x-3 mt-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === idx ? 'bg-blue-500 w-6' : 'bg-blue-200 hover:bg-blue-300'
                }`}
                onClick={() => setActiveProject(idx)}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default Projects;
