import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import CurrentLine from "@/components/CurrentLine";
import { services } from "@/data/content";

export const metadata: Metadata = { title: "Services" };

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
          {services.lifecycle.map((stage, i) => (
            <Reveal key={stage.key} delay={i * 0.12}>
              <Card className="h-full p-8">
                <h3 className="font-display text-xl font-semibold text-ink">{stage.label}</h3>
                <ul className="mt-5 space-y-3">
                  {stage.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-16 max-w-2xl text-center">
          <p className="font-display text-2xl italic leading-relaxed text-ink">&ldquo;{services.closing}&rdquo;</p>
        </Reveal>
      </section>
    </>
  );
}
