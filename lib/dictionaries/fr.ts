// Source catalog. en.ts and ar.ts must match this shape (enforced by Dict).
// Copy is kept short on purpose: sections carry one line; detail lives in the FAQ.
// Scene labels are illustration text; statutes quoted are real Tunisian law.

export const fr = {
  meta: {
    title: "Clauze · La plateforme juridique des cabinets tunisiens",
    description:
      "Recherche dans 73 635 textes de droit tunisien, en arabe et en français. Réponses sourcées, citations vérifiées, revue de documents, rédaction de contrats et gestion du cabinet.",
  },
  nav: {
    skip: "Aller au contenu",
    login: "Se connecter",
    cta: "Demander un accès",
    menu: "Menu",
    close: "Fermer",
    language: "Langue",
  },
  hero: {
    title: "Le droit tunisien, vérifiable à la source.",
    lede: "Recherche, réponses sourcées et gestion du cabinet, en arabe et en français.",
    cta: "Demander un accès",
    secondary: "Voir le film",
    chips: { corpus: "73 635 textes", verified: "Citation vérifiée", langs: "FR · عربي · EN" },
  },
  assistant: {
    label: "Assistant juridique",
    question: "Quel est le délai de prescription général des actions contractuelles ?",
    searching: "Recherche dans la législation et la jurisprudence…",
    answer: [
      "En droit tunisien, les actions nées d'une obligation se prescrivent par ",
      "quinze ans",
      ", sauf disposition spéciale prévoyant un délai plus court.",
    ],
    source: "Code des obligations et des contrats · Art. 402",
    quote: [
      "Toutes les actions nées d'une obligation sont ",
      "prescrites par quinze ans",
      ", sauf les exceptions ci-après et celles qui sont déterminées par la loi dans les cas particuliers.",
    ],
    quoteLang: "fr",
    verified: "Citation vérifiée à la source",
    input: "Posez votre question juridique…",
  },
  facts: [
    { icon: "corpus", text: "73 635 textes tunisiens" },
    { icon: "langs", text: "Arabe et français" },
    { icon: "force", text: "En vigueur, signalé" },
    { icon: "check", text: "Citations vérifiées" },
  ],
  showcase: {
    title: "Une plateforme. Tout le cabinet.",
    lede: "Cinq outils, un seul droit : le vôtre.",
    items: [
      { id: "recherche", label: "Recherche", line: "Toute la loi tunisienne, en une recherche." },
      { id: "assistant", label: "Assistant", line: "Des réponses dont chaque citation est vérifiée." },
      { id: "revue", label: "Revue", line: "Chaque constat renvoie à sa page." },
      { id: "redaction", label: "Rédaction", line: "Décrivez la modification, acceptez-la." },
      { id: "cabinet", label: "Cabinet", line: "Dossiers, honoraires et audiences." },
    ],
  },
  scenes: {
    query: "bail commercial",
    question: "Délai de prescription ?",
    verified: "Vérifiée",
    inForce: "En vigueur",
    page: "p.",
    findings: ["Résiliation sans préavis", "Pénalité non plafonnée", "Loyer révisable à discrétion"],
    instruction: "Porter la durée à trois ans",
    removed: "deux (2) ans",
    added: "trois (3) ans",
    accept: "Accepter",
    version: "Version 4",
    reminder: "Audience demain · 09:00",
    month: "Octobre",
    weekdays: ["L", "M", "M", "J", "V", "S", "D"],
  },
  local: {
    title: "Pensé pour le droit tunisien.",
    counter: "textes de loi et décisions",
    points: ["Législation et jurisprudence", "Arabe et français, ensemble", "Interface FR · عربي · EN"],
  },
  trust: {
    title: "Rien à croire sur parole.",
    points: [
      { icon: "check", text: "Chaque citation comparée au texte de l'article" },
      { icon: "lock", text: "Vos revues restent privées" },
      { icon: "eye", text: "Aucun contenu de document dans les journaux" },
      { icon: "shield", text: "Chaque cabinet validé avant l'accès" },
    ],
  },
  film: {
    title: "Clauze, en un film.",
    play: "Lire le film",
  },
  faq: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Sur quels textes Clauze s'appuie-t-il ?",
        a: "Sur 73 635 textes tunisiens : législation et jurisprudence, en arabe et en français. Chaque résultat indique s'il est en vigueur, et une question posée en français trouve aussi l'arrêt rédigé en arabe.",
      },
      {
        q: "Comment les citations sont-elles vérifiées ?",
        a: "Avant d'afficher une réponse, Clauze compare chaque citation au texte réel de l'article. Seules les citations qui correspondent deviennent des liens vers la source ; les autres restent en texte simple.",
      },
      {
        q: "Mes documents restent-ils confidentiels ?",
        a: "Oui. Une revue n'est visible que par vous et les confrères avec qui vous choisissez de la partager, et le contenu de vos documents et contrats n'est jamais copié dans les journaux d'audit.",
      },
      {
        q: "Dans quelles langues fonctionne Clauze ?",
        a: "L'interface existe en français, en arabe (de droite à gauche) et en anglais ; chaque utilisateur choisit la sienne. Le corpus et les modèles de contrats sont en arabe et en français.",
      },
      {
        q: "Comment obtenir l'accès, et à quel prix ?",
        a: "Remplissez la demande en ligne : l'équipe Clauze valide votre cabinet, puis vous vous connectez sur app.clauze.tn. Plusieurs formules existent selon la taille du cabinet ; écrivez-nous pour en parler.",
      },
    ],
  },
  close: {
    title: "Demandez l'accès pour votre cabinet.",
    line: "Validation par l'équipe Clauze, puis connexion sur app.clauze.tn.",
    cta: "Demander un accès",
    contact: "Une démonstration pour votre équipe ?",
  },
  footer: {
    tagline: "La plateforme juridique des cabinets tunisiens.",
    app: "Application",
    login: "Se connecter",
    signup: "Demander un accès",
    contact: "Contact",
    rights: "Tous droits réservés.",
  },
};

export type Dict = typeof fr;
