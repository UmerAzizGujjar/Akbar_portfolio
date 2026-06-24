import { services } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { iconMap } from "./icon-map"

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What I Do"
          title="How I help teams ship with confidence"
          description="A focused QA skill set covering the full testing workflow — from planning test coverage to reporting actionable defects."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20"
              >
                <span className="mb-4 flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {Icon && <Icon className="size-5" />}
                </span>
                <h3 className="font-heading text-base font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
