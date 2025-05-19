
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "@/data/blogPosts";

const BlogPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Only display the latest 3 blog posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 text-center"
        >
          <motion.h2 variants={childVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            技术洞察
          </motion.h2>
          <motion.p variants={childVariants} className="text-lg text-gray-300 max-w-3xl mx-auto">
            探索我们的最新技术文章，了解游戏行业前沿趋势与创新解决方案
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <motion.div key={post.id} variants={childVariants}>
              <BlogPostCard
                title={post.title}
                image={post.coverImage}
                date={post.date}
                excerpt={post.excerpt}
                slug={post.slug}
                author={post.author}
                category={post.category}
                darkMode={true}
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link 
            to="/blog" 
            onClick={() => window.scrollTo(0, 0)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-900/20 flex items-center group"
          >
            查看所有文章
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
