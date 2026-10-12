import { type Locale, locales } from "./i18n";

/*
 * Every public page beyond the home page: where it lives in each language and
 * whether it is built yet. Copy lives in lib/content/{fr,en,ar}.ts, keyed by
 * the same ids, so a page missing from one language fails the typecheck.
 *
 * Slugs: French and English get their own words; Arabic reuses the English
 * slug (Arabic slugs percent-encode into long, fragile URLs).
 */

type Slugs = { fr: string; en: string };

export const SECTIONS = {
  features: { fr: "fonctionnalites", en: "features" },
  useCases: { fr: "cas-d-usage", en: "use-cases" },
  compare: { fr: "comparatifs", en: "compare" },
} as const satisfies Record<string, Slugs>;
export type SectionId = keyof typeof SECTIONS;

type PageDef = {
  /** Section the page sits under; none = a top-level page like /fr/faq. */
  section?: SectionId;
  slug: Slugs;
  /** Shown on the page and in the sitemap; bump when the copy changes. */
  updated: string;
  /** Written but not built: no route, no sitemap entry, no links. */
  draft?: boolean;
};

export const PAGES = {
  "feature-research": { section: "features", slug: { fr: "recherche-juridique", en: "legal-research" }, updated: "2026-10-12" },
  "feature-assistant": { section: "features", slug: { fr: "assistant-juridique-ia", en: "ai-legal-assistant" }, updated: "2026-10-12" },
  "feature-review": { section: "features", slug: { fr: "revue-de-documents", en: "document-review" }, updated: "2026-10-12" },
  "feature-drafting": { section: "features", slug: { fr: "redaction-de-contrats", en: "contract-drafting" }, updated: "2026-10-12" },
  "feature-firm": { section: "features", slug: { fr: "gestion-du-cabinet", en: "practice-management" }, updated: "2026-10-12" },
  "use-litigation": { section: "useCases", slug: { fr: "avocats-contentieux", en: "litigators" }, updated: "2026-10-12" },
  "use-business": { section: "useCases", slug: { fr: "avocats-d-affaires", en: "business-lawyers" }, updated: "2026-10-12" },
  "use-firms": { section: "useCases", slug: { fr: "independants-et-cabinets", en: "solo-and-firms" }, updated: "2026-10-12" },
  "vs-chatgpt": { section: "compare", slug: { fr: "clauze-vs-chatgpt", en: "clauze-vs-chatgpt" }, updated: "2026-10-12" },
  "vs-manual": { section: "compare", slug: { fr: "clauze-vs-recherche-manuelle", en: "clauze-vs-manual-research" }, updated: "2026-10-12" },
  "vs-legal-ai": { section: "compare", slug: { fr: "clauze-vs-ia-juridique-generique", en: "clauze-vs-generic-legal-ai" }, updated: "2026-10-12" },
  faq: { slug: { fr: "faq", en: "faq" }, updated: "2026-10-12" },
  // Draft until the DPA and privacy policy name the AWS hosting this page
  // describes (they still say IONOS); publish in the same change as that
  // legal update.
  security: { slug: { fr: "securite", en: "security" }, updated: "2026-10-12", draft: true },
} as const satisfies Record<string, PageDef>;
export type PageId = keyof typeof PAGES;

const def = (id: PageId): PageDef => PAGES[id];
const slugIn = (s: Slugs, lang: Locale) => (lang === "fr" ? s.fr : s.en);

export const pageIds = (Object.keys(PAGES) as PageId[]).filter((id) => !def(id).draft);

export function pagesIn(section: SectionId): PageId[] {
  return pageIds.filter((id) => def(id).section === section);
}

export function sectionOf(id: PageId): SectionId | undefined {
  return def(id).section;
}

export function updatedOn(id: PageId): string {
  return def(id).updated;
}

export function pageHref(id: PageId, lang: Locale): string {
  const d = def(id);
  const base = d.section ? `/${lang}/${slugIn(SECTIONS[d.section], lang)}` : `/${lang}`;
  return `${base}/${slugIn(d.slug, lang)}`;
}

export function sectionHref(section: SectionId, lang: Locale): string {
  return `/${lang}/${slugIn(SECTIONS[section], lang)}`;
}

/** Any route's address in every language, for hreflang and the language menu. */
export type Target = { page: PageId } | { section: SectionId } | "home";

export function hrefFor(target: Target, lang: Locale): string {
  if (target === "home") return `/${lang}`;
  return "page" in target ? pageHref(target.page, lang) : sectionHref(target.section, lang);
}

export function alternatesFor(target: Target): Record<Locale, string> {
  return Object.fromEntries(locales.map((l) => [l, hrefFor(target, l)])) as Record<Locale, string>;
}

/** /[lang]/[segment]: a section index or a top-level page. */
export function resolveSegment(lang: Locale, segment: string): Exclude<Target, "home"> | undefined {
  const section = (Object.keys(SECTIONS) as SectionId[]).find((s) => slugIn(SECTIONS[s], lang) === segment);
  if (section) return { section };
  const page = pageIds.find((id) => !def(id).section && slugIn(def(id).slug, lang) === segment);
  return page ? { page } : undefined;
}

/** /[lang]/[segment]/[slug]: a page inside a section. */
export function resolvePage(lang: Locale, segment: string, slug: string): PageId | undefined {
  return pageIds.find((id) => {
    const d = def(id);
    return d.section && slugIn(SECTIONS[d.section], lang) === segment && slugIn(d.slug, lang) === slug;
  });
}

export function segmentParams() {
  return locales.flatMap((lang) => [
    ...(Object.keys(SECTIONS) as SectionId[]).map((s) => ({ lang, section: slugIn(SECTIONS[s], lang) })),
    ...pageIds.filter((id) => !def(id).section).map((id) => ({ lang, section: slugIn(def(id).slug, lang) })),
  ]);
}

export function pageParams() {
  return locales.flatMap((lang) =>
    pageIds
      .filter((id) => def(id).section)
      .map((id) => ({ lang, section: slugIn(SECTIONS[def(id).section!], lang), slug: slugIn(def(id).slug, lang) })),
  );
}
