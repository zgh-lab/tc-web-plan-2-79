
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
        {/* 合作方式标题 - 与其他部分格式保持一致 */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 
            variants={childVariants} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            whileHover={{
              textShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            合作方式
          </motion.h2>
          <motion.p 
            variants={childVariants} 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            whileHover={{
              color: 'rgba(255, 255, 255, 0.9)',
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            我们提供两种合作模式，灵活满足不同项目的技术需求
          </motion.p>
        </motion.div>

        {/* 合作方式内容 - 与其他模块风格保持一致 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* 特定需求合作 */}
          <motion.div 
            variants={childVariants} 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-blue-900/10"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-600/20 rounded-full p-4 mr-4">
                <Building className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-2xl text-white">特定需求合作</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              技术中心指派具备相应专长的技术同学完成具体需求，负责特定需求的技术研究、方案设计及落地实施。适用于解决短期、单一的技术难点。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-start hover:bg-gray-800/70 transition-colors">
                <Code className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">编译器支持</h4>
                  <p className="text-gray-400 text-sm">GS语言编译器与优化</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-start hover:bg-gray-800/70 transition-colors">
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

          {/* 驻组合作 */}
          <motion.div 
            variants={childVariants} 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-blue-900/10"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-600/20 rounded-full p-4 mr-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-2xl text-white">驻组合作</h3>
            </div>
            
            <p className="text-gray-300 mb-6">
              技术中心选派技术同学常驻项目组进行开发支持，与项目团队深度协同，提供全流程技术支持与解决方案。适用于需要长期、深度技术支撑的项目。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-start hover:bg-gray-800/70 transition-colors">
                <Code className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium mb-1">技术指导</h4>
                  <p className="text-gray-400 text-sm">专业技术咨询与培训</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-start hover:bg-gray-800/70 transition-colors">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
