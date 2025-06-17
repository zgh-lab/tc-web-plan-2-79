
import { motion } from 'framer-motion';
import { Wrench, ExternalLink, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

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
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* 头部 */}
          <motion.div variants={childVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-2xl flex items-center justify-center border border-orange-500/20">
                <Wrench className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                引擎组
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。
            </p>
          </motion.div>

          {/* 核心能力区域 */}
          <motion.div variants={childVariants} className="mb-12">
            <div className="flex items-center mb-8">
              <div className="w-4 h-10 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-white">核心能力</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(capabilities).map(([category, content], idx) => (
                <Card key={category} className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm group hover:border-orange-400/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <h3 className="text-white font-semibold mb-3 group-hover:text-orange-300 transition-colors text-lg">
                          {category}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">{content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* 底部信息区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 核心技术 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-3 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></div>
                    <h2 className="text-2xl font-bold text-white">核心技术</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {['图形渲染', '物理模拟', '动画系统', '场景管理', '资源优化'].map((tech, idx) => (
                      <div 
                        key={idx} 
                        className="group p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                          <span className="text-orange-300 font-medium group-hover:text-orange-200 transition-colors">
                            {tech}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 联系信息和案例 */}
            <motion.div variants={childVariants} className="space-y-6">
              {/* 相关案例 */}
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-6 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-3"></div>
                    <h3 className="text-xl font-bold text-white">相关案例</h3>
                  </div>
                  <a 
                    href="https://leiting.feishu.cn/wiki/wikcnM8bgWhiD0GX4BFygcRL66W?from=from_copylink" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 rounded-lg hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 border border-orange-500/30 hover:border-orange-400/50 group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    查看详细案例
                  </a>
                </CardContent>
              </Card>

              {/* 联系信息 */}
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-6 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-3"></div>
                      <h3 className="text-xl font-bold text-white">联系我们</h3>
                    </div>
                    <div className="flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2 rounded-full border border-orange-500/30">
                      <span className="text-gray-300 mr-2 text-sm">联系人:</span>
                      <span className="text-orange-400 font-semibold">张兴捷</span>
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

export default EngineDetail;
