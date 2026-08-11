import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Globe } from "lucide-react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/data/content";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {contact.headline}
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-slate">
            Share a few details about your organisation and what you need — we&apos;ll follow up directly.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-panel bg-[linear-gradient(150deg,#0b1a45,#1230b5)] p-7 shadow-panel-lg">
            <div className="absolute -right-10 -top-10 h-40 w-40 opacity-10">
              <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain invert" />
            </div>
            <div className="relative z-10 space-y-4 text-sm text-white/85">
              <a href={`mailto:${site.contactEmail}`} className="flex items-center gap-3 hover:text-white">
                <Mail size={16} className="text-gold-light" /> {site.contactEmail}
              </a>
              <span className="flex items-center gap-3">
                <Globe size={16} className="text-gold-light" /> {site.domain}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="p-7 sm:p-9">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
