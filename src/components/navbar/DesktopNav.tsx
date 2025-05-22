
import { Link } from 'react-router-dom';
import { Settings } from "lucide-react";
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
      {/* 左侧区域 - 空白占位 */}
      <div className="flex-1">
        {/* 空白占位，保持导航靠右 */}
      </div>
      
      {/* 导航菜单靠右 */}
      <div className="hidden md:flex items-center justify-end">
        <NavigationMenu className="text-white">
          <NavigationMenuList className="flex justify-end">
            {navItems.map((item: NavItem) => (
              <NavigationMenuItem key={item.title}>
                {item.isAction ? (
                  <button 
                    onClick={() => scrollToSection(item.actionId || '')} 
                    className={cn(navigationMenuTriggerStyle(), "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}
                  >
                    {item.title}
                  </button>
                ) : item.isExternal ? (
                  <a 
                    href={item.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={cn(navigationMenuTriggerStyle(), "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link to={item.path}>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* 搜索和设置按钮放在最右侧 */}
      <div className="hidden md:flex items-center space-x-4">
        {/* 搜索功能 */}
        <SearchDialog isScrolled={isScrolled} />

        {/* 设置功能 */}
        <button className="p-2 rounded-full hover:bg-gray-200/20 transition-colors text-white">
          <Settings size={20} />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isScrolled={isScrolled} />
    </div>
  );
};

export default DesktopNav;
