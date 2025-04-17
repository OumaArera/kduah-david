import React, { useState } from 'react';
import { subServices } from '../../data/subServices';
import {
  FaBalanceScale,
  FaCalendarAlt,
  FaArrowRight,
  FaChartLine,
  FaCalculator,
  FaHardHat,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaInfoCircle
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
  "Paralegal Services - Barimah Chambers": <FaBalanceScale />,
  "Event Planning and Management": <FaCalendarAlt />,
  "Business Development Services": <FaChartLine />,
  "Accounting and Audit": <FaCalculator />,
  "Building Construction and Management": <FaHardHat />,
};

const ServiceModal = ({ serviceTitle, onClose }) => {
  const [expandedService, setExpandedService] = useState(null);

  const matched = subServices.find(
    (entry) => entry.serviceName === serviceTitle || entry.name === serviceTitle
  );

  if (!matched) return null;

  const serviceIcon = iconMap[matched.serviceName || matched.name] || <FaQuestionCircle />;

  const toggleExpand = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <div className="fixed top-24 md:top-64 inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl ring-1 ring-blue-100 flex flex-col max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500 transition duration-200"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col overflow-hidden max-h-[90vh]">
          {/* Icon and Title - Fixed at top */}
          <div className="flex-shrink-0 p-6 md:p-8 pb-4 flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-50 to-white rounded-t-3xl">
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white text-4xl shadow-lg mb-4"
            >
              {serviceIcon}
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 tracking-tight">
              {matched.serviceName || matched.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1 max-w-md">
              Explore our specialized offerings and click any service to view more details
            </p>
          </div>

          {/* Divider */}
          <div className="w-full px-8">
            <div className="border-t border-gray-200"></div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-4 md:p-8 pt-4 pb-28 md:pb-32 flex-grow">
            <div className="space-y-4 pb-4">
              {matched.subServices.map((sub, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div 
                    onClick={() => toggleExpand(index)}
                    className={`flex items-center justify-between gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      expandedService === index 
                        ? "bg-blue-600 text-white shadow-lg" 
                        : "bg-gray-50 text-gray-800 hover:bg-blue-50 border border-blue-100"
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`text-xl ${expandedService === index ? "text-white" : "text-blue-600"}`}>
                        {expandedService === index ? <FaInfoCircle /> : <FaArrowRight />}
                      </div>
                      <div className="font-medium">{sub.service}</div>
                    </div>
                    <div className="text-sm">
                      {expandedService === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {expandedService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white border-x border-b border-blue-100 rounded-b-xl shadow-inner"
                      >
                        <div className="p-5 text-gray-700">
                          {sub.details ? (
                            <div className="space-y-3">
                              <p>{sub.details}</p>
                              {sub.bulletPoints && sub.bulletPoints.length > 0 && (
                                <ul className="space-y-2 mt-2">
                                  {sub.bulletPoints.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-blue-500 mt-1">•</span>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ) : (
                            <p className="italic text-gray-500">More details coming soon...</p>
                          )}
                          
                          
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceModal;