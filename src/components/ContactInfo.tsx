
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Code, Server, Terminal, BrainCircuit, Paintbrush } from "lucide-react";
import ContactForm from "./ContactForm";

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
            联系我们
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            无论您有任何疑问或需求，我们的团队随时准备提供帮助
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">联系编译器组</h3>
                  <p className="text-gray-300 mb-1">GS语言及编译器相关技术支持</p>
                  <p className="text-blue-400 font-medium">compiler@g-bits.com</p>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">联系服务器与工具链组</h3>
                  <p className="text-gray-300 mb-1">服务器架构及开发工具支持</p>
                  <p className="text-blue-400 font-medium">servertools@g-bits.com</p>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <Terminal className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">联系引擎组</h3>
                  <p className="text-gray-300 mb-1">游戏引擎与图形渲染相关支持</p>
                  <p className="text-blue-400 font-medium">engine@g-bits.com</p>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <BrainCircuit className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">联系技术AI组</h3>
                  <p className="text-gray-300 mb-1">游戏AI与技术算法支持</p>
                  <p className="text-blue-400 font-medium">techai@g-bits.com</p>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <Paintbrush className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">联系AIGC组</h3>
                  <p className="text-gray-300 mb-1">AI内容生成与创意支持</p>
                  <p className="text-blue-400 font-medium">aigc@g-bits.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={childVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
          >
            <h3 className="font-bold text-2xl mb-6 text-white text-center">发送消息</h3>
            <ContactForm darkMode={true} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
