
import React from 'react';
import { MapPin, Thermometer, HeartPulse, WavyLine, User, Footprints } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const ConstructionWorkersSensors = () => {
  const sensors = [
    {
      id: 1,
      name: "Impact / GPS",
      position: "top-[17%] left-[42%]",
      color: "bg-blue-400/80",
      description: "Detects head impact and tracks location",
      area: "Hard Hat",
      icon: MapPin,
      iconColor: "text-blue-400"
    },
    {
      id: 2,
      name: "HR & Temp",
      position: "top-[30%] left-[42%]",
      color: "bg-red-400/80",
      description: "Monitors fatigue and heat stress levels",
      area: "Safety Vest",
      icon: HeartPulse,
      iconColor: "text-red-400"
    },
    {
      id: 3,
      name: "Vibration",
      position: "top-[32%] left-[30%]",
      color: "bg-orange-400/80",
      description: "Measures tool vibration exposure during use",
      area: "Gloves",
      icon: WavyLine,
      iconColor: "text-orange-400"
    },
    {
      id: 4,
      name: "Posture Sensor",
      position: "top-[48%] left-[42%]", 
      color: "bg-yellow-400/80",
      description: "Detects bending, falling, or prolonged stillness",
      area: "Pants (Thighs)",
      icon: User,
      iconColor: "text-yellow-400"
    },
    {
      id: 5,
      name: "Foot Pressure",
      position: "top-[84%] left-[42%]",
      color: "bg-purple-400/80",
      description: "Measures step impact and surface stability",
      area: "Boots",
      icon: Footprints,
      iconColor: "text-purple-400"
    },
    // Second worker
    {
      id: 6,
      name: "Impact / GPS",
      position: "top-[17%] left-[58%]",
      color: "bg-blue-400/80",
      description: "Detects head impact and tracks location",
      area: "Hard Hat",
      icon: MapPin,
      iconColor: "text-blue-400"
    },
    {
      id: 7,
      name: "HR & Temp",
      position: "top-[30%] left-[58%]",
      color: "bg-red-400/80",
      description: "Monitors fatigue and heat stress levels",
      area: "Safety Vest",
      icon: HeartPulse,
      iconColor: "text-red-400"
    },
    {
      id: 8,
      name: "Vibration",
      position: "top-[34%] left-[66%]",
      color: "bg-orange-400/80",
      description: "Measures tool vibration exposure during use",
      area: "Gloves",
      icon: WavyLine,
      iconColor: "text-orange-400"
    },
    {
      id: 9,
      name: "Posture Sensor",
      position: "top-[50%] left-[58%]", 
      color: "bg-yellow-400/80",
      description: "Detects bending, falling, or prolonged stillness",
      area: "Pants (Thighs)",
      icon: User,
      iconColor: "text-yellow-400"
    },
    {
      id: 10,
      name: "Foot Pressure",
      position: "top-[85%] left-[58%]",
      color: "bg-purple-400/80",
      description: "Measures step impact and surface stability",
      area: "Boots",
      icon: Footprints,
      iconColor: "text-purple-400"
    },
  ];

  const uniqueSensors = sensors.slice(0, 5); // Just get the first 5 unique sensors for the card display

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Smart PPE for Construction</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Enhance worker safety with integrated sensors that monitor environmental risks and physical strain in real-time.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 relative min-h-[600px] rounded-lg bg-gradient-to-b from-gray-100 to-white p-6">
            <img 
              src="/lovable-uploads/4b718876-02cb-44cc-b7f9-7667af6554b0.png" 
              alt="Construction workers with sensor system" 
              className="mx-auto object-contain max-h-[600px]"
            />
            
            {sensors.map((sensor) => (
              <HoverCard key={sensor.id} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <div 
                    className={`absolute ${sensor.position} w-5 h-5 ${sensor.color} rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow border border-white shadow-lg backdrop-blur-sm z-10 flex items-center justify-center`}
                  >
                    <sensor.icon className={`w-3 h-3 ${sensor.iconColor}`} />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="backdrop-blur-sm bg-white/90 border-none shadow-lg p-4 w-52">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      <sensor.icon className={`w-4 h-4 ${sensor.iconColor}`} />
                      <span className="font-medium text-sm">{sensor.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 mb-1">{sensor.area}</span>
                    <p className="text-xs mt-1">{sensor.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Advanced Scaffold Safety</h3>
            <p className="mb-6 text-gray-600">
              Wearable sensor technology helps construction professionals work more safely at heights
              by monitoring environmental conditions and worker vitals in real-time.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {uniqueSensors.map((sensor) => (
                <div key={sensor.id} className="relative overflow-hidden group rounded-lg hover:shadow-md transition-all duration-300 bg-white border border-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 ${sensor.color.replace('/80', '/20')} rounded-full flex items-center justify-center`}>
                      <sensor.icon className={`w-4 h-4 ${sensor.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{sensor.name}</h4>
                      <p className="text-xs text-gray-500">{sensor.area}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{sensor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionWorkersSensors;
