import { Check, Mail, MapPin, Phone } from "lucide-react"
import { about, languages, profile } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Quality is a habit, not an act"
          description="A Software Engineering graduate with a passion for delivering bug-free software through systematic testing and clear communication."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="space-y-4">
                {about.summary.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Strengths
                </p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {about.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: profile.email },
                  { icon: Phone, label: "Phone", value: profile.phone },
                  { icon: MapPin, label: "Location", value: profile.location },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Languages
                </p>
                <div className="space-y-2">
                  {languages.map((l) => (
                    <div key={l.name} className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-2.5">
                      <span className="text-sm font-medium">{l.name}</span>
                      <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {l.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
