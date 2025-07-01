
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
          {/* 直接显示logo图片，无背景方块 */}
          <div className="p-2 mr-3 flex items-center justify-center">
            <img 
              src="/lovable-uploads/4bc386bb-71c7-45f5-8193-ca30acbb4756.png" 
              alt="G-bits Logo" 
              className="h-6 w-auto"
            />
          </div>
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
