"use client";

import { motion } from "framer-motion";

type CurrentLineProps = {
  tone?: "gold" | "teal" | "navy";
  className?: string;
};

const strokes: Record<string, string> = {
  gold: "var(--color-gold)",
  teal: "var(--color-teal)",
  navy: "var(--color-navy)",
};

/**
 * The site's recurring signature: a single current line echoing the wave in
 * the NIVENTRA mark. Used wherever the copy talks about stages, linkage or
 * continuity (lifecycle stages, section transitions, footer).
 */
export default function CurrentLine({ tone = "gold", className = "" }: CurrentLineProps) {
  const color = strokes[tone];
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 24"
      preserveAspectRatio="none"
      className={`h-3 w-full ${className}`}
    >
      <motion.path
        d="M0 16 C 60 2, 110 2, 160 14 C 210 24, 260 24, 310 12 C 360 2, 410 2, 460 14 C 500 22, 550 22, 600 10"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </svg>
  );
}
