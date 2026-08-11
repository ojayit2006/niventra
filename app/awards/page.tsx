import type { Metadata } from "next";
import { Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import CredentialCard from "@/components/ui/CredentialCard";
import Reveal from "@/components/ui/Reveal";
import { awards } from "@/data/content";

export const metadata: Metadata = { title: "Awards & Recognition" };

export default function AwardsPage() {
  return (
    <>
      <PageHero eyebrow={awards.eyebrow} title="A career marked by recognition" lede={awards.headline} />

      <div className="divide-y divide-line">
        {awards.categories.map((cat, ci) => (
          <section key={cat.key} className={ci % 2 === 1 ? "bg-paper-tint" : ""}>
            <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
              <Reveal>
                <div className="flex items-center gap-3">
                  <Award className="text-gold" size={22} />
                  <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{cat.title}</h2>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
                {cat.images.map((src) => (
                  <CredentialCard key={src} src={src} />
                ))}
              </Reveal>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
