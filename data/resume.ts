export type ResumeEntry = {
  range: string;
  title: string;
  place: string;
  detail?: string;
};

export const experience: ResumeEntry[] = [
  {
    range: "Sept 2025 — May 2026",
    title: "Design Intern",
    place: "Alice + Olivia, New York, NY",
    detail:
      "Developed research and inspiration packs in Adobe InDesign, built mood boards, and supported hand-sewing and garment construction during sample development.",
  },
  {
    range: "May 2024 — Jul 2024",
    title: "Patternmaking Intern",
    place: "Anna Sui, New York, NY",
    detail:
      "Supported pattern making and sample development, cut patterns and sourced materials, and hand-sewed finishings on garments and archive pieces.",
  },
  {
    range: "Dec 2023",
    title: "Retail & Operations Intern",
    place: "Pazlifestyle, New York, NY",
    detail:
      "Assisted with store setup, sales, and inventory; styled mannequins and window displays; coordinated with designers on product pricing.",
  },
  {
    range: "Jul 2023 — Aug 2023",
    title: "Production Intern",
    place: "Kith, New York, NY",
    detail:
      "Assisted with photoshoot prep — vision boards, props, and venues — and managed inventory and packaging distribution.",
  },
  {
    range: "May 2022 — Jun 2022",
    title: "Fashion Intern",
    place: "Andine Apparel, New York, NY",
    detail:
      "Merchandised and restocked product displays, oversaw quality assurance, and contributed to Spring collection garment development.",
  },
  {
    range: "Feb 2022 — Apr 2022",
    title: "Costume Designer",
    place: "Emily Carmen Music Video, New York, NY",
    detail:
      "Designed and constructed custom wardrobe for the lead artist and collaborated on visual concept and styling research.",
  },
];

export const education: ResumeEntry[] = [
  {
    range: "2022 — May 2026",
    title: "BFA, Fashion Design",
    place: "Parsons School of Design",
    detail: "GPA: 3.8",
  },
  {
    range: "2018 — 2022",
    title: "High School Diploma",
    place: "Greenwich High School, Greenwich, CT",
    detail: "GPA: 3.8",
  },
];

export const skills: string[] = [
  "Trend Research & Visual Storytelling",
  "Pattern Making & Sewing (Hand & Machine)",
  "Garment Construction & Styling",
  "Visual Merchandising",
  "Inventory & Quality Control",
  "Adobe Photoshop, Illustrator & InDesign",
  "Procreate",
  "Team Collaboration & Communication",
  "Time Management & Task Organization",
];
