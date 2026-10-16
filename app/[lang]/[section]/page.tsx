import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageView } from "@/components/page-view";
import { SectionView } from "@/components/section-view";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { resolveSegment, segmentParams } from "@/lib/pages";
import { routeMetadata } from "@/lib/seo";

// /[lang]/[section]: a section index (/fr/fonctionnalites) or a top-level
// page (/fr/faq). Everything is known at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return segmentParams();
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[section]">): Promise<Metadata> {
  const { lang, section } = await params;
  if (!isLocale(lang)) return {};
  const target = resolveSegment(lang, section);
  if (!target) return {};
  const copy = "page" in target ? getContent(lang).pages[target.page] : getContent(lang).sections[target.section];
  return routeMetadata(lang, target, copy);
}

export default async function SegmentPage({ params }: PageProps<"/[lang]/[section]">) {
  const { lang, section } = await params;
  if (!isLocale(lang)) notFound();
  const target = resolveSegment(lang, section);
  if (!target) notFound();
  return "page" in target ? <PageView id={target.page} lang={lang} /> : <SectionView section={target.section} lang={lang} />;
}
