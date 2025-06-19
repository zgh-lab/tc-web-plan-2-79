
import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Don't render the component at all when not visible
  if (!isVisible) {
    return null;
  }
  
  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-400/80 via-blue-300/80 to-indigo-300/80 text-white shadow-lg hover:from-blue-400/90 hover:via-blue-300/90 hover:to-indigo-300/90 transition-all transform hover:scale-105 focus:outline-none backdrop-blur-sm border border-blue-400/30"
      aria-label="Contact us"
    >
      <MessageSquare className="h-6 w-6" />
    </button>
  );
};

export default FloatingContactButton;
