export type ProcessImage = { src: string; width: number; height: number };

export type ProcessEntry = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
  // Lead image shown as the thumbnail and at the top of the entry page.
  // Optional — an entry can be text-only.
  image?: {
    src: string;
    width: number;
    height: number;
    position?: string;
    caption?: string;
  };
  // Additional spreads shown in a gallery below the writeup.
  images?: ProcessImage[];
};

// Images are pages from the "Grounded Within The Flow" portfolio, grouped by
// the stage of the process each one documents.
export const process: ProcessEntry[] = [
  {
    slug: "research-to-concept",
    title: "Research to Concept",
    date: "2026",
    excerpt:
      "Design internship — building the inspiration packs and mood boards that a collection starts from, before a single pattern is cut.",
    body: [
      "This page offers insight into the visual research and creative process behind my collection. Through a curated selection of core reference images, I explore the emotions, forms, textures, colors, and silhouettes that shape each design. Rather than serving as direct inspiration, these images reveal the underlying connections between nature, memory, and the body, helping me uncover the feelings and ideas that guide the collection.",
      "By examining these visual references through my own perspective, I develop a deeper understanding of how color, shape, movement, and material can communicate emotion. This evolving dialogue between observation and intuition allows each garment to emerge as a thoughtful interpretation of the concepts that define the collection.",
    ],
    image: { src: "/portfolio/process/rc3.jpg", width: 2400, height: 1011 },
    images: [
      { src: "/portfolio/process/rc4.jpg", width: 2400, height: 1005 },
      { src: "/portfolio/process/rc7.jpg", width: 2400, height: 990 },
      { src: "/portfolio/process/rc12.jpg", width: 2400, height: 1094 },
      { src: "/portfolio/process/rc14.jpg", width: 2400, height: 926 },
    ],
  },
  {
    slug: "drawing-iterations",
    title: "Drawing Iterations",
    date: "2026",
    excerpt:
      "Croquis and illustration — pushing a silhouette through iteration after iteration, from first gesture to final rendered look.",
    body: [
      "Before a garment exists, it lives as a drawing. I work a silhouette through iteration after iteration — sketching the same idea across dozens of croquis, testing where volume gathers, how a hem falls, and where the eye should land.",
      "Nature drives the shapes: I trace organic structures — roots, water, moss, the flare of a fish's fin — onto the figure, then push those gestures through repeated drawing until a look resolves.",
      "Rendering is the last step, where color, fabric weight, and movement get committed. The final illustrations are less a plan than a promise of what the finished garment should feel like.",
    ],
    image: {
      src: "/portfolio/process/final-lineup.jpg",
      width: 2400,
      height: 1221,
      caption: "Final Drawings",
    },
    images: [
      { src: "/portfolio/process/iter-jacket.jpg", width: 2400, height: 926 },
      { src: "/portfolio/process/iter-cape.jpg", width: 2400, height: 926 },
      { src: "/portfolio/process/iter-dress-a.jpg", width: 2400, height: 926 },
      { src: "/portfolio/process/iter-dress-b.jpg", width: 2400, height: 926 },
    ],
  },
  {
    slug: "pattern-to-sample",
    title: "Pattern to Sample",
    date: "2024",
    excerpt:
      "Patternmaking internship — cutting patterns, sourcing materials, and hand-finishing samples before they leave the studio.",
    body: [
      "The development of each garment evolved through an ongoing dialogue between research, sketch iterations, patternmaking, and construction. Through continuous fitting, refinement, textile experimentation, and the exploration of trims and materials, I shaped the materiality, structure, and final form of each piece.",
    ],
    image: { src: "/portfolio/process/ps20.jpg", width: 2400, height: 1006 },
    images: [
      { src: "/portfolio/process/ps6.jpg", width: 2400, height: 921 },
      { src: "/portfolio/process/ps9.jpg", width: 2400, height: 1001 },
      { src: "/portfolio/process/ps16.jpg", width: 2400, height: 926 },
      { src: "/portfolio/process/ps18.jpg", width: 2400, height: 1005 },
      { src: "/portfolio/process/ps21.jpg", width: 2400, height: 926 },
    ],
  },
  {
    slug: "construction-and-craft",
    title: "Technical Flats",
    date: "2026",
    excerpt:
      "Technical flats — translating each rendered look into precise front- and back-view specs ready for the pattern table.",
    body: [
      "Every look gets drawn twice: once as an illustration and once as a technical flat. The flats strip away the styling and pin down the garment itself — proportions, seam lines, closures, and construction details, front and back.",
      "Rendered next to their reference imagery and croquis, the flats are where a design becomes buildable — the bridge between the drawing and the pattern table.",
    ],
    image: { src: "/portfolio/process/tf25.jpg", width: 2400, height: 926 },
    images: [
      { src: "/portfolio/process/tf26.jpg", width: 2400, height: 926 },
      { src: "/portfolio/process/tf27.jpg", width: 2400, height: 926 },
      { src: "/portfolio/process/tf28.jpg", width: 2400, height: 926 },
      { src: "/portfolio/process/tf29.jpg", width: 2400, height: 926 },
    ],
  },
];
