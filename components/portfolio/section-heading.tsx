import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div
      className={cn(
        "mb-8 max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
        {eyebrow}
      </p>
      <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
