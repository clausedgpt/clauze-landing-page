"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up to `value` once when scrolled into view; shows it whole without motion. */
export function Counter({ value, locale }: { value: number; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);
  const fmt = new Intl.NumberFormat(locale === "ar" ? "ar-TN-u-nu-latn" : locale === "en" ? "en-US" : "fr-FR");

  useEffect(() => {
    const el = ref.current;
    if (!el || !document.documentElement.classList.contains("motion")) return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1600, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 4))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className="counter" aria-label={fmt.format(value)}>
      <span aria-hidden="true">{fmt.format(n)}</span>
    </span>
  );
}
