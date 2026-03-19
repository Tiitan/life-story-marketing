import { normalizeCopy } from '../lib/text';
import type { ImpactPageContent, Locale } from './types';

const impactContent: Record<Locale, ImpactPageContent> = {
  en: {
    locale: 'en',
    path: '/impact',
    alternatePath: '/fr/impact',
    title: 'Impact',
    description:
      "Writing one's story, whether it's an autobiography, a family memoir, a diary, a travelogue or the story of a birth or encounter, has many documented benefits for mental health, social ties and the preservation of cultural heritage.",
    seoTitle: 'We have a positive impact | Life Story AI',
    seoDescription:
      'Discover how Life Story AI supports mental health, intergenerational understanding, social connection, and cultural heritage through storytelling.',
    heroTitle: 'We are an impact-driven startup',
    introHtml:
      "Writing one's story - whether it's an autobiography, a family memoir, a diary, a travelogue or the story of a birth or encounter - has many documented benefits. Whether for <strong>mental health</strong>, <strong>social ties</strong> or the preservation of <strong>cultural heritage</strong>.",
    benefits: [
      {
        title: 'Psychological well-being',
        description:
          'several studies show that expressive writing (life stories, diaries, etc.) has tangible effects on mental health.',
        image: 'impactPsychologicalWellBeing',
        alt: 'Illustration representing psychological well-being',
      },
      {
        title: 'Intergenerational understanding',
        description:
          'the writing and transmission of life stories plays a key role in intergenerational dialogue, strengthening intergenerational solidarity.',
        image: 'impactIntergenerationalUnderstanding',
        alt: 'Illustration representing intergenerational understanding',
      },
      {
        title: 'Social connection',
        description:
          'sharing personal stories with others (family, friends or groups) creates common ground and a shared history with those closest to you.',
        image: 'impactSocialConnection',
        alt: 'Illustration representing social connection',
      },
      {
        title: 'Preservation of cultural heritage',
        description:
          'writing life stories contributes to collective memory and the preservation of intangible cultural heritage.',
        image: 'impactCulturalHeritage',
        alt: 'Illustration representing the preservation of cultural heritage',
      },
    ],
    bodyHtml: `
      <p>The United Nations Sustainable Development Goals (SDGs) are a global blueprint for a more just and sustainable future. At Life Story AI, we are proud that our core mission aligns directly with the specific targets of several of these goals, turning each personal story into a contribution to collective progress.</p>
      <p><strong>Here is how we fit into this global framework</strong>:</p>
      <h3>SDG 3: Good Health and Well-being</h3>
      <p>Target 3.4 aims to "by 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being."<br>Our contribution: By offering a tool for expressive writing, Life Story AI actively participates in promoting mental health and well-being. Documenting one's life journey is a recognized method for improving emotional health, clarifying thoughts, and mitigating the effects of stress and isolation.</p>
      <h3>SDG 11: Sustainable Cities and Communities</h3>
      <p>Target 11.4 is explicit: "Strengthen efforts to protect and safeguard the world's cultural and natural heritage."<br>Our contribution: We directly address this target by providing a modern, accessible way to preserve the intangible cultural heritage embodied in life stories. Each recorded story is a facet of our collective memory, safeguarded and protected for future generations.</p>
      <h3>SDG 10: Reduced Inequalities</h3>
      <p>Target 10.2 aims to "by 2030, empower and promote the social, economic and political inclusion of all, irrespective of age, sex, disability, race, ethnicity, origin, religion or economic or other status."<br>Our contribution: Our platform gives a voice to everyone, especially older adults whose stories hold invaluable wisdom. By facilitating intergenerational dialogue and the sharing of experiences, we combat isolation and work towards a more inclusive society where every individual, regardless of age, is valued.</p>
      <h3>SDG 4: Quality Education</h3>
      <p>Target 4.7 aims to ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including through "promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture's contribution to sustainable development."<br>Our contribution: The life stories generated with our AI become unique educational resources. They offer authentic perspectives on history, culture, and human values, fostering a deeper understanding of the world and a direct appreciation for cultural diversity.</p>
    `,
    cta: {
      title: 'We are a mission-led startup focused on creating positive social and health impact through storytelling',
      subtitle: 'The Benefits of Writing Life Stories',
      label: 'Read the full article on our blog',
      href: '/blog/benefits-of-writing-life-stories',
    },
  },
  fr: {
    locale: 'fr',
    path: '/fr/impact',
    alternatePath: '/impact',
    title: 'Impact',
    description:
      "Ecrire son histoire - qu'il s'agisse d'une autobiographie, de memoires familiales, d'un journal intime, d'un carnet de voyage ou de l'histoire d'une naissance ou d'une rencontre - presente de nombreux avantages documentes. Qu'il s'agisse de sante mentale, de lien social ou de preservation du patrimoine culturel.",
    seoTitle: 'Nous sommes une startup a impact | Life Story AI',
    seoDescription:
      'Decouvrez comment Life Story AI soutient la sante mentale, le dialogue intergenerationnel, le lien social et le patrimoine culturel grace aux recits de vie.',
    heroTitle: 'Nous sommes une startup a impact',
    introHtml:
      "Ecrire son histoire - qu'il s'agisse d'une autobiographie, de memoires familiales, d'un journal intime, d'un carnet de voyage ou de l'histoire d'une naissance ou d'une rencontre - presente de nombreux avantages documentes. Qu'il s'agisse de sante mentale, de lien social ou de preservation du patrimoine culturel.",
    benefits: [
      {
        title: 'Bien-etre psychologique',
        description:
          "plusieurs etudes montrent que l'ecriture expressive (recits de vie, journaux intimes, etc.) a des effets tangibles sur la sante mentale.",
        image: 'impactPsychologicalWellBeing',
        alt: 'Illustration representant le bien-etre psychologique',
      },
      {
        title: 'Comprehension intergenerationnelle',
        description:
          "L'ecriture et la transmission des recits de vie jouent un role cle dans le dialogue intergenerationnel, le renforcement de la solidarite intergenerationnelle et la promotion de l'egalite entre les hommes et les femmes.",
        image: 'impactIntergenerationalUnderstanding',
        alt: 'Illustration representant la comprehension intergenerationnelle',
      },
      {
        title: 'Lien social',
        description:
          "le fait de partager des histoires personnelles avec d'autres (famille, amis ou groupes) cree un terrain d'entente et une histoire commune avec les personnes les plus proches.",
        image: 'impactSocialConnection',
        alt: 'Illustration representant le lien social',
      },
      {
        title: 'Preservation du patrimoine culturel',
        description:
          "L'ecriture de recits de vie contribue a la memoire collective et a la preservation du patrimoine culturel immateriel.",
        image: 'impactCulturalHeritage',
        alt: 'Illustration representant la preservation du patrimoine culturel',
      },
    ],
    bodyHtml: `
      <p>Les Objectifs de Developpement Durable (ODD) des Nations Unies constituent un plan d'action mondial pour un avenir plus juste et durable.</p>
      <p>Chez Life Story AI, nous sommes fiers que notre mission principale s'aligne directement avec les cibles specifiques de plusieurs de ces objectifs, transformant chaque histoire personnelle en une contribution au progres collectif.</p>
      <p>Voici comment nous nous inscrivons dans ce cadre mondial :</p>
      <h3>ODD 3 : Bonne sante et bien-etre</h3>
      <p>La cible 3.4 vise a "d'ici a 2030, reduire d'un tiers, par la prevention et le traitement, le taux de mortalite prematuree due a des maladies non transmissibles et promouvoir la sante mentale et le bien-etre".<br>Notre contribution : En proposant un outil d'ecriture expressive, Life Story AI participe activement a la promotion de la sante mentale et du bien-etre. Documenter son parcours de vie est une methode reconnue pour ameliorer la sante emotionnelle, clarifier ses pensees et attenuer les effets du stress et de l'isolement.</p>
      <h3>ODD 11 : Villes et communautes durables</h3>
      <p>La cible 11.4 est tres explicite : "Renforcer les efforts de protection et de sauvegarde du patrimoine culturel et naturel mondial".<br>Notre contribution : Nous contribuons directement a cet objectif en offrant un moyen moderne et accessible pour preserver le patrimoine culturel immateriel que representent les recits de vie. Chaque histoire enregistree est une facette de la memoire collective qui est ainsi sauvegardee et protegee pour les generations futures.</p>
      <h3>ODD 10 : Inegalites reduites</h3>
      <p>La cible 10.2 a pour but, "d'ici a 2030, d'autonomiser toutes les personnes et de promouvoir leur integration sociale, economique et politique, independamment de leur age, de leur sexe, de leur handicap, de leur race, de leur ethnie, de leurs origines, de leur religion ou de leur statut economique ou autre".<br>Notre contribution : Notre plateforme donne une voix a chacun, notamment aux aines dont les histoires sont une source de sagesse inestimable. En facilitant le dialogue intergenerationnel et le partage d'experiences, nous luttons contre l'isolement et oeuvrons pour une societe plus inclusive ou chaque individu, quel que soit son age, est valorise.</p>
      <h3>ODD 4 : Education de qualite</h3>
      <p>La cible 4.7 vise a s'assurer que tous les eleves acquierent les connaissances et competences necessaires pour promouvoir le developpement durable, notamment par "la promotion d'une culture de paix et de non-violence, de la citoyennete mondiale et de l'appreciation de la diversite culturelle et de la contribution de la culture au developpement durable".<br>Notre contribution : Les recits de vie generes avec notre IA deviennent des ressources educatives uniques. Ils offrent des perspectives authentiques sur l'histoire, la culture et les valeurs humaines, favorisant une meilleure comprehension du monde et une appreciation directe de la diversite culturelle.</p>
    `,
    cta: {
      title: 'Nous sommes une startup qui vise un impact social et sanitaire positif par le biais de la narration',
      subtitle: "Les avantages de l'ecriture d'histoires de vie",
      label: "Lire l'article complet sur notre blog",
      href: '/fr/blog/benefits-of-writing-life-stories',
    },
  },
};

export function getImpactPageContent(locale: Locale) {
  return normalizeCopy(impactContent[locale]);
}
