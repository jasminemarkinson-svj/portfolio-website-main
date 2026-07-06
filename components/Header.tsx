import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between sm:py-10">
        <Link
          href="/"
          className="font-serif text-2xl tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm tracking-wide text-muted">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
