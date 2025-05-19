
import { motion } from "framer-motion";
import { Laptop, Brain, Cloud } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "创造虚拟世界",
    description: "使用先进的实时引擎技术和工具，帮助开发者构建高度沉浸式的3D交互体验和开放虚拟世界。"
  },
  {
    icon: Brain,
    title: "Web3技术应用",
    description: "整合区块链、NFT和加密货币技术，为虚拟世界提供所有权证明、价值交换和去中心化治理机制。"
  },
  {
    icon: Cloud,
    title: "全平台兼容",
    description: "支持PC、移动设备、VR/AR头显等多种设备接入，打造跨平台的无缝连接体验和社交互动空间。"
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
              核心技术优势
            </motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
              我们为创作者和企业提供构建沉浸式互联网体验所需的工具和技术
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
