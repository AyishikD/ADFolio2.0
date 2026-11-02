"use client";

import { useRef } from "react";
import { blurIn, countUp, impact, useScene } from "@/lib/fx";
import { call } from "@/data/film";

/** Act II. The IMAX moment: the role hits, the bars open, the numbers land. */
export default function TheCall() {
  const ref = useRef<HTMLElement>(null);

  useScene(ref, ({ tl, q }) => {
    const cam = q(".cam");
    const flash = q(".flash");
    blurIn(tl, q(".chapter"), 0.1);
    blurIn(tl, q(".role"), 0.25, 0.25);
    impact(tl, cam, flash, 1.0, 16);
    tl.fromTo(q(".light"), { opacity: 0.3 }, { opacity: 1, duration: 0.6, ease: "power3.inOut" }, 1.0);
    blurIn(tl, q(".org"), 1.3);
    blurIn(tl, q(".when"), 1.55);
    blurIn(tl, q(".stat-0"), 1.9);
    countUp(tl, q(".num-0")[0], call.stats[0].value, call.stats[0].decimals, call.stats[0].suffix, 2.0, 1.0);
    impact(tl, cam, flash, 3.0, 10);
    blurIn(tl, q(".stat-1"), 3.1);
    countUp(tl, q(".num-1")[0], call.stats[1].value, call.stats[1].decimals, call.stats[1].suffix, 3.2, 1.1);
    impact(tl, cam, flash, 4.3, 14);
    blurIn(tl, q(".lines"), 4.5);
  }, { start: "top 75%" });

  return (
    <section ref={ref} id="call" data-scene="SC 03 · The Call" data-nav="call" data-imax className="scene" style={{ background: "var(--call-ground)" }}>
      <div className="light -top-[20vh] left-[45vw] h-[110vh] w-[75vw]" style={{ background: "radial-gradient(closest-side, rgba(58,84,110,0.45), rgba(58,84,110,0))" }} />
      <div className="cam scene-inner">
        <div className="chapter kicker fx">{call.chapter}</div>
        <h2 className="role fx title-caps mt-3" style={{ fontSize: "clamp(36px, 6vw, 120px)", letterSpacing: "0.1em" }}>
          {call.role}
        </h2>
        <div className="org fx mt-3 font-semibold uppercase" style={{ fontSize: "clamp(13px, 1.5vw, 30px)", letterSpacing: "0.28em" }}>
          {call.org}
        </div>
        <div className="when fx mono mt-2 text-steel" style={{ fontSize: "clamp(12px, 1.1vw, 22px)" }}>
          {call.when}
        </div>

        <div className="mt-[clamp(20px,4vh,56px)] grid gap-6 md:grid-cols-2 md:gap-16">
          {call.stats.map((s, i) => (
            <div key={i} className={`stat-${i} fx border-t-2 border-[rgba(143,163,181,0.35)] pt-3`}>
              <div className={`num-${i} numeral`} style={{ fontSize: "clamp(72px, 9.5vw, 200px)", color: s.accent ? "var(--amber)" : "var(--ink)" }}>
                {s.value}{s.suffix}
              </div>
              <div className="mt-2" style={{ fontSize: "clamp(14px, 1.3vw, 26px)", lineHeight: 1.3, letterSpacing: "0.04em", color: "rgba(233,237,241,0.8)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="lines fx mt-[clamp(16px,3vh,40px)] max-w-[70ch] text-steel" style={{ fontSize: "clamp(13px, 1vw, 20px)", lineHeight: 1.6 }}>
          {call.lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
      <div className="flash" />
    </section>
  );
}
