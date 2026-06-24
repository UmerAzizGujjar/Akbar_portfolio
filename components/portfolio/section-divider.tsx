export function SectionDivider({ variant = "wave" }: { variant?: "wave" | "angle" | "circle" }) {
  return (
    <div className="relative -mb-1 h-16 overflow-hidden" aria-hidden="true">
      {variant === "wave" && (
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-full w-full text-border"
          fill="currentColor"
        >
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" opacity="0.5" />
          <path d="M0,70 C360,30 1080,90 1440,70 L1440,100 L0,100 Z" opacity="0.3" />
        </svg>
      )}
      {variant === "angle" && (
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-full w-full text-border"
          fill="currentColor"
        >
          <polygon points="0,100 1440,0 1440,100" opacity="0.3" />
        </svg>
      )}
      {variant === "circle" && (
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-full w-full text-border"
          fill="currentColor"
        >
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,100 L0,100 Z" opacity="0.4" />
        </svg>
      )}
    </div>
  )
}