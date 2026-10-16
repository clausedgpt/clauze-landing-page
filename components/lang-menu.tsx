"use client";

import { useEffect, useRef } from "react";
import { type Locale, locales } from "@/lib/i18n";

const LANG_NAME: Record<Locale, string> = { fr: "Français", ar: "العربية", en: "English" };

/**
 * Language dropdown: native <details>, closed on outside click and Escape.
 * `alternates` is this page's address in each language (home by default).
 */
export function LangMenu({
  current,
  label,
  alternates,
  up = false,
}: {
  current: Locale;
  label: string;
  alternates?: Record<Locale, string>;
  up?: boolean;
}) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onDown = (e: PointerEvent) => {
      if (el.open && !el.contains(e.target as Node)) el.open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && el.open) {
        el.open = false;
        el.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <details ref={ref} className={`lang-menu${up ? " up" : ""}`}>
      <summary aria-label={`${label}: ${LANG_NAME[current]}`}>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="globe">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
        </svg>
        <span lang={current}>{LANG_NAME[current]}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="chev">
          <path d="m7 10 5 5 5-5" />
        </svg>
      </summary>
      <ul className="lang-list">
        {locales.map((l) => (
          <li key={l}>
            <a href={alternates?.[l] ?? `/${l}`} hrefLang={l} lang={l} aria-current={l === current ? "page" : undefined}>
              {LANG_NAME[l]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
