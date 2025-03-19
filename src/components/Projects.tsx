
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const projects = [
  {
    id: 1,
    title: "Smart Uniform",
    brand: "Wabooba Innovation",
    description: "Integrated AI sensors in smart uniforms that enhance safety and productivity with real-time data analytics, providing comprehensive health and movement tracking for industrial applications.",
    tags: ["Motion Sensors", "Health Monitoring", "Industrial", "Cloud Analytics"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Multi-Sensor Security Device",
    brand: "Wabooba Secure",
    description: "Advanced security solution developed with Wabooba featuring heart rate monitoring, impact detection, GPS tracking, and 5G connectivity with powerful real-time analytics.",
    tags: ["Security", "GPS Tracking", "5G", "Real-time Monitoring"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Off-Ice Training Sensors",
    brand: "Wabooba Sports",
    description: "Innovative training devices created for Wabooba incorporating speed radars, interactive targets, and a gamification engine to provide engaging performance analytics.",
    tags: ["Sports", "Performance Analytics", "Gamification", "Mobile Integration"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Direction Finder",
    brand: "Wabooba Navigation",
    description: "Precision navigation solution developed with Wabooba featuring a miniaturized 9-axis motion sensor, Bluetooth connectivity, and intelligent automatic calibration systems.",
    tags: ["Navigation", "Bluetooth", "Miniaturized", "Precision"],
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Health & Safety Sensor",
    brand: "Wabooba Health",
    description: "Comprehensive health monitoring system created for Wabooba providing heart rate, temperature, fall detection, and activity tracking with seamless cloud integration.",
    tags: ["Healthcare", "Elderly Care", "Monitoring", "Safety"],
    imageUrl: "/placeholder.svg"
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const projectsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
      
      <div className="section-container" ref={projectsRef} style={{ opacity: 0 }}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            Our Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Industries with Smart Technology
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our portfolio of successful projects and collaborations that have redefined what's possible with AI-powered sensors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={cn(
                  "w-full text-left p-5 rounded-lg transition-all duration-300 border",
                  activeProject === project.id 
                    ? "bg-blue-500 text-white border-blue-500 shadow-lg" 
                    : "bg-white text-gray-800 border-gray-200 hover:border-blue-300"
                )}
              >
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className={cn(
                  "text-sm",
                  activeProject === project.id ? "text-white/80" : "text-gray-500"
                )}>
                  {project.brand}
                </p>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-2">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={cn(
                  "bg-white rounded-xl p-8 shadow-lg border border-gray-200 transition-all duration-500",
                  activeProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 absolute pointer-events-none translate-y-4"
                )}
              >
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h2>
                <p className="text-blue-500 mb-4">{project.brand}</p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
};

export default Projects;
