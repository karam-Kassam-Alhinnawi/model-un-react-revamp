import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Instagram } from "lucide-react";

export default function BioPage() {
  const { personId } = useParams<{ personId: string }>();
  const [person, setPerson] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!personId) return;
    const fetchPerson = async () => {
      const snap = await getDoc(doc(db, "people", personId));
      if (snap.exists()) {
        setPerson({ id: snap.id, ...snap.data() });
      } else {
        setPerson(null);
      }
      setLoading(false);
    };
    fetchPerson();
  }, [personId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!person) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <p className="text-xl">Person not found.</p>
        <Link to="/our-people" className="text-blue-400 underline">
          ← Back to Our People
        </Link>
      </div>
    );
  }

  // Extract first name for the button label
  const firstName = person.name.split(" ")[0];

  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-36">
        {/* Back link */}
        <Link
          to="/our-people"
          className="inline-block mb-8 text-sm text-blue-400 hover:underline"
        >
          ← Back to Our People
        </Link>

        <div className="flex flex-col gap-10 items-center">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={person.image_url || "/placeholder.jpg"}
              alt={person.name}
              className="w-96 h-96 object-cover shadow-2xl border border-gray-800"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-2">
              {person.name}
            </h1>
            <p className="text-xl text-gray-400 mb-6">{person.role}</p>

            {/* Bio */}
            {person.bio ? (
              <div className="text-lg leading-relaxed text-gray-200 whitespace-pre-line mb-8">
                {person.bio}
              </div>
            ) : (
              <p className="text-gray-500 italic mb-8">No bio available yet.</p>
            )}

            {/* Contact button */}
            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors mb-6"
              >
                <Mail className="inline-block w-5 h-5 mr-2 -mt-0.5" />
                Contact {firstName}
              </a>
            )}

            {/* Social icons */}
            <div className="flex gap-8 items-center justify-center">
              {person.instagram && (
                <a
                  href={person.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              )}
              {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}