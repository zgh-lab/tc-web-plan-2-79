import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench, Terminal, Cpu, ChevronRight, ChevronDown } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
    technologies: ["词法分析", "语法分析", "中间代码生成", "代码优化", "目标代码生成"],
    email: "compiler@g-bits.com"
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
    technologies: ["分布式系统", "高并发处理", "网络协议优化", "CI/CD", "云服务架构"],
    email: "servertools@g-bits.com"
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
    technologies: ["图形渲染", "物理模拟", "动画系统", "场景管理", "资源优化"],
    email: "engine@g-bits.com"
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
    technologies: ["机器学习", "数据分析", "行为决策树", "自然语言处理", "计算机视觉"],
    email: "techai@g-bits.com"
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
    technologies: ["生成对抗网络", "深度学习", "自然语言生成", "计算机图形学", "程序化生成"],
    email: "aigc@g-bits.com"
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

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <PageLayout>
      <SEO 
        title="技术合作 - G-bits 技术中心" 
        description="G-bits技术中心提供编译器、服务器架构、游戏引擎、技术AI和AIGC等多方面的技术合作解决方案。"
        keywords={['技术合作', '游戏编译器', '服务器架构', '游戏引擎', '技术AI', 'AIGC']}
      />

      {/* 替换为与成果展示页面相同的背景样式 */}
      <div className="relative w-full bg-black">
        {/* 背景图 */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/lovable-uploads/beb9d119-8b42-41d1-b055-03fe5758e90e.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* 半透明蒙版层 */}
        <div className="absolute inset-0 z-0 bg-black/70"></div>
        
        <main className="container mx-auto px-4 py-12 pt-28 min-h-[80vh] relative z-10">
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
              我们为各项目提供基于GS语言的前后端框架、GS插件、公共服务器、<br />
              工具链、图形渲染方案、前后端性能优化等解决方案。
            </motion.p>

            <div className="max-w-6xl mx-auto relative">
              {/* Central axis line - updated to white with gray opacity */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-white/20"></div>
              
              <div className="space-y-10"> {/* Increased spacing between modules to allow for vertical overlap */}
                {techTeams.map((team, index) => (
                  <motion.div 
                  key={team.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  style={{ marginTop: index > 0 ? '-30px' : '0' }} // Creating vertical overlap
                >
                  <div className={`flex items-center justify-center ${index % 2 === 0 ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'}`}>
                    {/* Timeline dot - making it more visible */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500/70 rounded-full z-10"></div>
                    
                    <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <Collapsible 
                        open={openItems.includes(team.id)} 
                        onOpenChange={() => toggleItem(team.id)}
                        className="w-full"
                      >
                        <Card className="bg-gray-900/80 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all shadow-lg hover:shadow-blue-500/10 overflow-hidden rounded-xl">
                          <CardContent className="p-0">
                            <CollapsibleTrigger className="w-full text-left">
                              <div 
                                className="relative p-6 cursor-pointer overflow-hidden min-h-[190px]" /* Increased minimum height */
                                style={{
                                  backgroundImage: `url(${team.image})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center'
                                }}
                              >
                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/70"></div>
                                <div className="relative z-10">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <team.icon className="w-6 h-6 text-blue-400" />
                                      </div>
                                      <h2 className="text-2xl font-semibold text-white">
                                        {team.title}
                                      </h2>
                                    </div>
                                    <ChevronDown 
                                      className={`w-6 h-6 text-blue-400 transition-transform ${openItems.includes(team.id) ? 'rotate-180' : ''}`} 
                                    />
                                  </div>
                                  <p className="text-gray-300 mt-3 -mb-1">{team.description}</p>
                                </div>
                              </div>
                            </CollapsibleTrigger>
                            
                            <CollapsibleContent>
                              <div className="p-6 pt-3 border-t border-white/10"> 
                                <p className="text-gray-300 mb-2 -mt-1">{team.details}</p>
                                
                                <div className="mb-2"> 
                                  <h3 className="text-xl font-semibold text-white mb-1">核心技术</h3> 
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
                                
                                <div className="mb-2"> 
                                  <h3 className="text-xl font-semibold text-white mb-1">主要成果</h3> 
                                  <ul className="space-y-0">
                                    {team.achievements.map((achievement, idx) => (
                                      <li key={idx} className="flex items-start text-gray-300 -mb-1">
                                        <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 shrink-0" />
                                        <span>{achievement}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                
                                <div className="mt-2 flex items-center">
                                  <h3 className="text-lg font-semibold text-white mr-2">联系{team.title}:</h3>
                                  <a href={`mailto:${team.email}`} className="text-blue-400 hover:underline">
                                    {team.email}
                                  </a>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </CardContent>
                        </Card>
                      </Collapsible>
                    </div>
                  </div>
                </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </PageLayout>
  );
};

export default TechCooperation;
