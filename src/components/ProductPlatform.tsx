
import { motion } from "framer-motion";
import { Layers, Gauge, Cpu, Bluetooth, Battery, Database, ArrowRight, Info, Smartphone, Code, Wifi, Server, Cloud } from 'lucide-react';

const ProductPlatform = () => {
  return (
    <div className="w-full">
      {/* Platform Architecture - Responsive Layout */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Physical Devices Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 min-w-0"
        >
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 h-full shadow-sm">
            <h3 className="font-semibold text-black text-xl mb-3 flex items-center">
              <Layers className="mr-2 w-5 h-5 text-black" />
              Physical Devices
            </h3>
            <p className="text-gray-600 text-sm mb-4">Hardware that collects data</p>
            <div className="space-y-3">
              {[
                { icon: <Gauge className="text-black w-5 h-5 flex-shrink-0" />, text: "Motion Sensors" },
                { icon: <Cpu className="text-black w-5 h-5 flex-shrink-0" />, text: "Heart Rate Sensors" },
                { icon: <Bluetooth className="text-black w-5 h-5 flex-shrink-0" />, text: "Wireless Connectivity" },
                { icon: <Battery className="text-black w-5 h-5 flex-shrink-0" />, text: "Power Management" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                  <div className="mr-3">{item.icon}</div>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center font-medium text-black flex items-center justify-center gap-2 text-sm mt-3">
            <span>Data Collection</span>
            <Info className="h-4 w-4 cursor-help" />
          </div>
        </motion.div>

        {/* Flow Arrows - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center w-12 flex-shrink-0"
        >
          <div className="h-1 bg-gray-200 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
          </div>
          <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
            <ArrowRight className="text-black w-5 h-5" />
          </div>
        </motion.div>

        {/* WRLDS Platform Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-[1.5] min-w-0"
        >
          <div className="border border-gray-300 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
            <div className="bg-black p-4 text-center font-bold text-white">
              WRLDS Platform
            </div>
            <div className="bg-white p-4 flex-grow">
              <p className="text-center text-gray-600 mb-4">Our platform processes data and powers applications</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: <Database className="w-4 h-4" />, name: "Cloud Storage" },
                  { icon: <Gauge className="w-4 h-4" />, name: "Data Processing" },
                  { icon: <Cpu className="w-4 h-4" />, name: "AI & ML" },
                  { icon: <Battery className="w-4 h-4" />, name: "Power Opt." },
                  { icon: <Code className="w-4 h-4" />, name: "Software" },
                  { icon: <Smartphone className="w-4 h-4" />, name: "Demo Apps" },
                  { icon: <Wifi className="w-4 h-4" />, name: "Real-time" },
                  { icon: <Server className="w-4 h-4" />, name: "Edge Computing" },
                  { icon: <Layers className="w-4 h-4" />, name: "APIs" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 text-center shadow-sm hover:bg-gray-100 transition-colors flex flex-col items-center justify-center">
                    <div className="mb-2 text-black">{item.icon}</div>
                    <div className="text-gray-700 text-xs">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-black p-2 text-center text-xs text-white">
              Secure, scalable infrastructure
            </div>
          </div>
        </motion.div>

        {/* Flow Arrows - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center w-12 flex-shrink-0"
        >
          <div className="h-1 bg-gray-200 w-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
          </div>
          <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
            <ArrowRight className="text-black w-5 h-5" />
          </div>
        </motion.div>

        {/* User Applications Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-1 min-w-0"
        >
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 h-full shadow-sm">
            <h3 className="font-semibold text-black text-xl mb-3 flex items-center">
              <Smartphone className="mr-2 w-5 h-5 text-black" />
              User Applications
            </h3>
            <p className="text-gray-600 text-sm mb-4">How people interact with data</p>
            <div className="space-y-3">
              {[
                { icon: <Layers className="text-black w-5 h-5 flex-shrink-0" />, text: "Analytics Dashboard" },
                { icon: <Smartphone className="text-black w-5 h-5 flex-shrink-0" />, text: "Mobile Apps" },
                { icon: <Code className="text-black w-5 h-5 flex-shrink-0" />, text: "Customized Reports" },
                { icon: <Cloud className="text-black w-5 h-5 flex-shrink-0" />, text: "Third-party Integration" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 flex items-center hover:bg-gray-100 transition-colors">
                  <div className="mr-3">{item.icon}</div>
                  <span className="text-gray-700 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center font-medium text-black flex items-center justify-center gap-2 text-sm mt-3">
            <span>User Experience</span>
            <Info className="h-4 w-4 cursor-help" />
          </div>
        </motion.div>
      </div>

      {/* Mobile Flow Indicators - Only visible on mobile */}
      <div className="flex lg:hidden justify-center my-4">
        <div className="flex flex-col items-center">
          <ArrowRight className="text-gray-400 w-6 h-6 rotate-90" />
          <p className="text-xs text-gray-500 mt-1">Data Flow</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPlatform;
