
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import FloatingContactButton from '@/components/FloatingContactButton';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
};

const PageLayout = ({ children, showContact }: PageLayoutProps) => {
  const location = useLocation();
  
  // 只有首页显示联系我们功能
  const isHomePage = location.pathname === "/";
  // 如果明确设置了showContact属性，则使用该属性，否则基于是否为首页来决定
  const shouldShowContact = showContact !== undefined ? showContact : isHomePage;

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden relative bg-black">
      <Navbar />
      {children}
      {shouldShowContact && <ContactInfo />}
      <Footer />
      {shouldShowContact && <FloatingContactButton />}
    </div>
  );
};

export default PageLayout;
