import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundLayer from "@/components/BackgroundLayer";
import { site } from "@/data/content";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.fullName} | ${site.tagline}`,
    template: `%s | ${site.fullName}`,
  },
  description:
    "NIVENTRA is a founder-led Medical Affairs advisory, evidence and capability-building partner for pharmaceutical organisations, led by Dr Nivedita Telang.",
  keywords: [
    "Medical Affairs",
    "Medical Affairs advisory",
    "pharmaceutical medical strategy",
    "KOL engagement",
    "medical education",
    "NIVENTRA",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plexSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-body text-ink antialiased">
        <BackgroundLayer />
        <Navbar />
        <main className="relative z-10 flex-1 pt-20">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
