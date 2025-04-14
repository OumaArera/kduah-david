import React from "react";
import { Link } from "react-router-dom"; 
import logo from '../../assets/Logo.jpg';


const Footer = () => {
  return (
    <footer className="bg-blue-900 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-center md:text-left">
          {/* Logo and Slogan */}
          <div>
            <img
              src={logo}
              alt="KDUAH Consult Logo"
              className="h-10 mx-auto md:mx-0"
            />
            <p className="text-blue-100 mt-2 text-sm">
              Your Business Solutions Partner
            </p>
          </div>

          {/* Quick Links (Optional) */}
          {/* <div>
            <ul className="text-blue-100 space-y-1 text-sm">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div> */}

          {/* Copyright */}
          <div>
            <p className="text-blue-100 text-sm">
              &copy; {new Date().getFullYear()} KDUAH Consult. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
