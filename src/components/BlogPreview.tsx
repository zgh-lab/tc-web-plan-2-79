import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

// Define the game showcase items
const gameShowcase = [
  {
    id: "game1",
    title: "XXX",
    imageUrl: "/lovable-uploads/dbe2f670-341e-45a6-852d-4b6a49e5381e.png",
    description: "经典东方玄幻风格的修仙冒险游戏，融合仙侠世界观与独特的战斗系统",
    category: "角色扮演",
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
  const [api, setApi] = useState<CarouselApi>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const scrollSpeedRef = useRef(2000); // Time in ms for scrolling one item - very fast speed (2 seconds)

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

  // Set up continuous scrolling
  useEffect(() => {
    if (!api) return;
    
    const autoScroll = () => {
      if (!api) return;
      
      // Fix the type error by using the correct method
      api.scrollNext();
    };
    
    // Start continuous scrolling at very fast speed
    intervalRef.current = setInterval(autoScroll, scrollSpeedRef.current);
    
    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Restart autoplay with very fast speed
    if (api) {
      intervalRef.current = setInterval(() => {
        api.scrollNext();
      }, scrollSpeedRef.current);
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
            为公司自研项目提供坚实的底层技术支撑，并不断在积累与沉淀通用技术资产
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black/90 to-transparent pointer-events-none" />
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="py-4">
              {gameShowcase.map((game) => (
                <CarouselItem key={game.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    variants={childVariants}
                    className="flex-shrink-0 w-full bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:shadow-xl hover:shadow-blue-900/10 transition-all h-full"
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
                          <span className="text-blue-400 text-sm">{game.category}</span>
                          <span className="text-gray-400 text-sm">{game.year}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors">{game.title}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-2 text-sm">{game.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows removed as requested */}
          </Carousel>
          
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black/90 to-transparent pointer-events-none" />
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
