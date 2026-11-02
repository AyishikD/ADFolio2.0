"use client";

import { useRef } from "react";
import { blurIn, impact, useScene } from "@/lib/fx";
import { reel, earlyWorks } from "@/data/film";

function Board({ item }: { item: (typeof reel)[number] }) {
  const ref = useRef<HTMLElement>(null);

  useScene(ref, ({ tl, q }) => {
    tl.fromTo(q(".stripes-wide"), { rotation: -9, transformOrigin: "0% 100%" }, { rotation: 0, duration: 0.14, ease: "power4.in" }, 0);
    impact(tl, q(".cam"), q(".flash"), 0.14, 8);
    blurIn(tl, q(".fields"), 0.2);
    blurIn(tl, q(".name"), 0.3, 0.18);
    blurIn(tl, q(".line"), 0.55);
    blurIn(tl, q(".stack"), 0.8);
    blurIn(tl, q(".links"), 1.0);
  }, { start: "top 70%" });

  return (
    <article ref={ref} className="relative mx-auto w-full max-w-[1728px] py-[clamp(16px,3vh,40px)]">
      <div className="cam relative border-2 border-[rgba(143,163,181,0.35)] bg-[#0e1419] px-[clamp(20px,4vw,72px)] pb-[clamp(28px,5vh,64px)]">
        <div className="stripes-wide -mx-[2px] -mt-[2px] h-[clamp(28px,5vh,72px)] fx" aria-hidden="true" />
        <div className="fields fx mono mt-[clamp(20px,4vh,48px)] flex flex-wrap gap-x-10 gap-y-2 text-steel" style={{ fontSize: "clamp(11px, 1.1vw, 20px)", letterSpacing: "0.18em" }}>
          <span>Scene <b className="font-medium text-ink">{item.scene}</b></span>
          <span>Take <b className="font-medium text-ink">1</b></span>
          <span className="uppercase">{item.when}</span>
        </div>
        <h3 className="name fx title-caps mt-6" style={{ fontSize: "clamp(34px, 6.5vw, 128px)", letterSpacing: "0.12em" }}>{item.name}</h3>
        <p className="line fx mt-5 max-w-[60ch]" style={{ fontSize: "clamp(15px, 1.6vw, 34px)", lineHeight: 1.35, letterSpacing: "0.03em", color: "rgba(233,237,241,0.85)" }}>
          {item.line}
        </p>
        <div className="stack fx mono mt-5 text-steel" style={{ fontSize: "clamp(11px, 1.1vw, 22px)", letterSpacing: "0.12em" }}>{item.stack}</div>
        <div className="links fx mt-7 flex flex-wrap gap-3">
          <a href={item.github} className="film-link" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          {item.live && <a href={item.live} className="film-link amber" target="_blank" rel="noopener noreferrer">Live ↗</a>}
        </div>
        <div className="flash" />
      </div>
    </article>
  );
}

function EarlyWorks() {
  const ref = useRef<HTMLDivElement>(null);
  useScene(ref, ({ tl, q }) => {
    blurIn(tl, q(".kicker"), 0);
    tl.fromTo(q(".row"), { opacity: 0, filter: "blur(10px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.2, ease: "expo.out", stagger: 0.08 }, 0.3);
  }, { start: "top 75%" });

  return (
    <div ref={ref} className="mx-auto mt-[clamp(40px,8vh,96px)] w-full max-w-[1728px]">
      <div className="kicker fx">Early works · 2023 — 2024</div>
      <ul className="mt-6 border-t border-[rgba(143,163,181,0.25)]">
        {earlyWorks.map((w) => (
          <li key={w.name} className="row fx grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-b border-[rgba(143,163,181,0.25)] py-4 md:grid-cols-[180px_1fr_auto] md:gap-x-10">
            <span className="font-semibold uppercase" style={{ fontSize: "clamp(14px, 1.2vw, 22px)", letterSpacing: "0.14em" }}>{w.name}</span>
            <span className="text-steel" style={{ fontSize: "clamp(13px, 1.1vw, 20px)" }}>{w.line}</span>
            <span className="col-span-2 flex gap-5 md:col-span-1">
              <a href={w.github} className="mono text-[clamp(10px,0.85vw,14px)] text-steel hover:text-ink" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              {w.live && <a href={w.live} className="mono text-[clamp(10px,0.85vw,14px)] text-amber hover:text-ink" target="_blank" rel="noopener noreferrer">Live ↗</a>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** The reel: faster cutting, a clapperboard per project, then the early works. */
export default function Reel() {
  return (
    <section id="reel" data-scene="SC 05 · The Reel" data-nav="work" className="scene bg-ground" style={{ justifyContent: "flex-start" }}>
      {reel.map((item) => <Board key={item.name} item={item} />)}
      <EarlyWorks />
    </section>
  );
}
