"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { blurIn, lettersIn, flicker } from "@/lib/fx";
import { lenisStore } from "@/lib/lenis";
import { site } from "@/data/film";

const numStyle: React.CSSProperties = {
  fontFamily: "var(--font-display), sans-serif",
  fontWeight: 300,
  fontSize: "clamp(160px, 28vh, 420px)",
  lineHeight: 1,
  color: "#e9edf1",
  fontVariantNumeric: "tabular-nums",
};

const letters = (s: string) =>
  s.split("").map((c, i) => (
    <span key={i} className="ltr inline-block opacity-0" aria-hidden="true">
      {c === " " ? " " : c}
    </span>
  ));

/**
 * The cold open: an academy leader counts 3·2·1, then "A FILM BY AYISHIK DAS".
 * Plays on every load; the page is fully rendered underneath it.
 */
export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      const html = document.documentElement;
      if (!html.hasAttribute("data-intro")) { setDone(true); return; }

      let finished = false;
      const finish = () => {
        if (finished) return;
        finished = true;
        html.removeAttribute("data-intro");
        lenisStore.current?.start();
        ScrollTrigger.refresh();
        window.dispatchEvent(new Event("intro:done"));
        setDone(true);
      };

      const q = gsap.utils.selector(ref);
      const tl = gsap.timeline({ onComplete: finish });
      tlRef.current = tl;

      // One wedge sweep per number; numbers swap as each sweep ends.
      [0.2, 1.5, 2.8].forEach((at) => {
        tl.fromTo(q(".wedge"), { rotation: 0 }, { rotation: 360, duration: 1.3, ease: "none", svgOrigin: "960 540", immediateRender: false }, at);
      });
      tl.set(q(".n3"), { opacity: 0 }, 1.5);
      tl.set(q(".n2"), { opacity: 1 }, 1.5);
      tl.set(q(".n2"), { opacity: 0 }, 2.8);
      tl.set(q(".n1"), { opacity: 1 }, 2.8);
      flicker(tl, q(".dim"), [[0.1, 0.18], [1.5, 0.22], [2.8, 0.22], [3.6, 0.1]], 0);
      // Cut to black on "1".
      tl.set(q(".leader"), { opacity: 0 }, 4.1);

      // The credit.
      tl.fromTo(q(".light"), { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" }, 4.2);
      blurIn(tl, q(".by"), 4.5, 0.2);
      lettersIn(tl, q(".ltr"), 5.1);
      flicker(tl, q(".light"), [[4.9, 0.6], [6.2, 0.75]]);
      tl.to(ref.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, 7.4);
      tl.to({}, { duration: 0.01 }, 7.9);
    },
    { scope: ref },
  );

  if (done) return null;

  return (
    <div ref={ref} className="intro fixed inset-0 z-[55] bg-black" role="dialog" aria-label="Intro">
      <div className="leader absolute inset-0 bg-[#2e343b]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <rect width="1920" height="1080" fill="#2E343B" />
          <circle cx="960" cy="540" r="372" fill="#4A525C" />
          <path className="wedge" d="M960 540 L960 168 A372 372 0 0 1 1282.2 726 Z" fill="#5E6771" />
          <circle cx="960" cy="540" r="372" fill="none" stroke="#C9D0D6" strokeWidth="2" />
          <circle cx="960" cy="540" r="316" fill="none" stroke="#C9D0D6" strokeWidth="2" />
          <line x1="96" y1="540" x2="1824" y2="540" stroke="#C9D0D6" strokeWidth="2" />
          <line x1="960" y1="139" x2="960" y2="941" stroke="#C9D0D6" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="num n3 absolute" style={numStyle}>3</span>
          <span className="num n2 absolute opacity-0" style={numStyle}>2</span>
          <span className="num n1 absolute opacity-0" style={numStyle}>1</span>
        </div>
        <div className="dim absolute inset-0 bg-black opacity-0" />
      </div>

      <div className="light absolute left-1/2 top-1/2 h-[120vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ background: "radial-gradient(closest-side, rgba(26,38,51,0.55), rgba(26,38,51,0))" }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <div className="by kicker opacity-0" style={{ letterSpacing: "0.5em" }}>A film by</div>
        <div className="title-caps whitespace-nowrap" style={{ fontSize: "clamp(32px, 6vw, 120px)", letterSpacing: "0.32em", paddingLeft: "0.32em" }}>
          <span className="sr-only">{site.name}</span>
          {letters(site.name.toUpperCase())}
        </div>
      </div>

      <button type="button" onClick={() => tlRef.current?.progress(1)}
        className="mono absolute bottom-[calc(var(--bar)+16px)] right-[var(--gutter)] text-[12px] text-steel hover:text-ink">
        Skip intro →
      </button>

    </div>
  );
}
