"use client"

import { ArrowRight, ExternalLink, FolderGit2, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"
import { project } from "@/lib/portfolio-data"
import { GithubIcon } from "./brand-icons"

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 size-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-8">
          <SectionHeading
            eyebrow="Featured Work"
            title={project.name}
            description={project.subtitle}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/30">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-40 -right-40 size-60 rounded-full bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 p-8 sm:p-10">
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary border border-primary/20">
                  <FolderGit2 className="size-3.5" />
                  {project.role}
                </span>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground/90">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-heading font-semibold mb-3 text-primary">Key Contributions</h4>
                    <div className="space-y-3">
                      {project.contributions.map((contrib, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex size-6 items-center justify-center rounded-full bg-primary/10 shrink-0">
                            <Check className="size-3.5 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">{contrib}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl bg-secondary/30 border border-border p-5">
                    <h4 className="font-heading font-semibold mb-4 text-primary">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 rounded-xl border border-primary/20 bg-primary/5 px-3.5 py-2 text-xs font-medium text-primary hover:bg-primary/10 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}