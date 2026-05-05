import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import recognitionHero from '@/assets/recognitionImage.jpg';
import { db } from '@/lib/firebase'; // adjust path if needed
import { collection, getDocs } from 'firebase/firestore';

interface RecognitionItem {
  id: string;
  title: string;
  subtitle: string;
  logo_url: string;
  link_url: string;
  button_text: string;
  sort_order?: number;
}

const RecognitionHero: React.FC = () => {
  return (
    <section
      className='h-[50vh] text-center flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${recognitionHero})` }}
    >
      <h2 className="text-4xl font-bold text-white transform translate-y-8 tracking-tight">
        Our Recognitions
      </h2>
    </section>
  );
};

const RecognitionSection: React.FC = () => {
  const [recognitions, setRecognitions] = useState<RecognitionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecognitions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recognitions'));
        const items: RecognitionItem[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as RecognitionItem[];

        // Sort client‑side (Firestore may not have sort_order on every doc,
        // same logic as AdminPage)
        items.sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));

        setRecognitions(items);
      } catch (error) {
        console.error('Failed to fetch recognitions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecognitions();
  }, []);

  return (
    <div>
      <Navbar />
      <RecognitionHero />
      <section className="bg-[#f0f2f5] py-20 px-6 font-body">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading recognitions…</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
              {recognitions.map((item) => (
                <div key={item.id} className="flex flex-col items-center text-center group">
                  {/* Image Container */}
                  <div className="w-full aspect-square max-w-[280px] mb-6">
                    <img
                      src={item.logo_url}
                      alt={`${item.title} logo`}
                      className="w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Textual Information */}
                  <h3 className="font-extrabold text-xl text-gray-900 mb-3 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-3 px-4 h-16 line-clamp-3">
                    {item.subtitle}
                  </p>

                  {/* Action Button */}
                  <a
                    href={item.link_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a5fb4] hover:bg-[#154a8d] text-white font-bold py-3 px-10 rounded-full transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
                  >
                    {item.button_text || 'Learn More'}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default RecognitionSection;