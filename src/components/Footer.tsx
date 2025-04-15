
import { ArrowRight, Lock, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handlePrivacySettings = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (window.UC_UI && typeof window.UC_UI.showSecondLayer === 'function') {
      // @ts-ignore
      window.UC_UI.showSecondLayer();
    }
  };

  return <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <img src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" alt="WRLDS Technologies Logo" className="h-10 w-auto mb-6 invert" // Added invert to make logo white
          />
            <p className="text-gray-300 mb-6">
              WRLDS Technologies provides an end-to-end platform for the creation and deployment of AI-powered smart sensor devices, giving customers 100% ownership while handling the complete technological development.
            </p>
            <p className="text-gray-300 mb-6">
              Hornsgatan 110<br />
              117 26, Stockholm Sweden
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/wrldstechnologies/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} WRLDS Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 items-center">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <a 
              href="#" 
              onClick={handlePrivacySettings} 
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
            >
              <Lock className="mr-1 h-4 w-4" />
              Manage Consent
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
