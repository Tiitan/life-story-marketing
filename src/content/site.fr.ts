import type { LandingPageContent } from './types';
import { footerSocials } from './site.shared';

const frFaq = [
  {
    question: "Qu'est-ce que Life Story AI ?",
    answer:
      "Life Story AI est une application qui utilise l'intelligence artificielle pour vous aider Ã  Ã©crire votre autobiographie ou la biographie d'un parent.",
  },
  {
    question: "Qu'est-ce que j'achÃ¨te au final ?",
    answer:
      "Le produit final est un vrai livre pouvant contenir jusqu'Ã  250 pages, imprimÃ© et envoyÃ© par courrier. Vous pouvez choisir le style de votre biographie, personnaliser la couverture et Ã©diter ou supprimer des chapitres Ã  votre guise. Sur l'offre DÃ©couverte, vous achetez uniquement la version numÃ©rique.",
  },
  {
    question: 'Qui est Lisa ?',
    answer:
      "Lisa est l'intelligence artificielle qui joue le rÃ´le de biographe personnel. Elle transcrit votre voix en texte, formate votre histoire et peut vous guider avec des questions si vous manquez d'inspiration.",
  },
  {
    question: "Puis-je Ã©crire une biographie pour quelqu'un d'autre, comme ma mÃ¨re ou ma grand-mÃ¨re ?",
    answer: "Oui, vous devenez alors l'interviewer. Vous utilisez notre app en prÃ©sence de votre parent.",
  },
  {
    question: "Combien de personnes peuvent participer Ã  la rÃ©daction d'un livre ?",
    answer: "Cela dÃ©pend de votre offre : solo sur l'offre DÃ©couverte, duo sur l'offre Auteur, jusqu'Ã  10 participants sur l'offre Famille.",
  },
  {
    question: 'Combien de temps faut-il pour Ã©crire un livre complet ?',
    answer:
      "GÃ©nÃ©ralement, il faut entre 10 et 20 heures d'enregistrement pour Ã©crire le livre. Cela reprÃ©sente entre 3 et 6 aprÃ¨s-midis par exemple.",
  },
  {
    question: "Puis-je offrir Life Story Ã  quelqu'un ?",
    answer:
      "Oui. AprÃ¨s l'achat, vous pouvez imprimer la carte cadeau et l'offrir. Elle contient un code d'activation.",
  },
  {
    question: 'Puis-je commander des livres supplÃ©mentaires ?',
    answer:
      "Oui. Si vous Ãªtes satisfait de la premiÃ¨re copie, vous pouvez en commander d'autres au tarif correspondant Ã  votre offre.",
  },
  {
    question: 'Puis-je Ã©crire mes propres textes ou histoires ?',
    answer: "Oui, les conseils et questions de Lisa sont optionnels ; vous pouvez raconter l'histoire de votre choix.",
  },
  {
    question: 'Y a-t-il une limite de questions ?',
    answer: 'Non, vous pouvez rÃ©pondre Ã  autant de questions que vous le souhaitez.',
  },
  {
    question: 'Y a-t-il une limite de pages pour le livre ?',
    answer: 'Oui, le livre est limitÃ© Ã  un maximum de 250 pages.',
  },
  {
    question: "Puis-je rÃ©pondre Ã  plus d'une question par semaine ?",
    answer: 'Oui, vous pouvez rÃ©pondre Ã  autant de questions par semaine que vous le souhaitez.',
  },
  {
    question: 'Y a-t-il une limite sur le nombre de photos ?',
    answer: 'Non.',
  },
  {
    question: 'Les photos seront-elles imprimÃ©es en couleur ?',
    answer: 'Oui.',
  },
  {
    question: 'Avez-vous un support client ?',
    answer: 'Oui, si vous avez un problÃ¨me, vous pouvez nous contacter par e-mail ou chat.',
  },
  {
    question: 'Quelle est votre politique de retour ?',
    answer:
      "Si vous n'Ãªtes pas satisfait de votre achat, remplissez simplement un formulaire de demande de remboursement dans les 30 jours aprÃ¨s l'achat. Vous serez alors intÃ©gralement remboursÃ©. Nous ne pouvons pas vous rembourser si le livre a dÃ©jÃ  Ã©tÃ© imprimÃ©. En cas de cadeau, seul l'acheteur peut faire la demande et Ãªtre remboursÃ©.",
  },
  {
    question: 'Quel est le format du livre imprimÃ© ?',
    answer: 'Le livre est au format A5 : 14,85 x 21 cm (ou 5.8 x 8.3 inches).',
  },
  {
    question: 'OÃ¹ livrez-vous ?',
    answer: 'Nous livrons partout dans le monde.',
  },
  {
    question: 'OÃ¹ sont imprimÃ©s les livres ?',
    answer:
      "GrÃ¢ce Ã  notre partenaire disposant d'un rÃ©seau d'imprimeurs, les livres sont imprimÃ©s et envoyÃ©s depuis l'AmÃ©rique du Nord, l'Europe, l'Australie ou l'Inde, selon l'endroit oÃ¹ vous habitez.",
  },
  {
    question: 'Puis-je obtenir une version numÃ©rique de mon livre ?',
    answer: 'Oui, vous pouvez exporter une version PDF, ePub et texte de votre livre Ã  tout moment.',
  },
] as const;

