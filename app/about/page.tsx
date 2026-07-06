import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-5 sm:gap-16">
        <div className="relative aspect-4/5 overflow-hidden bg-border sm:col-span-2">
          <Image
            src="/portfolio/about-portrait.svg"
            alt={siteConfig.name}
            fill
            preload
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="sm:col-span-3">
          <h1 className="font-serif text-3xl sm:text-4xl">About</h1>
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-muted">
            <p>
              Replace this paragraph with your bio — where you studied,
              how you got into design, and what draws you to the work
              you make.
            </p>
            <p>
              Add a second paragraph on your design philosophy: the
              materials, silhouettes, or ideas you keep returning to,
              and the kind of work you&apos;re looking for next.
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
