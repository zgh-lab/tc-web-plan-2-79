
import { motion } from 'framer-motion';
import { Wrench, ExternalLink, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EngineDetail = () => {
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

  const capabilities = {
    "渲染管线": "builtin/jrp/urp/hdrp 渲染管线搭建与渲染特性开发，满足美术渲染效果",
    "性能优化": "优化内存管理、CPU耗时、GPU渲染压力，解决卡顿、发热、包体过大等问题，保证移动平台的性能帧率要求和兼容性",
    "开发编辑器工具": "开发配合程序、美术、策划的可视化编辑器工具",
    "通用游戏开发模块": "提供通用客户端开发框架和通用模块（如资源加载，热更框架，网络同步架构），缩短项目前期开发时间",
    "解决疑难杂症": "攻坚项目组解决不了的问题bug和技术难题",
    "美术资源制作标准": "结合已有项目和市面游戏游戏规格经验，制定美术资源制作标准及对应开发工具流"
  };

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="引擎组 - G-bits 技术中心" 
        description="为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。"
        keywords={['游戏引擎', '图形渲染', '性能优化', '引擎开发']}
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
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <Wrench className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                引擎组
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">联系我们</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full flex items-center justify-center border border-orange-500/20 mr-4">
                      <Wrench className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-lg mb-2">技术负责人</p>
                      <p className="text-orange-400 font-semibold text-2xl">张兴捷</p>
                    </div>
                  </div>
                  <a 
                    href="https://leiting.feishu.cn/wiki/wikcnM8bgWhiD0GX4BFygcRL66W?from=from_copylink" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 rounded-lg hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 border border-orange-500/30 hover:border-orange-400/50 group"
                  >
                    <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    查看详细案例
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">核心能力</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(capabilities).map(([category, content]) => (
                <Card key={category} className="bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h3 className="text-orange-400 font-semibold mb-3 group-hover:text-orange-300 transition-colors text-xl">
                          {category}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Core Technologies */}
          <motion.div variants={childVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">核心技术</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {['图形渲染', '物理模拟', '动画系统', '场景管理', '资源优化'].map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-center p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                      <Badge 
                        variant="outline"
                        className="bg-orange-500/20 border-orange-500/40 text-orange-300 hover:bg-orange-500/30 transition-colors px-4 py-2 text-base font-medium"
                      >
                        {tech}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default EngineDetail;
