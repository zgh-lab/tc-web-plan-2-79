
import CaseStudiesCarousel from "./CaseStudiesCarousel";

const CaseStudiesSection = () => {
  return (
    <div className="mt-16 mb-8 feature-item">
      <div className="text-center mb-8">
        <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          Textile Sensor Applications
        </div>
        <h3 className="text-2xl font-bold">Real-World Use Cases</h3>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore how our textile sensors are applied in different professional contexts, 
          from athletics to emergency response and industrial safety.
          <span className="block text-sm mt-1 text-gray-500">Scroll horizontally to see more examples →</span>
        </p>
      </div>
      
      <CaseStudiesCarousel />
    </div>
  );
};

export default CaseStudiesSection;
