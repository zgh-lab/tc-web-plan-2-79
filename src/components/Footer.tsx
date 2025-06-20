
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <h1 className="font-light text-2xl">
                <span className="text-cyan-300">G-</span>
                <span className="text-white">bits</span>
                <span className="text-gray-300">技术中心</span>
              </h1>
            </Link>
            <p className="mb-6 text-sm text-gray-400 leading-relaxed">
              在GS语言、Unity引擎、服务器框架、游戏开发工具链、AI技术应用等领域均有深厚的技术积累，为公司自研项目提供坚实的底层技术支撑，并不断在积累与沉淀通用技术资产。
            </p>
            <p className="mb-6 text-sm text-gray-400 leading-relaxed">
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

          {/* Contact Section - Contact Persons and Address */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Persons - reorganized into two columns with three titles each */}
              <div className="md:ml-8">
                <h3 className="text-lg font-semibold mb-4 text-white">联系人</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  <div>
                    <h4 className="text-white font-medium mb-1">技术中心负责人</h4>
                    <p className="text-gray-400">沈予卿</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">技术AI组</h4>
                    <p className="text-gray-400">梁钰彬、张文豪</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">编译器组</h4>
                    <p className="text-gray-400">楚耀翔、徐鑫荣</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">AIGC组</h4>
                    <p className="text-gray-400">李智宇</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">服务器与工具链组</h4>
                    <p className="text-gray-400">吴荣钦</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">引擎组</h4>
                    <p className="text-gray-400">张兴捷</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Address */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">联系地址</h3>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-2 text-cyan-300 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-400">广东省深圳市南山区方大城T2栋17楼技术中心</span>
                </div>
              </div>
            </div>
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
