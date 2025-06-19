
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <div className="bg-gray-300 rounded-md p-2 mr-3">
          <img 
            src="/lovable-uploads/22875bff-c1ba-4884-b5b8-f1495d4de20d.png" 
            alt="G-bits Logo" 
            className="h-6"
            style={{ 
              filter: 'none',
            }}
          />
        </div>
        <h1 className="font-bold text-xl sm:text-2xl">
          <span className="text-cyan-300">G-</span>
          <span className="text-gray-300">bits</span>
          <span className="text-gray-300">技术中心</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
