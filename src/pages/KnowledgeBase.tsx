import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Folder, BookOpenText, FileCode, Presentation, Award, Lightbulb, ChevronRight, ChevronDown } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const categories = [
  {
    id: "department",
    title: "部门介绍",
    icon: Book,
    description: "了解G-bits技术中心的组织结构、发展历程和技术体系。",
    content: [
      {
        title: "组织结构",
        description: "技术中心分为编译器组、服务器与工具链组、引擎组、技术AI组和AIGC组五个核心部门，协同合作提供全方位技术支持。",
        image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      },
      {
        title: "发展历程",
        description: "从2010年成立至今，技术中心经历了从基础工具开发到AI技术应用的全面发展。",
        image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png"
      },
      {
        title: "技术体系",
        description: "构建了从底层引擎、编译工具到上层应用的完整技术体系，形成了独特的技术壁垒和核心竞争力。",
        image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      }
    ],
    backgroundImage: "/lovable-uploads/ce62508b-c515-40a4-912f-8309b6a1e653.png",
    email: "compiler@g-bits.com"
  },
  {
    id: "tech-categories",
    title: "技术分类",
    icon: Folder,
    description: "不同领域的技术资源分类，包括前端、后端、引擎、AI、工具链等。",
    content: [
      {
        title: "前端技术",
        description: "包括UI框架、渲染优化、动画系统、交互设计等前端开发相关技术文档和最佳实践。",
        image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      },
      {
        title: "后端技术",
        description: "涵盖服务器架构、数据库设计、网络协议、高并发处理等游戏后端开发核心技术。",
        image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png"
      },
      {
        title: "引擎技术",
        description: "关于游戏引擎核心系统，包括渲染管线、物理系统、场景管理、资源加载等技术文档。",
        image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      },
      {
        title: "AI技术",
        description: "人工智能在游戏中的应用技术，包括NPC行为、寻路算法、内容生成等相关文档。",
        image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png"
      }
    ],
    backgroundImage: "/lovable-uploads/c1ba14e7-7999-43a4-b15f-c97ccea595d2.png",
    email: "servertools@g-bits.com"
  },
  {
    id: "learning-map",
    title: "学习地图",
    icon: BookOpenText,
    description: "为不同领域的技术人员提供系统化的学习路径和资源推荐。",
    content: [
      {
        title: "游戏客户端开发",
        description: "从基础图形学知识到高级渲染技术，系统性学习路径助你成为专业游戏客户端开发者。",
        image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      },
      {
        title: "游戏服务器开发",
        description: "从网络编程基础到分布式服务器架构，掌握高性能游戏后端开发的核心技术。",
        image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      },
      {
        title: "游戏引擎开发",
        description: "从底层系统设计到高级引擎功能实现，全面学习游戏引擎开发技术。",
        image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png"
      }
    ],
    backgroundImage: "/lovable-uploads/d30067d0-4a55-4500-b582-96bac8c62789.png",
    email: "servertools@g-bits.com"
  },
  {
    id: "standards",
    title: "规范相关",
    icon: FileCode,
    description: "开发规范、代码风格、文档模板等标准化资源。",
    content: [
      {
        title: "编码规范",
        description: "不同语言的编码风格指南，包括命名规则、格式化标准、注释要求等详细规范。",
        image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      },
      {
        title: "文档规范",
        description: "技术文档的撰写模板与规范，包括API文档、设计文档、使用手册等标准化格式。",
        image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png"
      },
      {
        title: "工作流规范",
        description: "版本控制、代码审查、测试流程等开发工作流程的标准化指南。",
        image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      },
      {
        title: "质量标准",
        description: "代码质量、性能标准、安全规范等质量保证相关指导文档。",
        image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      }
    ],
    backgroundImage: "/lovable-uploads/26bc221f-c24f-4b37-b7c7-d7bfa7137476.png",
    email: "engine@g-bits.com"
  },
  {
    id: "sharing",
    title: "分享专区",
    icon: Presentation,
    description: "技术分享、培训材料、学习资源等知识共享内容。",
    content: [
      {
        title: "技术讲座",
        description: "内部技术分享与外部技术大会的演讲内容，涵盖前沿技术趋势与实践经验。",
        image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png"
      },
      {
        title: "案例分析",
        description: "典型项目案例的技术分析，包括架构设计、性能优化、问题解决等实战经验。",
        image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      },
      {
        title: "培训资料",
        description: "内部技术培训的课程资料，包括基础入门、进阶提升、专题研究等系列内容。",
        image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png"
      }
    ],
    backgroundImage: "/lovable-uploads/ef8b867d-f04a-4719-aa25-83d223645c21.png",
    email: "techai@g-bits.com"
  },
  {
    id: "patents",
    title: "软著专利",
    icon: Award,
    description: "技术中心获得的软件著作权与专利成果展示。",
    content: [
      {
        title: "核心专利",
        description: "技术中心在游戏引擎、编译技术、AI算法等领域的核心专利成果展示。",
        image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      },
      {
        title: "软件著作权",
        description: "自主研发的各类软件工具、系统平台的软件著作权登记成果。",
        image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      },
      {
        title: "技术论文",
        description: "发表在学术期刊与会议的技术研究论文，展示技术创新与学术贡献。",
        image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png"
      }
    ],
    backgroundImage: "/lovable-uploads/58643d06-8975-4a17-b176-3d3b99fc3401.png",
    email: "aigc@g-bits.com"
  },
  {
    id: "exploration",
    title: "技术探索",
    icon: Lightbulb,
    description: "前沿技术研究、创新实验项目、技术趋势分析等探索性内容。",
    content: [
      {
        title: "AI研究",
        description: "在游戏AI、生成内容、智能优化等领域的前沿探索与实验成果。",
        image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png"
      },
      {
        title: "图形渲染",
        description: "实时渲染、全局光照、物理材质等先进图形技术的研究与实现。",
        image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png"
      },
      {
        title: "云游戏",
        description: "云端渲染、低延迟传输、分布式计算等云游戏相关技术的探索。",
        image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
      },
      {
        title: "新兴技术",
        description: "AR/VR、区块链、元宇宙等新兴技术在游戏领域的应用探索。",
        image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png"
      }
    ],
    backgroundImage: "/lovable-uploads/f55f3e71-33fa-4ea1-984a-f5a5b9305a2a.png",
    email: "exploration@g-bits.com"
  }
];

