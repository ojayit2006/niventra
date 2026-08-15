import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Rocket,
  TrendingUp,
  ClipboardCheck,
  FileSearch,
  Users,
  Lightbulb,
  CheckCircle2,
  MessageSquare,
  GraduationCap,
  BookOpen,
  Sparkles,
  UserCheck,
  ShieldCheck,
  Activity,
  FlaskConical,
  Mic,
  MessageCircle,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import CurrentLine from "@/components/CurrentLine";
import { services } from "@/data/content";

export const metadata: Metadata = { title: "Services" };

const stageMeta: Record<string, { icon: LucideIcon; tone: "navy" | "teal" | "gold"; color: string; text: string }> = {
  prelaunch: { icon: Compass, tone: "navy", color: "var(--color-navy)", text: "text-navy" },
  launch: { icon: Rocket, tone: "teal", color: "var(--color-teal)", text: "text-teal" },
  postlaunch: { icon: TrendingUp, tone: "gold", color: "var(--color-gold)", text: "text-gold" },
};

const itemIconRules: [RegExp, LucideIcon][] = [
  [/assessment/i, ClipboardCheck],
  [/evidence gap/i, FileSearch],
  [/kol/i, Users],
  [/rationale/i, Lightbulb],
  [/readiness/i, CheckCircle2],
  [/narrative/i, MessageSquare],
  [/capability/i, GraduationCap],
  [/education/i, BookOpen],
  [/actionable insights/i, Sparkles],
  [/msl/i, UserCheck],
  [/governance/i, ShieldCheck],
  [/real world evidence/i, Activity],
  [/investigator initiated study/i, FlaskConical],
  [/speaker/i, Mic],
  [/communication/i, MessageCircle],
];

function itemIcon(text: string): LucideIcon {
  const match = itemIconRules.find(([re]) => re.test(text));
  return match ? match[1] : CheckCircle2;
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={services.eyebrow}
        title={services.headline}
        lede="Medical strategy that moves with the product, from the first evidence gap to the last mile of post-launch insight."
      />

      {/* Lifecycle overview strip */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
          <div className="relative hidden sm:block">
            <div className="absolute inset-x-0 top-2 -translate-y-1/2">
              <CurrentLine tone="teal" />
            </div>
            <div className="relative grid grid-cols-3 gap-8">
              {services.lifecycle.map((stage) => {
                const meta = stageMeta[stage.key];
                return (
                  <div key={stage.key} className="flex flex-col items-center gap-3 text-center">
                    <span
                      className="inline-flex h-4 w-4 rounded-full border-2 bg-paper"
                      style={{ borderColor: meta.color }}
                    />
                    <p className={`font-mono-label text-base font-semibold tracking-[0.02em] ${meta.text}`}>
                      {stage.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Per-stage sections */}
      <div className="divide-y divide-line">
        {services.lifecycle.map((stage, i) => {
          const meta = stageMeta[stage.key];
          const StageIcon = meta.icon;
          return (
            <section key={stage.key} className={i % 2 === 1 ? "bg-paper-tint" : ""}>
              <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
                <Reveal>
                  <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <StageIcon size={28} style={{ color: meta.color }} strokeWidth={1.75} />
                        <p className={`font-mono-label text-base font-semibold tracking-[0.02em] ${meta.text}`}>
                          Stage {String(i + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <h2 className="font-display mt-4 text-3xl font-bold text-ink sm:text-4xl">{stage.label}</h2>
                      <p className="mt-4 max-w-sm text-base leading-relaxed text-slate">{stage.intro}</p>
                      <CurrentLine tone={meta.tone} className="mt-8 max-w-[10rem]" />
                    </div>

                    <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {stage.items.map((item) => {
                        const ItemIcon = itemIcon(item);
                        return (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                            <ItemIcon size={17} className={`mt-0.5 shrink-0 ${meta.text}`} strokeWidth={1.75} />
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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
