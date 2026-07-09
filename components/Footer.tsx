import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
