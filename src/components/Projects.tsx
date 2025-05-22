
import { motion } from "framer-motion";
import { ArrowRight, Book, FileCode, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  icon: React.ElementType;
}

const projects: Project[] = [
  {
    id: "department",
    title: "部门介绍",
    description: "了解G-bits技术中心的组织结构、发展历程和技术体系。",
    image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    tags: ["组织结构", "发展历程", "技术体系"],
    link: "/knowledge-base#department",
    icon: Book
  },
  {
    id: "tech-categories",
    title: "技术分类",
    description: "不同领域的技术资源分类，包括前端、后端、引擎、AI、工具链等。",
    image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
    tags: ["前端技术", "后端技术", "引擎技术"],
    link: "/knowledge-base#tech-categories",
    icon: FileCode
  },
  {
    id: "learning-map",
    title: "学习地图",
    description: "为不同领域的技术人员提供系统化的学习路径和资源推荐。",
    image: "/lovable-uploads/7293c494-769c-421b-9028-d8ccb0bdd80a.png",
    tags: ["客户端开发", "服务器开发", "引擎开发"],
    link: "/knowledge-base#learning-map",
    icon: BookOpenText
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
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-black to-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            知识库
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            汇聚G-bits技术中心的技术文档、学习资源、开发规范和研究成果，<br />
            为团队提供系统化的知识支持和技术积累。
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
                <div className="absolute bottom-4 left-4 bg-blue-600/20 rounded-lg p-2">
                  <project.icon className="w-5 h-5 text-blue-400" />
                </div>
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
            to="/knowledge-base" 
            onClick={() => window.scrollTo(0, 0)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20 flex items-center"
          >
            浏览知识库
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
