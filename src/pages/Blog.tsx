
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';

const Blog = () => {
  return (
    <PageLayout>
      <SEO 
        title="WRLDS - News and insights about smart textile technology" 
        description="Stay updated with the latest news and insights about sensor-integrated textiles and smart technology from WRLDS Technologies."
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">WRLDS News &amp; Insights</h1>
            <p className="text-xl text-gray-300 mb-6">
              The latest trends and news in sensor-integrated textiles and smart technology
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/blog/sensor-integrated-textiles-trend" className="col-span-1 md:col-span-2 lg:col-span-3">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="grid md:grid-cols-2 h-full">
                <div 
                  className="bg-cover bg-center p-8 flex items-center justify-center"
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/ec2a6b79-27b7-475e-b033-a5ebe60336fb.png')`,
                  }}
                >
                  <div className="text-white text-center">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">Featured</span>
                    <h3 className="text-2xl md:text-3xl font-bold">Sensor-integrated textiles are a growing trend in Europe</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-500 text-sm mb-2">Published: May 2, 2025</p>
                  <p className="text-gray-700 mb-6">
                    Shirts that measure heartbeat, sportswear that tracks movement patterns, and workwear that alerts in case of danger are examples of technology that is now becoming reality. Sensors built into fabrics, so-called smart textiles, are rapidly establishing themselves as an important trend internationally.
                  </p>
                  <Button variant="outline" className="group">
                    Read more 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
          
          {/* Placeholders for future blog posts */}
          <BlogPostCard 
            title="Upcoming article"
            excerpt="Stay tuned for more exciting articles about smart textiles and sensor technology."
            imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
            date="Coming soon"
            slug="#"
            category="Upcoming"
          />
          
          <BlogPostCard 
            title="Upcoming article"
            excerpt="Stay tuned for more exciting articles about smart textiles and sensor technology."
            imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
            date="Coming soon"
            slug="#"
            category="Upcoming"
          />
          
          <BlogPostCard 
            title="Upcoming article"
            excerpt="Stay tuned for more exciting articles about smart textiles and sensor technology."
            imageUrl="/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png"
            date="Coming soon"
            slug="#"
            category="Upcoming"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
