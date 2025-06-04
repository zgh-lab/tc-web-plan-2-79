
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import ContactInfo from '@/components/ContactInfo';
import SEO from '@/components/SEO';
import ThreeDBackground from '@/components/ThreeDBackground';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
    
    // Enable smooth scrolling for the page
    document.documentElement.classList.add('smooth-scroll');
    
    return () => {
      // Clean up smooth scrolling class when component unmounts
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="G-bits 技术中心 - 游戏开发、人工智能和云计算技术" 
        description="专注于游戏开发、人工智能和云计算技术的研发中心。我们致力于为G-bits提供先进的技术解决方案，推动游戏产业的创新发展。"
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['游戏开发', '人工智能', '云计算', '技术研发', '创新发展']}
      />
      <main>
        {/* 共享背景的连通区域 */}
        <div className="relative">
          {/* 共享的3D背景 */}
          <div className="absolute inset-0 w-full h-full">
            <ThreeDBackground />
          </div>
          
          {/* 内容层，所有共享背景的部分 */}
          <div className="relative z-10">
            <Hero />
            <div id="content-section">
              <BlogPreview />
              <Projects />
              <WhyWrlds />
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Index;
