
import { motion } from "framer-motion";
import { Cpu, Database, Shield, Zap, Code, Users } from "lucide-react";

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

  const features = [
    {
      icon: Code,
      title: "编译器技术",
      description: "自主研发的GS语言编译器，支持多平台目标代码生成，为游戏开发提供高效的编程语言支持。",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "服务器架构",
      description: "高性能、高可扩展的分布式服务器架构，支持大规模并发用户，确保游戏稳定运行。",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Cpu,
      title: "引擎技术",
      description: "跨平台游戏引擎开发，支持2D/3D渲染、物理模拟、音频处理等核心功能模块。",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "性能优化",
      description: "深度的性能分析与优化技术，从内存管理到渲染优化，全方位提升游戏运行效率。",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Shield,
      title: "安全防护",
      description: "完善的游戏安全防护体系，包括反作弊、数据加密、网络安全等多层防护机制。",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "工具链",
      description: "完整的开发工具链支持，从代码编辑到构建部署，提供一站式开发环境。",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="why-wrlds" className="relative py-16 md:py-24 overflow-hidden">
      {/* 内容层 */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            技术合作
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            G-bits技术中心拥有完整的技术体系和丰富的项目经验，<br />
            为合作伙伴提供全方位的技术支持与解决方案。
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={childVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
