
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <img 
          src="/lovable-uploads/22875bff-c1ba-4884-b5b8-f1495d4de20d.png" 
          alt="G-bits Logo" 
          className="h-8 mr-5"
          style={{ 
            filter: 'sepia(0) saturate(1) hue-rotate(0deg) brightness(1.2) contrast(1.1)',
            mixBlendMode: 'screen'
          }}
        />
        <h1 className="font-bold text-xl sm:text-2xl text-white">
          <span className="text-cyan-300">G-</span>
          <span className="text-white">bits</span>
          <span className="text-gray-100">技术中心</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
