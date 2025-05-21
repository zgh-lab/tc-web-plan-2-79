
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div variants={childVariants} className="md:col-span-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
              <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                <Building className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white">本部合作</h3>
                <p className="text-gray-300 mb-1">针对需要技术支持的项目提供远程技术支持服务</p>
                <p className="text-blue-400 font-medium">cooperation@g-bits.com</p>
              </div>
            </motion.div>

            <motion.div variants={childVariants} className="md:col-span-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all flex">
              <div className="bg-blue-600/20 rounded-full p-3 mr-4 flex-shrink-0">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-white">驻场合作</h3>
                <p className="text-gray-300 mb-1">为有特定技术需求的项目提供驻场技术支持</p>
                <p className="text-blue-400 font-medium">onsite@g-bits.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
