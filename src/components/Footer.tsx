
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <h1 className="font-light text-2xl">
                <span className="text-blue-400">G-</span>
                <span className="text-white">bits</span>
                <span className="text-gray-300">技术中心</span>
              </h1>
            </Link>
            <p className="mb-6 text-sm text-gray-400">
              在GS语言、Unity引擎、服务器框架、游戏开发工具链、AI技术应用等领域均有深厚的技术积累，为公司自研项目提供坚实的底层技术支撑，并不断在积累与沉淀通用技术资产。<br />
              我们的使命是用技术为项目赋能，我们的愿景是成为行业技术标杆。
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
            <h3 className="text-lg font-semibold mb-4 text-white">联系地址</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>广东省深圳市南山区方大城T2栋17楼技术中心</span>
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
