
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <div className="p-2 mr-3">
          <img 
            src="/lovable-uploads/22875bff-c1ba-4884-b5b8-f1495d4de20d.png" 
            alt="G-bits Logo" 
            className="h-6"
            style={{ 
              filter: 'brightness(0) invert(1)',
            }}
          />
        </div>
        <h1 className="font-bold text-xl sm:text-2xl">
          <span className="text-cyan-300">G-</span>
          <span className="text-gray-300">bits</span>
          <span className="text-gray-300">技术中心</span>
        </h1>
        
        {/* 背景方块 */}
        <div className="ml-3 px-3 py-1 bg-gray-700/80 rounded-md border border-gray-600/50">
          <span className="text-gray-300 text-sm font-medium">工具库</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
