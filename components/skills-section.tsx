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
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary text-sm tracking-widest uppercase mb-4">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          スキル
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md"
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
