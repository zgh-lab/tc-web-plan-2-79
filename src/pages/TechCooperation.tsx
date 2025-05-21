import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Terminal, Cpu, ChevronRight, ChevronDown } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { ScrollArea } from "@/components/ui/scroll-area";

const techTeams = [
  {
    id: "compiler",
    title: "编译器组",
    icon: Code,
    description: "自主研发高性能游戏脚本编译器，支持多平台编译与优化，提升游戏性能与开发效率。",
    details: "我们的编译器组专注于打造高性能、跨平台的游戏脚本编译器。通过先进的编译优化技术，我们能够显著提升游戏运行效率和开发体验。编译器组掌握了包括词法分析、语法分析、中间代码生成、代码优化以及目标代码生成等核心技术，为游戏开发提供了强大的技术支持。",
    image: "/lovable-uploads/0af8ac47-703e-457c-b65f-a7b7cd8cb1cc.png",
    achievements: [
      "自主研发GS语言编译器，支持多平台编译",
      "优化的中间代码表示与代码生成技术",
      "完整的调试与性能分析工具链",
      "支持热更新与增量编译功能"
    ],
    technologies: ["词法分析", "语法分析", "中间代码生成", "代码优化", "目标代码生成"]
  },
  {
    id: "server",
    title: "服务器与工具链组",
    icon: Server,
    description: "设计高可用、可扩展的游戏服务器架构，支持全球范围的低延迟接入和稳定体验。",
    details: "服务器与工具链组致力于构建强大、可靠的游戏后端架构和开发工具链。我们的服务器架构能够处理海量并发请求，提供稳定的全球服务。同时，我们开发了一系列高效的工具，覆盖了从代码版本控制、自动化构建、测试到部署的全流程，大幅提升了开发效率。",
    image: "/lovable-uploads/9cf46b7e-ae02-45b6-8e03-1211b1dc3c3c.png",
    achievements: [
      "分布式服务器架构支持百万级并发",
      "全球化部署方案，实现低延迟体验",
      "完整的CI/CD工具链",
      "高效的资源管理与自动化测试系统"
    ],
    technologies: ["分布式系统", "高并发处理", "网络协议优化", "CI/CD", "云服务架构"]
  },
  {
    id: "engine",
    title: "引擎组",
    icon: Wrench,
    description: "开发完整的游戏开发工具链，包括资源管理、自动化测试与部署，提高团队协作效率。",
    details: "引擎组负责游戏引擎核心技术的研发与优化，为游戏项目提供强大的技术基础。我们专注于渲染系统、物理引擎、动画系统等核心模块的开发，同时确保跨平台兼容性和高性能表现。通过持续创新和技术突破，我们的引擎能够支持各类复杂游戏场景的实现。",
    image: "/lovable-uploads/c4e79bdd-859c-445e-b4d5-6dfc39871707.png",
    achievements: [
      "高性能渲染管线与物理系统",
      "优化的内存管理与资源加载机制",
      "跨平台兼容性与设备适配方案",
      "先进的材质与光照系统"
    ],
    technologies: ["图形渲染", "物理模拟", "动画系统", "场景管理", "资源优化"]
  },
  {
    id: "tech-ai",
    title: "技术AI组",
    icon: Terminal,
    description: "提供专业的游戏引擎开发与优化，包括渲染系统、物理引擎和跨平台框架设计。",
    details: "技术AI组将人工智能技术应用于游戏开发的各个环节，提升开发效率和游戏体验。我们开发了智能化的开发辅助工具，自动化测试系统，以及游戏内AI系统。通过机器学习和数据分析，我们能够实现智能化的游戏平衡调整和内容生成，为游戏带来更丰富的体验。",
    image: "/lovable-uploads/2008a0a3-f03c-4295-866e-0feb9ee20b9e.png",
    achievements: [
      "智能化开发辅助系统",
      "基于机器学习的游戏测试与优化",
      "自适应难度与内容推荐系统",
      "复杂NPC行为与决策AI"
    ],
    technologies: ["机器学习", "数据分析", "行为决策树", "自然语言处理", "计算机视觉"]
  },
  {
    id: "aigc",
    title: "AIGC组",
    icon: Cpu,
    description: "人工智能生成内容技术，为游戏提供智能NPC行为、程序化内容生成与个性化游戏体验。",
    details: "AIGC（AI生成内容）组专注于利用人工智能技术自动生成游戏内容，包括角色、场景、剧情等。我们的技术能够大幅降低内容创作成本，同时保持高质量和多样性。通过深度学习模型，我们实现了从文本、图像到3D模型的智能生成，为游戏开发提供了革命性的内容创作方式。",
    image: "/lovable-uploads/44bbadbc-5ae3-405e-b533-909a9f956bed.png",
    achievements: [
      "基于AI的游戏资产生成系统",
      "智能化剧情与任务生成",
      "程序化地形与场景构建",
      "个性化NPC对话与行为系统"
    ],
    technologies: ["生成对抗网络", "深度学习", "自然语言生成", "计算机图形学", "程序化生成"]
  }
];

const TechCooperation = () => {  
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
    <PageLayout>
      <SEO 
        title="技术合作 - G-bits 技术中心" 
        description="G-bits技术中心提供编译器、服务器架构、游戏引擎、技术AI和AIGC等多方面的技术合作解决方案。"
        keywords={['技术合作', '游戏编译器', '服务器架构', '游戏引擎', '技术AI', 'AIGC']}
      />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6 text-center"
            variants={childVariants}
          >
            技术合作
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12"
            variants={childVariants}
          >
            我们为各项目提供基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化等解决方案。同时，针对不同项目需求，我们也能提供驻组技术支持，助力项目高效推进。
          </motion.p>

          <motion.div 
            className="relative max-w-6xl mx-auto"
            variants={childVariants}
          >
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 transform -translate-x-1/2 z-0"></div>

            <ScrollArea className="h-[calc(100vh-300px)] overflow-y-auto pr-4">
              <div className="space-y-32 py-10">
                {techTeams.map((team, index) => (
                  <motion.div 
                    key={team.id}
                    className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`w-full max-w-xl ${index % 2 === 0 ? 'mr-10 pr-10' : 'ml-10 pl-10'} relative z-10`}>
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

                      <div className="bg-gray-900/80 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                            <team.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <h2 className="text-2xl font-semibold text-white">
                            {team.title}
                          </h2>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="relative h-[200px] overflow-hidden rounded-xl mb-4">
                            <img 
                              src={team.image} 
                              alt={team.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6">
                              <p className="text-lg text-gray-200">{team.description}</p>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">团队介绍</h3>
                            <p className="text-gray-300">{team.details}</p>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">核心技术</h3>
                            <div className="flex flex-wrap gap-2">
                              {team.technologies.map((tech, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">主要成果</h3>
                            <ul className="space-y-2">
                              {team.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                  <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            variants={childVariants}
          >
            <h2 className="text-2xl font-bold text-white mb-4">需要技术支持？</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              我们的技术团队随时准备为您的项目提供专业支持。无论是技术咨询、问题排查还是深度合作，请随时与我们联系。
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20"
            >
              联系我们
            </button>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default TechCooperation;
