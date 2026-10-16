import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Locale } from "./i18n";

/*
 * The social card (1200×630) shared by every route's opengraph-image: brand
 * row, eyebrow, title, domain. Latin titles are set in Cormorant Garamond;
 * Arabic goes through HarfBuzz (lib/og-arabic.ts) and is mirrored.
 */

export const OG_SIZE = { width: 1200, height: 630 };

const C = { jasmin: "#fdfaf4", minuit: "#0c1b2e", medina: "#344257", kef: "#c8892a", kefInk: "#8a5a14", grey: "#80858b" };
const font = (f: string) => readFile(join(process.cwd(), "assets/fonts", f));

const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 27.5 35" width="44" height="56" fill="none"><path d="M18 1.5C18 1.5 2 4.5 2 17.5C2 30.5 18 33.5 18 33.5" stroke="${C.minuit}" stroke-width="3.2" stroke-linecap="round"/><path d="M25 8.5C25 8.5 12 10.5 12 17.5C12 24.5 25 26.5 25 26.5" stroke="${C.grey}" stroke-width="1.8" stroke-linecap="round"/><circle cx="2" cy="17.5" r="2.3" fill="${C.kef}"/></svg>`;
const MARK_SRC = `data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`;

export async function ogImage({ lang, eyebrow, title }: { lang: Locale; eyebrow?: string; title: string }) {
  const [cormorant, dmSans] = await Promise.all([font("CormorantGaramond-Bold.ttf"), font("DMSans-Medium.ttf")]);
  const rtl = lang === "ar";
  const textWidth = OG_SIZE.width - 2 * 80;

  let heading;
  let kicker;
  if (rtl) {
    const { arabicSvg } = await import("./og-arabic");
    const t = arabicSvg(title, { size: 64, width: textWidth, lineHeight: 104, color: C.minuit, maxLines: 3 });
    heading = <img src={t.src} width={t.width} height={t.height} alt="" />;
    if (eyebrow) {
      const e = arabicSvg(eyebrow, { size: 28, width: textWidth, lineHeight: 48, color: C.kefInk, maxLines: 1 });
      kicker = <img src={e.src} width={e.width} height={e.height} alt="" />;
    }
  } else {
    heading = (
      <div style={{ fontFamily: "Cormorant", fontSize: title.length > 60 ? 66 : 80, lineHeight: 1.04, color: C.minuit, letterSpacing: -1 }}>
        {title}
      </div>
    );
    if (eyebrow) kicker = <div style={{ fontFamily: "DM Sans", fontSize: 28, color: C.kefInk }}>{eyebrow}</div>;
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: `radial-gradient(circle at ${rtl ? "12%" : "88%"} 8%, rgba(240, 201, 122, 0.45), rgba(253, 250, 244, 0) 45%), ${C.jasmin}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexDirection: rtl ? "row-reverse" : "row" }}>
          <img src={MARK_SRC} width={44} height={56} alt="" />
          <div style={{ fontFamily: "Cormorant", fontSize: 48, color: C.minuit }}>Clauze</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, alignItems: rtl ? "flex-end" : "flex-start" }}>
          {kicker}
          {heading}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexDirection: rtl ? "row-reverse" : "row" }}>
          <div style={{ width: 64, height: 4, borderRadius: 2, background: C.kef }} />
          <div style={{ fontFamily: "DM Sans", fontSize: 26, color: C.medina }}>clauze.tn</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Cormorant", data: cormorant, weight: 700, style: "normal" },
        { name: "DM Sans", data: dmSans, weight: 500, style: "normal" },
      ],
    },
  );
}
