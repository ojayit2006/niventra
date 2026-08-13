"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";

export default function CountUp({
  value,
  suffix = "",
  duration = 1.6,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [inView, value, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
