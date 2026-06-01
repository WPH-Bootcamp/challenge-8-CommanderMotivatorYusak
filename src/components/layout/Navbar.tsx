import { useState } from 'react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#0F0F12]/90 backdrop-blur-md text-white border-b border-gray-900 sticky top-0 z-50 w-full transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg tracking-wide">
          <span className="text-[#FF6B35]">◆</span> Yusak Logo
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Service</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <Button variant="primary">Get Started</Button>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden bg-[#13131A] border-b border-gray-800 px-4 pt-2 pb-6 space-y-3 absolute w-full left-0 animate-fadeIn">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white">Service</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white">Portfolio</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block py-2 text-gray-300 hover:text-white">FAQ</a>
          <div className="pt-2">
            <Button variant="primary" className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};