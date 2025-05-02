
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';

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

  return (
    <PageLayout>
      <SEO 
        title={`${post.title} - WRLDS Technologies`}
        description={post.excerpt}
      />
      
      <div 
        className="w-full pt-32 pb-16 bg-gradient-to-b from-black to-gray-900 text-white relative"
        style={{
          backgroundImage: post.imageUrl ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url(${post.imageUrl})` : undefined,
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
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <span>Published: {post.date}</span>
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
                className="mb-8"
              >
                {section.type === 'paragraph' && (
                  <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>
                )}
                {section.type === 'heading' && (
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">{section.content}</h2>
                )}
                {section.type === 'subheading' && (
                  <h3 className="text-xl font-bold mt-6 mb-3 text-gray-800">{section.content}</h3>
                )}
                {section.type === 'list' && (
                  <ul className="list-disc pl-5 my-4 space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                )}
                {section.type === 'quote' && (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-600">
                    {section.content}
                  </blockquote>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 bg-gray-50 rounded-lg p-6 shadow-sm">
            <div>
              <p className="text-sm text-gray-600 font-medium">Category: {post.category}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-sm text-gray-600 font-medium mb-2">Share this article:</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-blue-800 transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostDetail;
