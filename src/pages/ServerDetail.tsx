
import { motion } from 'framer-motion';
import { Server, ExternalLink, ChevronRight } from 'lucide-react';
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
    "开发工具": {
      "语言支持": "VSCode的语法插件(GsLang)、GS的PKG包管理工具(Gip)，GS的项目管理工具(GsHub)",
      "调试分析": "GS的性能分析工具(Profiler)，GS进程的调试连接工具(TelnetClient)",
      "通用工具": "表格差异合并工具(ExcelMerge)，数字资产管理系统(DAM)"
    },
    "游戏框架": {
      "代码包PKG": "网络框架，数据存储，配置加载，安全校验，业务模块等",
      "服务器引擎": "集成基础业务的游戏服引擎(engine0)，轻量级的游戏服引擎(server_core)",
      "公共服模块": "提供常用且通用的公共服务器(auth/social/rank/webgm等)",
      "引擎插件": "通过ToGS/UEGS 使Unity/Unreal能用GS脚本进行游戏业务开发"
    },
    "DevOps": {
      "CI/CD": "提供GS项目组的自动化构建流程规范，并提供一键打包/部署的解决方案",
      "监控系统": "报错日志监控系统(WatcherCenter)、游戏统一管理后台(AllInOne)",
      "协作安全": "提供GS项目组在域内开发与域外发布的代码安全管理方案"
    }
  };

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="服务器与工具链组 - G-bits 技术中心" 
        description="提供游戏项目组覆盖从开发、测试、部署、运维全生命周期的GS解决方案。"
        keywords={['服务器架构', '工具链', 'DevOps', 'GS开发生态']}
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
                <Server className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                服务器与工具链组
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              提供游戏项目组覆盖从开发、测试、部署、运维全生命周期的GS解决方案及全方位的技术支持。
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
                      <Server className="w-8 h-8 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-lg mb-2">技术负责人</p>
                      <p className="text-orange-400 font-semibold text-2xl">吴荣钦</p>
                    </div>
                  </div>
                  <a 
                    href="https://leiting.feishu.cn/wiki/UExNwkOh2iWf5QkTpBsc7ffSnVe?from=from_copylink" 
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(capabilities).map(([category, content]) => (
                <Card key={category} className="bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-semibold text-orange-400 group-hover:text-orange-300 transition-colors mb-4">
                        {category}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(content).map(([subCategory, subContent]) => (
                        <div key={subCategory} className="group/item">
                          <div className="flex items-start mb-2">
                            <ChevronRight className="w-4 h-4 text-orange-400 mt-1 mr-2 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-orange-400 font-medium text-sm group-hover/item:text-orange-300 transition-colors">
                              {subCategory}
                            </span>
                          </div>
                          <p className="text-gray-400 text-xs ml-6 leading-relaxed">{subContent}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Technical Support Card */}
            <Card className="mt-8 bg-white/5 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-orange-400 mb-4">技术支持</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  为GS开发生态产品提供快速响应、全方位的技术支持，以及GS服务器性能分析与优化、GS代码质量评审等服务
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Core Technologies */}
          <motion.div variants={childVariants}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">核心技术</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {['GS开发生态', '服务器架构设计', '客户端引擎插件', 'DevOps'].map((tech, idx) => (
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

export default ServerDetail;
