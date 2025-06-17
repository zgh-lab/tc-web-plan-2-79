
import { motion } from 'framer-motion';
import { Wrench, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const capabilities = [
    {
      title: "渲染管线",
      description: "builtin/jrp/urp/hdrp 渲染管线搭建与渲染特性开发，满足美术渲染效果"
    },
    {
      title: "性能优化",
      description: "优化内存管理、CPU耗时、GPU渲染压力，解决卡顿、发热、包体过大等问题，保证移动平台的性能帧率要求和兼容性"
    },
    {
      title: "开发编辑器工具",
      description: "开发配合程序、美术、策划的可视化编辑器工具"
    },
    {
      title: "通用游戏开发模块",
      description: "提供通用客户端开发框架和通用模块（如资源加载，热更框架，网络同步架构），缩短项目前期开发时间"
    },
    {
      title: "解决疑难杂症",
      description: "攻坚项目组解决不了的问题bug和技术难题"
    },
    {
      title: "美术资源制作标准",
      description: "结合已有项目和市面游戏游戏规格经验，制定美术资源制作标准及对应开发工具流"
    }
  ];

  const technologies = ["图形渲染", "物理模拟", "动画系统", "场景管理", "资源优化"];

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
          {/* 头部 */}
          <motion.div variants={childVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-orange-500/20">
                <Wrench className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                引擎组
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。
            </p>
          </motion.div>

          {/* 核心能力卡片网格 */}
          <motion.div variants={childVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">核心能力</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* 底部信息区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 核心技术 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-orange-400" />
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
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 相关案例 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">相关案例</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://leiting.feishu.cn/wiki/wikcnM8bgWhiD0GX4BFygcRL66W?from=from_copylink" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 rounded-lg hover:from-orange-500/30 hover:to-orange-600/30 transition-all border border-orange-500/30 hover:border-orange-400/50 w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    查看详细案例
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* 联系信息 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">联系我们</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-lg">
                      <span className="text-gray-400 mr-3 font-medium">联系人:</span>
                      <span className="text-orange-400 font-semibold">张兴捷</span>
                    </div>
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-gray-300 text-sm">
                        专业引擎技术支持与解决方案
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

export default EngineDetail;
