type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className={`eyebrow ${tone === "light" ? "text-gold-light" : ""}`}>{eyebrow}</p>
      <h2
        className={`font-display mt-3 text-3xl font-semibold tracking-tight text-balance-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${tone === "light" ? "text-white/70" : "text-slate"}`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
