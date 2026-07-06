import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

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
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Link
        href="/"
        className="text-sm uppercase tracking-wide text-muted transition-colors hover:text-foreground"
      >
        &larr; All work
      </Link>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl">{project.title}</h1>
        <span className="text-sm text-muted">
          {project.category} &middot; {project.year}
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {project.images.map((src, index) => (
          <div
            key={src + index}
            className="relative aspect-4/5 overflow-hidden bg-border sm:aspect-16/10"
          >
            <Image
              src={src}
              alt={`${project.title} — image ${index + 1}`}
              fill
              preload={index === 0}
              sizes="(min-width: 640px) 800px, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
