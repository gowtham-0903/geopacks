// Generated decorative SVG graphics — layered behind sections for depth.

export const GridPattern = ({ className = '' }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 bg-grid-steel [background-size:42px_42px] ${className}`}
  />
);

export const MeshGlow = ({ className = '' }) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none absolute inset-0 bg-mesh-ink ${className}`}
  />
);

// Floating geometric shapes for the dark hero/CTA bands.
export const FloatingShapes = ({ className = '' }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    <div className="animate-float absolute left-[8%] top-24 h-16 w-16 rounded-2xl border border-accent-bright/25" />
    <div className="animate-float absolute right-[12%] top-1/3 h-24 w-24 rounded-full bg-accent/15 blur-2xl [animation-delay:0.8s]" />
    <div className="animate-float absolute bottom-16 right-[28%] h-10 w-10 rotate-45 bg-white/5 [animation-delay:1.4s]" />
    <div className="animate-float absolute bottom-24 left-[20%] h-12 w-12 rounded-full border-2 border-white/10 [animation-delay:1.1s]" />
  </div>
);

// Thin animated top accent line for cards.
export const AccentBar = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`block h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-bright ${className}`}
  />
);

// Decorative bottle silhouette in pure SVG (no external asset needed).
export const BottleGlyph = ({ className = '' }) => (
  <svg viewBox="0 0 64 140" fill="none" className={className} aria-hidden="true">
    <path
      d="M26 6h12v10c0 4 1 6 3 9 4 5 7 9 7 17v74c0 6-4 12-12 12H29c-8 0-13-6-13-12V42c0-8 3-12 7-17 2-3 3-5 3-9V6Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <rect x="25" y="2" width="14" height="6" rx="2" stroke="currentColor" strokeWidth="2.5" />
    <path d="M16 70h32" stroke="currentColor" strokeWidth="2" opacity="0.5" />
  </svg>
);
