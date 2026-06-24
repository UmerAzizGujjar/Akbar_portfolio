"use client"

import { useEffect, useRef, useState } from "react"
import { skillGroups, strengths } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { iconMap } from "./icon-map"
import { SkillsRadar } from "./skills-radar"
import { ToolsGrid } from "./tools-grid"

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setWidth(level), 100)
        observer.unobserve(entry.target)
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref}>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical expertise"
          description="A blend of testing discipline, the right tools, and enough programming to dig into issues."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.slice(0, 2).map((group) => {
              const Icon = iconMap[group.icon]
              return (
                <div key={group.title} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {Icon && <Icon className="size-4" />}
                    </span>
                    <h3 className="font-heading text-sm font-semibold">{group.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <SkillBar key={skill.name} {...skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                QA Proficiency
              </h3>
              <SkillsRadar />
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.slice(2).map((group) => {
            const Icon = iconMap[group.icon]
            return (
              <div key={group.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {Icon && <Icon className="size-4" />}
                  </span>
                  <h3 className="font-heading text-sm font-semibold">{group.title}</h3>
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <ToolsGrid />

        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Core Strengths
          </h3>
          <div className="flex flex-wrap gap-2">
            {strengths.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3.5 py-2 text-sm font-medium transition-colors hover:border-primary/20 hover:bg-primary/5"
                >
                  {Icon && <Icon className="size-3.5 text-primary" />}
                  {s.label}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
