"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { Leader } from "./motion";

/**
 * One article's text column + margin column. Note calls written as "[n]" in
 * the body become gold markers; hovering or focusing one draws a leader across
 * the margin rule to its note (wide screens) and lights the note. When the
 * article first scrolls into view, the first call demonstrates itself once.
 */
export function Annotated({
  id,
  no,
  title,
  body,
  notes,
  after,
  children,
}: {
  id: string;
  no: string;
  title: string;
  body?: string;
  notes?: string[];
  after?: ReactNode;
  children?: ReactNode;
}) {
  const grid = useRef<HTMLDivElement>(null);
  const calls = useRef<(HTMLButtonElement | null)[]>([]);
  const marks = useRef<(HTMLSpanElement | null)[]>([]);
  const [shown, setShown] = useState(1);
  const [active, setActive] = useState<number | null>(null);
  const [drawn, setDrawn] = useState(false);
  const [wide, setWide] = useState(false);
  const hovering = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 961px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  function open(n: number) {
    hovering.current = true;
    setShown(n);
    setActive(n);
    setDrawn(false);
    window.setTimeout(() => setDrawn(true), 40);
  }
  function close() {
    hovering.current = false;
    setActive(null);
    setDrawn(false);
  }

  // Demonstrate the first call once, when the article is read.
  useEffect(() => {
    const el = grid.current;
    if (!el || !notes?.length || !document.documentElement.classList.contains("motion")) return;
    let t1 = 0;
    let t2 = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        t1 = window.setTimeout(() => {
          if (hovering.current) return;
          open(1);
          hovering.current = false;
          t2 = window.setTimeout(() => !hovering.current && close(), 2600);
        }, 900);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [notes?.length]);

  const parts = body ? body.split(/\[(\d+)\]/) : [];
  // Stable ref objects pointed at the active call/note (Leader reads .current when it measures).
  const from = useRef<HTMLElement | null>(null);
  const to = useRef<HTMLElement | null>(null);
  from.current = calls.current[shown - 1] ?? null;
  to.current = marks.current[shown - 1] ?? null;

  return (
    <div ref={grid} className="wrap article-grid annotated">
      <div className="main-col">
        <h2 id={`${id}-h`} className="h2">{title}</h2>
        {body && (
          <p className="body">
            {parts.map((part, i) => {
              if (i % 2 === 0) {
                // Text around a call: its last word moves into the call's no-wrap
                // group, and punctuation right after a call stays with it.
                let text = part;
                if (i > 0) text = text.slice(leadPunct(text).length);
                if (i < parts.length - 1) text = text.replace(/\S+$/, "");
                return text;
              }
              const n = Number(part);
              const before = parts[i - 1].match(/\S+$/)?.[0] ?? "";
              const tail = leadPunct(parts[i + 1] ?? "");
              return (
                <span key={i} className="nw">
                  {before}
                <button
                  ref={(el) => {
                    calls.current[n - 1] = el;
                  }}
                  type="button"
                  className="call"
                  aria-describedby={`${id}-n${n}`}
                  aria-expanded={active === n}
                  onMouseEnter={() => open(n)}
                  onMouseLeave={close}
                  onFocus={() => open(n)}
                  onBlur={close}
                >
                  {n}
                </button>
                  {tail}
                </span>
              );
            })}
          </p>
        )}
        {after}
        {children && <div className="demo-slot">{children}</div>}
      </div>
      <aside className="margin">
        <p className="art-no">{no}</p>
        {notes && notes.length > 0 && (
          <ol className="notes">
            {notes.map((n, i) => (
              <li key={n} id={`${id}-n${i + 1}`} data-on={active === i + 1}>
                <span
                  className="note-no"
                  ref={(el) => {
                    marks.current[i] = el;
                  }}
                >
                  ({i + 1})
                </span>
                <span>{n}</span>
              </li>
            ))}
          </ol>
        )}
      </aside>
      {wide && notes?.length ? <Leader container={grid} from={from} to={to} drawn={drawn} sideways /> : null}
    </div>
  );
}

/** Punctuation (with an optional narrow no-break space) that must not start a line. */
function leadPunct(text: string) {
  return text.match(/^[\u202f\u00a0]?[.,:;!?\u060c\u061b)\u00bb]+/)?.[0] ?? "";
}
