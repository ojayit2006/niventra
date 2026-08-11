import Image from "next/image";

export default function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const textColor = tone === "light" ? "text-white" : "text-ink";
  const subColor = tone === "light" ? "text-white/60" : "text-slate";

  return (
    <span className="flex items-center gap-2.5">
      <span className="relative h-9 w-9 shrink-0 sm:h-10 sm:w-10">
        <Image src="/logo/niventra-icon.png" alt="NIVENTRA" fill className="object-contain" priority />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.15rem] font-semibold tracking-tight sm:text-[1.3rem] ${textColor}`}>
          NIVENTRA
        </span>
        <span className={`font-mono-label text-[0.55rem] tracking-[0.22em] uppercase ${subColor}`}>
          Medical Affairs
        </span>
      </span>
    </span>
  );
}
