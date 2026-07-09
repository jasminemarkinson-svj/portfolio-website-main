import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import WorkNav from "@/components/WorkNav";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border bg-background"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
        <Link
          href="/"
          className="text-sm font-medium uppercase tracking-[0.2em] text-foreground"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs uppercase tracking-[0.15em] text-muted">
          {siteConfig.nav.map((item) =>
            item.href === "/" ? (
              <WorkNav key={item.href} label={item.label} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
