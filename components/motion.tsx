"use client";

import {
  type CSSProperties,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

/** Style for an element that appears at a demo's step `n` (see globals.css "Staged reveals"). */
export function at(n: number): CSSProperties {
  return { ["--at" as string]: n } as CSSProperties;
}

function motionAllowed() {
  return typeof document !== "undefined" && document.documentElement.classList.contains("motion");
}

/**
 * Plays a demo once when it scrolls into view. `schedule` holds the delay (ms
 * from start) at which each step begins; the returned step counts up to
 * schedule.length. Without motion the demo is already complete.
 */
export function useTimeline(ref: RefObject<HTMLElement | null>, schedule: number[]) {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const total = schedule.length;
  const key = schedule.join(",");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!motionAllowed()) {
      setStep(total);
      return;
    }
    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        setPlaying(true);
        schedule.forEach((delay, i) => {
          timers.push(window.setTimeout(() => setStep(i + 1), delay));
        });
        timers.push(window.setTimeout(() => setPlaying(false), schedule[total - 1] ?? 0));
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { step, playing, style: { ["--step" as string]: step } as CSSProperties };
}

/**
 * Like useTimeline, but loops while the element is on screen: steps play on
 * `schedule`, the end state holds for `hold` ms, then everything resets to
 * step 0 and plays again. Pauses off screen; static final state without motion.
 */
export function useLoop(ref: RefObject<HTMLElement | null>, schedule: number[], hold = 2600) {
  const total = schedule.length;
  const [step, setStep] = useState(0);
  const key = schedule.join(",");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!motionAllowed()) {
      setStep(total);
      return;
    }
    let timers: number[] = [];
    const stop = () => {
      timers.forEach(clearTimeout);
      timers = [];
    };
    const play = () => {
      stop();
      setStep(0);
      schedule.forEach((delay, i) => timers.push(window.setTimeout(() => setStep(i + 1), delay + 350)));
      timers.push(window.setTimeout(play, (schedule[total - 1] ?? 0) + 350 + hold));
    };
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? play() : stop()),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, hold]);

  return { step, style: { ["--step" as string]: step } as CSSProperties };
}

/** Types `text` out once `active`; renders it whole when motion is off. */
export function Typed({ text, active, cps = 34 }: { text: string; active: boolean; cps?: number }) {
  const [n, setN] = useState(text.length);
  const started = useRef(false);

  useEffect(() => {
    if (motionAllowed()) setN(0);
  }, []);

  useEffect(() => {
    if (!active || started.current || !motionAllowed()) return;
    started.current = true;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, 1000 / cps);
    return () => clearInterval(id);
  }, [active, text, cps]);

  const typing = n < text.length;
  return (
    <>
      <span aria-hidden={typing || undefined} className={typing ? "caret" : undefined}>
        {text.slice(0, n)}
      </span>
      {typing && <span className="sr-only">{text}</span>}
    </>
  );
}

/** Reveals `words` progressively once `active` (streamed answer). */
export function useStream(total: number, active: boolean, perWordMs = 55) {
  const [n, setN] = useState(total);
  const started = useRef(false);

  useEffect(() => {
    if (motionAllowed()) setN(0);
  }, []);

  useEffect(() => {
    if (!active || started.current || !motionAllowed()) return;
    started.current = true;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setN(i);
      if (i >= total) clearInterval(id);
    }, perWordMs);
    return () => clearInterval(id);
  }, [active, total, perWordMs]);

  return n;
}

/**
 * The page's signature: a gold leader line drawn from a citation marker to the
 * note it cites. Positions are measured against `container`.
 */
export function Leader({
  container,
  from,
  to,
  drawn,
  sideways = false,
}: {
  container: RefObject<HTMLElement | null>;
  from: RefObject<HTMLElement | null>;
  to: RefObject<HTMLElement | null>;
  drawn: boolean;
  /** Body call → margin note (horizontal); otherwise marker → cited source below. */
  sideways?: boolean;
}) {
  const [d, setD] = useState<{ path: string } | null>(null);

  // useEffect, not useLayoutEffect: a parent's ref (the container) is only
  // attached after its children's layout effects have run.
  useEffect(() => {
    const c = container.current;
    const a = from.current;
    const b = to.current;
    if (!c || !a || !b) return;

    const measure = () => {
      const cr = c.getBoundingClientRect();
      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();
      const acx = ar.left + ar.width / 2 - cr.left;
      const bcx = br.left + br.width / 2 - cr.left;
      const acy = ar.top + ar.height / 2 - cr.top;
      const bcy = br.top + br.height / 2 - cr.top;
      if (sideways) {
        // Sideways (body call → margin note): edge to edge, horizontal tangents.
        const right = bcx > acx;
        const fx = (right ? ar.right + 3 : ar.left - 3) - cr.left;
        const tx = (right ? br.left - 5 : br.right + 5) - cr.left;
        const k = (tx - fx) * 0.5;
        setD({ path: `M ${fx} ${acy} C ${fx + k} ${acy}, ${tx - k} ${bcy}, ${tx} ${bcy}` });
      } else {
        // Downwards (answer marker → cited source chip).
        const fy = ar.bottom - cr.top + 3;
        const ty = br.top - cr.top - 5;
        const dy = Math.max(ty - fy, 24);
        setD({ path: `M ${acx} ${fy} C ${acx} ${fy + dy * 0.9}, ${bcx} ${ty - dy * 0.9}, ${bcx} ${ty}` });
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(c);
    ro.observe(a);
    ro.observe(b);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
    // Re-measure whenever the line (re)draws: the marker moves while an answer streams.
  }, [container, from, to, drawn, sideways]);

  if (!d) return null;
  return (
    <svg
      className="leader"
      aria-hidden="true"
      style={{ ["--draw" as string]: drawn ? 0 : 1 } as CSSProperties}
    >
      <path d={d.path} pathLength={1} />
    </svg>
  );
}
