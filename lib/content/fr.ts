import type { Content } from "./types";

// Source copy for the public pages. en.ts and ar.ts must cover the same ids
// (enforced by Content).
export const fr: Content = {
  sections: {
    features: {
      nav: "Fonctionnalités",
      title: "Fonctionnalités : recherche, assistant IA, revue, rédaction, cabinet",
      description:
        "Les cinq outils de Clauze pour les avocats tunisiens : recherche juridique, assistant IA aux citations vérifiées, revue de documents, rédaction de contrats et gestion du cabinet.",
      h1: "Cinq outils, un seul droit : le droit tunisien.",
      lede: "Chaque outil de Clauze travaille sur le même corpus de 73 635 textes tunisiens, et chacun renvoie à sa source.",
    },
    useCases: {
      nav: "Cas d'usage",
      title: "Cas d'usage : contentieux, affaires, cabinets",
      description:
        "Comment les avocats tunisiens utilisent Clauze au quotidien : préparer un contentieux, revoir et rédiger des contrats, gérer un cabinet seul ou à plusieurs.",
      h1: "Clauze, selon votre pratique.",
      lede: "Contentieux, conseil aux entreprises, exercice individuel ou en cabinet : les mêmes outils, des journées différentes.",
    },
    compare: {
      nav: "Comparatifs",
      title: "Comparatifs : Clauze face à ChatGPT, à la recherche manuelle et à l'IA juridique généraliste",
      description:
        "Clauze comparé aux autres façons de faire de la recherche juridique tunisienne : assistants IA généralistes, recherche manuelle dans le JORT et les codes, outils d'IA juridique non tunisiens.",
      h1: "Clauze, comparé à vos autres options.",
      lede: "Ce que chaque option fait bien, ce qu'elle ne fait pas, et quand Clauze change vraiment la donne.",
    },
  },
  pages: {
    "feature-research": {
      title: "Recherche juridique tunisienne : législation et jurisprudence, en arabe et en français",
      description:
        "Cherchez dans 73 635 textes tunisiens, législation et jurisprudence, en arabe et en français à la fois. Statut « en vigueur » affiché, filtres par juridiction et matière.",
      eyebrow: "Recherche juridique",
      h1: "Toute la loi tunisienne, en une seule recherche.",
      lede: "Législation et jurisprudence, en arabe et en français, dans une seule barre de recherche.",
      summary:
        "Clauze est un moteur de recherche juridique dédié au droit tunisien. Il couvre 73 635 textes, législation et jurisprudence, en arabe et en français. Une question posée en français retrouve aussi l'arrêt rédigé en arabe, et chaque résultat indique s'il est en vigueur ou abrogé.",
      scene: "search",
      blocks: [
        {
          kind: "points",
          title: "Ce que couvre la recherche",
          items: [
            { title: "Législation", text: "Codes, lois, lois organiques, décrets, arrêtés, circulaires et autres textes officiels tunisiens." },
            { title: "Jurisprudence", text: "Décisions de la Cour de cassation, des cours d'appel, des tribunaux de première instance, du Tribunal administratif et du Tribunal immobilier." },
            { title: "Arabe et français ensemble", text: "Une seule recherche interroge les deux langues : vous n'avez pas à traduire votre requête pour trouver l'arrêt rédigé en arabe." },
            { title: "En vigueur ou abrogé", text: "Chaque résultat affiche son statut, pour ne pas citer un texte qui ne s'applique plus." },
          ],
        },
        {
          kind: "steps",
          title: "Comment se déroule une recherche",
          items: [
            { title: "Tapez des mots, un titre ou une référence", text: "Par exemple « bail commercial » ou « loi n° 77-37 », en arabe ou en français." },
            { title: "Affinez", text: "Filtrez par type de texte, juridiction, chambre, matière, domaine d'activité ou année, et limitez aux textes en vigueur si besoin." },
            { title: "Ouvrez la source", text: "Lisez le texte intégral quand il est disponible ; l'interface indique s'il s'agit du texte intégral, d'un sommaire ou d'un extrait." },
          ],
        },
        {
          kind: "prose",
          title: "Pourquoi un moteur dédié au droit tunisien",
          paras: [
            "Le droit tunisien est publié en arabe et en français, et la jurisprudence est majoritairement rédigée en arabe. Un moteur généraliste ou une recherche dans une seule langue laisse de côté une partie des sources.",
            "Clauze réunit ces textes dans un même index, les rattache à leur type, leur juridiction et leur matière, et sert de base à tous les autres outils de la plateforme : l'assistant, la revue de documents et la rédaction s'appuient sur le même corpus.",
          ],
        },
        {
          kind: "faq",
          title: "Questions sur la recherche",
          items: [
            { q: "Combien de textes contient le corpus de Clauze ?", a: "73 635 textes tunisiens : législation et jurisprudence, en arabe et en français." },
            { q: "Puis-je chercher en français un arrêt rédigé en arabe ?", a: "Oui. La recherche est multilingue : une requête en français retrouve aussi les décisions et textes rédigés en arabe, et inversement." },
            { q: "Comment savoir si un texte est encore en vigueur ?", a: "Chaque résultat porte la mention « en vigueur » ou « abrogé », et vous pouvez limiter la recherche aux seuls textes en vigueur." },
          ],
        },
      ],
      related: ["feature-assistant", "use-litigation", "vs-manual"],
    },
    "feature-assistant": {
      title: "Assistant juridique IA pour le droit tunisien, avec citations vérifiées",
      description:
        "Un assistant IA qui répond à partir du droit tunisien et vérifie chaque citation contre le texte de l'article avant de l'afficher. Réponses sourcées en arabe et en français.",
      eyebrow: "Assistant juridique IA",
      h1: "Des réponses dont chaque citation est vérifiée.",
      lede: "L'assistant répond à partir du corpus tunisien et renvoie à l'article exact.",
      summary:
        "L'assistant juridique de Clauze répond aux questions de droit tunisien à partir de son corpus de 73 635 textes. Avant d'afficher une réponse, il compare chaque citation au texte réel de l'article : seules les citations qui correspondent deviennent des liens vers la source. Sans source pertinente, il le dit au lieu d'inventer.",
      scene: "assistant",
      blocks: [
        {
          kind: "steps",
          title: "Comment l'assistant construit une réponse",
          items: [
            { title: "Il cherche", text: "Votre question est cherchée dans la législation et la jurisprudence tunisiennes, en arabe et en français." },
            { title: "Il rédige à partir des textes trouvés", text: "La réponse s'appuie sur les passages retrouvés, pas sur la mémoire générale d'un modèle." },
            { title: "Il vérifie chaque citation", text: "Chaque passage cité est comparé au texte de l'article. Ce qui correspond devient un lien vers la source exacte ; le reste reste en texte simple." },
          ],
        },
        {
          kind: "prose",
          title: "Un exemple",
          paras: [
            "Question : « Quel est le délai de prescription général des actions contractuelles ? »",
            "Réponse : en droit tunisien, les actions nées d'une obligation se prescrivent par quinze ans, sauf disposition spéciale. Source : Code des obligations et des contrats, article 402 : « Toutes les actions nées d'une obligation sont prescrites par quinze ans, sauf les exceptions ci-après et celles qui sont déterminées par la loi dans les cas particuliers. »",
          ],
        },
        {
          kind: "points",
          title: "Ce qui le distingue d'un assistant généraliste",
          items: [
            { title: "Un corpus tunisien", text: "Les réponses viennent de 73 635 textes tunisiens, pas d'un entraînement général sur le web." },
            { title: "Des citations contrôlées", text: "Une citation n'est affichée comme source que si elle correspond mot pour mot au texte de l'article." },
            { title: "Pas de source, pas de réponse", text: "Quand le corpus ne permet pas de répondre, l'assistant le signale plutôt que de produire une réponse plausible." },
            { title: "Arabe et français", text: "Posez votre question dans l'une ou l'autre langue ; les sources des deux langues sont prises en compte." },
          ],
        },
        {
          kind: "faq",
          title: "Questions sur l'assistant",
          items: [
            { q: "L'assistant peut-il se tromper ?", a: "Oui, comme tout outil d'IA. C'est pourquoi chaque citation est vérifiée contre le texte et liée à sa source : vous contrôlez l'article avant de vous en servir. Clauze est un outil d'assistance, pas un avis juridique." },
            { q: "Que se passe-t-il si aucune source ne répond à ma question ?", a: "L'assistant indique qu'il n'a pas trouvé de source suffisante dans le corpus, au lieu de répondre sans fondement." },
            { q: "Mes questions sont-elles partagées avec mes confrères ?", a: "Non. Vos discussions avec l'assistant ne sont jamais partagées." },
          ],
        },
      ],
      related: ["feature-research", "vs-chatgpt", "vs-legal-ai"],
    },
    "feature-review": {
      title: "Revue de contrats et de documents juridiques par IA",
      description:
        "Déposez un contrat, un jugement ou un scan : Clauze surligne les passages problématiques, explique pourquoi et répond à vos questions en renvoyant à la page.",
      eyebrow: "Revue de documents",
      h1: "Chaque constat renvoie à sa page.",
      lede: "Déposez un contrat ou un jugement : l'IA le relit, surligne et explique.",
      summary:
        "La revue de documents de Clauze analyse les contrats, jugements et autres documents juridiques que vous déposez, y compris les PDF scannés. Elle surligne chaque passage problématique, explique pourquoi, et répond à vos questions sur le document en renvoyant à la page concernée.",
      scene: "review",
      blocks: [
        {
          kind: "steps",
          title: "Comment se déroule une revue",
          items: [
            { title: "Déposez le document", text: "PDF, PDF scanné ou Word, jusqu'à 20 Mo. Le texte des scans est extrait automatiquement." },
            { title: "Lisez l'analyse critique", text: "Dès le dépôt, l'IA relit le document, surligne chaque passage qui pose problème et explique pourquoi." },
            { title: "Posez vos questions", text: "Interrogez le document dans l'onglet Assistant ; chaque constat renvoie à la page d'où il vient." },
          ],
        },
        {
          kind: "points",
          title: "Ce que vous obtenez",
          items: [
            { title: "Des passages surlignés", text: "Les clauses problématiques sont repérées dans le texte lui-même, pas dans un résumé détaché." },
            { title: "Une explication par constat", text: "Pour chaque passage, la raison : déséquilibre, imprécision, risque ou point à vérifier." },
            { title: "Plusieurs documents par revue", text: "Réunissez un contrat et ses annexes dans une même revue et interrogez-les ensemble." },
            { title: "Rattachée au dossier", text: "Liez la revue au dossier du client pour la retrouver avec le reste de l'affaire." },
          ],
        },
        {
          kind: "prose",
          title: "Confidentialité",
          paras: [
            "Une revue n'est visible que par vous, et par les confrères à qui vous choisissez de la partager, en lecture seule ou en modification.",
            "Le contenu de vos documents n'est jamais copié dans les journaux d'audit. Supprimer un document supprime aussi son texte extrait et son analyse.",
          ],
        },
        {
          kind: "faq",
          title: "Questions sur la revue",
          items: [
            { q: "Quels formats de fichiers puis-je déposer ?", a: "Des PDF, y compris des documents scannés, et des fichiers Word (.docx), jusqu'à 20 Mo par fichier." },
            { q: "La revue fonctionne-t-elle sur des documents en arabe ?", a: "Oui. Clauze analyse les documents en arabe comme en français." },
            { q: "Qui peut voir mes documents ?", a: "Vous seul, sauf si vous partagez la revue avec un confrère nommé de votre cabinet." },
          ],
        },
      ],
      related: ["feature-drafting", "use-business", "feature-assistant"],
    },
    "feature-drafting": {
      title: "Rédaction de contrats à partir de modèles, en arabe et en français",
      description:
        "Partez d'un modèle de contrat en arabe ou en français, décrivez la modification, relisez la proposition et acceptez-la. Chaque version est conservée, export PDF.",
      eyebrow: "Rédaction de contrats",
      h1: "Décrivez la modification, acceptez-la.",
      lede: "Des modèles de contrats en arabe et en français, modifiés par l'IA sous votre contrôle.",
      summary:
        "La rédaction de contrats de Clauze part d'un modèle choisi en arabe ou en français. Vous complétez les champs, décrivez une modification en langage courant, relisez la proposition de l'IA présentée comme une modification suivie, puis l'acceptez ou la refusez. Chaque version est conservée et le contrat s'exporte en PDF.",
      scene: "drafting",
      blocks: [
        {
          kind: "steps",
          title: "Du modèle au PDF",
          items: [
            { title: "Choisissez un modèle", text: "Parmi les modèles de contrats en arabe et en français." },
            { title: "Complétez les champs", text: "Parties, montants, dates : les informations du contrat sont saisies une fois." },
            { title: "Demandez une modification", text: "Par exemple « porter la durée à trois ans ». L'IA propose le changement, affiché comme une modification suivie." },
            { title: "Acceptez, puis exportez", text: "Acceptez ou refusez la proposition, puis exportez le contrat en PDF, en téléchargement ou joint au dossier." },
          ],
        },
        {
          kind: "points",
          title: "Sous votre contrôle",
          items: [
            { title: "Rien ne change sans vous", text: "Chaque modification proposée par l'IA attend votre accord." },
            { title: "Toutes les versions conservées", text: "Restaurer une ancienne version ne supprime jamais les plus récentes." },
            { title: "Édition directe", text: "Vous pouvez aussi modifier le texte vous-même dans l'éditeur." },
            { title: "Partage choisi", text: "Un contrat est privé ; partagez-le avec un confrère en lecture ou en modification." },
          ],
        },
        {
          kind: "faq",
          title: "Questions sur la rédaction",
          items: [
            { q: "Dans quelles langues sont les modèles ?", a: "En arabe et en français." },
            { q: "L'IA peut-elle modifier mon contrat sans mon accord ?", a: "Non. Chaque modification est proposée, affichée comme une modification suivie, et n'est appliquée que si vous l'acceptez." },
            { q: "Puis-je revenir à une version précédente ?", a: "Oui. Chaque version enregistrée est conservée, et en restaurer une ne supprime pas les versions plus récentes." },
          ],
        },
      ],
      related: ["feature-review", "use-business", "feature-firm"],
    },
    "feature-firm": {
      title: "Gestion de cabinet d'avocats : dossiers, honoraires, audiences",
      description:
        "Suivez vos dossiers, honoraires et paiements, et votre calendrier d'audiences et de rendez-vous, avec un rappel la veille. Dans le même outil que votre recherche juridique.",
      eyebrow: "Gestion du cabinet",
      h1: "Dossiers, honoraires et audiences, au même endroit.",
      lede: "La gestion du cabinet, dans le même outil que votre recherche.",
      summary:
        "Clauze inclut la gestion du cabinet : des dossiers clients avec honoraires convenus, paiements reçus et solde restant, et un calendrier des audiences, rendez-vous et échéances, avec un rappel la veille. Revues et contrats se rattachent au dossier du client.",
      scene: "firm",
      blocks: [
        {
          kind: "points",
          title: "Les dossiers",
          items: [
            { title: "Honoraires et solde", text: "Saisissez les honoraires convenus et les paiements : le solde restant et la part recouvrée se calculent seuls." },
            { title: "Statut clair", text: "Brouillon, ouvert, payé, en retard ou clôturé : la liste se trie et se filtre par statut, échéance ou montant." },
            { title: "Tout le dossier", text: "Documents joints, revues, contrats exportés et prochaines actions sur une même page." },
          ],
        },
        {
          kind: "points",
          title: "Le calendrier",
          items: [
            { title: "Audiences et rendez-vous", text: "Audiences, rendez-vous clients et réunions internes, liés au dossier concerné." },
            { title: "Échéances visibles", text: "Les échéances de paiement des dossiers apparaissent dans le calendrier." },
            { title: "Rappel la veille", text: "Une notification dans l'application la veille de chaque événement." },
          ],
        },
        {
          kind: "faq",
          title: "Questions sur la gestion du cabinet",
          items: [
            { q: "Les rappels sont-ils envoyés par e-mail ?", a: "Non. Les rappels sont des notifications dans l'application, la veille de l'événement." },
            { q: "Mes confrères voient-ils mes dossiers ?", a: "Un dossier est privé à son créateur ; vous pouvez le partager avec un confrère nommé, en lecture ou en modification." },
          ],
        },
      ],
      related: ["use-firms", "feature-drafting", "feature-review"],
    },
    "use-litigation": {
      title: "Clauze pour les avocats en contentieux",
      description:
        "Préparez vos audiences avec la jurisprudence tunisienne en arabe et en français, des réponses aux citations vérifiées, la revue des pièces et un calendrier d'audiences.",
      eyebrow: "Contentieux",
      h1: "Pour préparer l'audience, pas pour chercher l'arrêt.",
      lede: "Jurisprudence, pièces et calendrier d'audiences, dans un même outil.",
      summary:
        "Pour un avocat en contentieux, Clauze réunit la jurisprudence tunisienne en arabe et en français, un assistant qui répond avec des citations vérifiées, la revue des jugements et des pièces adverses, et un calendrier d'audiences avec rappel la veille.",
      blocks: [
        {
          kind: "points",
          title: "Une journée de contentieux avec Clauze",
          items: [
            { title: "Trouver la jurisprudence", text: "Cherchez les décisions de la Cour de cassation et des juridictions du fond, filtrées par chambre, matière ou année, dans les deux langues." },
            { title: "Vérifier un point de droit", text: "Posez la question à l'assistant et ouvrez directement l'article ou la décision cités." },
            { title: "Lire le jugement adverse", text: "Déposez le jugement ou les conclusions : la revue surligne les passages à discuter et répond à vos questions avec la page." },
            { title: "Ne manquer aucune audience", text: "Notez chaque audience dans le calendrier, liée au dossier, avec un rappel la veille." },
          ],
        },
        {
          kind: "faq",
          title: "Questions des avocats en contentieux",
          items: [
            { q: "Quelles juridictions couvre la jurisprudence ?", a: "La Cour de cassation, les cours d'appel, les tribunaux de première instance, le Tribunal administratif et le Tribunal immobilier." },
            { q: "Puis-je filtrer par chambre ?", a: "Oui : par juridiction, chambre, matière et année." },
          ],
        },
      ],
      related: ["feature-research", "feature-review", "feature-firm"],
    },
    "use-business": {
      title: "Clauze pour les avocats d'affaires et le conseil juridique",
      description:
        "Revoyez les contrats de vos clients, rédigez à partir de modèles en arabe et en français, et vérifiez chaque point de droit tunisien avec des citations contrôlées.",
      eyebrow: "Affaires et contrats",
      h1: "Relire, rédiger, vérifier : le contrat de bout en bout.",
      lede: "Pour les avocats qui passent leurs journées dans les contrats.",
      summary:
        "Pour un avocat d'affaires, Clauze couvre le cycle du contrat : la revue des contrats reçus avec chaque clause problématique surlignée et expliquée, la rédaction à partir de modèles en arabe et en français avec des modifications que vous acceptez une à une, et la vérification des points de droit tunisien par un assistant aux citations contrôlées.",
      blocks: [
        {
          kind: "points",
          title: "Le contrat, de bout en bout",
          items: [
            { title: "Revoir le contrat reçu", text: "Déposez-le : clauses de résiliation, pénalités, révisions de prix… chaque passage problématique est surligné avec son explication." },
            { title: "Rédiger le vôtre", text: "Partez d'un modèle, décrivez les changements, acceptez-les un à un ; chaque version est conservée." },
            { title: "Vérifier la règle", text: "Une question sur le Code des obligations et des contrats ou sur un texte spécial : l'assistant répond avec l'article exact." },
            { title: "Travailler en arabe et en français", text: "Revue, modèles et recherche fonctionnent dans les deux langues." },
          ],
        },
        {
          kind: "faq",
          title: "Questions des avocats d'affaires",
          items: [
            { q: "Puis-je revoir un contrat scanné ?", a: "Oui. Les PDF scannés sont pris en charge ; leur texte est extrait automatiquement avant l'analyse." },
            { q: "Les modèles couvrent-ils l'arabe ?", a: "Oui, les modèles de contrats existent en arabe et en français." },
          ],
        },
      ],
      related: ["feature-review", "feature-drafting", "feature-assistant"],
    },
    "use-firms": {
      title: "Clauze pour les avocats indépendants et les cabinets",
      description:
        "Seul ou à plusieurs : recherche, IA et gestion du cabinet dans un seul outil. Chaque élément est privé par défaut et se partage avec un confrère nommé.",
      eyebrow: "Indépendants et cabinets",
      h1: "Seul ou à plusieurs, le même outil.",
      lede: "Un avocat indépendant comme un cabinet de plusieurs associés y trouvent leur compte.",
      summary:
        "Clauze convient aux avocats indépendants comme aux cabinets. Un indépendant y trouve, dans un seul outil, la recherche, l'IA et la gestion de ses dossiers et honoraires. Un cabinet y ajoute ses confrères dans un espace commun, où chaque dossier, revue ou contrat reste privé jusqu'à ce que son auteur le partage, en lecture ou en modification.",
      blocks: [
        {
          kind: "points",
          title: "Pour l'avocat indépendant",
          items: [
            { title: "Un seul abonnement, tout le métier", text: "Recherche, assistant, revue, rédaction, dossiers et calendrier, sans assembler plusieurs outils." },
            { title: "Le cabinet suivi sans tableur", text: "Honoraires, paiements et soldes se tiennent à jour dossier par dossier." },
          ],
        },
        {
          kind: "points",
          title: "Pour le cabinet",
          items: [
            { title: "Un espace par cabinet", text: "L'équipe Clauze ajoute vos confrères à l'espace de travail du cabinet." },
            { title: "Privé par défaut", text: "Dossiers, revues et contrats sont visibles par leur seul auteur." },
            { title: "Partage nominatif", text: "Selon votre formule, partagez un élément avec un confrère précis, en lecture seule ou en modification, et retirez l'accès à tout moment." },
            { title: "La langue de chacun", text: "Chaque utilisateur choisit son interface : français, arabe ou anglais." },
          ],
        },
        {
          kind: "faq",
          title: "Questions sur l'accès et les formules",
          items: [
            { q: "Comment ajouter des confrères ?", a: "Les membres de l'espace de travail sont ajoutés par l'équipe Clauze, dans la limite des places de votre formule." },
            { q: "Combien coûte Clauze ?", a: "Plusieurs formules existent selon la taille du cabinet. Les tarifs ne sont pas publiés : écrivez à contact@clauze.tn pour en parler." },
          ],
        },
      ],
      related: ["feature-firm", "faq", "feature-research"],
    },
    "vs-chatgpt": {
      title: "Clauze ou ChatGPT pour le droit tunisien ?",
      description:
        "ChatGPT est un assistant généraliste ; Clauze répond à partir de 73 635 textes tunisiens et vérifie chaque citation contre le texte de l'article. Comparaison point par point.",
      eyebrow: "Comparatif",
      label: "Clauze vs ChatGPT",
      h1: "Clauze ou ChatGPT pour le droit tunisien ?",
      lede: "Un assistant généraliste et un outil juridique tunisien ne répondent pas à la même question.",
      summary:
        "ChatGPT est un assistant généraliste, utile pour écrire, reformuler ou traduire. Pour une question de droit tunisien, Clauze répond à partir d'un corpus de 73 635 textes tunisiens, compare chaque citation au texte réel de l'article avant de l'afficher, et signale l'absence de source au lieu d'inventer.",
      blocks: [
        {
          kind: "compare",
          title: "Point par point",
          head: ["", "Clauze", "Assistant généraliste (ChatGPT…)"],
          rows: [
            ["Source des réponses", "73 635 textes tunisiens, législation et jurisprudence", "Données d'entraînement générales et, selon les cas, recherche web"],
            ["Citations", "Comparées au texte de l'article avant affichage, liées à la source", "Non vérifiées contre le texte officiel ; numéros d'articles parfois inexacts"],
            ["Statut des textes", "« En vigueur » ou « abrogé » affiché", "Non garanti"],
            ["Jurisprudence en arabe", "Recherchée avec les textes en français", "Accès limité et non systématique"],
            ["Sans source", "L'assistant le signale", "Produit souvent une réponse plausible"],
            ["Usages hors droit", "Centré sur la pratique juridique", "Très large : écriture, code, traduction…"],
          ],
          note: "Comparaison des usages, pas d'un modèle d'IA contre un autre : la différence tient au corpus et au contrôle des citations.",
        },
        {
          kind: "prose",
          title: "Quand un assistant généraliste suffit",
          paras: [
            "Pour reformuler un courrier, résumer un texte que vous fournissez, ou traduire un paragraphe, un assistant généraliste fait bien l'affaire.",
            "Dès que la réponse doit s'appuyer sur un article de loi tunisienne ou une décision précise, le risque change : une citation fausse ou un texte abrogé coûte cher devant un tribunal ou un client. C'est ce risque que Clauze traite.",
          ],
        },
        {
          kind: "faq",
          title: "Questions fréquentes",
          items: [
            { q: "ChatGPT connaît-il le droit tunisien ?", a: "Il en connaît des éléments issus de ses données d'entraînement, mais ne s'appuie pas sur un corpus tunisien complet et ne vérifie pas ses citations contre le texte officiel des articles." },
            { q: "Clauze utilise-t-il un modèle d'IA comme ChatGPT ?", a: "Clauze utilise un grand modèle de langue pour rédiger, mais à partir des textes tunisiens qu'il retrouve, et vérifie chaque citation contre le texte avant de l'afficher." },
          ],
        },
      ],
      related: ["feature-assistant", "vs-legal-ai", "vs-manual"],
    },
    "vs-manual": {
      title: "Clauze ou la recherche manuelle (JORT, codes, recueils) ?",
      description:
        "Comparer la recherche juridique tunisienne manuelle (JORT, codes papier, recueils de jurisprudence) avec une recherche unique en arabe et en français dans Clauze.",
      eyebrow: "Comparatif",
      label: "Clauze vs recherche manuelle",
      h1: "Clauze ou la recherche manuelle ?",
      lede: "Le Journal officiel, les codes et les recueils restent les références. Clauze change le temps pour y arriver.",
      summary:
        "La recherche manuelle consiste à parcourir le Journal officiel, les codes et les recueils de jurisprudence, souvent séparément en arabe et en français. Clauze réunit 73 635 de ces textes dans une recherche unique et bilingue, signale ceux qui sont en vigueur, et relie chaque réponse de son assistant à l'article exact.",
      blocks: [
        {
          kind: "compare",
          title: "Point par point",
          head: ["", "Clauze", "Recherche manuelle"],
          rows: [
            ["Point d'entrée", "Une barre de recherche pour la législation et la jurisprudence", "JORT, codes, recueils et sites consultés un par un"],
            ["Langues", "Arabe et français interrogés ensemble", "Une recherche par langue"],
            ["Texte en vigueur", "Statut affiché sur chaque résultat", "À vérifier en remontant les modifications"],
            ["Jurisprudence", "Filtrée par juridiction, chambre, matière, année", "Selon les recueils disponibles au cabinet"],
            ["Réponse à une question", "Réponse rédigée, citations vérifiées et liées", "Synthèse à faire soi-même"],
          ],
        },
        {
          kind: "prose",
          title: "Ce qui ne change pas",
          paras: [
            "Le texte officiel reste la référence, et la lecture de l'avocat reste indispensable. Clauze ne remplace ni l'un ni l'autre : il raccourcit le chemin jusqu'au bon article et rend chaque citation vérifiable d'un clic.",
          ],
        },
        {
          kind: "faq",
          title: "Questions fréquentes",
          items: [
            { q: "Clauze remplace-t-il le Journal officiel ?", a: "Non. Le JORT reste la publication officielle ; Clauze permet de retrouver rapidement les textes et d'en vérifier le statut." },
            { q: "Combien de temps faut-il pour prendre Clauze en main ?", a: "La recherche fonctionne comme un moteur de recherche : tapez des mots, une référence ou une question, puis filtrez." },
          ],
        },
      ],
      related: ["feature-research", "use-litigation", "vs-chatgpt"],
    },
    "vs-legal-ai": {
      title: "Clauze ou un outil d'IA juridique généraliste ?",
      description:
        "Les outils d'IA juridique conçus pour d'autres droits ne couvrent pas les textes tunisiens. Clauze est construit sur 73 635 textes tunisiens, en arabe et en français.",
      eyebrow: "Comparatif",
      label: "Clauze vs IA juridique généraliste",
      h1: "Clauze ou une IA juridique généraliste ?",
      lede: "Une IA juridique ne vaut que par le droit qu'elle connaît.",
      summary:
        "La plupart des outils d'IA juridique sont construits pour le droit d'autres pays et en anglais ou en français de France. Clauze est construit pour le droit tunisien : 73 635 textes tunisiens en arabe et en français, des citations vérifiées contre le texte des articles, une interface en arabe de droite à gauche, et la gestion du cabinet dans le même outil.",
      blocks: [
        {
          kind: "compare",
          title: "Point par point",
          head: ["", "Clauze", "IA juridique généraliste"],
          rows: [
            ["Droit couvert", "Droit tunisien : législation et jurisprudence", "Principalement d'autres juridictions"],
            ["Langues des sources", "Arabe et français", "Souvent anglais, parfois français"],
            ["Interface", "Français, arabe (de droite à gauche), anglais", "Rarement en arabe"],
            ["Citations", "Vérifiées contre le texte des articles tunisiens", "Variable selon l'outil"],
            ["Modèles de contrats", "Modèles en arabe et en français", "Modèles d'autres droits"],
            ["Gestion du cabinet", "Dossiers, honoraires, audiences inclus", "Généralement absente"],
          ],
        },
        {
          kind: "faq",
          title: "Questions fréquentes",
          items: [
            { q: "Pourquoi ne pas utiliser un outil d'IA juridique international ?", a: "Parce qu'il ne contient pas les textes tunisiens : sans la loi et la jurisprudence tunisiennes dans son corpus, il ne peut ni y répondre ni les citer." },
            { q: "Clauze couvre-t-il le droit d'autres pays ?", a: "Non. Clauze est consacré au droit tunisien : son corpus, ses modèles et ses langues suivent la pratique des cabinets tunisiens." },
          ],
        },
      ],
      related: ["feature-assistant", "vs-chatgpt", "feature-drafting"],
    },
    faq: {
      title: "Questions fréquentes sur Clauze",
      description:
        "Corpus, citations vérifiées, langues, confidentialité, accès et tarifs : les réponses aux questions que posent les avocats tunisiens sur Clauze.",
      eyebrow: "FAQ",
      h1: "Questions fréquentes",
      lede: "Tout ce que les cabinets nous demandent avant de commencer.",
      summary:
        "Clauze est la plateforme juridique des cabinets d'avocats tunisiens : recherche dans 73 635 textes tunisiens en arabe et en français, assistant IA aux citations vérifiées, revue de documents, rédaction de contrats et gestion du cabinet. L'accès se demande en ligne et chaque cabinet est validé par l'équipe Clauze.",
      blocks: [
        {
          kind: "faq",
          title: "Le produit",
          items: [
            { q: "Qu'est-ce que Clauze ?", a: "Une plateforme pour les cabinets d'avocats tunisiens qui réunit la recherche juridique, un assistant IA aux citations vérifiées, la revue de documents, la rédaction de contrats et la gestion du cabinet (dossiers, honoraires, audiences)." },
            { q: "Sur quels textes Clauze s'appuie-t-il ?", a: "Sur 73 635 textes tunisiens : législation et jurisprudence, en arabe et en français. Chaque résultat indique s'il est en vigueur, et une question posée en français trouve aussi l'arrêt rédigé en arabe." },
            { q: "Comment les citations sont-elles vérifiées ?", a: "Avant d'afficher une réponse, Clauze compare chaque citation au texte réel de l'article. Seules les citations qui correspondent deviennent des liens vers la source ; les autres restent en texte simple." },
            { q: "Clauze remplace-t-il l'avocat ?", a: "Non. Clauze est un outil d'assistance : il retrouve les textes, propose des réponses sourcées et signale les points à revoir, mais l'analyse et la décision restent celles de l'avocat." },
          ],
        },
        {
          kind: "faq",
          title: "Langues",
          items: [
            { q: "Dans quelles langues fonctionne Clauze ?", a: "L'interface existe en français, en arabe (de droite à gauche) et en anglais ; chaque utilisateur choisit la sienne. Le corpus et les modèles de contrats sont en arabe et en français." },
            { q: "Puis-je poser une question en arabe ?", a: "Oui. L'assistant et la recherche acceptent l'arabe et le français, et prennent en compte les sources des deux langues." },
          ],
        },
        {
          kind: "faq",
          title: "Confidentialité",
          items: [
            { q: "Mes documents restent-ils confidentiels ?", a: "Oui. Une revue n'est visible que par vous et les confrères avec qui vous choisissez de la partager, et le contenu de vos documents et contrats n'est jamais copié dans les journaux d'audit." },
            { q: "Mes discussions avec l'assistant sont-elles partagées ?", a: "Non, jamais. Dossiers, revues et contrats peuvent être partagés avec un confrère nommé ; les discussions, elles, restent privées." },
          ],
        },
        {
          kind: "faq",
          title: "Accès et tarifs",
          items: [
            { q: "Comment obtenir l'accès ?", a: "Remplissez la demande en ligne sur app.clauze.tn/signup : l'équipe Clauze valide votre cabinet, puis vous vous connectez sur app.clauze.tn." },
            { q: "Combien coûte Clauze ?", a: "Plusieurs formules existent selon la taille du cabinet. Les tarifs ne sont pas publiés : écrivez à contact@clauze.tn pour en parler." },
            { q: "Peut-on avoir une démonstration ?", a: "Oui : écrivez à contact@clauze.tn pour une démonstration à votre équipe." },
          ],
        },
      ],
      related: ["feature-assistant", "feature-research", "use-firms"],
    },
    security: {
      title: "Sécurité et confidentialité des données",
      description:
        "Où sont hébergées vos données, qui peut les voir, quel fournisseur d'IA traite vos questions et combien de temps tout est conservé : la sécurité de Clauze en clair.",
      eyebrow: "Sécurité",
      h1: "Vos données, en clair.",
      lede: "Où elles sont, qui les voit, et ce qu'en fait l'IA.",
      summary:
        "Clauze héberge ses serveurs, sa base de données et vos fichiers chez Amazon Web Services, dans la région de Paris (France). Les fonctions d'IA font appel à OpenAI, aux États-Unis, qui n'utilise pas ces données pour entraîner ses modèles. Dans Clauze, chaque dossier, revue ou contrat est privé à son auteur jusqu'à ce qu'il le partage, et les discussions avec l'assistant ne sont jamais partagées.",
      blocks: [
        {
          kind: "points",
          title: "Où sont vos données",
          items: [
            { title: "Hébergement", text: "Serveurs, base de données et fichiers chez Amazon Web Services, région de Paris (France)." },
            { title: "Intelligence artificielle", text: "Les questions et le texte des documents analysés sont transmis à OpenAI (États-Unis). Les données envoyées par l'API ne servent pas à entraîner ses modèles." },
            { title: "Transferts", text: "Le service implique des transferts de données hors de Tunisie, encadrés par l'Accord de traitement des données." },
          ],
        },
        {
          kind: "points",
          title: "Qui peut les voir",
          items: [
            { title: "Cloisonnement par cabinet", text: "Les données de chaque cabinet sont séparées de celles des autres." },
            { title: "Privé par défaut", text: "Dossiers, revues et contrats ne sont visibles que par leur auteur, sauf partage nominatif." },
            { title: "Discussions privées", text: "Les discussions avec l'assistant ne sont jamais partagées." },
            { title: "Accès validé", text: "Chaque cabinet est validé par l'équipe Clauze avant d'accéder au service." },
          ],
        },
        {
          kind: "points",
          title: "Comment elles sont protégées",
          items: [
            { title: "Échanges chiffrés", text: "Toutes les connexions passent par HTTPS." },
            { title: "Mots de passe", text: "Seule une empreinte cryptographique est stockée, jamais le mot de passe." },
            { title: "Journaux sans contenu", text: "Le contenu de vos documents et contrats n'est jamais copié dans les journaux d'audit." },
            { title: "Sauvegardes", text: "Sauvegardes régulières de la base de données et des fichiers, avec une procédure de restauration documentée." },
          ],
        },
        {
          kind: "prose",
          title: "Conseil de prudence",
          paras: [
            "Tenu au secret professionnel, l'avocat décide seul de ce qu'il soumet à l'outil. Lorsque l'identité des parties n'est pas utile à l'analyse, nous recommandons de pseudonymiser les noms avant de déposer un document.",
            "Les engagements contractuels de Clauze, la liste des sous-traitants et les durées de conservation figurent dans l'Accord de traitement des données et la Politique de confidentialité.",
          ],
        },
      ],
      related: ["faq", "feature-review", "use-firms"],
    },
  },
};
