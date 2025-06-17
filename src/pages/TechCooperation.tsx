
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Wrench, Terminal, Cpu, ChevronRight, ChevronDown, X, ExternalLink } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

const techTeams = [
  {
    id: "compiler",
    title: "编译器组",
    icon: Code,
    description: "负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。",
    details: "负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。",
    image: "/lovable-uploads/0af8ac47-703e-457c-b65f-a7b7cd8cb1cc.png",
    achievements: [
      "GS编译器底层功能开发和问题修复",
      "GS编译器底层性能优化",
      "为上层工具（如调试、性能工具）提供底层功能支持",
      "高度契合游戏开发细分领域，调整GS语言特性和功能"
    ],
    technologies: ["词法分析", "语法分析", "中间代码生成", "代码优化", "目标代码生成"],
    email: "compiler@g-bits.com",
    contact: "楚耀翔 徐鑫荣"
  },
  {
    id: "server",
    title: "服务器与工具链组",
    icon: Server,
    description: "提供游戏项目组覆盖从开发、测试、部署、运维 全生命周期的GS解决方案及全方位的技术支持。",
    details: "提供游戏项目组覆盖从开发、测试、部署、运维 全生命周期的GS解决方案及全方位的技术支持。",
    image: "/lovable-uploads/9cf46b7e-ae02-45b6-8e03-1211b1dc3c3c.png",
    achievements: [
      "开发工具：语言支持：VSCode的语法插件(GsLang)、GS的PKG包管理工具(Gip)，GS的项目管理工具(GsHub)",
      "调试分析：GS的性能分析工具(Profiler)，GS进程的调试连接工具(TelnetClient)",
      "通用工具：表格差异合并工具(ExcelMerge)，数字资产管理系统(DAM)",
      "游戏框架：代码包PKG、服务器引擎、公共服模块、引擎插件",
      "DevOps：CI/CD、监控系统、协作安全",
      "技术支持：快速响应、全方位技术支持、性能分析与优化"
    ],
    capabilities: {
      "开发工具": {
        "语言支持": "VSCode的语法插件(GsLang)、GS的PKG包管理工具(Gip)，GS的项目管理工具(GsHub)",
        "调试分析": "GS的性能分析工具(Profiler)，GS进程的调试连接工具(TelnetClient)",
        "通用工具": "表格差异合并工具(ExcelMerge)，数字资产管理系统(DAM)"
      },
      "游戏框架": {
        "代码包PKG": "网络框架，数据存储，配置加载，安全校验，业务模块等",
        "服务器引擎": "集成基础业务的游戏服引擎(engine0)，轻量级的游戏服引擎(server_core)",
        "公共服模块": "提供常用且通用的公共服务器(auth/social/rank/webgm等)",
        "引擎插件": "通过ToGS/UEGS 使Unity/Unreal能用GS脚本进行游戏业务开发"
      },
      "DevOps": {
        "CI/CD": "提供GS项目组的自动化构建流程规范，并提供一键打包/部署的解决方案",
        "监控系统": "报错日志监控系统(WatcherCenter)、游戏统一管理后台(AllInOne)",
        "协作安全": "提供GS项目组在域内开发与域外发布的代码安全管理方案"
      },
      "技术支持": "为GS开发生态产品提供快速响应、全方位的技术支持，以及GS服务器性能分析与优化、GS代码质量评审等服务"
    },
    technologies: ["GS开发生态", "服务器架构设计", "客户端引擎插件", "DevOps"],
    email: "servertools@g-bits.com",
    caseLink: "https://leiting.feishu.cn/wiki/UExNwkOh2iWf5QkTpBsc7ffSnVe?from=from_copylink",
    contact: "吴荣钦"
  },
  {
    id: "engine",
    title: "引擎组",
    icon: Wrench,
    description: "为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。",
    details: "为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。",
    image: "/lovable-uploads/c4e79bdd-859c-445e-b4d5-6dfc39871707.png",
    achievements: [
      "渲染管线：builtin/jrp/urp/hdrp 渲染管线搭建与渲染特性开发，满足美术渲染效果",
      "性能优化：优化内存管理、CPU耗时、GPU渲染压力，解决卡顿、发热、包体过大等问题",
      "开发编辑器工具：开发配合程序、美术、策划的可视化编辑器工具",
      "通用游戏开发模块：提供通用客户端开发框架和通用模块",
      "解决疑难杂症：攻坚项目组解决不了的问题bug和技术难题",
      "美术资源制作标准：制定美术资源制作标准及对应开发工具流"
    ],
    capabilities: {
      "渲染管线": "builtin/jrp/urp/hdrp 渲染管线搭建与渲染特性开发，满足美术渲染效果",
      "性能优化": "优化内存管理、CPU耗时、GPU渲染压力，解决卡顿、发热、包体过大等问题，保证移动平台的性能帧率要求和兼容性",
      "开发编辑器工具": "开发配合程序、美术、策划的可视化编辑器工具",
      "通用游戏开发模块": "提供通用客户端开发框架和通用模块（如资源加载，热更框架，网络同步架构），缩短项目前期开发时间",
      "解决疑难杂症": "攻坚项目组解决不了的问题bug和技术难题",
      "美术资源制作标准": "结合已有项目和市面游戏游戏规格经验，制定美术资源制作标准及对应开发工具流"
    },
    technologies: ["图形渲染", "物理模拟", "动画系统", "场景管理", "资源优化"],
    email: "engine@g-bits.com",
    caseLink: "https://leiting.feishu.cn/wiki/wikcnM8bgWhiD0GX4BFygcRL66W?from=from_copylink",
    contact: "张兴捷"
  },
  {
    id: "tech-ai",
    title: "技术AI组",
    icon: Terminal,
    description: "紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。",
    details: "紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。",
    image: "/lovable-uploads/2008a0a3-f03c-4295-866e-0feb9ee20b9e.png",
    achievements: [
      "AI流程研发与场景化落地：采用NLP、深度学习等技术，针对垂直场景开发定制化AI解决方案",
      "AI工具与平台开发：整合前沿AI技术，构建企业级工具平台"
    ],
    capabilities: {
      "AI流程研发与场景化落地": "采用NLP、深度学习等技术，针对垂直场景开发定制化AI解决方案，实现传统流程和方案的升级提效，如AI小说摘要、AI捏脸、AI多语种翻译",
      "AI工具与平台开发": "整合前沿AI技术，构建企业级工具平台（如AIWebhub、G社贾维斯），降低使用门槛，便利AI落地应用"
    },
    cases: [
      { text: "AIWebhub 线上AIGC平台", link: "https://aiwebhub.g-bits.com/feishu_login?url=/" },
      { text: "G-pilot 代码补全IDE插件", link: "https://leiting.feishu.cn/docx/JlKSdnvCbo7x9dxEsxScgwWKnkx?from=from_copylink" },
      { text: "G社贾维斯（内测）AI工具服务机器人", link: "https://leiting.feishu.cn/wiki/BIjqwWadEiVz57kOsKmcEJDYnee?from=from_copylink" },
      { text: "DingCode（内测）AI代码审核平台" }
    ],
    technologies: ["机器学习", "数据分析", "行为决策树", "自然语言处理", "计算机视觉"],
    email: "techai@g-bits.com",
    contact: "梁钰彬 张文豪"
  },
  {
    id: "aigc",
    title: "AIGC组",
    icon: Cpu,
    description: "AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。",
    details: "AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。",
    image: "/lovable-uploads/44bbadbc-5ae3-405e-b533-909a9f956bed.png",
    achievements: [
      "2D AIGC-SD/FLUX/视频 模型训练：LORA少量图集训练画风和深度训练设计风格特征",
      "2D AIGC-ComfyUI工作流定制/多模态模型工作流：可定制美术各类生成式工作流",
      "3D AIGC-方案整合和落地项目：整合3DAIGC生成技术落地方案",
      "AIGC智能NPC/AIGC智能体应用/知识库-技术探索落地"
    ],
    capabilities: {
      "2D AIGC-SD/FLUX/视频 模型训练": "LORA少量图集训练画风和深度训练设计风格特征，DB大模型的缺失概念补充，视频模型训练",
      "2D AIGC-ComfyUI工作流定制/多模态模型工作流": "可定制美术各类生成式-ComfyUI工作流用于项目美术生产，提升生产效率",
      "3D AIGC-方案整合和落地项目": "整合3DAIGC生成技术落地方案，提供AI程序化纹理，模型，等PCG技术落地项目使用方案",
      "AIGC智能NPC/AIGC智能体应用/知识库-技术探索落地": "对于前沿的AIGC智能NPC交互和AI智能体应用，知识库探索解决方案，应用于项目和AIGC工作流自动化"
    },
    cases: [
      { text: "AIGC智能NPC探索", link: "https://leiting.feishu.cn/wiki/EhklwUO0EitvhZkmUm1cXEQ9n9d?from=from_copylink" },
      { text: "AIGC世界观前置知识库探索", link: "https://leiting.feishu.cn/wiki/HnFvwPjZviV6eMkSj0Ccehhnnac?from=from_copylink" },
      { text: "项目使用AI图标流程", link: "https://leiting.feishu.cn/wiki/EfxRwwGFkifkhrk7yeFchsiynic?from=from_copylink" },
      { text: "AIGC知识库和教学分享", links: ["https://leiting.feishu.cn/wiki/BZUyw4rwyi4w7fkwbswcj1vMnlH?from=from_copylink", "https://leiting.feishu.cn/wiki/EuEMwQ6MmibpkckI75ncP9tanxg?from=from_copylink"] }
    ],
    technologies: ["2D AIGC", "3D AIGC", "AIGC智能体", "AIGC教学推广"],
    email: "aigc@g-bits.com",
    contact: "李智宇"
  }
];

const TechCooperation = () => {  
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

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
            className="text-xl text-gray-300 max-w-5xl mx-auto text-center mb-12"
            variants={childVariants}
          >
            我们为各项目提供基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化等解决方案。
          </motion.p>

          {/* 重新设计的卡片网格 - 采用更美观的不规则布局 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto space-y-8"
          >
            {/* 第一行：编译器组（大卡片） */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div 
                variants={childVariants}
                className="lg:col-span-2"
              >
                <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/60 transition-all shadow-xl hover:shadow-purple-500/20 rounded-2xl h-full">
                  <CardContent className="p-0">
                    <div 
                      className="relative p-8 cursor-pointer overflow-hidden min-h-[280px] flex flex-col justify-between"
                      style={{
                        backgroundImage: `url(${techTeams[0].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      onClick={() => openModal(techTeams[0].id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-blue-900/60"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-16 h-16 bg-purple-500/30 rounded-xl flex items-center justify-center">
                            <techTeams[0].icon className="w-8 h-8 text-purple-300" />
                          </div>
                          <ChevronDown className="w-6 h-6 text-purple-300" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                          {techTeams[0].title}
                        </h2>
                        <p className="text-gray-200 text-lg leading-relaxed">{techTeams[0].description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* 服务器与工具链组（中等卡片） */}
              <motion.div 
                variants={childVariants}
                className="lg:col-span-1"
              >
                <Card className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/60 transition-all shadow-xl hover:shadow-orange-500/20 rounded-2xl h-full">
                  <CardContent className="p-0">
                    <div 
                      className="relative p-6 cursor-pointer overflow-hidden min-h-[280px] flex flex-col justify-between"
                      style={{
                        backgroundImage: `url(${techTeams[1].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      onClick={() => openModal(techTeams[1].id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 to-red-900/60"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-14 h-14 bg-orange-500/30 rounded-xl flex items-center justify-center">
                            <techTeams[1].icon className="w-7 h-7 text-orange-300" />
                          </div>
                          <ChevronDown className="w-5 h-5 text-orange-300" />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3">
                          {techTeams[1].title}
                        </h2>
                        <p className="text-gray-200 text-sm leading-relaxed">{techTeams[1].description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* 第二行：引擎组 + 技术AI组 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={childVariants}>
                <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/30 backdrop-blur-sm hover:border-green-400/60 transition-all shadow-xl hover:shadow-green-500/20 rounded-2xl h-full">
                  <CardContent className="p-0">
                    <div 
                      className="relative p-7 cursor-pointer overflow-hidden min-h-[260px] flex flex-col justify-between"
                      style={{
                        backgroundImage: `url(${techTeams[2].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      onClick={() => openModal(techTeams[2].id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-emerald-900/60"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-15 h-15 bg-green-500/30 rounded-xl flex items-center justify-center">
                            <techTeams[2].icon className="w-7 h-7 text-green-300" />
                          </div>
                          <ChevronDown className="w-6 h-6 text-green-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                          {techTeams[2].title}
                        </h2>
                        <p className="text-gray-200 leading-relaxed">{techTeams[2].description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={childVariants}>
                <Card className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all shadow-xl hover:shadow-cyan-500/20 rounded-2xl h-full">
                  <CardContent className="p-0">
                    <div 
                      className="relative p-7 cursor-pointer overflow-hidden min-h-[260px] flex flex-col justify-between"
                      style={{
                        backgroundImage: `url(${techTeams[3].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      onClick={() => openModal(techTeams[3].id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 to-blue-900/60"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-15 h-15 bg-cyan-500/30 rounded-xl flex items-center justify-center">
                            <techTeams[3].icon className="w-7 h-7 text-cyan-300" />
                          </div>
                          <ChevronDown className="w-6 h-6 text-cyan-300" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                          {techTeams[3].title}
                        </h2>
                        <p className="text-gray-200 leading-relaxed">{techTeams[3].description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* 第三行：AIGC组（居中的特色卡片） */}
            <div className="flex justify-center">
              <motion.div 
                variants={childVariants}
                className="w-full max-w-2xl"
              >
                <Card className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/30 backdrop-blur-sm hover:border-pink-400/60 transition-all shadow-xl hover:shadow-pink-500/20 rounded-2xl">
                  <CardContent className="p-0">
                    <div 
                      className="relative p-8 cursor-pointer overflow-hidden min-h-[260px] flex flex-col justify-between"
                      style={{
                        backgroundImage: `url(${techTeams[4].image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      onClick={() => openModal(techTeams[4].id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/80 to-purple-900/60"></div>
                      <div className="relative z-10 text-center">
                        <div className="flex items-center justify-center mb-6">
                          <div className="w-16 h-16 bg-pink-500/30 rounded-xl flex items-center justify-center mr-4">
                            <techTeams[4].icon className="w-8 h-8 text-pink-300" />
                          </div>
                          <h2 className="text-3xl font-bold text-white">
                            {techTeams[4].title}
                          </h2>
                          <ChevronDown className="w-6 h-6 text-pink-300 ml-4" />
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed">{techTeams[4].description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* 浮层模态框 - 保持原有的模态框代码不变 */}
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
                        
                        {/* 核心能力部分 */}
                        {team.capabilities && (
                          <div className="mb-8">
                            <h3 className="text-xl font-semibold text-white mb-4">核心能力</h3>
                            <div className="space-y-4">
                              {Object.entries(team.capabilities).map(([category, content]) => (
                                <div key={category}>
                                  <h4 className="text-lg font-medium text-orange-400 mb-2">{category}</h4>
                                  {typeof content === 'string' ? (
                                    <p className="text-gray-300 leading-relaxed pl-4">{content}</p>
                                  ) : (
                                    <div className="pl-4 space-y-2">
                                      {Object.entries(content).map(([subCategory, subContent]) => (
                                        <div key={subCategory}>
                                          <span className="text-white font-medium">{subCategory}：</span>
                                          <span className="text-gray-300">{subContent}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
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

                          {/* 主要方向/相关案例 */}
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-4">
                              {team.cases ? '相关案例' : '主要方向'}
                            </h3>
                            <ul className="space-y-3">
                              {team.cases ? (
                                team.cases.map((item, idx) => (
                                  <li key={idx} className="flex items-start text-gray-300">
                                    <ChevronRight className="w-4 h-4 text-orange-400 mt-1 mr-3 shrink-0" />
                                    <div className="flex-1">
                                      <h4 className="text-orange-400 font-medium mb-2">{item.text}</h4>
                                      {item.link ? (
                                        <a 
                                          href={item.link} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-300 rounded-md text-sm hover:bg-orange-500/30 transition-colors"
                                        >
                                          <ExternalLink className="w-3 h-3 mr-1" />
                                          点击链接
                                        </a>
                                      ) : item.links ? (
                                        <div className="flex flex-wrap gap-2">
                                          {item.links.map((link, linkIdx) => (
                                            <a 
                                              key={linkIdx}
                                              href={link} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                              className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-300 rounded-md text-sm hover:bg-orange-500/30 transition-colors"
                                            >
                                              <ExternalLink className="w-3 h-3 mr-1" />
                                              点击链接
                                            </a>
                                          ))}
                                        </div>
                                      ) : null}
                                    </div>
                                  </li>
                                ))
                              ) : (
                                team.achievements.map((item, idx) => (
                                  <li key={idx} className="flex items-start text-gray-300">
                                    <ChevronRight className="w-4 h-4 text-orange-400 mt-1 mr-3 shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                        </div>

                        {/* 相关案例链接 */}
                        {team.caseLink && (
                          <div className="mt-6 pt-4 border-t border-white/10">
                            <div className="flex items-center text-lg">
                              <span className="text-white mr-3">相关案例：</span>
                              <a 
                                href={team.caseLink} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 rounded-md hover:bg-orange-500/30 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                点击链接
                              </a>
                            </div>
                          </div>
                        )}

                        {/* 联系信息 */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                          <div className="flex items-center text-lg">
                            <span className="text-white mr-3">联系人:</span>
                            <span className="text-orange-400 font-medium">
                              {team.contact}
                            </span>
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
