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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
        </div>

        {/* Vision, Mission and Core Values */}
        <div className="grid gap-10 lg:grid-cols-2 mb-20">
          {/* Vision */}
          <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 min-h-[350px] flex flex-col">
            <img src={visionImg} alt="Vision" className="w-full h-full md:h-84  object-cover rounded-lg mb-4" />
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

        {/* Core Values - Full Width */}
        <div className="bg-white p-8 rounded-2xl shadow-lg transition-transform hover:-translate-y-1 mb-20">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Core Values – A.C.T.I.O.N.</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const [acronymTitle, description] = value.split(" | ");
              const [letter, title] = acronymTitle.split(" - ");
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold text-lg shadow-md">
                      {letter}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-800">{title}</p>
                    <p className="text-sm text-gray-700">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CEO Message */}
        <div className="bg-blue-50 p-10 rounded-2xl shadow-xl">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/4 mb-6 lg:mb-0 flex justify-center">
              <img src={ceo} alt="CEO" className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg" />
            </div>
            <div className="lg:w-3/4 lg:pl-10">
              <h3 className="text-3xl font-semibold text-blue-800 mb-2">Message from the CEO</h3>
              <h4 className="text-xl font-medium text-orange-500 mb-4">Kwaku Duah Junior</h4>
              <p className="text-gray-700 mb-4 text-base leading-relaxed">
                It is my pleasure to welcome you to Young Business Consult which is now KDuah and David Consult, registered in Ghana by the registrar general department.
                KDuah and David Consult is a dynamic, result-oriented consulting firm, seeking to aid businesses in attaining realistic project needs.
                We welcome you to browse through our website.
                It is our hope that you will allow us to be the solution to your business challenges and in so doing bring about meaning to our mantra: YOU & US, a growing Partnership.
              </p>
              <p className="text-gray-700 font-semibold italic">"Thank you and Welcome."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;