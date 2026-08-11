"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/content";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const mobile = String(data.get("mobile") ?? "");
    const query = String(data.get("query") ?? "");

    const subject = `Enquiry from ${name || "NIVENTRA website"}`;
    const body = [`Name: ${name}`, `Email: ${email}`, `Mobile number: ${mobile}`, "", "Query:", query].join("\n");

    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono-label text-[0.7rem] uppercase tracking-[0.14em] text-slate">Name</span>
          <input
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-navy"
            placeholder="Your full name"
          />
        </label>
        <label className="block">
          <span className="font-mono-label text-[0.7rem] uppercase tracking-[0.14em] text-slate">Email</span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-navy"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-mono-label text-[0.7rem] uppercase tracking-[0.14em] text-slate">Mobile number</span>
        <input
          name="mobile"
          type="tel"
          className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-navy"
          placeholder="+91 00000 00000"
        />
      </label>

      <label className="block">
        <span className="font-mono-label text-[0.7rem] uppercase tracking-[0.14em] text-slate">Query</span>
        <textarea
          name="query"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-navy"
          placeholder="Tell us what you're looking for support with"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-panel transition-transform hover:-translate-y-0.5 hover:bg-navy-deep"
      >
        Send Enquiry <Send size={15} />
      </button>

      {sent && (
        <p className="font-mono-label text-[0.72rem] uppercase tracking-[0.12em] text-teal">
          Opening your email client to send this enquiry to {site.contactEmail}…
        </p>
      )}
    </form>
  );
}
