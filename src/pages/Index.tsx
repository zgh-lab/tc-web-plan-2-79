
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-500 w-full max-w-[100vw] overflow-x-hidden text-white">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <Process />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
