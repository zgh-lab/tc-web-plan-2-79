
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings } from "lucide-react";
import { cn } from '@/lib/utils';
import { navItems, scrollToSection } from './NavItems';
import SearchDialog from './SearchDialog';

interface MobileNavProps {
  isScrolled: boolean;
}

const MobileNav = ({ isScrolled }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      {/* 移动端菜单按钮 */}
      <div className="md:hidden flex items-center space-x-4">
        {/* 移动端搜索按钮 */}
        <SearchDialog isScrolled={isScrolled} isMobile={true} />
        
        {/* 设置按钮 */}
        <button className="p-2 rounded-full hover:bg-gray-200/20 text-white">
          <Settings size={18} />
        </button>
        
        {/* 菜单按钮 */}
        <button onClick={toggleMenu} className="focus:outline-none text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 移动端导航菜单 */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className="bg-black px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm">
          {navItems.map((item) => {
            if (item.isAction) {
              return (
                <button 
                  key={item.title}
                  onClick={() => {
                    scrollToSection(item.actionId || '');
                    setIsMenuOpen(false);
                  }} 
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-200 hover:bg-gray-900"
                >
                  {item.title}
                </button>
              );
            } else if (item.isExternal) {
              return (
                <a 
                  key={item.title}
                  href={item.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              );
            } else {
              return (
                <Link 
                  key={item.title}
                  to={item.path} 
                  className="block px-3 py-2 rounded-md text-gray-200 hover:bg-gray-900" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {item.title}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
