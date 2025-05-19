
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  author: {
    name: string;
    avatar?: string;
  };
  category?: string;
  darkMode?: boolean;
}

const BlogPostCard = ({
  title,
  excerpt,
  date,
  image,
  slug,
  author,
  category,
  darkMode = false
}: BlogPostCardProps) => {
  return (
    <div className={cn(
      "rounded-xl overflow-hidden group hover:shadow-lg transition-all", 
      darkMode 
        ? "bg-white/10 backdrop-blur-sm border border-white/10 hover:shadow-blue-900/10" 
        : "bg-white border border-gray-100 hover:shadow-gray-100/50"
    )}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {category && (
          <div className="absolute top-3 right-3">
            <span className={cn(
              "text-xs px-3 py-1 rounded-full inline-flex items-center",
              darkMode 
                ? "bg-blue-600/80 text-white" 
                : "bg-white/90 text-gray-800"
            )}>
              <Tag className="w-3 h-3 mr-1" />
              {category}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs mb-3 space-x-4">
          <div className={cn("flex items-center", darkMode ? "text-gray-300" : "text-gray-500")}>
            <Calendar className="w-3 h-3 mr-1" />
            <span>{date}</span>
          </div>
          <div className={cn("flex items-center", darkMode ? "text-gray-300" : "text-gray-500")}>
            <User className="w-3 h-3 mr-1" />
            <span>{author.name}</span>
          </div>
        </div>
        <h3 className={cn("font-bold text-lg mb-2 line-clamp-2", darkMode ? "text-white" : "text-gray-800")}>
          {title}
        </h3>
        <p className={cn("text-sm mb-4 line-clamp-3", darkMode ? "text-gray-300" : "text-gray-600")}>
          {excerpt}
        </p>
        <Link
          to={`/blog/${slug}`}
          onClick={() => window.scrollTo(0, 0)}
          className={cn(
            "inline-flex items-center text-sm font-medium group/link",
            darkMode 
              ? "text-blue-400 hover:text-blue-300" 
              : "text-blue-600 hover:text-blue-700"
          )}
        >
          阅读全文
          <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
