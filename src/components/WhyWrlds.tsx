
import { motion } from "framer-motion";
import { Laptop, Brain, Cloud } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "游戏开发技术",
    description: "提供先进的游戏开发引擎、渲染技术和多平台部署解决方案，助力游戏企业创造卓越体验。"
  },
  {
    icon: Brain,
    title: "人工智能解决方案",
    description: "结合AI技术与游戏开发，实现NPC智能行为、内容自动生成、玩家行为分析等创新功能。"
  },
  {
    icon: Cloud,
    title: "云计算架构",
    description: "专为游戏行业定制的云计算解决方案，提供高可扩展性、低延迟的游戏服务基础设施。"
  }
];

const WhyWrlds = () => {
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2 variants={childVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              我们的核心技术
            </motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
              G-bits技术中心致力于游戏产业技术创新，助力企业数字化转型
            </motion.p>
          </div>
          
          <motion.div 
            variants={containerVariants} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
