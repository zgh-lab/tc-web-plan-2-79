
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle, Clock, FileSearch, Settings, Cpu, Code, Truck, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevelopmentProcess = () => {
  const developmentSteps = [
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "1. Discovery & Requirements",
      description: "We begin by understanding your needs, market opportunities, and technical requirements to establish clear project parameters and goals."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "2. Concept & Design",
      description: "Our experts craft initial designs and technical specifications, ensuring alignment with your brand identity and user experience goals."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "3. Hardware Development",
      description: "We select, design, and integrate sensor components, creating optimized hardware solutions that balance performance and efficiency."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "4. Software Development",
      description: "Our development team builds robust firmware, apps, and cloud platforms tailored to your product's unique requirements and user needs."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "5. Testing & Iteration",
      description: "Rigorous testing protocols ensure reliability, durability, and optimal performance across all conditions and use cases."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "6. Production & Deployment",
      description: "We support the transition from prototype to manufacturing, ensuring quality standards and seamless deployment."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "7. Continuous Improvement",
      description: "Post-launch analytics and feedback loops drive ongoing improvements, updates, and potential new features."
    }
  ];
  
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
            
            <h1 className="text-4xl font-bold mb-8">Our Structured Development Process</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-12">
                We've refined our development methodology to minimize risk and maximize innovation, 
                ensuring your textile sensor project moves efficiently from concept to reality.
              </p>
              
              <div className="space-y-12">
                {developmentSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      
                      {index < developmentSteps.length - 1 && (
                        <div className="h-8 w-px bg-gray-200 ml-6 my-2"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Our Development Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Rapid iteration cycles for continuous improvement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Transparent communication throughout the development process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Modular architecture allowing for flexible and scalable solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Risk mitigation strategies built into every phase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Focus on user experience and practical functionality</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 text-white p-8 rounded-lg my-12">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 mr-3" />
                  <h3 className="text-xl font-semibold">Time to Market</h3>
                </div>
                <p className="mb-6">
                  Our streamlined process significantly reduces development time. Where traditional 
                  development cycles might take 18-24 months, our approach can deliver market-ready 
                  solutions in as little as 6-9 months, depending on complexity.
                </p>
                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[65%] rounded-full"></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Traditional: 18-24 months</span>
                  <span>WRLDS: 6-9 months</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/tech-details" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Our Technology
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

export default DevelopmentProcess;

// Helper icon component for later
const ArrowRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
