import React, { useState, useEffect, useRef } from 'react';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.type === activeFilter));
    }
    setCurrentSlide(0);
  }, [activeFilter]);

  useEffect(() => {
    const autoPlay = () => {
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

  const goToSlide = (index) => {
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

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'partner', label: 'Partners' },
    { value: 'event', label: 'Event Planning and Management' },
    { value: 'consultation', label: 'Business Consultancy Services' },
    { value: 'logo', label: 'Logo Design' },
    { value: 'architecture', label: 'Architectural Design' },
    { value: 'construction', label: 'Building Construction and Civil Works' },
    { value: 'accounting', label: 'Accounting & Audit Services' },
  ];
  
  // Function to handle image carousel for each project card
  const ProjectImageCarousel = ({ images, name }) => {
    const [activeImage, setActiveImage] = useState(0);
    
    useEffect(() => {
      const imageInterval = setInterval(() => {
        setActiveImage(prev => (prev + 1) % images.length);
      }, 3000);
      
      return () => clearInterval(imageInterval);
    }, [images.length]);
    
    return (
      <div className="relative h-56 overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${activeImage * 100}%)` }}>
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt={`${name} - Image ${idx + 1}`}
              className="w-full h-56 object-cover flex-shrink-0"
            />
          ))}
        </div>
        
        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImage(idx);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeImage === idx ? 'bg-blue-800' : 'bg-white bg-opacity-70'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Left/Right Controls (visible on hover) */}
        {images.length > 1 && (
          <>
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(prev => (prev - 1 + images.length) % images.length);
              }}
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(prev => (prev + 1) % images.length);
              }}
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="clients" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At KDuah & Davids Consult, we create and deliver business and innovative solutions that fit our clients needs and drive the result they want. This is so because our clients are at the heart of everything we do. We serve a wide range of industries with unwavering commitment and expertise.
          </p>
        </div>

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

        <div className="relative">
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
                      <ProjectImageCarousel images={project.image} name={project.name} />
                      <div className="absolute top-2 right-2 bg-blue-800 text-white text-xs px-2 py-1 rounded-full">
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
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