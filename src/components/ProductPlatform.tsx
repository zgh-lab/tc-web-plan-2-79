
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { 
  Bluetooth, Database, Server, Smartphone, ArrowRight, 
  Cpu, Gauge, Battery, Wifi, Radio, Cloud, Layers, Code,
  Info, HelpCircle, Zap, Shield, Waves, Component, Lightbulb
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
    <section id="product-platform" className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Smart Technology Simplified
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Our platform connects physical devices to intelligent applications — no technical expertise required
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <Button variant="outline" className="flex items-center gap-2 rounded-full bg-black text-white hover:bg-gray-800 border-0">
              <HelpCircle className="h-4 w-4" />
              <span>New to IoT? See our beginner's guide</span>
            </Button>
          </motion.div>
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
            
            {/* INPUT SIDE - PHYSICAL DEVICES */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-4 items-center"
              style={{ width: isMobile ? "100%" : "25%" }}
            >
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-black text-xl mb-3 flex items-center">
                  <Component className="mr-2 w-5 h-5" />
                  Physical Devices
                </h3>
                <p className="text-gray-600 text-sm mb-4">Smart sensors that collect data from the physical world</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Gauge className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Motion Sensors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Waves className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Health Monitors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Bluetooth className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Wireless Connectivity</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Battery className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Long-life Battery</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-black flex items-center gap-2">
                <span>Data Collection</span>
                <Info className="h-4 w-4 cursor-help" />
              </div>
            </motion.div>
            
            {/* Mobile arrow pointing down for mobile layout */}
            {isMobile && (
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="bg-gray-200 rounded-full p-2 animate-pulse">
                  <ArrowRight className="transform rotate-90 w-8 h-8 text-black" />
                </div>
              </motion.div>
            )}
            
            {/* Desktop arrow pointing right for desktop layout */}
            {!isMobile && (
              <motion.div 
                variants={arrowVariants}
                className="hidden md:flex items-center justify-center"
              >
                <div className="h-1 bg-gray-300 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="bg-gray-200 rounded-full p-2">
                  <ArrowRight className="text-black w-6 h-6" />
                </div>
              </motion.div>
            )}

            {/* PLATFORM SECTION - OUR TECHNOLOGY */}
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border border-gray-300 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              style={{ width: isMobile ? "100%" : "40%" }}
            >
              <div className="bg-black p-4 text-center font-bold text-white flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                WRLDS PLATFORM
                <Zap className="w-5 h-5" />
              </div>
              <div className="bg-white p-6">
                <p className="text-center text-gray-600 mb-6">Our intelligent system transforms raw data into meaningful insights</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {/* First row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <Database className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="font-medium">Cloud Storage</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <Lightbulb className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="font-medium">AI Analysis</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <Shield className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="font-medium">Data Security</div>
                  </div>
                  
                  {/* Second row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <Battery className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="font-medium">Power Saving</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <Code className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="font-medium">Custom Apps</div>
                  </div>
                  <div className="bg-black rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-white">
                    <Smartphone className="w-5 h-5 mx-auto mb-1 text-white" />
                    <div className="font-medium">User Interface</div>
                  </div>
                  
                  {/* Third row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <Wifi className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="font-medium">Real-time Data</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-all duration-300 hover:scale-105 border border-gray-200">
                    <Cpu className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="font-medium">Edge Processing</div>
                  </div>
                  <div className="bg-black rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-800 transition-all duration-300 hover:scale-105 text-white">
                    <Layers className="w-5 h-5 mx-auto mb-1 text-white" />
                    <div className="font-medium">API Access</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-900 to-black p-2 text-center text-xs text-white">
                Reliable, secure, and scalable technology
              </div>
            </motion.div>
            
            {/* Mobile arrow pointing down for mobile layout */}
            {isMobile && (
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="bg-gray-200 rounded-full p-2 animate-pulse">
                  <ArrowRight className="transform rotate-90 w-8 h-8 text-black" />
                </div>
              </motion.div>
            )}
            
            {/* Desktop arrow pointing right for desktop layout */}
            {!isMobile && (
              <motion.div 
                variants={arrowVariants}
                className="hidden md:flex items-center justify-center"
              >
                <div className="h-1 bg-gray-300 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="bg-gray-200 rounded-full p-2">
                  <ArrowRight className="text-black w-6 h-6" />
                </div>
              </motion.div>
            )}
            
            {/* OUTPUT SIDE - USER APPLICATIONS */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-4 items-center"
              style={{ width: isMobile ? "100%" : "25%" }}
            >
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 w-full shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-black text-xl mb-3 flex items-center">
                  <Smartphone className="mr-2 w-5 h-5" />
                  User Experience
                </h3>
                <p className="text-gray-600 text-sm mb-4">Easy-to-use interfaces that bring data to life</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Layers className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Visual Dashboard</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Smartphone className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Mobile App</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Lightbulb className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Smart Alerts</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200">
                    <Cloud className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-800">Third-party Apps</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-black flex items-center gap-2">
                <span>Actionable Insights</span>
                <Info className="h-4 w-4 cursor-help" />
              </div>
            </motion.div>
          </div>
          
          {/* How it works - steps */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-start md:items-center relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center z-10 bg-white p-4 rounded-lg">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">1</div>
                <h4 className="font-semibold text-lg mb-2">Collect</h4>
                <p className="text-sm text-gray-600 max-w-[200px]">Smart sensors gather information from the environment</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center z-10 bg-white p-4 rounded-lg">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">2</div>
                <h4 className="font-semibold text-lg mb-2">Process</h4>
                <p className="text-sm text-gray-600 max-w-[200px]">Our platform analyzes data using AI algorithms</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center z-10 bg-white p-4 rounded-lg">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-3">3</div>
                <h4 className="font-semibold text-lg mb-2">Visualize</h4>
                <p className="text-sm text-gray-600 max-w-[200px]">Intuitive interfaces present insights clearly</p>
              </div>
              
              {/* Background line connecting steps */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 hidden md:block"></div>
            </div>
          </motion.div>
          
          {/* Platform benefits */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center p-3 bg-black rounded-full mb-4">
                  <Zap className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Quick Setup</h4>
                <p className="text-sm text-gray-600">Ready to use in minutes, not months</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center p-3 bg-black rounded-full mb-4">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Secure Data</h4>
                <p className="text-sm text-gray-600">End-to-end encryption and privacy controls</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center p-3 bg-black rounded-full mb-4">
                  <Layers className="text-white w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Full Ownership</h4>
                <p className="text-sm text-gray-600">You control your data and applications</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPlatform;
