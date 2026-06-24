"use client"

import { useEffect, useRef, useState } from "react"
import { AlertTriangle, Bug, ChevronDown, ExternalLink, Shield } from "lucide-react"
import { sampleDefects, stats } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

const severityColors: Record<string, { badge: string; bg: string; dot: string }> = {
  Critical: { badge: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/20", bg: "border-l-red-500", dot: "bg-red-500" },
  Major: { badge: "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/20", bg: "border-l-orange-500", dot: "bg-orange-500" },
  Minor: { badge: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400 border-yellow-500/20", bg: "border-l-yellow-500", dot: "bg-yellow-500" },
}

function QualityScore() {
  const ref = useRef<HTMLDivElement>(null)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0
        const interval = setInterval(() => {
          current += 1
          setScore(current)
          if (current >= 96) clearInterval(interval)
        }, 25)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const r = 54
  const circumference = 2 * Math.PI * r
  const offset = circumference - (score / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} fill="none" stroke="oklch(var(--border) / 1)" strokeWidth="8" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="oklch(var(--primary) / 1)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-primary">{score}%</span>
        <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Quality</span>
      </div>
    </div>
  )
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0
        const interval = setInterval(() => {
          current += 1
          setCount(current)
          if (current >= value) clearInterval(interval)
        }, 30)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="rounded-lg border border-border bg-card p-4 text-center">
      <p className="text-2xl font-bold text-primary">{count}{suffix}</p>
      <p className="mt-1 text-[11px] text-muted-foreground">{label}</p>
    </div>
  )
}

function DefectCard({ defect, index }: { defect: typeof sampleDefects[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const colors = severityColors[defect.severity] || severityColors.Minor

  return (
    <div
      className={`rounded-lg border border-border bg-card transition-all ${
        colors.bg
      } border-l-4 ${open ? "shadow-sm" : ""}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-4 text-left"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-semibold ${colors.badge}`}>
              <span className={`size-1.5 rounded-full ${colors.dot}`} />
              {defect.severity}
            </span>
            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary">
              {defect.id}
            </span>
            <span className="text-[10px] text-muted-foreground">{defect.status}</span>
          </div>
          <h4 className="text-sm font-medium leading-snug">{defect.title}</h4>
          <p className="mt-1 text-xs text-muted-foreground">{defect.environment}</p>
        </div>
        <ChevronDown className={`mt-1 size-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="border-t border-border px-4 pb-4 pt-3">
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-1">Steps to Reproduce</p>
              <ol className="list-inside list-decimal space-y-0.5 text-xs text-foreground/80">
                {defect.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-green-500/5 border border-green-500/10 p-3">
                <p className="text-[10px] font-medium text-green-600 dark:text-green-400 mb-0.5">Expected Result</p>
                <p className="text-xs text-foreground/80">{defect.expected}</p>
              </div>
              <div className="rounded-md bg-red-500/5 border border-red-500/10 p-3">
                <p className="text-[10px] font-medium text-red-600 dark:text-red-400 mb-0.5">Actual Result</p>
                <p className="text-xs text-foreground/80">{defect.actual}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function DefectShowcase() {
  return (
    <section id="qa-showcase" className="border-t border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="QA Showcase"
          title="Quality metrics that speak for themselves"
          description="Real test metrics and sample defect reports that demonstrate my QA approach in action."
          align="center"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              <div className="relative flex items-center justify-center rounded-xl border border-border bg-card p-6">
                <QualityScore />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <StatCard key={s.label} {...s} />
                ))}
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="size-4 text-primary" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Severity Legend</h4>
                </div>
                <div className="space-y-1.5">
                  {Object.entries(severityColors).map(([sev, c]) => (
                    <div key={sev} className="flex items-center gap-2 text-xs">
                      <span className={`size-2 rounded-full ${c.dot}`} />
                      <span className="font-medium">{sev}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <Bug className="size-4 text-primary" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Sample Defect Reports
              </h3>
              <span className="text-[10px] text-muted-foreground">(click to expand)</span>
            </div>
            <div className="space-y-3">
              {sampleDefects.map((defect, i) => (
                <DefectCard key={defect.id} defect={defect} index={i} />
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Real defects reported during the GenCall AI project. Demonstrates structured documentation style.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
