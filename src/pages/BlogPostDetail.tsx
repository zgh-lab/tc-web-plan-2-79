
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { useEffect } from 'react';
import { blogPosts } from '@/data/blogPosts';

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
      
      <div className="w-full pt-32 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-sm mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-300">
              <span>Published: {post.date}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {post.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.type === 'paragraph' && <p className="text-gray-700 mb-4">{section.content}</p>}
                {section.type === 'heading' && <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>}
                {section.type === 'subheading' && <h3 className="text-xl font-bold mt-6 mb-3">{section.content}</h3>}
                {section.type === 'list' && (
                  <ul className="list-disc pl-5 my-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 mb-2">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between py-6">
            <div>
              <p className="text-sm text-gray-500">Category: {post.category}</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <p className="text-sm text-gray-500">Share this article:</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-gray-500">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-gray-500">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-gray-500">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPostDetail;
