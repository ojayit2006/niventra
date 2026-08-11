"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-panel backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3.5 py-2 text-[0.83rem] font-medium transition-colors ${
                  active ? "text-navy" : "text-ink-soft hover:text-navy"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-[2px] rounded-full bg-gold" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-navy px-5 py-2.5 text-[0.83rem] font-semibold text-white shadow-panel transition-transform hover:-translate-y-0.5 hover:bg-navy-deep"
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-2 shadow-panel-lg lg:hidden">
          <div className="flex flex-col">
            {nav.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`border-b border-line py-3.5 text-[0.95rem] font-medium ${
                    active ? "text-navy" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
