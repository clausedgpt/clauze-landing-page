"use client";

import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import type { Dict } from "@/lib/dictionaries/fr";
import { IconArrow } from "./icons";
import { Pattern } from "./pattern";
import { AssistantScene, DraftingScene, FirmScene, ReviewScene, SearchScene } from "./scenes";

const DWELL = 8000;

/**
 * Harvey/Spellbook-style product showcase: a list of tools (label + one line)
 * beside one large looping scene. Advances on its own while on screen, with a
 * progress bar on the active tab; hovering, focusing or choosing a tab stops
 * the auto-advance.
 */
export function Showcase({
  items,
  scenes,
  links,
  more,
}: {
  items: Dict["showcase"]["items"];
  scenes: Dict["scenes"];
  /** Tab id → that tool's page. */
  links: Record<string, string>;
  more: string;
}) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = root.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    const io = new IntersectionObserver(([e]) => setAuto(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % items.length), DWELL);
    return () => clearTimeout(id);
  }, [auto, active, items.length]);

  function choose(i: number) {
    setActive(i);
    setAuto(false);
  }

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    const vertical = window.matchMedia("(min-width: 961px)").matches;
    const rtl = getComputedStyle(e.currentTarget).direction === "rtl";
    const map: Record<string, number> = vertical
      ? { ArrowDown: 1, ArrowUp: -1 }
      : { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 };
    const d = map[e.key];
    if (!d) return;
    e.preventDefault();
    const i = (active + d + items.length) % items.length;
    choose(i);
    tabs.current[i]?.focus();
  }

  const Scene = [SearchScene, AssistantScene, ReviewScene, DraftingScene, FirmScene][active];

  return (
    <div
      ref={root}
      className="showcase"
      onMouseEnter={() => setAuto(false)}
      onFocusCapture={() => setAuto(false)}
    >
      <div className="sc-tabs" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
        {items.map((it, i) => (
          <button
            key={it.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`sc-tab-${it.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls="sc-stage"
            tabIndex={i === active ? 0 : -1}
            className="sc-tab"
            onClick={() => choose(i)}
          >
            <span className="sc-label">{it.label}</span>
            <span className="sc-line">{it.line}</span>
            {i === active && auto && <span className="sc-progress" style={{ animationDuration: `${DWELL}ms` }} />}
          </button>
        ))}
      </div>
      <div className="sc-panel">
        <div id="sc-stage" role="tabpanel" aria-labelledby={`sc-tab-${items[active].id}`} className="sc-stage">
          <Pattern id="sc-pattern" className="pattern-stage" />
          <Scene key={items[active].id} t={scenes} />
        </div>
        <a className="link sc-more" href={links[items[active].id]}>
          {more} · {items[active].label}
          <IconArrow className="dir" style={{ width: 18, height: 18 }} />
        </a>
      </div>
    </div>
  );
}
