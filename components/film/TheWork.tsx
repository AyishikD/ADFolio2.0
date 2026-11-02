"use client";

import { useRef } from "react";
import { blurIn, countUp, impact, useScene } from "@/lib/fx";
import { heroProjects, type HeroProject } from "@/data/film";

const alignClass = {
  left: "items-start text-left",
  right: "items-end text-right",
  center: "items-center text-center",
} as const;

function Project({ p, index }: { p: HeroProject; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const dir = p.align === "right" ? 1 : -1;

  useScene(ref, ({ tl, q }) => {
    const cam = q(".cam");
    const flash = q(".flash");
    tl.fromTo(q(".slate"), { x: dir * 320, opacity: 0, filter: "blur(16px)" },
      { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.27, ease: "power3.out" }, 0);
    blurIn(tl, q(".figure"), 0.35, 0.15);
    countUp(tl, q(".num")[0], p.value, p.decimals, "", 0.4, 1.4);
    impact(tl, cam, flash, 1.8, 14);
    blurIn(tl, q(".label"), 1.95);
    blurIn(tl, q(".detail"), 2.2);
    blurIn(tl, q(".stack"), 2.4);
    blurIn(tl, q(".links"), 2.6);
  });

  const lightPos = p.align === "right" ? "left-[40vw]" : p.align === "center" ? "left-[15vw]" : "-left-[20vw]";

  return (
    <section ref={ref} id={index === 0 ? "work" : undefined} data-scene="SC 04 · The Work" data-nav="work" className="scene bg-ground">
      <div className={`light top-[5vh] h-[90vh] w-[70vw] ${lightPos}`} style={{ background: "radial-gradient(closest-side, rgba(26,38,51,0.6), rgba(26,38,51,0))" }} />
      <div className={`cam scene-inner flex flex-col ${alignClass[p.align]}`}>
        <div className="slate fx flex items-center gap-5">
          <div className="stripes h-7 w-[clamp(60px,10vw,220px)] shrink-0" aria-hidden="true" />
          <div className="mono whitespace-nowrap text-steel" style={{ fontSize: "clamp(10px, 1.1vw, 20px)", letterSpacing: "0.16em" }}>
            Scene {p.scene} · <b className="font-medium text-ink">{p.name}</b> · Take 1
          </div>
        </div>

        <div className="figure fx mt-6 flex items-baseline gap-[0.08em] whitespace-nowrap">
          <span className="num numeral text-amber" style={{ fontSize: "clamp(84px, 17vw, 360px)" }}>{p.value.toFixed(p.decimals)}</span>
          <span className="font-light text-ink" style={{ fontSize: "clamp(28px, 5.5vw, 120px)", letterSpacing: "0.02em" }}>{p.unit}</span>
        </div>

        <h3 className="label fx mt-6 font-semibold uppercase" style={{ fontSize: "clamp(15px, 1.8vw, 36px)", letterSpacing: "0.16em" }}>
          {p.label}
        </h3>
        <p className="detail fx mt-4 max-w-[62ch]" style={{ fontSize: "clamp(14px, 1.3vw, 26px)", lineHeight: 1.5, letterSpacing: "0.02em", color: "rgba(233,237,241,0.72)" }}>
          {p.detail}
        </p>
        <div className="stack fx mono mt-4 text-steel" style={{ fontSize: "clamp(11px, 1vw, 18px)", letterSpacing: "0.12em" }}>
          {p.stack}
        </div>
        <div className="links fx mt-7 flex flex-wrap gap-3">
          <a href={p.github} className="film-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          {p.live && <a href={p.live} className="film-link amber" target="_blank" rel="noopener noreferrer">Live ↗</a>}
        </div>
      </div>
      <div className="flash" />
    </section>
  );
}

/** Act III: the three hero projects, each led by a slate and one huge number. */
export default function TheWork() {
  return (
    <>
      {heroProjects.map((p, i) => <Project key={p.name} p={p} index={i} />)}
    </>
  );
}
