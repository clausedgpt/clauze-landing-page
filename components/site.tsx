import type { Dict } from "@/lib/dictionaries/fr";
import { getContent } from "@/lib/content";
import { APP_URL, CONTACT_EMAIL, type Locale } from "@/lib/i18n";
import { type PageId, pageHref } from "@/lib/pages";
import type { Crumb } from "@/lib/seo";
import { IconArrow } from "./icons";
import { Pattern } from "./pattern";

/* Pieces shared by the home page and the content pages. */

export function Crumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav className="crumbs" aria-label={label}>
      <ol>
        {items.map((c, i) => (
          <li key={c.href}>
            {i < items.length - 1 ? <a href={c.href}>{c.name}</a> : <span aria-current="page">{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function CloseCta({ t }: { t: Dict["close"] }) {
  return (
    <section id="acces" className="section dark close" aria-labelledby="acces-h">
      <Pattern id="close-pattern" className="pattern-dark" />
      <div className="wrap close-inner">
        <h2 id="acces-h" className="h2">{t.title}</h2>
        <p className="body">{t.line}</p>
        <div className="actions">
          <a className="btn btn-lg" href={`${APP_URL}/signup`}>
            {t.cta}
            <IconArrow className="dir" />
          </a>
        </div>
        <p className="contact">
          {t.contact}{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} dir="ltr">{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

/** Linked cards for a list of pages: label, one line, "learn more". */
export function PageCards({ ids, lang, more }: { ids: PageId[]; lang: Locale; more: string }) {
  const c = getContent(lang);
  return (
    <ul className="cards">
      {ids.map((id) => {
        const p = c.pages[id];
        return (
          <li key={id}>
            <a className="card" href={pageHref(id, lang)}>
              <span className="card-eyebrow">{p.eyebrow}</span>
              <span className="card-title">{p.label ?? p.h1}</span>
              <span className="card-text">{p.lede}</span>
              <span className="card-more">
                {more}
                <IconArrow className="dir" />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function formatDate(iso: string, lang: Locale) {
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-TN" : lang === "fr" ? "fr-TN" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(iso));
}
