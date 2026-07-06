import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-border">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                preload={index < 2}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h2 className="font-serif text-xl">{project.title}</h2>
              <span className="text-sm text-muted">{project.year}</span>
            </div>
            <p className="mt-1 text-sm uppercase tracking-wide text-muted">
              {project.category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
