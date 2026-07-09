"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorkNav({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1.5 uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
      >
        {label}
        <svg
          width="9"
          height="9"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ease-out ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M1 3l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        // Outer wrapper owns the horizontal centering (a static transform);
        // the inner panel owns the entrance animation (its own transform), so
        // the two never fight over the `transform` property.
        <div className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2">
          <div
            role="menu"
            className="animate-dropdown min-w-[15rem] origin-top border border-border bg-background py-2 text-left shadow-xl shadow-black/40"
          >
            <Link
              href="/work"
              transitionTypes={["nav-back"]}
              onClick={() => setOpen(false)}
              role="menuitem"
              className="block px-4 py-2 text-sm normal-case tracking-normal text-muted transition-colors hover:bg-border hover:text-foreground"
            >
              All Work
            </Link>
            <div className="my-2 border-t border-border" />
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                transitionTypes={["nav-forward"]}
                onClick={() => setOpen(false)}
                role="menuitem"
                className="group flex items-baseline justify-between gap-6 px-4 py-2 normal-case tracking-normal transition-colors hover:bg-border"
              >
                <span className="text-sm text-muted transition-colors group-hover:text-foreground">
                  {project.title}
                </span>
                <span className="text-xs text-muted">{project.year}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
