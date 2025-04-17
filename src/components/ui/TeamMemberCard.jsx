import React from "react";



const TeamMemberCard = ({ member, onClick }) => (
    <div 
      className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-48 bg-white flex items-center justify-center">
        <img
          src={member.image}
          alt={member.name}
          className="max-h-full max-w-full object-contain p-2"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-1">{member.name}</h3>
        <p className="text-orange-500 font-medium text-sm mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm">{member.description}</p>
        <div className="mt-3 text-blue-600 text-sm font-medium">Click to view full bio</div>
      </div>
    </div>
  );

export default TeamMemberCard;