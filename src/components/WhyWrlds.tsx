
import { motion } from "framer-motion";
import { Code, Server, Wrench, Terminal, Cpu, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    id: "compiler",
    icon: Code,
    title: "编译器组",
    description: "负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。",
    link: "/tech-cooperation/compiler",
    image: "/lovable-uploads/0af8ac47-703e-457c-b65f-a7b7cd8cb1cc.png",
    details: [
      "GS编译器底层功能开发和问题修复",
      "GS编译器底层性能优化", 
      "为上层工具（如调试、性能工具）提供底层功能支持",
      "高度契合游戏开发细分领域，调整GS语言特性和功能"
    ],
    technologies: ["词法分析", "语法分析", "中间代码生成", "代码优化", "目标代码生成"],
    contact: "楚耀翔 徐鑫荣"
  },
  {
    id: "server",
    icon: Server,
    title: "服务器与工具链组",
    description: "提供游戏项目组覆盖从开发、测试、部署、运维 全生命周期的GS解决方案及全方位的技术支持。",
    link: "/tech-cooperation/server",
    image: "/lovable-uploads/9cf46b7e-ae02-45b6-8e03-1211b1dc3c3c.png",
    details: [
      "开发工具：语言支持、调试分析、通用工具",
      "游戏框架：代码包PKG、服务器引擎、公共服务器模块、引擎插件",
      "DevOps：CI/CD、监控系统、协作安全",
      "技术支持：快速响应、全方位技术支持、性能分析与优化"
    ],
    technologies: ["GS开发生态", "服务器架构设计", "客户端引擎插件", "DevOps"],
    caseLink: "https://leiting.feishu.cn/wiki/UExNwkOh2iWf5QkTpBsc7ffSnVe?table=tblOGlj9u9W5Kruv&view=vewEMkh4kx",
    contact: "吴荣钦"
  },
  {
    id: "engine",
    icon: Wrench,
    title: "引擎组",
    description: "为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。",
    link: "/tech-cooperation/engine",
    image: "/lovable-uploads/c4e79bdd-859c-445e-b4d5-6dfc39871707.png",
    details: [
      "渲染管线：builtin/jrp/urp/hdrp 渲染管线搭建与渲染特性开发",
      "性能优化：优化内存管理、CPU耗时、GPU渲染压力",
      "开发编辑器工具：开发配合程序、美术、策划的可视化编辑器工具",
      "通用游戏开发模块：提供通用客户端开发框架和通用模块",
      "解决疑难杂症：攻坚项目组解决不了的问题bug和技术难题",
      "美术资源制作标准：制定美术资源制作标准及对应开发工具流"
    ],
    technologies: ["图形渲染", "物理模拟", "动画系统", "场景管理", "资源优化"],
    caseLink: "https://leiting.feishu.cn/wiki/wikcnM8bgWhiD0GX4BFygcRL66W?from=from_copylink",
    contact: "张兴捷"
  },
  {
    id: "tech-ai",
    icon: Terminal,
    title: "技术AI组",
    description: "紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。",
    link: "/tech-cooperation/tech-ai",
    image: "/lovable-uploads/2008a0a3-f03c-4295-866e-0feb9ee20b9e.png",
    details: [
      "AI流程研发与场景化落地：采用NLP、深度学习等技术，针对垂直场景开发定制化AI解决方案",
      "AI工具与平台开发：整合前沿AI技术，构建企业级工具平台"
    ],
    technologies: ["机器学习", "数据分析", "行为决策树", "自然语言处理", "计算机视觉"],
    cases: [
      "AIWebhub 线上AIGC平台",
      "G-pilot 代码补全IDE插件", 
      "G社贾维斯（内测）AI工具服务机器人",
      "DingCode（内测）AI代码审核平台"
    ],
    contact: "梁钰彬 张文豪"
  },
  {
    id: "aigc",
    icon: Cpu,
    title: "AIGC组",
    description: "AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。",
    link: "/tech-cooperation/aigc",
    image: "/lovable-uploads/44bbadbc-5ae3-405e-b533-909a9f956bed.png",
    details: [
      "2D AIGC-SD/FLUX/视频 模型训练：LORA少量图集训练画风和深度训练设计风格特征",
      "2D AIGC-ComfyUI工作流定制/多模态模型工作流：可定制美术各类生成式工作流",
      "3D AIGC-方案整合和落地项目：整合3DAIGC生成技术落地方案",
      "AIGC智能NPC/AIGC智能体应用/知识库-技术探索落地"
    ],
    technologies: ["2D AIGC", "3D AIGC", "AIGC智能体", "AIGC教学推广"],
    cases: [
      "AIGC智能NPC探索：ai智能NPC对话交互",
      "AIGC世界观前置知识库探索",
      "项目使用AI图标流程：多模态AI模型-项目图标应用流程",
      "AIGC知识库和教学分享"
    ],
    contact: "李智宇"
  }
];

const WhyWrlds = () => {
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
    window.scrollTo(0, 0);
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

  return (
    <section className="py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="mb-12 text-center">
            <motion.h2 variants={childVariants} className="text-3xl md:text-4xl font-bold mb-4 text-white">
              技术方向
            </motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-5xl mx-auto whitespace-nowrap opacity-80">
              我们为各项目提供基于GS语言的前后端框架、GS插件、公共服务器、工具链、图形渲染方案、前后端性能优化等解决方案。
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div 
                key={feature.id}
                variants={childVariants}
                className="md:col-span-4 overflow-hidden rounded-lg relative cursor-pointer"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '320px'
                }}
                onClick={() => handleCardClick(feature.link)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="absolute inset-0 p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-200 flex-grow opacity-90 mb-4">{feature.description}</p>
                  
                  {/* 核心技术标签 - 显示全部 */}
                  {feature.technologies && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {feature.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    了解更多 
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}

            {features.slice(3, 5).map((feature, index) => (
              <motion.div 
                key={feature.id}
                variants={childVariants}
                className="md:col-span-6 overflow-hidden rounded-lg relative cursor-pointer"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '320px'
                }}
                onClick={() => handleCardClick(feature.link)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="absolute inset-0 p-5 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-200 flex-grow opacity-90 mb-4">{feature.description}</p>
                  
                  {/* 核心技术标签 - 显示全部 */}
                  {feature.technologies && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {feature.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group">
                    了解更多 
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* 移除了"查看全部服务"按钮，因为现在没有总览页面 */}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
