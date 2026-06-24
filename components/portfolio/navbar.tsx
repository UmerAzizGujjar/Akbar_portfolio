"use client"

import { useEffect, useState } from "react"
import { Download, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { profile } from "@/lib/portfolio-data"
import { ThemeToggle } from "./theme-toggle"

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("#about")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = "#about"
      for (const link of links) {
        const el = document.querySelector(link.href) as HTMLElement | null
        if (el && window.scrollY >= el.offsetTop - 120) current = link.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            AA
          </span>
          <span className="hidden text-sm font-semibold sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                active === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.cvPath}
            download
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            <Download className="size-3.5" />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-all duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col px-4 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                active === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 border-t border-border pt-2">
            <a
              href={profile.cvPath}
              download
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
