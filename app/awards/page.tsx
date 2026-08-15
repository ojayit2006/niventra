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
            <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24">
              <Reveal>
                <div className="flex items-center gap-2.5">
                  <Award className="text-gold" size={18} strokeWidth={1.75} />
                  <p className="font-mono-label text-base font-semibold tracking-[0.02em] text-gold">
                    Category {String(ci + 1).padStart(2, "0")}
                  </p>
                </div>
                <h2 className="font-display mt-2 text-2xl font-bold text-ink sm:text-3xl">{cat.title}</h2>
                <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-ink-soft sm:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {cat.images.map((src, ii) => (
                  <Reveal key={src} delay={Math.min(ii * 0.06, 0.4)}>
                    <CredentialCard src={src} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
