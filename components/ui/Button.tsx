import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-navy-deep shadow-panel hover:-translate-y-0.5",
  secondary: "bg-white text-navy border border-line hover:border-navy/40 hover:-translate-y-0.5",
  "outline-light": "bg-transparent text-white border border-white/25 hover:border-white/60 hover:-translate-y-0.5",
  ghost: "text-navy hover:text-navy-deep",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
