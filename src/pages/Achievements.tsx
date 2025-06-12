import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Define the game showcase items with more detailed information for the dedicated page
const gameShowcase = [
  {
    id: "game1",
    title: "一念逍遥",
    imageUrl: "/lovable-uploads/dbe2f670-341e-45a6-852d-4b6a49e5381e.png",
    description: "多次获得各大商店推荐，App Store游戏畅销榜最高至榜单第4名 累计总注册用户超2600万 由吉比特自研的《一念逍遥》是一款水墨国风放置仙侠手游，随时随地踏入仙途，轻松体验从无名小卒一步步成长，最终问鼎乾坤的过程。 人界的懵懂热血，灵界的仙魔抉择，仙界的创世风云，量劫之下，六大仙域，道祖之路......一个或壮阔或逍遥的长生路，待你开启。",
    category: "仙侠放置",
    year: "2023",
    features: ["水墨国风", "放置仙侠", "多元剧情", "成长体验"],
    detailedDescription: `为项目组全面接入GS开发生态与Unity引擎支持，提供全链路技术支持：

开发工具：集成gslang/gip/gshub开发工具链，Profiler性能分析保障效率；

游戏框架：服务端基于engine0框架接入PKG包及公共服，客户端实现捏脸系统与多人同屏渲染；

DevOps：搭建自动化构建流程与客户端一键打包，接入WatcherCenter监控；

深度优化：驻场支援服务端性能调优与代码评审，客户端提供渲染效果支持及全周期性能优化。`,
    techStack: ["Unity引擎", "GS开发生态", "engine0框架", "自动化构建"],
    documentUrl: "https://leiting.feishu.cn/wiki/UExNwkOh2iWf5QkTpBsc7ffSnVe?from=from_copylink"
  },
  {
    id: "game2",
    title: "XXX",
    imageUrl: "/lovable-uploads/da393bd2-41b5-476f-9bab-baec29aa6ec5.png",
    description: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    category: "XXX",
    year: "2022",
    features: ["XXX", "XXX", "XXX", "XXX"],
    detailedDescription: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    techStack: ["XXX", "XXX", "XXX", "XXX"]
  },
  {
    id: "game3",
    title: "XXX",
    imageUrl: "/lovable-uploads/421bed1b-6f82-4bd4-9505-32cec7e98532.png",
    description: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    category: "XXX",
    year: "2024",
    features: ["XXX", "XXX", "XXX", "XXX"],
    detailedDescription: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    techStack: ["XXX", "XXX", "XXX", "XXX"]
  },
  {
    id: "game4",
    title: "XXX",
    imageUrl: "/lovable-uploads/e7b5a53f-f4f9-45bc-828a-a909896c792a.png",
    description: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    category: "XXX",
    year: "2023",
    features: ["XXX", "XXX", "XXX", "XXX"],
    detailedDescription: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    techStack: ["XXX", "XXX", "XXX", "XXX"]
  },
  {
    id: "game5",
    title: "XXX",
    imageUrl: "/lovable-uploads/247840ca-80a0-4c4e-9374-070ad3088344.png",
    description: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    category: "XXX",
    year: "2024",
    features: ["XXX", "XXX", "XXX", "XXX"],
    detailedDescription: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    techStack: ["XXX", "XXX", "XXX", "XXX"]
  }
];

const Achievements = () => {
  const [selectedGame, setSelectedGame] = useState<typeof gameShowcase[0] | null>(null);

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
  
  return (
    <PageLayout backgroundVariant="achievements">
      <SEO 
        title="项目合作 - G-bits 技术中心" 
        description="G-bits技术中心的项目合作展示，包括技术创新、项目成果和研发成果。"
        keywords={['项目合作', '技术创新', '项目成果', '研发成果']}
      />

      <main className="container mx-auto px-4 py-12 pt-28 min-h-[80vh] relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-6 mb-12 text-center"
        >
          <motion.h1 variants={childVariants} className="text-3xl md:text-5xl font-bold text-white">项目合作</motion.h1>
          <motion.p variants={childVariants} className="text-xl text-gray-300 max-w-3xl">
            展示 G-bits 技术中心的自主研发游戏及技术创新成果
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {gameShowcase.map((game, index) => (
            <motion.div 
              key={game.id}
              variants={childVariants}
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 flex flex-col md:flex-row hover:shadow-lg hover:shadow-blue-900/20 transition-all cursor-pointer"
              onClick={() => setSelectedGame(game)}
            >
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img 
                  src={game.imageUrl} 
                  alt={game.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <span className="text-blue-400 text-sm mb-2 block">{game.category}</span>
                  <h3 className="text-2xl font-bold mb-3 text-white">{game.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{game.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.features.map((feature, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-400"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="flex items-center text-blue-400 hover:text-blue-300 transition-all group mt-2">
                  查看详情 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 p-6 border border-blue-500/20 rounded-lg bg-black/30 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3 text-white">技术突破</h3>
          <p className="text-gray-300">G-bits技术中心在游戏开发过程中取得了多项技术突破，包括自研渲染引擎、AI驱动的NPC行为系统、多平台适配框架等。更多技术成果详情将陆续更新...</p>
        </div>

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedGame} onOpenChange={() => setSelectedGame(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-black/90 border-white/20">
            {selectedGame && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={selectedGame.imageUrl} 
                      alt={selectedGame.title}
                      className="w-20 h-20 object-cover rounded-lg" 
                    />
                    <div>
                      <span className="text-blue-400 text-sm">{selectedGame.category} • {selectedGame.year}</span>
                      <DialogTitle className="text-2xl font-bold text-white">{selectedGame.title}</DialogTitle>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">项目简介</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedGame.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">技术详情</h4>
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {selectedGame.detailedDescription}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">核心特性</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGame.features.map((feature, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">技术栈</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGame.techStack.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full bg-gray-600/20 text-gray-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* 添加详情文档链接 */}
                  {selectedGame.documentUrl && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">详情文档</h4>
                      <button
                        onClick={() => window.open(selectedGame.documentUrl, '_blank', 'noopener,noreferrer')}
                        className="flex items-center px-4 py-2 bg-blue-600/80 text-white rounded-lg hover:bg-blue-700 transition-all"
                      >
                        查看详情文档
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </PageLayout>
  );
};

export default Achievements;
