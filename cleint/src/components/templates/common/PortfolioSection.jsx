import React from 'react';


const ProjectCard = ({ title, description, image, link }) => (
  
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
    {}
    <img 
      src={image || 'https://via.placeholder.com/400x300'} 
      alt={title} 
      className="w-full h-48 object-cover" 
    />
    
    {}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      
      {}
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-theme-red text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
        >
          View Live Project
        </a>
      )}

    </div>
  </div>
);


const PortfolioSection = ({ projectData }) => {
  if (!projectData || projectData.length === 0) return null;

  return (
    <section className="my-12 py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Photo <span className="text-theme-red">Gallery</span>
        </h2>
        <p className="text-center text-gray-600 mb-10">
          A collection of my recent projects and work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard 
              key={project.id || project.title} 
              title={project.title} 
              description={project.description}
              image={project.image}
              link={project.link} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;