import React, { useState, useEffect } from 'react';
import { services } from '../../data/services';
import ServiceModal from './ServiceModal';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800">Our Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto my-4" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored strategies designed to empower your business growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="h-50 w-90 object-contain mb-4"
                />
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
                <button
                  onClick={() => setSelectedService(service.title)}
                  className="mt-6 text-orange-600 hover:text-orange-800 font-medium transition"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal serviceTitle={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  );
};

export default ServicesSection;
