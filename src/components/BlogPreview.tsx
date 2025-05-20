
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Define the game showcase items
const gameShowcase = [
  {
    id: "game1",
    title: "仙魔",
    imageUrl: "/lovable-uploads/cbc6cc4a-f4a0-49d2-be51-101dee319121.png",
    description: "经典东方玄幻风格的修仙冒险游戏，融合仙侠世界观与独特的战斗系统",
    category: "角色扮演",
    year: "2023"
  },
  {
    id: "game2",
    title: "问剑",
    imageUrl: "/lovable-uploads/35f23e47-4b3b-41a8-8908-08510194f000.png",
    description: "国风武侠世界，玩家在修炼中探索神秘剑道，体验独特的江湖人生",
    category: "动作冒险",
    year: "2022"
  },
  {
    id: "game3",
    title: "奇迹传说",
    imageUrl: "/lovable-uploads/eff0e58a-21fb-4363-a33f-ec1366f746e7.png",
    description: "一周年特别版本，全新角色及玩法，带来前所未有的游戏体验",
    category: "策略角色",
    year: "2024"
  }
];

const BlogPreview = () => {
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
    <section id="blog" className="py-16 md:py-24 bg-gradient-to-b from-black/90 to-black/85 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            成果展示
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            G-bits技术中心自主研发的精品游戏，创新技术与艺术的完美结合
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {gameShowcase.map((game) => (
            <motion.div 
              key={game.id}
              variants={childVariants}
              className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:shadow-xl hover:shadow-blue-900/10 transition-all"
            >
              <Link to="/achievements" className="block">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={game.imageUrl} 
                    alt={game.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 text-sm">{game.category}</span>
                    <span className="text-gray-400 text-sm">{game.year}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{game.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{game.description}</p>
                  
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    了解更多 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center">
          <Link 
            to="/achievements" 
            className="px-6 py-3 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20 flex items-center"
          >
            查看更多成果
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
