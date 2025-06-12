
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, Code, Zap, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const gameShowcase = [
  {
    id: "game1",
    title: "雷霆游戏",
    imageUrl: "/lovable-uploads/dbe2f670-341e-45a6-852d-4b6a49e5381e.png",
    description: "专注于网页游戏和手机游戏的开发与运营，致力于为玩家提供优质的游戏体验和服务",
    category: "游戏开发与运营",
    year: "2023",
    features: ["网页游戏开发", "手机游戏开发", "游戏运营", "玩家服务"],
    detailedDescription: "雷霆游戏是一家专业的游戏开发与运营公司，在网页游戏和手机游戏领域拥有丰富的经验和技术积累。公司致力于为广大玩家提供高质量、富有创意的游戏产品，同时提供完善的游戏运营服务和玩家支持。我们的团队由经验丰富的游戏开发者、设计师和运营专家组成，具备从游戏策划、开发到上线运营的全流程服务能力。通过持续的技术创新和产品优化，我们已经成功推出了多款受到玩家喜爱的游戏作品，在行业内建立了良好的口碑和品牌影响力。",
    techStack: ["Unity引擎", "Cocos引擎", "前端技术", "服务器架构"]
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
  const [selectedGame, setSelectedGame] = useState<any>(null);

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

  const itemVariants = {
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
      <div className="min-h-screen bg-gradient-to-b from-black/90 to-black/70 text-white">
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-16 md:py-24"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                项目合作
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                为公司自研项目提供坚实的底层技术支撑，并不断在积累与沉淀通用技术资产
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Featured Games Grid */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {gameShowcase.map((game, index) => (
                <motion.div 
                  key={game.id}
                  variants={itemVariants}
                  className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative">
                      <img 
                        src={game.imageUrl} 
                        alt={game.title}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="p-6 md:w-3/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 bg-blue-600/80 text-blue-100 rounded-full text-sm">
                            {game.category}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                          {game.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 text-base leading-relaxed">
                          {game.description}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-white mb-2">核心特色</h4>
                          <div className="flex flex-wrap gap-2">
                            {game.features.map((feature, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setSelectedGame(game)}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/btn mt-4"
                      >
                        查看详情
                        <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Game Detail Modal */}
        {selectedGame && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img 
                  src={selectedGame.imageUrl} 
                  alt={selectedGame.title}
                  className="w-full h-64 md:h-80 object-cover rounded-t-xl" 
                />
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-3xl font-bold text-white">{selectedGame.title}</h2>
                  <span className="px-3 py-1 bg-blue-600/80 text-blue-100 rounded-full text-sm">
                    {selectedGame.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedGame.detailedDescription}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">核心特色</h4>
                    <div className="space-y-2">
                      {selectedGame.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">技术栈</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGame.techStack.map((tech: string, idx: number) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Achievements;
