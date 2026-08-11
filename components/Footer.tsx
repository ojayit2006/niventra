import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 opacity-[0.07]">
        <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain invert" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2.5">
              <span className="relative h-10 w-10 shrink-0">
                <Image src="/logo/niventra-icon.png" alt="NIVENTRA" fill className="object-contain" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-white">NIVENTRA</span>
                <span className="font-mono-label text-[0.55rem] uppercase tracking-[0.22em] text-white/55">
                  Medical Affairs
                </span>
              </span>
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {site.tagline}. A founder-led advisory, evidence and capability-building partner for
              pharmaceutical organisations.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold-light">Connect</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={`mailto:${site.contactEmail}`} className="transition-colors hover:text-white">
                  {site.contactEmail}
                </a>
              </li>
              <li>{site.domain}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NIVENTRA Medical Affairs LLP. All rights reserved.</p>
          <p className="max-w-xl leading-relaxed sm:text-right">
            Former employer names referenced across this site describe Dr Nivedita Telang&apos;s professional
            experience only. NIVENTRA Medical Affairs LLP is independent and is not affiliated with,
            endorsed by, or authorised to represent those organisations.
          </p>
        </div>
      </div>
    </footer>
  );
}
