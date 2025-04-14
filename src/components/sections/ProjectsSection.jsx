// src/components/sections/Projects.js
import React from 'react';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Completed Projects</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of our successfully completed projects across Ghana, delivering excellence and impact in every field.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">{project.name}</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
