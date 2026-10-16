import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { OG_SIZE, ogImage } from "@/lib/og";
import { pageParams, resolvePage } from "@/lib/pages";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Clauze";

// Rendered once at build: every route is known in advance.
export const dynamic = "force-static";

export function generateStaticParams() {
  return pageParams();
}

export default async function Image({ params }: { params: Promise<{ lang: string; section: string; slug: string }> }) {
  const { lang, section, slug } = await params;
  const l = isLocale(lang) ? lang : "fr";
  const id = resolvePage(l, section, slug);
  const p = id ? getContent(l).pages[id] : undefined;
  return ogImage({ lang: l, eyebrow: p?.eyebrow, title: p?.h1 ?? "Clauze" });
}
