import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur-md shadow-lg">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#Hero" className="flex items-center space-x-2">
            <img className="h-12 w-auto" src="/ray.png" alt="Logo" />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8">
          <a href="/prajwal_resume.pdf"  download className="text-sm font-medium text-gray-300 hover:text-white transition">Resume</a>
          <a href="#project" className="text-sm font-medium text-gray-300 hover:text-white transition">Projects</a>
          <a href="#technologies" className="text-sm font-medium text-gray-300 hover:text-white transition">Technologies</a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 hover:text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (compact version) */}
      {menuOpen && (
        <div className="lg:hidden flex justify-center">
          <div
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 flex flex-col gap-4 bg-black/95 backdrop-blur-xl shadow-lg rounded-xl p-4 text-white  z-[100%]"
          > <a href="/prajwal_resume.pdf"  download className="text-sm font-medium text-gray-300 hover:text-white transition">Resume</a>

            <a href="#project" className="block text-sm font-medium text-gray-300 hover:text-white transition">Projects</a>
            <a href="#technologies" className="block text-sm font-medium text-gray-300 hover:text-white transition">Technologies</a>
            <a href="#about" className="block text-sm font-medium text-gray-300 hover:text-white transition">About</a>
            <a href="#contact" className="block text-sm font-medium text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
