
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import ThreeDBackground from '@/components/ThreeDBackground';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
  backgroundVariant?: 'default' | 'knowledge' | 'cooperation' | 'achievements';
};

const PageLayout = ({ children, showContact, backgroundVariant = 'default' }: PageLayoutProps) => {
  const location = useLocation();
  
  // 只有首页显示联系我们功能
  const isHomePage = location.pathname === "/";
  // 如果明确设置了showContact属性，则使用该属性，否则基于是否为首页来决定
  const shouldShowContact = showContact !== undefined ? showContact : isHomePage;

  // 全局鼠标追踪效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 获取相对于视口的精确位置
      const x = e.clientX;
      const y = e.clientY;
      
      // 直接使用像素值，确保光晕中心与鼠标光标精确对齐
      document.documentElement.style.setProperty('--mouse-x', `${x}px`);
      document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden relative bg-black">
      {/* 全局3D背景 */}
      <div className="fixed inset-0 w-full h-full z-0">
        <ThreeDBackground variant={backgroundVariant} />
      </div>
      
      {/* 内容层 */}
      <div className="relative z-10">
        <Navbar />
        {children}
        <Footer />
        {shouldShowContact && <FloatingContactButton />}
      </div>
    </div>
  );
};

export default PageLayout;
