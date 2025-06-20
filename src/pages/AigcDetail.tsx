
import { motion } from 'framer-motion';
import { Cpu, ExternalLink } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Hero Section */}
          <motion.div variants={childVariants} className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                <Cpu className="w-10 h-10 text-cyan-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                AIGC组
              </h1>
            </div>
            <p className="text-lg text-white max-w-4xl mx-auto font-light">
              AIGC应用端口落地并赋能项目，探索落地前沿AIGC应用技术。
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
                    <div className="text-white font-semibold text-lg leading-loose">
                      <div className="mb-2">李智宇　艾伟伟　岑俊咏</div>
                      <div className="mb-2">利俊达　张冠华　王震</div>
                      <div>陈俊桡　褚梓淇　郑宗鹏</div>
                    </div>
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
                          <div className="mt-1">
                            {item.link ? (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-md text-xs hover:from-cyan-500/30 hover:to-blue-500/30 transition-all border border-cyan-500/30 hover:border-cyan-400/50 group/link"
                              >
                                <ExternalLink className="w-3 h-3 mr-1 group-hover/link:scale-110 transition-transform" />
                                点击链接
                              </a>
                            ) : item.links ? (
                              <div className="flex flex-wrap gap-1">
                                {item.links.map((link, linkIdx) => (
                                  <a 
                                    key={linkIdx}
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-md text-xs hover:from-cyan-500/30 hover:to-blue-500/30 transition-all border border-cyan-500/30 hover:border-cyan-400/50 group/link"
                                  >
                                    <ExternalLink className="w-3 h-3 mr-1 group-hover/link:scale-110 transition-transform" />
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
              </div>
            </div>
          </motion.div>

          {/* Core Capabilities */}
          <motion.div variants={childVariants} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-cyan-300 mb-4">核心能力</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {Object.entries(capabilities).map(([category, content]) => (
                <Card key={category} className="bg-white/5 border border-white/10 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div>
                        <h3 className="text-white font-semibold mb-4 text-xl">
                          {category}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">{content}</p>
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
                  {['2D AIGC', '3D AIGC', 'AIGC智能体', 'AIGC教学推广'].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-gray-500/20 border-gray-400 text-white px-8 py-4 text-lg">
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

export default AigcDetail;
