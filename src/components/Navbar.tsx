
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                  )}>
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/projects/firecat" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">FireCat 6th SENSE</div>
                          <p className="text-sm text-gray-500">Smart textiles for firefighter safety</p>
                        </Link>
                      </li>
                      <li>
                        <button 
                          onClick={() => scrollToSection('projects')}
                          className="block w-full text-left p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <div className="font-medium">Sports Performance</div>
                          <p className="text-sm text-gray-500">Advanced tracking for athletes</p>
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => scrollToSection('projects')}
                          className="block w-full text-left p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <div className="font-medium">Industrial Applications</div>
                          <p className="text-sm text-gray-500">Smart fabrics for workplace safety</p>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                  )}>
                    Learn More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Technology Details</div>
                          <p className="text-sm text-gray-500">How our smart textile platform works</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">Our approach to creating custom solutions</p>
                        </Link>
                      </li>
                      <li>
                        <button 
                          onClick={() => scrollToSection('why-wrlds')}
                          className="block w-full text-left p-3 space-y-1 rounded-md hover:bg-gray-100"
                        >
                          <div className="font-medium">Why WRLDS</div>
                          <p className="text-sm text-gray-500">What sets our technology apart</p>
                        </button>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
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
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", 
              isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", 
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", 
          isScrolled ? "bg-white" : "bg-black")}>
          <Link 
            to="/" 
            className={cn("block px-3 py-2 rounded-md", 
            isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} 
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className={cn("block px-3 py-2 rounded-md", 
            isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} 
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            About Us
          </Link>
          
          <div className="block">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const submenu = e.currentTarget.nextElementSibling;
                if (submenu) {
                  submenu.classList.toggle('hidden');
                }
              }}
              className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              <span>Solutions</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
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
                Industrial Applications
              </button>
            </div>
          </div>
          
          <div className="block">
            <button 
              onClick={(e) => {
                e.preventDefault();
                const submenu = e.currentTarget.nextElementSibling;
                if (submenu) {
                  submenu.classList.toggle('hidden');
                }
              }}
              className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              <span>Learn More</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link 
                to="/tech-details"
                className={cn("block px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Technology Details
              </Link>
              <Link 
                to="/development-process"
                className={cn("block px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Development Process
              </Link>
              <button 
                onClick={() => scrollToSection('why-wrlds')}
                className={cn("block w-full text-left px-3 py-2 rounded-md", 
                isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
              >
                Why WRLDS
              </button>
            </div>
          </div>
          
          <Link 
            to="/careers"
            className={cn("block px-3 py-2 rounded-md", 
            isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            Careers
          </Link>
          
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
