
import { motion } from "framer-motion";
import { Code, Server, Wrench, Terminal, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Code,
    title: "编译器组",
    description: "自主研发高性能游戏脚本编译器，支持多平台编译与优化，提升游戏性能与开发效率。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
  },
  {
    icon: Server,
    title: "服务器与工具链组",
    description: "设计高可用、可扩展的游戏服务器架构，支持全球范围的低延迟接入和稳定体验。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png"
  },
  {
    icon: Wrench,
    title: "引擎组",
    description: "开发完整的游戏开发工具链，包括资源管理、自动化测试与部署，提高团队协作效率。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
  },
  {
    icon: Terminal,
    title: "技术AI组",
    description: "提供专业的游戏引擎开发与优化，包括渲染系统、物理引擎和跨平台框架设计。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
  },
  {
    icon: Cpu,
    title: "AIGC组",
    description: "人工智能生成内容技术，为游戏提供智能NPC行为、程序化内容生成与个性化游戏体验。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png"
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
    <section className="py-16 md:py-24 bg-black w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="mb-12 text-center">
            <motion.h2 variants={childVariants} className="text-3xl md:text-4xl font-bold mb-4 text-white">
              技术合作
            </motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
              我们为各项目提供 基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化 等解决方案。同时，针对不同项目需求，我们也能提供驻组技术支持，助力项目高效推进。
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ 
                  backgroundImage: `url("${feature.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <Link to={feature.link} className="text-blue-400 hover:text-blue-300 text-sm inline-block">
                    了解更多 →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                variants={childVariants}
                className="relative bg-black/30 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                style={{ 
                  backgroundImage: `url("${feature.image}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <Link to={feature.link} className="text-blue-400 hover:text-blue-300 text-sm inline-block">
                    了解更多 →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link 
              to="/tech-cooperation" 
              onClick={() => window.scrollTo(0, 0)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20 flex items-center"
            >
              查看全部服务
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
