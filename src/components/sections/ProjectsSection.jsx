import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Check if it's mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint in Tailwind
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Apply filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.type === activeFilter));
    }
    setCurrentSlide(0);
  }, [activeFilter]);

  // Auto-slide functionality
  useEffect(() => {
    const autoPlay = () => {
      // For mobile: check if we have more than 1 project
      // For desktop: check if we have more than 3 projects
      if ((isMobile && filteredProjects.length <= 1) || 
          (!isMobile && filteredProjects.length <= 3)) return;
      
      setCurrentSlide(prevSlide => {
        const maxSlide = isMobile 
          ? filteredProjects.length - 1 
          : filteredProjects.length - 3;
          
        return prevSlide >= maxSlide ? 0 : prevSlide + 1;
      });
    };

    autoPlayRef.current = autoPlay;
  }, [filteredProjects.length, isMobile]);

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index) => {
    // Calculate max slide differently for mobile vs desktop
    const maxSlide = isMobile 
      ? Math.max(0, filteredProjects.length - 1)
      : Math.max(0, filteredProjects.length - 3);
      
    if (index < 0) {
      setCurrentSlide(maxSlide);
    } else if (index > maxSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  // Filter options
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'partner', label: 'Partners' },
    { value: 'event', label: 'Events Planning and Management' },
    { value: 'consultation', label: 'Consultancy Services' },
    { value: 'logo', label: 'Logo Design' },
    { value: 'architecture', label: 'Architectural Design' },
    { value: 'construction', label: 'Building Construction and Civil Works' }
  ];

  return (
    <section id="clients" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Clients</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of our successfully completed projects for our clients across Ghana, and USA delivering excellence and impact in every field.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === option.value
                  ? 'bg-blue-800 text-white'
                  : 'bg-white text-blue-800 hover:bg-blue-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => goToSlide(currentSlide - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => goToSlide(currentSlide + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Projects Container */}
          <div 
            ref={sliderRef}
            className="overflow-hidden"
          >
            {filteredProjects.length > 0 ? (
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: isMobile 
                    ? `translateX(-${currentSlide * 100}%)` 
                    : `translateX(-${currentSlide * (100/3)}%)`
                }}
              >
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="min-w-full sm:min-w-[50%] md:min-w-[33.333%] px-4"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full">
                      <div className="relative h-56">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
                          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-blue-800 mb-1">{project.name}</h3>
                        <p className="text-gray-600">{project.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500">No projects found for this filter.</p>
              </div>
            )}
          </div>

          {/* Pagination Dots - Adjusted for mobile/desktop */}
          {((isMobile && filteredProjects.length > 1) || 
            (!isMobile && filteredProjects.length > 3)) && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({
                length: isMobile 
                  ? filteredProjects.length 
                  : Math.ceil(filteredProjects.length / 3)
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    (isMobile && currentSlide === i) || 
                    (!isMobile && Math.floor(currentSlide / 3) === i) 
                      ? 'bg-blue-800' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;