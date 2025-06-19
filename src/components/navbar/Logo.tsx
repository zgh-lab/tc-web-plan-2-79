
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
          src="/lovable-uploads/ffdf6498-7fdf-4239-9093-11d73d7b3953.png" 
          alt="G-bits Logo" 
          className="w-8 h-8 mr-2"
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
