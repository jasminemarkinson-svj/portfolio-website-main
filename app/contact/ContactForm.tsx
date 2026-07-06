"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "./actions";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-fit border border-foreground px-6 py-3 text-sm uppercase tracking-wide transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <p className="text-lg text-muted">
        Thanks for reaching out — I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form action={formAction} className="flex max-w-lg flex-col gap-6">
      {/* Honeypot field, hidden from real visitors via CSS */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm uppercase tracking-wide text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm uppercase tracking-wide text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm uppercase tracking-wide text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border-b border-border bg-transparent py-2 outline-none focus:border-foreground"
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-700">{state.message}</p>
      )}

      <SubmitButton />
    </form>
  );
}
