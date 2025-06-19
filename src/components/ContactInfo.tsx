
import { motion } from "framer-motion";
import { Building, Users } from "lucide-react";

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
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
            whileHover={{
              textShadow: '0 0 15px rgba(103, 232, 249, 0.5)',
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
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-cyan-300/10"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-opacity-20 rounded-full p-4 mr-4">
                <Building className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent" />
              </div>
              <h3 className="font-bold text-2xl text-white">特定需求合作</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              技术中心指派具备相应专长的技术同学完成具体需求，负责特定需求的技术研究、方案设计及落地实施。
            </p>
            
            <p className="text-gray-300 mb-6">
              适用于解决短期、单一的技术难点。
            </p>
            
            <a 
              href="https://leiting.feishu.cn/wiki/WcwtwLJbTi0gRLkIbn0cDjbmnAb" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity group"
            >
              了解详情 
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* 驻组合作 */}
          <motion.div 
            variants={childVariants} 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all hover:shadow-xl hover:shadow-cyan-300/10"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-opacity-20 rounded-full p-4 mr-4">
                <Users className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent" />
              </div>
              <h3 className="font-bold text-2xl text-white">驻组合作</h3>
            </div>
            
            <p className="text-gray-300 mb-4">
              技术中心选派技术同学常驻项目组进行开发支持，与项目团队深度协同，提供全流程技术支持与解决方案。
            </p>
            
            <p className="text-gray-300 mb-6">
              适用于需要长期、深度技术支撑的项目。
            </p>
            
            <a 
              href="https://leitung.feishu.cn/wiki/WcwtwLJbTi0gRLkIbn0cDjbmnAb" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity group"
            >
              了解详情 
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
