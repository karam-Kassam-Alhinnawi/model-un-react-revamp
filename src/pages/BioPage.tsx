// pages/BioPage.tsx
import React from 'react';
import BioCard from '../components/BioCard';
import { usePeople } from '../context/PeopleContext';

const BioPage: React.FC = () => {
  const { people } = usePeople();

  if (people.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[200px] text-gray-400 text-lg">
        No bios available.
      </div>
    );
  }

  // Find the Momin Ahmed bio by ID (or filter) for display
  const momin = people.find(p => p.id === '1');

  if (!momin) {
      return <div>Error loading profile.</div>;
  }

  return (
    // Updated container styling for correct centering and full-screen background
    <div className="min-h-screen bg-black flex flex-col justify-center items-center py-20 px-4">
        {/* Render a single card for Momin, as shown in the image */}
        <BioCard key={momin.id} person={momin} />
    </div>
  );
};

export default BioPage;