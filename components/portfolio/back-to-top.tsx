"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 ${
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-4 opacity-0 scale-90 pointer-events-none"
      }`}
    >
      <ArrowUp className="size-4" />
    </button>
  )
}
