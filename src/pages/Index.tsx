import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MediaLogos from "@/components/MediaLogos";
import StatsMarquee from "@/components/StatsMarquee";
import ImpactSection from "@/components/ImpactSection";
import MissionSection from "@/components/MissionSection";
import PartnersSection from "@/components/PartnersSection";
import WhatIsMunSection from "@/components/WhatIsMunSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8">
        <Navbar />
      </div>
      <HeroSection />
      <MediaLogos />
      <StatsMarquee />
      <ImpactSection />
      <MissionSection />
      <PartnersSection />
      <WhatIsMunSection />
      <Footer />
    </div>
  );
};

export default Index;
