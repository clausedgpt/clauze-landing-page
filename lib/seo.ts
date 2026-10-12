import type { Metadata } from "next";
import type { Dict } from "./dictionaries/fr";
import { APP_URL, CONTACT_EMAIL, LINKEDIN_URL, type Locale, SITE_URL, locales } from "./i18n";
import { type Target, alternatesFor, hrefFor } from "./pages";

const OG_LOCALE: Record<Locale, string> = { fr: "fr_TN", ar: "ar_TN", en: "en_US" };

/**
 * Per-route metadata: canonical, hreflang (x-default → French, like `/`),
 * Open Graph and Twitter. The social image comes from the route's
 * opengraph-image file, which Next merges in on its own.
 */
export function routeMetadata(
  lang: Locale,
  target: Target,
  copy: { title: string; description: string },
  { absolute = false } = {},
): Metadata {
  const languages = alternatesFor(target);
  const url = hrefFor(target, lang);
  return {
    // The layout's template appends " · Clauze"; the home title already names it.
    title: absolute ? { absolute: copy.title } : copy.title,
    description: copy.description,
    alternates: { canonical: url, languages: { ...languages, "x-default": languages.fr } },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      siteName: "Clauze",
      locale: OG_LOCALE[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      type: "website",
    },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description },
  };
}

/** Only the production deployment is indexable; Vercel previews are not. */
export const INDEXABLE = (process.env.VERCEL_ENV ?? "production") === "production";

/* ── JSON-LD (schema.org) ─────────────────────────────────────────────
   One @graph per page. Organization, WebSite and the SoftwareApplication carry
   stable @ids so every page points at the same entities. Nothing here is
   invented: no prices, ratings or reviews (PRODUCT.md). */

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

type Node = Record<string, unknown>;

export function siteGraph(t: Dict): Node[] {
  return [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Clauze",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/clauze-logo.png`, width: 512, height: 512 },
      description: t.footer.tagline,
      email: CONTACT_EMAIL,
      sameAs: [LINKEDIN_URL],
      areaServed: { "@type": "Country", name: "Tunisia" },
    },
    {
      "@type": "WebSite",
      "@id": SITE_ID,
      url: SITE_URL,
      name: "Clauze",
      inLanguage: [...locales],
      publisher: { "@id": ORG_ID },
    },
  ];
}

export function appNode(t: Dict): Node {
  return {
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: "Clauze",
    url: APP_URL,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Legal research",
    operatingSystem: "Web",
    description: t.meta.description,
    featureList: t.showcase.items.map((i) => `${i.label}: ${i.line}`),
    inLanguage: [...locales],
    audience: { "@type": "BusinessAudience", name: "Law firms in Tunisia" },
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; href: string };

export function webPageNode(lang: Locale, href: string, p: { name: string; description: string; updated?: string; crumbs?: Crumb[] }): Node {
  const url = `${SITE_URL}${href}`;
  return {
    "@type": "WebPage",
    "@id": url,
    url,
    name: p.name,
    description: p.description,
    inLanguage: lang,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": APP_ID },
    publisher: { "@id": ORG_ID },
    ...(p.updated ? { dateModified: p.updated } : {}),
    ...(p.crumbs
      ? {
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: p.crumbs.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              item: `${SITE_URL}${c.href}`,
            })),
          },
        }
      : {}),
  };
}

export function faqNode(href: string, items: { q: string; a: string }[]): Node {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${href}#faq`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
