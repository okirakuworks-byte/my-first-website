import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
      <ContactSection />

      <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
        <p className="text-muted-foreground text-sm">
          © 2026 山田 太郎. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
