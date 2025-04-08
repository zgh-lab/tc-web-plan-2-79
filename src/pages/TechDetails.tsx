import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const TechDetails = () => {
  return <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Technical Deep Dive</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Explore the technical details behind our smart textile sensor technology and learn how our system architecture enables rapid development and deployment.
              </p>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">System Architecture</h2>
              <div className="bg-white p-8 rounded-lg mb-10 border border-gray-200 shadow-lg">
                <motion.div className="aspect-w-16 aspect-h-9 p-4 rounded-lg flex items-center justify-center" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }}>
                  {/* System Architecture Visualization */}
                  <div className="w-full">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center font-bold text-lg mb-4">WRLDS Smart Textile System Architecture</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-blue-50 p-4 rounded-lg shadow-sm border border-blue-100">
                          <h3 className="font-bold text-gray-800 mb-2 text-center">Input Layer</h3>
                          <div className="space-y-2">
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Pressure Sensors</div>
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Temperature Sensors</div>
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Motion Sensors</div>
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Biometric Sensors</div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-100">
                          <h3 className="font-bold text-gray-800 mb-2 text-center">Processing Layer</h3>
                          <div className="space-y-2">
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Microcontroller Unit</div>
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Signal Conditioning</div>
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Edge AI Module</div>
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Power Management</div>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-100">
                          <h3 className="font-bold text-gray-800 mb-2 text-center">Output Layer</h3>
                          <div className="space-y-2">
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Bluetooth/WiFi Module</div>
                            
                            <div className="bg-white p-2 rounded border border-gray-200 text-sm">Mobile App Interface</div>
                            
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="font-bold text-gray-800 mb-2 text-center">Integration Layer</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white p-2 rounded border border-gray-200 text-sm text-center">API Gateway</div>
                          <div className="bg-white p-2 rounded border border-gray-200 text-sm text-center">Data Pipeline</div>
                          <div className="bg-white p-2 rounded border border-gray-200 text-sm text-center">Machine Learning</div>
                          <div className="bg-white p-2 rounded border border-gray-200 text-sm text-center">Analytics Dashboard</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Our comprehensive system architecture illustrates how our proprietary modules integrate with hardware and software components
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">Our Approach</h2>
              <p>
                At WRLDS, we've developed a systematic approach to creating smart textile solutions that combines technical innovation with practical implementation. 
                Our comprehensive development process ensures that every project moves efficiently from concept to market-ready product.
              </p>
              
              <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold mb-2">Discovery</h3>
                  <p className="text-gray-600 text-sm">We begin with thorough market research and requirements gathering to understand your specific needs and opportunities.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold mb-2">Design & Prototyping</h3>
                  <p className="text-gray-600 text-sm">Our teams create initial designs and functional prototypes that allow for early testing and iteration.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-semibold mb-2">Development & Testing</h3>
                  <p className="text-gray-600 text-sm">We rigorously develop and test all components to ensure they meet performance and reliability standards.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mt-12 mb-6">Technical Specifications</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-4">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-2 text-left">Component</th>
                      <th className="border border-gray-200 px-4 py-2 text-left">Specifications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Sensor Types</td>
                      <td className="border border-gray-200 px-4 py-2">Pressure, temperature, strain, humidity, acceleration</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 font-medium">Connectivity</td>
                      <td className="border border-gray-200 px-4 py-2">Bluetooth LE, Wi-Fi, LTE-M, NB-IoT</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-medium">Battery Life</td>
                      <td className="border border-gray-200 px-4 py-2">Up to 12-20 hours, depending on configuration</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2 font-medium">Data Processing</td>
                      <td className="border border-gray-200 px-4 py-2">Edge computing with machine learning capabilities</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/development-process" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Our Development Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default TechDetails;