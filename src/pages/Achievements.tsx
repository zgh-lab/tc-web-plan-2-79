
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { ArrowRight } from 'lucide-react';
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
    title: "仙魔",
    imageUrl: "/lovable-uploads/dbe2f670-341e-45a6-852d-4b6a49e5381e.png",
    description: "经典东方玄幻风格的修仙冒险游戏，融合仙侠世界观与独特的战斗系统。游戏采用先进的实时渲染技术，呈现出极具东方美学的画面风格。技术中心为游戏开发了专属的动态特效系统和人物捏脸系统。",
    category: "角色扮演",
    year: "2023",
    features: ["真实物理打击感", "开放世界探索", "多元化社交系统", "自研渲染引擎"],
    detailedDescription: "《仙魔》是一款集合了传统东方修仙文化与现代游戏技术的大型多人在线角色扮演游戏。游戏世界观宏大，包含仙界、魔界、人界三大世界，玩家可以选择不同的修炼路径，体验从凡人到仙魔的成长历程。\n\n技术中心为本项目开发了多项核心技术：\n• 自研物理引擎：实现真实的武器碰撞和法术效果\n• 动态天气系统：根据玩家行为和剧情发展实时改变环境\n• 智能NPC系统：基于AI技术的非玩家角色行为模拟\n• 大世界无缝加载：支持万人同屏的技术架构",
    techStack: ["Unity 2022.3", "自研GS语言", "分布式服务器架构", "AI行为树系统"]
  },
  {
    id: "game2",
    title: "问剑",
    imageUrl: "/lovable-uploads/da393bd2-41b5-476f-9bab-baec29aa6ec5.png",
    description: "国风武侠世界，玩家在修炼中探索神秘剑道，体验独特的江湖人生。采用技术中心自研的动作捕捉系统，实现极其流畅的武术动作表现。独特的水墨画渲染技术，营造出如同身临其境的中国古代画卷。",
    category: "动作冒险",
    year: "2022",
    features: ["武学系统", "江湖声望机制", "水墨渲染", "智能NPC系统"],
    detailedDescription: "《问剑》以中国传统武侠文化为背景，创造了一个充满诗意的江湖世界。游戏采用独创的水墨渲染技术，将传统国画艺术与现代3D技术完美融合。\n\n核心技术创新：\n• 水墨渲染引擎：实时生成具有传统水墨画效果的3D场景\n• 武学动作系统：基于真实武术动作的捕捉和还原\n• 诗词生成AI：根据玩家行为动态生成符合情境的古风诗词\n• 声望系统：复杂的社交网络模拟，影响NPC对玩家的态度",
    techStack: ["自研水墨渲染引擎", "动作捕捉技术", "自然语言处理", "社交网络算法"]
  },
  {
    id: "game3",
    title: "奇迹传说",
    imageUrl: "/lovable-uploads/421bed1b-6f82-4bd4-9505-32cec7e98532.png",
    description: "一周年特别版本，全新角色及玩法，带来前所未有的游戏体验。技术中心为游戏开发了先进的AI驱动剧情系统，使得游戏体验更加个性化。自适应难度系统让不同技术水平的玩家都能获得适合的挑战。",
    category: "策略角色",
    year: "2024",
    features: ["AI驱动剧情", "实时策略战斗", "多结局系统", "云存储技术"],
    detailedDescription: "《奇迹传说》是一款融合策略与角色扮演元素的创新游戏。游戏最大的特色是AI驱动的动态剧情系统，能够根据玩家的选择和行为模式，实时调整故事走向和难度。\n\n技术亮点：\n• 机器学习剧情引擎：分析玩家偏好，动态生成个性化剧情\n• 云端存储架构：支持跨平台数据同步和备份\n• 实时策略AI：提供不同难度级别的AI对手\n• 多结局生成系统：基于玩家行为模式生成独特的游戏结局",
    techStack: ["机器学习框架", "云原生架构", "实时通讯技术", "大数据分析"]
  },
  {
    id: "game4",
    title: "问道",
    imageUrl: "/lovable-uploads/e7b5a53f-f4f9-45bc-828a-a909896c792a.png",
    description: "古风仙侠题材，探索奇妙仙境，感受深厚传统文化底蕴。游戏采用独特笔墨风格渲染，结合传统水墨画技法与现代3D技术，打造出极具东方韵味的视觉体验。技术中心开发的物理引擎让游戏中的布料、水流等效果极为真实。",
    category: "冒险探索",
    year: "2023",
    features: ["古风画卷渲染", "开放式剧情", "物理互动系统", "东方音乐系统"],
    detailedDescription: "《问道》致力于传承和发扬中华传统文化，在游戏中融入了大量的古典文学、哲学思想和艺术元素。游戏世界完全基于中国古代神话和道教文化构建。\n\n文化与技术的融合：\n• 古风画卷引擎：模拟传统绘画技法的实时渲染\n• 互动式古典音乐：根据玩家位置和行为动态演奏传统乐曲\n• 文化知识系统：将传统文化知识融入游戏机制\n• 诗词对答AI：能够与玩家进行古诗词对答的智能系统",
    techStack: ["传统艺术算法", "音频处理技术", "文化数据库", "自然语言理解"]
  },
  {
    id: "game5",
    title: "星恋",
    imageUrl: "/lovable-uploads/247840ca-80a0-4c4e-9374-070ad3088344.png",
    description: "轻松可爱的恋爱模拟游戏，让玩家体验浪漫互动剧情。采用技术中心自研的情感AI系统，NPC能根据玩家行为调整互动方式。卡通渲染技术展现出精美的动漫风格，优化的移动端性能使游戏在各种设备上都能流畅运行。",
    category: "恋爱模拟",
    year: "2024",
    features: ["情感AI系统", "多分支剧情", "角色自定义", "社交分享功能"],
    detailedDescription: "《星恋》是一款面向年轻用户群体的恋爱模拟游戏，通过先进的情感AI技术，为玩家提供真实而富有变化的恋爱体验。游戏角色能够记住玩家的喜好和行为模式，形成独特的性格和反应。\n\n情感技术创新：\n• 情感AI引擎：分析玩家情感倾向，调整角色反应\n• 动态表情系统：实时生成细腻的面部表情动画\n• 语音情感识别：支持语音输入的情感分析\n• 个性化推荐：基于用户偏好推荐游戏内容",
    techStack: ["情感计算", "卡通渲染", "语音识别", "推荐算法"]
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
