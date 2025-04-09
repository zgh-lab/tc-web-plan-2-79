
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);
  
  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Technical Deep Dive
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-12"
              >
                Explore the technical details behind our smart textile sensor technology and learn how our system architecture enables rapid development and deployment.
              </motion.p>
              
              {/* System Architecture Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mt-12 mb-6">System Architecture</h2>
                <p className="text-gray-600 mb-8">
                  Our platform uses a three-tier architecture connecting physical devices to our cloud services and user applications. 
                  The diagram below illustrates how data flows through our system.
                </p>

                {/* Progress bar showing flow */}
                <div className="w-full mb-8">
                  <Progress value={progressValue} className="h-2 bg-gray-100" />
                </div>
                
                <Card className="bg-white rounded-lg mb-10 border border-gray-200 shadow-sm overflow-hidden">
                  <CardContent className={`${isMobile ? 'p-2' : 'p-6'} flex justify-center`}>
                    <div className="w-full overflow-x-auto py-6" style={{ 
                      scrollbarWidth: 'thin',
                      WebkitOverflowScrolling: 'touch'
                    }}>
                      <ProductPlatform />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Our Approach Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mt-16 mb-6">Our Approach</h2>
                <p className="text-gray-600 mb-8">
                  At WRLDS, we've developed a systematic approach to creating smart textile solutions that combines technical innovation with practical implementation. 
                  Our comprehensive development process ensures that every project moves efficiently from concept to market-ready product.
                </p>
                
                <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Discovery",
                      description: "We begin with thorough market research and requirements gathering to understand your specific needs and opportunities."
                    },
                    {
                      title: "Design & Prototyping",
                      description: "Our teams create initial designs and functional prototypes that allow for early testing and iteration."
                    },
                    {
                      title: "Development & Testing",
                      description: "We rigorously develop and test all components to ensure they meet performance and reliability standards."
                    }
                  ].map((phase, i) => (
                    <motion.div 
                      key={phase.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <h3 className="font-semibold mb-3 text-lg">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link 
                to="/development-process" 
                className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
              >
                Explore Our Development Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TechDetails;
