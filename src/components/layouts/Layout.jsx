import React, { useState, useEffect } from 'react';
import TeamSection from '../sections/Team';
import ServicesSection from '../sections/Services';
import ContactSection from '../sections/Contact';
import Footer from './Footer';
import Header from './Header';
import AboutSection from '../sections/About';
import ProjectsSection from '../sections/ProjectsSection';
import HomeSection from '../sections/HomeSection';

export default function KduahConsultLandingPage() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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

      {/* ✅ Use HomeSection Component */}
      <HomeSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
