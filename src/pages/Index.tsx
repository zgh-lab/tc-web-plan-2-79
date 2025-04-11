
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';

const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
    </PageLayout>
  );
};

export default Index;
