import { getContent } from "@/lib/content";
import { getDictionary, type Locale, SITE_URL } from "@/lib/i18n";
import { type SectionId, alternatesFor, pageHref, pagesIn, sectionHref } from "@/lib/pages";
import { type Crumb, siteGraph, webPageNode } from "@/lib/seo";
import { Footer, Header } from "./chrome";
import { JsonLd } from "./json-ld";
import { Pattern } from "./pattern";
import { CloseCta, Crumbs, PageCards } from "./site";

/** A section's index (/fr/fonctionnalites …): intro and a card per page. */
export function SectionView({ section, lang }: { section: SectionId; lang: Locale }) {
  const t = getDictionary(lang);
  const c = getContent(lang);
  const s = c.sections[section];
  const href = sectionHref(section, lang);
  const ids = pagesIn(section);
  const crumbs: Crumb[] = [
    { name: t.site.home, href: `/${lang}` },
    { name: s.nav, href },
  ];
  const alternates = alternatesFor({ section });

  return (
    <>
      <JsonLd
        graph={[
          ...siteGraph(t),
          {
            ...webPageNode(lang, href, { name: s.title, description: s.description, crumbs }),
            "@type": "CollectionPage",
            hasPart: ids.map((id) => ({ "@id": `${SITE_URL}${pageHref(id, lang)}` })),
          },
        ]}
      />
      <a className="skip" href="#main">{t.nav.skip}</a>
      <Header t={t.nav} lang={lang} alternates={alternates} />

      <main id="main">
        <section className="page-hero" aria-labelledby="page-h">
          <Pattern id="hero-pattern" className="pattern-hero" />
          <div className="wrap page-hero-grid">
            <div className="page-hero-copy">
              <Crumbs items={crumbs} label={t.site.breadcrumb} />
              <h1 id="page-h" className="h1 page-h1">{s.h1}</h1>
              <p className="lede">{s.lede}</p>
            </div>
          </div>
        </section>

        <section className="section related" aria-label={s.nav}>
          <div className="wrap">
            <PageCards ids={ids} lang={lang} more={t.site.readMore} />
          </div>
        </section>

        <CloseCta t={t.close} />
      </main>

      <Footer t={t.footer} nav={t.nav} lang={lang} alternates={alternates} />
    </>
  );
}
