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
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import CurrentLine from "@/components/CurrentLine";
import { services } from "@/data/content";

export const metadata: Metadata = { title: "Services" };

const stageMeta: Record<string, { icon: LucideIcon; bar: string; text: string }> = {
  prelaunch: { icon: Compass, bar: "var(--color-navy)", text: "text-navy" },
  launch: { icon: Rocket, bar: "var(--color-teal)", text: "text-teal" },
  postlaunch: { icon: TrendingUp, bar: "var(--color-gold)", text: "text-gold" },
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
        lede="Medical strategy that moves with the product — from the first evidence gap to the last mile of post-launch insight."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="relative mb-8 hidden sm:block">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <CurrentLine tone="teal" />
          </div>
          <div className="relative grid grid-cols-3 gap-8">
            {services.lifecycle.map((stage) => (
              <div key={stage.key} className="flex justify-center">
                <span className="inline-flex h-4 w-4 rounded-full border-2 border-gold bg-paper" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {services.lifecycle.map((stage, i) => {
            const meta = stageMeta[stage.key];
            const StageIcon = meta.icon;
            return (
              <Reveal key={stage.key} delay={i * 0.12}>
                <Card className="h-full overflow-hidden p-8">
                  <div className="-mx-8 -mt-8 mb-6 h-1.5" style={{ backgroundColor: meta.bar }} />
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `color-mix(in srgb, ${meta.bar} 14%, white)` }}
                  >
                    <StageIcon size={22} style={{ color: meta.bar }} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-ink">{stage.label}</h3>
                  <ul className="mt-5 space-y-3.5">
                    {stage.items.map((item) => {
                      const ItemIcon = itemIcon(item);
                      return (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                          <ItemIcon size={15} className={`mt-0.5 shrink-0 ${meta.text}`} strokeWidth={1.75} />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-display text-2xl italic leading-relaxed text-ink">&ldquo;{services.closing}&rdquo;</p>
        </Reveal>
      </section>
    </>
  );
}
