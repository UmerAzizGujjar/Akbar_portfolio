"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { LinkedinIcon } from "./brand-icons"

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: profile.socials.email },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: LinkedinIcon, label: "LinkedIn", value: "akbar-alii", href: profile.socials.linkedin },
]

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`)
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`)
    setTimeout(() => {
      setStatus("sent")
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setTimeout(() => {
        setStatus("idle")
        form.reset()
      }, 3000)
    }, 900)
  }

  return (
    <section id="contact" className="border-t border-border bg-secondary/30 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build quality software together"
          description="Looking for a dedicated QA intern who sweats the details? I'd love to hear from you."
          align="center"
        />

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="grid md:grid-cols-5">
            <div className="bg-primary p-6 md:col-span-2">
              <div className="space-y-5">
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary-foreground">Get in touch</h3>
                  <p className="mt-1.5 text-sm text-primary-foreground/80">
                    Open to QA internships, junior testing roles, and collaboration. I usually reply within a day.
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <ul className="space-y-4">
                  {contactItems.map((item) => {
                    const content = (
                      <span className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-lg bg-white/10">
                          <item.icon className="size-4 text-primary-foreground" />
                        </span>
                        <span>
                          <span className="block text-xs text-primary-foreground/60">{item.label}</span>
                          <span className="block text-sm font-medium text-primary-foreground">{item.value}</span>
                        </span>
                      </span>
                    )
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="block transition-opacity hover:opacity-80 rounded-lg hover:bg-white/5 p-1.5 -mx-1.5"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="p-1.5 -mx-1.5">{content}</div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={onSubmit} className="space-y-4 p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about the role or project..."
                    className="w-full resize-none rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70 sm:w-auto"
                >
                  {status === "idle" && (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                  {status === "sending" && (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "sent" && (
                    <>
                      <CheckCircle2 className="size-4" />
                      Message ready!
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
