import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <section className="relative flex min-h-[calc(100svh-5.5rem)] items-center justify-center overflow-hidden">
      {/* Single full-bleed landing image (from the Grounded Within The Flow
          shoot). Change this src to use a different photo. */}
      <Image
        src="/portfolio/grounded-within-the-flow/06.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_28%]"
      />
      {/* Radial scrim: darker behind the centered title for legibility, lighter
          at the edges so the photo still reads. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 60% at 50% 52%, rgba(0,0,0,0.62), rgba(0,0,0,0.12) 72%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="font-serif text-4xl text-foreground sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.35em] text-muted sm:text-sm">
          {siteConfig.role}
        </p>
        <Link
          href="/work"
          className="group mt-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-foreground"
        >
          Enter
          <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
