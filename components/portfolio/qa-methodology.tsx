"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { qualityMethodology } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { iconMap } from "./icon-map"

export function QAMethodology() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section id="methodology" className="border-t border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="QA Methodology"
          title={qualityMethodology.title}
          description={qualityMethodology.description}
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-semibold">QA Process Steps</h3>
              <div className="space-y-2">
                {qualityMethodology.phases.map((phase, i) => (
                  <button
                    key={phase.name}
                    onClick={() => setActivePhase(i)}
                    className={`w-full text-left rounded-lg border p-3.5 transition-all ${
                      activePhase === i
                        ? "border-primary/30 bg-primary/5"
                        : "border-transparent hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-8 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                          activePhase === i
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-medium ${activePhase === i ? "text-primary" : ""}`}>
                          {phase.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{phase.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {(() => {
                    const Icon = iconMap[qualityMethodology.phases[activePhase].icon]
                    return Icon ? <Icon className="size-4" /> : null
                  })()}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold">{qualityMethodology.phases[activePhase].name}</h3>
                  <p className="text-xs text-muted-foreground">Step {activePhase + 1} of {qualityMethodology.phases.length}</p>
                </div>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {qualityMethodology.phases[activePhase].description}
              </p>

              <div className="space-y-2">
                {qualityMethodology.phases[activePhase].activities.map((activity) => (
                  <div
                    key={activity}
                    className="flex items-start gap-2.5 rounded-lg bg-primary/5 border border-primary/10 p-3"
                  >
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span className="text-sm">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-primary">
            Core QA Principles
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {qualityMethodology.principles.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-2.5 rounded-lg border border-border bg-secondary/30 p-3.5"
              >
                <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
