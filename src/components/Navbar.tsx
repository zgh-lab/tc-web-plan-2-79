
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 2.6,  // Start after loading animation
          duration: 0.6
        }
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
                alt="WRLDS Technologies Logo" 
                className={cn(
                  "h-8 w-auto transition-all duration-300",
                  isScrolled ? "" : "filter brightness-0 invert" // Only invert when not scrolled (transparent bg)
                )}
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className={cn(
                "hover:text-wrlds-teal transition-colors font-medium", 
                isScrolled ? "text-wrlds-dark" : "text-white"
              )}>Home</a>
              <a href="#features" className={cn(
                "hover:text-wrlds-teal transition-colors font-medium", 
                isScrolled ? "text-wrlds-dark" : "text-white"
              )}>Services</a>
              <a href="#projects" className={cn(
                "hover:text-wrlds-teal transition-colors font-medium", 
                isScrolled ? "text-wrlds-dark" : "text-white"
              )}>Projects</a>
              <a href="#process" className={cn(
                "hover:text-wrlds-teal transition-colors font-medium", 
                isScrolled ? "text-wrlds-dark" : "text-white"
              )}>Process</a>
              <a href="#contact" className="bg-wrlds-teal text-white hover:bg-wrlds-teal/90 px-4 py-2 rounded-md transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn(
              "focus:outline-none",
              isScrolled ? "text-wrlds-dark" : "text-white"
            )}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-sm">
          <a href="#" className="block px-3 py-2 text-wrlds-dark hover:bg-blue-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#features" className="block px-3 py-2 text-wrlds-dark hover:bg-blue-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#projects" className="block px-3 py-2 text-wrlds-dark hover:bg-blue-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#process" className="block px-3 py-2 text-wrlds-dark hover:bg-blue-50 rounded-md" onClick={() => setIsMenuOpen(false)}>Process</a>
          <a href="#contact" className="block px-3 py-2 text-white bg-wrlds-teal hover:bg-wrlds-teal/90 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
