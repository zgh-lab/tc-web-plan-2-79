
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const capabilities = [
    {
      title: "GS编译器底层功能开发和问题修复",
      description: "提供编译器核心功能的开发与维护，确保编译器稳定运行"
    },
    {
      title: "GS编译器底层性能优化",
      description: "持续优化编译器性能，提升编译速度和效率"
    },
    {
      title: "为上层工具提供底层功能支持",
      description: "为调试、性能工具等上层应用提供必要的底层支持"
    },
    {
      title: "调整GS语言特性和功能",
      description: "根据游戏开发需求，定制化调整GS语言特性"
    }
  ];

  const technologies = ["词法分析", "语法分析", "中间代码生成", "代码优化", "目标代码生成"];

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
          <motion.div variants={childVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-orange-500/20">
                <Code className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                编译器组
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。
            </p>
          </motion.div>

          {/* 核心能力卡片网格 */}
          <motion.div variants={childVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">核心能力</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, idx) => (
                <motion.div
                  key={idx}
                  variants={childVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/60 transition-all shadow-lg hover:shadow-orange-500/20 h-full">
                    <CardHeader>
                      <CardTitle className="text-orange-400 text-lg font-semibold">
                        {capability.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        {capability.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 核心技术和联系信息 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 核心技术 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-orange-400" />
                    </div>
                    核心技术
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 hover:border-orange-400/50 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 联系信息 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">联系我们</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-lg">
                      <span className="text-gray-400 mr-3 font-medium">联系人:</span>
                      <span className="text-orange-400 font-semibold">楚耀翔 徐鑫荣</span>
                    </div>
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-gray-300 text-sm">
                        如需技术支持或合作，请联系我们的专业团队
                      </p>
                    </div>
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
