
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
    <div className="min-h-screen bg-black w-full max-w-[100vw] overflow-x-hidden" 
         style={{ 
           backgroundImage: 'url("/lovable-uploads/ad035e58-e29d-4fe6-8c92-a5392cdeb028.png")', 
           backgroundSize: 'cover', 
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed',
           backgroundBlendMode: 'overlay' 
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
