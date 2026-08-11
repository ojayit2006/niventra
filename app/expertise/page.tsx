import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CredentialCard from "@/components/ui/CredentialCard";
import CurrentLine from "@/components/CurrentLine";
import Reveal from "@/components/ui/Reveal";
import { expertise } from "@/data/content";

export const metadata: Metadata = { title: "Expertise" };

function BulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Gallery({ images }: { images: string[] }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {images.map((src) => (
        <CredentialCard key={src} src={src} />
      ))}
    </div>
  );
}

export default function ExpertisePage() {
  const { capabilityBuilding, governance, strategicEngagement } = expertise;

  return (
    <>
      <PageHero eyebrow={expertise.eyebrow} title={expertise.headline} />

      {/* Capability Building */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Pillar One" title={capabilityBuilding.title} lede={capabilityBuilding.intro} />
          <BulletGrid items={capabilityBuilding.items} />
          <Gallery images={capabilityBuilding.images} />
        </Reveal>
      </section>

      {/* Governance */}
      <section className="border-y border-line bg-paper-tint">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="Pillar Two" title={governance.title} lede={governance.intro} />
            <BulletGrid items={governance.items} />
            <Gallery images={governance.images} />
          </Reveal>
        </div>
      </section>

      {/* Strategic Scientific Engagement */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Pillar Three" title={strategicEngagement.title} lede={strategicEngagement.intro} />
        </Reveal>

        <div className="mt-14 space-y-16">
          {strategicEngagement.stages.map((stage, i) => (
            <Reveal key={stage.key} delay={i * 0.08}>
              <div className="flex items-center gap-4">
                <span className="inline-flex h-3 w-3 shrink-0 rounded-full border-2 border-gold bg-paper" />
                <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{stage.label}</h3>
              </div>
              <CurrentLine tone={i === 1 ? "gold" : "teal"} className="mt-4 max-w-xs" />
              {stage.intro && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate">{stage.intro}</p>}
              <BulletGrid items={stage.items} />
              <Gallery images={stage.images} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-navy-deep">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
          <Reveal>
            <p className="eyebrow text-gold-light">Expertise Snapshot</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Scientific engagement, illustrated
            </h2>
            <div className="relative mt-8 aspect-[1376/768] w-full overflow-hidden rounded-panel shadow-panel-lg">
              <Image
                src="/images/deck/expertise-overview.jpg"
                alt="Applying senior medical judgment to the friction points that matter most: launch readiness, evidence strategy, capability transformation"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
