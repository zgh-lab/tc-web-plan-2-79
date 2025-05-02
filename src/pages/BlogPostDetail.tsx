
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, MessageSquare, Share, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p>We couldn't find the post you're looking for.</p>
        </div>
      </PageLayout>
    );
  }

  // Calculate reading time (average 200 words per minute)
  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <PageLayout>
      <SEO 
        title={`${post.title} - WRLDS Technologies`}
        description={post.excerpt}
      />
      
      <div 
        className="w-full pt-32 pb-16 bg-gradient-to-b from-black to-gray-900 text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url('/lovable-uploads/812fe1e7-4326-47ef-868e-21cfd3b5fc46.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 flex items-center gap-1.5">
                <Tag size={14} />
                {post.category}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Clock size={14} />
                {readingTime} min read
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <BookOpen size={18} className="mr-2" />
              <span>By {post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((section, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={cn(
                  "mb-8",
                  section.type === 'quote' && "my-10"
                )}
              >
                {section.type === 'paragraph' && (
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>
                )}
                {section.type === 'heading' && (
                  <div className="flex items-center gap-3 mt-12 mb-6">
                    <div className="w-1.5 h-7 bg-purple-500 rounded-full"></div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                  </div>
                )}
                {section.type === 'subheading' && (
                  <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {section.content}
                  </h3>
                )}
                {section.type === 'list' && (
                  <ul className="list-disc pl-5 my-4 space-y-2">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === 'quote' && (
                  <blockquote className="border-l-4 border-purple-500 pl-5 py-2 my-8 bg-purple-50 rounded-r-lg italic text-gray-700">
                    <div className="flex">
                      <MessageSquare size={20} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-lg m-0">{section.content}</p>
                    </div>
                  </blockquote>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          <div className="max-w-2xl mx-auto my-10 px-8 py-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
            <h4 className="text-xl font-semibold text-purple-900 mb-3">Want to know more about smart textiles?</h4>
            <p className="text-gray-700 mb-4">
              Connect with our team to discover how WRLDS Technologies can help you integrate sensor technology into your products.
            </p>
            <div className="flex justify-end">
              <Button className="bg-purple-600 hover:bg-purple-700">Contact Us</Button>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 bg-gray-50 rounded-lg p-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-600 font-medium">Category: {post.category}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="flex items-center gap-2 text-sm text-gray-600 font-medium mb-3">
                <Share size={16} />
                Share this article:
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-blue-400 hover:text-white transition-colors">
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-gray-300 hover:bg-blue-800 hover:text-white transition-colors">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostDetail;
