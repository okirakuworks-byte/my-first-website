"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary text-sm tracking-widest uppercase mb-4">
          Web Developer
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          山田 太郎
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
          アクセシブルで美しいデジタル体験を創り出すことに情熱を持つフロントエンドエンジニアです。
          デザインと開発の交差点で、パフォーマンスと使いやすさを両立したWebサイトを構築しています。
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            お問い合わせ
          </a>
          <a
            href="#skills"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
          >
            スキルを見る
          </a>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
