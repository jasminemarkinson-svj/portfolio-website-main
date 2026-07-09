"use client";

// A template re-mounts on every navigation (unlike a layout), so this wrapper
// re-runs its enter animation each time the route changes — giving every page
// a consistent fade-and-rise transition, independent of the View Transitions
// API used for the work-grid ↔ collection morph.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
