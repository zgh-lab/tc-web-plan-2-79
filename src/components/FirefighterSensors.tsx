
import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const FirefighterSensors = () => {
  const sensors = [
    {
      id: 1,
      name: "Kommunikationsmodul + G-sensor",
      position: "top-[15%] left-[50%]",
      color: "bg-blue-500",
      description: "Live-uppkoppling till ledningscentralen + fallregistrering",
      area: "Hjälm (ovansida/bak)"
    },
    {
      id: 2,
      name: "Luftkvalitetssensor",
      position: "top-[30%] left-[48%]",
      color: "bg-green-500",
      description: "Mäter halter av kolmonoxid, giftiga gaser, partiklar i andningszonen",
      area: "Andningsmask (mun/näsa)"
    },
    {
      id: 3,
      name: "Kroppstemperatur + puls/SpO2",
      position: "top-[40%] left-[43%]",
      color: "bg-red-500",
      description: "Varnar för värmestress, kollaps, syrebrist – integrerat i plagget",
      area: "Bröstet"
    },
    {
      id: 4,
      name: "Rörelsesensorer/accelerometrar",
      position: "top-[38%] left-[36%]", 
      color: "bg-yellow-500",
      description: "Detekterar begränsad rörelse, onaturliga rörelsemönster",
      area: "Överarmar"
    },
    {
      id: 5,
      name: "Vibrationssensorer + taktila trycksensorer",
      position: "top-[47%] left-[38%]",
      color: "bg-purple-500",
      description: "Mäter verktygsanvändning, återkoppling och överbelastning",
      area: "Handskar"
    },
    {
      id: 6,
      name: "Inertial positioning system (IMU)",
      position: "top-[53%] left-[48%]",
      color: "bg-cyan-500",
      description: "Möjliggör inomhuspositionering när GPS inte fungerar",
      area: "Midja/ländrygg"
    },
    {
      id: 7,
      name: "Position eller böjningssensorer",
      position: "top-[70%] left-[48%]",
      color: "bg-orange-500",
      description: "Identifierar om brandmannen kryper, sitter, ligger",
      area: "Knän"
    },
    {
      id: 8,
      name: "Trycksensorer + temperatur",
      position: "top-[88%] left-[48%]",
      color: "bg-pink-500",
      description: "Mäter steg, viktfördelning, yttemperatur (t.ex. risk för genombrända golv)",
      area: "Skor (sula + tåparti)"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Brandman med Sensorsystem</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-1/2 relative">
            <img 
              src="/lovable-uploads/fafb5947-99fa-4677-823b-651a22b9c752.png" 
              alt="Brandman med sensorer" 
              className="mx-auto"
            />
            
            {sensors.map((sensor) => (
              <HoverCard key={sensor.id}>
                <HoverCardTrigger asChild>
                  <div 
                    className={`absolute ${sensor.position} w-4 h-4 ${sensor.color} rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-pulse border-2 border-white z-10`}
                  />
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-col">
                    <span className="font-bold">{sensor.area}</span>
                    <span className="text-sm text-gray-500">{sensor.name}</span>
                    <p className="mt-2">{sensor.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Sensorsystem för Brandmän</h3>
            <p className="mb-6">
              Moderna brandmän kan utrustas med ett nätverk av sensorer som övervakar både deras hälsa och omgivningen.
              Dessa sensorer är strategiskt placerade för att maximera säkerhet och effektivitet under insatser.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sensors.map((sensor) => (
                <div key={sensor.id} className="p-4 border rounded-lg bg-white shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className={`w-3 h-3 ${sensor.color} rounded-full mr-2`}></div>
                    <h4 className="font-medium">{sensor.area}</h4>
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
