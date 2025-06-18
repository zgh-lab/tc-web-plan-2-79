import { motion } from 'framer-motion';
import { Wrench, ExternalLink } from 'lucide-react';
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
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                <Wrench className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                引擎组
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto font-light">
              为游戏项目组设计、开发和维护引擎的核心功能与工具链，提供高效、稳定且易用的技术解决方案。
            </p>
          </motion.div>

          {/* 小组成员 Section */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-300 mb-4">小组成员</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <p className="text-cyan-400 font-semibold text-2xl">张兴捷</p>
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
              <a 
                href="https://leiting.feishu.cn/wiki/wikcnM8bgWhiD0GX4BFygcRL66W?from=from_copylink" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 group text-lg"
              >
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                查看详细案例
              </a>
            </div>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-300 mb-4">核心能力</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(capabilities).map(([category, content]) => (
                <Card key={category} className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <div>
                        <h3 className="text-white font-semibold mb-3 text-xl">
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
              <h2 className="text-4xl font-bold text-cyan-300 mb-4">核心技术</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {['图形渲染', '物理模拟', '动画系统', '场景管理', '资源优化'].map((tech, idx) => (
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
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default EngineDetail;
