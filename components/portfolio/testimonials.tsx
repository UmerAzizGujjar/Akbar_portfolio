"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionHeading } from "./section-heading"

const testimonials = [
  {
    quote: "Akbar demonstrated exceptional attention to detail during our final year project. His systematic testing approach caught several critical issues early, saving us weeks of rework.",
    author: "Project Team Lead",
    role: "GenCall AI Development Team",
    rating: 5,
  },
  {
    quote: "His ability to write clear, reproducible bug reports made our triage process much smoother. He has a natural talent for thinking about edge cases that others might miss.",
    author: "Course Instructor",
    role: "Software Quality Engineering, Superior University",
    rating: 5,
  },
  {
    quote: "Akbar's structured approach to test case design and defect management was impressive. He consistently met deadlines and communicated issues effectively with the team.",
    author: "Academic Supervisor",
    role: "Final Year Project, Superior University",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people say about my work"
          description="Feedback from collaborators and mentors on my QA approach and teamwork."
          align="center"
        />

        <div className="relative">
          <div className="relative rounded-xl border border-border bg-card p-8 sm:p-10">
            <Quote className="absolute top-6 right-8 size-12 text-primary/10" aria-hidden="true" />

            <div className="flex gap-1 mb-5">
              {Array.from({ length: testimonials[current].rating }, (_, i) => (
                <Star key={i} className="size-4 fill-primary/30 text-primary" />
              ))}
            </div>

            <p className="relative z-10 text-base leading-relaxed text-foreground/90 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                {testimonials[current].author.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-sm">{testimonials[current].author}</p>
                <p className="text-xs text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={prev}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
