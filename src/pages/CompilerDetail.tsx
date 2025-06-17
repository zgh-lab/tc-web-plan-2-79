
import { motion } from 'framer-motion';
import { Code, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CompilerDetail = () => {
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
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="编译器组 - G-bits 技术中心" 
        description="负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化。"
        keywords={['编译器', 'GS编译器', '底层开发', '性能优化']}
      />

      <main className="container mx-auto px-4 py-12 pt-28 min-h-[80vh] relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* 头部 */}
          <motion.div variants={childVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <Code className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                编译器组
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。
            </p>
          </motion.div>

          {/* 联系信息卡片 - 移到最前面 */}
          <motion.div variants={childVariants} className="mb-12">
            <Card className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-bold text-white">联系我们</h2>
                  </div>
                  <div className="flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-3 rounded-full border border-orange-500/30">
                    <span className="text-gray-300 mr-3">联系人:</span>
                    <span className="text-orange-400 font-semibold text-lg">楚耀翔 徐鑫荣</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 主要内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 核心能力卡片 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-bold text-white">核心能力</h2>
                  </div>
                  <div className="space-y-6">
                    {[
                      {
                        title: "GS编译器底层功能开发和问题修复",
                        desc: "提供编译器核心功能的开发与维护，确保编译器稳定运行",
                        hasLink: true
                      },
                      {
                        title: "GS编译器底层性能优化",
                        desc: "持续优化编译器性能，提升编译速度和效率",
                        hasLink: true
                      },
                      {
                        title: "为上层工具提供底层功能支持",
                        desc: "为调试、性能工具等上层应用提供必要的底层支持",
                        hasLink: false
                      },
                      {
                        title: "调整GS语言特性和功能",
                        desc: "根据游戏开发需求，定制化调整GS语言特性",
                        hasLink: false
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-start mb-3">
                          {item.hasLink ? (
                            <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0 group-hover:translate-x-1 transition-transform" />
                          ) : (
                            <div className="w-5 h-5 mt-1 mr-3 shrink-0" />
                          )}
                          <h3 className={`font-semibold transition-colors ${
                            item.hasLink 
                              ? 'text-orange-400 group-hover:text-orange-300' 
                              : 'text-gray-400'
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-sm ml-8 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 核心技术卡片 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gray-900/50 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-bold text-white">核心技术</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['词法分析', '语法分析', '中间代码生成', '代码优化', '目标代码生成'].map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline"
                        className="bg-orange-500/10 border-orange-500/30 text-orange-300 hover:bg-orange-500/20 transition-colors px-4 py-2 text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default CompilerDetail;
