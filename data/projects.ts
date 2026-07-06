export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  coverImage: string;
  images: string[];
};

// Replace the placeholder entries below with your own work.
// Drop your photos into /public/portfolio and point coverImage/images at them.
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    year: "2025",
    category: "Collection",
    description:
      "A short description of this project — the concept, materials, and process behind the work.",
    coverImage: "/portfolio/placeholder-1.svg",
    images: ["/portfolio/placeholder-1.svg", "/portfolio/placeholder-2.svg"],
  },
  {
    slug: "project-two",
    title: "Project Two",
    year: "2024",
    category: "Editorial",
    description:
      "A short description of this project — the concept, materials, and process behind the work.",
    coverImage: "/portfolio/placeholder-3.svg",
    images: ["/portfolio/placeholder-3.svg", "/portfolio/placeholder-4.svg"],
  },
  {
    slug: "project-three",
    title: "Project Three",
    year: "2024",
    category: "Textile Study",
    description:
      "A short description of this project — the concept, materials, and process behind the work.",
    coverImage: "/portfolio/placeholder-5.svg",
    images: ["/portfolio/placeholder-5.svg", "/portfolio/placeholder-6.svg"],
  },
];
