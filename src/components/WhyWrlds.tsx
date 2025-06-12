
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WhyWrlds = () => {
  const reasons = [
    {
      title: "编译器",
      description: "自研GS语言编译器，支持多平台部署和高性能执行",
      icon: "🔧",
      tags: ["词法分析", "语法分析", "语义分析", "代码优化", "目标代码生成"]
    },
    {
      title: "游戏引擎",
      description: "基于Unity的定制化游戏引擎，专为高性能游戏开发而设计",
      icon: "🎮",
      tags: ["渲染管线", "物理引擎", "音频系统", "动画系统", "脚本系统"]
    },
    {
      title: "服务器框架",
      description: "高并发、低延迟的分布式游戏服务器架构",
      icon: "🔒",
      tags: ["分布式架构", "负载均衡", "数据持久化", "实时通信", "安全防护"]
    },
    {
      title: "开发工具链",
      description: "完整的游戏开发工具链，提升开发效率和代码质量",
      icon: "⚡",
      tags: ["代码生成", "资源管理", "构建系统", "调试工具", "性能分析"]
    },
    {
      title: "AI技术应用",
      description: "将AI技术融入游戏开发全流程，实现智能化开发",
      icon: "🤖",
      tags: ["机器学习", "自然语言处理", "计算机视觉", "智能推荐", "自动化测试"]
    },
    {
      title: "AIGC",
      description: "AI生成内容技术，自动化创建游戏资源和内容",
      icon: "✨",
      tags: ["内容生成", "图像合成", "文本生成", "音频合成", "程序化生成"]
    }
  ];

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

  const itemVariants = {
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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
          >
            技术方向
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            在GS语言、Unity引擎、服务器框架、游戏开发工具链、AI技术应用等领域均有深厚的技术积累，为公司自研项目提供坚实的底层技术支撑，并不断在积累与沉淀通用技术资产。
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-black/40 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 group h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">{reason.icon}</span>
                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                      {reason.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {reason.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/40 transition-colors text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <a 
            href="/tech-details" 
            className="inline-flex items-center px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20 group hover:scale-105"
          >
            了解更多技术详情
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;
