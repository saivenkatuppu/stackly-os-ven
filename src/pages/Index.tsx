import { Header } from "@/components/stackly/Header";
import { HeroSection } from "@/components/stackly/HeroSection";
import { WhySection } from "@/components/stackly/WhySection";
import { WhatSection } from "@/components/stackly/WhatSection";
import { DemoSection } from "@/components/stackly/DemoSection";
import { HowSection } from "@/components/stackly/HowSection";
import { CapabilitiesSection } from "@/components/stackly/CapabilitiesSection";
import { AssistiveSection } from "@/components/stackly/AssistiveSection";
import { ComparisonSection } from "@/components/stackly/ComparisonSection";
import { ProofSection } from "@/components/stackly/ProofSection";
import { RoadmapSection } from "@/components/stackly/RoadmapSection";
import { AudienceSection } from "@/components/stackly/AudienceSection";
import { TeamSection } from "@/components/stackly/TeamSection";
import { FooterCTA } from "@/components/stackly/FooterCTA";
import { MobileCTA } from "@/components/stackly/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <WhatSection />
        <DemoSection />
        <HowSection />
        <CapabilitiesSection />
        <AssistiveSection />
        <ComparisonSection />
        <ProofSection />
        <RoadmapSection />
        <AudienceSection />
        <TeamSection />
        <FooterCTA />
      </main>
      <MobileCTA />
    </div>
  );
};

export default Index;
