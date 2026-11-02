"use client";

import { useRef } from "react";
import { blurIn, impact, useScene } from "@/lib/fx";
import { trials } from "@/data/film";

/** The payoff. The second IMAX opening: the placing hits, then the rest print in. */
export default function Trials() {
  const ref = useRef<HTMLElement>(null);

  useScene(ref, ({ tl, q }) => {
    const cam = q(".cam");
    const flash = q(".flash");
    blurIn(tl, q(".chapter"), 0.1);
    blurIn(tl, q(".hero"), 0.45, 0.12);
    impact(tl, cam, flash, 0.5, 18);
    tl.fromTo(q(".light"), { opacity: 0.3 }, { opacity: 1, duration: 0.6, ease: "power3.inOut" }, 0.5);
    blurIn(tl, q(".hero-label"), 0.8);
    blurIn(tl, q(".hero-sub"), 1.1);
    tl.fromTo(q(".row"), { opacity: 0, filter: "blur(10px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.2, ease: "expo.out", stagger: 0.4 }, 1.6);
  }, { start: "top 75%" });

  return (
    <section ref={ref} id="trials" data-scene="SC 06 · The Trials" data-nav="trials" data-imax className="scene" style={{ background: "var(--call-ground)" }}>
      <div className="light -left-[15vw] top-0 h-[110vh] w-[80vw]" style={{ background: "radial-gradient(closest-side, rgba(58,84,110,0.42), rgba(58,84,110,0))" }} />
      <div className="cam scene-inner grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <div className="chapter kicker fx">{trials.chapter}</div>
          <div className="hero numeral fx mt-4 uppercase text-amber" style={{ fontSize: "clamp(120px, 20vw, 400px)" }}>{trials.hero.value}</div>
          <div className="hero-label fx title-caps mt-4" style={{ fontSize: "clamp(16px, 2vw, 40px)", letterSpacing: "0.24em" }}>{trials.hero.label}</div>
          <div className="hero-sub fx mono mt-3 text-steel" style={{ fontSize: "clamp(12px, 1.4vw, 28px)" }}>{trials.hero.sub}</div>
        </div>
        <ul>
          {trials.rows.map((r) => (
            <li key={r.what} className="row fx border-t border-[rgba(143,163,181,0.35)] py-5">
              <div className="numeral font-light" style={{ fontSize: "clamp(36px, 3.3vw, 64px)", fontWeight: 300, letterSpacing: "0.02em" }}>{r.value}</div>
              <div className="mono mt-1 text-steel" style={{ fontSize: "clamp(11px, 1.2vw, 24px)" }}>{r.what}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flash" />
    </section>
  );
}
