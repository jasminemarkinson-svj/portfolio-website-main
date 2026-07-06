import type { Metadata } from "next";
import { experience, education, skills } from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="font-serif text-3xl sm:text-4xl">Resume</h1>
        <a
          href="/resume.pdf"
          download
          className="text-sm uppercase tracking-wide underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          Download PDF
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-sm uppercase tracking-wide text-muted">
          Experience
        </h2>
        <ul className="mt-4 flex flex-col gap-8">
          {experience.map((entry) => (
            <li
              key={entry.title + entry.range}
              className="flex flex-col gap-1 sm:flex-row sm:gap-6"
            >
              <span className="w-36 shrink-0 text-sm text-muted">
                {entry.range}
              </span>
              <div>
                <p className="font-serif text-lg">{entry.title}</p>
                <p className="text-muted">{entry.place}</p>
                {entry.detail && (
                  <p className="mt-1 text-sm text-muted">{entry.detail}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-sm uppercase tracking-wide text-muted">
          Education
        </h2>
        <ul className="mt-4 flex flex-col gap-8">
          {education.map((entry) => (
            <li
              key={entry.title + entry.range}
              className="flex flex-col gap-1 sm:flex-row sm:gap-6"
            >
              <span className="w-36 shrink-0 text-sm text-muted">
                {entry.range}
              </span>
              <div>
                <p className="font-serif text-lg">{entry.title}</p>
                <p className="text-muted">{entry.place}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-sm uppercase tracking-wide text-muted">Skills</h2>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-4 py-1.5 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
