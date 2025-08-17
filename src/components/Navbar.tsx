import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 text-blue-600">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">Forge</span>
          </div>

          <div className="hidden md:flex items-center space-x-1 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Canada, Montreal</span>
          </div>

          <div className="flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("manufacture")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Manufacture
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Tool Library
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Get in Touch
            </button>
            <div className="hidden md:flex items-center space-x-2 text-gray-500">
              <span className="cursor-pointer hover:text-blue-600">Eng</span>
              <span>/</span>
              <span className="cursor-pointer hover:text-blue-600">Fra</span>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
