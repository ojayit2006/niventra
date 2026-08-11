import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  tint = "white",
}: {
  children: ReactNode;
  className?: string;
  tint?: "white" | "tint";
}) {
  return (
    <div
      className={`rounded-card border border-line ${
        tint === "white" ? "bg-white" : "bg-paper-tint"
      } shadow-panel ${className}`}
    >
      {children}
    </div>
  );
}
