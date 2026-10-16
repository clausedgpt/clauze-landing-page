import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { OG_SIZE, ogImage } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Clauze";

// Rendered once at build: every route is known in advance.
export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = isLocale(lang) ? lang : "fr";
  return ogImage({ lang: l, title: getDictionary(l).hero.title });
}
