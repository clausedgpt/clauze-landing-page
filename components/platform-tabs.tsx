"use client";

import { type KeyboardEvent, type ReactNode, useRef, useState } from "react";
import { IconCheck } from "./icons";

export type PlatformPanel = {
  id: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  demo: ReactNode;
};

/**
 * One section holds the whole product: a tab per capability, each a promise,
 * its points and the live demo. Inactive panels stay mounted but hidden, so a
 * demo plays the first time its tab is shown.
 */
export function PlatformTabs({ panels, label }: { panels: PlatformPanel[]; label: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const rtl = getComputedStyle(e.currentTarget).direction === "rtl";
    const next = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
    let i: number | null = null;
    if (next) i = (active + next + panels.length) % panels.length;
    if (e.key === "Home") i = 0;
    if (e.key === "End") i = panels.length - 1;
    if (i === null) return;
    e.preventDefault();
    setActive(i);
    tabs.current[i]?.focus();
  }

  return (
    <div className="ptabs">
      <div className="ptab-list" role="tablist" aria-label={label} onKeyDown={onKey}>
        {panels.map((p, i) => (
          <button
            key={p.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`tab-${p.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`panel-${p.id}`}
            tabIndex={i === active ? 0 : -1}
            className="ptab"
            onClick={() => setActive(i)}
          >
            {p.label}
          </button>
        ))}
      </div>
      {panels.map((p, i) => (
        <div
          key={p.id}
          id={`panel-${p.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${p.id}`}
          hidden={i !== active}
          className="ppanel"
        >
          <div className="ppanel-text">
            <h3 className="ppanel-title">{p.title}</h3>
            <p className="ppanel-body">{p.body}</p>
            <ul className="ppanel-points">
              {p.points.map((pt) => (
                <li key={pt}>
                  <IconCheck />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ppanel-demo">{p.demo}</div>
        </div>
      ))}
    </div>
  );
}
