import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { process } from "@/data/process";

export const metadata: Metadata = {
  title: "Process",
  description: "Notes on design process, from research to construction.",
};

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h1 className="font-serif text-3xl sm:text-4xl">Process</h1>
      <p className="mt-3 text-sm uppercase tracking-[0.15em] text-muted">
        From the most recent collection — Grounded Within The Flow
      </p>
      <p className="mt-4 max-w-lg text-lg text-muted">
        Notes on how a collection gets made — research, patternmaking, and
        construction along the way.
      </p>

      <div className="mt-12 flex flex-col">
        {process.map((entry) => (
          <Link
            key={entry.slug}
            href={`/process/${entry.slug}`}
            className="group flex gap-6 border-t border-border py-8 first:border-t-0 sm:gap-10"
          >
            {entry.image && (
              <div className="relative aspect-16/9 w-32 shrink-0 overflow-hidden sm:w-44">
                <Image
                  src={entry.image.src}
                  alt={entry.title}
                  fill
                  sizes="176px"
                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: entry.image.position ?? "center" }}
                />
              </div>
            )}
            <div className="min-w-0">
              <h2 className="font-serif text-xl transition-colors group-hover:text-foreground sm:text-2xl">
                {entry.title}
              </h2>
              <p className="mt-1 text-sm text-muted">{entry.date}</p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {entry.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
