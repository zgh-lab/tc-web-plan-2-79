
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  isScrolled: boolean;
}

const Logo = ({ isScrolled }: LogoProps) => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center">
        <h1 className="font-bold text-xl sm:text-2xl text-white">
          <span className="text-blue-500">G-</span>
          <span className="text-white">bits</span>
          <span className="text-gray-100">技术中心</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
