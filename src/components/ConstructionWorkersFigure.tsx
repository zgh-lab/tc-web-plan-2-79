
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Signal, Thermometer, HeartPulse, CircleArrowDown, Vibrate, Footprints } from "lucide-react";

const ConstructionWorkersFigure = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center">Byggarbetare med Sensorer</h2>
      
      <div className="construction-container relative mx-auto h-[600px] w-full max-w-[400px] md:max-w-[500px]">
        {/* Main Construction Workers Image */}
        <div className="relative w-full h-full">
          <img 
            src="/lovable-uploads/ea8abd84-2669-4d61-954c-68f9f13efc10.png" 
            alt="Byggarbetare på ställning" 
            className="object-contain w-full h-full filter grayscale"
          />
          
          {/* Fall detection & GPS on hard hats - Worker 1 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[15%] left-[40%] w-[30px] h-[30px] bg-blue-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Signal size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Fall detection & GPS</p>
                <p>Detects head impact or fall; sends location</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Fall detection & GPS on hard hats - Worker 2 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[15%] right-[40%] w-[30px] h-[30px] bg-blue-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Signal size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Fall detection & GPS</p>
                <p>Detects head impact or fall; sends location</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Heart rate & temperature sensor on vest - Worker 1 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[30%] left-[42%] w-[30px] h-[30px] bg-red-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <HeartPulse size={16} className="text-white" />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Heart rate & temperature sensor</p>
                <p>Tracks fatigue or heat stress</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Heart rate & temperature sensor on vest - Worker 2 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[30%] right-[38%] w-[30px] h-[30px] bg-red-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <HeartPulse size={16} className="text-white" />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Heart rate & temperature sensor</p>
                <p>Tracks fatigue or heat stress</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Vibration sensor on gloves - Worker 1 (with tool) */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[40%] left-[35%] w-[28px] h-[28px] bg-orange-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Vibrate size={14} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Vibration sensor</p>
                <p>Monitors vibration from tools or machinery</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Motion/posture sensor on pants - Worker 1 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[50%] left-[40%] w-[28px] h-[28px] bg-yellow-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <CircleArrowDown size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Motion/posture sensor</p>
                <p>Detects bending, falling, or prolonged stillness</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Motion/posture sensor on pants - Worker 2 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[50%] right-[40%] w-[28px] h-[28px] bg-yellow-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <CircleArrowDown size={16} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Motion/posture sensor</p>
                <p>Detects bending, falling, or prolonged stillness</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Pressure & elevation sensor on boots - Worker 1 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute bottom-[22%] left-[40%] w-[25px] h-[25px] bg-purple-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Footprints size={14} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Pressure & elevation sensor</p>
                <p>Measures step impact and floor pressure</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Pressure & elevation sensor on boots - Worker 2 */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute bottom-[22%] right-[40%] w-[25px] h-[25px] bg-purple-500 rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <Footprints size={14} className="text-white" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-bold">Pressure & elevation sensor</p>
                <p>Measures step impact and floor pressure</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="mt-8 text-center max-w-[600px]">
        <p className="text-gray-700">
          This diagram shows the placement of various sensors on construction workers' equipment.
          Hover over the sensors for more information.
        </p>
      </div>
    </div>
  );
};

export default ConstructionWorkersFigure;
