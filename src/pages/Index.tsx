
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhyWrlds from '@/components/WhyWrlds';
import ProductPlatform from '@/components/ProductPlatform';
import FirefighterSensors from '@/components/FirefighterSensors';

const Index = () => {
  return (
    <div className="min-h-screen bg-white w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <FirefighterSensors />
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
