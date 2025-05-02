
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  slug: string;
  category: string;
}

const BlogPostCard = ({ title, excerpt, imageUrl, date, slug, category }: BlogPostCardProps) => {
  return (
    <Link to={slug} className="block h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="w-full h-full flex items-start p-4 bg-gradient-to-b from-black/50 to-transparent">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-white">
              {category}
            </span>
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <p className="text-gray-500 text-sm mb-2">{date}</p>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-6 flex-grow">{excerpt}</p>
          <Button variant="outline" className="group mt-auto w-full sm:w-auto">
            Läs mer 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
