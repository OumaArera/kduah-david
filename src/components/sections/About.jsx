import React from 'react';
import ceo from '../../assets/ceo.png';
import visionImg from '../../assets/vision.jpg';
import missionImg from '../../assets/mission.jpg';

const values = [
  "A - Accountability | We own our decisions and their outcomes. Individually and collectively, we lead with responsibility and integrity.",
  "C - Collaboration | We champion teamwork, harnessing diverse strengths to deliver unified, high-impact results.", 
  "T - Tenacity | We bring relentless energy, drive, and resolve to every challenge. Our work is fueled by purpose and dedication.",
  "I - Integrity | We uphold the highest ethical standards, doing what is right—even when it's not easy or convenient.",
  "O - Operational Excellence | We exceed expectations through discipline, innovation, and a commitment to continuous improvement.",
  "N - Noble Impact | Our work is meaningful. We strive to leave a lasting, positive imprint on every work we touch."
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        {/* Company Profile */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 mb-20">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Company Profile</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            <span className="font-semibold text-blue-900">Kduah & Davids Consult Limited</span>, formerly known as Young Business Consult (YBC), is a dynamic and results-driven consulting firm established and registered in Ghana since 2015. We specialize in supporting businesses to achieve their strategic project goals through innovative solutions and expert advisory services.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-4">
            With a strong emphasis on technology integration and strategic partnerships, we are dedicated to delivering exceptional service experiences that prioritize client satisfaction. Our team-oriented culture fosters knowledge sharing and a deep commitment to excellence and continuous improvement.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mt-4">
            At the heart of our operations are values that drive innovation, encourage ambition, and celebrate both individual and team achievements. We believe that true success lies in creating meaningful impact—both for our clients and within our community.
          </p>
        </div>

        {/* Vision, Mission */}
        <div className="grid gap-10 lg:grid-cols-2 mb-20">
          {/* Vision */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 min-h-[350px] flex flex-col">
            <img src={visionImg} alt="Vision" className="w-full h-full md:h-84 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Vision</h3>
            <p className="text-gray-700 text-base leading-relaxed flex-grow">
              To be the most trusted business consult recognized for the delivery of excellent services in Ghana and beyond.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 min-h-[350px] flex flex-col">
            <img src={missionImg} alt="Mission" className="w-full h-full md:h-84 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Mission</h3>
            <p className="text-gray-700 text-base leading-relaxed flex-grow">
              To be the leading business consulting company in Ghana and beyond, and to ensure that we provide the right resources at the right time to maximize our clients' business potential.
            </p>
          </div>
        </div>

        {/* Core Values */}
<div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 mb-20 max-w-4xl mx-auto">
  <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">Core Values – A.C.T.I.O.N.</h3>
  <div className="flex flex-col gap-6">
    {values.map((value, index) => {
      const [acronymTitle, description] = value.split(" | ");
      const [letter, title] = acronymTitle.split(" - ");
      return (
        <div key={index} className="flex items-start gap-4">
          {/* Circle Letter */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg shadow-md">
              {letter}
            </div>
          </div>

          {/* Title + Description block with controlled width */}
          <div className="flex-1">
            <p className="font-semibold text-blue-800 text-base md:text-lg mb-1 leading-snug">{title}</p>
            <p className="text-sm text-gray-700 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>



      </div>
    </section>
  );
};

export default AboutSection;
