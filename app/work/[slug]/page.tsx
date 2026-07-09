import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { projects } from "@/data/projects";
import CollectionGallery from "@/components/CollectionGallery";

type Params = Promise<{ slug: string }>;

const directional = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <Link
        href="/work"
        transitionTypes={["nav-back"]}
        className="text-sm uppercase tracking-wide text-muted transition-colors hover:text-foreground"
      >
        &larr; All work
      </Link>

      {/* The cover morphs from the grid thumbnail — kept a sibling of the
          directional wrapper below so the morph and the slide stay independent
          view-transition groups rather than one nested inside the other. */}
      <ViewTransition name={`project-${project.slug}`} share="morph">
        <div className="relative mt-8 aspect-4/5 overflow-hidden bg-border sm:aspect-16/9">
          <Image
            src={project.heroImage ?? project.coverImage}
            alt={project.title}
            fill
            preload
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
            style={{ objectPosition: project.heroPosition ?? "center" }}
          />
        </div>
      </ViewTransition>

      {/* Title, description, and gallery slide in from the right on forward
          navigation and out on back, while the cover above morphs. Kept a
          sibling of the morph (never nested) so the two transitions compose. */}
      <ViewTransition enter={directional} exit={directional} default="none">
        <div>
          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl">{project.title}</h1>
            <span className="text-sm text-muted">
              {project.category} &middot; {project.year}
            </span>
          </div>

          {project.description && (
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          )}

          {project.sections ? (
            <div className="mt-12 flex flex-col gap-16">
              {project.sections.map((section, index) => (
                <section key={section.title || index}>
                  {section.title && (
                    <h2 className="mb-6 font-serif text-2xl sm:text-3xl">
                      {section.title}
                    </h2>
                  )}
                  <CollectionGallery
                    images={section.images}
                    title={section.title || project.title}
                  />
                </section>
              ))}
            </div>
          ) : (
            <div className="mt-12">
              <CollectionGallery images={project.images} title={project.title} />
            </div>
          )}
        </div>
      </ViewTransition>
    </div>
  );
}
