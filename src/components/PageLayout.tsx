
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

const PageLayout = ({ children, showContact = true }: PageLayoutProps) => {
  const location = useLocation();

  // Effect to scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden relative" 
         style={{ 
           backgroundImage: 'url("/lovable-uploads/148ba8a6-ef53-44c0-9f83-8c514d2ce6e7.png")', 
           backgroundSize: 'cover', // 改为cover确保背景图覆盖整个容器
           backgroundPosition: 'top center',
           backgroundAttachment: 'fixed', // 改为fixed使背景图固定，滚动时保持不动
           backgroundRepeat: 'no-repeat',
           backgroundColor: 'black'
         }}>
      <Navbar />
      {children}
      {showContact && <ContactInfo />}
      <Footer />
      {showContact && <FloatingContactButton />}
    </div>
  );
};

export default PageLayout;
