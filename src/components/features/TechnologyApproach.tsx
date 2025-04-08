
import { useEffect, useState } from 'react';
import { ArrowRight, Box, CheckCircle, Code, RefreshCcw, Rocket, Factory, Microchip, Handshake } from "lucide-react";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';

const TechnologyApproach = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;

  // Progress bar animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // Function to animate the progress bar
    const animateProgress = () => {
      setProgressValue(0);
      
      interval = setInterval(() => {
        setProgressValue(prev => {
          // When we reach 100%, complete this sprint
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              // Move to next sprint or cycle back to first sprint
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              // Start the animation again
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 0.5; // Smoother animation with smaller increments
        });
      }, 50); // Increased interval for smoother animation
    };
    
    // Start the animation
    animateProgress();
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const stepFlowItems = [
    {
      icon: <Microchip className="h-10 w-10 text-gray-700" />,
      title: "WRLDS Proprietary Modules",
      description: "Our core technology components developed in-house"
    },
    {
      icon: <Factory className="h-10 w-10 text-gray-700" />,
      title: "Vetted Off-the-Shelf Hardware",
      description: "Carefully selected components that complement our technology"
    },
    {
      icon: <Handshake className="h-10 w-10 text-gray-700" />,
      title: "Vetted Production Partners",
      description: "Expert manufacturing partners for quality and reliability"
    }
  ];

  const sprintPhases = [
    { name: "Planning", icon: <CheckCircle className="h-4 w-4" /> },
    { name: "Development", icon: <Code className="h-4 w-4" /> },
    { name: "Testing", icon: <Box className="h-4 w-4" /> },
    { name: "Review", icon: <RefreshCcw className="h-4 w-4" /> }
  ];

  return (
    <section id="technology" className="bg-gray-50 py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            Our Approach
          </div>
          <h2 className="text-3xl font-bold mb-4">How our technology works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            WRLDS builds hardware and software with proprietary and off-the-shelf modules, 
            allowing us to develop completely unique solutions at high speed and lower risk.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
          {/* Top Row - 3 Foundation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {stepFlowItems.map((item, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gray-50 rounded-full p-4 mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 shadow-lg">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-sm">{item.description}</p>
                    {index === 0 && (
                      <p className="text-xs text-gray-500">Our proprietary technology provides the core foundation of every solution we build.</p>
                    )}
                    {index === 1 && (
                      <p className="text-xs text-gray-500">We carefully select the best off-the-shelf components to complement our proprietary technology.</p>
                    )}
                    {index === 2 && (
                      <p className="text-xs text-gray-500">Our network of production partners ensures quality manufacturing at scale.</p>
                    )}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Connecting Elements */}
          <div className="hidden md:block relative h-16 mb-10">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-3">
              <div className="bg-gray-400 rounded-full p-1">
                <ArrowRight className="w-5 h-5 text-white rotate-90" />
              </div>
            </div>
          </div>
          
          {/* Middle Block - Iterative Adaptation Project */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold">Adaptation Project</h3>
                  <span className="ml-2 text-sm bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full">
                    Sprint {currentSprint}/{totalSprints}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-600 mr-2">Iterative Development</span>
                  <RefreshCcw className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">Working iteratively with customers to tailor solutions to their needs</p>
              
              {/* Progress bar with iterations */}
              <div className="relative mb-2">
                <Progress value={progressValue} className="h-3 bg-gray-200" />
              </div>
              
              {/* Sprint phases */}
              <div className="grid grid-cols-4 gap-1 mt-4">
                {sprintPhases.map((phase, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "text-center p-2 rounded transition-all",
                      // Highlight the active phase based on progress
                      progressValue >= (index / sprintPhases.length * 100) && 
                      progressValue < ((index + 1) / sprintPhases.length * 100) 
                        ? "bg-gray-200 border border-gray-300" 
                        : "bg-gray-50"
                    )}
                  >
                    <div className={cn(
                      "rounded-full p-1 mb-1",
                      progressValue >= (index / sprintPhases.length * 100)
                        ? "bg-gray-300 text-gray-700"
                        : "bg-gray-100 text-gray-500"
                    )}>
                      {phase.icon}
                    </div>
                    <span className="text-xs font-medium">{phase.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Customer collaboration indicator */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full p-1 mr-2">
                    <CheckCircle className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">Customer feedback integrated at every stage</span>
                </div>
                <div className="text-sm text-gray-500 flex items-center">
                  <span className="mr-2">Continuous improvement</span>
                  <div className="flex space-x-1">
                    <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                    <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connecting Elements */}
          <div className="hidden md:block relative h-16 mb-10">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-3">
              <div className="bg-gray-400 rounded-full p-1">
                <ArrowRight className="w-5 h-5 text-white rotate-90" />
              </div>
            </div>
          </div>
          
          {/* Bottom Block - Hitting the Market */}
          <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse-slow"></div>
              <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                <Rocket className="h-10 w-10 text-gray-700" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Hitting the Market</h3>
            <p className="text-gray-700">Ready to scale, produce, and launch</p>
            <div className="flex justify-center mt-4 space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/tech-details" 
            onClick={() => window.scrollTo(0, 0)} 
            className="inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group"
          >
            Learn More About Our Technology
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologyApproach;
