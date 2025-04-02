
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FirefighterFigure = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-12 text-center">Brandmansutrustning med Sensorer</h2>
      
      <div className="firefighter-container relative mx-auto h-[600px] w-full max-w-[300px] md:max-w-[400px]">
        {/* Helmet */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[80px] bg-wrlds-dark rounded-t-[50px]">
          {/* Gas & Particle Sensor */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[15px] right-[10px] w-[20px] h-[20px] bg-wrlds-accent rounded-full border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Gas- och partikelmätare</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-[30px] bg-wrlds-muted rounded-t-lg"></div>
        </div>
        
        {/* Face */}
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[70px] h-[50px] bg-[#F1F1F1] rounded-lg"></div>
        
        {/* Neck */}
        <div className="absolute top-[130px] left-1/2 -translate-x-1/2 w-[40px] h-[20px] bg-[#F1F1F1]"></div>
        
        {/* Body/Suit */}
        <div className="absolute top-[150px] left-1/2 -translate-x-1/2 w-[140px] h-[200px] bg-wrlds-dark rounded-lg">
          {/* Temperature Sensor on Chest */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[30px] left-[50px] w-[40px] h-[40px] bg-wrlds-teal rounded-full border-2 border-white animate-pulse-slow flex items-center justify-center">
                  <div className="w-[20px] h-[20px] bg-red-500 rounded-full"></div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Temperaturmätare</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Motion Sensor */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute bottom-[40px] right-[20px] w-[30px] h-[30px] bg-blue-400 rounded-md border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Rörelsesensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Arms */}
        <div className="absolute top-[170px] left-[60px] w-[30px] h-[120px] bg-wrlds-dark rounded-lg"></div>
        <div className="absolute top-[170px] right-[60px] w-[30px] h-[120px] bg-wrlds-dark rounded-lg">
          {/* Pulse Sensor */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[40px] left-[5px] w-[20px] h-[20px] bg-green-500 rounded-full border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pulssensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Hands */}
        <div className="absolute top-[290px] left-[60px] w-[30px] h-[30px] bg-[#F1F1F1] rounded-full"></div>
        <div className="absolute top-[290px] right-[60px] w-[30px] h-[30px] bg-[#F1F1F1] rounded-full"></div>
        
        {/* Legs */}
        <div className="absolute top-[350px] left-[90px] w-[40px] h-[150px] bg-wrlds-dark rounded-lg"></div>
        <div className="absolute top-[350px] right-[90px] w-[40px] h-[150px] bg-wrlds-dark rounded-lg"></div>
        
        {/* Feet */}
        <div className="absolute top-[500px] left-[85px] w-[50px] h-[30px] bg-black rounded-lg">
          {/* Pressure Sensor */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[5px] left-[15px] w-[20px] h-[20px] bg-yellow-500 rounded-sm border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Trycksensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="absolute top-[500px] right-[85px] w-[50px] h-[30px] bg-black rounded-lg">
          {/* Pressure Sensor */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="absolute top-[5px] right-[15px] w-[20px] h-[20px] bg-yellow-500 rounded-sm border-2 border-wrlds-teal animate-pulse-slow"></div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Trycksensor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Oxygen Tank */}
        <div className="absolute top-[180px] left-[170px] w-[50px] h-[120px] bg-wrlds-light rounded-lg"></div>
        
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
          Denna schematiska figur visar placeringen av olika sensorer på en brandmans utrustning. 
          Håll muspekaren över sensorerna för mer information.
        </p>
      </div>
    </div>
  );
};

export default FirefighterFigure;
