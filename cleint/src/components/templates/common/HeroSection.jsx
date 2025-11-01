
import React from 'react';

const HeroSection = ({ heroData, aboutData }) => {
  
  console.log("HeroSection received heroData:", heroData);
  console.log("HeroSection received aboutData:", aboutData);

  
  if (!heroData) {
      console.error("HeroSection missing heroData!");
      return null; 
  }

  
  const { name, title, tagline, profileImage } = heroData;
  const resumeUrl = aboutData?.resumeUrl; 

  
  const validProfileImage = profileImage || 'https://placehold.co/400x400?text=No+Image';
  

  return (
    <section className="bg-theme-yellow text-gray-800">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl font-semibold">{title || 'Your Title'}</h2> {}
          <h1 className="text-5xl md:text-6xl font-bold my-3">{name || 'Your Name'}</h1> {}
          <p className="text-lg text-gray-700">{tagline || 'Your catchy tagline'}</p> {}
          <div className="mt-8 space-x-4">
            <a
              href="#contact"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors"
            >
              Contact Me
            </a>
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                
                className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300"
              >
                View CV
              </a>
            )}
          </div>
        </div>

        {}
        <div className="md:w-1/2 flex justify-center">
          <img
            
            src={validProfileImage}
            alt={name || 'Profile'}
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-8 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;