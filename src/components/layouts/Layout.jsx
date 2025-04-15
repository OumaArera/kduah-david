import React, { useState, useEffect } from 'react';
import TeamSection from '../sections/Team';
import ServicesSection from '../sections/Services';
import business from '../../assets/business.jpg';
import ContactSection from '../sections/Contact';
import Footer from './Footer';
import Header from './Header';
import AboutSection from '../sections/About';
import ProjectsSection from '../sections/ProjectsSection';

export default function KduahConsultLandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'clients', 'team', 'contact'];
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
  }, []);

  return (
    <div className="font-sans min-h-screen bg-white relative">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Fixed Contact Us Button Overlay */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 flex items-center"
        >
          Contact Us
        </button>
      </div>
      
      <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                KDUAH & DAVIDS <span className="text-orange-500">CONSULT</span> LIMITED
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive consulting services to help your business thrive in today's competitive market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Our Services
                </button>
                <button 
                  onClick={() => scrollToSection('clients')}
                  className="bg-transparent hover:bg-blue-700 text-white font-semibold py-3 px-6 border border-white rounded-md transition-colors duration-300"
                >
                  Our Clients
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={business} alt="Business Consulting" className="max-w-full h-96 md:h-160 rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}