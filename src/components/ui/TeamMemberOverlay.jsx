// components/ui/TeamMemberOverlay.jsx
import React from "react";

const TeamMemberOverlay = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[85vh] overflow-hidden shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-6 relative">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-blue-100 font-medium">{member.role}</p>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Content Area */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Section */}
          <div className="md:w-1/3 bg-gray-50 p-6">
            <div className="rounded-lg overflow-hidden shadow-md mb-6">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-800 border-b border-gray-200 pb-2">Contact</h4>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Email the team</span>
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">Contact us</span>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="md:w-2/3 p-6 overflow-y-auto max-h-[60vh] md:max-h-[70vh]">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 h-6 w-1 mr-3 rounded"></div>
                <h4 className="text-xl font-semibold text-gray-800">Biography</h4>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700">
                <p className="whitespace-pre-line leading-relaxed">
                  {member.bioData || member.description}
                </p>
              </div>
            </div>

            {member.expertise && (
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-500 h-6 w-1 mr-3 rounded"></div>
                  <h4 className="text-xl font-semibold text-gray-800">Expertise</h4>
                </div>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {member.expertise.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberOverlay;
