
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
          <div className="p-4 mr-3 flex items-center justify-center w-20 h-12">
            <img 
              src="/lovable-uploads/562a0d54-b628-46e2-b833-9b61c0177a7f.png" 
              alt="G-bits Logo" 
              className="h-40 w-auto object-contain"
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
