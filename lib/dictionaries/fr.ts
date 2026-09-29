// Source catalog. en.ts and ar.ts must match this shape (enforced by Dict).
// Demo content (matters, clients, contract) is fictional and labelled as such
// on the page; statutes and article text are real Tunisian law.

export const fr = {
  meta: {
    title: "Clauze · La plateforme juridique des cabinets tunisiens",
    description:
      "Recherche dans 73 635 textes de droit tunisien, en arabe et en français. Réponses sourcées, citations vérifiées à la source, revue de documents, rédaction de contrats et gestion du cabinet.",
  },
  nav: {
    skip: "Aller au contenu",
    login: "Se connecter",
    cta: "Demander un accès",
    menu: "Menu",
    close: "Fermer",
    language: "Langue",
  },
  articles: ["Article premier", "Art. 2", "Art. 3", "Art. 4", "Art. 5", "Art. 6", "Art. 7", "Art. 8"],
  hero: {
    title: "Le droit tunisien, vérifiable à la source.",
    lede:
      "Clauze répond à vos questions juridiques à partir des lois et de la jurisprudence tunisiennes, et chaque citation est vérifiée contre le texte de l'article avant de vous être montrée.",
    cta: "Demander un accès",
    secondary: "Voir le film",
    note: "Pour les avocats et les cabinets tunisiens.",
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
  search: {
    title: "Toute la loi tunisienne, en une seule recherche.",
    body: "Le corpus de Clauze compte 73 635 textes[1] : législation et jurisprudence, en arabe et en français, interrogés ensemble. Une question posée en français trouve aussi l'arrêt rédigé en arabe[2], et chaque résultat indique s'il est en vigueur[3].",
    query: "bail commercial indemnité d'éviction",
    count: "Résultats · législation et jurisprudence",
    results: [
      {
        title:
          "Loi n° 77-37 du 25 mai 1977 réglant les rapports entre bailleurs et locataires des immeubles ou locaux à usage commercial, industriel ou artisanal",
        lang: "fr",
        tags: ["Législation", "FR"],
        inForce: true,
      },
      {
        title:
          "قانون عدد 37 لسنة 1977 مؤرخ في 25 ماي 1977 يتعلق بتنظيم العلاقات بين المالكين والمتسوغين في ما يخص تجديد كراء العقارات أو المحلات ذات الاستعمال التجاري أو الصناعي أو الحرفي",
        lang: "ar",
        tags: ["Législation", "AR"],
        inForce: true,
      },
      {
        title: "Cour de cassation · Arrêt civil · Bail commercial : indemnité d'éviction due au locataire",
        lang: "fr",
        tags: ["Jurisprudence", "FR", "Principe disponible"],
        inForce: false,
      },
      {
        title: "محكمة التعقيب · قرار مدني · غرامة الحرمان المستحقة للمتسوغ",
        lang: "ar",
        tags: ["Jurisprudence", "AR", "Principe disponible"],
        inForce: false,
      },
    ],
    inForce: "En vigueur",
    notes: [
      "73 635 textes tunisiens, législation et jurisprudence.",
      "Recherche par le sens, pas seulement par les mots : l'arabe et le français se répondent.",
      "La mention « en vigueur » figure sur chaque résultat, avant même de l'ouvrir.",
    ],
  },
  check: {
    title: "Une citation n'est un lien que si elle est vérifiée.",
    body: "Avant d'afficher une réponse, Clauze compare chaque citation au texte réel de l'article[1]. Si l'extrait correspond, il devient un lien vers la source exacte. Sinon, il reste en texte simple : vous voyez d'un coup d'œil ce qui a été contrôlé. La réponse vous parvient dans votre langue[2].",
    verifiedLabel: "Vérifiée · lien vers l'article",
    plainLabel: "Non vérifiée · texte simple",
    plainText: "« le délai est réduit à trois ans en matière commerciale »",
    hint: "Survolez ou sélectionnez [1] pour voir la vérification.",
    notes: [
      "La vérification est faite par le code, pas sur la parole du modèle.",
      "Les réponses sont en français, en arabe ou en anglais.",
    ],
  },
  review: {
    title: "Déposez un contrat. Chaque constat renvoie à sa page.",
    body: "PDF, PDF scanné ou fichier .docx : Clauze lit le document page par page, puis répond à vos questions en citant la page d'où vient chaque constat. Vos documents restent privés[1], sauf si vous choisissez de partager la revue[2].",
    file: "bail_commercial.pdf · 6 pages",
    reading: "Lecture de 6 pages…",
    question: "Quelles clauses exposent mon client ?",
    summary: "3 clauses méritent votre attention",
    findings: [
      { ref: "Art. 9", text: "Le bailleur peut résilier sans préavis.", page: 4 },
      { ref: "Art. 7", text: "La pénalité de retard n'est pas plafonnée.", page: 3 },
      { ref: "Art. 6", text: "La révision du loyer est laissée à la seule discrétion du bailleur.", page: 3 },
    ],
    page: "p.",
    notes: [
      "Vos documents restent privés à votre revue.",
      "Partagez une revue avec un confrère, en lecture ou en modification.",
    ],
  },
  drafting: {
    title: "Partez d'un modèle. Décrivez la modification.",
    body: "Choisissez un modèle de contrat en français ou en arabe[1], remplissez les champs, puis demandez une modification en une phrase. Clauze propose une modification suivie ; rien n'est appliqué sans votre accord, et chaque version est conservée[2]. Le contrat s'exporte ensuite en PDF[3].",
    doc: "Contrat de bail commercial",
    instruction: "Porter la durée du bail à trois ans.",
    articleHeading: "Article 5 · Durée",
    before: "La durée du présent bail est fixée à ",
    removed: "deux (2) ans",
    added: "trois (3) ans",
    after: ", à compter de la date de sa signature par les deux parties.",
    proposed: "Modification proposée · Article 5",
    accept: "Accepter",
    decline: "Refuser",
    accepted: "Acceptée · version 4 enregistrée",
    declined: "Refusée · le texte reste inchangé",
    undo: "Revoir la proposition",
    exported: "bail_commercial_v4.pdf",
    notes: [
      "Modèles de contrats en français et en arabe.",
      "Chaque version enregistrée est conservée ; une ancienne version se restaure sans rien effacer.",
      "Export PDF, à télécharger ou à joindre directement à un dossier.",
    ],
    context: [
      { heading: "Article 4 · Destination des lieux", text: "Les lieux loués sont destinés exclusivement à l'exercice d'une activité commerciale de vente au détail." },
      { heading: "Article 6 · Loyer", text: "Le loyer annuel convenu entre les parties est payable par mensualités, d'avance, au domicile du bailleur." },
    ],
  },
  firm: {
    title: "Dossiers, honoraires et audiences, au même endroit.",
    body: "Suivez ce que chaque client vous doit, les paiements et les échéances, au millime près[1]. Le calendrier réunit vos audiences et vos rendez-vous, et Clauze vous le rappelle la veille[2].",
    demo: "Données fictives de démonstration",
    matters: [
      { client: "Ben Salah SARL", matter: "Litige de bail", balance: "4 500,000 DT", status: "late" },
      { client: "Karim Trabelsi", matter: "Litige du travail", balance: "2 000,000 DT", status: "open" },
      { client: "Atlas Import", matter: "Recouvrement", balance: "0,000 DT", status: "paid" },
      { client: "Sfax Textiles", matter: "Constitution de société", balance: "1 200,000 DT", status: "draft" },
    ],
    statuses: { late: "En retard", open: "Ouvert", paid: "Payé", draft: "Brouillon" },
    columns: { client: "Client", matter: "Dossier", balance: "Solde" },
    month: "Octobre 2026",
    weekdays: ["L", "M", "M", "J", "V", "S", "D"],
    reminder: "Audience demain · 09:00",
    reminderWhere: "Ben Salah SARL · Tribunal de première instance de Tunis",
    notes: [
      "Soldes calculés à partir des paiements enregistrés, jamais saisis à la main.",
      "Rappel dans l'application la veille de chaque audience.",
    ],
  },
  languages: {
    title: "Dans votre langue de travail.",
    body: "Toute l'interface existe en français, en arabe et en anglais, avec une vraie mise en page de droite à gauche. Chaque membre du cabinet choisit la sienne[1] ; les textes de loi, eux, restent dans leur langue d'origine[2].",
    samples: [
      { lang: "fr", text: "Analyse de documents" },
      { lang: "ar", text: "تحليل المستندات" },
      { lang: "en", text: "Document review" },
    ],
    notes: [
      "La langue se règle par utilisateur, dans son compte.",
      "Le corpus et les modèles de contrats sont en arabe et en français.",
    ],
  },
  film: {
    title: "Clauze, en un film.",
    body: "Recherche, assistant, revue, rédaction et cabinet, dans l'ordre où vous les utiliserez[1].",
    play: "Lire le film",
    notes: [
      "Les clients et dossiers montrés dans le film sont fictifs.",
    ],
  },
  close: {
    title: "Demandez l'accès pour votre cabinet.",
    steps: [
      "Vous remplissez la demande en ligne.",
      "L'équipe Clauze valide votre cabinet.",
      "Vous vous connectez sur app.clauze.tn.",
    ],
    cta: "Demander un accès",
    contact: "Une démonstration pour votre équipe ? Écrivez-nous à",
    no: "Dispositions finales",
    notes: [
      "L'accès est ouvert cabinet par cabinet, après validation par l'équipe Clauze.",
      "Les comptes de vos collaborateurs sont ensuite ajoutés à l'espace de votre cabinet.",
    ],
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
