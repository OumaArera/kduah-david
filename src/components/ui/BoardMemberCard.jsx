import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";

const BoardMemberCard = ({ name, role, experience }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Function to toggle expanded state
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Get preview text (first 150 characters)
  const previewText = experience.trim().substring(0, 150);
  const hasMoreText = experience.trim().length > 150;
  
  return (
    <div className="relative bg-white rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="absolute -top-4 -left-4 bg-orange-500 text-white p-2 rounded-full shadow-md">
        <FaUserTie className="text-lg" />
      </div>

      <div className="pl-2">
        <h4 className="text-xl font-semibold text-blue-900 mb-1">{name}</h4>
        <p className="text-sm text-orange-600 font-medium mb-3 uppercase tracking-wide">{role}</p>
        <div className="text-gray-700 text-sm leading-relaxed">
          {expanded ? (
            <p className="whitespace-pre-line">{experience.trim()}</p>
          ) : (
            <>
              <p>{previewText}{hasMoreText ? "..." : ""}</p>
            </>
          )}
          
          {hasMoreText && (
            <button 
              onClick={toggleExpand}
              className="mt-2 text-blue-600 hover:text-blue-800 font-medium text-sm focus:outline-none transition-colors duration-200"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardMemberCard;