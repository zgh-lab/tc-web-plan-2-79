
import { motion } from 'framer-motion';
import { Cpu, ExternalLink, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";

const AigcDetail = () => {
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
    "2D AIGC-SD/FLUX/视频 模型训练": "LORA少量图集训练画风和深度训练设计风格特征，DB大模型的缺失概念补充，视频模型训练",
    "2D AIGC-ComfyUI工作流定制/多模态模型工作流": "可定制美术各类生成式-ComfyUI工作流用于项目美术生产，提升生产效率",
    "3D AIGC-方案整合和落地项目": "整合3DAIGC生成技术落地方案，提供AI程序化纹理，模型，等PCG技术落地项目使用方案",
    "AIGC智能NPC/AIGC智能体应用/知识库-技术探索落地": "对于前沿的AIGC智能NPC交互和AI智能体应用，知识库探索解决方案，应用于项目和AIGC工作流自动化"
  };

  const cases = [
    { text: "AIGC智能NPC探索", link: "https://leiting.feishu.cn/wiki/EhklwUO0EitvhZkmUm1cXEQ9n9d?from=from_copylink" },
    { text: "AIGC世界观前置知识库探索", link: "https://leiting.feishu.cn/wiki/HnFvwPjZviV6eMkSj0Ccehhnnac?from=from_copylink" },
    { text: "项目使用AI图标流程", link: "https://leiting.feishu.cn/wiki/EfxRwwGFkifkhrk7yeFchsiynic?from=from_copylink" },
    { 
      text: "AIGC知识库和教学分享", 
      links: [
        "https://leiting.feishu.cn/wiki/BZUyw4rwyi4w7fkwbswcj1vMnlH?from=from_copylink", 
        "https://leiting.feishu.cn/wiki/EuEMwQ6MmibpkckI75ncP9tanxg?from=from_copylink"
      ] 
    }
  ];

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="AIGC组 - G-bits 技术中心" 
        description="AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。"
        keywords={['AIGC', '2D生成', '3D生成', '智能体', 'AI绘画']}
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
                <Cpu className="w-8 h-8 text-orange-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">AIGC组</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。
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
                  {['2D AIGC', '3D AIGC', 'AIGC智能体', 'AIGC教学推广'].map((tech, idx) => (
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
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-300 rounded-md text-sm hover:bg-orange-500/30 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            点击链接
                          </a>
                        ) : item.links ? (
                          <div className="flex flex-wrap gap-2">
                            {item.links.map((link, linkIdx) => (
                              <a 
                                key={linkIdx}
                                href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1 bg-orange-500/20 text-orange-300 rounded-md text-sm hover:bg-orange-500/30 transition-colors"
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                链接 {linkIdx + 1}
                              </a>
                            ))}
                          </div>
                        ) : null}
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
                  <span className="text-orange-400 font-medium">李智宇</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
    </PageLayout>
  );
};

export default AigcDetail;
