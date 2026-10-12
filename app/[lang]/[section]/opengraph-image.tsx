import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { OG_SIZE, ogImage } from "@/lib/og";
import { resolveSegment, segmentParams } from "@/lib/pages";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Clauze";

// Rendered once at build: every route is known in advance.
export const dynamic = "force-static";

export function generateStaticParams() {
  return segmentParams();
}

export default async function Image({ params }: { params: Promise<{ lang: string; section: string }> }) {
  const { lang, section } = await params;
  const l = isLocale(lang) ? lang : "fr";
  const target = resolveSegment(l, section);
  const c = getContent(l);
  if (target && "page" in target) {
    const p = c.pages[target.page];
    return ogImage({ lang: l, eyebrow: p.eyebrow, title: p.h1 });
  }
  const s = target ? c.sections[target.section] : undefined;
  return ogImage({ lang: l, eyebrow: s?.nav, title: s?.h1 ?? "Clauze" });
}
