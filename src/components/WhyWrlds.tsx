import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Layers, BarChart, Lightbulb, AlertTriangle, Clock4, Zap, Shield, Globe, Award, DollarSign } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

// Counter animation component
const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};
const WhyWrlds = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  return <section id="why-wrlds" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Why WRLDS?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            In an industry where complexity leads to failure, we bring simplicity and expertise to ensure your success
          </motion.p>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={3.8} decimals={1} suffix=" Billion" /> USD
            </h3>
            <p className="text-gray-700">Market estimated to reach this value by 2030, with massive growth potential for smart textile solutions</p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={60} suffix="%" /> 
            </h3>
            <p className="text-gray-700">
              of IoT projects stall at the proof-of-concept stage due to fragmented expertise and poor coordination
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-gray-100 p-6 rounded-xl border border-gray-200 text-center hover:bg-gray-200 transition-all">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
              <Clock4 className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={80} suffix="%" />
            </h3>
            <p className="text-gray-700">
              Increase in time-to-market for IoT products over the past four years, creating costly delays
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants}>
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              The WRLDS Difference
            </h3>
            
            <ul className="space-y-6">
              <li className="flex items-start transform transition-all hover:translate-x-1 duration-200">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h4 className="text-gray-900 font-semibold mb-1 flex items-center cursor-help">
                        Seamless Integration
                        <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Learn more</span>
                      </h4>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Integrated Development Process</h5>
                        <p className="text-xs text-gray-500">We handle all critical expertise under one roof: electronics, firmware, AI, cloud infrastructure, app development, and mechanical engineering.</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="text-gray-700">
                    Bringing together all critical expertise: electronics, firmware, AI, cloud infrastructure, app development, and mechanical engineering
                  </p>
                </div>
              </li>
              
              <li className="flex items-start transform transition-all hover:translate-x-1 duration-200">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h4 className="text-gray-900 font-semibold mb-1 flex items-center cursor-help">
                        Motion Sensor Expertise 
                        <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Learn more</span>
                      </h4>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Rapid Prototyping & Validation</h5>
                        <p className="text-xs text-gray-500">Our specialized knowledge in motion sensors allows us to quickly develop and test prototypes, significantly reducing time-to-market.</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="text-gray-700">
                    Specialization in motion sensor technology complemented by rapid prototyping, shortening the path from concept to validated prototypes
                  </p>
                </div>
              </li>
              
              <li className="flex items-start transform transition-all hover:translate-x-1 duration-200">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h4 className="text-gray-900 font-semibold mb-1 flex items-center cursor-help">
                        Global Network
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Learn more</span>
                      </h4>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Strategic Partnerships</h5>
                        <p className="text-xs text-gray-500">Our worldwide manufacturing and software partners ensure solutions can scale efficiently and be customized to meet specific regional needs.</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="text-gray-700">
                    Worldwide manufacturing and software partners ensuring scalability and tailored solutions for any market
                  </p>
                </div>
              </li>
              
              <li className="flex items-start transform transition-all hover:translate-x-1 duration-200">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-amber-600" />
                  </div>
                </div>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h4 className="text-gray-900 font-semibold mb-1 flex items-center cursor-help">
                        Consolidated Process
                        <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Learn more</span>
                      </h4>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">Streamlined Development</h5>
                        <p className="text-xs text-gray-500">With clear ownership and optimized workflows, we eliminate common bottlenecks that plague IoT projects, reducing risk and development time.</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="text-gray-700">
                    Development under one roof, ensuring clear ownership, streamlined processes, reduced risk, and optimized timelines
                  </p>
                </div>
              </li>
              
              <li className="flex items-start transform transition-all hover:translate-x-1 duration-200">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-rose-600" />
                  </div>
                </div>
                <div>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <h4 className="text-gray-900 font-semibold mb-1 flex items-center cursor-help">
                        Proven Success
                        <span className="ml-2 text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">Learn more</span>
                      </h4>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h5 className="text-sm font-medium">FireCat Case Study</h5>
                        <p className="text-xs text-gray-500">We delivered the FireCat product from concept to market in just 6 months, demonstrating our ability to rapidly develop and deploy IoT solutions.</p>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                  <p className="text-gray-700">
                    We took FireCat to market in just 6 months, working iteratively with clear business cases and prototyping to ensure market fit
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <a href="/projects/firecat" className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition group">
                See FireCat Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 p-1 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50 animate-pulse-slow"></div>
              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Holistic Approach</h4>
                <p className="text-gray-700 mb-6">
                  By consolidating the entire development process under one roof, WRLDS ensures clear ownership, streamlined processes, and optimized development timelines.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                      <Lightbulb className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h5 className="text-gray-900 font-medium">Iterative Development</h5>
                      <p className="text-sm text-gray-600">Clear business cases & continuous feedback</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                      <Layers className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h5 className="text-gray-900 font-medium">All-in-One Expertise</h5>
                      <p className="text-sm text-gray-600">No handoffs between multiple vendors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <h5 className="text-gray-900 font-medium">Accelerated Timeline</h5>
                      <p className="text-sm text-gray-600">From concept to market in months, not years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default WhyWrlds;
