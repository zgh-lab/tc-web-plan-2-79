
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ImageCarouselBackground from './ImageCarouselBackground';
import FloatingContactButton from './FloatingContactButton';

interface PageLayoutProps {
  children: ReactNode;
  backgroundVariant?: 'default' | 'cooperation' | 'achievements';
  showContact?: boolean;
}

const PageLayout = ({ children, backgroundVariant = 'default', showContact }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {/* 背景 */}
      <div className="fixed inset-0 z-0">
        <ImageCarouselBackground variant={backgroundVariant} />
      </div>
      
      {/* 内容 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      
      <FloatingContactButton />
    </div>
  );
};

export default PageLayout;
