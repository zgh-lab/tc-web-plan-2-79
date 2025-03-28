
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  
  // Track scroll position for animations
  useEffect(() => {
    setLoaded(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const sections = ['hero', 'features', 'projects', 'process', 'contact'];
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight/2 && rect.bottom >= windowHeight/2) {
            setCurrentSection(section);
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-900 to-black text-white w-full max-w-[100vw] overflow-x-hidden transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed top-0 left-0 w-1 h-full z-50">
        <div className="h-full bg-blue-900/50 relative">
          {['hero', 'features', 'projects', 'process', 'contact'].map((section, index) => (
            <a 
              key={section} 
              href={`#${section}`}
              className="absolute w-3 h-3 -right-1 transform -translate-y-1/2 transition-all duration-300"
              style={{ top: `${(index + 1) * 20}%` }}
            >
              <div 
                className={`w-full h-full rounded-full transition-all duration-300 
                  ${currentSection === section ? 'bg-blue-500 scale-150' : 'bg-blue-300 scale-100'}
                `}
              />
            </a>
          ))}
        </div>
      </div>
      
      <Navbar />
      
      <div id="hero" className="section">
        <Hero />
      </div>
      
      <div id="features" className="section">
        <Features />
      </div>
      
      <div id="projects" className="section">
        <Projects />
      </div>
      
      <div id="process" className="section">
        <Process />
      </div>
      
      <div id="contact" className="section">
        <ContactForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
