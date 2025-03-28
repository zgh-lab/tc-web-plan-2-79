
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
      <div className="h-8"></div> {/* Spacer between Hero and Features */}
      <Features />
      <div className="h-8"></div> {/* Spacer between Features and Projects */}
      <Projects />
      <div className="h-8"></div> {/* Spacer between Projects and Process */}
      <Process />
      <div className="h-8"></div> {/* Spacer between Process and ContactForm */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
