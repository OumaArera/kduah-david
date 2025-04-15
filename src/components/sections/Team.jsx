import React from "react";
import { FaUserTie } from "react-icons/fa";
import { teamMembers } from "../../data/team";

const boardOfDirectors = [
  {
    name: "ERIC AMOAKO NKRUMAH",
    role: "SNR. ASSOCIATE PARTNER (FINANCIAL ACCOUNTANT)",
    experience: `
      Eric is a result-oriented young professional with a great sense of achievement and the ability to initiate change and improve on existing operational systems. 
      He also has a strong ethical and moral stance. He is currently an ACCA finalist and has over twelve (12) years of practical experience in accounting, tax, and auditing. 
      He worked with Continental Christian Traders Limited (CCT) across the West African Sub-region, Olam Ghana, and Edwell Freight International. 
      In his eight and a half years with CCT, he advanced from the level of Assistant Accountant to Director in charge of Finance. 
      He is currently the Finance Director at Sam Joan Group of Companies in Accra, Ghana.
    `
  },
  {
    name: "KWABENA BONSU- DUAH",
    role: "SNR. ASSOCIATE PARTNER (BUILDING ENGINEER)",
    experience: `
      Kwabena Bonsu-Duah holds an HND in Building Construction Engineering from Kumasi Technical University. 
      He is a seasoned professional with over 30 years of experience in architecture, building engineering, and quantity surveying. 
      His career spans work with CAT Consults Limited and the Kumasi Metropolitan Assembly. 
      In 2015, he was appointed Head Engineer of a newly created district in the Volta Region. 
      Currently, he serves as the Senior Building Contractor at Ejisu Municipal Assembly in Greater Kumasi.
    `
  },
  {
    name: "KWAKU DUAH JUNIOR",
    role: "Chief Executive Officer",
    experience: `
      Kwaku Duah Jnr. holds a Bachelor of Science in Accounting from Pentecost University, a Higher National Diploma in Accounting from Sunyani Technical University, 
      a professional certificate in Journalism, a Master’s in Development Management from KNUST, and an MBA in Accounting from Texas A&M University Corpus Christi (USA).
    `
  }
];

const TeamMemberCard = ({ name, role, description, image }) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
    <div className="w-full h-48 bg-white flex items-center justify-center">
      <img
        src={image}
        alt={name}
        className="max-h-full max-w-full object-contain p-2"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-blue-800 mb-1">{name}</h3>
      <p className="text-orange-500 font-medium text-sm mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);


const BoardMemberCard = ({ name, role, experience }) => (
  <div className="relative bg-white rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
    <div className="absolute -top-4 -left-4 bg-orange-500 text-white p-2 rounded-full shadow-md">
      <FaUserTie className="text-lg" />
    </div>

    <div className="pl-2">
      <h4 className="text-xl font-semibold text-blue-900 mb-1">{name}</h4>
      <p className="text-sm text-orange-600 font-medium mb-3 uppercase tracking-wide">{role}</p>
      <p className="text-gray-700 text-[0.95rem] leading-relaxed whitespace-pre-line">{experience.trim()}</p>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Team Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated professionals committed to your business success.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>

        {/* Board of Directors */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">The Board of Directors</h3>
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
      </div>
    </section>
  );
};

export default TeamSection;
