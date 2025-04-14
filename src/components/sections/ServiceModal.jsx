import React from 'react';
import { subServices } from '../../data/subServices';
import {
  FaBalanceScale,
  FaCalendarAlt,
  FaArrowRight,
  FaChartLine,
  FaCalculator,
  FaHardHat,
  FaQuestionCircle
} from 'react-icons/fa';

const iconMap = {
  "Paralegal Service - Barimah Chambers": <FaBalanceScale />,
  "Event Planning and Management": <FaCalendarAlt />,
  "Business Development Services": <FaChartLine />,
  "Accounting and Audit": <FaCalculator />,
  "Building Construction and Management": <FaHardHat />,
};

const ServiceModal = ({ serviceTitle, onClose }) => {
  const matched = subServices.find(
    (entry) => entry.serviceName === serviceTitle || entry.name === serviceTitle
  );

  if (!matched) return null;

  const serviceIcon = iconMap[matched.serviceName || matched.name] || <FaQuestionCircle />;

  return (
    <div className="fixed top-48 inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl animate-fadeIn ring-1 ring-blue-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl font-light transition duration-200"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto max-h-[90vh]">
          {/* Icon and Title */}
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-700 text-4xl shadow-inner mb-4">
              {serviceIcon}
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 tracking-tight">
              {matched.serviceName || matched.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">Our specialized offerings under this service</p>
          </div>

          <div className="px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {matched.subServices.map((sub, index) => (
            <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md hover:bg-blue-50/40 transition-all duration-200 border border-blue-100"
            >
                <div className="text-blue-600 text-xl pt-1">
                <FaArrowRight /> {/* You can replace this with a better small icon like FaArrowRight */}
                </div>
                <div className="text-gray-800 font-medium">{sub.service}</div>
            </div>
            ))}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
