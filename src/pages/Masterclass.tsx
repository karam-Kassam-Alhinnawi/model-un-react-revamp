import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import DoEImg from "../assets/doe.jpeg"
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function StatusButton({ status }: { status: string }) {
  if (status === "coming-soon") return <button className="mt-3 bg-[#1a73c5] hover:bg-[#1558a0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors">Coming Soon</button>;
  if (status === "registration-closed") return <button className="mt-3 bg-[#1a73c5] hover:bg-[#1558a0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors">Registration Closed</button>;
  return <button className="mt-3 bg-[#1a73c5] hover:bg-[#1558a0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors">Register</button>;
}

export default function Masterclass() {
  const [masterclasses, setMasterclasses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMasterclasses = async () => {
      const q = query(collection(db, "masterclasses"), orderBy("date_text", "desc"));
      const snap = await getDocs(q);
      setMasterclasses(snap.docs.map((d) => d.data()));
      setLoading(false);
    };
    fetchMasterclasses();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading masterclasses...</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-16 bg-[#f5f5f5] text-gray-800">
        <section className="bg-white px-4 sm:px-6 py-10 md:py-14">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-body text-gray-900 leading-tight">Meet the Masterclass</h1>
              <p className="mt-3 text-sm sm:text-base text-gray-600 italic">Your Free Guide to a Gavel</p>
              <p className="mt-2 text-sm sm:text-base text-gray-700">Hosted by <a href="#" className="text-[#1a73c5] underline font-medium">Charlotte Kim</a>, Director of Education</p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
              <img src={DoEImg} alt="Host" className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-[220px] sm:h-[250px] md:h-[260px] rounded-lg object-cover shadow" style={{ objectPosition: "top" }} />
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-300 mx-auto max-w-5xl" />

        <section className="py-10 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {masterclasses.map((mc, i) => (
              <div key={i} className="w-full p-5 sm:p-6 bg-white text-center shadow-sm rounded-lg border border-gray-100 flex flex-col items-center">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{mc.title}</h2>
                <p className="mt-2 text-xs sm:text-sm text-gray-600">{mc.date_text}</p>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">{mc.description}</p>
                <StatusButton status={mc.status} />
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 sm:px-6 py-8 max-w-5xl mx-auto">
          <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Disclaimers</p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 pl-1">
            <li>Masterclasses are recorded, so all audio, video, and chats are recorded and transcribed permanently</li>
            <li>Masterclass topics are subject to change without notice</li>
            <li>Reach out to <span className="font-semibold">Charlotte Kim</span>, Director of Education, with any questions</li>
          </ul>
        </section>
      </div>
    </>
  );
}