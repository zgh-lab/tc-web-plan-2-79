
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhyWrlds from '@/components/WhyWrlds';
import ProductPlatform from '@/components/ProductPlatform';
import Video from '@/components/Video';

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Add your video component here - replace "/path-to-your-video.mp4" with the actual path to your video file */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Our Technology in Action</h2>
        <div className="max-w-4xl mx-auto">
          <Video 
            src="/path-to-your-video.mp4" 
            title="WRLDS Smart Textile Technology Demo" 
            controls={true}
            autoPlay={false}
            loop={false}
            muted={false}
          />
        </div>
      </div>
      
      <ProductPlatform />
      <WhyWrlds />
      <Projects />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
