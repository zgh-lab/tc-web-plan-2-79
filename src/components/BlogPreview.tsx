
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const BlogPreview = () => {
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={20} className="text-black" />
              <span className="text-black font-medium">Our Blog</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Latest Updates</h2>
            <p className="text-gray-800 max-w-xl">
              Explore our latest insights on smart textile technology, industry trends, and innovation.
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-black text-black hover:bg-black hover:text-white">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/placeholder.svg'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
