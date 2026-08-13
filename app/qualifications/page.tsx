import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CredentialCard from "@/components/ui/CredentialCard";
import CountUp from "@/components/ui/CountUp";
import Reveal from "@/components/ui/Reveal";
import { qualifications } from "@/data/content";

export const metadata: Metadata = { title: "Qualifications" };

export default function QualificationsPage() {
  return (
    <>
      <PageHero eyebrow={qualifications.eyebrow} title={qualifications.headline} />

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-28">
        <div className="space-y-20 sm:space-y-24">
          {qualifications.items.map((item, i) => (
            <Reveal key={item.text} delay={Math.min(i * 0.06, 0.3)}>
              <div className="grid gap-6 border-b border-line pb-16 last:border-0 last:pb-0 sm:grid-cols-[auto_1fr_1.3fr] sm:items-start sm:gap-8">
                <span
                  className="font-display select-none text-6xl font-bold leading-none text-navy/10 sm:text-7xl"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display max-w-md text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  {item.text}
                </p>
                {item.images.length > 0 ? (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {item.images.map((src) => (
                      <CredentialCard key={src} src={src} />
                    ))}
                  </div>
                ) : (
                  <p className="font-mono-label self-center text-[0.72rem] uppercase tracking-[0.16em] text-slate-light">
                    Foundational medical degree
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-24 border-t border-line pt-20 sm:mt-28 sm:pt-24">
          <p className="eyebrow text-center">Founder Credentials Snapshot</p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-12 text-center sm:grid-cols-4">
            {qualifications.snapshotStats.map((stat) => (
              <div key={stat.label}>
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display block text-5xl font-bold text-navy sm:text-6xl"
                />
                <p className="font-mono-label mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-slate">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-16 aspect-[1376/768] w-full max-w-4xl overflow-hidden rounded-panel shadow-panel-lg">
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
