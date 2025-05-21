
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Package, Wrench, Database, Code, Globe, ChevronRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const toolCategories = [
  {
    id: "development",
    title: "开发工具",
    icon: Wrench,
    description: "提高开发效率的各类工具和插件，包括编辑器扩展、代码生成工具等。",
    items: [
      {
        title: "即将上线",
        description: "编辑器扩展工具集合，包括代码补全、智能提示、快速重构等功能。"
      },
      {
        title: "敬请期待",
        description: "自动化代码生成工具，根据模板快速生成常用代码结构。"
      }
    ]
  },
  {
    id: "database",
    title: "数据库工具",
    icon: Database,
    description: "数据库设计、查询优化和数据迁移等相关工具。",
    items: [
      {
        title: "即将上线",
        description: "数据库查询优化工具，自动分析并优化复杂查询语句。"
      },
      {
        title: "敬请期待",
        description: "数据库版本控制与迁移工具，管理数据结构变更。"
      }
    ]
  },
  {
    id: "code",
    title: "代码工具",
    icon: Code,
    description: "代码质量检查、格式化、性能分析等工具集合。",
    items: [
      {
        title: "即将上线",
        description: "代码静态分析工具，检查潜在问题和优化机会。"
      },
      {
        title: "敬请期待",
        description: "代码性能分析工具，识别瓶颈并提供优化建议。"
      }
    ]
  },
  {
    id: "network",
    title: "网络工具",
    icon: Globe,
    description: "网络请求分析、API测试、协议调试等网络相关工具。",
    items: [
      {
        title: "即将上线",
        description: "API测试与文档生成工具，简化接口开发与测试流程。"
      },
      {
        title: "敬请期待",
        description: "网络请求性能分析工具，优化网络通信效率。"
      }
    ]
  }
];

const ToolLibrary = () => {
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
        title="工具库 - G-bits 技术中心" 
        description="G-bits技术中心提供的游戏开发工具库，包括各类开发工具、插件和资源，帮助开发者提高开发效率。"
        keywords={['工具库', '开发工具', '游戏开发', 'G-bits', '插件']}
      />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <motion.div 
          className="container mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex flex-col items-center justify-center space-y-6 mb-12 text-center">
            <motion.div 
              variants={childVariants}
              className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center"
            >
              <Package className="w-8 h-8 text-blue-500" />
            </motion.div>
            <motion.h1 
              variants={childVariants}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              工具库
            </motion.h1>
            <motion.p 
              variants={childVariants}
              className="text-xl text-gray-300 max-w-3xl"
            >
              这里将展示 G-bits 技术中心开发的各类游戏开发工具、插件和资源，目前页面正在建设中。
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={childVariants}
          >
            <Accordion 
              type="single" 
              collapsible 
              defaultValue="development" 
              className="border-b-0"
            >
              {toolCategories.map((category) => (
                <AccordionItem 
                  key={category.id} 
                  value={category.id}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <AccordionTrigger className="py-4 text-white hover:no-underline group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <span className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-14 space-y-4">
                      <p className="text-gray-300 mb-4">{category.description}</p>
                      
                      <ul className="space-y-4">
                        {category.items.map((item, index) => (
                          <li key={index} className="border border-white/10 rounded-lg p-4 bg-white/5">
                            <div className="flex items-start">
                              <ChevronRight className="w-4 h-4 text-blue-400 mt-1 mr-2 shrink-0" />
                              <div>
                                <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="mt-16 text-center"
            variants={childVariants}
          >
            <h2 className="text-2xl font-bold text-white mb-4">期待更多工具？</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              我们正在持续开发更多实用工具，以满足游戏开发各环节的需求。如果您有特定工具需求或建议，请随时与我们联系。
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
              提出需求
            </button>
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ToolLibrary;
