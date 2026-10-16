import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageView } from "@/components/page-view";
import { getContent } from "@/lib/content";
import { isLocale } from "@/lib/i18n";
import { pageParams, resolvePage } from "@/lib/pages";
import { routeMetadata } from "@/lib/seo";

// /[lang]/[section]/[slug]: a feature, use-case or comparison page.
export const dynamicParams = false;

export function generateStaticParams() {
  return pageParams();
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[section]/[slug]">): Promise<Metadata> {
  const { lang, section, slug } = await params;
  if (!isLocale(lang)) return {};
  const id = resolvePage(lang, section, slug);
  if (!id) return {};
  return routeMetadata(lang, { page: id }, getContent(lang).pages[id]);
}

export default async function ContentPage({ params }: PageProps<"/[lang]/[section]/[slug]">) {
  const { lang, section, slug } = await params;
  if (!isLocale(lang)) notFound();
  const id = resolvePage(lang, section, slug);
  if (!id) notFound();
  return <PageView id={id} lang={lang} />;
}
