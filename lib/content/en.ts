import type { Content } from "./types";

export const en: Content = {
  sections: {
    features: {
      nav: "Features",
      title: "Features: research, AI assistant, document review, drafting, practice management",
      description:
        "Clauze's five tools for Tunisian lawyers: legal research, an AI assistant with verified citations, document review, contract drafting and practice management.",
      h1: "Five tools, one body of law: Tunisia's.",
      lede: "Every Clauze tool works from the same corpus of 73,635 Tunisian legal texts, and every one points back to its source.",
    },
    useCases: {
      nav: "Use cases",
      title: "Use cases: litigation, business law, solo lawyers and firms",
      description:
        "How Tunisian lawyers use Clauze day to day: preparing litigation, reviewing and drafting contracts, running a practice alone or as a firm.",
      h1: "Clauze, for the way you practise.",
      lede: "Litigation, advising businesses, practising alone or in a firm: the same tools, different days.",
    },
    compare: {
      nav: "Comparisons",
      title: "Comparisons: Clauze vs ChatGPT, manual research and generic legal AI",
      description:
        "Clauze compared with the other ways to research Tunisian law: general-purpose AI assistants, manual research in the Official Journal and the codes, and legal AI built for other jurisdictions.",
      h1: "Clauze, compared with your other options.",
      lede: "What each option does well, what it doesn't, and where Clauze actually makes the difference.",
    },
  },
  pages: {
    "feature-research": {
      title: "Tunisian legal research: legislation and case law, in Arabic and French",
      description:
        "Search 73,635 Tunisian legal texts, legislation and case law, in Arabic and French at once. In-force status on every result, filters by court and subject.",
      eyebrow: "Legal research",
      h1: "All of Tunisian law, in one search.",
      lede: "Legislation and case law, in Arabic and French, from a single search bar.",
      summary:
        "Clauze is a legal search engine dedicated to Tunisian law. It covers 73,635 texts, legislation and case law, in Arabic and French. A query in French also finds the judgment written in Arabic, and every result shows whether the text is in force or repealed.",
      scene: "search",
      blocks: [
        {
          kind: "points",
          title: "What the search covers",
          items: [
            { title: "Legislation", text: "Codes, laws, organic laws, decrees, orders, circulars and other official Tunisian texts." },
            { title: "Case law", text: "Decisions of the Court of Cassation, the courts of appeal, the courts of first instance, the Administrative Court and the Land Court." },
            { title: "Arabic and French together", text: "One search covers both languages: you don't need to translate your query to find the judgment written in Arabic." },
            { title: "In force or repealed", text: "Every result shows its status, so you don't cite a text that no longer applies." },
          ],
        },
        {
          kind: "steps",
          title: "How a search works",
          items: [
            { title: "Type words, a title or a reference", text: "For example “commercial lease” or “Law No. 77-37”, in Arabic or French." },
            { title: "Narrow it down", text: "Filter by type of text, court, chamber, subject, business sector or year, and limit to texts in force if needed." },
            { title: "Open the source", text: "Read the full text when it is available; the interface tells you whether you are looking at the full text, a summary or an extract." },
          ],
        },
        {
          kind: "prose",
          title: "Why a search engine dedicated to Tunisian law",
          paras: [
            "Tunisian law is published in Arabic and French, and most case law is written in Arabic. A general-purpose engine, or a search in only one language, misses part of the sources.",
            "Clauze brings these texts into one index, tags them by type, court and subject, and uses them as the foundation for every other tool on the platform: the assistant, document review and drafting all work from the same corpus.",
          ],
        },
        {
          kind: "faq",
          title: "Questions about search",
          items: [
            { q: "How many texts are in the Clauze corpus?", a: "73,635 Tunisian legal texts: legislation and case law, in Arabic and French." },
            { q: "Can I search in French for a judgment written in Arabic?", a: "Yes. Search is cross-lingual: a French query also finds decisions and texts written in Arabic, and the other way round." },
            { q: "How do I know whether a text is still in force?", a: "Every result is marked “in force” or “repealed”, and you can limit your search to texts in force." },
          ],
        },
      ],
      related: ["feature-assistant", "use-litigation", "vs-manual"],
    },
    "feature-assistant": {
      title: "AI legal assistant for Tunisian law, with verified citations",
      description:
        "An AI assistant that answers from Tunisian law and checks every citation against the article's text before showing it. Sourced answers in Arabic and French.",
      eyebrow: "AI legal assistant",
      h1: "Answers where every citation is checked.",
      lede: "The assistant answers from the Tunisian corpus and points to the exact article.",
      summary:
        "Clauze's legal assistant answers questions on Tunisian law from its corpus of 73,635 texts. Before showing an answer, it compares every citation with the actual text of the article: only citations that match become links to the source. When no relevant source exists, it says so instead of making something up.",
      scene: "assistant",
      blocks: [
        {
          kind: "steps",
          title: "How the assistant builds an answer",
          items: [
            { title: "It searches", text: "Your question is searched across Tunisian legislation and case law, in Arabic and French." },
            { title: "It writes from the texts it found", text: "The answer is built on the passages retrieved, not on a model's general memory." },
            { title: "It checks every citation", text: "Each quoted passage is compared with the article's text. What matches becomes a link to the exact source; the rest stays as plain text." },
          ],
        },
        {
          kind: "prose",
          title: "An example",
          paras: [
            "Question: “What is the general limitation period for contractual claims?”",
            "Answer: under Tunisian law, actions arising from an obligation are time-barred after fifteen years, unless a special provision says otherwise. Source: Code of Obligations and Contracts, Article 402: “All actions arising from an obligation are time-barred after fifteen years, except for the exceptions below and those determined by law in particular cases.”",
          ],
        },
        {
          kind: "points",
          title: "How it differs from a general-purpose assistant",
          items: [
            { title: "A Tunisian corpus", text: "Answers come from 73,635 Tunisian legal texts, not from general training on the web." },
            { title: "Checked citations", text: "A quote is shown as a source only if it matches the article's text word for word." },
            { title: "No source, no answer", text: "When the corpus can't support an answer, the assistant says so rather than producing a plausible one." },
            { title: "Arabic and French", text: "Ask in either language; sources in both languages are taken into account." },
          ],
        },
        {
          kind: "faq",
          title: "Questions about the assistant",
          items: [
            { q: "Can the assistant make mistakes?", a: "Yes, like any AI tool. That is why every citation is checked against the text and linked to its source: you check the article before relying on it. Clauze is an assistance tool, not legal advice." },
            { q: "What happens if no source answers my question?", a: "The assistant tells you it found no sufficient source in the corpus, rather than answering without grounds." },
            { q: "Are my questions shared with my colleagues?", a: "No. Your conversations with the assistant are never shared." },
          ],
        },
      ],
      related: ["feature-research", "vs-chatgpt", "vs-legal-ai"],
    },
    "feature-review": {
      title: "AI contract and legal document review",
      description:
        "Upload a contract, a judgment or a scan: Clauze highlights the problematic passages, explains why, and answers your questions with the page it found them on.",
      eyebrow: "Document review",
      h1: "Every finding points back to its page.",
      lede: "Upload a contract or a judgment: the AI reads it, highlights and explains.",
      summary:
        "Clauze's document review analyses the contracts, judgments and other legal documents you upload, scanned PDFs included. It highlights every problematic passage, explains why, and answers your questions about the document with a reference to the page concerned.",
      scene: "review",
      blocks: [
        {
          kind: "steps",
          title: "How a review works",
          items: [
            { title: "Upload the document", text: "PDF, scanned PDF or Word, up to 20 MB. Text in scans is extracted automatically." },
            { title: "Read the critique", text: "As soon as it is uploaded, the AI reads the document, highlights each passage that raises an issue and explains why." },
            { title: "Ask your questions", text: "Question the document in the Assistant tab; every finding points back to the page it comes from." },
          ],
        },
        {
          kind: "points",
          title: "What you get",
          items: [
            { title: "Highlighted passages", text: "Problem clauses are marked in the text itself, not in a detached summary." },
            { title: "An explanation for each finding", text: "For each passage, the reason: imbalance, vagueness, risk or something to check." },
            { title: "Several documents per review", text: "Put a contract and its schedules in one review and question them together." },
            { title: "Linked to the matter", text: "Attach the review to the client's matter so it sits with the rest of the case." },
          ],
        },
        {
          kind: "prose",
          title: "Confidentiality",
          paras: [
            "A review is visible only to you, and to the colleagues you choose to share it with, read-only or with edit rights.",
            "The content of your documents is never copied into audit logs. Deleting a document also deletes its extracted text and its analysis.",
          ],
        },
        {
          kind: "faq",
          title: "Questions about review",
          items: [
            { q: "Which file formats can I upload?", a: "PDFs, including scanned documents, and Word files (.docx), up to 20 MB per file." },
            { q: "Does review work on documents in Arabic?", a: "Yes. Clauze analyses documents in Arabic as well as in French." },
            { q: "Who can see my documents?", a: "Only you, unless you share the review with a named colleague in your firm." },
          ],
        },
      ],
      related: ["feature-drafting", "use-business", "feature-assistant"],
    },
    "feature-drafting": {
      title: "Contract drafting from templates, in Arabic and French",
      description:
        "Start from a contract template in Arabic or French, describe the change, review the proposed edit and accept it. Every version is kept, with PDF export.",
      eyebrow: "Contract drafting",
      h1: "Describe the change, then accept it.",
      lede: "Contract templates in Arabic and French, edited by AI under your control.",
      summary:
        "Clauze's contract drafting starts from a template in Arabic or French. You fill in the fields, describe a change in plain words, review the AI's proposal shown as a tracked change, then accept or reject it. Every version is kept and the contract exports to PDF.",
      scene: "drafting",
      blocks: [
        {
          kind: "steps",
          title: "From template to PDF",
          items: [
            { title: "Choose a template", text: "From the contract templates in Arabic and French." },
            { title: "Fill in the fields", text: "Parties, amounts, dates: the contract's details are entered once." },
            { title: "Ask for a change", text: "For example “extend the term to three years”. The AI proposes the change, shown as a tracked change." },
            { title: "Accept, then export", text: "Accept or reject the proposal, then export the contract to PDF, as a download or attached to the matter." },
          ],
        },
        {
          kind: "points",
          title: "Under your control",
          items: [
            { title: "Nothing changes without you", text: "Every change the AI proposes waits for your approval." },
            { title: "Every version kept", text: "Restoring an older version never deletes the newer ones." },
            { title: "Direct editing", text: "You can also edit the text yourself in the editor." },
            { title: "Sharing by choice", text: "A contract is private; share it with a colleague read-only or with edit rights." },
          ],
        },
        {
          kind: "faq",
          title: "Questions about drafting",
          items: [
            { q: "Which languages are the templates in?", a: "Arabic and French." },
            { q: "Can the AI change my contract without my approval?", a: "No. Every change is proposed, shown as a tracked change, and applied only if you accept it." },
            { q: "Can I go back to an earlier version?", a: "Yes. Every saved version is kept, and restoring one doesn't delete newer versions." },
          ],
        },
      ],
      related: ["feature-review", "use-business", "feature-firm"],
    },
    "feature-firm": {
      title: "Law practice management: matters, fees, hearings",
      description:
        "Track your matters, fees and payments, and your calendar of hearings and meetings, with a reminder the day before. In the same tool as your legal research.",
      eyebrow: "Practice management",
      h1: "Matters, fees and hearings, in one place.",
      lede: "Running the firm, in the same tool as your research.",
      summary:
        "Clauze includes practice management: client matters with agreed fees, payments received and the remaining balance, and a calendar of hearings, meetings and deadlines with a reminder the day before. Reviews and contracts attach to the client's matter.",
      scene: "firm",
      blocks: [
        {
          kind: "points",
          title: "Matters",
          items: [
            { title: "Fees and balance", text: "Enter the agreed fees and the payments: the remaining balance and the share recovered are calculated for you." },
            { title: "Clear status", text: "Draft, open, paid, overdue or closed: the list sorts and filters by status, due date or amount." },
            { title: "The whole matter", text: "Attached documents, reviews, exported contracts and next actions on one page." },
          ],
        },
        {
          kind: "points",
          title: "Calendar",
          items: [
            { title: "Hearings and meetings", text: "Hearings, client meetings and internal meetings, linked to the matter concerned." },
            { title: "Deadlines in view", text: "Matters' payment due dates appear in the calendar." },
            { title: "Reminder the day before", text: "An in-app notification the day before each event." },
          ],
        },
        {
          kind: "faq",
          title: "Questions about practice management",
          items: [
            { q: "Are reminders sent by email?", a: "No. Reminders are in-app notifications, the day before the event." },
            { q: "Can my colleagues see my matters?", a: "A matter is private to whoever created it; you can share it with a named colleague, read-only or with edit rights." },
          ],
        },
      ],
      related: ["use-firms", "feature-drafting", "feature-review"],
    },
    "use-litigation": {
      title: "Clauze for litigators",
      description:
        "Prepare for hearings with Tunisian case law in Arabic and French, answers with verified citations, review of case documents and a hearings calendar.",
      eyebrow: "Litigation",
      h1: "Spend the time on the hearing, not on finding the judgment.",
      lede: "Case law, case documents and your hearings calendar, in one tool.",
      summary:
        "For a litigator, Clauze brings together Tunisian case law in Arabic and French, an assistant that answers with verified citations, review of judgments and opposing submissions, and a hearings calendar with a reminder the day before.",
      blocks: [
        {
          kind: "points",
          title: "A litigation day with Clauze",
          items: [
            { title: "Find the case law", text: "Search decisions of the Court of Cassation and the lower courts, filtered by chamber, subject or year, in both languages." },
            { title: "Check a point of law", text: "Ask the assistant and open the cited article or decision directly." },
            { title: "Read the other side's judgment", text: "Upload the judgment or the submissions: review highlights the passages to challenge and answers your questions with the page." },
            { title: "Never miss a hearing", text: "Put each hearing in the calendar, linked to the matter, with a reminder the day before." },
          ],
        },
        {
          kind: "faq",
          title: "Litigators' questions",
          items: [
            { q: "Which courts does the case law cover?", a: "The Court of Cassation, the courts of appeal, the courts of first instance, the Administrative Court and the Land Court." },
            { q: "Can I filter by chamber?", a: "Yes: by court, chamber, subject and year." },
          ],
        },
      ],
      related: ["feature-research", "feature-review", "feature-firm"],
    },
    "use-business": {
      title: "Clauze for business lawyers and legal advisers",
      description:
        "Review your clients' contracts, draft from templates in Arabic and French, and check every point of Tunisian law with verified citations.",
      eyebrow: "Business and contracts",
      h1: "Review, draft, verify: the contract end to end.",
      lede: "For lawyers who spend their days in contracts.",
      summary:
        "For a business lawyer, Clauze covers the contract cycle: review of incoming contracts with every problem clause highlighted and explained, drafting from Arabic and French templates with changes you accept one by one, and checking points of Tunisian law with an assistant whose citations are verified.",
      blocks: [
        {
          kind: "points",
          title: "The contract, end to end",
          items: [
            { title: "Review the contract you received", text: "Upload it: termination clauses, penalties, price revisions… every problematic passage is highlighted with its explanation." },
            { title: "Draft your own", text: "Start from a template, describe the changes, accept them one by one; every version is kept." },
            { title: "Check the rule", text: "A question on the Code of Obligations and Contracts or a special statute: the assistant answers with the exact article." },
            { title: "Work in Arabic and French", text: "Review, templates and search all work in both languages." },
          ],
        },
        {
          kind: "faq",
          title: "Business lawyers' questions",
          items: [
            { q: "Can I review a scanned contract?", a: "Yes. Scanned PDFs are supported; their text is extracted automatically before the analysis." },
            { q: "Do the templates cover Arabic?", a: "Yes, contract templates are available in Arabic and French." },
          ],
        },
      ],
      related: ["feature-review", "feature-drafting", "feature-assistant"],
    },
    "use-firms": {
      title: "Clauze for solo lawyers and law firms",
      description:
        "Alone or as a team: research, AI and practice management in one tool. Everything is private by default and can be shared with a named colleague.",
      eyebrow: "Solo lawyers and firms",
      h1: "Alone or as a team, the same tool.",
      lede: "It works for a solo lawyer and for a firm with several partners.",
      summary:
        "Clauze suits solo lawyers and firms alike. A solo lawyer gets research, AI and the management of matters and fees in a single tool. A firm adds its colleagues to a shared workspace, where every matter, review or contract stays private until its author shares it, read-only or with edit rights.",
      blocks: [
        {
          kind: "points",
          title: "For the solo lawyer",
          items: [
            { title: "One subscription, the whole job", text: "Research, assistant, review, drafting, matters and calendar, without stitching tools together." },
            { title: "No more spreadsheet", text: "Fees, payments and balances stay up to date, matter by matter." },
          ],
        },
        {
          kind: "points",
          title: "For the firm",
          items: [
            { title: "One workspace per firm", text: "The Clauze team adds your colleagues to the firm's workspace." },
            { title: "Private by default", text: "Matters, reviews and contracts are visible only to their author." },
            { title: "Sharing by name", text: "Depending on your plan, share an item with a specific colleague, read-only or with edit rights, and remove access at any time." },
            { title: "Everyone's own language", text: "Each user picks their interface: French, Arabic or English." },
          ],
        },
        {
          kind: "faq",
          title: "Questions about access and plans",
          items: [
            { q: "How do I add colleagues?", a: "Workspace members are added by the Clauze team, up to the number of seats in your plan." },
            { q: "How much does Clauze cost?", a: "There are several plans depending on the size of the firm. Prices are not published: write to contact@clauze.tn to discuss it." },
          ],
        },
      ],
      related: ["feature-firm", "faq", "feature-research"],
    },
    "vs-chatgpt": {
      title: "Clauze or ChatGPT for Tunisian law?",
      description:
        "ChatGPT is a general-purpose assistant; Clauze answers from 73,635 Tunisian legal texts and checks every citation against the article's text. A point-by-point comparison.",
      eyebrow: "Comparison",
      label: "Clauze vs ChatGPT",
      h1: "Clauze or ChatGPT for Tunisian law?",
      lede: "A general-purpose assistant and a Tunisian legal tool aren't answering the same question.",
      summary:
        "ChatGPT is a general-purpose assistant, useful for writing, rephrasing or translating. For a question on Tunisian law, Clauze answers from a corpus of 73,635 Tunisian legal texts, compares every citation with the actual text of the article before showing it, and says when it has no source instead of making one up.",
      blocks: [
        {
          kind: "compare",
          title: "Point by point",
          head: ["", "Clauze", "General-purpose assistant (ChatGPT…)"],
          rows: [
            ["Where answers come from", "73,635 Tunisian texts, legislation and case law", "General training data and, in some cases, web search"],
            ["Citations", "Compared with the article's text before display, linked to the source", "Not checked against the official text; article numbers are sometimes wrong"],
            ["Status of texts", "“In force” or “repealed” shown", "Not guaranteed"],
            ["Case law in Arabic", "Searched alongside texts in French", "Limited and unsystematic access"],
            ["When there is no source", "The assistant says so", "Often produces a plausible answer"],
            ["Beyond law", "Focused on legal practice", "Very broad: writing, code, translation…"],
          ],
          note: "A comparison of uses, not of one AI model against another: the difference lies in the corpus and the citation check.",
        },
        {
          kind: "prose",
          title: "When a general-purpose assistant is enough",
          paras: [
            "To rephrase a letter, summarise a text you provide, or translate a paragraph, a general-purpose assistant does the job well.",
            "Once the answer has to rest on an article of Tunisian law or a specific decision, the risk changes: a wrong citation or a repealed text is costly in court or with a client. That is the risk Clauze addresses.",
          ],
        },
        {
          kind: "faq",
          title: "Frequently asked questions",
          items: [
            { q: "Does ChatGPT know Tunisian law?", a: "It knows parts of it from its training data, but it doesn't work from a complete Tunisian corpus and doesn't check its citations against the official text of the articles." },
            { q: "Does Clauze use an AI model like ChatGPT?", a: "Clauze uses a large language model to write, but from the Tunisian texts it retrieves, and it checks every citation against the text before showing it." },
          ],
        },
      ],
      related: ["feature-assistant", "vs-legal-ai", "vs-manual"],
    },
    "vs-manual": {
      title: "Clauze or manual research (Official Journal, codes, law reports)?",
      description:
        "Manual Tunisian legal research (Official Journal, printed codes, case law reports) compared with a single search in Arabic and French in Clauze.",
      eyebrow: "Comparison",
      label: "Clauze vs manual research",
      h1: "Clauze or manual research?",
      lede: "The Official Journal, the codes and the law reports remain the references. Clauze changes how long it takes to get there.",
      summary:
        "Manual research means going through the Official Journal (JORT), the codes and the case law reports, often separately in Arabic and French. Clauze brings 73,635 of these texts into a single bilingual search, flags those in force, and links every answer from its assistant to the exact article.",
      blocks: [
        {
          kind: "compare",
          title: "Point by point",
          head: ["", "Clauze", "Manual research"],
          rows: [
            ["Starting point", "One search bar for legislation and case law", "JORT, codes, reports and websites, one by one"],
            ["Languages", "Arabic and French searched together", "One search per language"],
            ["Text in force", "Status shown on every result", "Checked by tracing amendments"],
            ["Case law", "Filtered by court, chamber, subject, year", "Depends on the reports the firm holds"],
            ["Answering a question", "Written answer, citations checked and linked", "Synthesis done by hand"],
          ],
        },
        {
          kind: "prose",
          title: "What doesn't change",
          paras: [
            "The official text remains the reference, and the lawyer's reading remains essential. Clauze replaces neither: it shortens the path to the right article and makes every citation verifiable in one click.",
          ],
        },
        {
          kind: "faq",
          title: "Frequently asked questions",
          items: [
            { q: "Does Clauze replace the Official Journal?", a: "No. The JORT remains the official publication; Clauze lets you find texts quickly and check their status." },
            { q: "How long does it take to get started with Clauze?", a: "Search works like a search engine: type words, a reference or a question, then filter." },
          ],
        },
      ],
      related: ["feature-research", "use-litigation", "vs-chatgpt"],
    },
    "vs-legal-ai": {
      title: "Clauze or a generic legal AI tool?",
      description:
        "Legal AI tools built for other jurisdictions don't cover Tunisian texts. Clauze is built on 73,635 Tunisian legal texts, in Arabic and French.",
      eyebrow: "Comparison",
      label: "Clauze vs generic legal AI",
      h1: "Clauze or a generic legal AI?",
      lede: "A legal AI is only as good as the law it knows.",
      summary:
        "Most legal AI tools are built for other countries' law, in English or in metropolitan French. Clauze is built for Tunisian law: 73,635 Tunisian texts in Arabic and French, citations checked against the articles' text, a right-to-left Arabic interface, and practice management in the same tool.",
      blocks: [
        {
          kind: "compare",
          title: "Point by point",
          head: ["", "Clauze", "Generic legal AI"],
          rows: [
            ["Law covered", "Tunisian law: legislation and case law", "Mostly other jurisdictions"],
            ["Source languages", "Arabic and French", "Often English, sometimes French"],
            ["Interface", "French, Arabic (right to left), English", "Rarely in Arabic"],
            ["Citations", "Checked against the text of Tunisian articles", "Varies by tool"],
            ["Contract templates", "Templates in Arabic and French", "Templates for other legal systems"],
            ["Practice management", "Matters, fees, hearings included", "Usually absent"],
          ],
        },
        {
          kind: "faq",
          title: "Frequently asked questions",
          items: [
            { q: "Why not use an international legal AI tool?", a: "Because it doesn't contain Tunisian texts: without Tunisian legislation and case law in its corpus, it can neither answer from them nor cite them." },
            { q: "Does Clauze cover other countries' law?", a: "No. Clauze is dedicated to Tunisian law: its corpus, templates and languages follow the practice of Tunisian firms." },
          ],
        },
      ],
      related: ["feature-assistant", "vs-chatgpt", "feature-drafting"],
    },
    faq: {
      title: "Frequently asked questions about Clauze",
      description:
        "Corpus, verified citations, languages, confidentiality, access and pricing: answers to the questions Tunisian lawyers ask about Clauze.",
      eyebrow: "FAQ",
      h1: "Frequently asked questions",
      lede: "Everything firms ask us before they start.",
      summary:
        "Clauze is the legal platform for Tunisian law firms: search across 73,635 Tunisian legal texts in Arabic and French, an AI assistant with verified citations, document review, contract drafting and practice management. Access is requested online and every firm is approved by the Clauze team.",
      blocks: [
        {
          kind: "faq",
          title: "The product",
          items: [
            { q: "What is Clauze?", a: "A platform for Tunisian law firms that brings together legal research, an AI assistant with verified citations, document review, contract drafting and practice management (matters, fees, hearings)." },
            { q: "Which texts does Clauze rely on?", a: "73,635 Tunisian legal texts: legislation and case law, in Arabic and French. Every result shows whether it is in force, and a question asked in French also finds the judgment written in Arabic." },
            { q: "How are citations verified?", a: "Before showing an answer, Clauze compares every citation with the actual text of the article. Only citations that match become links to the source; the others stay as plain text." },
            { q: "Does Clauze replace the lawyer?", a: "No. Clauze is an assistance tool: it finds the texts, suggests sourced answers and flags points to review, but the analysis and the decision remain the lawyer's." },
          ],
        },
        {
          kind: "faq",
          title: "Languages",
          items: [
            { q: "Which languages does Clauze work in?", a: "The interface is available in French, Arabic (right to left) and English; each user picks their own. The corpus and contract templates are in Arabic and French." },
            { q: "Can I ask a question in Arabic?", a: "Yes. The assistant and search accept Arabic and French, and take sources in both languages into account." },
          ],
        },
        {
          kind: "faq",
          title: "Confidentiality",
          items: [
            { q: "Do my documents stay confidential?", a: "Yes. A review is visible only to you and the colleagues you choose to share it with, and the content of your documents and contracts is never copied into audit logs." },
            { q: "Are my conversations with the assistant shared?", a: "No, never. Matters, reviews and contracts can be shared with a named colleague; conversations stay private." },
          ],
        },
        {
          kind: "faq",
          title: "Access and pricing",
          items: [
            { q: "How do I get access?", a: "Fill in the online request at app.clauze.tn/signup: the Clauze team approves your firm, then you sign in at app.clauze.tn." },
            { q: "How much does Clauze cost?", a: "There are several plans depending on the size of the firm. Prices are not published: write to contact@clauze.tn to discuss it." },
            { q: "Can we get a demo?", a: "Yes: write to contact@clauze.tn for a demo for your team." },
          ],
        },
      ],
      related: ["feature-assistant", "feature-research", "use-firms"],
    },
    security: {
      title: "Data security and confidentiality",
      description:
        "Where your data is hosted, who can see it, which AI provider processes your questions and how long everything is kept: Clauze security, plainly.",
      eyebrow: "Security",
      h1: "Your data, plainly.",
      lede: "Where it is, who sees it, and what the AI does with it.",
      summary:
        "Clauze hosts its servers, database and your files with Amazon Web Services in the Paris region (France). AI features use OpenAI, in the United States, which does not use this data to train its models. Inside Clauze, every matter, review or contract is private to its author until they share it, and conversations with the assistant are never shared.",
      blocks: [
        {
          kind: "points",
          title: "Where your data is",
          items: [
            { title: "Hosting", text: "Servers, database and files with Amazon Web Services, Paris region (France)." },
            { title: "Artificial intelligence", text: "Questions and the text of analysed documents are sent to OpenAI (United States). Data sent through the API is not used to train its models." },
            { title: "Transfers", text: "The service involves transfers of data outside Tunisia, governed by the Data Processing Agreement." },
          ],
        },
        {
          kind: "points",
          title: "Who can see it",
          items: [
            { title: "Separated by firm", text: "Each firm's data is kept apart from every other firm's." },
            { title: "Private by default", text: "Matters, reviews and contracts are visible only to their author, unless shared by name." },
            { title: "Private conversations", text: "Conversations with the assistant are never shared." },
            { title: "Approved access", text: "Every firm is approved by the Clauze team before it can use the service." },
          ],
        },
        {
          kind: "points",
          title: "How it is protected",
          items: [
            { title: "Encrypted connections", text: "Every connection goes over HTTPS." },
            { title: "Passwords", text: "Only a cryptographic hash is stored, never the password itself." },
            { title: "Logs without content", text: "The content of your documents and contracts is never copied into audit logs." },
            { title: "Backups", text: "Regular backups of the database and files, with a documented restore procedure." },
          ],
        },
        {
          kind: "prose",
          title: "A word of caution",
          paras: [
            "Bound by professional secrecy, the lawyer alone decides what to submit to the tool. When the parties' identities aren't needed for the analysis, we recommend pseudonymising names before uploading a document.",
            "Clauze's contractual commitments, the list of subprocessors and retention periods are set out in the Data Processing Agreement and the Privacy Policy.",
          ],
        },
      ],
      related: ["faq", "feature-review", "use-firms"],
    },
  },
};
