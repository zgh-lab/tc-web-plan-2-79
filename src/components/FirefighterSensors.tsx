
import React from 'react';
import { Signal, Droplet, Thermometer, HeartPulse, MotionIcon, WavyLine, Footprints } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FirefighterSensors = () => {
  const sensors = [
    {
      id: 1,
      name: "Live Uplink",
      position: "top-[15%] left-[48%]",
      color: "bg-blue-400/80",
      description: "Real-time data transmission to command center",
      area: "Helmet",
      icon: Signal,
      iconColor: "text-blue-400"
    },
    {
      id: 2,
      name: "Air Sensor",
      position: "top-[30%] left-[46%]",
      color: "bg-red-400/80",
      description: "Detects hazardous gases and particles",
      area: "Mask",
      icon: Droplet,
      iconColor: "text-red-400"
    },
    {
      id: 3,
      name: "Core Temp",
      position: "top-[42%] left-[43%]",
      color: "bg-orange-400/80",
      description: "Monitors body temperature to prevent overheating",
      area: "Chest (Left)",
      icon: Thermometer,
      iconColor: "text-orange-400"
    },
    {
      id: 4,
      name: "Heart / SpO₂",
      position: "top-[42%] left-[50%]", 
      color: "bg-green-400/80",
      description: "Tracks oxygen levels and heart rate",
      area: "Chest (Right)",
      icon: HeartPulse,
      iconColor: "text-green-400"
    },
    {
      id: 5,
      name: "Motion Detect",
      position: "top-[53%] left-[48%]",
      color: "bg-yellow-400/80",
      description: "Identifies falls or lack of movement",
      area: "Lower Back",
      icon: MotionIcon,
      iconColor: "text-yellow-400"
    },
    {
      id: 6,
      name: "Vibration",
      position: "top-[47%] left-[38%]",
      color: "bg-teal-400/80",
      description: "Measures hand tool vibration exposure",
      area: "Gloves",
      icon: WavyLine,
      iconColor: "text-teal-400"
    },
    {
      id: 7,
      name: "Pressure Sensor",
      position: "top-[88%] left-[48%]",
      color: "bg-purple-400/80",
      description: "Detects surface instability and distributes weight",
      area: "Feet (Soles)",
      icon: Footprints,
      iconColor: "text-purple-400"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Smart PPE for Firefighters</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Modern protective equipment with integrated sensor systems that monitor health, safety, and environmental conditions in real-time.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 relative min-h-[500px] rounded-lg bg-gradient-to-b from-gray-50 to-gray-100 p-6">
            <img 
              src="/lovable-uploads/54cd9a61-7583-4fb1-8359-f24eabd6c4e0.png" 
              alt="Firefighter with sensor system" 
              className="mx-auto object-contain max-h-[500px]"
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
            <h3 className="text-2xl font-semibold mb-4">Integrated Wearable Technology</h3>
            <p className="mb-6 text-gray-600">
              Advanced sensing technology seamlessly embedded within standard protective equipment provides 
              critical data while maintaining comfort and functionality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sensors.map((sensor) => (
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

export default FirefighterSensors;
