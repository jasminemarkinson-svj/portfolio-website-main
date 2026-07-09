export type ProjectImage = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  // Shown on the /work overview (the page with all the work).
  coverImage: string;
  // Optional larger "starting" photo shown at the top of the collection's own
  // page. Falls back to coverImage when omitted.
  heroImage?: string;
  // Optional object-position for the hero crop (e.g. "50% 20%"), used to keep
  // faces in frame. Defaults to "center".
  heroPosition?: string;
  images: ProjectImage[];
};

// Ordered newest → oldest; this order drives the /work overview and the WORK
// nav dropdown. Update descriptions with real copy whenever you have it.
export const projects: Project[] = [
  {
    slug: "grounded-within-the-flow",
    title: "Grounded Within The Flow",
    year: "2026",
    category: "Collection",
    description:
      "This collection explores the connection between human body and spirit through natural forms and their inherent cycles of transformation. My garments translate nature's visual language into wearable art, where grounded silhouettes inspired by organic structures harmoniously balance with flowing textures that mirror water's movement, embodying the coexistence of physical stability and spiritual fluidity. Through careful observation of natural patterns, such as veins in leaves that mirror those in our hands, I discovered our integral connection to cycles of growth, transformation, and renewal. By studying hidden root systems, fungal networks, and water's endless cycles, this work demonstrates how fashion can express the intangible relationship between our temporary physical forms and the eternal forces that animate us, suggesting we exist as fleeting waves within an infinite ocean of transformation.",
    coverImage: "/portfolio/grounded-within-the-flow/01.jpg",
    images: [
      { src: "/portfolio/grounded-within-the-flow/01.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/02.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/grounded-within-the-flow/03.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/grounded-within-the-flow/04.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/grounded-within-the-flow/05.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/06.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/07.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/08.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/09.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/10.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/11.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/12.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/grounded-within-the-flow/13.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/14.jpg", width: 2400, height: 1600 },
      { src: "/portfolio/grounded-within-the-flow/15.jpg", width: 1600, height: 2400 },
    ],
  },
  {
    slug: "bonded-in-craft",
    title: "Bonded in Craft",
    year: "2025",
    category: "Collection",
    description:
      "Bonded in Craft celebrates the creative bond between my mother and me, honoring the memories and artistic journey we have shared. Inspired by watching her bead leather bracelets, the collection incorporates suede, beading, clay, and leather as material expressions of her influence. Through these garments, I intertwine my own design practice with hers, transforming shared techniques and cherished moments into a tribute to our enduring connection through craft.",
    coverImage: "/portfolio/bonded-in-craft/07.jpg",
    heroImage: "/portfolio/bonded-in-craft/group.jpg",
    heroPosition: "50% 18%",
    images: [
      { src: "/portfolio/bonded-in-craft/01.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/02.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/03.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/04.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/05.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/06.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/07.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/08.jpg", width: 1600, height: 2400 },
      { src: "/portfolio/bonded-in-craft/09.jpg", width: 1600, height: 2400 },
    ],
  },
  {
    slug: "take-a-joke",
    title: "Take a Joke",
    year: "2024",
    category: "Collection",
    description:
      "Taking a Joke explores the space between humor and vulnerability. Rooted in my identity as the perpetual joker, the collection reflects how comedy can become both a shield and a form of self-expression. Drawing from the symbolism of the clown, I investigate the tension between playfulness and hidden emotion, transforming personal reflection into garments that reclaim vulnerability as a source of strength, resilience, and self-understanding.",
    coverImage: "/portfolio/take-a-joke/green-suit.jpg",
    heroImage: "/portfolio/take-a-joke/reject.jpg",
    images: [
      { src: "/portfolio/take-a-joke/01.jpg", width: 1601, height: 2400 },
      { src: "/portfolio/take-a-joke/03.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/04.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/05.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/06.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/07.jpg", width: 1601, height: 2400 },
      { src: "/portfolio/take-a-joke/08.jpg", width: 1601, height: 2400 },
      { src: "/portfolio/take-a-joke/12.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/13.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/14.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/15.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/16.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/take-a-joke/17.jpg", width: 2400, height: 1601 },
    ],
  },
  {
    slug: "upcycle-project",
    title: "Upcycle Project",
    year: "2023",
    category: "Upcycled",
    description:
      "A short description of this collection — the concept, materials, and process behind the work.",
    coverImage: "/portfolio/upcycle-project/01.jpg",
    images: [
      { src: "/portfolio/upcycle-project/01.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/upcycle-project/02.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/upcycle-project/03.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/upcycle-project/04.jpg", width: 2400, height: 1601 },
    ],
  },
  {
    slug: "lingerie",
    title: "Lingerie",
    year: "2022",
    category: "Lingerie",
    description:
      "A short description of this collection — the concept, materials, and process behind the work.",
    coverImage: "/portfolio/lingerie/01.jpg",
    images: [
      { src: "/portfolio/lingerie/01.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/lingerie/02.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/lingerie/03.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/lingerie/04.jpg", width: 2400, height: 1601 },
    ],
  },
];
