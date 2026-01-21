"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent -z-10" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            Contact
          </p>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          お問い合わせ
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          プロジェクトのご相談やお仕事のご依頼など、お気軽にご連絡ください。
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm">
            {isSubmitted ? (
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3 text-primary mb-3">
                  <Mail className="w-6 h-6" />
                  <span className="font-semibold text-lg">送信完了</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">お名前</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="山田 花子"
                    required
                    className="bg-background border-border hover:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">メールアドレス</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                    className="bg-background border-border hover:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">メッセージ</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="お問い合わせ内容をご記入ください..."
                    rows={5}
                    required
                    className="bg-background border-border resize-none hover:border-primary/50 transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  {isSubmitting ? (
                    "送信中..."
                  ) : (
                    <>
                      送信する
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <h3 className="font-semibold text-foreground mb-3 text-lg">メール</h3>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4" />
                <span className="group-hover:underline">hello@example.com</span>
              </a>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <h3 className="font-semibold text-foreground mb-3 text-lg">所在地</h3>
              <p className="text-muted-foreground">東京都, 日本</p>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <h3 className="font-semibold text-foreground mb-3 text-lg">対応可能</h3>
              <p className="text-muted-foreground">
                フリーランス・業務委託・正社員
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
