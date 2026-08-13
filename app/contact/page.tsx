import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Globe, Phone, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";
import { contact, site, about } from "@/data/content";

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

          <div className="mt-8 flex items-center gap-3 border-y border-line py-5">
            <span className="font-display text-3xl font-bold text-navy">{about.stat.value}</span>
            <span className="max-w-[14rem] text-xs leading-snug text-slate">{about.stat.label}</span>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-panel bg-[linear-gradient(150deg,#0b1a45,#1230b5)] p-7 shadow-panel-lg">
            <div className="absolute -right-10 -top-10 h-40 w-40 opacity-10">
              <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain invert" sizes="160px" />
            </div>
            <div className="relative z-10 space-y-4 text-sm text-white/85">
              <a href={`mailto:${site.contactEmail}`} className="flex items-center gap-3 hover:text-white">
                <Mail size={16} className="text-gold-light" /> {site.contactEmail}
              </a>
              {contact.phone && (
                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 hover:text-white">
                  <Phone size={16} className="text-gold-light" /> {contact.phone}
                </a>
              )}
              {contact.address && (
                <span className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-gold-light" /> {contact.address}
                </span>
              )}
              <span className="flex items-center gap-3">
                <Globe size={16} className="text-gold-light" /> {site.domain}
              </span>
            </div>
          </div>

          <ol className="mt-10 space-y-5">
            {contact.steps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper-tint text-sm font-semibold text-navy">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-ink-soft">{step}</p>
              </li>
            ))}
          </ol>
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
