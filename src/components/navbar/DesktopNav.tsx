
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
                {item.children ? (
                  <>
                    <NavigationMenuTrigger className="text-white hover:text-sky-300 bg-transparent hover:bg-gray-800">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-900 border border-gray-700">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white"
                          >
                            <div className="text-sm font-medium leading-none text-white">
                              {child.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : item.isAction ? (
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
