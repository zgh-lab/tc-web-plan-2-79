
import { motion } from 'framer-motion';
import { Cpu, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  const capabilities = [
    {
      title: "2D AIGC-SD/FLUX/视频 模型训练",
      description: "LORA少量图集训练画风和深度训练设计风格特征，DB大模型的缺失概念补充，视频模型训练"
    },
    {
      title: "2D AIGC-ComfyUI工作流定制/多模态模型工作流",
      description: "可定制美术各类生成式-ComfyUI工作流用于项目美术生产，提升生产效率"
    },
    {
      title: "3D AIGC-方案整合和落地项目",
      description: "整合3DAIGC生成技术落地方案，提供AI程序化纹理，模型，等PCG技术落地项目使用方案"
    },
    {
      title: "AIGC智能NPC/AIGC智能体应用/知识库-技术探索落地",
      description: "对于前沿的AIGC智能NPC交互和AI智能体应用，知识库探索解决方案，应用于项目和AIGC工作流自动化"
    }
  ];

  const cases = [
    { 
      text: "AIGC智能NPC探索", 
      link: "https://leiting.feishu.cn/wiki/EhklwUO0EitvhZkmUm1cXEQ9n9d?from=from_copylink" 
    },
    { 
      text: "AIGC世界观前置知识库探索", 
      link: "https://leiting.feishu.cn/wiki/HnFvwPjZviV6eMkSj0Ccehhnnac?from=from_copylink" 
    },
    { 
      text: "项目使用AI图标流程", 
      link: "https://leiting.feishu.cn/wiki/EfxRwwGFkifkhrk7yeFchsiynic?from=from_copylink" 
    },
    { 
      text: "AIGC知识库和教学分享", 
      links: [
        "https://leiting.feishu.cn/wiki/BZUyw4rwyi4w7fkwbswcj1vMnlH?from=from_copylink", 
        "https://leiting.feishu.cn/wiki/EuEMwQ6MmibpkckI75ncP9tanxg?from=from_copylink"
      ] 
    }
  ];

  const technologies = ["2D AIGC", "3D AIGC", "AIGC智能体", "AIGC教学推广"];

  return (
    <PageLayout backgroundVariant="cooperation">
      <SEO 
        title="AIGC组 - G-bits 技术中心" 
        description="AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。"
        keywords={['AIGC', '2D生成', '3D生成', '智能体', 'AI绘画']}
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
                <Cpu className="w-10 h-10 text-orange-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                AIGC组
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。
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
                      ) : item.links ? (
                        <div className="flex flex-wrap gap-2">
                          {item.links.map((link, linkIdx) => (
                            <a 
                              key={linkIdx}
                              href={link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-orange-300 rounded-lg hover:from-orange-500/30 hover:to-orange-600/30 transition-all border border-orange-500/30 hover:border-orange-400/50 text-sm"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              链接 {linkIdx + 1}
                            </a>
                          ))}
                        </div>
                      ) : null}
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
                      <Cpu className="w-5 h-5 text-orange-400" />
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
                      <span className="text-orange-400 font-semibold">李智宇</span>
                    </div>
                    <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                      <p className="text-gray-300 text-sm">
                        AIGC技术探索与应用落地
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

export default AigcDetail;
