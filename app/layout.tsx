import type { Metadata } from "next";
import { Montserrat, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/film";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600"],
  variable: "--font-display",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "System Engineer at Tata Consultancy Services. Builder of fast systems: lock-free matching engines, memory engines for AI agents, LLM safety pipelines. A portfolio that plays like a film.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: "A portfolio that doesn't scroll. It plays.",
    images: [{ url: "/ayishik.jpg", width: 1254, height: 1254 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

// Runs before hydration: marks JS as available (so .fx may hide) and arms the
// intro, which plays on every load unless the visitor prefers reduced motion.
const bootScript = `
(function(){
  var d=document.documentElement;d.classList.add('js');
  try{
    var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!rm) d.setAttribute('data-intro','1');
  }catch(e){}
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${plexMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
