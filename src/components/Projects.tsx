
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const projects = [
  {
    id: 1,
    title: "Smart Uniform",
    partner: "Blåkläder Collaboration",
    description: "Integrated sensors in workwear that enhance safety and productivity with real-time data on worker movements and health metrics, featuring AI analytics and robust sensor technology.",
    tags: ["Motion Sensors", "Health Monitoring", "Industrial", "Cloud Analytics"],
    imageUrl: "https://images.unsplash.com/photo-1635317859483-0de97e9f503a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Multi-Sensor Security Device",
    partner: "Security Solutions",
    description: "A highly durable sensor solution combining heart rate monitoring, impact detection, GPS tracking, and 5G connectivity with real-time data streaming and administrative tools.",
    tags: ["Security", "GPS Tracking", "5G", "Real-time Monitoring"],
    imageUrl: "https://images.unsplash.com/photo-1558959704-2509e0memsb?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Off-Ice Training Sensors",
    partner: "Sports Brands",
    description: "Devices incorporating speed radars, interactive targets, and a gamification engine, providing performance data through app-based dashboards for engaging training experiences.",
    tags: ["Sports", "Performance Analytics", "Gamification", "Mobile Integration"],
    imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Direction Finder",
    partner: "Navigation Systems",
    description: "A miniaturized sensor featuring a 9-axis motion sensor, Bluetooth connectivity, and automatic calibration, optimized for precision in orientation and navigation applications.",
    tags: ["Navigation", "Bluetooth", "Miniaturized", "Precision"],
    imageUrl: "https://images.unsplash.com/photo-1509475826633-fed577a2c71b?q=80&w=2071&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Health & Safety Sensor",
    partner: "Diar Health",
    description: "Compact sensor technology providing comprehensive monitoring including heart rate, temperature, fall detection, and activity tracking, with a magnetic charging solution.",
    tags: ["Healthcare", "Elderly Care", "Monitoring", "Safety"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
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
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-wrlds-light to-transparent"></div>
      
      <div className="section-container" ref={projectsRef} style={{ opacity: 0 }}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-3 py-1 bg-wrlds-teal/10 text-wrlds-teal rounded-full text-sm font-medium">
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
                    ? "bg-wrlds-teal text-white border-wrlds-teal shadow-lg" 
                    : "bg-white text-wrlds-dark border-gray-200 hover:border-wrlds-teal/50"
                )}
              >
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className={cn(
                  "text-sm",
                  activeProject === project.id ? "text-white/80" : "text-gray-500"
                )}>
                  {project.partner}
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
                <div className="mb-6 overflow-hidden rounded-lg">
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="object-cover w-full h-full rounded-lg" 
                    />
                  </AspectRatio>
                </div>
                <h2 className="text-2xl font-bold mb-2 text-wrlds-dark">{project.title}</h2>
                <p className="text-wrlds-teal mb-4">{project.partner}</p>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-wrlds-muted text-wrlds-teal rounded-full text-sm"
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
      
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-wrlds-muted to-transparent"></div>
    </section>
  );
};

export default Projects;
