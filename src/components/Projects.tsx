
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: "firecat",
    title: "火猫游戏平台",
    description: "领先的游戏直播与社区平台，为游戏爱好者提供丰富的内容与互动体验。",
    image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
    tags: ["游戏直播", "社区互动", "内容平台"],
    link: "/projects/firecat"
  },
  {
    id: "sport-retail",
    title: "数字化游戏交易系统",
    description: "为游戏开发商提供先进的数字资产交易平台，支持游戏内物品安全交易。",
    image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png",
    tags: ["区块链", "游戏资产", "安全交易"],
    link: "/projects/sport-retail"
  },
  {
    id: "workwear",
    title: "云游戏服务",
    description: "低延迟云游戏解决方案，让玩家无需高端硬件即可享受顶级游戏体验。",
    image: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
    tags: ["云计算", "流媒体", "跨平台"],
    link: "/projects/workwear"
  }
];

const Projects = () => {
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
    <section id="projects" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            我们的解决方案
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            探索我们为游戏产业打造的创新技术解决方案，助力游戏公司提升用户体验与业务价值
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={childVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:shadow-xl hover:shadow-blue-900/10 transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 rounded-full bg-blue-600/20 text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={project.link} 
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group/link"
                >
                  了解更多 
                  <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <Link 
            to="/tech-cooperation" 
            onClick={() => window.scrollTo(0, 0)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20 flex items-center"
          >
            探索更多解决方案
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
