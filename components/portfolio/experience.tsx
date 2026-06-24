"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { experience, project } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Experience() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="experience" className="border-t border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied my QA skills"
          description="Real-world experience from academic projects and hands-on coursework in software quality assurance."
        />

        <div className="mb-12 rounded-xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-1">
            <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Featured Project
            </span>
            <span className="text-xs text-muted-foreground">{project.role}</span>
          </div>
          <h3 className="font-heading text-xl font-bold">{project.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 space-y-2">
            {(expanded ? project.contributions : project.contributions.slice(0, 2)).map((c) => (
              <div key={c} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-sm">{c}</span>
              </div>
            ))}
          </div>

          {project.contributions.length > 2 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {expanded ? "Show less" : `+ ${project.contributions.length - 2} more contributions`}
            </button>
          )}

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md bg-primary/5 border border-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-0">
          {experience.map((item, i) => (
            <div key={item.title} className="relative pl-8 pb-8 last:pb-0">
              <div className="absolute left-0 top-1 bottom-0 w-px bg-border" />
              <div className="absolute left-[-4.5px] top-1 z-10 size-2.5 rounded-full border-2 border-primary bg-background" />

              <div className="rounded-xl border border-border bg-card p-5">
                <span className="inline-block rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-2">
                  {item.period}
                </span>
                <h4 className="font-heading text-base font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
