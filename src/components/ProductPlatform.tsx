
import { motion } from "framer-motion";
import { Layers, Gauge, Cpu, Bluetooth, Battery, Database, Radio, ArrowRight, Info, Smartphone, Code, Wifi, Server, Cloud } from 'lucide-react';

const ProductPlatform = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
      {/* Physical Devices Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col space-y-4 w-full md:w-1/4"
      >
        <div className="bg-gray-50 p-4 md:p-5 rounded-xl border border-gray-200 w-full shadow-sm">
          <h3 className="font-semibold text-black text-lg md:text-xl mb-3 flex items-center">
            <Layers className="mr-2 w-5 h-5 text-black" />
            Physical Devices
          </h3>
          <p className="text-gray-600 text-xs md:text-sm mb-4 break-normal">Hardware that collects data</p>
          <div className="space-y-2 md:space-y-3">
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Gauge className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Motion Sensors</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Cpu className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Heart Rate Sensors</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Bluetooth className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Wireless Connectivity</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Battery className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Power Management</span>
            </div>
          </div>
        </div>
        <div className="text-center font-medium text-black flex items-center justify-center gap-2 text-sm">
          <span>Data Collection</span>
          <Info className="h-4 w-4 cursor-help" />
        </div>
      </motion.div>

      {/* Arrow for Desktop */}
      <motion.div 
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex items-center justify-center w-12 flex-shrink-0"
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
        className="rounded-xl overflow-hidden border border-gray-300 shadow-lg w-full md:w-2/5"
      >
        <div className="bg-black p-3 md:p-4 text-center font-bold text-white text-sm md:text-base">
          WRLDS Platform
        </div>
        <div className="bg-white p-3 md:p-4">
          <p className="text-center text-gray-600 mb-4 text-xs md:text-sm">Our platform processes data and powers applications</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { icon: <Database className="w-4 h-4 mx-auto mb-1 text-black" />, name: "Cloud Storage" },
              { icon: <Gauge className="w-4 h-4 mx-auto mb-1 text-black" />, name: "Data Processing" },
              { icon: <Cpu className="w-4 h-4 mx-auto mb-1 text-black" />, name: "AI & ML" },
              { icon: <Battery className="w-4 h-4 mx-auto mb-1 text-black" />, name: "Power Opt." },
              { icon: <Code className="w-4 h-4 mx-auto mb-1 text-black" />, name: "Software" },
              { icon: <Smartphone className="w-4 h-4 mx-auto mb-1 text-black" />, name: "Demo Apps" },
              { icon: <Wifi className="w-4 h-4 mx-auto mb-1 text-black" />, name: "Real-time" },
              { icon: <Cpu className="w-4 h-4 mx-auto mb-1 text-black" />, name: "Edge" },
              { icon: <Layers className="w-4 h-4 mx-auto mb-1 text-black" />, name: "APIs" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-2 text-xs text-center shadow-sm hover:bg-gray-100 transition-colors">
                {item.icon}
                <div className="text-gray-700 truncate">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black p-2 text-center text-xs text-white">
          Secure, scalable infrastructure
        </div>
      </motion.div>

      {/* Arrow for Desktop */}
      <motion.div 
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden md:flex items-center justify-center w-12 flex-shrink-0"
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
        className="flex flex-col space-y-4 w-full md:w-1/4"
      >
        <div className="bg-gray-50 p-4 md:p-5 rounded-xl border border-gray-200 w-full shadow-sm">
          <h3 className="font-semibold text-black text-lg md:text-xl mb-3 flex items-center">
            <Smartphone className="mr-2 w-5 h-5 text-black" />
            User Applications
          </h3>
          <p className="text-gray-600 text-xs md:text-sm mb-4 break-normal">How people interact with data</p>
          <div className="space-y-2 md:space-y-3">
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Layers className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Analytics Dashboard</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Smartphone className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Mobile Apps</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Code className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Customized Reports</span>
            </div>
            <div className="bg-white rounded-lg p-2 md:p-3 flex items-center hover:bg-gray-100 transition-colors">
              <Cloud className="text-black w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
              <span className="text-gray-700 text-xs md:text-sm truncate">Third-party Integration</span>
            </div>
          </div>
        </div>
        <div className="text-center font-medium text-black flex items-center justify-center gap-2 text-sm">
          <span>User Experience</span>
          <Info className="h-4 w-4 cursor-help" />
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPlatform;
