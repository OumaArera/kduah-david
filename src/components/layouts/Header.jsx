import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Logo.jpg';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4">
        <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
            <img
            src={logo}
            alt="KDUAH Consult Logo"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {['home', 'about', 'services', 'projects', 'team', 'contact'].map((item) => (
            <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                activeSection === item
                    ? 'text-orange-500 font-semibold'
                    : 'text-blue-800 hover:text-orange-500'
                } capitalize transition-colors duration-300`}
            >
                {item}
            </button>
            ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
            <button
            onClick={toggleMenu}
            className="text-blue-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
        </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-inner">
        <div className="flex flex-col space-y-3">
            {['home', 'about', 'services', 'projects', 'team', 'contact'].map((item) => (
            <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                activeSection === item
                    ? 'text-orange-500 font-semibold'
                    : 'text-blue-800'
                } capitalize py-2 text-left transition-colors duration-300`}
            >
                {item}
            </button>
            ))}
        </div>
        </div>
    )}
    </header>
  );
};

export default Header;
