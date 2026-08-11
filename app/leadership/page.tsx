import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { leadership } from "@/data/content";

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

export default function LeadershipPage() {
  const { founder, team } = leadership;

  return (
    <>
      <PageHero eyebrow={leadership.eyebrow} title="The people behind NIVENTRA" />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-panel shadow-panel-lg lg:mx-0">
            <Image src={founder.photo} alt={founder.name} fill className="object-cover" />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">{founder.role}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-ink sm:text-4xl">{founder.name}</h2>
            <div className="mt-6 space-y-4">
              {founder.bio.map((p) => (
                <p key={p} className="text-base leading-relaxed text-ink-soft">
                  {p}
                </p>
              ))}
            </div>
            <p className="font-mono-label mt-8 border-t border-line pt-5 text-[0.72rem] leading-relaxed text-slate-light">
              {founder.disclaimer}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-16 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <Card className="flex items-center gap-5 p-7">
                <span className="font-display flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(150deg,#1230b5,#2bb6ce)] text-lg font-semibold text-white">
                  {initials(member.name)}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{member.name}</p>
                  <p className="eyebrow mt-1">{member.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
