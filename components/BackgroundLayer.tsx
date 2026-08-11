import Image from "next/image";

/**
 * Persistent watermark shown behind every page: the NIVENTRA mark, rendered
 * as a flat navy silhouette (not the full-colour lockup) so it stays a quiet
 * texture rather than competing with page content.
 */
export default function BackgroundLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f6f8fc_55%,#eef2f9_100%)]" />

      <div className="absolute -right-[18vw] top-[8vh] h-[52vmax] w-[52vmax] opacity-[0.05] sm:-right-[10vw]">
        <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain" priority />
      </div>

      <div className="absolute -left-[26vw] bottom-[-18vh] h-[46vmax] w-[46vmax] rotate-12 opacity-[0.035]">
        <Image src="/logo/niventra-icon-mono.png" alt="" fill className="object-contain" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,26,69,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(11,26,69,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
