"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let mouseX = -200
    let mouseY = -200
    let currentX = -200
    let currentY = -200
    let animationId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08
      glow.style.transform = `translate(${currentX - 150}px, ${currentY - 150}px)`
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouseMove)
    animate()

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed -z-10 size-72 rounded-full bg-gradient-to-br from-primary/8 via-primary/5 to-transparent blur-3xl transition-opacity duration-1000 hidden lg:block"
      aria-hidden="true"
    />
  )
}