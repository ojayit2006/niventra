import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Compass, Rocket, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CurrentLine from "@/components/CurrentLine";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/content";

export const metadata: Metadata = { title: "Services" };

const stageMeta: Record<
  string,
  { icon: LucideIcon; tone: "navy" | "teal" | "gold"; color: string; text: string; bg: string }
> = {
  prelaunch: { icon: Compass, tone: "navy", color: "var(--color-navy)", text: "text-navy", bg: "bg-navy-deep" },
  launch: { icon: Rocket, tone: "teal", color: "var(--color-teal)", text: "text-teal", bg: "bg-teal" },
  postlaunch: { icon: TrendingUp, tone: "gold", color: "var(--color-gold)", text: "text-gold", bg: "bg-gold" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={services.eyebrow}
        title={services.headline}
        lede="Medical strategy that moves with the product, from the first evidence gap to the last mile of post-launch insight."
      />

      {/* Lifecycle overview */}
      <section className="border-b border-line bg-paper-tint">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="At a Glance"
              title="One medical strategy, three connected stages"
              lede="The same scientific thread runs from first evidence gap to last-mile post-launch insight — carried through by a single accountable lead rather than handed off between teams."
            />
          </Reveal>

          <Reveal className="mt-12 grid gap-7 sm:grid-cols-3">
            {services.lifecycle.map((stage, i) => {
              const meta = stageMeta[stage.key];
              const StageIcon = meta.icon;
              return (
                <div
                  key={stage.key}
                  className="overflow-hidden rounded-panel border border-line bg-white shadow-panel-lg"
                >
                  <div className={`flex items-center gap-3.5 px-6 py-5 ${meta.bg}`}>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <StageIcon size={20} className="text-white" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-mono-label text-[0.68rem] tracking-[0.1em] text-white/75">
                        Stage {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="font-display text-xl font-semibold text-white">{stage.label}</p>
                    </div>
                  </div>
                  <ul className="space-y-3.5 px-6 py-6">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${meta.bg}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Per-stage statements */}
      <div className="divide-y divide-line">
        {services.lifecycle.map((stage, i) => {
          const meta = stageMeta[stage.key];
          const StageIcon = meta.icon;
          return (
            <section key={stage.key} className={`relative overflow-hidden ${i % 2 === 1 ? "bg-paper-tint" : ""}`}>
              <p
                aria-hidden
                className="font-display pointer-events-none absolute -top-6 right-6 select-none text-[9rem] font-bold leading-none sm:right-10 sm:text-[13rem]"
                style={{ color: meta.color, opacity: 0.06 }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-28">
                <Reveal>
                  <span
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-panel-lg ${meta.bg}`}
                  >
                    <StageIcon size={28} className="text-white" strokeWidth={1.75} />
                  </span>
                  <p className={`font-mono-label mt-6 text-sm font-semibold tracking-[0.15em] ${meta.text}`}>
                    STAGE {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-5xl">{stage.label}</h2>
                  <CurrentLine tone={meta.tone} className="mx-auto mt-6 max-w-[9rem]" />
                  <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-slate sm:text-xl">
                    {stage.intro}
                  </p>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing */}
      <section className="border-t border-line bg-navy-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              &ldquo;{services.closing}&rdquo;
            </p>
            <Button href="/contact" className="mt-10">
              Talk to NIVENTRA
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
