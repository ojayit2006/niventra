import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";
import CredentialCard from "@/components/ui/CredentialCard";
import Reveal from "@/components/ui/Reveal";
import { qualifications } from "@/data/content";

export const metadata: Metadata = { title: "Qualifications" };

export default function QualificationsPage() {
  return (
    <>
      <PageHero eyebrow={qualifications.eyebrow} title={qualifications.headline} />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="space-y-14">
          {qualifications.items.map((item, i) => (
            <Reveal key={item.text} delay={Math.min(i * 0.06, 0.3)}>
              <div className="grid gap-6 border-b border-line pb-12 last:border-0 last:pb-0 sm:grid-cols-[1fr_1.4fr] sm:items-start">
                <div className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper-tint text-navy">
                    <GraduationCap size={18} />
                  </span>
                  <p className="text-base font-medium leading-relaxed text-ink">{item.text}</p>
                </div>
                {item.images.length > 0 ? (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {item.images.map((src) => (
                      <CredentialCard key={src} src={src} />
                    ))}
                  </div>
                ) : (
                  <p className="font-mono-label text-[0.72rem] uppercase tracking-[0.16em] text-slate-light">
                    Foundational medical degree
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 border-t border-line pt-16">
          <p className="eyebrow">Founder Credentials Snapshot</p>
          <div className="relative mt-5 aspect-[1376/768] w-full overflow-hidden rounded-panel shadow-panel-lg">
            <Image
              src="/images/deck/qualifications-snapshot.jpg"
              alt="Lifetime impact dashboard: 100+ SKUs, 12+ launches, 800+ KOLs, 45+ DCGI presentations"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
