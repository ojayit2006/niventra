import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import CurrentLine from "@/components/CurrentLine";
import Reveal from "@/components/ui/Reveal";
import { about, services, leadership } from "@/data/content";

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

            <div className="mt-12 flex items-center gap-5 border-t border-line pt-8">
              <span className="font-display text-4xl font-semibold text-navy">{about.stat.value}</span>
              <span className="max-w-xs text-sm leading-snug text-slate">{about.stat.label}</span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-panel bg-[linear-gradient(150deg,#0b1a45_0%,#1230b5_50%,#2bb6ce_120%)] shadow-panel-lg">
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: "radial-gradient(circle at 30% 20%, white 0, transparent 55%)",
              }} />
              <div className="absolute inset-8 sm:inset-12">
                <Image src="/logo/niventra-icon.png" alt="The NIVENTRA mark" fill className="object-contain drop-shadow-2xl" priority />
              </div>
              <div className="absolute inset-x-8 bottom-8 sm:inset-x-12">
                <CurrentLine tone="gold" />
              </div>
            </div>
            <p className="font-mono-label mt-5 text-center text-[0.7rem] uppercase tracking-[0.2em] text-slate">
              Founder-Led · Evidence-First · Governance-Ready
            </p>
          </Reveal>
        </div>
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
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow={services.eyebrow} title={services.headline} />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {services.lifecycle.map((stage, i) => (
            <Reveal key={stage.key} delay={i * 0.1}>
              <Card className="h-full p-7">
                <p className="eyebrow">{stage.label}</p>
                <ul className="mt-4 space-y-2.5">
                  {stage.items.slice(0, 3).map((item) => (
                    <li key={item} className="text-sm leading-snug text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-8 text-center">
          <Button href="/services" variant="ghost">
            See the full lifecycle <ArrowRight size={16} />
          </Button>
        </Reveal>
      </section>

      {/* Founder teaser */}
      <section className="border-t border-line bg-navy-deep">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-panel shadow-panel-lg lg:mx-0">
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
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-gold-light">
              {leadership.founder.name} — {leadership.founder.role}
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
