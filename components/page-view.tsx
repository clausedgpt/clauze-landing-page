import type { ComponentType } from "react";
import type { Block, SceneId } from "@/lib/content/types";
import { getContent } from "@/lib/content";
import { APP_URL, getDictionary, type Locale } from "@/lib/i18n";
import { type PageId, alternatesFor, pageHref, sectionHref, sectionOf, updatedOn } from "@/lib/pages";
import { type Crumb, faqNode, siteGraph, webPageNode } from "@/lib/seo";
import type { Dict } from "@/lib/dictionaries/fr";
import { Footer, Header } from "./chrome";
import { IconArrow, IconCheck } from "./icons";
import { JsonLd } from "./json-ld";
import { Pattern } from "./pattern";
import { AssistantScene, DraftingScene, FirmScene, ReviewScene, SearchScene } from "./scenes";
import { CloseCta, Crumbs, PageCards, formatDate } from "./site";

const SCENES: Record<SceneId, ComponentType<{ t: Dict["scenes"] }>> = {
  search: SearchScene,
  assistant: AssistantScene,
  review: ReviewScene,
  drafting: DraftingScene,
  firm: FirmScene,
};

/**
 * One template for every content page (features, use cases, comparisons,
 * FAQ): hero → "in short" answer → blocks → related pages → closing CTA.
 * The answer-first order is deliberate: search and AI engines quote the
 * summary, and a lawyer skimming gets the point before the detail.
 */
export function PageView({ id, lang }: { id: PageId; lang: Locale }) {
  const t = getDictionary(lang);
  const c = getContent(lang);
  const p = c.pages[id];
  const href = pageHref(id, lang);
  const section = sectionOf(id);
  const updated = updatedOn(id);
  const crumbs: Crumb[] = [
    { name: t.site.home, href: `/${lang}` },
    ...(section ? [{ name: c.sections[section].nav, href: sectionHref(section, lang) }] : []),
    { name: p.label ?? p.eyebrow, href },
  ];
  const faqs = p.blocks.flatMap((b) => (b.kind === "faq" ? b.items : []));
  const Scene = p.scene ? SCENES[p.scene] : null;
  const alternates = alternatesFor({ page: id });

  return (
    <>
      <JsonLd
        graph={[
          ...siteGraph(t),
          webPageNode(lang, href, { name: p.title, description: p.description, updated, crumbs }),
          ...(faqs.length ? [faqNode(href, faqs)] : []),
        ]}
      />
      <a className="skip" href="#main">{t.nav.skip}</a>
      <Header t={t.nav} lang={lang} alternates={alternates} />

      <main id="main">
        <section className={`page-hero${Scene ? " has-visual" : ""}`} aria-labelledby="page-h">
          <Pattern id="hero-pattern" className="pattern-hero" />
          <div className="wrap page-hero-grid">
            <div className="page-hero-copy">
              <Crumbs items={crumbs} label={t.site.breadcrumb} />
              <p className="eyebrow">{p.eyebrow}</p>
              <h1 id="page-h" className="h1 page-h1">{p.h1}</h1>
              <p className="lede">{p.lede}</p>
              <div className="actions">
                <a className="btn btn-lg" href={`${APP_URL}/signup`}>
                  {t.hero.cta}
                  <IconArrow className="dir" />
                </a>
              </div>
            </div>
            {Scene && (
              <div className="page-visual" aria-hidden="true">
                <div className="sc-stage">
                  <Pattern id="page-stage-pattern" className="pattern-stage" />
                  <Scene t={t.scenes} />
                </div>
              </div>
            )}
          </div>
        </section>

        <div className="section page-main">
          <div className="wrap page-col">
            <section className="brief" aria-labelledby="brief-h">
              <h2 id="brief-h" className="brief-h">{t.site.inBrief}</h2>
              <p className="brief-text">{p.summary}</p>
              <p className="updated">
                {t.site.updated} <time dateTime={updated}>{formatDate(updated, lang)}</time>
              </p>
            </section>
            {p.blocks.map((b, i) => (
              <BlockView key={i} block={b} index={i} />
            ))}
          </div>
        </div>

        <section className="section related" aria-labelledby="related-h">
          <div className="wrap">
            <h2 id="related-h" className="h2">{t.site.related}</h2>
            <PageCards ids={p.related} lang={lang} more={t.site.readMore} />
          </div>
        </section>

        <CloseCta t={t.close} />
      </main>

      <Footer t={t.footer} nav={t.nav} lang={lang} alternates={alternates} />
    </>
  );
}

function BlockView({ block: b, index }: { block: Block; index: number }) {
  const hid = `b${index}-h`;
  switch (b.kind) {
    case "prose":
      return (
        <section className="block" aria-labelledby={hid}>
          <h2 id={hid} className="h3">{b.title}</h2>
          {b.paras.map((para) => (
            <p key={para} className="prose">{para}</p>
          ))}
        </section>
      );
    case "points":
      return (
        <section className="block" aria-labelledby={hid}>
          <h2 id={hid} className="h3">{b.title}</h2>
          <ul className="points">
            {b.items.map((it) => (
              <li key={it.title}>
                <IconCheck />
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      );
    case "steps":
      return (
        <section className="block" aria-labelledby={hid}>
          <h2 id={hid} className="h3">{b.title}</h2>
          <ol className="steps">
            {b.items.map((it) => (
              <li key={it.title}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ol>
        </section>
      );
    case "compare":
      return (
        <section className="block" aria-labelledby={hid}>
          <h2 id={hid} className="h3">{b.title}</h2>
          <div className="table-wrap">
            <table className="compare">
              <thead>
                <tr>
                  {b.head.map((h, i) => (
                    <th key={i} scope="col">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r) => (
                  <tr key={r[0]}>
                    <th scope="row">{r[0]}</th>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note && <p className="note">{b.note}</p>}
        </section>
      );
    case "faq":
      return (
        <section className="block" aria-labelledby={hid}>
          <h2 id={hid} className="h3">{b.title}</h2>
          <div className="faq-list">
            {b.items.map((f) => (
              <details key={f.q} className="faq-item" open>
                <summary>
                  <span>{f.q}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      );
  }
}
