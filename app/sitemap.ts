import type { MetadataRoute } from "next";
import { LEGAL_LIVE, LEGAL_URLS, SITE_URL, locales } from "@/lib/i18n";
import { type SectionId, type Target, SECTIONS, alternatesFor, hrefFor, pageIds, updatedOn } from "@/lib/pages";

// Every route in every language, each entry listing its hreflang siblings.
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = pageIds.map(updatedOn).sort().at(-1)!;
  const targets: { target: Target; updated: string }[] = [
    { target: "home", updated: latest },
    ...(Object.keys(SECTIONS) as SectionId[]).map((section) => ({ target: { section }, updated: latest })),
    ...pageIds.map((page) => ({ target: { page }, updated: updatedOn(page) })),
  ];
  const entries: MetadataRoute.Sitemap = targets.flatMap(({ target, updated }) => {
    const alternates = alternatesFor(target);
    const languages = Object.fromEntries(
      [...locales.map((l) => [l, `${SITE_URL}${alternates[l]}`]), ["x-default", `${SITE_URL}${alternates.fr}`]],
    );
    return locales.map((lang) => ({
      url: `${SITE_URL}${hrefFor(target, lang)}`,
      lastModified: updated,
      alternates: { languages },
    }));
  });
  if (LEGAL_LIVE) entries.push({ url: LEGAL_URLS.terms }, { url: LEGAL_URLS.privacy });
  return entries;
}
