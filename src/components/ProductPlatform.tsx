
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
    <section id="product-platform" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
            How Our Technology Works
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Our platform connects physical devices to smart applications - here's a simplified view
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <Button variant="outline" className="flex items-center gap-2 rounded-full border-black text-black">
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
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 w-full shadow-sm">
                <h3 className="font-semibold text-black text-xl mb-3 flex items-center">
                  <Layers className="mr-2 w-5 h-5 text-black" />
                  Physical Devices
                </h3>
                <p className="text-gray-600 text-sm mb-4">The hardware that collects data from the physical world</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Gauge className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Motion Sensors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Cpu className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Heart Rate Sensors</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Bluetooth className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Wireless Connectivity</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Battery className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Power Management</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Database className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Local Storage</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Radio className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Cellular Connection</span>
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
                <div className="bg-gray-100 rounded-full p-2 animate-pulse">
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
                <div className="h-1 bg-gray-200 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="bg-gray-100 rounded-full p-2">
                  <ArrowRight className="text-black w-6 h-6" />
                </div>
              </motion.div>
            )}

            {/* PLATFORM SECTION - OUR TECHNOLOGY */}
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl overflow-hidden border border-gray-300 shadow-lg"
              style={{ width: isMobile ? "100%" : "40%" }}
            >
              <div className="bg-black p-4 text-center font-bold text-white">
                WRLDS Platform
              </div>
              <div className="bg-white p-6">
                <p className="text-center text-gray-600 mb-6">Our platform processes data and powers intelligent applications</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {/* First row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Database className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Cloud Storage</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Gauge className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Data Processing</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Cpu className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">AI & Machine Learning</div>
                  </div>
                  
                  {/* Second row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Battery className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Power Optimization</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Code className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Custom Software</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-200 transition-colors">
                    <Smartphone className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Demo Applications</div>
                  </div>
                  
                  {/* Third row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Wifi className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Real-time Data</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Cpu className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Edge Computing</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-200 transition-colors">
                    <Layers className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Service APIs</div>
                  </div>
                  
                  {/* Fourth row */}
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Server className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Server Infrastructure</div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-200 transition-colors">
                    <Cloud className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Cloud Services</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm text-center shadow-sm hover:bg-gray-100 transition-colors">
                    <Code className="w-5 h-5 mx-auto mb-1 text-black" />
                    <div className="text-gray-700">Developer Tools</div>
                  </div>
                </div>
              </div>
              <div className="bg-black p-2 text-center text-xs text-white">
                Reliable, secure, and scalable infrastructure
              </div>
            </motion.div>
            
            {/* Mobile arrow pointing down for mobile layout */}
            {isMobile && (
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="bg-gray-100 rounded-full p-2 animate-pulse">
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
                <div className="h-1 bg-gray-200 w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
                </div>
                <div className="bg-gray-100 rounded-full p-2">
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
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 w-full shadow-sm">
                <h3 className="font-semibold text-black text-xl mb-3 flex items-center">
                  <Smartphone className="mr-2 w-5 h-5 text-black" />
                  User Applications
                </h3>
                <p className="text-gray-600 text-sm mb-4">How people interact with and benefit from the collected data</p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Layers className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Analytics Dashboard</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Smartphone className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Mobile Applications</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Code className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Customized Reports</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                    <Cloud className="text-black w-5 h-5 mr-2" />
                    <span className="text-gray-700">Third-party Integration</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-medium text-black flex items-center gap-2">
                <span>Data Visualization</span>
                <Info className="h-4 w-4 cursor-help" />
              </div>
            </motion.div>
          </div>
          
          {/* Platform benefits */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-black mb-4 text-center">Benefits of Our Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-3">
                  <Gauge className="text-black w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2 text-black">Fast Processing</h4>
                <p className="text-sm text-gray-600">Real-time data analysis for immediate insights</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-3">
                  <Cpu className="text-black w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2 text-black">Smart Automation</h4>
                <p className="text-sm text-gray-600">AI-driven decision making and predictions</p>
              </div>
              
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-3">
                  <Smartphone className="text-black w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2 text-black">Easy Integration</h4>
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
