"use client"

import { useEffect, useState } from "react"
import { Briefcase, X } from "lucide-react"
import { profile } from "@/lib/portfolio-data"

export function StickyBadge() {
  const [dismissed, setDismissed] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (dismissed || !visible) return null

  return (
    <div className="fixed bottom-24 right-6 z-40 animate-fade-in-up">
      <div className="group relative flex items-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-primary/80 px-5 py-3.5 text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5">
        <div className="flex size-10 items-center justify-center rounded-full bg-white/20">
          <Briefcase className="size-5" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold leading-tight">Open to Work</p>
          <p className="text-[10px] leading-tight opacity-80">{profile.availability}</p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-opacity hover:opacity-70 opacity-0 group-hover:opacity-100"
          aria-label="Dismiss"
        >
          <X className="size-3" />
        </button>
      </div>
    </div>
  )
}