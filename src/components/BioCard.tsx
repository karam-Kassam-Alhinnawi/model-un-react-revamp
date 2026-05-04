// components/BioCard.tsx
import React from "react";
// Assumes you have some button component and icon library set up
import { Button } from "./ui/button";
import { Instagram, Linkedin } from "lucide-react"; // Using Lucide React Icons

interface Person {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
  description: string;
  contactFirstName: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

interface BioCardProps {
  person: Person;
}

const BioCard: React.FC<BioCardProps> = ({ person }) => {
  return (
    // Updated structure and styling to match the image layout
    <div className="font-body flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      {/* Title */}
      <h1 className="font-bold text-5xl text-white mb-6 leading-tight tracking-tight">
        {person.name.toUpperCase()}
      </h1>

      {/* Image with rounded corners */}
      <img
        className="w-full h-auto max-h-[600px] object-cover rounded-3xl mb-12 shadow-2xl"
        src={person.imageUrl}
        alt={person.name}
      />

      {/* Subtitle / Role */}
      <h2 className="font-bold text-2xl text-white mb-6">
        {person.title}
      </h2>

      {/* Description Text */}
      <p className="text-white text-md leading-relaxed mb-10 w-full max-w-3xl">
        {person.description}
      </p>

      {/* Button with new blue color and rounded corners */}
      <Button className="bg-[#3FA1D7] hover:bg-[#3FA1D7]/80 text-white font-medium text-lg px-10 py-4 rounded-full mb-8">
        Contact {person.contactFirstName}
      </Button>

      {/* Social Icons */}
      {person.socialLinks && (
        <div className="flex gap-6 items-center">
          {person.socialLinks.instagram && (
            <a href={person.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition">
              <Instagram />
            </a>
          )}
          {person.socialLinks.linkedin && (
            <a href={person.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-gray-300 transition">
              <Linkedin />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default BioCard;