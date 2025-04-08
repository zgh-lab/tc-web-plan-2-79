
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Box, Truck, Code, Rocket, 
  CheckCircle, ArrowRight
} from "lucide-react";

const ProductPlatform = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 0.7,
      width: isMobile ? "40px" : "100px",
      transition: { duration: 0.8, delay: 0.5 }
    }
  };

  // Technology process steps
  const technologyProcess = [
    {
      icon: <Box className="h-5 w-5 text-gray-700" />,
      title: "WRLDS proprietary modules",
      description: "Our core technology components developed in-house"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-gray-700" />,
      title: "Vetted off-the-shelf hardware",
      description: "Carefully selected components that complement our technology"
    },
    {
      icon: <Truck className="h-5 w-5 text-gray-700" />,
      title: "Vetted production partners",
      description: "Expert manufacturing partners for quality and reliability"
    },
    {
      icon: <Code className="h-5 w-5 text-gray-700" />,
      title: "Adaptation projects",
      description: "Tailoring solutions to specific industry needs"
    },
    {
      icon: <Rocket className="h-5 w-5 text-gray-700" />,
      title: "Hitting the market",
      description: "Bringing your product to life with speed and confidence"
    }
  ];

  return (
    <section id="technology" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            Our Approach
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-black mb-3">
            How Our Technology Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            WRLDS builds hardware and software with proprietary and off-the-shelf modules, 
            allowing us to develop completely unique solutions at high speed and lower risk.
          </motion.p>
        </motion.div>

        {/* Technology Process Flow */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className={`${isMobile ? "space-y-8" : "relative"}`}>
            {/* Desktop version - horizontal flow */}
            {!isMobile && (
              <div className="hidden md:flex items-center justify-between relative">
                {/* Progress line connecting all steps */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
                
                {technologyProcess.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="z-10 flex flex-col items-center"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className={`w-16 h-16 rounded-full ${index === technologyProcess.length - 1 ? "bg-gray-200" : "bg-white"} border-2 border-gray-300 flex items-center justify-center shadow-md mb-3`}>
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-gray-800 text-center max-w-[120px]">{step.title}</h3>
                    <p className="text-xs text-gray-600 text-center max-w-[120px] mt-1">{step.description}</p>
                    
                    {index < technologyProcess.length - 1 && (
                      <motion.div 
                        className="absolute top-1/2 -translate-y-1/2 text-gray-400"
                        style={{ left: `calc(${(index + 0.5) * 25}% - 8px)` }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Mobile version - vertical flow */}
            {isMobile && (
              <div className="md:hidden space-y-6">
                {technologyProcess.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-sm`}>
                        {step.icon}
                      </div>
                      {index < technologyProcess.length - 1 && (
                        <div className="absolute top-12 left-1/2 h-6 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-gray-800 font-bold">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPlatform;
