
import React from 'react';
import { ArrowRight, Clock, FileText, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const TryUsOffer = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take the first step with our risk-free consultation package and get a clear roadmap for your smart textile project.
            </p>
          </div>
          
          {/* Offer card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <CardHeader className="bg-black text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-1">Vision & Roadmap Package</CardTitle>
                    <CardDescription className="text-gray-300">Comprehensive project planning in two weeks</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold mb-1">$999</div>
                    <div className="text-xs text-gray-300">One-time payment</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-3">
                    <div className="p-3 bg-gray-100 rounded-full mb-3">
                      <FileText className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold mb-1">Detailed Scope</h3>
                    <p className="text-sm text-gray-600">Comprehensive project requirements and technical specifications</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <div className="p-3 bg-gray-100 rounded-full mb-3">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold mb-1">Clear Vision</h3>
                    <p className="text-sm text-gray-600">Strategic roadmap with actionable milestones and recommendations</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <div className="p-3 bg-gray-100 rounded-full mb-3">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="font-semibold mb-1">Quick Turnaround</h3>
                    <p className="text-sm text-gray-600">Complete delivery within 2 weeks of initial consultation</p>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="font-semibold mb-3">What you'll receive:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <span>Technical assessment and feasibility study</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <span>Competitor and market analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <span>Detailed requirements document</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <span>Project roadmap with timeline and budget estimates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">✓</span>
                      <span>Recommended technologies and implementation strategies</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="w-full flex flex-col items-center justify-center">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    100% money-back guarantee if you're not satisfied with our recommendations
                  </p>
                  <Button className="w-full md:w-auto bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 py-6 font-semibold shadow-none">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          
          {/* Testimonial or social proof */}
          <div className="mt-12 text-center">
            <p className="text-sm italic text-gray-500 max-w-2xl mx-auto">
              "The roadmap package from WRLDS helped us clarify our vision and made the development process much smoother. It was worth every penny."
            </p>
            <p className="text-sm font-semibold mt-2">— Sarah Chen, CTO at FitTech Innovations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryUsOffer;
