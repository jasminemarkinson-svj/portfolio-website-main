import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jasmine Markinson is a New York–based womenswear designer known for bold, expressive collections that merge experimental materials with a vibrant use of color.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-5 sm:gap-16">
        <div className="relative aspect-4/5 overflow-hidden bg-border sm:col-span-2">
          <Image
            src="/portfolio/about-portrait.jpg"
            alt={siteConfig.name}
            fill
            preload
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="sm:col-span-3">
          <h1 className="font-serif text-3xl sm:text-4xl">About</h1>
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted">
            <p>
              Jasmine Markinson is a New York–based womenswear designer known
              for bold, expressive collections that merge experimental
              materials with a vibrant use of color. Her work emerges from
              introspection and acute observation of the environments and
              people around her, drawing on psychological themes of human
              behavior, interaction, and inner states.
            </p>
            <p>
              Jasmine treats materiality and form as the language of her
              practice, testing unconventional textiles, sculptural
              constructions, and inventive silhouettes, with texture, hue, and
              shape conveying layered emotional narratives. Process is central:
              each sample, drape, and surface treatment is investigated until it
              reliably communicates an idea.
            </p>
            <p>
              She designs with dual intention; every piece must function
              autonomously while contributing to a greater sequence in which
              garments converse and flow, allowing individual garments to stand
              alone yet participate in a cohesive dialogue across a collection.
              Jasmine&apos;s aesthetic pairs theatrical gestures with moments of
              restraint and subtle wit, so drama and humor coexist.
            </p>
            <p>
              She prioritizes craftsmanship and experimental wearability,
              believing clothing should evolve with the wearer and accrue
              meaning through use. Ultimately, her designs aim to forge intimate
              connections: pieces that tell stories, invite interpretation, and
              create encounters between wearer, object, and context.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:max-w-xs">
            <dt className="text-muted">Based in</dt>
            <dd>{siteConfig.location}</dd>
            <dt className="text-muted">Email</dt>
            <dd>
              <a
                href={`mailto:${siteConfig.email}`}
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {siteConfig.email}
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}
