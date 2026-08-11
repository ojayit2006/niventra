import type { ReactNode } from "react";
import CurrentLine from "./CurrentLine";

export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper-tint">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink text-balance-tight sm:text-5xl">
          {title}
        </h1>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{lede}</p>}
        {children}
        <CurrentLine tone="gold" className="mt-10 max-w-xs" />
      </div>
    </section>
  );
}
