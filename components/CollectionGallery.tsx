"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { ProjectImage } from "@/data/projects";

export default function CollectionGallery({
  images,
  title,
}: {
  images: ProjectImage[];
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () =>
      setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="columns-2 gap-4 sm:columns-3 sm:gap-6 [&>*]:mb-4 sm:[&>*]:mb-6">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group block w-full break-inside-avoid overflow-hidden bg-border"
          >
            <Image
              src={image.src}
              alt={`${title} — image ${index + 1}`}
              width={image.width}
              height={image.height}
              sizes="(min-width: 640px) 33vw, 50vw"
              className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex flex-col bg-background/98 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-6 py-6 text-sm uppercase tracking-[0.15em] text-muted">
            <span>
              {openIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={close}
              className="transition-colors hover:text-foreground"
              aria-label="Close"
            >
              Close
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-6 pb-6">
            <div className="relative h-full max-h-[75vh] w-full max-w-4xl">
              <Image
                src={images[openIndex].src}
                alt={`${title} — image ${openIndex + 1}`}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-6 text-sm uppercase tracking-[0.15em] text-muted">
            <button
              type="button"
              onClick={showPrev}
              className="transition-colors hover:text-foreground"
            >
              &larr; Previous
            </button>
            <button
              type="button"
              onClick={showNext}
              className="transition-colors hover:text-foreground"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
