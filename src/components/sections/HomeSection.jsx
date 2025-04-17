import React from 'react';
import business from '../../assets/business.jpg';
import ceo from '../../assets/ceo.png';
import { FaCheckCircle, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

const HomeSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
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

        {/* Why Choose Us Section */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-blue-500/20 shadow-lg overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl transform translate-x-12 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300/20 rounded-full blur-xl transform -translate-x-8 translate-y-10"></div>
          
          <h2 className="text-center text-3xl font-bold text-white mb-6 relative">
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text text-transparent">
              Why Choose Kduah & Davids Consult?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            <div className=" backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20 group">
              <div className="flex items-center mb-2">
                <FaCheckCircle className="text-orange-500 mr-2 text-xl group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white">Proven Track Record</h3>
              </div>
              <p className="text-blue-100 text-sm">Transforming businesses with exceptional results since our inception</p>
            </div>
            
            <div className=" backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20 group">
              <div className="flex items-center mb-2">
                <FaLightbulb className="text-orange-500 mr-2 text-xl group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white">Innovative Solutions</h3>
              </div>
              <p className="text-blue-100 text-sm">Cutting-edge strategies tailored to your unique business challenges</p>
            </div>
            
            <div className=" backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20 group">
              <div className="flex items-center mb-2">
                <FaHandshake className="text-orange-500 mr-2 text-xl group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white">Client Partnership</h3>
              </div>
              <p className="text-blue-100 text-sm">We're invested in your success through every step of the journey</p>
            </div>
            
            <div className=" backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all border border-white/20 group">
              <div className="flex items-center mb-2">
                <FaChartLine className="text-orange-500 mr-2 text-xl group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-white">Measurable Impact</h3>
              </div>
              <p className="text-blue-100 text-sm">Delivering quantifiable results that boost your bottom line</p>
            </div>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 rounded-3xl shadow-2xl border border-blue-100">
        <div className="absolute top-0 left-0 w-2 h-full bg-orange-500 rounded-l-2xl"></div>
        
        <div className="flex flex-col lg:flex-row items-center relative z-10">
            {/* CEO Image & Details */}
            <div className="lg:w-1/4 mb-6 lg:mb-0 flex justify-center">
            <div className="flex flex-col items-center text-center space-y-3">
                <img
                src={ceo}
                alt="CEO"
                className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"
                />
                <div>
                <h4 className="text-xl font-bold text-orange-500">Kwaku Duah Junior</h4>
                <h6 className="text-sm italic font-medium text-blue-800">Chief Executive Officer</h6>
                </div>
            </div>
            </div>

            {/* CEO Message Content */}
            <div className="lg:w-3/4 lg:pl-10">
            <h3 className="text-3xl font-extrabold text-blue-800 mb-4">The CEO's Message</h3>
            
            <blockquote className="text-gray-700 mb-4 text-base leading-relaxed border-l-4 border-orange-400 pl-4 italic">
                "Welcome to Kduah & Davids Consult, a beacon of innovation and integrity. Formerly Young Business Consult,
                our firm is proudly registered with Ghana's Registrar General Department and is built upon a foundation of trust,
                experience, and impact."
            </blockquote>

            <p className="text-gray-700 mb-4 text-base leading-relaxed">
                At Kduah and Davids Consult, we are driven by a simple yet powerful goal:
                <span className="text-blue-800 font-semibold"> helping businesses navigate complexity and achieve excellence.</span>
                Whether you're launching a new venture or optimizing operations, our seasoned experts are here to partner with you at every step.
            </p>

            <p className="text-gray-700 mb-4 text-base leading-relaxed">
                I invite you to explore our solutions, read about our work, and see how
                <span className="text-orange-600 font-semibold"> "YOU & US" </span>
                can create a lasting partnership for growth and transformation.
            </p>

            <p className="text-blue-900 font-semibold italic mt-6">"Thank you for visiting us — we look forward to working with you."</p>
            </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSection;