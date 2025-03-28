
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
  
  return (
    <motion.nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white shadow-sm"
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
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-500 transition-colors font-medium">
                Home
              </Link>
              
              <Link to="/#features" className="text-gray-700 hover:text-gray-500 transition-colors font-medium">
                Services
              </Link>
              
              <div className="relative">
                <button 
                  onClick={toggleProjectsDropdown}
                  className="flex items-center text-gray-700 hover:text-gray-500 transition-colors font-medium"
                >
                  <span>Projects</span>
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProjectsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <Link 
                        to="/#projects" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        All Projects
                      </Link>
                      <Link 
                        to="/projects/firecat" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProjectsDropdownOpen(false)}
                      >
                        FireCat 6th SENSE
                      </Link>
                      <Link 
                        to="/#projects" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setIsProjectsDropdownOpen(false);
                          const projectsSection = document.getElementById('projects');
                          if (projectsSection) {
                            projectsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Sports Performance
                      </Link>
                      <Link 
                        to="/#projects" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setIsProjectsDropdownOpen(false);
                          const projectsSection = document.getElementById('projects');
                          if (projectsSection) {
                            projectsSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Military Applications
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/#process" className="text-gray-700 hover:text-gray-500 transition-colors font-medium">
                Process
              </Link>
              
              <Link to="/#contact" className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded-md transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", 
        isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-sm">
          <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" 
            onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" 
            onClick={() => setIsMenuOpen(false)}>Services</Link>
          
          <div className="block px-3 py-2">
            <button 
              onClick={(e) => {
                e.preventDefault();
                toggleProjectsDropdown();
              }}
              className="flex w-full justify-between items-center text-gray-700 hover:bg-gray-50 rounded-md"
            >
              <span>Projects</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${isProjectsDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={cn(
              "ml-4 mt-1 space-y-1 transition-all duration-300", 
              isProjectsDropdownOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            )}>
              <Link 
                to="/#projects" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                All Projects
              </Link>
              <Link 
                to="/projects/firecat" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                FireCat 6th SENSE
              </Link>
              <Link 
                to="/#projects" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Sports Performance
              </Link>
              <Link 
                to="/#projects" 
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Military Applications
              </Link>
            </div>
          </div>
          
          <Link to="/#process" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md" 
            onClick={() => setIsMenuOpen(false)}>Process</Link>
          <Link to="/#contact" className="block px-3 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md" 
            onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
