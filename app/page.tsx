import Image from "next/image";
import { ArrowRight, Quote, Rocket, Target, Users, Compass, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CurrentLine from "@/components/CurrentLine";
import Reveal from "@/components/ui/Reveal";
import { about, services, leadership, teaser, site } from "@/data/content";

const teaserIcons = { rocket: Rocket, target: Target, users: Users } as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h1 className="font-display mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-ink text-balance-tight sm:text-5xl lg:text-[3.4rem]">
              {about.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">{about.lede}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/expertise">
                Explore Expertise <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>

            <div className="mt-12 flex items-end gap-6 border-t border-line pt-8">
              <div className="shrink-0">
                <span className="font-display block text-6xl font-bold leading-none tracking-tight text-navy sm:text-7xl">
                  {about.stat.value}
                </span>
                <span className="font-mono-label mt-1 block text-base tracking-[0.02em] text-gold">
                  {about.stat.unit}
                </span>
              </div>
              <span className="max-w-xs text-sm leading-snug text-slate">{about.stat.label}</span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-panel border border-line bg-white shadow-panel-lg">
              <div className="absolute inset-12 sm:inset-16">
                <Image src="/logo/niventra-full.png" alt="NIVENTRA Medical Affairs" fill className="object-contain" priority />
              </div>
              <div className="absolute inset-x-10 bottom-8 sm:inset-x-14">
                <CurrentLine tone="gold" />
              </div>
            </div>
            <p className="font-mono-label mt-5 text-center text-base tracking-[0.02em] text-slate">
              {site.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strategic engine teaser */}
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-5xl px-6 pb-28 pt-20 text-center sm:px-8 sm:pb-32 sm:pt-24">
          <Reveal>
            <p className="font-mono-label text-base font-semibold tracking-[0.02em] text-gold-light">
              {teaser.eyebrow}
            </p>
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-3xl font-bold leading-[1.15] text-white sm:text-5xl">
              Medical Affairs, elevated to a <span className="text-gold-light">strategic engine.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70">{teaser.subhead}</p>
            <CurrentLine tone="gold" className="mx-auto mt-10 max-w-xs" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto -mt-16 max-w-5xl px-6 pb-20 sm:-mt-20 sm:px-8">
          <div className="rounded-panel border border-line bg-white p-7 shadow-panel-lg sm:p-12">
            <p className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              {teaser.sectionTitle}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate sm:text-base">{teaser.sectionIntro}</p>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {teaser.pillars.map((pillar, i) => {
                const accent = ["var(--color-navy)", "var(--color-teal)", "var(--color-gold)"][i % 3];
                const PillarIcon = teaserIcons[pillar.icon as keyof typeof teaserIcons];
                return (
                  <div key={pillar.title} className="border-t-2 pt-5" style={{ borderColor: accent }}>
                    <PillarIcon size={22} style={{ color: accent }} strokeWidth={1.75} />
                    <p className="font-display mt-4 text-base font-semibold text-ink">{pillar.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col items-center gap-4 rounded-card bg-[linear-gradient(150deg,#0b1a45,#1230b5)] p-6 text-center sm:flex-row sm:text-left">
              <Compass size={28} className="shrink-0 text-gold-light" strokeWidth={1.75} />
              <div className="flex items-center gap-4">
                <span className="font-display text-3xl font-bold text-gold-light sm:text-4xl">
                  {about.stat.value} <span className="text-lg">{about.stat.unit}</span>
                </span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/75">{about.stat.label}</p>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-line pt-8 sm:flex-row">
              <p className="font-display max-w-md text-lg font-semibold text-ink">{teaser.closing}</p>
              <Button href="/contact">
                <MessageCircle size={16} /> {teaser.closingCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* About narrative */}
      <section className="border-y border-line bg-paper-tint">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8">
          <Reveal>
            <p className="font-display text-2xl font-medium italic leading-relaxed text-ink sm:text-3xl">
              &ldquo;{about.paragraphs[1]}&rdquo;
            </p>
            <CurrentLine tone="teal" className="mx-auto mt-8 max-w-xs" />
            <p className="mt-8 text-base leading-relaxed text-slate">{about.paragraphs[0]}</p>
          </Reveal>
        </div>
      </section>

      {/* Lifecycle teaser */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow={services.eyebrow} title={services.headline} />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {services.lifecycle.map((stage, i) => {
              const accent = [
                { tone: "navy", bar: "var(--color-navy)", text: "text-navy" },
                { tone: "teal", bar: "var(--color-teal)", text: "text-teal" },
                { tone: "gold", bar: "var(--color-gold)", text: "text-gold" },
              ][i % 3];
              return (
                <Reveal key={stage.key} delay={i * 0.1}>
                  <Card className="h-full overflow-hidden p-7">
                    <div className="-mx-7 -mt-7 mb-5 h-1.5" style={{ backgroundColor: accent.bar }} />
                    <p className={`font-mono-label text-base font-semibold tracking-[0.02em] ${accent.text}`}>
                      {stage.label}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {stage.items.slice(0, 3).map((item) => (
                        <li key={item} className="text-sm leading-snug text-ink-soft">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <Button href="/services" variant="ghost">
              See the full lifecycle <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Founder teaser */}
      <section className="border-t border-line bg-navy-deep">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-panel shadow-panel-lg lg:mx-0">
            <Image
              src={leadership.founder.photo}
              alt={leadership.founder.name}
              fill
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Quote className="text-gold" size={32} strokeWidth={1.5} />
            <p className="font-display mt-4 text-2xl font-medium leading-snug text-white sm:text-[1.75rem]">
              {about.closing}
            </p>
            <p className="mt-6 text-base font-semibold tracking-[0.02em] text-gold-light">
              {leadership.founder.name}, {leadership.founder.role}
            </p>
            <Button href="/leadership" variant="outline-light" className="mt-8">
              Meet the Team <ArrowRight size={16} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
