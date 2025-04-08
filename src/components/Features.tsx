import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, Users, Repeat, GitBranch, GitCommit, GitMerge } from "lucide-react";
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          // Make sure the element remains visible after animation
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        // Only set initial opacity if not already animated
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    
    return () => observer.disconnect();
  }, []);
  
  const features = [
    {
      icon: <Activity className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Sports Performance",
      description: "Specialized fabrics that analyze form, provide instant feedback, and help prevent injuries in athletic equipment.",
      image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png"
    },
    {
      icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Military & Defense",
      description: "Tactical gear with embedded sensors for soldier health monitoring, environmental awareness, and enhanced safety.",
      image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
    },
    {
      icon: <HardHat className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Industrial Safety",
      description: "Protective workwear that detects hazards, monitors fatigue, and prevents workplace injuries through early intervention.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png"
    },
    {
      icon: <Zap className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Thermal Regulation",
      description: "Adaptive heating and cooling textiles that respond to body temperature and environmental conditions.",
      image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png"
    }
  ];

  const sensorCaseStudies = [
    {
      image: "/lovable-uploads/a1ef45a0-dde4-4b30-856f-8032dd58247e.png",
      title: "Firefighter Safety",
      description: "Advanced protective gear with gas, temperature, positioning, and motion sensors for safer emergency response.",
    },
    {
      image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png",
      title: "Sports Performance",
      description: "Smart athletic wear with temperature and pressure sensors that track hydration, foot strike patterns, and performance metrics.",
    },
    {
      image: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      title: "Industrial Worker Protection",
      description: "Safety workwear with temperature, pressure, and vibration sensors to prevent injuries and monitor environmental hazards.",
    }
  ];

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

  const agileSprints = [
    { 
      name: "Sprint 1", 
      focus: "Discovery & Planning", 
      icon: <Users className="h-4 w-4 text-blue-500" />,
      completed: true 
    },
    { 
      name: "Sprint 2", 
      focus: "Prototype Development", 
      icon: <Code className="h-4 w-4 text-indigo-500" />,
      completed: true 
    },
    { 
      name: "Sprint 3", 
      focus: "Testing & Iteration", 
      icon: <GitBranch className="h-4 w-4 text-purple-500" />,
      completed: true 
    },
    { 
      name: "Sprint 4", 
      focus: "Refinement", 
      icon: <GitCommit className="h-4 w-4 text-pink-500" />,
      completed: false 
    },
    { 
      name: "Sprint 5", 
      focus: "Final Integration", 
      icon: <GitMerge className="h-4 w-4 text-rose-500" />,
      completed: false 
    }
  ];

  return (
    <>
      <section id="features" className="relative bg-white overflow-hidden py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Textile Sensor Applications
            </div>
            <p className="text-gray-600 mt-4">
              Our textile sensor technology transforms ordinary fabrics into intelligent interfaces that collect data, monitor conditions, and enhance performance across diverse sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 h-[280px] relative shadow-lg" 
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredFeature(index)} 
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className={cn(
                    "absolute inset-0 bg-black/60 transition-opacity duration-300",
                    hoveredFeature === index ? "opacity-50" : "opacity-70"
                  )}></div>
                </div>
                
                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-4 inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110">
                      <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-white/90 text-sm">{feature.description}</p>
                  </div>
                  <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Textile Sensor Applications
              </div>
              <h3 className="text-2xl font-bold">Real-World Use Cases</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Explore how our textile sensors are applied in different professional contexts, 
                from athletics to emergency response and industrial safety.
                <span className="block text-sm mt-1 text-blue-500">Scroll horizontally to see more examples →</span>
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {sensorCaseStudies.map((study, index) => (
                    <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                      <Card className="border border-gray-100 shadow-md">
                        <CardContent className="p-0">
                          <div className="w-full h-full">
                            <img 
                              src={study.image} 
                              alt={study.title} 
                              className="w-full h-auto object-contain"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-lg">{study.title}</h4>
                            <p className="text-sm text-gray-600 mt-2">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>
              <div className="text-center mt-6 text-sm text-gray-600">
                <p className="font-medium">These examples showcase just a few ways our textile sensors can enhance safety and performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
            
            {/* Middle Block - Adaptation Project - UPDATED WITH AGILE VISUALIZATION */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold">Adaptation Project</h3>
                    <p className="text-gray-600 mb-4">Tailoring the tech stack to the customer's use case</p>
                  </div>
                  <div className="flex items-center">
                    <Code className="h-6 w-6 text-gray-700 mr-2" />
                    <Repeat className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
                
                {/* Agile Process Visualization */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Agile Development Process</span>
                    <span className="text-sm font-medium text-gray-700">60% Complete</span>
                  </div>
                  <Progress value={60} className="h-2 bg-gray-200" />
                </div>
                
                {/* Sprint Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-0 w-full h-0.5 bg-gray-200 top-5"></div>
                  
                  {/* Sprint Nodes */}
                  <div className="flex justify-between relative mb-8">
                    {agileSprints.map((sprint, index) => (
                      <HoverCard key={index}>
                        <HoverCardTrigger asChild>
                          <div className="flex flex-col items-center relative z-10">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              sprint.completed 
                                ? 'bg-green-100 text-green-700 border-2 border-green-400' 
                                : index === 3 
                                  ? 'bg-blue-100 text-blue-700 border-2 border-blue-400 animate-pulse' 
                                  : 'bg-gray-100 text-gray-400 border-2 border-gray-300'
                            }`}>
                              {sprint.completed ? <CheckCircle className="h-5 w-5" /> : sprint.icon}
                            </div>
                            <div className="mt-2 text-center">
                              <p className={`text-xs font-medium ${sprint.completed ? 'text-gray-700' : index === 3 ? 'text-blue-700' : 'text-gray-400'}`}>
                                {sprint.name}
                              </p>
                            </div>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-48 p-3">
                          <div>
                            <p className="font-medium text-sm">{sprint.name}</p>
                            <p className="text-xs text-gray-600">{sprint.focus}</p>
                            <div className="mt-2 text-xs">
                              {sprint.completed ? (
                                <span className="text-green-600 flex items-center">
                                  <CheckCircle className="h-3 w-3 mr-1" /> Completed
                                </span>
                              ) : index === 3 ? (
                                <span className="text-blue-600 flex items-center">
                                  <Repeat className="h-3 w-3 mr-1 animate-spin-slow" /> In Progress
                                </span>
                              ) : (
                                <span className="text-gray-400">Upcoming</span>
                              )}
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                </div>
                
                {/* Customer Collaboration Section */}
                <div className="bg-white rounded-lg p-4 flex items-center border border-gray-200 shadow-sm">
                  <div className="mr-4 bg-blue-50 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Customer Collaboration</h4>
                    <p className="text-xs text-gray-500">Continuous feedback loop with clients at each sprint</p>
                  </div>
                  <div className="ml-auto flex items-center">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      Always On
                    </span>
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
    </>
  );
};

export default Features;
