import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from '../../assets/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Left Column: Logo */}
          <div className="flex justify-center md:justify-start">
          <img
              src={logo}
              alt="KDUAH Consult Logo"
              className="h-36 w-auto object-contain bg-white p-2 rounded-lg shadow-md"
            />
          </div>
          
          {/* Right Column: Social Media Icons */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-semibold text-lg mb-4 pb-2 border-b border-blue-700 inline-block">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2.5 rounded-full transition-colors duration-200">
                <Facebook size={20} className="text-blue-100" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2.5 rounded-full transition-colors duration-200">
                <Twitter size={20} className="text-blue-100" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2.5 rounded-full transition-colors duration-200">
                <Instagram size={20} className="text-blue-100" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2.5 rounded-full transition-colors duration-200">
                <Linkedin size={20} className="text-blue-100" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-blue-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-blue-200 text-sm">
            <p>&copy; {currentYear} KDUAH Consult. All rights reserved.</p>
            <p className="mt-3 md:mt-0">
              Developed and Maintained by <a 
                href="https://ouma-portforlio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                John Ouma
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;