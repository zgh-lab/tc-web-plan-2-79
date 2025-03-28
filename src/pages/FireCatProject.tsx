
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FireCatProject = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div 
          className="relative w-full h-[40vh] md:h-[50vh] bg-blue-900 overflow-hidden"
          style={{
            backgroundImage: "url('/lovable-uploads/5ca619e6-2139-4879-9b3c-94777ab85e2a.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              FireCat's 6th SENSE
            </motion.h1>
            <motion.div 
              className="w-20 h-1 bg-white mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.p 
              className="text-xl text-center max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Advanced safety system for high-risk environments
            </motion.p>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="w-full max-w-4xl mx-auto px-6 md:px-8 mt-8">
          <Link to="/#projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </div>
        
        {/* Case Study Content */}
        <div className="w-full max-w-4xl mx-auto px-6 md:px-8 py-12">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Case Study: FireCat's 6th SENSE by WRLDS Technologies</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-2">Background</h3>
              <p>
                FireCat Group aimed to enhance the safety and operational effectiveness of personnel in high-risk 
                environments such as law enforcement, military operations, and firefighting. They required an advanced, 
                integrated sensor solution that could provide critical real-time data for risk management and decision-making.
              </p>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
            <p>
              Traditional approaches lacked comprehensive real-time tracking and situational awareness, leaving personnel 
              vulnerable and decision-making delayed. The market required a robust solution capable of capturing essential 
              data while being resilient enough for extreme conditions.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
            <p>
              WRLDS Technologies provided an end-to-end solution called the 6th SENSE, combining sophisticated AI-driven 
              sensors seamlessly integrated into uniforms. The solution features:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white shadow-md rounded-lg p-6 border border-blue-100">
                <h4 className="text-lg font-semibold mb-2 text-blue-700">Main Unit</h4>
                <p>Secure real-time data transmission with encrypted communication.</p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6 border border-blue-100">
                <h4 className="text-lg font-semibold mb-2 text-blue-700">High-Quality Sensors</h4>
                <p>Durable sensors resistant to dust, water, and extreme temperatures.</p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6 border border-blue-100">
                <h4 className="text-lg font-semibold mb-2 text-blue-700">Integrated Clothing</h4>
                <p>Customized shirts embedding AI-powered sensors, maintaining user comfort.</p>
              </div>
              
              <div className="bg-white shadow-md rounded-lg p-6 border border-blue-100">
                <h4 className="text-lg font-semibold mb-2 text-blue-700">Control Unit</h4>
                <p>Centralized AI interface providing transparent data visualization and management via an intuitive supervisor app.</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold mb-4">Critical Features</h4>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Man Down Alarm for immediate alerts</li>
              <li>Precise GPS positioning for location tracking</li>
              <li>Real-time monitoring of vital signs</li>
              <li>Easily accessible Panic Button for emergencies</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold">Life-saving technology</h4>
                  <p>Rapid data acquisition facilitates quicker responses in emergencies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold">Technological advancement</h4>
                  <p>Machine learning prevents false alarms by adapting to individual behavioral baselines.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold">Long-lasting and secure</h4>
                  <p>Durable hardware with a 7-10 year lifespan, robust encryption, and full GDPR compliance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold">Easy Maintenance</h4>
                  <p>Sensors are fully washable and require minimal maintenance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-1">✓</div>
                <div>
                  <h4 className="font-semibold">User-Friendly</h4>
                  <p>Plug & Play installation within three minutes, providing 12-20 hours of continuous operation per charge.</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
            <p>
              FireCat successfully implemented the 6th SENSE solution, significantly enhancing situational awareness, 
              safety, and operational efficiency of high-risk personnel. WRLDS' innovative platform and specialized 
              knowledge allowed for rapid deployment, immediate positive impact, and a scalable model for future expansions.
            </p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FireCatProject;
