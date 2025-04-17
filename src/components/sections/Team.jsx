import React, { useState } from "react";
import { teamMembers } from "../../data/team";
import BoardMemberCard from "../ui/BoardMemberCard";
import TeamMemberCard from "../ui/TeamMemberCard";
import { boardOfDirectors } from "../../data/boardMembers";
import TeamMemberOverlay from "../ui/TeamMemberOverlay";

const getCEO = () => {
  return teamMembers.find(member => member.role === "Chief Executive Officer");
};

const getManagingPartners = () => {
  return teamMembers.filter(member => 
    member.role.includes("Managing Partner")
  );
};

const getOtherTeamMembers = () => {
  return teamMembers.filter(member => 
    !member.role.includes("Managing Partner") && member.role !== "Chief Executive Officer"
  );
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  
  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closeOverlay = () => {
    setSelectedMember(null);
  };

  const CEO = getCEO();
  const managingPartners = getManagingPartners();
  const otherTeamMembers = getOtherTeamMembers();

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated professionals committed to your business success.
          </p>
        </div>

        {/* Board of Directors Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Board of Directors</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our esteemed Board of Directors provides strategic guidance ensuring we maintain our commitment to excellence and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {boardOfDirectors.map((director, idx) => (
              <BoardMemberCard
                key={idx}
                name={director.name}
                role={director.role}
                experience={director.experience}
              />
            ))}
          </div>
        </div>

        {/* Management Team Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Management Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated management team drives our company forward with vision and expertise.
            </p>
          </div>

          {/* CEO */}
          {CEO && (
            <div className="mb-12">
              <h4 className="text-xl text-center font-medium text-blue-700 mb-6">Executive Leadership</h4>
              <div className="max-w-lg mx-auto">
                <TeamMemberCard 
                  member={CEO}
                  onClick={() => handleCardClick(CEO)}
                />
              </div>
            </div>
          )}

          {/* Managing Partners - 3 in a row */}
          {managingPartners.length > 0 && (
            <div className="mb-12">
              <h4 className="text-xl text-center font-medium text-blue-700 mb-6">Managing Partners</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {managingPartners.map((partner, index) => (
                  <TeamMemberCard
                    key={index}
                    member={partner}
                    onClick={() => handleCardClick(partner)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Team Members */}
          {otherTeamMembers.length > 0 && (
            <div>
              <h4 className="text-xl text-center font-medium text-blue-700 mb-6">Department Managers</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherTeamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    member={member}
                    onClick={() => handleCardClick(member)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <TeamMemberOverlay member={selectedMember} onClose={closeOverlay} />

    </section>
  );
};

export default TeamSection;