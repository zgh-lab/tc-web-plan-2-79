
import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Thermometer, ShieldCheck, Mountain, FileSymlink, Cpu } from 'lucide-react';

const WorkwearProject = () => {
  return (
    <ProjectPageLayout
      title="Workwear Climate Control"
      subtitle="Intelligent temperature regulation for extreme work environments"
      imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
      brandName="European Multinational Textile Producer"
    >
      <h2 className="text-3xl font-bold mb-6">Case Study: Advanced Climate Control Workwear</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Background</h3>
        <p>
          A leading European textile manufacturer sought to create next-generation workwear for professionals operating in 
          extreme temperature environments. From arctic construction workers to foundry operators, they needed a solution 
          that could actively regulate body temperature without compromising mobility or safety compliance.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
      <p>
        Traditional approaches to temperature regulation in workwear were either passive (insulation) or bulky active systems 
        with external power sources and limited zoning capabilities. The client needed a fully integrated solution that could adapt 
        to changing conditions, worker activity levels, and provide targeted temperature control while maintaining all safety certifications.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Solution</h3>
      <p>
        WRLDS Technologies developed a comprehensive climate control workwear platform featuring:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Thermometer className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Adaptive Heating/Cooling</h4>
            <p>Textile-integrated heating and cooling elements with multi-zone temperature control.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cpu className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Smart Control System</h4>
            <p>AI-driven controller that learns user preferences and optimizes power usage based on conditions.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <ShieldCheck className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Safety Integration</h4>
            <p>Systems designed to maintain all industry safety certifications including flame resistance and electrical safety.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Mountain className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Extreme Durability</h4>
            <p>Components rated for operation in extreme temperatures with full washability and construction durability.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Modular design supporting full-body integration or focused application</li>
        <li>Extended battery life depending on conditions and settings</li>
        <li>Smartphone app for manual control and environmental monitoring</li>
        <li>Washable for multiple industrial cleaning cycles without performance degradation</li>
        <li>Compliance with industry-specific safety standards</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Worker Productivity</h4>
            <p>Significant increase in worker productivity in extreme temperature environments.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Safety Improvements</h4>
            <p>Reduced temperature-related incidents in first-year deployments.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Energy Efficiency</h4>
            <p>Smart systems use less energy than conventional solutions while providing better performance.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Regulatory Compliance</h4>
            <p>Meets all international standards for PPE while adding thermal management capabilities.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Outcome</h3>
      <p>
        The client has successfully launched a premium line of climate-controlled workwear that has been adopted by 
        major industrial clients across Northern Europe and Canada. The technology has been particularly valuable in 
        oil & gas, mining, and construction sectors operating in extreme climates. A significant reduction in cold-related 
        leave of absence has been reported by early adopting organizations.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <FileSymlink className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Ongoing Developments</h4>
          <p>
            Current R&D efforts are focused on expanding the system to include environmental hazard detection capabilities 
            and integration with wider workplace safety systems.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default WorkwearProject;
