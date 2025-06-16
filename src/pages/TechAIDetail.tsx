
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

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
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* 头部 */}
          <motion.div variants={childVariants} className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Terminal className="w-8 h-8 text-orange-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">技术AI组</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              紧跟前沿AI技术，结合业务需求定制高效AI解决方案，开发通用AI工具与平台。
            </p>
          </motion.div>

          {/* 核心能力 */}
          <motion.div variants={childVariants} className="mb-12">
            <Card className="bg-gray-900/80 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">核心能力</h2>
                <div className="space-y-6">
                  {Object.entries(capabilities).map(([category, content]) => (
                    <div key={category} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-orange-400 mt-1 mr-3 shrink-0" />
                      <div>
                        <h3 className="text-white font-medium mb-2">{category}</h3>
                        <p className="text-gray-300">{content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 核心技术 */}
          <motion.div variants={childVariants} className="mb-12">
            <Card className="bg-gray-900/80 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">核心技术</h2>
                <div className="flex flex-wrap gap-4">
                  {['机器学习', '数据分析', '行为决策树', '自然语言处理', '计算机视觉'].map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 相关案例 */}
          <motion.div variants={childVariants} className="mb-12">
            <Card className="bg-gray-900/80 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">相关案例</h2>
                <div className="space-y-4">
                  {cases.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <ChevronRight className="w-4 h-4 text-orange-400 mt-1 mr-3 shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-orange-400 font-medium mb-2">{item.text}</h4>
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-300 rounded-md text-sm hover:bg-orange-500/30 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            点击链接
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 联系信息 */}
          <motion.div variants={childVariants}>
            <Card className="bg-gray-900/80 border border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">联系我们</h2>
                <div className="flex items-center text-lg">
                  <span className="text-white mr-3">联系人:</span>
                  <span className="text-orange-400 font-medium">梁钰彬 张文豪</span>
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
