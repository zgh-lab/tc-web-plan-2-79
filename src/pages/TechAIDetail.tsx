
import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';
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
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                <Terminal className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                技术AI组
              </h1>
            </div>
            <p className="text-lg text-white max-w-4xl mx-auto font-light">
              紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。
            </p>
          </motion.div>

          {/* 小组成员 & 查看详细文档 Cards */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 小组成员 */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-cyan-300 mb-4">小组成员</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                </div>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-48">
                  <CardContent className="p-8 text-center flex items-center justify-center h-full">
                    <p className="text-white font-semibold text-2xl">
                      梁钰彬<span className="mx-6">张文豪</span>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* 查看详细文档 */}
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-cyan-300 mb-4">查看详细文档</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
                </div>
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm h-48">
                  <CardContent className="p-4 pt-6">
                    <div className="grid grid-cols-2 gap-3 h-full">
                      {cases.map((item, idx) => (
                        <div key={idx} className="group flex flex-col justify-center">
                          <h4 className="font-medium text-white text-sm mb-3">
                            {item.text}
                          </h4>
                          {item.link && (
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-md text-xs hover:from-cyan-500/30 hover:to-blue-500/30 transition-all border border-cyan-500/30 hover:border-cyan-400/50 group/link"
                            >
                              <ExternalLink className="w-3 h-3 mr-1 group-hover/link:scale-110 transition-transform" />
                              点击链接
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-300 mb-4">核心能力</h2>
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
              <h2 className="text-3xl font-bold text-cyan-300 mb-4">核心技术</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <Card className="bg-white/5 border border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-6 justify-center">
                  {['机器学习', '数据分析', '行为决策树', '自然语言处理', '计算机视觉'].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-cyan-300 text-cyan-300 px-8 py-4 text-lg">
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

export default TechAIDetail;
