
import { Link } from 'react-router-dom';
import { Settings } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { navItems, scrollToSection, type NavItem } from './NavItems';
import SearchDialog from './SearchDialog';

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  return (
    <div className="flex justify-between items-center w-full">
      {/* 搜索和设置按钮放在右侧 */}
      <div className="hidden md:flex items-center space-x-4">
        {/* 空白占位，保持导航居中 */}
      </div>
      
      {/* 导航菜单居中 */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <NavigationMenu className="text-white">
          <NavigationMenuList className="flex justify-center">
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
      
      {/* 搜索和设置按钮放在右侧 */}
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
