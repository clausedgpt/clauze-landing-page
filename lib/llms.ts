import { getContent } from "./content";
import type { Block, PageCopy } from "./content/types";
import { getDictionary, type Locale, APP_URL, CONTACT_EMAIL, LINKEDIN_URL, SITE_URL } from "./i18n";
import { type SectionId, SECTIONS, pageHref, pageIds, pagesIn, sectionHref, sectionOf } from "./pages";

/*
 * /llms.txt and /llms-full.txt (llmstxt.org): the site as Markdown for AI
 * assistants. Built from the same content as the pages, so they can't drift.
 */

const ORDER: Locale[] = ["en", "fr", "ar"];
const HEADINGS: Record<Locale, string> = { en: "Pages in English", fr: "Pages en français", ar: "الصفحات بالعربية" };

const url = (href: string) => `${SITE_URL}${href}`;

function intro(): string {
  const t = getDictionary("en");
  return [
    "# Clauze",
    "",
    `> ${t.meta.description}`,
    "",
    "Clauze is the legal platform for Tunisian law firms (avocats and cabinets). Key facts:",
    "",
    "- Corpus: 73,635 Tunisian legal texts, legislation and case law, in Arabic and French, searched together and cross-lingually; every result is marked in force or repealed.",
    "- AI legal assistant: answers from that corpus; every citation's quote is checked against the article's actual text before it is shown as a link to the source. With no supporting source, it says so instead of answering.",
    "- Document review: upload a contract, judgment or scan (PDF, scanned PDF, Word, up to 20 MB); the AI highlights problematic passages, explains why and answers questions with page references.",
    "- Contract drafting: start from an Arabic or French template, describe a change, review it as a tracked change, accept it; every version is kept; PDF export.",
    "- Practice management: matters with fees, payments and balances; a calendar of hearings and meetings with an in-app reminder the day before.",
    "- Interface in French, Arabic (right to left) and English. Access: request at " + `${APP_URL}/signup` + "; every firm is approved by the Clauze team. Pricing is not public; plans depend on firm size.",
    `- Contact: ${CONTACT_EMAIL}. Website: ${SITE_URL}. App: ${APP_URL}. LinkedIn: ${LINKEDIN_URL}`,
    "",
  ].join("\n");
}

export function llmsTxt(): string {
  const out = [intro()];
  for (const lang of ORDER) {
    const c = getContent(lang);
    out.push(`## ${HEADINGS[lang]}`, "");
    out.push(`- [${getDictionary(lang).meta.title}](${url(`/${lang}`)})`);
    for (const section of Object.keys(SECTIONS) as SectionId[]) {
      out.push(`- [${c.sections[section].title}](${url(sectionHref(section, lang))}): ${c.sections[section].description}`);
      for (const id of pagesIn(section)) out.push(`  - [${c.pages[id].title}](${url(pageHref(id, lang))}): ${c.pages[id].description}`);
    }
    for (const id of pageIds.filter((p) => !sectionOf(p))) {
      out.push(`- [${c.pages[id].title}](${url(pageHref(id, lang))}): ${c.pages[id].description}`);
    }
    out.push("");
  }
  out.push("## Optional", "", `- [Full text of every page](${url("/llms-full.txt")})`, "");
  return out.join("\n");
}

function blockMd(b: Block): string[] {
  switch (b.kind) {
    case "prose":
      return [`### ${b.title}`, "", ...b.paras.flatMap((p) => [p, ""])];
    case "points":
    case "steps":
      return [
        `### ${b.title}`,
        "",
        ...b.items.map((it, i) => `${b.kind === "steps" ? `${i + 1}.` : "-"} **${it.title}**: ${it.text}`),
        "",
      ];
    case "compare": {
      const row = (cells: string[]) => `| ${cells.join(" | ")} |`;
      return [
        `### ${b.title}`,
        "",
        row(b.head),
        row(b.head.map(() => "---")),
        ...b.rows.map(row),
        "",
        ...(b.note ? [b.note, ""] : []),
      ];
    }
    case "faq":
      return [`### ${b.title}`, "", ...b.items.flatMap((f) => [`**${f.q}**`, "", f.a, ""])];
  }
}

function pageMd(p: PageCopy, href: string): string[] {
  return [`## ${p.title}`, "", `URL: ${url(href)}`, "", p.summary, "", ...p.blocks.flatMap(blockMd)];
}

export function llmsFullTxt(): string {
  const out = [intro()];
  for (const lang of ORDER) {
    const c = getContent(lang);
    out.push(`# ${HEADINGS[lang]}`, "");
    for (const id of pageIds) out.push(...pageMd(c.pages[id], pageHref(id, lang)));
  }
  return out.join("\n");
}
