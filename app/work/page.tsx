import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Work",
};

export default function Work() {
  return (
    // One collection per screen: a scroll-snap column where each cover fills the
    // viewport (below the header) and snaps into place as you scroll. Click a
    // cover to open that collection.
    <div className="h-[calc(100svh-5.5rem)] snap-y snap-mandatory overflow-y-auto">
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/work/${project.slug}`}
          transitionTypes={["nav-forward"]}
          className="group relative flex h-[calc(100svh-5.5rem)] snap-start items-end overflow-hidden bg-border"
        >
          <ViewTransition name={`project-${project.slug}`} share="morph">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </ViewTransition>

          {/* Bottom scrim + caption, kept legible over any photo. */}
          <div className="relative z-10 w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 pb-12 sm:p-12 sm:pb-16">
            <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl sm:text-5xl">{project.title}</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted">
                  {project.category}
                </p>
              </div>
              <span className="shrink-0 text-sm text-muted">{project.year}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
