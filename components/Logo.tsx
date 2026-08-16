import Image from "next/image";

export default function Logo() {
  return (
    <span className="relative block h-14 w-[4.4rem] shrink-0 sm:h-16 sm:w-[5rem]">
      <Image src="/logo/niventra-full.png" alt="NIVENTRA Medical Affairs" fill className="object-contain" priority />
    </span>
  );
}
