
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TechAIDetail = () => {
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
    "AI流程研发与场景化落地": "采用NLP、深度学习等技术，针对垂直场景开发定制化AI解决方案，实现传统流程和方案的升级提效，如AI小说摘要、AI捏脸、AI多语种翻译",
    "AI工具与平台开发": "整合前沿AI技术，构建企业级工具平台（如AIWebhub、G社贾维斯），降低使用门槛，便利AI落地应用"
  };

  const cases = [
    { text: "AIWebhub 线上AIGC平台", link: "https://aiwebhub.g-bits.com/feishu_login?url=/" },
    { text: "G-pilot 代码补全IDE插件", link: "https://leiting.feishu.cn/docx/JlKSdnvCbo7x9dxEsxScgwWKnkx?from=from_copylink" },
    { text: "G社贾维斯（内测）AI工具服务机器人", link: "https://leiting.feishu.cn/wiki/BIjqwWadEiVz57kOsKmcEJDYnee?from=from_copylink" },
    { text: "DingCode（内测）AI代码审核平台" }
  ];

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="技术AI组 - G-bits 技术中心" 
        description="紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。"
        keywords={['技术AI', '机器学习', '自然语言处理', 'AI工具平台']}
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
                <Terminal className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                技术AI组
              </h1>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">联系我们</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full flex items-center justify-center border border-orange-500/20 mr-4">
                    <Terminal className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg mb-2">技术负责人</p>
                    <p className="text-orange-400 font-semibold text-2xl">梁钰彬 张文豪</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Core Capabilities */}
            <motion.div variants={childVariants}>
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">核心能力</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
              </div>
              <div className="space-y-6">
                {Object.entries(capabilities).map(([category, content]) => (
                  <Card key={category} className="bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-4 shrink-0 group-hover:translate-x-1 transition-transform" />
                        <div>
                          <h3 className="text-orange-400 font-semibold mb-4 group-hover:text-orange-300 transition-colors text-xl">
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

            {/* Cases and Technologies */}
            <motion.div variants={childVariants} className="space-y-12">
              {/* Core Technologies */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-white mb-4">核心技术</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
                </div>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 gap-4">
                      {['机器学习', '数据分析', '行为决策树', '自然语言处理', '计算机视觉'].map((tech, idx) => (
                        <div key={idx} className="flex items-center p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
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
              </div>

              {/* Related Cases */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold text-white mb-4">相关案例</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
                </div>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {cases.map((item, idx) => (
                        <div key={idx} className="group">
                          <div className="flex items-start mb-2">
                            {item.link ? (
                              <ChevronRight className="w-4 h-4 text-orange-400 mt-1 mr-3 shrink-0 group-hover:translate-x-1 transition-transform" />
                            ) : (
                              <div className="w-4 h-4 mt-1 mr-3 shrink-0" />
                            )}
                            <h4 className={`font-medium text-sm transition-colors ${
                              item.link 
                                ? 'text-orange-400 group-hover:text-orange-300' 
                                : 'text-gray-300'
                            }`}>
                              {item.text}
                            </h4>
                          </div>
                          {item.link && (
                            <div className="ml-7">
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 rounded-md text-xs hover:from-orange-500/30 hover:to-red-500/30 transition-all border border-orange-500/30 hover:border-orange-400/50 group/link"
                              >
                                <ExternalLink className="w-3 h-3 mr-1 group-hover/link:scale-110 transition-transform" />
                                点击链接
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default TechAIDetail;