export const frContent: LandingPageContent = {
  locale: 'fr',
  meta: {
    title: 'Life Story AI â€“ Histoires de famille et autobiographie avec votre biographe IA',
    description:
      "Chaque famille a une histoire qui mÃ©rite d'Ãªtre prÃ©servÃ©e. Capturez les souvenirs d'un parent, racontez l'histoire des grands-parents, ou Ã©crivez la vÃ´tre. RÃ©pondez simplement Ã  des questions par voix ou par texte, invitez vos proches Ã  participer, et recevez votre livre imprimÃ© en quelques semaines.",
  },
  nav: {
    links: [
      { label: 'Exemples', href: '#examples' },
      { label: 'FonctionnalitÃ©s', href: '#feature' },
      { label: 'Prix', href: '#new-pricing' },
    ],
    authCtas: [
      { label: 'Essai gratuit', href: 'https://app.life-story.ai/sign_up?locale=fr' },
      { label: 'Connexion', href: 'https://app.life-story.ai/sign_in?locale=fr' },
    ],
    buyCta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?locale=fr', primary: true },
    currentLanguage: 'FR',
    alternateLanguage: { label: 'English', href: '/' },
  },
  hero: {
    titleHtml:
      "PrÃ©servez les histoires qui comptent dans un beau livre â€” <span class='highlight'>Ã©crit avec vos proches</span>, guidÃ© par l'IA âœ¨",
    description:
      "Chaque famille a une histoire qui mÃ©rite d'Ãªtre prÃ©servÃ©e. Capturez les souvenirs d'un parent, racontez l'histoire des grands-parents, ou Ã©crivez la vÃ´tre. RÃ©pondez simplement Ã  des questions par voix ou par texte, invitez vos proches Ã  participer, et recevez votre livre imprimÃ© en quelques semaines.",
    cta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?locale=fr', primary: true },
    info: 'Carte cadeau imprimable incluse',
    image: 'heroFamilyBook',
    alt: 'Livre de souvenirs Life Story AI',
  },
  testimonials: {
    title: 'Ce que nos clients disent de nous',
    description: "Visitez notre page Trustpilot pour trouver d'autres avis.",
    items: [
      {
        rating: '5 / 5',
        quote:
          "J'ai essayÃ© Life Story avec mon parent et c'est gÃ©nial. C'est super simple. Je recommande dÃ©finitivement Lisa si vous voulez capturer vos histoires de famille d'une maniÃ¨re amusante et facile.",
        author: "Lire le commentaire d'Octave",
        href: 'https://trstp.lt/0BDHfaJ6n',
      },
      {
        rating: '5 / 5',
        quote:
          "Utiliser Life Story a Ã©tÃ© une expÃ©rience dÃ©licieuse, qui a permis de rapprocher notre famille grÃ¢ce aux prÃ©cieux souvenirs de grand-pÃ¨re. Je le recommande vivement Ã  toute famille dÃ©sireuse de prÃ©server son histoire d'une maniÃ¨re aussi spÃ©ciale.",
        author: 'Lire le commentaire de Julia',
        href: 'https://trstp.lt/afQ_D20hB',
      },
      {
        rating: '4.5 / 5',
        quote:
          "Jâ€™ai offert Life Story Ã  ma maman pour son anniversaire, pour laisser une trace de notre famille en Italie et en France et pour que mon petit LÃ©o puisse lui aussi se souvenir de sa famille et surtout des petites anecdotes. Elle a adorÃ© ce cadeau.",
        author: 'Laure F.',
      },
    ],
  },
  roles: {
    titleHtml: "Ã‰crivez l'histoire <span class='highlight'>ensemble</span>",
    description:
      'Invitez vos proches Ã  participer au livre, avec diffÃ©rents rÃ´les : Ã©crire ensemble, poser des questions, ou recevoir chaque histoire au moment oÃ¹ elle est partagÃ©e.',
    items: [
      {
        title: 'Auteur principal',
        description:
          "Raconte l'histoire et peut inviter d'autres personnes Ã  participer. Il peut Ã©galement s'agir de la personne qui a offert l'Histoire de vie en cadeau et qui ajoute le ou les destinataires du cadeau en tant que co-auteurs.",
        image: 'roleMainAuthor',
        alt: 'Illustration auteur principal',
      },
      {
        title: 'Co-auteur(s)',
        description:
          "Une ou plusieurs personnes qui aident l'auteur principal Ã  Ã©crire. Peuvent ajouter ou modifier une histoire. Ont le mÃªme niveau d'accÃ¨s que l'auteur principal.",
        image: 'roleCoauthor',
        alt: 'Illustration co-auteurs',
      },
      {
        title: 'Intervieweur(s)',
        description:
          "Peuvent poser des questions Ã  l'auteur du livre, qui peut ensuite y rÃ©pondre en crÃ©ant une histoire. Exemple : Â« Pourquoi avez-vous dÃ©mÃ©nagÃ© en France aprÃ¨s vos Ã©tudes ? Â» Ils n'ont pas accÃ¨s aux histoires.",
        image: 'roleInterviewer',
        alt: 'Illustration intervieweurs',
      },
      {
        title: 'AbonnÃ©(s) (bientÃ´t)',
        description:
          "Une ou plusieurs personnes qui reÃ§oivent chaque semaine les histoires du livre. Elles dÃ©couvrent chaque nouvelle histoire au moment oÃ¹ elle est partagÃ©e et vivent le rÃ©cit familial au fil de sa crÃ©ation.",
        image: 'roleSubscriber',
        alt: 'Illustration abonnÃ©s',
      },
    ],
  },
  assistantFeatures: {
    titleHtml: "Laissez-vous guider par Lisa, votre <span class='highlight'>biographe personnelle</span>",
    description: "Votre parent n'a qu'Ã  rÃ©pondre aux questions de notre intelligence artificielle.",
    items: [
      {
        icon: 'clipboard',
        title: 'Il suffit de rÃ©pondre aux questions',
        description:
          'Par exemple : Â« OÃ¹ avez-vous grandi ? Â», Â« Combien de frÃ¨res et sÅ“urs avez-vous ? Â», Â« Comment Ã©tait votre maison dâ€™enfance ? Â», Â« Quel Ã©tait le mÃ©tier de vos parents ? Â»',
      },
      {
        icon: 'profile',
        title: 'Des questions personnalisÃ©es',
        description:
          'Lisa pose des questions pertinentes liÃ©es aux prÃ©cÃ©dentes rÃ©ponses de votre parent. Par exemple : Â« En tant quâ€™enfant unique, comment vous amusiez-vous ? Â»',
      },
      {
        icon: 'list',
        title: "PossibilitÃ© de choisir les questions ou d'en ajouter vous-mÃªme",
        description:
          'Votre parent a toujours le choix entre plusieurs questions. Il peut rÃ©pondre Ã  certaines et pas Ã  dâ€™autres. Vous pouvez crÃ©er vos propres questions, sans limites.',
      },
      {
        icon: 'spark',
        title: "L'Ã©coute active qui fait avancer votre rÃ©cit",
        description:
          'Quand vous Ãªtes bloquÃ© ou ne savez plus quoi Ã©crire, Lisa vous Ã©coute activement et pose des questions de relance rÃ©flÃ©chies pour vous aider Ã  creuser plus profondÃ©ment dans vos souvenirs.',
      },
      {
        icon: 'collaboration',
        title: 'Mode Intervieweur ou en autonomie',
        description:
          "Vous Ãªtes avec votre parent et manipulez l'application Ã  sa place. Ou bien vous lui montrez une fois comment faire et il utilise l'app de faÃ§on autonome ensuite.",
      },
    ],
    checks: ['Questions personnalisÃ©es', 'RÃ©ponses faciles et rapides', "Pas besoin d'Ãªtre Victor Hugo"],
    image: 'lisaBrowser',
    alt: 'Capture de lâ€™application Life Story AI',
  },
  bookTypes: {
    title: 'CrÃ©ez un livre unique, comme votre histoire',
    description: 'Voici des exemples de livres que vous pouvez crÃ©er, seul ou Ã  plusieurs :',
    items: [
      {
        title: 'Histoire de Vie',
        description:
          'Racontez votre histoire dans un livre, Ã  votre faÃ§on et Ã  votre rythme. Par ordre chronologique, thÃ©matique ou de faÃ§on complÃ¨tement libre.',
        image: 'bookLifeStory',
        alt: 'Exemple de livre histoire de vie',
      },
      {
        title: 'Histoire Familiale',
        description:
          "Racontez seul ou Ã  plusieurs l'histoire de la famille dans un beau livre. Ajoutez des photos et chacun peut commander son exemplaire.",
        image: 'bookFamilyHistory',
        alt: 'Exemple de livre histoire familiale',
      },
      {
        title: 'Livre de Naissance',
        description:
          "Racontez dans un beau livre la naissance ou les premiÃ¨res annÃ©es de votre enfant, pendant que vos souvenirs sont encore frais. Ajoutez jusqu'Ã  40 photos.",
        image: 'bookBirthBook',
        alt: 'Exemple de livre de naissance',
      },
      {
        title: 'RÃ©cit Libre',
        description:
          "Racontez l'histoire de votre couple, d'un proche, ou laissez une trace de vos rÃ©flexions personnelles, de votre parcours professionnel, etc.",
        image: 'bookFreeNarrative',
        alt: 'Exemple de rÃ©cit libre',
      },
      {
        title: 'Carnet de Voyage',
        description:
          "Racontez dans un livre un voyage marquant. Invitez des proches Ã  participer Ã  l'Ã©criture pendant ou aprÃ¨s le voyage. Ajoutez jusqu'Ã  40 photos.",
        image: 'bookTravelBook',
        alt: 'Exemple de carnet de voyage',
      },
      {
        title: 'Carte Cadeau',
        description:
          "Offrez Life Story AI Ã  un proche et laissez-le dÃ©cider de ce qu'il souhaite raconter. Un cadeau original pour vos parents, grands-parents et proches.",
        image: 'bookGiftCard',
        alt: 'Carte cadeau Life Story AI',
      },
    ],
  },
  weeklyFlow: {
    title: "Il n'a jamais Ã©tÃ© aussi simple de raconter votre histoire dans un livre",
    description: "Lisa s'occupe de tout",
    items: [
      {
        title: 'Une question de Lisa chaque semaine par e-mail ou WhatsApp',
        description:
          "Lisa envoie chaque semaine une nouvelle question par e-mail ou WhatsApp (bientÃ´t). Tout ce que vous avez Ã  faire, c'est rÃ©pondre au message. Si vous le souhaitez, vous pouvez rÃ©pondre Ã  plus de questions.",
        image: 'weeklyQuestion',
        alt: 'Exemple de question hebdomadaire',
      },
      {
        titleHtml: "Pas de texte Ã  taper, <span class='highlight'>il suffit de parler</span>",
        title: 'Pas de texte Ã  taper, il suffit de parler',
        description:
          'Pas la peine de taper quoi que ce soit : Lisa enregistre et transcrit tout ce qui est dit en 7 langues : franÃ§ais, anglais, espagnol, allemand, portugais, italien et nÃ©erlandais.',
        video: 'voiceDemo',
        alt: 'DÃ©monstration de rÃ©ponse vocale',
      },
      {
        title: 'RÃ©Ã©criture pour un style littÃ©raire',
        description:
          "Lisa vous propose de remettre en forme dans un style agrÃ©able Ã  lire tout ce qu'elle a notÃ©. Pas besoin d'Ãªtre Balzac.",
        image: 'rewriteExample',
        alt: 'Exemple de rÃ©Ã©criture littÃ©raire',
      },
    ],
  },
  customization: {
    titleHtml: "<span class='highlight'>Personnalisez et partagez votre livre</span>",
    description: "Ajoutez la touche finale avant de recevoir l'exemplaire papier.",
    items: [
      {
        icon: 'cover',
        title: 'Personnalisez la couverture',
        description: 'Choisissez le titre. Importez une photo ou une image pour la couverture.',
      },
      {
        icon: 'photo',
        title: 'Ajoutez des photos dans les chapitres',
        description: "Ajoutez jusqu'Ã  40 photos en couleur ou en noir et blanc.",
      },
      {
        icon: 'edit',
        title: 'Ã‰ditez, supprimez ou ajoutez du contenu',
        description:
          'Vous pouvez modifier ou supprimer tous les textes. Vous pouvez Ã©galement ajouter vos propres questions ou histoires dans le livre.',
      },
      {
        icon: 'share',
        title: 'Partagez votre livre avec vos amis et votre famille',
        description:
          'GÃ©nÃ©rez des liens personnalisÃ©s pour que votre famille et vos amis puissent commander directement leurs propres exemplaires. Ils reÃ§oivent les livres Ã  leur porte pendant que vous suivez les commandes depuis votre tableau de bord.',
      },
    ],
    image: 'bookCoverEditor',
    alt: 'AperÃ§u de personnalisation de couverture',
  },
  pricing: {
    title: 'Le plus bel hÃ©ritage que vous laisserez Ã  vos proches',
    description: 'Transformez vos souvenirs en un livre inoubliable. Aucune compÃ©tence rÃ©dactionnelle requise.',
    plans: [
      {
        name: 'DÃ‰COUVERTE',
        description: 'SÃ©curisez vos mÃ©moires en numÃ©rique. Imprimez plus tard.',
        price: '49 â‚¬',
        cta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?product=digital&locale=fr' },
      },
      {
        name: 'AUTEUR â­',
        description: 'Transformez vos souvenirs en un magnifique livre.',
        price: '99 â‚¬',
        featured: true,
        cta: {
          label: 'Acheter',
          href: 'https://app.life-story.ai/registrations/new?product=standard&locale=fr',
          primary: true,
        },
      },
      {
        name: 'FAMILLE',
        description: 'Le projet familial ultime. Invitez tout le monde Ã  participer pendant 2 ans.',
        price: '199 â‚¬',
        cta: { label: 'Acheter', href: 'https://app.life-story.ai/registrations/new?product=premium&locale=fr' },
      },
    ],
    rows: [
      {
        label: 'Livre imprimÃ©',
        tooltip: "Jusqu'Ã  350 pages en couleur",
        values: ['âŒ Pas de livre imprimÃ©', '<strong>âœ… 1 livre couleur inclus</strong>', '<strong>ðŸ“š 5 livres couleur inclus</strong>'],
      },
      {
        label: 'Photos',
        tooltip: 'Photos et images en couleurs',
        values: ['50 photos max.', 'â™¾ï¸ Photos illimitÃ©es', 'â™¾ï¸ Photos illimitÃ©es'],
      },
      {
        label: 'Livraison',
        tooltip: "Tarif de livraison pour les livres inclus dans l'offre",
        values: ['â€”', 'âœˆï¸ Livraison monde offerte', 'âœˆï¸ Livraison monde offerte'],
      },
      {
        label: 'Participants',
        tooltip: "Le nombre d'auteurs ou d'interviewers qui auront accÃ¨s Ã  l'application",
        values: ['Solo 1 auteur', 'ðŸ‘¥ <strong>Duo (vous + 1 invitÃ©)</strong>', "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦ <strong>Famille (jusqu'Ã  10)</strong>"],
      },
      {
        label: 'Biographe IA',
        tooltip: "Transcription audio, questions personnalisÃ©es, aide Ã  l'Ã©criture et mise en page, et bien plus encore",
        values: ['Inclus', 'Inclus', 'Inclus'],
      },
      {
        label: "DurÃ©e d'accÃ¨s",
        values: ['6 mois', '1 an', '2 ans'],
      },
      {
        label: 'Livre supplÃ©mentaire',
        values: ['59 â‚¬ / livre', '39 â‚¬ / livre', '<strong>29 â‚¬ / livre</strong> ðŸ”¥'],
      },
      {
        label: 'Export numÃ©rique',
        values: ['PDF / ePub', 'PDF / ePub', 'PDF / ePub'],
      },
    ],
  },
  guarantee: {
    title: 'ðŸ† Garantie satisfait ou remboursÃ© de 30 jours',
    description:
      "Si vous ou votre parent n'Ãªtes pas satisfait, ou si le cadeau n'est finalement pas utilisÃ©, vous Ãªtes remboursÃ© sans condition jusqu'Ã  30 jours aprÃ¨s l'achat.",
  },
  examples: {
    title: 'Exemples de livres',
    description: "C'est ce que vous recevrez Ã  la fin.",
    items: [
      { image: 'exampleGift', alt: 'Exemple de livre cadeau' },
      { image: 'exampleAutobiography', alt: "Exemple d'autobiographie imprimÃ©e" },
      { image: 'exampleFamilyStory', alt: "Exemple d'histoire familiale imprimÃ©e" },
    ],
  },
  privacy: {
    title: 'Nous respectons votre vie privÃ©e',
    description: "Vos donnÃ©es sont protÃ©gÃ©es et ne sont pas transfÃ©rÃ©es Ã  d'autres individus ou entreprises.",
  },
  finalCta: {
    title: 'PrÃ©servez maintenant les histoires qui comptent',
    description: 'Une idÃ©e de cadeau originale et personnalisÃ©e pour un parent, une grand-mÃ¨reâ€¦ ou vous-mÃªme.',
    cta: { label: 'Acheter Ã  partir de 99 â‚¬', href: 'https://app.life-story.ai/registrations/new?locale=fr', primary: true },
    info: "AccÃ¨s Ã  l'app pendant 1 an, premiÃ¨re impression incluse.",
  },
  faq: {
    title: 'FAQ',
    items: [...frFaq],
  },
  footer: {
    lines: ['Â© 2025 Life Story AI', "23 rue d'Essling, 92400 Courbevoie", 'hello@life-story.ai', 'Tel : +33 1 89 31 80 33', 'FabriquÃ© en France'],
    socialLinks: [...footerSocials],
    currentLanguage: 'FranÃ§ais',
    alternateLanguage: { label: 'English', href: '/' },
    legalLinks: [
      {
        links: [
          { label: 'Carte cadeau', href: 'https://app.life-story.ai/registrations/new?locale=fr' },
          { label: 'FonctionnalitÃ©s', href: '#feature' },
          { label: 'Prix', href: '#new-pricing' },
          { label: 'Politique de confidentialitÃ©', href: 'https://life-story.ai/fr/politique-de-confidentialite' },
          { label: "Conditions d'utilisation", href: 'https://life-story.ai/fr/conditions-utilisation' },
        ],
      },
      {
        links: [
          { label: 'Trustpilot', href: 'https://fr.trustpilot.com/review/life-story.ai' },
          { label: 'Mentions lÃ©gales', href: 'https://life-story.ai/fr/mentions-legales' },
          { label: 'FAQ', href: '#faq' },
          { label: 'Ã€ propos de nous', href: 'https://life-story.ai/fr/team' },
          { label: 'Vision', href: 'https://life-story.ai/fr/vision' },
          { label: 'Blog', href: 'https://life-story.ai/blog' },
        ],
      },
      {
        title: 'Voir aussi',
        links: [
          { label: 'Offrir une biographie', href: 'https://life-story.ai/fr-cadeau-biographie' },
          { label: 'Mon autobiographie', href: 'https://life-story.ai/autobiographie' },
          { label: 'Biographie mÃ¨re', href: 'https://life-story.ai/fr-biographie-mere' },
          { label: 'Histoires de famille', href: 'https://life-story.ai/' },
          { label: 'Impact', href: 'https://life-story.ai/impact' },
        ],
      },
      {
        links: [
          { label: 'Storyworth vs. Life Story AI', href: 'https://life-story.ai/blog/storyworth' },
          { label: 'How to Write an Autobiography', href: 'https://life-story.ai/blog/how-to-write-an-autobiography' },
        ],
      },
    ],
  },
};
