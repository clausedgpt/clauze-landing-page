import { type NextRequest, NextResponse } from "next/server";

// Only "/" is dynamic: send the visitor to their language, French by default.
export function proxy(req: NextRequest) {
  const accept = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const ranked = accept
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  const lang = ranked.find((r) => r.lang === "fr" || r.lang === "ar" || r.lang === "en")?.lang ?? "fr";
  return NextResponse.redirect(new URL(`/${lang}`, req.url));
}

export const config = { matcher: "/" };
