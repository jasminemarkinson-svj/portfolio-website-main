import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Logo from "@/components/Logo";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="font-serif text-3xl sm:text-4xl">Contact</h1>

      <div className="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-12">
        <div className="flex flex-col justify-between">
          <p className="max-w-sm text-lg leading-relaxed text-muted">
            For collaborations, commissions, or just to say hello — reach
            out via the form or email directly.
          </p>

          <div>
            <Logo className="text-[22vw] text-foreground sm:text-8xl" />

            <dl className="mt-8 flex flex-col gap-2 text-sm">
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
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
