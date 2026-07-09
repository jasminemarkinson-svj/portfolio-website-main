// JM monogram — tight serif ligature in the site's Fraunces face.
// Inherits color via currentColor, so it works anywhere on the dark theme.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`select-none font-serif leading-none tracking-[-0.08em] ${className}`}
    >
      JM
    </span>
  );
}
