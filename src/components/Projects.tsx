
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

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
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="section-container">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-blue-100"
            >
              <div className="bg-blue-50 p-6 flex items-center justify-center h-48">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-500 text-4xl font-bold">{project.id}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-blue-500">{project.brand}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="text-blue-500 flex items-center hover:underline">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
