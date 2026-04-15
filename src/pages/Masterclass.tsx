import Navbar from "@/components/Navbar";
import doe from "@/assets/doe.jpeg"

const masterclasses = [
  {
    id: 15,
    title: "Masterclass #15: Points of Information",
    date: "April 11 | 7:45 AM-8:45 AM CDT",
    description: "Register for free to gain on-demand access!",
    status: "coming-soon",
  },
  {
    id: 14,
    title: "Masterclass #14: Resolution Skills",
    date: "March 26 | 6:45 AM-7:45 AM CDT",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 13,
    title: "Masterclass #13: Accessibility and Inclusive Debate",
    date: "February 22 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 12,
    title: "Masterclass #12: Representation and Voice in Global Governance",
    date: "February 8 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 11,
    title: "Masterclass #11: Diplomatic Etiquette and Professionalism",
    date: "January 25 | 10:00 AM-11:00 AM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 10,
    title: "Masterclass #10: Understanding Geopolitics",
    date: "January 11 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 9,
    title: "Masterclass #9: Representation and Position Profiling",
    date: "December 14 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 8,
    title: "Masterclass #8: The Key to Resolution Papers",
    date: "November 30 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 7,
    title: "Masterclass #7: Standing Out in Committee",
    date: "November 16 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 6,
    title: "Masterclass #6: The Strategic Speech",
    date: "November 2 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 5,
    title: "Masterclass #5: Navigating Position Papers",
    date: "October 19 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 4,
    title: "Masterclass #4: The Power of Procedure",
    date: "October 5 | 6:00 PM-7:00 PM CST",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 3,
    title: "Masterclass #3: Research Unlocked",
    date: "September 21 | 6:00 PM-7:00 PM CDT",
    description: "Register for free to gain on-demand access!",
    status: "register",
  },
  {
    id: 2,
    title: "Masterclass #2: The Art of Speaking",
    date: "September 7 | 6:00 PM-7:00 PM CDT",
    description: "Register for free to gain on-demand access!",
    status: "registration-closed",
  },
  {
    id: 1,
    title: "Masterclass #1: Welcome to Model UN",
    date: "August 17 | 6:00 PM-7:00 PM CST",
    description: "Thank you to all attendees!",
    status: "registration-closed",
  },
];

function StatusButton({ status }: { status: string }) {
  if (status === "coming-soon") {
    return (
      <button className="mt-3 bg-[#1a73c5] hover:bg-[#1558a0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors">
        Coming Soon
      </button>
    );
  }
  if (status === "registration-closed") {
    return (
      <button className="mt-3 bg-[#1a73c5] hover:bg-[#1558a0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors">
        Registration Closed
      </button>
    );
  }
  return (
    <button className="mt-3 bg-[#1a73c5] hover:bg-[#1558a0] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition-colors">
      Register
    </button>
  );
}

export default function Masterclass() {
  return (
    
    <>
    <Navbar/>
    <div className="min-h-screen bg-[#f5f5f5] text-gray-800">
      {/* Hero Section */}
      <section className="bg-white px-4 sm:px-6 py-10 md:py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Text */}
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-body text-gray-900 leading-tight">
              Meet the Masterclass
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 italic">Your Free Guide to a Gavel</p>
            <p className="mt-2 text-sm sm:text-base text-gray-700">
              Hosted by{" "}
              <a href="#" className="text-[#1a73c5] underline font-medium">
                Chloe Kizito
              </a>
              , Director of Education
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <img
              src={doe}
              alt="Host"
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-[220px] sm:h-[250px] md:h-[260px] rounded-lg object-cover shadow"
              style={{ objectPosition: "top" }}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-300 mx-auto max-w-5xl" />

      {/* Masterclass Grid */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {masterclasses.map((mc) => (
            <div
              key={mc.id}
              className="w-full p-5 sm:p-6 bg-white text-center shadow-sm rounded-lg border border-gray-100 flex flex-col items-center"
            >
              <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">{mc.title}</h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">{mc.date}</p>
              <p className="mt-1 text-xs sm:text-sm text-gray-600">{mc.description}</p>
              <StatusButton status={mc.status} />
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimers */}
      <section className="px-4 sm:px-6 py-8 max-w-5xl mx-auto">
        <p className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Disclaimers</p>
        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-700 pl-1">
          <li>
            Masterclasses are recorded, so all audio, video, and chats are recorded and transcribed
            permanently
          </li>
          <li>Masterclass topics are subject to change without notice</li>
          <li>
            Reach out to{" "}
            <span className="font-semibold">Chloe Kizito</span>, Director of Education, with any
            questions
          </li>
        </ul>
      </section>
    </div>
    </>
  );
}