// context/PeopleContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Updated Person interface to include all data points
interface Person {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
  description: string;
  contactFirstName: string; // Add a field for the button text
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

interface PeopleContextType {
  people: Person[];
  addPerson: (person: Person) => void;
  deletePerson: (id: string) => void;
  updatePerson: (updated: Person) => void;
}

const PeopleContext = createContext<PeopleContextType | undefined>(undefined);

// Updated initial data to match the image precisely
const initialPeople: Person[] = [
  {
    id: '1',
    name: 'Momin Ahmed', // Transcribed from image title
    imageUrl: '/images/momin-ahmed.png', // User must provide this asset
    title: 'Founder and President', // Transcribed from image
    description: `Momin Ahmed is a social entrepreneur, public speaker, and advocate for global education recognized as the youngest member of the 2026 Forbes 30 Under 30 list. He is the Founder of Model UN Academy, an edtech nonprofit that's engaged over 18,000 students worldwide with 1.5 million words of free resources on diplomacy through Model UN.
The organization has mentored graduate students as Fellows, worked with PhD professors as volunteers, and hosted free webinars for hundreds of students in collaboration with Harvard National Model UN–Latin America and DePaul University's Grace School of Applied Diplomacy.
Momin is the first-ever Advisor and Ambassador on Youth Engagement to MedGlobal, an NGO that's provided lifesaving healthcare to more than 43 million people.
Momin has been profiled in the Chicago Tribune and interviewed on FOX News and NBC. He has presented at TEDx and spoken at events hosted by the United Nations Association of the USA, MedGlobal, and Manhattanville University. He was also a Delegate to the United States–United Nations Advocacy Summit on Capitol Hill.`,
    contactFirstName: 'Momin', // Used for the button text
    socialLinks: {
      instagram: 'https://instagram.com/your-username', // Define links
      linkedin: 'https://linkedin.com/in/your-profile',
    },
  },
  // ... more initial data for other people, if any
];

export const PeopleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [people, setPeople] = useState<Person[]>(initialPeople);

  const addPerson = (person: Person) => setPeople(prev => [...prev, person]);
  const deletePerson = (id: string) => setPeople(prev => prev.filter(p => p.id !== id));
  const updatePerson = (updated: Person) =>
    setPeople(prev => prev.map(p => (p.id === updated.id ? updated : p)));

  return (
    <PeopleContext.Provider value={{ people, addPerson, deletePerson, updatePerson }}>
      {children}
    </PeopleContext.Provider>
  );
};

// Custom hook for easy consumption
export const usePeople = (): PeopleContextType => {
  const context = useContext(PeopleContext);
  if (!context) {
    throw new Error('usePeople must be used within a PeopleProvider');
  }
  return context;
};