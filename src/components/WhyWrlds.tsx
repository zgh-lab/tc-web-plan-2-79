
import { motion } from "framer-motion";
import { Code, Server, Wrench, Terminal, Cpu, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    id: "compiler",
    icon: Code,
    title: "编译器组",
    description: "自主研发高性能游戏脚本编译器，支持多平台编译与优化，提升游戏性能与开发效率。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/0af8ac47-703e-457c-b65f-a7b7cd8cb1cc.png"
  },
  {
    id: "server",
    icon: Server,
    title: "服务器与工具链组",
    description: "设计高可用、可扩展的游戏服务器架构，支持全球范围的低延迟接入和稳定体验。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/9cf46b7e-ae02-45b6-8e03-1211b1dc3c3c.png"
  },
  {
    id: "engine",
    icon: Wrench,
    title: "引擎组",
    description: "开发完整的游戏开发工具链，包括资源管理、自动化测试与部署，提高团队协作效率。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/c4e79bdd-859c-445e-b4d5-6dfc39871707.png"
  },
  {
    id: "tech-ai",
    icon: Terminal,
    title: "技术AI组",
    description: "提供专业的游戏引擎开发与优化，包括渲染系统、物理引擎和跨平台框架设计。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/2008a0a3-f03c-4295-866e-0feb9ee20b9e.png"
  },
  {
    id: "aigc",
    icon: Cpu,
    title: "AIGC组",
    description: "人工智能生成内容技术，为游戏提供智能NPC行为、程序化内容生成与个性化游戏体验。",
    link: "/tech-cooperation",
    image: "/lovable-uploads/44bbadbc-5ae3-405e-b533-909a9f956bed.png"
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
            <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              我们为各项目提供 基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化 等解决方案。同时，针对不同项目需求，我们也能提供驻组技术支持，助力项目高效推进。
            </motion.p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 transform -translate-x-1/2 z-0"></div>
            
            <div className="space-y-20">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.id}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-full max-w-sm ${index % 2 === 0 ? 'mr-10 pr-6' : 'ml-10 pl-6'} relative z-10`}>
                    {/* Connect to central line */}
                    <div className="absolute top-8 h-0.5 bg-blue-500/30 
                      w-10 z-0"
                      style={{ 
                        right: index % 2 === 0 ? '0' : 'auto',
                        left: index % 2 === 0 ? 'auto' : '0',
                        transform: index % 2 === 0 ? 'translateX(100%)' : 'translateX(-100%)'
                      }}
                    ></div>

                    {/* Node at central line */}
                    <div className="absolute top-6 w-6 h-6 rounded-full bg-blue-500 z-20"
                      style={{ 
                        right: index % 2 === 0 ? '-13px' : 'auto',
                        left: index % 2 === 0 ? 'auto' : '-13px'
                      }}
                    ></div>

                    <div className="bg-gray-900/80 rounded-lg p-5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {feature.title}
                        </h3>
                      </div>

                      <div className="relative h-[160px] overflow-hidden rounded-lg mb-4">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                          <p className="text-gray-200">{feature.description}</p>
                        </div>
                      </div>
                      
                      <Link 
                        to={feature.link} 
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group mt-2"
                      >
                        了解更多 
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
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
