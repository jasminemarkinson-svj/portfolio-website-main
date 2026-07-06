import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="font-serif text-3xl sm:text-4xl">Contact</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">
        For collaborations, commissions, or just to say hello — reach out
        below or via email directly.
      </p>

      <dl className="mt-8 flex flex-col gap-1 text-sm">
        <div className="flex gap-2">
          <dt className="text-muted">Email</dt>
          <dd>
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div className="flex gap-2">
          <dt className="text-muted">Based in</dt>
          <dd>{siteConfig.location}</dd>
        </div>
      </dl>

      <div className="mt-12">
        <ContactForm />
      </div>
    </div>
  );
}
