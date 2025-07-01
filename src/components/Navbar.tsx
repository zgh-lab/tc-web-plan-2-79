
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import Logo from './navbar/Logo';
import DesktopNav from './navbar/DesktopNav';

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
        ? "bg-black/60 backdrop-blur-sm shadow-sm" 
        : "bg-black/40"
    )} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo在左侧 */}
          <Logo isScrolled={isScrolled} />
          
          {/* Desktop Navigation */}
          <DesktopNav isScrolled={isScrolled} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
