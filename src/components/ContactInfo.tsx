
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">电话咨询</h3>
                  <p className="text-gray-300 mb-1">周一至周五 9:00 - 18:00</p>
                  <p className="text-blue-400 font-medium">+86 592-123-4567</p>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">电子邮件</h3>
                  <p className="text-gray-300 mb-1">我们会在24小时内回复您</p>
                  <p className="text-blue-400 font-medium">tech-center@g-bits.com</p>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">地址</h3>
                  <p className="text-gray-300 mb-1">欢迎前来参观交流</p>
                  <p className="text-blue-400 font-medium">福建省厦门市思明区软件园二期望海路25号</p>
                </div>
              </motion.div>

              <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
                <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-white">工作时间</h3>
                  <p className="text-gray-300 mb-1">我们的工作时间</p>
                  <p className="text-blue-400 font-medium">周一至周五: 9:00 - 18:00</p>
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
