
import { motion } from "framer-motion";
import { Building, Users, Code, Server } from "lucide-react";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 合作方式标题与内容连通 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          {/* 合作方式标题 */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              合作方式
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              我们提供两种合作模式，灵活满足不同项目的技术需求
            </p>
          </div>

          {/* 合作方式内容 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 本部合作 */}
            <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600/20 rounded-full p-4 mr-4">
                  <Building className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-2xl text-white">本部合作</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                由技术中心提供完整的技术解决方案，包括GS语言编译器、服务器架构、游戏引擎、工具链等全方位技术支持。项目团队只需提出需求，我们负责技术实现与维护。这种模式适合需要深度技术支持但团队技术资源有限的项目。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start">
                  <Code className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">编译器支持</h4>
                    <p className="text-gray-400 text-sm">GS语言编译器与优化</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start">
                  <Server className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">服务器架构</h4>
                    <p className="text-gray-400 text-sm">高性能服务器设计</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/tech-cooperation" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
              >
                了解详情 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* 驻场合作 */}
            <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600/20 rounded-full p-4 mr-4">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="font-bold text-2xl text-white">驻场合作</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                技术中心派驻专业技术人员到项目组，与项目团队深度融合，共同解决技术难题。驻场工程师将根据项目需求提供针对性支持，包括性能优化、技术指导、问题排查等。这种模式适合需要持续技术支持的中长期项目。
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start">
                  <Code className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">技术指导</h4>
                    <p className="text-gray-400 text-sm">专业技术咨询与培训</p>
                  </div>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4 flex items-start">
                  <Server className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-medium mb-1">性能优化</h4>
                    <p className="text-gray-400 text-sm">前后端性能提升方案</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/tech-cooperation" 
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
              >
                了解详情 
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 底部联系信息保持独立背景 */}
        <div className="mt-16 text-center relative">
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-amber-900/30"></div>
          </div>
          <div className="relative bg-amber-900/20 backdrop-blur-sm rounded-xl p-8 border border-amber-700/30">
            <h3 className="text-2xl font-bold text-white mb-4">G-bits技术中心</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              专注于游戏开发、人工智能和云计算技术的研发中心。我们致力于为游戏产业提供先进的技术解决方案，推动创新发展。
            </p>
            <div className="mt-6 text-gray-400">
              <p>联系我们获取更多技术支持和合作方案</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
