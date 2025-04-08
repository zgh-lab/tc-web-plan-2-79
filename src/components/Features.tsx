
import { useEffect, useRef } from 'react';
import TextileSensorApplications from './features/TextileSensorApplications';
import CaseStudiesSection from './features/CaseStudiesSection';
import TechnologyApproach from './features/TechnologyApproach';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          // Make sure the element remains visible after animation
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        // Only set initial opacity if not already animated
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="features" className="relative bg-white overflow-hidden py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}> 
          <TextileSensorApplications />
          <CaseStudiesSection />
        </div>
      </section>
      <TechnologyApproach />
    </>
  );
};

export default Features;
