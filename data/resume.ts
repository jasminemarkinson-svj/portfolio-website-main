export type ResumeEntry = {
  range: string;
  title: string;
  place: string;
  detail?: string;
};

// Replace these placeholder entries with your real experience/education/skills.
export const experience: ResumeEntry[] = [
  {
    range: "2023 — Present",
    title: "Job Title",
    place: "Company Name",
    detail: "One line on your responsibilities and impact in this role.",
  },
  {
    range: "2021 — 2023",
    title: "Job Title",
    place: "Company Name",
    detail: "One line on your responsibilities and impact in this role.",
  },
];

export const education: ResumeEntry[] = [
  {
    range: "2017 — 2021",
    title: "Degree, Major",
    place: "School Name",
  },
];

export const skills: string[] = [
  "Pattern Making",
  "Draping",
  "Adobe Illustrator",
  "Textile Sourcing",
  "Garment Construction",
];
