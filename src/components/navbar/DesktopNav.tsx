
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { navItems, scrollToSection, type NavItem } from './NavItems';
import SearchDialog from './SearchDialog';
import MobileNav from './MobileNav';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      {/* 左侧 - Logo */}
      <div className="flex-shrink-0">
        {/* Logo由Navbar.tsx提供 */}
      </div>
      
      {/* 导航菜单居中并微向左偏移 */}
      <div className="hidden md:flex items-center justify-center flex-1 -ml-12">
        <NavigationMenu className="text-white">
          <NavigationMenuList className="flex justify-center">
            {navItems.map((item: NavItem) => (
              <NavigationMenuItem key={item.title}>
                {item.isAction ? (
                  <button 
                    onClick={() => scrollToSection(item.actionId || '')} 
                    className={cn(navigationMenuTriggerStyle(), "text-white hover:text-sky-300 bg-transparent hover:bg-gray-800")}
                  >
                    {item.title}
                  </button>
                ) : item.isExternal ? (
                  <a 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(navigationMenuTriggerStyle(), "text-white hover:text-sky-300 bg-transparent hover:bg-gray-800 cursor-pointer")}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.path, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link to={item.path}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-white hover:text-sky-300 bg-transparent hover:bg-gray-800")}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* 搜索按钮放在右侧 */}
      <div className="hidden md:flex items-center space-x-4">
        {/* 搜索功能 */}
        <SearchDialog isScrolled={isScrolled} />
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isScrolled={isScrolled} />
    </div>
  );
};

export default DesktopNav;
