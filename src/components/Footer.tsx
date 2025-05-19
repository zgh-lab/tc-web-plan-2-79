
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <h1 className="font-light text-2xl">
                <span className="text-blue-400">G-</span>
                <span className="text-white">bits</span>
                <span className="text-gray-300">技术中心</span>
              </h1>
            </Link>
            <p className="mb-6 text-sm text-gray-400">
              专注于游戏开发、人工智能和云计算技术的研发中心。我们致力于为游戏产业提供先进的技术解决方案，推动创新发展。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">解决方案</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tech-cooperation" className="text-gray-400 hover:text-white transition-colors">
                  技术合作
                </Link>
              </li>
              <li>
                <Link to="/projects/firecat" className="text-gray-400 hover:text-white transition-colors">
                  火猫游戏平台
                </Link>
              </li>
              <li>
                <Link to="/projects/sport-retail" className="text-gray-400 hover:text-white transition-colors">
                  数字化游戏交易系统
                </Link>
              </li>
              <li>
                <Link to="/projects/workwear" className="text-gray-400 hover:text-white transition-colors">
                  云游戏服务
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">资源</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/knowledge-base" className="text-gray-400 hover:text-white transition-colors">
                  知识库
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  技术博客
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-400 hover:text-white transition-colors">
                  成果展示
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">联系方式</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>福建省厦门市思明区软件园二期望海路25号</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0" />
                <span>+86 592-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0" />
                <span>tech-center@g-bits.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} G-bits技术中心. 保留所有权利.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              隐私政策
            </Link>
            <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white transition-colors">
              服务条款
            </Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookie政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
