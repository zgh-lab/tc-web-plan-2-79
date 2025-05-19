
import { motion } from "framer-motion";
import { Code, Server, Tool, Code2, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Code,
    title: "编译器",
    description: "自主研发特性增强的编译器，支持多平台编译与优化，提升游戏性能与开发效率。",
    link: "/tech-cooperation"
  },
  {
    icon: Server,
    title: "服务器",
    description: "设计高可用、可扩展的游戏服务器架构，支持全球范围的低延迟接入和稳定体验。",
    link: "/tech-cooperation"
  },
  {
    icon: Tool,
    title: "工具链",
    description: "开发完整的游戏开发工具链，包括资源管理、自动化测试与部署，提高团队协作效率。",
    link: "/tech-cooperation"
  },
  {
    icon: Code2,
    title: "客户端引擎开发",
    description: "提供专业的游戏引擎开发与优化，包括渲染系统、物理引擎和跨平台框架设计。",
    link: "/tech-cooperation"
  },
  {
    icon: Cpu,
    title: "AIGC",
    description: "人工智能生成内容技术，为游戏提供智能NPC行为，程序化内容生成与个性化游戏体验。",
    link: "/tech-cooperation"
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
              技术研发方向
            </motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
              我们专注于游戏核心技术研发，为G-bits游戏提供技术支持与创新解决方案
            </motion.p>
            <motion.div variants={childVariants} className="mt-4">
              <Link to="/tech-cooperation" className="text-blue-400 hover:text-blue-300 text-sm">
                查看全部服务 →
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-blue-400 hover:text-blue-300 text-sm inline-block">
                  了解更多 →
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8"
          >
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                variants={childVariants}
                className="bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-blue-400 hover:text-blue-300 text-sm inline-block">
                  了解更多 →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
