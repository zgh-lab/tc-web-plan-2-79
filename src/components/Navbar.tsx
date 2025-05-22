
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import Logo from './navbar/Logo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <motion.nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", 
      isScrolled 
        ? "bg-black/90 backdrop-blur-md shadow-sm" 
        : "bg-black"
    )} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo放在左侧 */}
          <div className="flex-shrink-0">
            <Logo isScrolled={isScrolled} />
          </div>
          
          {/* Navigation放在中央 */}
          <div className="flex-1 flex justify-center">
            {/* Desktop Navigation */}
            <DesktopNav isScrolled={isScrolled} />
            
            {/* Mobile Navigation */}
            <MobileNav isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
