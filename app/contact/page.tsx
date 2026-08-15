import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contact, site } from "@/data/content";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 sm:py-24">
      <Reveal>
        <p className="eyebrow">{contact.eyebrow}</p>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {contact.headline}
        </h1>

        <div className="relative mx-auto mt-10 max-w-md overflow-hidden rounded-panel bg-[linear-gradient(150deg,#0b1a45,#1230b5)] p-8 shadow-panel-lg">
          <div className="absolute -right-10 -top-10 h-40 w-40 opacity-10">
            <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain invert" sizes="160px" />
          </div>
          <div className="relative z-10 space-y-4 text-sm text-white/85">
            <a href={`mailto:${site.contactEmail}`} className="flex items-center justify-center gap-3 hover:text-white">
              <Mail size={16} className="text-gold-light" /> {site.contactEmail}
            </a>
            <a
              href={`https://${site.domain}`}
              className="flex items-center justify-center gap-3 hover:text-white"
            >
              <Globe size={16} className="text-gold-light" /> {site.domain}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
