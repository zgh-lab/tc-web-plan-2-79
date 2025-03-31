
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { 
  Bluetooth, Database, Server, Smartphone, ArrowRight, 
  Cpu, Gauge, Battery, Wifi, Radio, Cloud, Layers, Code,
  Info, HelpCircle
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
    <section id="product-platform" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            How Our Technology Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Our platform connects physical devices to smart applications - here's a simplified view
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <Button variant="outline" className="flex items-center gap-2 rounded-full">
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
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 w-full shadow-sm">
                <h3 className="font-semibold text-blue-800 text-xl mb-3 flex items-center">
                  <Layers className="mr-2 w-5 h-5" />
                  Physical Devices
                </h3>
                <p className="text-blue-600 text-sm mb-4">The hardware that collects data from the physical world</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-blue-50 transition-colors">
                    <Gauge className="text-blue-600 w-5 h-5 mr-2" />
                    <span>Motion Sensors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-blue-50 transition-colors">
                    <Cpu className="text-blue-600 w-5 h-5 mr-2" />
                    <span>Heart Rate Sensors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-blue-50 transition-colors">
                    <Bluetooth className="text-blue-600 w-5 h-5 mr-2" />
                    <span>Wireless Connectivity</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-blue-50 transition-colors">
                    <Battery className="text-blue-600 w-5 h-5 mr-2" />
                    <span>Power Management</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-blue-50 transition-colors">
                    <Database className="text-blue-600 w-5 h-5 mr-2" />
                    <span>Local Storage</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-blue-50 transition-colors">
                    <Radio className="text-blue-600 w-5 h-5 mr-2" />
                    <span>Cellular Connection</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-blue-500 flex items-center gap-2">
                <span>Data Collection</span>
                <Info className="h-4 w-4 cursor-help" />
              </div>
            </motion.div>
            
            {/* Mobile arrow pointing down for mobile layout */}
            {isMobile && (
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="bg-blue-100 rounded-full p-2 animate-pulse">
                  <ArrowRight className="transform rotate-90 w-8 h-8 text-blue-500" />
                </div>
              </motion.div>
            )}
            
            {/* Desktop arrow pointing right for desktop layout */}
            {!isMobile && (
              <motion.div 
                variants={arrowVariants}
                className="hidden md:flex items-center justify-center"
              >
                <div className="h-1 bg-blue-200 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="bg-blue-100 rounded-full p-2">
                  <ArrowRight className="text-blue-500 w-6 h-6" />
                </div>
              </motion.div>
            )}

            {/* PLATFORM SECTION - OUR TECHNOLOGY */}
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
              style={{ width: isMobile ? "100%" : "40%" }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 text-center font-bold text-white">
                WRLDS Platform
              </div>
              <div className="bg-white p-6">
                <p className="text-center text-gray-600 mb-6">Our platform processes data and powers intelligent applications</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {/* First row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Database className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Cloud Storage</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Gauge className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Data Processing</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Cpu className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>AI & Machine Learning</div>
                  </div>
                  
                  {/* Second row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Battery className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Power Optimization</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Code className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Custom Software</div>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-purple-200 transition-colors">
                    <Smartphone className="w-5 h-5 mx-auto mb-1 text-purple-700" />
                    <div>Demo Applications</div>
                  </div>
                  
                  {/* Third row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Wifi className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Real-time Data</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Cpu className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Edge Computing</div>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-purple-200 transition-colors">
                    <Layers className="w-5 h-5 mx-auto mb-1 text-purple-700" />
                    <div>Service APIs</div>
                  </div>
                  
                  {/* Fourth row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Server className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Server Infrastructure</div>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-purple-200 transition-colors">
                    <Cloud className="w-5 h-5 mx-auto mb-1 text-purple-700" />
                    <div>Cloud Services</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Code className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                    <div>Developer Tools</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 text-center text-xs text-white">
                Reliable, secure, and scalable infrastructure
              </div>
            </motion.div>
            
            {/* Mobile arrow pointing down for mobile layout */}
            {isMobile && (
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="bg-green-100 rounded-full p-2 animate-pulse">
                  <ArrowRight className="transform rotate-90 w-8 h-8 text-green-500" />
                </div>
              </motion.div>
            )}
            
            {/* Desktop arrow pointing right for desktop layout */}
            {!isMobile && (
              <motion.div 
                variants={arrowVariants}
                className="hidden md:flex items-center justify-center"
              >
                <div className="h-1 bg-green-200 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="bg-green-100 rounded-full p-2">
                  <ArrowRight className="text-green-500 w-6 h-6" />
                </div>
              </motion.div>
            )}
            
            {/* OUTPUT SIDE - USER APPLICATIONS */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-4 items-center"
              style={{ width: isMobile ? "100%" : "25%" }}
            >
              <div className="bg-green-50 p-5 rounded-xl border border-green-100 w-full shadow-sm">
                <h3 className="font-semibold text-green-800 text-xl mb-3 flex items-center">
                  <Smartphone className="mr-2 w-5 h-5" />
                  User Applications
                </h3>
                <p className="text-green-600 text-sm mb-4">How people interact with and benefit from the collected data</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-green-50 transition-colors">
                    <Layers className="text-green-600 w-5 h-5 mr-2" />
                    <span>Analytics Dashboard</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-green-50 transition-colors">
                    <Smartphone className="text-green-600 w-5 h-5 mr-2" />
                    <span>Mobile Applications</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-green-50 transition-colors">
                    <Code className="text-green-600 w-5 h-5 mr-2" />
                    <span>Customized Reports</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-green-50 transition-colors">
                    <Cloud className="text-green-600 w-5 h-5 mr-2" />
                    <span>Third-party Integration</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-green-500 flex items-center gap-2">
                <span>Data Visualization</span>
                <Info className="h-4 w-4 cursor-help" />
              </div>
            </motion.div>
          </div>
          
          {/* Platform benefits */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Benefits of Our Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-blue-50">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-3">
                  <Gauge className="text-blue-600 w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Fast Processing</h4>
                <p className="text-sm text-gray-600">Real-time data analysis for immediate insights</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-purple-50">
                <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-3">
                  <Cpu className="text-purple-600 w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Smart Automation</h4>
                <p className="text-sm text-gray-600">AI-driven decision making and predictions</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-green-50">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-3">
                  <Smartphone className="text-green-600 w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2">Easy Integration</h4>
                <p className="text-sm text-gray-600">Works with existing systems and applications</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPlatform;
