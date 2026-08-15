import Image from "next/image";

export default function BackgroundLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      <div className="absolute -right-[18vw] top-[8vh] h-[52vmax] w-[52vmax] opacity-[0.05] sm:-right-[10vw]">
        <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain" priority />
      </div>

      <div className="absolute -left-[26vw] bottom-[-18vh] h-[46vmax] w-[46vmax] rotate-12 opacity-[0.035]">
        <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}
