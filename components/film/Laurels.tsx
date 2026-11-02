"use client";

import { useRef } from "react";
import { blurIn, useScene } from "@/lib/fx";
import { laurels, certificates } from "@/data/film";

/** One olive branch: an arc with 11 leaf pairs that shrink toward the tip. */
function Branch() {
  const cx = 260, cy = 250, R = 210, leaves = 11;
  const a0 = (105 * Math.PI) / 180, a1 = (245 * Math.PI) / 180;
  const pt = (a: number) => [cx + R * Math.cos(a), cy + R * Math.sin(a)] as const;
  const [sx, sy] = pt(a0), [ex, ey] = pt(a1);
  const items: React.ReactNode[] = [
    <path key="arc" fill="none" d={`M${sx.toFixed(1)} ${sy.toFixed(1)} A${R} ${R} 0 0 1 ${ex.toFixed(1)} ${ey.toFixed(1)}`} />,
  ];
  for (let i = 0; i < leaves; i++) {
    const t = (i + 0.5) / leaves;
    const a = a0 + (a1 - a0) * t;
    const [x, y] = pt(a);
    const tang = (a * 180) / Math.PI + 90;
    const s = 1 - 0.35 * t;
    for (const side of [-1, 1]) {
      items.push(
        <ellipse key={`${i}-${side}`} cx={x.toFixed(1)} cy={y.toFixed(1)} rx={(30 * s).toFixed(1)} ry={(11 * s).toFixed(1)}
          transform={`rotate(${(tang + side * 38).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}) translate(${(26 * s).toFixed(1)} 0)`} />,
      );
    }
  }
  return <g fill="var(--flashback)" fillOpacity="0.85" stroke="var(--flashback)" strokeWidth="2.5">{items}</g>;
}

function Laurel({ kicker, name, index }: { kicker: string; name: string[]; index: number }) {
  return (
    <div className={`laurel-${index} relative mx-auto w-[clamp(220px,30vw,430px)]`} style={{ aspectRatio: "520 / 500" }}>
      <svg className="wreath absolute inset-0 h-full w-full" viewBox="0 0 520 500" aria-hidden="true">
        <Branch />
        <g transform="translate(520 0) scale(-1 1)"><Branch /></g>
      </svg>
      <div className="text absolute inset-x-[22%] top-[30%] text-center">
        <div className="mono text-flashback" style={{ fontSize: "clamp(10px, 0.9vw, 18px)", letterSpacing: "0.2em" }}>{kicker}</div>
        <div className="mt-3 font-semibold uppercase" style={{ fontSize: "clamp(15px, 1.7vw, 34px)", lineHeight: 1.3, letterSpacing: "0.08em" }}>
          {name.map((l) => <div key={l}>{l}</div>)}
        </div>
      </div>
    </div>
  );
}

/** Festival laurels for the mentorships, with the certificates beneath. */
export default function Laurels() {
  const ref = useRef<HTMLElement>(null);

  useScene(ref, ({ tl, q }) => {
    tl.fromTo(q(".light"), { opacity: 0 }, { opacity: 1, duration: 0.8, ease: "power2.out" }, 0);
    tl.fromTo(q(".laurel-0 .wreath"), { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power2.out" }, 0.3);
    tl.fromTo(q(".laurel-1 .wreath"), { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power2.out" }, 0.9);
    blurIn(tl, q(".laurel-0 .text"), 1.0);
    blurIn(tl, q(".laurel-1 .text"), 1.6);
    blurIn(tl, q(".kicker"), 2.0);
    tl.fromTo(q(".cert"), { opacity: 0, filter: "blur(10px)" }, { opacity: 1, filter: "blur(0px)", duration: 0.2, ease: "expo.out", stagger: 0.1 }, 2.2);
  });

  return (
    <section ref={ref} id="laurels" data-scene="SC 07 · Laurels" data-nav="laurels" className="scene" style={{ background: "var(--origins-ground)" }}>
      <div className="light left-[15vw] top-[5vh] h-[90vh] w-[70vw]" style={{ background: "radial-gradient(closest-side, rgba(203,184,154,0.1), rgba(203,184,154,0))" }} />
      <div className="scene-inner">
        <div className="grid gap-4 md:grid-cols-2">
          {laurels.map((l, i) => <div key={i} className="fx-wrap"><Laurel kicker={l.kicker} name={l.name} index={i} /></div>)}
        </div>
        <div className="mx-auto mt-[clamp(16px,3vh,40px)] max-w-[1100px] text-center">
          <div className="kicker fx">Certificates</div>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {certificates.map((c) => (
              <li key={c.name} className="cert fx mono text-steel" style={{ fontSize: "clamp(11px, 1.05vw, 20px)" }}>
                {c.link ? <a href={c.link} target="_blank" rel="noopener noreferrer" className="hover:text-ink">{c.name} ↗</a> : c.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
