
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  isScrolled: boolean;
}

const DesktopNav = ({ isScrolled }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link 
        to="/" 
        className={cn(
          "text-gray-300 hover:text-white transition-colors duration-200 font-medium",
          isScrolled ? "text-gray-300" : "text-gray-300"
        )}
      >
        首页
      </Link>
      <Link 
        to="/tech-details" 
        className={cn(
          "text-gray-300 hover:text-white transition-colors duration-200 font-medium",
          isScrolled ? "text-gray-300" : "text-gray-300"
        )}
      >
        技术方向
      </Link>
      <Link 
        to="/achievements" 
        className={cn(
          "text-gray-300 hover:text-white transition-colors duration-200 font-medium",
          isScrolled ? "text-gray-300" : "text-gray-300"
        )}
      >
        项目合作
      </Link>
      <Link 
        to="/about" 
        className={cn(
          "text-gray-300 hover:text-white transition-colors duration-200 font-medium",
          isScrolled ? "text-gray-300" : "text-gray-300"
        )}
      >
        关于我们
      </Link>
    </div>
  );
};

export default DesktopNav;
