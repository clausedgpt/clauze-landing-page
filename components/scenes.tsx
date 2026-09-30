"use client";

import { useRef } from "react";
import type { Dict } from "@/lib/dictionaries/fr";
import { IconBell, IconCheck, IconCursor, IconFile, IconSearch } from "./icons";
import { at, useLoop } from "./motion";

/*
 * Five looping illustrations, one per product area. Built from the product's
 * own vocabulary (windows, skeleton text, chips) with only the words that tell
 * the story. Each loops while visible (useLoop) and rests on its final frame
 * when motion is off.
 */

type T = Dict["scenes"];

function Lines({ widths, className = "" }: { widths: number[]; className?: string }) {
  return (
    <>
      {widths.map((w, i) => (
        <i key={i} className={`sk ${className}`} style={{ width: `${w}%` }} />
      ))}
    </>
  );
}

export function SearchScene({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const { step, style } = useLoop(ref, [0, 1300, 1500, 1700, 1900, 2500]);
  const rows = [
    { lang: "FR", w: [88, 64], force: true },
    { lang: "ع", w: [92, 70], force: true, ar: true },
    { lang: "FR", w: [80, 52] },
    { lang: "ع", w: [86, 60], ar: true },
  ];
  return (
    <div ref={ref} className="scene scene-search" style={style} aria-hidden="true">
      <div className="sheet sheet-a" />
      <div className="sheet sheet-b" />
      <div className="win search-bar" style={at(1)}>
        <IconSearch />
        <span className={`typed${step >= 1 ? " on" : ""}`}>{t.query}</span>
      </div>
      <div className="results">
        {rows.map((r, i) => (
          <div key={i} className="win row" style={at(2 + Math.min(i, 3))}>
            <b className={`lang${r.ar ? " ar" : ""}`}>{r.lang}</b>
            <div className="row-lines">
              <Lines widths={r.w} />
            </div>
            {r.force && (
              <span className="pill-force" style={at(6)}>
                {t.inForce}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AssistantScene({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const { step, style } = useLoop(ref, [0, 900, 1700, 2500, 3400]);
  return (
    <div ref={ref} className="scene scene-assistant" style={style} aria-hidden="true">
      <div className="win q" style={at(1)}>{t.question}</div>
      <div className="win answer-win" style={at(2)}>
        <Lines widths={[94, 86]} />
        <div className="ans-last">
          <i className="sk" style={{ width: "58%" }} />
          <b className="chip-cite" style={at(3)}>1</b>
        </div>
      </div>
      <svg className="scene-leader" viewBox="0 0 160 110" preserveAspectRatio="none">
        <path d="M106 56 C 106 65, 38 61, 38 70" pathLength={1} style={{ strokeDashoffset: step >= 4 ? 0 : 1 }} />
      </svg>
      <div className="win source-win" style={at(4)}>
        <div className="src-head">
          <b className="chip-cite">1</b>
          <i className="sk" style={{ width: "46%" }} />
        </div>
        <i className="sk" style={{ width: "92%" }} />
        <i className={`sk hl${step >= 4 ? " on" : ""}`} style={{ width: "78%" }} />
        <i className="sk" style={{ width: "64%" }} />
        <span className="ok-badge" style={at(5)}>
          <IconCheck />
          {t.verified}
        </span>
      </div>
    </div>
  );
}

export function ReviewScene({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const { step, style } = useLoop(ref, [0, 400, 2000, 2500, 3000]);
  const hot = step >= 3 ? [3] : [];
  if (step >= 4) hot.push(7);
  if (step >= 5) hot.push(11);
  return (
    <div ref={ref} className="scene scene-review" style={style} aria-hidden="true">
      <div className="win page-win" style={at(1)}>
        <span className="file-tag">
          <IconFile />
          PDF
        </span>
        {Array.from({ length: 20 }, (_, i) => (
          <i key={i} className={`sk${hot.includes(i) ? " hl on" : ""}`} style={{ width: `${[92, 86, 90, 78, 88, 70, 94, 82, 88, 74, 90, 80, 86, 60, 92, 84, 88, 76, 90, 58][i]}%` }} />
        ))}
        <span className={`scan${step === 2 ? " run" : ""}`} />
      </div>
      <div className="findings-col">
        {t.findings.map((f, i) => (
          <div key={f} className="win finding-pill" style={at(3 + i)}>
            <span>{f}</span>
            <b>
              {t.page} {[2, 4, 6][i]}
            </b>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DraftingScene({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const { step, style } = useLoop(ref, [0, 900, 1800, 2700, 3200, 3700]);
  return (
    <div ref={ref} className="scene scene-draft" style={style} data-accepted={step >= 5} aria-hidden="true">
      <div className="win doc-win">
        <i className="sk title" style={{ width: "46%" }} />
        <Lines widths={[94, 88, 72]} />
        <p className="edit-line">
          <i className="sk lead" />
          <span className={`del-w${step >= 2 ? " on" : ""}`}>{t.removed}</span>
          <span className={`ins-w${step >= 3 && step < 5 ? " on" : ""}${step >= 5 ? " done" : ""}`}>{t.added}</span>
        </p>
        <Lines widths={[90, 84, 66, 92, 80, 88, 70, 94, 62]} />
      </div>
      <div className="win instr" style={at(1)}>{t.instruction}</div>
      <button tabIndex={-1} className={`scene-btn${step >= 4 ? " pressed" : ""}`} style={at(2)}>
        {t.accept}
      </button>
      <span className={`scene-cursor${step >= 3 ? " at-btn" : ""}`} style={at(2)}>
        <IconCursor />
      </span>
      <span className="ver-badge" style={at(5)}>
        <IconCheck />
        {t.version}
      </span>
    </div>
  );
}

export function FirmScene({ t }: { t: T }) {
  const ref = useRef<HTMLDivElement>(null);
  const { step, style } = useLoop(ref, [0, 700, 1500, 2300, 2700]);
  const days: { d: number; muted?: boolean }[] = [];
  for (let i = 0; i < 3; i++) days.push({ d: 28 + i, muted: true });
  for (let d = 1; d <= 31; d++) days.push({ d });
  for (let d = 1; days.length % 7; d++) days.push({ d, muted: true });
  return (
    <div ref={ref} className="scene scene-firm" style={style} aria-hidden="true">
      <div className="win matters-win" style={at(1)}>
        {[
          ["late", 70],
          ["open", 58],
          ["paid", 64],
          ["open", 48],
        ].map(([s, w], i) => (
          <div key={i} className="m-row">
            <span className={`dot dot-${s}`} />
            <i className="sk" style={{ width: `${w}%` }} />
            <i className="sk amt" />
          </div>
        ))}
      </div>
      <div className="win cal-win" style={at(1)}>
        <div className="cal-top">
          <b>{t.month}</b>
          <span className={`bell${step === 3 ? " ring" : ""}`}>
            <IconBell />
          </span>
        </div>
        <div className="cal-mini">
          {t.weekdays.map((w, i) => (
            <span key={i} className="wd">{w}</span>
          ))}
          {days.map((c, i) => (
            <span key={i} className={`d${c.muted ? " muted" : ""}${!c.muted && c.d === 14 && step >= 2 ? " hearing" : ""}`}>
              {c.d}
            </span>
          ))}
        </div>
      </div>
      <div className="win toast" style={at(4)}>
        <IconBell />
        <span>{t.reminder}</span>
      </div>
    </div>
  );
}
