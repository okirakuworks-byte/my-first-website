"use client";

const skills = [
  {
    category: "フロントエンド",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "バックエンド",
    items: ["Node.js", "Python", "PostgreSQL", "REST API"],
  },
  {
    category: "ツール",
    items: ["Git", "Docker", "Figma", "VS Code"],
  },
  {
    category: "その他",
    items: ["アクセシビリティ", "SEO", "パフォーマンス最適化", "レスポンシブデザイン"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            Skills
          </p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          スキル
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <div 
              key={skillGroup.category}
              className="group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 pb-3 border-b border-border/50 group-hover:border-primary/30 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground text-sm rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
