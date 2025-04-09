
import { motion } from "framer-motion";
import { Layers, Gauge, Cpu, Bluetooth, Battery, Database, Radio, ArrowRight, Info, Smartphone, Code, Wifi, Server, Cloud } from 'lucide-react';

const ProductPlatform = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col space-y-4 items-center"
        style={{ width: '25%' }}
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

      <motion.div 
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="hidden md:flex items-center justify-center"
        style={{ width: '100px' }}
      >
        <div className="h-1 bg-gray-200 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        </div>
        <div className="bg-gray-100 rounded-full p-2">
          <ArrowRight className="text-black w-6 h-6" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-2xl overflow-hidden border border-gray-300 shadow-lg" 
        style={{ width: '40%' }}
      >
        <div className="bg-black p-4 text-center font-bold text-white">
          WRLDS Platform
        </div>
        <div className="bg-white p-6">
          <p className="text-center text-gray-600 mb-6">Our platform processes data and powers intelligent applications</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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

      <motion.div 
        initial={{ opacity: 0.3, scale: 0.9 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="hidden md:flex items-center justify-center"
        style={{ width: '100px' }}
      >
        <div className="h-1 bg-gray-200 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
        </div>
        <div className="bg-gray-100 rounded-full p-2">
          <ArrowRight className="text-black w-6 h-6" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex flex-col space-y-4 items-center"
        style={{ width: '25%' }}
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
          <span>User Experience</span>
          <Info className="h-4 w-4 cursor-help" />
        </div>
      </motion.div>
    </div>
  );
};

export default ProductPlatform;
