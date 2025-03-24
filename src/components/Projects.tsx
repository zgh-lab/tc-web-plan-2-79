
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

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
    <section id="projects" className="py-24 bg-white relative" ref={projectsRef}>
      <div className="section-container">
        <div className={`text-center mb-16 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
        
        <div className="relative">
          <Carousel
            opts={{ loop: true }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className={`overflow-hidden transition-all duration-500 hover:shadow-xl border border-blue-100 h-full
                      ${activeProject === index ? 'scale-105 shadow-lg border-blue-300' : 'scale-100'}`}
                    onMouseEnter={() => setActiveProject(index)}
                  >
                    <div className="bg-blue-50 p-6 flex items-center justify-center h-48 overflow-hidden group">
                      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-200">
                        <span className="text-blue-500 text-4xl font-bold transition-all duration-500 group-hover:text-blue-700">{project.id}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="group">
                        <span className="bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300">
                          {project.title}
                        </span>
                      </CardTitle>
                      <CardDescription className="text-blue-500">{project.brand}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm transition-all duration-300 hover:bg-blue-100 hover:shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a 
                        href="#contact" 
                        className="text-blue-500 flex items-center hover:underline relative overflow-hidden group"
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
            <CarouselNext className="right-0 bg-white/80 backdrop-blur-sm hover:bg-white" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === idx ? 'bg-blue-500 w-6' : 'bg-blue-200'
                }`}
                onClick={() => setActiveProject(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
