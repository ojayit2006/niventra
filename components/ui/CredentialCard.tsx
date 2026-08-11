import Image from "next/image";

export default function CredentialCard({
  src,
  caption,
  aspect = "aspect-[4/3]",
}: {
  src: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure className="group">
      <div className={`relative overflow-hidden rounded-card border border-line bg-white p-2 shadow-panel ${aspect}`}>
        <div className="relative h-full w-full overflow-hidden rounded-[0.85rem]">
          <Image
            src={src}
            alt={caption ?? "NIVENTRA credential"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          />
        </div>
        <span className="absolute left-2.5 top-2.5 h-3 w-3 border-l-2 border-t-2 border-gold" />
        <span className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-gold" />
      </div>
      {caption && (
        <figcaption className="font-mono-label mt-2.5 text-[0.72rem] leading-snug text-slate">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
