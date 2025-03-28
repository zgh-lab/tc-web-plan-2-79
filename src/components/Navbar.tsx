
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active link based on scroll position
      const sections = ['hero', 'features', 'projects', 'process', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight/2 && rect.bottom >= windowHeight/2) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Handle navigation and scroll smoothly
  const handleNavClick = (sectionId: string) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full backdrop-blur-md",
      isScrolled 
        ? "bg-black/80 shadow-md shadow-blue-900/30 py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a onClick={() => handleNavClick('hero')} className="flex items-center cursor-pointer">
              <img 
                src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
                alt="WRLDS Technologies Logo" 
                className="h-8 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'features', label: 'Services' },
                { id: 'projects', label: 'Projects' },
                { id: 'process', label: 'Process' }
              ].map(link => (
                <a 
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={cn(
                    "relative px-2 py-1 font-medium cursor-pointer transition-colors",
                    activeLink === link.id 
                      ? "text-blue-400" 
                      : "text-white hover:text-blue-300"
                  )}
                >
                  {link.label}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform transition-transform duration-300",
                      activeLink === link.id ? "scale-x-100" : "scale-x-0"
                    )}
                  ></span>
                </a>
              ))}
              
              <a 
                onClick={() => handleNavClick('contact')}
                className="relative overflow-hidden bg-blue-600 text-white hover:bg-blue-500 px-5 py-2 rounded-md transition-all duration-300 group cursor-pointer"
              >
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - with animated sliding */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-black/95 backdrop-blur-md transform transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-6 space-y-6">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'features', label: 'Services' },
            { id: 'projects', label: 'Projects' },
            { id: 'process', label: 'Process' },
            { id: 'contact', label: 'Contact Us' }
          ].map((link, index) => (
            <a 
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "text-2xl font-bold transform transition-transform duration-300 delay-150 cursor-pointer",
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                activeLink === link.id ? "text-blue-400" : "text-white"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
