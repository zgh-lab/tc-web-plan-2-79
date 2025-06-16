
import { motion } from 'framer-motion';
import { Code, ExternalLink, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

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
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* 头部 */}
          <motion.div variants={childVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Code className="w-8 h-8 text-orange-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">编译器组</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。
            </p>
          </motion.div>

          {/* 核心能力 */}
          <motion.div variants={childVariants} className="mb-12">
            <Card className="bg-gray-900/80 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">核心能力</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0" />
                      <div>
                        <h3 className="text-white font-medium mb-2">GS编译器底层功能开发和问题修复</h3>
                        <p className="text-gray-300 text-sm">提供编译器核心功能的开发与维护，确保编译器稳定运行</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0" />
                      <div>
                        <h3 className="text-white font-medium mb-2">GS编译器底层性能优化</h3>
                        <p className="text-gray-300 text-sm">持续优化编译器性能，提升编译速度和效率</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0" />
                      <div>
                        <h3 className="text-white font-medium mb-2">为上层工具提供底层功能支持</h3>
                        <p className="text-gray-300 text-sm">为调试、性能工具等上层应用提供必要的底层支持</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0" />
                      <div>
                        <h3 className="text-white font-medium mb-2">调整GS语言特性和功能</h3>
                        <p className="text-gray-300 text-sm">根据游戏开发需求，定制化调整GS语言特性</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 核心技术 */}
          <motion.div variants={childVariants} className="mb-12">
            <Card className="bg-gray-900/80 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">核心技术</h2>
                <div className="flex flex-wrap gap-4">
                  {['词法分析', '语法分析', '中间代码生成', '代码优化', '目标代码生成'].map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 联系信息 */}
          <motion.div variants={childVariants}>
            <Card className="bg-gray-900/80 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">联系我们</h2>
                <div className="flex items-center text-lg">
                  <span className="text-white mr-3">联系人:</span>
                  <span className="text-orange-400 font-medium">楚耀翔 徐鑫荣</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default CompilerDetail;
