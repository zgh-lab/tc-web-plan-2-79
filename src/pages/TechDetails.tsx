
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, Download, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const TechDetails = () => {
  const isMobile = useIsMobile();
  
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  
  const itemAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Deep Dive</h1>
              <div className="h-1 w-20 bg-gray-800 mb-8"></div>
              <p className="text-xl text-gray-600 md:pr-24">
                Explore the technical details behind our smart textile sensor technology and learn how our system architecture enables rapid development and deployment.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerAnimation}
              initial="initial"
              animate="animate"
              className="prose prose-lg max-w-none"
            >
              <motion.div variants={itemAnimation} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <span className="bg-gray-100 text-gray-600 rounded-full w-10 h-10 inline-flex items-center justify-center mr-3 text-lg">1</span>
                  System Architecture
                </h2>
                
                <Card className="overflow-hidden mb-8 border-none shadow-lg">
                  <div className="bg-gray-50 p-4 border-b">
                    <h3 className="font-medium text-gray-700">WRLDS Platform Architecture Overview</h3>
                  </div>
                  <CardContent className={`${isMobile ? 'p-2' : 'p-4'} bg-white`}>
                    <div className="w-full max-w-full overflow-x-auto py-4" style={{ minHeight: isMobile ? '320px' : '400px' }}>
                      <ProductPlatform />
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-semibold mb-3 text-lg">Real-time Data Processing</h3>
                    <p className="text-gray-600">Our architecture processes sensor data in real-time, enabling immediate insights and responsive applications.</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Processing Speed</span>
                        <span className="text-sm font-medium">98%</span>
                      </div>
                      <Progress value={98} className="h-2" />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-semibold mb-3 text-lg">Cloud Integration</h3>
                    <p className="text-gray-600">Seamless cloud integration provides scalability and accessibility for all your data and applications.</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Cloud Reliability</span>
                        <span className="text-sm font-medium">99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemAnimation} className="mb-16">
                <h2 className="text-3xl font-bold mb-8 flex items-center">
                  <span className="bg-gray-100 text-gray-600 rounded-full w-10 h-10 inline-flex items-center justify-center mr-3 text-lg">2</span>
                  Development Approach
                </h2>
                
                <p className="text-lg text-gray-600 mb-8">
                  At WRLDS, we've developed a systematic approach to creating smart textile solutions that combines technical innovation with practical implementation. 
                  Our comprehensive development process ensures that every project moves efficiently from concept to market-ready product.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-gray-800">1</span>
                    </div>
                    <h3 className="font-semibold mb-3">Discovery</h3>
                    <p className="text-gray-600 text-sm">We begin with thorough market research and requirements gathering to understand your specific needs and opportunities.</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Market analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Opportunity mapping</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Requirements documentation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-gray-800">2</span>
                    </div>
                    <h3 className="font-semibold mb-3">Design & Prototyping</h3>
                    <p className="text-gray-600 text-sm">Our teams create initial designs and functional prototypes that allow for early testing and iteration.</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Concept design</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Rapid prototyping</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">User feedback collection</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-xl font-bold text-gray-800">3</span>
                    </div>
                    <h3 className="font-semibold mb-3">Development & Testing</h3>
                    <p className="text-gray-600 text-sm">We rigorously develop and test all components to ensure they meet performance and reliability standards.</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Engineering development</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Quality assurance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm">Performance optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center">
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Download className="h-6 w-6 text-gray-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Download our Technical Whitepaper</h3>
                      <p className="text-gray-600 mb-4">Get a more detailed look at our technical approach, architecture details, and implementation strategies.</p>
                      <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors inline-flex items-center">
                        Download PDF
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <Link to="/development-process" className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all group mb-4 sm:mb-0">
                  Explore Our Development Process
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a href="#" className="text-gray-600 hover:text-gray-800 flex items-center">
                  <span className="mr-2">Have questions?</span>
                  <span className="font-semibold border-b-2 border-gray-400">Contact our technical team</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TechDetails;
