import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/ui/Reveal";
import { leadership } from "@/data/content";
import { imageAspect } from "@/data/imageAspect";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Leadership Team" };

function initials(name: string) {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function LinkedInLink({ url }: { url: string }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-[0.02em] text-navy transition-colors hover:text-teal"
    >
      <ExternalLink size={14} /> View Profile
    </a>
  );
}

export default function LeadershipPage() {
  const { founder, team } = leadership;

  return (
    <>
      <PageHero eyebrow={leadership.eyebrow} title="The people behind NIVENTRA" />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div
              className="relative mx-auto w-full max-w-xs overflow-hidden rounded-panel shadow-panel-lg sm:max-w-sm lg:mx-0"
              style={{ aspectRatio: imageAspect[founder.photo] ?? 4 / 5 }}
            >
              <Image src={founder.photo} alt={founder.name} fill className="object-contain" />
            </div>
            {founder.linkedin && (
              <div className="mt-4 flex justify-center lg:justify-start">
                <LinkedInLink url={founder.linkedin} />
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">{founder.role}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl">{founder.name}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">{founder.intro}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
              {founder.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-display text-3xl font-bold text-navy sm:text-4xl">{h.value}</p>
                  <p className="mt-1 text-xs leading-snug text-slate">{h.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {founder.bio.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" strokeWidth={1.75} />
                  {point}
                </li>
              ))}
            </ul>

            <p className="font-mono-label mt-8 border-t border-line pt-5 text-[0.72rem] leading-relaxed text-slate-light">
              {founder.disclaimer}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-16 border-t border-line pt-16">
          <SectionHeading eyebrow={leadership.founder.proof.eyebrow} title={leadership.founder.proof.headline} />

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {leadership.founder.proof.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-navy sm:text-4xl">{stat.value}</p>
                <p className="mt-1.5 max-w-[15rem] text-sm leading-snug text-slate">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-line pt-10">
            <p className="font-mono-label text-sm tracking-[0.02em] text-slate-light">
              {leadership.founder.proof.logosIntro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
              {leadership.founder.proof.logos.map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  className="h-8 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9"
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 space-y-14 border-t border-line pt-16">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="grid gap-6 border-b border-line pb-14 last:border-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
                <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                  {member.photo ? (
                    <span
                      className="relative w-48 shrink-0 overflow-hidden rounded-2xl bg-paper-tint shadow-panel sm:w-72"
                      style={{ aspectRatio: imageAspect[member.photo] ?? 1 }}
                    >
                      <Image src={member.photo} alt={member.name} fill className="object-contain" />
                    </span>
                  ) : (
                    <span className="font-display flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(150deg,#1230b5,#2bb6ce)] text-2xl font-semibold text-white sm:h-36 sm:w-36">
                      {initials(member.name)}
                    </span>
                  )}
                  <div className="sm:mt-3">
                    <p className="font-display text-lg font-semibold text-ink">{member.name}</p>
                    <p className="eyebrow mt-1">{member.role}</p>
                  </div>
                </div>
                <div>
                  <ul className="space-y-2.5">
                    {member.bio.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <LinkedInLink url={member.linkedin} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
