import type { Dict } from "./fr";

export const en: Dict = {
  meta: {
    title: "Clauze · The legal platform for Tunisian law firms",
    description:
      "Search 73,635 Tunisian legal texts in Arabic and French. Sourced answers with checked citations, document review, contract drafting and firm management.",
  },
  nav: {
    skip: "Skip to content",
    login: "Log in",
    cta: "Request access",
    menu: "Menu",
    close: "Close",
    language: "Language",
    features: "Features",
    useCases: "Use cases",
    faq: "FAQ",
  },
  hero: {
    title: "Tunisian law, checkable at the source.",
    lede: "Research, sourced answers and firm management, in Arabic and French.",
    cta: "Request access",
    secondary: "Watch the film",
    chips: { corpus: "73,635 texts", verified: "Citation checked", langs: "FR · عربي · EN" },
  },
  assistant: {
    label: "Legal assistant",
    question: "What is the general limitation period for contractual claims?",
    searching: "Searching legislation and case law…",
    answer: [
      "Under Tunisian law, actions arising from an obligation are time-barred after ",
      "fifteen years",
      ", unless a special provision sets a shorter period.",
    ],
    source: "Code des obligations et des contrats · Art. 402",
    quote: [
      "Toutes les actions nées d'une obligation sont ",
      "prescrites par quinze ans",
      ", sauf les exceptions ci-après et celles qui sont déterminées par la loi dans les cas particuliers.",
    ],
    quoteLang: "fr",
    verified: "Quote checked against the source",
    input: "Ask your legal question…",
  },
  facts: [
    { icon: "corpus", text: "73,635 Tunisian texts" },
    { icon: "langs", text: "Arabic and French" },
    { icon: "force", text: "In force, flagged" },
    { icon: "check", text: "Checked citations" },
  ],
  showcase: {
    title: "One platform. The whole firm.",
    lede: "Five tools, one body of law: yours.",
    items: [
      { id: "recherche", label: "Search", line: "All of Tunisian law, in one search." },
      { id: "assistant", label: "Assistant", line: "Answers where every citation is checked." },
      { id: "revue", label: "Review", line: "Every finding points to its page." },
      { id: "redaction", label: "Drafting", line: "Describe the change, accept it." },
      { id: "cabinet", label: "Firm", line: "Matters, fees and hearings." },
    ],
  },
  scenes: {
    query: "commercial lease",
    question: "Limitation period?",
    verified: "Checked",
    inForce: "In force",
    page: "p.",
    findings: ["Termination without notice", "Uncapped late penalty", "Rent revised at will"],
    instruction: "Extend the term to three years",
    removed: "deux (2) ans",
    added: "trois (3) ans",
    accept: "Accept",
    version: "Version 4",
    reminder: "Hearing tomorrow · 09:00",
    month: "October",
    weekdays: ["M", "T", "W", "T", "F", "S", "S"],
  },
  local: {
    title: "Built for Tunisian law.",
    counter: "statutes and rulings",
    points: ["Legislation and case law", "Arabic and French, together", "Interface FR · عربي · EN"],
  },
  trust: {
    title: "Nothing taken on trust.",
    points: [
      { icon: "check", text: "Every quote compared with the article's text" },
      { icon: "lock", text: "Your reviews stay private" },
      { icon: "eye", text: "No document content in audit logs" },
      { icon: "shield", text: "Every firm approved before access" },
    ],
  },
  film: {
    title: "Clauze, in one film.",
    play: "Play the film",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Which texts does Clauze rely on?",
        a: "73,635 Tunisian texts: legislation and case law, in Arabic and French. Every result says whether it is in force, and a question asked in French also finds the ruling written in Arabic.",
      },
      {
        q: "How are citations checked?",
        a: "Before showing an answer, Clauze compares every quote with the article's actual text. Only the quotes that match become links to the source; the others stay plain text.",
      },
      {
        q: "Do my documents stay confidential?",
        a: "Yes. A review is visible only to you and the colleagues you choose to share it with, and the content of your documents and contracts is never copied into audit logs.",
      },
      {
        q: "Which languages does Clauze work in?",
        a: "The interface comes in French, Arabic (right to left) and English; each user picks their own. The corpus and contract templates are in Arabic and French.",
      },
      {
        q: "How do I get access, and what does it cost?",
        a: "Fill in the request online: the Clauze team approves your firm, then you log in at app.clauze.tn. There are several plans depending on firm size; write to us to discuss.",
      },
    ],
  },
  close: {
    title: "Request access for your firm.",
    line: "Approved by the Clauze team, then log in at app.clauze.tn.",
    cta: "Request access",
    contact: "Want a demo for your team?",
  },
  site: {
    home: "Home",
    breadcrumb: "Breadcrumb",
    inBrief: "In short",
    updated: "Updated",
    related: "Read next",
    readMore: "Learn more",
    allQuestions: "All questions",
    overview: "Overview",
  },
  footer: {
    tagline: "The legal platform for Tunisian law firms.",
    resources: "Resources",
    terms: "Terms",
    privacy: "Privacy",
    login: "Log in",
    signup: "Request access",
    rights: "All rights reserved.",
  },
};
