import Image from "next/image";

export default function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const textColor = tone === "light" ? "text-white" : "text-ink";
  const subColor = tone === "light" ? "text-white/60" : "text-slate";

  return (
    <span className="flex items-center gap-2.5">
      <span className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
        <Image src="/logo/niventra-icon.png" alt="NIVENTRA" fill className="object-contain" priority />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.45rem] font-bold tracking-tight sm:text-[1.65rem] ${textColor}`}>
          NIVENTRA
        </span>
        <span className={`font-mono-label text-[0.85rem] tracking-[0.02em] ${subColor}`}>
          Medical Affairs <span className="opacity-70">LLP</span>
        </span>
      </span>
    </span>
  );
}
