
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Define the game showcase items with more detailed information for the dedicated page
const gameShowcase = [
  {
    id: "game1",
    title: "仙魔",
    imageUrl: "/lovable-uploads/cbc6cc4a-f4a0-49d2-be51-101dee319121.png",
    description: "经典东方玄幻风格的修仙冒险游戏，融合仙侠世界观与独特的战斗系统。游戏采用先进的实时渲染技术，呈现出极具东方美学的画面风格。技术中心为游戏开发了专属的动态特效系统和人物捏脸系统。",
    category: "角色扮演",
    year: "2023",
    features: ["真实物理打击感", "开放世界探索", "多元化社交系统", "自研渲染引擎"]
  },
  {
    id: "game2",
    title: "问剑",
    imageUrl: "/lovable-uploads/35f23e47-4b3b-41a8-8908-08510194f000.png",
    description: "国风武侠世界，玩家在修炼中探索神秘剑道，体验独特的江湖人生。采用技术中心自研的动作捕捉系统，实现极其流畅的武术动作表现。独特的水墨画渲染技术，营造出如同身临其境的中国古代画卷。",
    category: "动作冒险",
    year: "2022",
    features: ["武学系统", "江湖声望机制", "水墨渲染", "智能NPC系统"]
  },
  {
    id: "game3",
    title: "奇迹传说",
    imageUrl: "/lovable-uploads/eff0e58a-21fb-4363-a33f-ec1366f746e7.png",
    description: "一周年特别版本，全新角色及玩法，带来前所未有的游戏体验。技术中心为游戏开发了先进的AI驱动剧情系统，使得游戏体验更加个性化。自适应难度系统让不同技术水平的玩家都能获得适合的挑战。",
    category: "策略角色",
    year: "2024",
    features: ["AI驱动剧情", "实时策略战斗", "多结局系统", "云存储技术"]
  },
  {
    id: "game4",
    title: "恋色浪漫",
    imageUrl: "/lovable-uploads/50349126-e6a0-4f23-b99d-253ff3b1a527.png",
    description: "轻松可爱的恋爱模拟游戏，采用技术中心自研的情感AI系统，NPC能根据玩家行为调整互动方式。卡通渲染技术展现出精美的动漫风格，优化的移动端性能使游戏在各种设备上都能流畅运行。",
    category: "恋爱模拟",
    year: "2023",
    features: ["情感AI系统", "多分支剧情", "角色自定义", "社交分享功能"]
  }
];

const Achievements = () => {
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
    <PageLayout>
      <SEO 
        title="成果展示 - G-bits 技术中心" 
        description="G-bits技术中心的成果展示，包括技术创新、项目成果和研发成果。"
        keywords={['成果展示', '技术创新', '项目成果', '研发成果']}
      />

      <main className="container mx-auto px-4 py-12 min-h-[80vh]">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-6 mb-12 text-center"
        >
          <motion.div variants={childVariants} className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center">
            <Trophy className="w-8 h-8 text-yellow-500" />
          </motion.div>
          <motion.h1 variants={childVariants} className="text-4xl font-bold text-white">成果展示</motion.h1>
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
              className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 flex flex-col md:flex-row hover:shadow-lg hover:shadow-blue-900/20 transition-all"
            >
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img 
                  src={game.imageUrl} 
                  alt={game.title}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute top-2 right-2 px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-white text-xs">
                  {game.year}
                </div>
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
      </main>
    </PageLayout>
  );
};

export default Achievements;
