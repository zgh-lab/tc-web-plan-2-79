
import { motion } from 'framer-motion';
import { Server, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const capabilityCategories = [
    {
      title: "开发工具",
      items: [
        {
          subtitle: "语言支持",
          description: "VSCode的语法插件(GsLang)、GS的PKG包管理工具(Gip)，GS的项目管理工具(GsHub)"
        },
        {
          subtitle: "调试分析", 
          description: "GS的性能分析工具(Profiler)，GS进程的调试连接工具(TelnetClient)"
        },
        {
          subtitle: "通用工具",
          description: "表格差异合并工具(ExcelMerge)，数字资产管理系统(DAM)"
        }
      ]
    },
    {
      title: "游戏框架",
      items: [
        {
          subtitle: "代码包PKG",
          description: "网络框架，数据存储，配置加载，安全校验，业务模块等"
        },
        {
          subtitle: "服务器引擎",
          description: "集成基础业务的游戏服引擎(engine0)，轻量级的游戏服引擎(server_core)"
        },
        {
          subtitle: "公共服模块",
          description: "提供常用且通用的公共服务器(auth/social/rank/webgm等)"
        },
        {
          subtitle: "引擎插件",
          description: "通过ToGS/UEGS 使Unity/Unreal能用GS脚本进行游戏业务开发"
        }
      ]
    },
    {
      title: "DevOps",
      items: [
        {
          subtitle: "CI/CD",
          description: "提供GS项目组的自动化构建流程规范，并提供一键打包/部署的解决方案"
        },
        {
          subtitle: "监控系统",
          description: "报错日志监控系统(WatcherCenter)、游戏统一管理后台(AllInOne)"
        },
        {
          subtitle: "协作安全",
          description: "提供GS项目组在域内开发与域外发布的代码安全管理方案"
        }
      ]
    }
  ];

  const technologies = ["GS开发生态", "服务器架构设计", "客户端引擎插件", "DevOps"];

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="服务器与工具链组 - G-bits 技术中心" 
        description="提供游戏项目组覆盖从开发、测试、部署、运维全生命周期的GS解决方案及全方位的技术支持。"
        keywords={['服务器', '工具链', 'DevOps', 'GS开发']}
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
                <Server className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                服务器与工具链组
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              提供游戏项目组覆盖从开发、测试、部署、运维全生命周期的GS解决方案及全方位的技术支持。
            </p>
          </motion.div>

          {/* 核心能力分类卡片 */}
          <motion.div variants={childVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">核心能力</h2>
            <div className="space-y-8">
              {capabilityCategories.map((category, categoryIdx) => (
                <motion.div
                  key={categoryIdx}
                  variants={childVariants}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/60 transition-all shadow-lg hover:shadow-orange-500/20 h-full">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-white text-lg font-semibold">
                              {item.subtitle}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 技术支持独立卡片 */}
          <motion.div variants={childVariants} className="mb-16">
            <Card className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center">技术支持</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center text-lg leading-relaxed">
                  为GS开发生态产品提供快速响应、全方位的技术支持，以及GS服务器性能分析与优化、GS代码质量评审等服务
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 底部信息区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 核心技术 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Server className="w-5 h-5 text-orange-400" />
                    </div>
                    核心技术
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30 hover:border-orange-400/50 transition-colors cursor-default"
                      >
                        {tech}
                      </motion.span>
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
                    href="https://leiting.feishu.cn/wiki/UExNwkOh2iWf5QkTpBsc7ffSnVe?from=from_copylink" 
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
                      <span className="text-orange-400 font-semibold">吴荣钦</span>
                    </div>
                    <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-gray-300 text-sm">
                        提供全方位技术支持与咨询
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

export default ServerDetail;
