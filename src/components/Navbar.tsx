
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  
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
  
  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsProjectsDropdownOpen(false);
  };
  
  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled ? "bg-white shadow-sm" : "bg-black"
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
                alt="WRLDS Technologies Logo" 
                className={cn("h-8 w-auto", isScrolled ? "" : "brightness-0 invert")}
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="/" 
                className={cn("hover:text-gray-500 transition-colors font-medium", 
                isScrolled ? "text-gray-700" : "text-gray-200")}
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              
              <button 
                onClick={() => scrollToSection('features')} 
                className={cn("hover:text-gray-500 transition-colors font-medium", 
                isScrolled ? "text-gray-700" : "text-gray-200")}
              >
                Services
              </button>
              
              <div className="relative">
                <button 
                  onClick={toggleProjectsDropdown}
                  className={cn("flex items-center hover:text-gray-500 transition-colors font-medium", 
                    isScrolled ? "text-gray-700" : "text-gray-200")}
                >
                  <span>Projects</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProjectsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <button 
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => scrollToSection('projects')}
                      >
                        All Projects
                      </button>
                      <Link 
                        to="/projects/firecat" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setIsProjectsDropdownOpen(false);
                          window.scrollTo(0, 0);
                        }}
                      >
                        FireCat 6th SENSE
                      </Link>
                      <button 
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => scrollToSection('projects')}
                      >
                        Sports Performance
                      </button>
                      <button 
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => scrollToSection('projects')}
                      >
                        Military Applications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => scrollToSection('process')} 
                className={cn("hover:text-gray-500 transition-colors font-medium", 
                isScrolled ? "text-gray-700" : "text-gray-200")}
              >
                Process
              </button>
              
              <button 
                onClick={() => scrollToSection('contact')} 
                className={cn(
                  "px-4 py-2 rounded-md transition-colors", 
                  isScrolled 
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300" 
                    : "bg-gray-700 text-white hover:bg-gray-600"
                )}
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", 
              isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", 
        isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", 
          isScrolled ? "bg-white" : "bg-black")}>
          <Link 
            to="/" 
            className={cn("block px-3 py-2 rounded-md hover:bg-gray-50", 
            isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} 
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>
          
          <button 
            onClick={() => scrollToSection('features')}
            className={cn("block w-full text-left px-3 py-2 rounded-md", 
            isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
          >
            Services
          </button>
          
          <div className="block px-3 py-2">
            <button 
              onClick={(e) => {
                e.preventDefault();
                toggleProjectsDropdown();
              }}
              className={cn("flex w-full justify-between items-center rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              <span>Projects</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={cn(
              "ml-4 mt-1 space-y-1 transition-all duration-300", 
              isProjectsDropdownOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            )}>
              <button 
                onClick={() => scrollToSection('projects')}
                className={cn("block w-full text-left px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
              >
                All Projects
              </button>
              <Link 
                to="/projects/firecat" 
                className={cn("block px-3 py-2 rounded-md", 
                  isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                FireCat 6th SENSE
              </Link>
              <button 
                onClick={() => scrollToSection('projects')}
                className={cn("block w-full text-left px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
              >
                Sports Performance
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={cn("block w-full text-left px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
              >
                Military Applications
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('process')}
            className={cn("block w-full text-left px-3 py-2 rounded-md", 
            isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
          >
            Process
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className={cn("block w-full text-left px-3 py-2 rounded-md", 
            isScrolled 
              ? "text-gray-700 bg-gray-200 hover:bg-gray-300" 
              : "text-white bg-gray-700 hover:bg-gray-600")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
