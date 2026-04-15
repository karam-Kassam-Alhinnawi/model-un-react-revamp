import Navbar from '@/components/Navbar';
import React from 'react';
import recognitionHero from '@/assets/recognitionImage.jpg';

const logos = [
  { name: "FOX News", url: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/68b86324-0484-4f6c-9647-df16f95d0405/FOX+News+Logo.jpg" },
];

const recognitionData = [
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/c913cc0e-0ff1-4aeb-b451-286c5d0cce4b/Image+86.jpeg?format=500w",
    title: "Forbes 30 Under 30",
    subtitle: "Youngest Honoree of Class of 2026",
    buttonText: "Read More",
    link: "https://www.forbes.com/profile/momin-ahmed/",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/a0621259-7e6b-41e6-937b-c3268a9a07df/Image+2.jpeg?format=500w",
    title: "FOX News",
    subtitle: "Illinois High School Senior Becomes Youngest Honoree on Forbes 30 Under 30 List",
    buttonText: "Watch Segment",
    link: "https://www.fox32chicago.com/video/fmc-n1kql9459pc5l1uk",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b6c516a5-4474-44f0-a975-3ed6b323d513/NBC+Logo.png",
    title: "NBC",
    subtitle: "Airing March 16th, 2026",
    buttonText: "Coming Soon",
    link: "https://modelunacademy.org/our-recognitions",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/4c8fad20-ade9-471c-86de-c98e212121cb/Chicago+Tribune+Square+Logo.jpg?format=500w",
    title: "Chicago Tribune",
    subtitle: "Hinsdale Central teen sets up Model UN Academy site to help thousands of students find success",
    buttonText: "Read More",
    link: "https://www.chicagotribune.com/2025/11/15/hinsdale-central-teen-sets-up-model-un-academy-site/",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/b2f99b48-c90e-4465-aec2-8b3b277dc8f4/TEDx+Logo.png?format=300w",
    title: "TEDx Talk",
    subtitle: "How to Disagree Without Dividing | Momin Ahmed",
    buttonText: "Watch Talk",
    link: "https://www.youtube.com/watch?v=1RN7wtJWeJQ",
  },
  {
    logo: "https://images.squarespace-cdn.com/content/v1/683e26f2aa698f0058a46959/11f5302a-9b54-4148-aea2-eb9886fb3cc0/Youth+Service+America+Square+Logo.jpg?format=500w",
    title: "Youth Service America",
    subtitle: "Everyday Young Hero",
    buttonText: "Read More",
    link: "https://ysa.org/mominahmed/",
  },
];

const RecognitionHero: React.FC = () => {
    return(
        <section
          className='h-[50vh] text-center flex items-center justify-center bg-cover bg-center'
          style={{ backgroundImage: `url(${recognitionHero})` }}
        >
              <h2 className="text-center text-4xl font-bold text-white transform translate-y-8 tracking-tight">
          Our Recognitions
        </h2>
        </section>
    )
}   

const RecognitionSection: React.FC = () => {
  return (
    
    <div>
         <Navbar/>
         <RecognitionHero/>
        <section className="bg-[#f0f2f5] py-20 px-6 font-body">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {recognitionData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* Image Container with aspect ratio matching the original UI */}
              <div className="w-full aspect-square max-w-[280px] mb-6 ">
                <img 
                  src={item.logo} 
                  alt={`${item.title} logo`} 
                  className="w-full max-h-full  transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Textual Information */}
              <h3 className="font-extrabold text-xl text-gray-900 mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-3 px-4 h-16 line-clamp-3">
                {item.subtitle}
              </p>

              {/* Action Button styled to match the blue from the Academy site */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a5fb4] hover:bg-[#154a8d] text-white font-bold py-3 px-10 rounded-full transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default RecognitionSection;