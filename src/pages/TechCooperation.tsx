import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

// 技术方向数据类型
interface TechDirection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  skills: string[];
  projects?: { name: string; description: string }[];
  applications?: string[];
}

// 定义技术方向数据
const techDirections: TechDirection[] = [
  {
    id: "game-dev",
    title: "游戏开发",
    subtitle: "创造引人入胜的互动体验",
    description:
      "我们致力于使用Unity等先进工具和技术，开发高质量、跨平台的游戏。从概念设计到最终发布，我们追求卓越。",
    icon: ChevronRight,
    skills: ["Unity", "C#", "多平台开发", "游戏设计", "VR/AR"],
    projects: [
      { name: "Project X", description: "一个创新的VR游戏项目。" },
      { name: "Mobile RPG", description: "一款流行的手机角色扮演游戏。" },
    ],
    applications: ["娱乐", "教育", "模拟"],
  },
  {
    id: "ai-tech",
    title: "人工智能",
    subtitle: "用智能技术赋能未来",
    description:
      "我们探索机器学习、深度学习和自然语言处理等领域，为游戏和应用开发智能解决方案，提升用户体验和效率。",
    icon: ChevronRight,
    skills: ["机器学习", "深度学习", "自然语言处理", "TensorFlow", "PyTorch"],
    projects: [
      { name: "AI Assistant", description: "智能AI助手，提高生产力。" },
      { name: "Smart Game AI", description: "为游戏提供更真实的AI对手。" },
    ],
    applications: ["自动化", "分析", "游戏"],
  },
  {
    id: "cloud-tech",
    title: "云计算",
    subtitle: "构建灵活可扩展的云解决方案",
    description:
      "我们利用云服务和分布式系统，构建可扩展、可靠的应用架构，支持大规模数据处理和实时服务。",
    icon: ChevronRight,
    skills: ["云服务", "分布式系统", "微服务架构", "Docker", "Kubernetes"],
    projects: [
      { name: "Cloud Platform", description: "一个高性能的云计算平台。" },
      { name: "Scalable API", description: "可扩展的API服务，支持高并发。" },
    ],
    applications: ["数据存储", "计算", "服务"],
  },
  {
    id: "compiler",
    title: "编译器组",
    subtitle: "编译技术 代码优化 语言设计",
    description:
      "专注于编译器的底层技术研究，包括代码优化、语言设计和运行时环境。我们的目标是创造更高效、更安全的软件开发工具。",
    icon: ChevronRight,
    skills: ["编译原理", "代码优化", "LLVM", "Rust", "静态分析"],
    projects: [
      { name: "Custom Compiler", description: "为特定领域设计的定制编译器。" },
      { name: "Code Optimizer", description: "提高代码执行效率的优化工具。" },
    ],
    applications: ["软件开发", "性能优化", "安全分析"],
  },
];

const TechCooperation = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const activeModalData = activeModal
    ? techDirections.find((direction) => direction.id === activeModal)
    : ({} as TechDirection);

  const openModal = (id: string) => {
    setActiveModal(id);
  };

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO
        title="技术方向 - G-bits 技术中心"
        description="探索G-bits技术中心的核心技术方向，包括游戏开发、人工智能、云计算等前沿技术领域。"
      />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              技术方向
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              我们专注于前沿技术的研发与应用，致力于为项目提供最优质的技术解决方案
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techDirections.map((direction, index) => (
              <motion.div
                key={direction.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 group"
              >
                {/* 卡片头部 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-600/20 rounded-lg">
                      <direction.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                      {direction.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => openModal(direction.id)}
                    className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                    aria-label="展开详情"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </button>
                </div>

                {/* 卡片描述 */}
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {direction.description}
                </p>

                {/* 技能标签 */}
                <div className="flex flex-wrap gap-2">
                  {direction.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                  {direction.skills.length > 3 && (
                    <span className="px-3 py-1 bg-gray-800/50 text-gray-400 text-sm rounded-full border border-gray-600">
                      +{direction.skills.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 浮层模态框 */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 模态框头部 */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl">
                    <activeModalData.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{activeModalData.title}</h2>
                    <p className="text-gray-400 mt-1">{activeModalData.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>

              {/* 模态框内容 */}
              <div className="space-y-8">
                {/* 描述 */}
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {activeModalData.description}
                  </p>
                </div>

                {/* 技能列表 */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">核心技能</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeModalData.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 项目案例 */}
                {activeModalData.projects && activeModalData.projects.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">相关项目</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeModalData.projects.map((project, index) => (
                        <div
                          key={index}
                          className="p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:bg-gray-700/30 transition-colors"
                        >
                          <h4 className="font-semibold text-white mb-2">{project.name}</h4>
                          <p className="text-gray-400 text-sm">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 应用领域 */}
                {activeModalData.applications && (
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">应用领域</h3>
                    <div className="flex flex-wrap gap-3">
                      {activeModalData.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default TechCooperation;
