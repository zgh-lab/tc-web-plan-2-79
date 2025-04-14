
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  // Update page titles based on route
  useEffect(() => {
    const updateTitle = () => {
      const path = window.location.pathname;
      switch (path) {
        case '/':
          document.title = 'WRLDS Technologies - Home';
          break;
        case '/projects/firecat':
          document.title = 'WRLDS Technologies - FireCat Project';
          break;
        case '/projects/sport-retail':
          document.title = 'WRLDS Technologies - Performance Athletic Footwear';
          break;
        case '/projects/workwear':
          document.title = 'WRLDS Technologies - Advanced Climate Control Workwear';
          break;
        case '/projects/hockey':
          document.title = 'WRLDS Technologies - Ice Hockey Elite Skill Tracker';
          break;
        case '/projects/pet-tracker':
          document.title = 'WRLDS Technologies - Smart Pet Monitoring System';
          break;
        case '/tech-details':
          document.title = 'WRLDS Technologies - Technical Deep Dive';
          break;
        case '/development-process':
          document.title = 'WRLDS Technologies - Development Process';
          break;
        case '/about':
          document.title = 'WRLDS Technologies - About Us';
          break;
        case '/careers':
          document.title = 'WRLDS Technologies - Careers';
          break;
        case '/privacy-policy':
          document.title = 'WRLDS Technologies - Privacy Policy';
          break;
        default:
          document.title = 'WRLDS Technologies';
      }
    };

    updateTitle();
    
    // Listen for route changes
    const unlisten = () => window.addEventListener('popstate', updateTitle);
    unlisten();

    return () => {
      window.removeEventListener('popstate', updateTitle);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/firecat" element={<FireCatProject />} />
            <Route path="/projects/sport-retail" element={<SportRetailProject />} />
            <Route path="/projects/workwear" element={<WorkwearProject />} />
            <Route path="/projects/hockey" element={<HockeyProject />} />
            <Route path="/projects/pet-tracker" element={<PetProject />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
