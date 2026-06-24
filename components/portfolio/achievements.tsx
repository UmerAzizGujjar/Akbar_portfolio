import { Award, FileText, GitBranch, Webhook } from "lucide-react"
import { achievements, certifications } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

const iconMap: Record<string, typeof Award> = {
  Award,
  FileText,
  GitBranch,
  Webhook,
}

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Certifications & professional milestones"
          description="Continuous learning and demonstrated expertise in software quality assurance."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((a) => {
                  const Icon = iconMap[a.icon] || Award
                  return (
                    <div
                      key={a.title}
                      className="flex items-start gap-3 rounded-lg border border-border bg-secondary/30 p-4"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold">{a.title}</h4>
                          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                            {a.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {a.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-lg border border-border bg-secondary/30 p-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="text-sm font-medium">{c.name}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}</p>
                      </div>
                      <span className="shrink-0 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        {c.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
