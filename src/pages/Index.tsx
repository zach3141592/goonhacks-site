import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ScheduleSection } from "@/components/schedule-section";
import { ContactSection } from "@/components/contact-section";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <ContactSection />
    </main>
  );
};

export default Index;
