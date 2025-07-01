
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <div className="relative">
          <div className="p-2 mr-3 flex items-center justify-center w-10 h-10">
            <img 
              src="/lovable-uploads/d2022b75-39a5-4eea-bffc-9d991c10cf31.png" 
              alt="G-bits Logo" 
              className="h-6 w-auto"
            />
          </div>
          {/* 蓝青渐变背景方块 */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md opacity-35 -z-10"></div>
        </div>
        <h1 className="font-bold text-xl sm:text-2xl ml-4">
          <span className="text-gray-300">G-</span>
          <span className="text-gray-300">bits</span>
          <span className="text-gray-300">技术中心</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
