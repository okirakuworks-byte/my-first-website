import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <HeroSection />
      <SkillsSection />
      <ContactSection />

      <footer className="relative px-6 md:px-12 lg:px-24 py-12 border-t border-border/50 bg-gradient-to-t from-background via-background to-transparent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 山田 太郎. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <span className="text-primary">❤️</span>
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
