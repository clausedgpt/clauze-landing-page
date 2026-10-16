import type { PageId, SectionId } from "../pages";

/*
 * Shape of the public pages' copy. Written answer-first for search and AI
 * engines: a one-paragraph `summary` right under the title, headings that say
 * what the section answers, short self-contained paragraphs, and an FAQ whose
 * questions are phrased the way people ask them.
 *
 * Rules (same as the landing page): real product behaviour only, no invented
 * customers, quotes, numbers or benchmarks; statutes quoted must be real.
 */

export type SceneId = "search" | "assistant" | "review" | "drafting" | "firm";

export type Item = { title: string; text: string };
export type QA = { q: string; a: string };

export type Block =
  /** Plain paragraphs under a heading. */
  | { kind: "prose"; title: string; paras: string[] }
  /** A grid of short titled points. */
  | { kind: "points"; title: string; items: Item[] }
  /** A numbered sequence. */
  | { kind: "steps"; title: string; items: Item[] }
  /** Criteria × [Clauze, the alternative]. */
  | { kind: "compare"; title: string; head: [string, string, string]; rows: [string, string, string][]; note?: string }
  /** Questions and answers; marked up as FAQPage. */
  | { kind: "faq"; title: string; items: QA[] };

export type PageCopy = {
  /** <title> and social title, without the " · Clauze" suffix. */
  title: string;
  /** Meta description, ~150 characters. */
  description: string;
  eyebrow: string;
  /** Short link label (footer, related links); defaults to the eyebrow. */
  label?: string;
  h1: string;
  lede: string;
  /** "In short": the direct answer, quotable on its own. */
  summary: string;
  scene?: SceneId;
  blocks: Block[];
  related: PageId[];
};

export type SectionCopy = {
  /** Short label for navigation. */
  nav: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
};

export type Content = {
  sections: Record<SectionId, SectionCopy>;
  pages: Record<PageId, PageCopy>;
};
