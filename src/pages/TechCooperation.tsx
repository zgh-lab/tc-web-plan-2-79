
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Wrench, Terminal, Cpu, ChevronRight, ChevronDown, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

const techTeams = [
  {
    id: "compiler",
    title: "编译器组",
    icon: Code,
    description: "自主研发高性能游戏脚本编译器，支持多平台编译与优化，提升游戏性能与开发效率。",
    details: "我们的编译器组专注于打造高性能、跨平台的游戏脚本编译器。通过先进的编译优化技术，我们能够显著提升游戏运行效率和开发体验。",
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
    details: "服务器与工具链组致力于构建强大、可靠的游戏后端架构和开发工具链。我们的服务器架构能够处理海量并发请求，提供稳定的全球服务。",
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
    details: "引擎组负责游戏引擎核心技术的研发与优化，为游戏项目提供强大的技术基础。",
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
    details: "技术AI组将人工智能技术应用于游戏开发的各个环节，提升开发效率和游戏体验。",
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
    details: "AIGC（AI生成内容）组专注于利用人工智能技术自动生成游戏内容，包括角色、场景、剧情等。",
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
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // 监听URL参数变化
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const expanded = params.get('expanded');
    if (expanded && techTeams.find(team => team.id === expanded)) {
      setActiveModal(expanded);
    }
  }, [location.search]);

  const openModal = (id: string) => {
    setActiveModal(id);
    const params = new URLSearchParams(location.search);
    params.set('expanded', id);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const closeModal = () => {
    setActiveModal(null);
    const params = new URLSearchParams(location.search);
    params.delete('expanded');
    const newSearch = params.toString();
    navigate(`${location.pathname}${newSearch ? `?${newSearch}` : ''}`, { replace: true });
  };

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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="技术方向 - G-bits 技术中心" 
        description="G-bits技术中心提供编译器、服务器架构、游戏引擎、技术AI和AIGC等多方面的技术合作解决方案。"
        keywords={['技术方向', '游戏编译器', '服务器架构', '游戏引擎', '技术AI', 'AIGC']}
      />

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
            技术方向
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-5xl mx-auto text-center mb-12 whitespace-nowrap"
            variants={childVariants}
          >
            我们为各项目提供基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化等解决方案。
          </motion.p>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto space-y-6"
          >
            {/* 第一行：2个等宽卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techTeams.slice(0, 2).map((team) => (
                <motion.div 
                  key={team.id}
                  variants={childVariants}
                  className="w-full"
                >
                  <Card className="bg-gray-900/80 border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-all shadow-lg hover:shadow-orange-500/10 overflow-hidden rounded-xl h-full">
                    <CardContent className="p-0">
                      <div 
                        className="relative p-6 cursor-pointer overflow-hidden min-h-[240px]"
                        style={{
                          backgroundImage: `url(${team.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                        onClick={() => openModal(team.id)}
                      >
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                              <team.icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <ChevronDown className="w-6 h-6 text-orange-400" />
                          </div>
                          <h2 className="text-xl font-semibold text-white mb-3">
                            {team.title}
                          </h2>
                          <p className="text-gray-300 text-sm">{team.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* 第二行：3个等宽卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techTeams.slice(2, 5).map((team) => (
                <motion.div 
                  key={team.id}
                  variants={childVariants}
                  className="w-full"
                >
                  <Card className="bg-gray-900/80 border border-white/10 backdrop-blur-sm hover:border-orange-500/50 transition-all shadow-lg hover:shadow-orange-500/10 overflow-hidden rounded-xl h-full">
                    <CardContent className="p-0">
                      <div 
                        className="relative p-6 cursor-pointer overflow-hidden min-h-[240px]"
                        style={{
                          backgroundImage: `url(${team.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                        onClick={() => openModal(team.id)}
                      >
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                              <team.icon className="w-6 h-6 text-orange-400" />
                            </div>
                            <ChevronDown className="w-6 h-6 text-orange-400" />
                          </div>
                          <h2 className="text-xl font-semibold text-white mb-3">
                            {team.title}
                          </h2>
                          <p className="text-gray-300 text-sm">{team.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* 浮层模态框 */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* 背景遮罩 */}
              <motion.div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={closeModal}
              />
              
              {/* 模态框内容 */}
              <motion.div
                className="relative bg-gray-900/95 border border-orange-500/30 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const team = techTeams.find(t => t.id === activeModal);
                  if (!team) return null;

                  return (
                    <>
                      {/* 关闭按钮 */}
                      <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-colors"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>

                      {/* 头部背景图 */}
                      <div 
                        className="relative h-48 overflow-hidden rounded-t-xl"
                        style={{
                          backgroundImage: `url(${team.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="absolute bottom-6 left-6">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center">
                              <team.icon className="w-8 h-8 text-orange-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">
                              {team.title}
                            </h2>
                          </div>
                        </div>
                      </div>

                      {/* 内容区域 */}
                      <div className="p-8">
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                          {team.details}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* 核心技术 */}
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-4">核心技术</h3>
                            <div className="flex flex-wrap gap-3">
                              {team.technologies.map((tech, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-3 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* 主要成果 */}
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-4">主要成果</h3>
                            <ul className="space-y-3">
                              {team.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                  <ChevronRight className="w-4 h-4 text-orange-400 mt-1 mr-3 shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* 联系信息 */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="flex items-center text-lg">
                            <span className="text-white mr-3">联系邮箱:</span>
                            <a 
                              href={`mailto:${team.email}`} 
                              className="text-orange-400 hover:text-orange-300 transition-colors font-medium"
                            >
                              {team.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageLayout>
  );
};

export default TechCooperation;
