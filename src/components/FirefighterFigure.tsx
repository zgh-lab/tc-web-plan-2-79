
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Signal, Thermometer, HeartPulse, CircleArrowDown, Vibrate, Footprints } from "lucide-react";

const FirefighterFigure = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center">Brandmansutrustning med Sensorer</h2>
      
      <div className="firefighter-container relative mx-auto h-[600px] w-full max-w-[300px] md:max-w-[400px]">
        {/* Main Firefighter Image */}
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/70181d97-fd28-4a9e-9c2b-7a812d12f4f0.png" 
            alt="Brandman i utrustning" 
            className="object-contain w-full h-full filter grayscale"
          />
          
          {/* Live data uplink on Helmet */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[12%] right-[40%] w-[30px] h-[30px] bg-blue-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Signal size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Live data uplink</p>
                <p>Sends real-time data to command center</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Air toxicity sensor on mask */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[23%] left-[45%] w-[25px] h-[25px] bg-red-500 rounded-full border-2 border-white animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Air toxicity sensor</p>
                <p>Detects hazardous gases and particles</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Core body temp sensor on chest */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[35%] left-[40%] w-[30px] h-[30px] bg-red-600 rounded-full border-2 border-white animate-pulse-slow shadow-lg shadow-red-400 flex items-center justify-center">
                  <Thermometer size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Core body temp sensor</p>
                <p>Tracks risk of overheating</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Heart rate sensor on chest */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[33%] right-[35%] w-[30px] h-[30px] bg-green-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <HeartPulse size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Heart rate / SpO₂ sensor</p>
                <p>Monitors oxygen levels and heart rate</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Fall/motion sensor on lower back */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[50%] left-[45%] w-[28px] h-[28px] bg-yellow-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <CircleArrowDown size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Fall/motion sensor</p>
                <p>Detects inactivity or sudden movement</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Vibration sensor on gloves */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[45%] right-[25%] w-[25px] h-[25px] bg-orange-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Vibrate size={14} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Vibration sensor</p>
                <p>Tracks tool vibration exposure</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Pressure sensor on boot soles */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute bottom-[5%] left-[40%] w-[25px] h-[25px] bg-purple-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Footprints size={14} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Pressure sensor</p>
                <p>Measures force on feet / detects surface instability</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="mt-8 text-center max-w-[600px]">
        <p className="text-gray-700">
          This diagram shows the placement of various sensors on a firefighter's equipment.
          Hover over the sensors for more information.
        </p>
      </div>
    </div>
  );
};

export default FirefighterFigure;
