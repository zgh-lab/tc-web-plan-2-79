
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Search, Settings, Package } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { 
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/ui/dialog";
import { 
  Command, 
  CommandInput, 
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";

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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo在左侧 */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className={cn("font-light text-xl sm:text-2xl", isScrolled ? "text-gray-900" : "text-white")}>
                <span className="text-blue-500">G-</span>
                <span className={cn(isScrolled ? "text-gray-800" : "text-white")}>bits</span>
                <span className={cn(isScrolled ? "text-gray-700" : "text-gray-100")}>技术中心</span>
              </h1>
            </Link>
          </div>
          
          {/* 桌面导航菜单放在右侧 */}
          <div className="hidden md:flex items-center justify-end flex-1 space-x-4">
            {/* 导航链接 */}
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      首页
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/tech-cooperation">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      技术合作
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/knowledge-base">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      知识库
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/achievements">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      成果展示
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/tool-library">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      工具库
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}
                  >
                    联系我们
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* 搜索和设置按钮 */}
            <div className="flex items-center space-x-4">
              {/* 搜索功能 */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className={cn("p-2 rounded-full hover:bg-gray-200/20 transition-colors", isScrolled ? "text-gray-700" : "text-white")}>
                    <Search size={20} />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <Command>
                    <CommandInput placeholder="搜索..." />
                    <CommandList>
                      <CommandEmpty>没有找到相关结果</CommandEmpty>
                      <CommandGroup heading="建议">
                        <CommandItem>
                          <Link to="/tech-cooperation" className="flex items-center w-full">
                            技术合作
                          </Link>
                        </CommandItem>
                        <CommandItem>
                          <Link to="/knowledge-base" className="flex items-center w-full">
                            知识库
                          </Link>
                        </CommandItem>
                        <CommandItem>
                          <Link to="/achievements" className="flex items-center w-full">
                            成果展示
                          </Link>
                        </CommandItem>
                        <CommandItem>
                          <Link to="/tool-library" className="flex items-center w-full">
                            工具库
                          </Link>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DialogContent>
              </Dialog>

              {/* 设置功能 */}
              <button className={cn("p-2 rounded-full hover:bg-gray-200/20 transition-colors", isScrolled ? "text-gray-700" : "text-white")}>
                <Settings size={20} />
              </button>
            </div>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center space-x-4">
            {/* 移动端搜索按钮 */}
            <Dialog>
              <DialogTrigger asChild>
                <button className={cn("p-2 rounded-full hover:bg-gray-200/20", isScrolled ? "text-gray-700" : "text-white")}>
                  <Search size={18} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <Command>
                  <CommandInput placeholder="搜索..." />
                  <CommandList>
                    <CommandEmpty>没有找到相关结果</CommandEmpty>
                    <CommandGroup heading="建议">
                      <CommandItem>
                        <Link to="/tech-cooperation" className="flex items-center w-full">
                          技术合作
                        </Link>
                      </CommandItem>
                      <CommandItem>
                        <Link to="/knowledge-base" className="flex items-center w-full">
                          知识库
                        </Link>
                      </CommandItem>
                      <CommandItem>
                        <Link to="/achievements" className="flex items-center w-full">
                          成果展示
                        </Link>
                      </CommandItem>
                      <CommandItem>
                        <Link to="/tool-library" className="flex items-center w-full">
                          工具库
                        </Link>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DialogContent>
            </Dialog>
            
            {/* 设置按钮 */}
            <button className={cn("p-2 rounded-full hover:bg-gray-200/20", isScrolled ? "text-gray-700" : "text-white")}>
              <Settings size={18} />
            </button>
            
            {/* 菜单按钮 */}
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            首页
          </Link>
          
          <Link to="/tech-cooperation" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            技术合作
          </Link>
          
          <Link to="/knowledge-base" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            知识库
          </Link>
          
          <Link to="/achievements" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            成果展示
          </Link>
          
          <Link to="/tool-library" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            工具库
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
            联系我们
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

