
import { motion } from 'framer-motion';
import { Terminal, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const capabilities = [
    {
      title: "AI流程研发与场景化落地",
      description: "采用NLP、深度学习等技术，针对垂直场景开发定制化AI解决方案，实现传统流程和方案的升级提效，如AI小说摘要、AI捏脸、AI多语种翻译"
    },
    {
      title: "AI工具与平台开发",
      description: "整合前沿AI技术，构建企业级工具平台（如AIWebhub、G社贾维斯），降低使用门槛，便利AI落地应用"
    }
  ];

  const cases = [
    { 
      text: "AIWebhub 线上AIGC平台", 
      link: "https://aiwebhub.g-bits.com/feishu_login?url=/" 
    },
    { 
      text: "G-pilot 代码补全IDE插件", 
      link: "https://leiting.feishu.cn/docx/JlKSdnvCbo7x9dxEsxScgwWKnkx?from=from_copylink" 
    },
    { 
      text: "G社贾维斯（内测）AI工具服务机器人", 
      link: "https://leitung.feishu.cn/wiki/BIjqwWadEiVz57kOsKmcEJDYnee?from=from_copylink" 
    },
    { 
      text: "DingCode（内测）AI代码审核平台",
      description: "内测阶段，敬请期待"
    }
  ];

  const technologies = ["机器学习", "数据分析", "行为决策树", "自然语言处理", "计算机视觉"];

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="技术AI组 - G-bits 技术中心" 
        description="紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。"
        keywords={['AI技术', '机器学习', '人工智能', 'AI平台']}
      />

      <main className="container mx-auto px-4 py-12 pt-28 min-h-[80vh] relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* 头部 */}
          <motion.div variants={childVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-orange-500/20">
                <Terminal className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                技术AI组
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。
            </p>
          </motion.div>

          {/* 核心能力卡片 */}
          <motion.div variants={childVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">核心能力</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((capability, idx) => (
                <motion.div
                  key={idx}
                  variants={childVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/60 transition-all shadow-lg hover:shadow-orange-500/20 h-full">
                    <CardHeader>
                      <CardTitle className="text-orange-400 text-xl font-semibold">
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

          {/* 相关案例 */}
          <motion.div variants={childVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">相关案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cases.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={childVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/60 transition-all shadow-lg hover:shadow-orange-500/20 h-full">
                    <CardHeader>
                      <CardTitle className="text-orange-400 text-lg font-semibold">
                        {item.text}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 rounded-lg hover:from-orange-500/30 hover:to-orange-600/30 transition-all border border-orange-500/30 hover:border-orange-400/50"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          访问链接
                        </a>
                      ) : (
                        <p className="text-gray-400 italic">{item.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 底部信息区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 核心技术 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-orange-400" />
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

            {/* 联系信息 */}
            <motion.div variants={childVariants}>
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-orange-500/30 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">联系我们</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-lg">
                      <span className="text-gray-400 mr-3 font-medium">联系人:</span>
                      <span className="text-orange-400 font-semibold">梁钰彬 张文豪</span>
                    </div>
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-gray-300 text-sm">
                        AI技术咨询与解决方案定制
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

export default TechAIDetail;
