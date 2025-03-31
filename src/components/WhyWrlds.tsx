
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Layers, BarChart, Lightbulb, AlertTriangle, Clock4 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Counter animation component
const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "", decimals = 0 }: { 
  end: number; 
  duration?: number; 
  prefix?: string; 
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, { once: true, margin: "-100px" });
  
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
  
  return (
    <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

const WhyWrlds = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="why-wrlds" className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Why WRLDS?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-3xl mx-auto">
            In an industry where complexity leads to failure, we bring simplicity and expertise to ensure your success
          </motion.p>
        </motion.div>
        
        {/* Market challenges section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={3.8} decimals={1} suffix=" Billion" /> USD
            </h3>
            <p className="text-gray-300">
              Market estimated to reach this value, with massive growth potential for smart textile solutions
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={60} suffix="%" /> 
            </h3>
            <p className="text-gray-300">
              of IoT projects stall at the proof-of-concept stage due to fragmented expertise and poor coordination
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
              <Clock4 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white text-2xl lg:text-3xl font-bold mb-3">
              <AnimatedCounter end={80} suffix="%" />
            </h3>
            <p className="text-gray-300">
              Increase in time-to-market for IoT products over the past four years, creating costly delays
            </p>
          </motion.div>
        </motion.div>
        
        {/* Our solution section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The WRLDS Difference
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white font-medium">Seamless integration</span> of all critical expertise: electronics, firmware, AI, cloud infrastructure, app development, and mechanical engineering
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white font-medium">Specialization in motion sensor technology</span> complemented by rapid prototyping, shortening the path from concept to validated prototypes
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white font-medium">Global network</span> of manufacturing and software partners ensuring scalability and tailored solutions
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white font-medium">Consolidated development process</span> under one roof, ensuring clear ownership, streamlined processes, reduced risk, and optimized timelines
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">
                  <span className="text-white font-medium">Proven success:</span> We took FireCat to market in just 6 months, working iteratively with clear business cases and prototyping to ensure market fit
                </p>
              </li>
            </ul>
            
            <div className="mt-8">
              <a
                href="/projects/firecat"
                className="inline-flex items-center px-5 py-2.5 bg-white text-black rounded-md hover:bg-gray-200 transition group"
              >
                See FireCat Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="order-1 md:order-2">
            <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-1 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse-slow"></div>
              <div className="bg-black/60 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-white/10">
                <h4 className="text-xl font-bold text-white mb-4">Our Holistic Approach</h4>
                <p className="text-gray-300 mb-6">
                  By consolidating the entire development process under one roof, WRLDS ensures clear ownership, streamlined processes, and optimized development timelines.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Iterative Development</h5>
                      <p className="text-sm text-gray-400">Clear business cases & continuous feedback</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Layers className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium">All-in-One Expertise</h5>
                      <p className="text-sm text-gray-400">No handoffs between multiple vendors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Accelerated Timeline</h5>
                      <p className="text-sm text-gray-400">From concept to market in months, not years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
