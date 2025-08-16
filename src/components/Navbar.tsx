import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 text-blue-600">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Forge</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Canada, Montreal</span>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <button 
              onClick={() => scrollToSection('manufacture')}
              className="text-gray-600 hover:text-gray-900 underline transition-colors"
            >
              Manufacture
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-600 hover:text-gray-900 underline transition-colors"
            >
              Tool library
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 underline transition-colors"
            >
              Get in touch
            </button>
            <div className="hidden md:flex items-center space-x-2 text-gray-500">
              <span>Eng</span>
              <span>/</span>
              <span>Fra</span>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}