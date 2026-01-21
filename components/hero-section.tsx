"use client";

import { Github, Linkedin, Mail, Twitter, ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      {/* モダンな背景グラデーション */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 slide-in-from-bottom-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <p className="text-primary text-sm font-medium tracking-wide">
            Web Developer
          </p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-tight slide-in-from-bottom-6 delay-150">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            山田 太郎
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12 slide-in-from-bottom-8 delay-300">
          アクセシブルで美しいデジタル体験を創り出すことに情熱を持つフロントエンドエンジニアです。
          <br className="hidden md:block" />
          デザインと開発の交差点で、パフォーマンスと使いやすさを両立したWebサイトを構築しています。
        </p>

        <div className="flex flex-wrap gap-4 mb-16 slide-in-from-bottom-10 delay-500">
          <Button
            asChild
            size="lg"
            className="group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a href="#contact">
              お問い合わせ
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-2"
          >
            <a href="#skills">
              スキルを見る
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="group shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <a href="#">
              <Download className="mr-2 w-4 h-4" />
              ポートフォリオを見る
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-6 slide-in-from-bottom-12 delay-700">
          <span className="text-sm text-muted-foreground font-medium">Follow me:</span>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="group relative p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <social.icon className="w-5 h-5 relative z-10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
