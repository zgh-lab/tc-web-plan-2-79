
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
              {/* 合作方式的上半部分，与ContactInfo组件的上半部分对应 */}
              <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                      合作方式
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                      我们提供两种合作模式，灵活满足不同项目的技术需求
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部联系信息保持独立背景 */}
        <ContactInfo />
      </main>
    </PageLayout>
  );
};

export default Index;
