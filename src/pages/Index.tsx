
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="WRLDS - Smart Textile Technology" 
        description="WRLDS Technologies: Pioneering smart engineering solutions with textile sensors for sports, safety, and performance monitoring."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['smart textiles', 'wearable technology', 'textile sensors', 'sports tech', 'safety monitoring', 'performance analytics', 'manufacturing']}
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
    </PageLayout>
  );
};

export default Index;
