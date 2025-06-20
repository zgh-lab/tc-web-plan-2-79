
import { motion } from 'framer-motion';
import { Server, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServerDetail = () => {
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
    "游戏服务端技术研发": "负责游戏服务端功能开发、架构优化，确保游戏服务的稳定性和高性能",
    "分布式系统设计": "设计和实现高可用的分布式游戏服务架构，支持大规模并发",
    "数据存储和处理": "提供高效的数据存储和数据处理方案，支持游戏数据的安全管理",
    "性能调优与监控": "对服务端性能进行深度调优，建立完善的监控体系",
    "工具链建设": "开发运维、部署、调试等工具链，提升开发和运维效率"
  };

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="服务器与工具链组 - G-bits 技术中心" 
        description="专注于游戏服务端技术研发、分布式系统设计和工具链建设，为游戏项目提供稳定高效的服务端解决方案。"
        keywords={['服务器开发', '分布式系统', '工具链', '性能优化']}
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
                <Server className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                服务器与工具链组
              </h1>
            </div>
            <p className="text-lg text-white max-w-4xl mx-auto font-light">
              专注于游戏服务端技术研发、分布式系统设计和工具链建设，为游戏项目提供稳定高效的服务端解决方案。
            </p>
          </motion.div>

          {/* 小组成员 & 查看详细文档 Cards */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 小组成员 */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">小组成员</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                </div>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-48">
                  <CardContent className="p-8 text-center flex items-center justify-center h-full">
                    <p className="text-white font-semibold text-2xl">
                      胡顺涛<span className="mx-6">李雷</span>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 查看详细文档 */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">查看详细文档</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                </div>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-48">
                  <CardContent className="p-8 text-center flex items-center justify-center h-full">
                    <p className="text-white text-lg">暂无详细文档链接</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">核心能力</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(capabilities).map(([category, content]) => (
                <Card key={category} className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div>
                        <h3 className="text-white font-semibold mb-4 text-xl">
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
              <h2 className="text-3xl font-bold text-white mb-4">核心技术</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-6 justify-center">
                  {['Go语言开发', '分布式架构', '数据库优化', '容器化部署', '监控运维'].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-gray-400 text-white px-8 py-4 text-lg">
                      {tech}
                    </Badge>
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

export default ServerDetail;