const KnowledgeBase = () => {
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
    <PageLayout backgroundVariant="knowledge">
      <SEO 
        title="知识库 - G-bits 技术中心" 
        description="G-bits技术中心知识库，提供部门介绍、技术分类、学习地图、开发规范、技术分享、软著专利和前沿技术探索等内容。"
        keywords={['知识库', '技术文档', '学习资源', '开发规范', '技术分享', '专利']}
      />

      <main className="container mx-auto px-4 py-12 pt-36 min-h-[80vh] relative z-10">
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
            知识库
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12"
            variants={childVariants}
          >
            汇聚G-bits技术中心的技术文档、学习资源、开发规范和研究成果，<br />
            为团队提供系统化的知识支持和技术积累。
          </motion.p>

          {/* 长方形卡片布局 - 4行2列或2行4列 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {categories.map((category) => (
              <motion.div 
                key={category.id}
                variants={childVariants}
                className="w-full"
              >
                <Collapsible 
                  open={openItems.includes(category.id)} 
                  onOpenChange={() => toggleItem(category.id)}
                  className="w-full"
                >
                  <Card className="bg-gray-900/80 border border-white/10 backdrop-blur-sm hover:border-green-500/50 transition-all shadow-lg hover:shadow-green-500/10 overflow-hidden rounded-xl h-full">
                    <CardContent className="p-0">
                      <CollapsibleTrigger className="w-full text-left">
                        <div 
                          className="relative p-6 cursor-pointer overflow-hidden min-h-[180px]"
                          style={{
                            backgroundImage: `url(${category.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <div className="absolute inset-0 bg-black/60"></div>
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-4">
                              <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                <category.icon className="w-6 h-6 text-green-400" />
                              </div>
                              <ChevronDown 
                                className={`w-6 h-6 text-green-400 transition-transform ${openItems.includes(category.id) ? 'rotate-180' : ''}`} 
                              />
                            </div>
                            <h2 className="text-xl font-semibold text-white mb-3">
                              {category.title}
                            </h2>
                            <p className="text-gray-300 text-sm">{category.description}</p>
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <div className="p-6 pt-3 border-t border-white/10"> 
                          <div className="grid grid-cols-1 gap-3 mb-4"> 
                            {category.content.map((item, idx) => (
                              <div key={idx} className="bg-black/30 rounded-lg overflow-hidden">
                                <div className="relative h-24 overflow-hidden">
                                  <img 
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center p-3">
                                    <p className="text-white font-medium text-sm">{item.title}</p>
                                  </div>
                                </div>
                                <div className="p-3">
                                  <p className="text-gray-300 text-xs mb-2">{item.description}</p>
                                  <button className="text-green-400 hover:text-green-300 flex items-center text-xs">
                                    查看详情
                                    <ChevronRight className="ml-1 w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center text-sm">
                            <span className="text-white mr-2">联系邮箱:</span>
                            <a href={`mailto:${category.email}`} className="text-green-400 hover:underline">
                              {category.email}
                            </a>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </CardContent>
                  </Card>
                </Collapsible>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default KnowledgeBase;
