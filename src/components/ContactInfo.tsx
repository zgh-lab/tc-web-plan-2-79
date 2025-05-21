
import { motion } from "framer-motion";
import { Briefcase, Users, Code, Server, ArrowRight } from "lucide-react";
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
    <section id="contact" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            合作方式
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            我们提供两种合作模式，灵活满足不同项目的技术需求
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 本部合作 */}
            <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-all flex flex-col h-full">
              <div className="bg-blue-600/20 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">本部合作</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                由技术中心提供完整的技术解决方案，包括GS语言编译器、服务器架构、游戏引擎、工具链等全方位技术支持。项目团队只需提出需求，我们负责技术实现与维护。这种模式适合需要深度技术支持但团队技术资源有限的项目。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Code className="w-5 h-5 text-blue-400 mr-2" />
                    <h4 className="text-white font-medium">编译器支持</h4>
                  </div>
                  <p className="text-gray-400 text-sm">GS语言编译器与优化</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Server className="w-5 h-5 text-blue-400 mr-2" />
                    <h4 className="text-white font-medium">服务器架构</h4>
                  </div>
                  <p className="text-gray-400 text-sm">高性能服务器设计</p>
                </div>
              </div>
              <Link to="/tech-cooperation" className="text-blue-400 hover:text-blue-300 flex items-center mt-auto">
                了解详情 
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            {/* 驻场合作 */}
            <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/15 transition-all flex flex-col h-full">
              <div className="bg-blue-600/20 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-white">驻场合作</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                技术中心派驻专业技术人员到项目组，与项目团队深度融合，共同解决技术难题。驻场工程师将根据项目需求提供针对性支持，包括性能优化、技术指导、问题排查等。这种模式适合需要持续技术支持的中长期项目。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Code className="w-5 h-5 text-blue-400 mr-2" />
                    <h4 className="text-white font-medium">技术指导</h4>
                  </div>
                  <p className="text-gray-400 text-sm">专业技术咨询与培训</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Server className="w-5 h-5 text-blue-400 mr-2" />
                    <h4 className="text-white font-medium">性能优化</h4>
                  </div>
                  <p className="text-gray-400 text-sm">前后端性能提升方案</p>
                </div>
              </div>
              <Link to="/tech-cooperation" className="text-blue-400 hover:text-blue-300 flex items-center mt-auto">
                了解详情 
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
