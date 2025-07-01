import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Define the game showcase items
const gameShowcase = [
  {
    id: "game1",
    title: "XXX",
    imageUrl: "/lovable-uploads/dbe2f670-341e-45a6-852d-4b6a49e5381e.png",
    description: "XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX",
    category: "XXX",
    year: "2023"
  },
  {
    id: "game2",
    title: "XXX",
    imageUrl: "/lovable-uploads/da393bd2-41b5-476f-9bab-baec29aa6ec5.png",
    description: "国风武侠世界，玩家在修炼中探索神秘剑道，体验独特的江湖人生",
    category: "动作冒险",
    year: "2022"
  },
  {
    id: "game3",
    title: "XXX",
    imageUrl: "/lovable-uploads/421bed1b-6f82-4bd4-9505-32cec7e98532.png",
    description: "一周年特别版本，全新角色及玩法，带来前所未有的游戏体验",
    category: "策略角色",
    year: "2024"
  },
  {
    id: "game4",
    title: "XXX",
    imageUrl: "/lovable-uploads/e7b5a53f-f4f9-45bc-828a-a909896c792a.png",
    description: "古风仙侠题材，探索奇妙仙境，感受深厚传统文化底蕴",
    category: "冒险探索",
    year: "2023"
  },
  {
    id: "game5",
    title: "XXX",
    imageUrl: "/lovable-uploads/247840ca-80a0-4c4e-9374-070ad3088344.png",
    description: "轻松可爱的恋爱模拟游戏，让玩家体验浪漫互动剧情",
    category: "恋爱模拟",
    year: "2024"
  }
];

const BlogPreview = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 0.8; // 降低滚动速度
  
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

  // 实现平滑滚动的动画函数
  const scrollAnimation = () => {
    if (scrollContainerRef.current && !isPaused) {
      const container = scrollContainerRef.current;
      
      // 如果已经滚动到最右侧，则重置到左侧开始位置
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        // 否则继续向右滚动
        container.scrollLeft += scrollSpeed;
      }
    }
    
    // 继续下一帧的动画
    animationRef.current = requestAnimationFrame(scrollAnimation);
  };

  // 启动和停止滚动动画
  useEffect(() => {
    // 启动动画
    animationRef.current = requestAnimationFrame(scrollAnimation);
    
    // 清理函数
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // 鼠标悬停暂停，离开继续滚动
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // 确保组件中卡片的数量足够填满容器并实现无缝滚动
  const duplicatedShowcase = [...gameShowcase, ...gameShowcase];

  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-8 text-center"
        >
          <motion.h2 
            variants={childVariants} 
            className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            whileHover={{
              textShadow: '0 0 15px rgba(139, 69, 193, 0.5)',
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            项目合作
          </motion.h2>
          <motion.p 
            variants={childVariants} 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            whileHover={{
              color: 'rgba(255, 255, 255, 0.9)',
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            为公司自研项目提供坚实的底层技术支撑，并不断积累与沉淀通用技术资产
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-8 rounded-xl overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left gradient mask - 调整透明度和大小与卡片一致 */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
          
          {/* 滚动容器 */}
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex py-4 gap-4 w-full"
              style={{ overflowX: 'hidden' }}
            >
              {duplicatedShowcase.map((game, index) => (
                <motion.div 
                  key={`${game.id}-${index}`}
                  variants={childVariants}
                  className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div 
                    className="bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:shadow-xl hover:shadow-cyan-300/10 transition-all h-full"
                  >
                    <div className="block h-full">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={game.imageUrl} 
                          alt={game.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-cyan-300 text-sm group-hover:text-cyan-300 transition-colors">{game.category}</span>
                          <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{game.year}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">{game.title}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-2 text-sm">{game.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right gradient mask - 调整透明度和大小与卡片一致 */}
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
        </motion.div>
        
        <div className="flex justify-center">
          <Link 
            to="/achievements" 
            className="px-6 py-3 bg-cyan-300/15 backdrop-blur-sm text-white rounded-lg hover:bg-cyan-300/25 transition-all shadow-lg hover:shadow-xl hover:shadow-cyan-300/20 flex items-center hover:scale-105"
          >
            查看更多成果
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
