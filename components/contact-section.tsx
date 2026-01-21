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
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <p className="text-primary text-sm tracking-widest uppercase mb-4">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          お問い合わせ
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl">
          プロジェクトのご相談やお仕事のご依頼など、お気軽にご連絡ください。
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {isSubmitted ? (
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">送信完了</span>
                </div>
                <p className="text-muted-foreground">
                  お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="山田 花子"
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    required
                    className="bg-secondary border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">メッセージ</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="お問い合わせ内容をご記入ください..."
                    rows={5}
                    required
                    className="bg-secondary border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
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
            <div>
              <h3 className="font-medium text-foreground mb-2">メール</h3>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                hello@example.com
              </a>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">所在地</h3>
              <p className="text-muted-foreground">東京都, 日本</p>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-2">対応可能</h3>
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
