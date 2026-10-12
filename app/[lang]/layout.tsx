import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Markazi_Text, Readex_Pro } from "next/font/google";
import { notFound } from "next/navigation";
import { SITE_URL, dir, getDictionary, isLocale, locales } from "@/lib/i18n";
import { INDEXABLE } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next"
import "../globals.css";

// Brand typefaces (owner-pinned): Cormorant Garamond primary, DM Sans secondary.
// Neither covers Arabic, which keeps Readex Pro (voice) and Markazi Text (law).
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const dmSans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-dm-sans", display: "swap" });
const readex = Readex_Pro({ subsets: ["arabic", "latin"], variable: "--font-readex", display: "swap" });
const markazi = Markazi_Text({ subsets: ["arabic", "latin"], variable: "--font-markazi", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#fdfaf4" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang);
  // Canonical, hreflang and Open Graph are set per route (lib/seo.ts).
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.meta.title, template: "%s · Clauze" },
    description: t.meta.description,
    applicationName: "Clauze",
    ...(INDEXABLE ? {} : { robots: { index: false, follow: false } }),
  };
}

// Set before first paint so staged demos never flash: .motion only when JS
// runs and the visitor hasn't asked for reduced motion.
const motionScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')}catch(e){}`;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      dir={dir(lang)}
      className={`${cormorant.variable} ${dmSans.variable} ${readex.variable} ${markazi.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
