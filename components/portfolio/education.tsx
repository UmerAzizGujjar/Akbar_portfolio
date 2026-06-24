import { GraduationCap, BookOpen, Award, Check, MapPin } from "lucide-react"
import { education } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function Education() {
  return (
    <section id="education" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          description="A strong foundation in Software Engineering with a focus on Quality Assurance."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="size-6" />
                </span>
                <div className="min-w-0">
                  <span className="inline-block rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {education.period}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold">
                    {education.degree}
                  </h3>
                  <p className="font-medium text-primary text-sm">{education.school}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <MapPin className="size-3.5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{education.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-primary/5 border border-primary/10 px-4 py-3">
                <p className="text-sm font-medium">{education.focus}</p>
              </div>

              <div className="mt-6 border-t border-border pt-5">
                <div className="mb-3 flex items-center gap-2">
                  <Award className="size-4 text-primary" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Highlights
                  </p>
                </div>
                <ul className="space-y-2">
                  {education.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" />
                      </span>
                      <span className="text-sm">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="size-5" />
                </span>
                <h3 className="font-heading text-base font-semibold">Relevant Coursework</h3>
              </div>

              <div className="space-y-2">
                {education.coursework.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3 text-sm"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">
                      {i + 1}
                    </span>
                    {c}
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
