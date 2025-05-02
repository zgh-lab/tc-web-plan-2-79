
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
        title="WRLDS - Nyheter och insikter om smart textilteknologi" 
        description="Håll dig uppdaterad med de senaste nyheterna och insikterna om sensorintegrerade textilier och smart teknologi från WRLDS Technologies."
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">WRLDS Nyheter &amp; Insikter</h1>
            <p className="text-xl text-gray-300 mb-6">
              De senaste trenderna och nyheterna inom sensorintegrerade textilier och smart teknologi
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/blog/sensor-integrated-textiles-trend" className="col-span-1 md:col-span-2 lg:col-span-3">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="grid md:grid-cols-2 h-full">
                <div className="bg-gradient-to-br from-blue-600 to-purple-800 p-8 flex items-center justify-center">
                  <div className="text-white text-center">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">Trendinlägg</span>
                    <h3 className="text-2xl md:text-3xl font-bold">Sensorintegrerade textilier är en växande trend i Europa</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <p className="text-gray-500 text-sm mb-2">Publicerad: 2 maj 2025</p>
                  <p className="text-gray-700 mb-6">
                    Tröjor som mäter hjärtslag, sportkläder som följer rörelsemönster och arbetskläder som larmar vid fara är exempel på teknik som nu är på väg att bli verklighet. Sensorer inbyggda i tyger, så kallade smarta textilier, etablerar sig snabbt som en viktig trend internationellt.
                  </p>
                  <Button variant="outline" className="group">
                    Läs mer 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
          
          {/* Platshållare för framtida blogginlägg */}
          <BlogPostCard 
            title="Kommande artikel"
            excerpt="Håll utkik efter fler spännande artiklar om smarta textilier och sensorteknik."
            imageUrl="/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png"
            date="Snart"
            slug="#"
            category="Kommande"
          />
          
          <BlogPostCard 
            title="Kommande artikel"
            excerpt="Håll utkik efter fler spännande artiklar om smarta textilier och sensorteknik."
            imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
            date="Snart"
            slug="#"
            category="Kommande"
          />
          
          <BlogPostCard 
            title="Kommande artikel"
            excerpt="Håll utkik efter fler spännande artiklar om smarta textilier och sensorteknik."
            imageUrl="/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png"
            date="Snart"
            slug="#"
            category="Kommande"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
