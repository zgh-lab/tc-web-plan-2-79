
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
    
    // 添加控制台日志，用于调试背景图片问题
    console.log("页面加载完成，检查背景图片是否正确显示");
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
        <Hero />
        <div className="relative">
          {/* 添加半透明黑色蒙版，不透明度从60%调整为25%，顶部渐变消失 */}
          <div 
            className="absolute inset-0 bg-black/25 z-0"
            style={{
              backgroundImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.25) 100px)'
            }}
          ></div>
          <div className="relative z-10">
            <WhyWrlds />
            <Projects />
            <BlogPreview />
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default Index;
