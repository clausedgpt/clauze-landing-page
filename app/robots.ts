import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n";
import { INDEXABLE } from "@/lib/seo";

// Search engines and AI crawlers, training ones included, are all welcome:
// this is public marketing copy, and being known to AI assistants is the
// point (GEO). The named group only makes that choice explicit. The app
// (app.clauze.tn) has its own robots.txt.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "MistralAI-User",
  "DuckAssistBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
