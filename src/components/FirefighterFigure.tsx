
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const FirefighterFigure = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center">Brandmansutrustning med Sensorer</h2>
      
      <div className="firefighter-container relative mx-auto h-[600px] w-full max-w-[300px] md:max-w-[400px]">
        {/* Main Firefighter Image */}
        <div className="relative w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Brandman i utrustning" 
            className="object-contain w-full h-full"
          />
          
          {/* Gas & Particle Sensor on Helmet */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[15%] right-[35%] w-[25px] h-[25px] bg-wrlds-accent rounded-full border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gas- och partikelmätare</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Temperature Sensor on Chest */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[35%] left-[40%] w-[40px] h-[40px] bg-wrlds-teal rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <div className="w-[20px] h-[20px] bg-red-500 rounded-full"></div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Temperaturmätare</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Pulse Sensor on Arm */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[45%] right-[25%] w-[25px] h-[25px] bg-green-500 rounded-full border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pulssensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Motion Sensor */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[60%] left-[35%] w-[30px] h-[30px] bg-blue-400 rounded-md border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Rörelsesensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Pressure Sensor Left Foot */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute bottom-[5%] left-[35%] w-[25px] h-[25px] bg-yellow-500 rounded-sm border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Trycksensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Pressure Sensor Right Foot */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute bottom-[5%] right-[35%] w-[25px] h-[25px] bg-yellow-500 rounded-sm border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Trycksensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Legend */}
        <div className="absolute top-[550px] left-0 w-full">
          <div className="flex flex-col items-center justify-center mt-8 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-red-500 rounded-full"></div>
              <span>Temperatur</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-green-500 rounded-full"></div>
              <span>Puls</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-wrlds-accent rounded-full"></div>
              <span>Gas/Partiklar</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-blue-400 rounded-md"></div>
              <span>Rörelse</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[15px] h-[15px] bg-yellow-500 rounded-sm"></div>
              <span>Tryck</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center max-w-[600px]">
        <p className="text-gray-700">
          Denna bild visar placeringen av olika sensorer på en brandmans utrustning. 
          Håll muspekaren över sensorerna för mer information.
        </p>
      </div>
    </div>
  );
};

export default FirefighterFigure;
