
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
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
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div variants={childVariants} className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                <Code className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                编译器组
              </h1>
            </div>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto font-light">
              负责GS编译器底层相关开发工作，包括底层功能开发、问题修复、性能优化，并持续完善相关模块。
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-300 mb-4">联系我们</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center border border-cyan-500/20 mr-4">
                    <Code className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg mb-2">技术负责人</p>
                    <p className="text-cyan-400 font-semibold text-2xl">楚耀翔 徐鑫荣</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Documentation Section */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-300 mb-4">查看详细文档</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-8">暂无详细文档链接</p>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Core Capabilities */}
            <motion.div variants={childVariants}>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-cyan-300 mb-4">核心能力</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "GS编译器底层功能开发和问题修复",
                    desc: "提供编译器核心功能的开发与维护，确保编译器稳定运行",
                    hasLink: false
                  },
                  {
                    title: "GS编译器底层性能优化",
                    desc: "持续优化编译器性能，提升编译速度和效率",
                    hasLink: false
                  },
                  {
                    title: "为上层工具提供底层功能支持",
                    desc: "为调试、性能工具等上层应用提供必要的底层支持"
                  },
                  {
                    title: "调整GS语言特性和功能",
                    desc: "根据游戏开发需求，定制化调整GS语言特性"
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-white/5 border border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div>
                          <h3 className="text-white font-semibold mb-3 text-lg">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Core Technologies */}
            <motion.div variants={childVariants}>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-cyan-300 mb-4">核心技术</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
              </div>
              <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 gap-4">
                    {['词法分析', '语法分析', '中间代码生成', '代码优化', '目标代码生成'].map((tech, idx) => (
                      <div key={idx} className="flex items-center justify-center p-4">
                        <span className="text-cyan-300 text-base font-medium">
                          {tech}
                        </span>
                      </div>
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
