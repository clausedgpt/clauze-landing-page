import type { Dict } from "./fr";

export const en: Dict = {
  meta: {
    title: "Clauze · The legal platform for Tunisian law firms",
    description:
      "Search 73,635 Tunisian legal texts in Arabic and French. Sourced answers with citations checked against the source, document review, contract drafting and firm management.",
  },
  nav: {
    skip: "Skip to content",
    login: "Log in",
    cta: "Request access",
    menu: "Menu",
    close: "Close",
    language: "Language",
  },
  articles: ["Article 1", "Art. 2", "Art. 3", "Art. 4", "Art. 5", "Art. 6", "Art. 7", "Art. 8"],
  hero: {
    title: "Tunisian law, checkable at the source.",
    lede:
      "Clauze answers your legal questions from Tunisian legislation and case law, and every citation is checked against the article's text before you see it.",
    cta: "Request access",
    secondary: "Watch the film",
    note: "For Tunisian lawyers and law firms.",
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
  search: {
    title: "All of Tunisian law, in one search.",
    body: "Clauze's corpus holds 73,635 texts[1]: legislation and case law, in Arabic and French, searched together. A question asked in French also finds the ruling written in Arabic[2], and every result says whether it is in force[3].",
    query: "bail commercial indemnité d'éviction",
    count: "Results · legislation and case law",
    results: [
      {
        title:
          "Loi n° 77-37 du 25 mai 1977 réglant les rapports entre bailleurs et locataires des immeubles ou locaux à usage commercial, industriel ou artisanal",
        lang: "fr",
        tags: ["Legislation", "FR"],
        inForce: true,
      },
      {
        title:
          "قانون عدد 37 لسنة 1977 مؤرخ في 25 ماي 1977 يتعلق بتنظيم العلاقات بين المالكين والمتسوغين في ما يخص تجديد كراء العقارات أو المحلات ذات الاستعمال التجاري أو الصناعي أو الحرفي",
        lang: "ar",
        tags: ["Legislation", "AR"],
        inForce: true,
      },
      {
        title: "Cour de cassation · Arrêt civil · Bail commercial : indemnité d'éviction due au locataire",
        lang: "fr",
        tags: ["Case law", "FR", "Holding available"],
        inForce: false,
      },
      {
        title: "محكمة التعقيب · قرار مدني · غرامة الحرمان المستحقة للمتسوغ",
        lang: "ar",
        tags: ["Case law", "AR", "Holding available"],
        inForce: false,
      },
    ],
    inForce: "In force",
    notes: [
      "73,635 Tunisian texts, legislation and case law.",
      "Search by meaning, not just by words: Arabic and French answer each other.",
      "Every result says whether it is in force, before you open it.",
    ],
  },
  check: {
    title: "A citation only becomes a link once it is checked.",
    body: "Before showing an answer, Clauze compares every quote with the article's actual text[1]. When the excerpt matches, it becomes a link to the exact source. When it doesn't, it stays plain text, so you can see at a glance what was checked. The answer comes back in your language[2].",
    verifiedLabel: "Checked · links to the article",
    plainLabel: "Not checked · plain text",
    plainText: "“the period is reduced to three years in commercial matters”",
    hint: "Hover or select [1] to see the check.",
    notes: [
      "The check is done by code, never on the model's word.",
      "Answers come in French, Arabic or English.",
    ],
  },
  review: {
    title: "Upload a contract. Every finding points to its page.",
    body: "PDF, scanned PDF or .docx: Clauze reads the document page by page, then answers your questions citing the page each finding comes from. Your documents stay private[1] unless you choose to share the review[2].",
    file: "bail_commercial.pdf · 6 pages",
    reading: "Reading 6 pages…",
    question: "Which clauses put my client at risk?",
    summary: "3 clauses need your attention",
    findings: [
      { ref: "Art. 9", text: "The lessor may terminate without notice.", page: 4 },
      { ref: "Art. 7", text: "The late-payment penalty has no cap.", page: 3 },
      { ref: "Art. 6", text: "Rent revision is at the lessor's sole discretion.", page: 3 },
    ],
    page: "p.",
    notes: [
      "Your documents stay private to your review.",
      "Share a review with a colleague, to view or to edit.",
    ],
  },
  drafting: {
    title: "Start from a template. Describe the change.",
    body: "Pick a contract template in French or Arabic[1], fill in the fields, then ask for a change in one sentence. Clauze proposes a tracked edit; nothing is applied until you accept it, and every version is kept[2]. The contract then exports to PDF[3].",
    doc: "Contrat de bail commercial",
    instruction: "Extend the lease term to three years.",
    articleHeading: "Article 5 · Durée",
    before: "La durée du présent bail est fixée à ",
    removed: "deux (2) ans",
    added: "trois (3) ans",
    after: ", à compter de la date de sa signature par les deux parties.",
    proposed: "Proposed edit · Article 5",
    accept: "Accept",
    decline: "Decline",
    accepted: "Accepted · saved as version 4",
    declined: "Declined · the text is unchanged",
    undo: "Review the proposal again",
    exported: "bail_commercial_v4.pdf",
    notes: [
      "Contract templates in French and Arabic.",
      "Every saved version is kept; restoring an old one erases nothing.",
      "PDF export, to download or attach straight to a matter.",
    ],
    context: [
      { heading: "Article 4 · Destination des lieux", text: "Les lieux loués sont destinés exclusivement à l'exercice d'une activité commerciale de vente au détail." },
      { heading: "Article 6 · Loyer", text: "Le loyer annuel convenu entre les parties est payable par mensualités, d'avance, au domicile du bailleur." },
    ],
  },
  firm: {
    title: "Matters, fees and hearings, in one place.",
    body: "Track what each client owes you, their payments and due dates, to the millime[1]. The calendar holds your hearings and meetings, and Clauze reminds you the day before[2].",
    demo: "Fictional demo data",
    matters: [
      { client: "Ben Salah SARL", matter: "Lease dispute", balance: "4,500.000 TND", status: "late" },
      { client: "Karim Trabelsi", matter: "Labour claim", balance: "2,000.000 TND", status: "open" },
      { client: "Atlas Import", matter: "Debt recovery", balance: "0.000 TND", status: "paid" },
      { client: "Sfax Textiles", matter: "Incorporation", balance: "1,200.000 TND", status: "draft" },
    ],
    statuses: { late: "Overdue", open: "Open", paid: "Paid", draft: "Draft" },
    columns: { client: "Client", matter: "Matter", balance: "Balance" },
    month: "October 2026",
    weekdays: ["M", "T", "W", "T", "F", "S", "S"],
    reminder: "Hearing tomorrow · 09:00",
    reminderWhere: "Ben Salah SARL · Tribunal de première instance de Tunis",
    notes: [
      "Balances are computed from recorded payments, never typed in by hand.",
      "In-app reminder the day before every hearing.",
    ],
  },
  languages: {
    title: "In the language you work in.",
    body: "The whole interface comes in French, Arabic and English, with a real right-to-left layout. Everyone in the firm picks their own[1]; legal texts stay in their original language[2].",
    samples: [
      { lang: "fr", text: "Analyse de documents" },
      { lang: "ar", text: "تحليل المستندات" },
      { lang: "en", text: "Document review" },
    ],
    notes: [
      "Language is a per-user setting, in each account.",
      "The corpus and contract templates are in Arabic and French.",
    ],
  },
  film: {
    title: "Clauze, in one film.",
    body: "Search, assistant, review, drafting and firm tools, in the order you'll use them[1].",
    play: "Play the film",
    notes: [
      "The clients and matters shown in the film are fictional.",
    ],
  },
  close: {
    title: "Request access for your firm.",
    steps: [
      "You fill in the request online.",
      "The Clauze team approves your firm.",
      "You log in at app.clauze.tn.",
    ],
    cta: "Request access",
    contact: "Want a demo for your team? Write to us at",
    no: "Final provisions",
    notes: [
      "Access opens firm by firm, once the Clauze team has approved it.",
      "Your colleagues' accounts are then added to your firm's workspace.",
    ],
  },
  footer: {
    tagline: "The legal platform for Tunisian law firms.",
    app: "App",
    login: "Log in",
    signup: "Request access",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};
