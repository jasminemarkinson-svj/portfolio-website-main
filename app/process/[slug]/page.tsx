import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { process } from "@/data/process";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return process.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = process.find((p) => p.slug === slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
  };
}

export default async function ProcessEntryPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const entry = process.find((p) => p.slug === slug);

  if (!entry) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <Link
        href="/process"
        className="text-sm uppercase tracking-wide text-muted transition-colors hover:text-foreground"
      >
        &larr; Process
      </Link>

      <h1 className="mt-8 font-serif text-3xl sm:text-4xl">{entry.title}</h1>
      <p className="mt-2 text-sm text-muted">{entry.date}</p>

      {entry.image && (
        <>
          <Image
            src={entry.image.src}
            alt={entry.title}
            width={entry.image.width}
            height={entry.image.height}
            preload
            sizes="(min-width: 640px) 768px, 100vw"
            className="mt-10 h-auto w-full bg-border"
          />
          {entry.image.caption && (
            <p className="mt-3 text-sm uppercase tracking-[0.15em] text-muted">
              {entry.image.caption}
            </p>
          )}
        </>
      )}

      <div className="mt-10 flex flex-col gap-6 text-lg leading-relaxed text-muted">
        {entry.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {entry.images && entry.images.length > 0 && (
        <div className="mt-12 flex flex-col gap-8">
          {entry.images.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={entry.title}
              width={img.width}
              height={img.height}
              sizes="(min-width: 640px) 768px, 100vw"
              className="h-auto w-full bg-border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
