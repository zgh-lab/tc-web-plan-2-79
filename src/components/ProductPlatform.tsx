
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Bluetooth, Database, Server, Smartphone, ArrowRight, 
  Cpu, Gauge, Battery, Wifi, Radio, Cloud, Layers, Code 
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

  return (
    <section id="product-platform" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            WRLDS Platform Architecture
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our end-to-end technology stack connects physical sensors to intelligent applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Main visualization container */}
          <div className={`flex flex-col ${isMobile ? "space-y-10" : "md:flex-row md:justify-between md:items-center"}`}>
            
            {/* INPUT SIDE */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-4 items-center"
              style={{ width: isMobile ? "100%" : "25%" }}
            >
              <div className="bg-teal-100 p-5 rounded-xl border border-teal-200 w-full">
                <h3 className="font-semibold text-teal-800 text-xl mb-3 flex items-center">
                  <Layers className="mr-2 w-5 h-5" />
                  Sensor Hardware
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Gauge className="text-teal-600 w-5 h-5 mr-2" />
                    <span>Motion Sensors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Cpu className="text-teal-600 w-5 h-5 mr-2" />
                    <span>HR Sensors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Bluetooth className="text-teal-600 w-5 h-5 mr-2" />
                    <span>Bluetooth/WiFi</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Battery className="text-teal-600 w-5 h-5 mr-2" />
                    <span>Battery</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Database className="text-teal-600 w-5 h-5 mr-2" />
                    <span>Storage</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Radio className="text-teal-600 w-5 h-5 mr-2" />
                    <span>4G/5G</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-gray-500">Data Input</div>
            </motion.div>
            
            {/* Mobile arrow pointing down for mobile layout */}
            {isMobile && (
              <motion.div variants={itemVariants} className="flex justify-center">
                <ArrowRight className="transform rotate-90 w-8 h-8 text-gray-400" />
              </motion.div>
            )}
            
            {/* Desktop arrow pointing right for desktop layout */}
            {!isMobile && (
              <motion.div 
                variants={arrowVariants}
                className="hidden md:flex items-center justify-center"
              >
                <div className="h-1 bg-gray-300 w-full"></div>
                <ArrowRight className="text-gray-400 w-6 h-6" />
              </motion.div>
            )}

            {/* PLATFORM SECTION */}
            <motion.div 
              variants={itemVariants}
              className="rounded-3xl overflow-hidden border border-gray-300"
              style={{ width: isMobile ? "100%" : "40%" }}
            >
              <div className="bg-gray-200 p-4 text-center font-bold text-gray-700">
                WRLDS Platform
              </div>
              <div className="bg-gray-100 p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* First row */}
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Database className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>Data Storage</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Gauge className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>Frequency Settings</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Cpu className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>AI Toolbox</div>
                </div>
                
                {/* Second row */}
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Battery className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>Power Management</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Code className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>Embedded Software</div>
                </div>
                <div className="bg-teal-100 rounded-lg p-3 text-sm text-center shadow-sm">
                  <Smartphone className="w-5 h-5 mx-auto mb-1 text-teal-600" />
                  <div>Demo App</div>
                </div>
                
                {/* Third row */}
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Wifi className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>Data Streaming</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Cpu className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>Tiny ML/AI</div>
                </div>
                <div className="bg-teal-100 rounded-lg p-3 text-sm text-center shadow-sm">
                  <Layers className="w-5 h-5 mx-auto mb-1 text-teal-600" />
                  <div>Service Apps</div>
                </div>
                
                {/* Fourth row */}
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Server className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>Compute Engine</div>
                </div>
                <div className="bg-teal-100 rounded-lg p-3 text-sm text-center shadow-sm">
                  <Cloud className="w-5 h-5 mx-auto mb-1 text-teal-600" />
                  <div>Cloud Software</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-sm text-center shadow-sm">
                  <Code className="w-5 h-5 mx-auto mb-1 text-gray-600" />
                  <div>SDK Integration</div>
                </div>
              </div>
            </motion.div>
            
            {/* Mobile arrow pointing down for mobile layout */}
            {isMobile && (
              <motion.div variants={itemVariants} className="flex justify-center">
                <ArrowRight className="transform rotate-90 w-8 h-8 text-gray-400" />
              </motion.div>
            )}
            
            {/* Desktop arrow pointing right for desktop layout */}
            {!isMobile && (
              <motion.div 
                variants={arrowVariants}
                className="hidden md:flex items-center justify-center"
              >
                <div className="h-1 bg-gray-300 w-full"></div>
                <ArrowRight className="text-gray-400 w-6 h-6" />
              </motion.div>
            )}
            
            {/* OUTPUT SIDE */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-4 items-center"
              style={{ width: isMobile ? "100%" : "25%" }}
            >
              <div className="bg-teal-100 p-5 rounded-xl border border-teal-200 w-full">
                <h3 className="font-semibold text-teal-800 text-xl mb-3 flex items-center">
                  <Smartphone className="mr-2 w-5 h-5" />
                  User Interface
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Layers className="text-teal-600 w-5 h-5 mr-2" />
                    <span>Web Dashboard</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Smartphone className="text-teal-600 w-5 h-5 mr-2" />
                    <span>App UI/UX</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center">
                    <Code className="text-teal-600 w-5 h-5 mr-2" />
                    <span>On-device Feedback</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-gray-500">Data Output</div>
            </motion.div>
          </div>
          
          {/* Flow diagram caption */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center text-gray-500 italic max-w-2xl mx-auto"
          >
            <p>Our platform seamlessly connects hardware sensors to intelligent user interfaces, 
            handling everything from data collection and processing to visualization and feedback.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPlatform;
