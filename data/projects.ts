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
  // Optional labeled sub-galleries. When present, the project page renders each
  // section under its own heading instead of the single `images` gallery.
  sections?: { title: string; images: ProjectImage[] }[];
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
    slug: "eyes-on-you",
    title: "Eyes on You",
    year: "2023",
    category: "Collection",
    description:
      "Eyes on You offers a playful yet literal interpretation of the feeling of constantly being observed and judged. Adorned with eye motifs, the design transforms the gaze of others into a bold visual statement, exploring the tension between self-expression, perception, and the opinions that inevitably shape our experiences.",
    coverImage: "/portfolio/eyes-on-you/02.jpg",
    heroImage: "/portfolio/eyes-on-you/hero.jpg",
    images: [
      { src: "/portfolio/eyes-on-you/02.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/eyes-on-you/03.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/eyes-on-you/04.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/eyes-on-you/05.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/eyes-on-you/06.jpg", width: 2400, height: 1601 },
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
    slug: "stitched-together",
    title: "Stitched Together",
    year: "2022",
    category: "Collection",
    description:
      "Stitched Together reflects a period of personal growth and self-discovery, using fashion as a means of reconstructing identity. Through leather patchwork and a tank top embellished with sewing machine components, the look offers a literal expression of piecing myself back together. It captures the transition from high school to college, exploring the uncertainty, resilience, and evolving sense of self that accompanies the journey into adulthood.",
    coverImage: "/portfolio/stitched-together/09.jpg",
    heroImage: "/portfolio/stitched-together/02.jpg",
    images: [
      { src: "/portfolio/stitched-together/01.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/02.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/03.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/04.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/05.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/06.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/07.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/08.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/stitched-together/09.jpg", width: 2400, height: 1601 },
    ],
  },
  {
    slug: "lingerie",
    title: "Lingerie",
    year: "2022",
    category: "Lingerie",
    description: "",
    coverImage: "/portfolio/lingerie/01.jpg",
    heroImage: "/portfolio/beaded-underwire-bra/01.jpg",
    heroPosition: "50% 10%",
    images: [
      { src: "/portfolio/lingerie/01.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/lingerie/02.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/lingerie/03.jpg", width: 2400, height: 1601 },
      { src: "/portfolio/lingerie/04.jpg", width: 2400, height: 1601 },
    ],
    sections: [
      {
        title: "",
        images: [
          { src: "/portfolio/lingerie/01.jpg", width: 2400, height: 1601 },
          { src: "/portfolio/lingerie/02.jpg", width: 2400, height: 1601 },
          { src: "/portfolio/lingerie/03.jpg", width: 2400, height: 1601 },
          { src: "/portfolio/lingerie/04.jpg", width: 2400, height: 1601 },
        ],
      },
      {
        title: "Beaded Underwire Bra",
        images: [
          { src: "/portfolio/beaded-underwire-bra/01.jpg", width: 2400, height: 1728 },
          { src: "/portfolio/beaded-underwire-bra/02.jpg", width: 2400, height: 2061 },
          { src: "/portfolio/beaded-underwire-bra/03.jpg", width: 1601, height: 2400 },
        ],
      },
    ],
  },
];
