
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import SEO from '@/components/SEO';
import ContactInfo from '@/components/ContactInfo';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="WRLDS - Smart Textile Technology" 
        description="WRLDS Technologies: Pioneering smart engineering solutions with textile sensors for sports, safety, and performance monitoring."
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
      <ContactInfo />
    </PageLayout>
  );
};

export default Index;
