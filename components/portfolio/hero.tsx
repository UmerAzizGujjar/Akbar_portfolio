"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ArrowDown, Download, Mail } from "lucide-react"
import { profile, stats } from "@/lib/portfolio-data"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLParagraphElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 2000
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <p ref={ref} className="text-3xl font-bold text-primary sm:text-4xl tabular-nums">
      {count}{suffix}
    </p>
  )
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 sm:pt-28 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 size-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {profile.availability}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Hi, I&apos;m</p>
              <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <h2 className="font-heading text-xl font-semibold text-primary sm:text-2xl">
                QA Engineer & Software Quality Assurance
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                <Download className="size-4" />
                Download Resume
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                View Experience
                <ArrowDown className="size-4" />
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent blur-xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/akbar-portrait.png"
                alt="Portrait of Akbar Ali, QA Engineer"
                width={560}
                height={640}
                priority
                className="aspect-[7/8] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <Counter target={s.value} suffix={s.suffix} />
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
