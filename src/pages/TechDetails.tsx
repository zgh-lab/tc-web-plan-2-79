
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';

const TechDetails = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-white">
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
              <div className="bg-white rounded-lg mb-10 border border-gray-200 shadow-lg overflow-hidden">
                <div className={`${isMobile ? 'p-4' : 'p-8'} flex justify-center items-center transition-all duration-300`}>
                  <div className="w-full max-w-full overflow-x-auto" style={{ 
                    minHeight: isMobile ? '300px' : '400px',
                    scrollbarWidth: 'thin' 
                  }}>
                    <ProductPlatform />
                  </div>
                </div>
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
    </div>
  );
};

export default TechDetails;
