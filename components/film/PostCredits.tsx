"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, MOTION } from "@/lib/gsap";
import { blurIn, impact, useScene } from "@/lib/fx";
import { site } from "@/data/film";
import { openResume } from "@/lib/resume";

/** After the credits: black, a projector flicker, and the one line that matters. */
export default function PostCredits() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked lead as the scene covers the end of the credits.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        gsap.fromTo(innerRef.current, { y: "-18vh" }, {
          y: 0, ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top top", scrub: true },
        });
      });
    },
    { scope: ref },
  );

  useScene(ref, ({ tl, q }) => {
    const light = q(".light");
    tl.set(light, { opacity: 0 }, 0);
    [[0.2, 0.5], [0.27, 0.1], [0.4, 0.8], [0.47, 1]].forEach(([at, v]) => tl.set(light, { opacity: v }, at));
    blurIn(tl, q(".a"), 0.6, 0.2);
    blurIn(tl, q(".b"), 1.6, 0.2);
    impact(tl, q(".cam"), q(".flash"), 1.6, 8);
    blurIn(tl, q(".mail"), 2.4);
    blurIn(tl, q(".links"), 2.8);
    blurIn(tl, q(".foot"), 3.2);
  }, { start: "top 60%" });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section ref={ref} id="post" data-scene="SC 09 · After the Credits" className="scene" style={{ background: "var(--post-ground)", marginTop: "-50vh", zIndex: 2 }}>
      <div className="light left-[25vw] top-[10vh] h-[80vh] w-[50vw] opacity-0" style={{ background: "radial-gradient(closest-side, rgba(26,38,51,0.5), rgba(26,38,51,0))" }} />
      <div ref={innerRef} className="cam scene-inner flex flex-col items-center text-center">
        <h2 className="title-caps whitespace-nowrap" style={{ fontSize: "clamp(28px, 5.8vw, 112px)", letterSpacing: "0.3em", paddingLeft: "0.3em", lineHeight: 1.2 }}>
          <span className="a fx block">Your project.</span>
          <span className="b fx block text-amber">Coming soon.</span>
        </h2>

        <button type="button" onClick={copy} className="mail fx mono mt-10 text-steel hover:text-ink"
          style={{ fontSize: "clamp(13px, 1.6vw, 32px)", textTransform: "none", letterSpacing: "0.14em" }}
          aria-live="polite">
          {copied ? "Copied to clipboard" : site.email}
        </button>

        <div className="links fx mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${site.email}`} className="film-link amber">Let&apos;s talk →</a>
          <a href={site.github} className="film-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={site.linkedin} className="film-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={site.resume} className="film-link" onClick={(e) => { e.preventDefault(); openResume(e.currentTarget); }}>Résumé</a>
        </div>

        <p className="foot fx mono mt-[clamp(40px,10vh,120px)] text-[11px] text-[#4f5d6a]" style={{ letterSpacing: "0.2em" }}>
          © 2026 {site.name} · Kolkata
        </p>
      </div>
      <div className="flash" />
    </section>
  );
}
