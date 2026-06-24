"use client"

import { useEffect, useRef, useState } from "react"

interface RadarSkill {
  name: string
  level: number
}

const radarSkills: RadarSkill[] = [
  { name: "Manual Testing", level: 92 },
  { name: "Test Design", level: 88 },
  { name: "Defect Mgmt", level: 85 },
  { name: "Regression", level: 82 },
  { name: "API Testing", level: 78 },
  { name: "Agile/Scrum", level: 80 },
]

export function SkillsRadar() {
  const [animated, setAnimated] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 300)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const cx = 140
  const cy = 140
  const radius = 100
  const levels = 4
  const angleStep = (2 * Math.PI) / radarSkills.length

  const getPoint = (index: number, level: number, scale: number = 1) => {
    const angle = angleStep * index - Math.PI / 2
    const r = (radius / levels) * level * scale
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  }

  const getSkillPoint = (skillIndex: number, skillLevel: number) => {
    const angle = angleStep * skillIndex - Math.PI / 2
    const r = (radius / 100) * skillLevel
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  }

  const polygonPoints = radarSkills
    .map((skill, i) => {
      const { x, y } = getSkillPoint(i, animated ? skill.level : 0)
      return `${x},${y}`
    })
    .join(" ")

  const gridPolygons = Array.from({ length: levels }, (_, level) => {
    const points = radarSkills
      .map((_, i) => {
        const { x, y } = getPoint(i, level + 1, animated ? 1 : 0)
        return `${x},${y}`
      })
      .join(" ")
    return points
  })

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg
        width="300"
        height="300"
        viewBox="-50 -50 380 380"
      >
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="color-mix(in oklch, var(--primary) 30%, transparent)" />
            <stop offset="100%" stopColor="color-mix(in oklch, var(--primary) 5%, transparent)" />
          </radialGradient>
        </defs>

        {gridPolygons.map((points, i) => (
          <polygon
            key={i}
            points={points}
            fill="none"
            stroke="color-mix(in oklch, var(--primary) 10%, transparent)"
            strokeWidth="1"
            className="transition-all duration-1000 ease-out"
          />
        ))}

        {radarSkills.map((_, i) => {
          const { x, y } = getPoint(i, levels, animated ? 1 : 0)
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="color-mix(in oklch, var(--primary) 10%, transparent)"
              strokeWidth="1"
              className="transition-all duration-1000 ease-out"
            />
          )
        })}

        <polygon
          points={polygonPoints}
          fill="url(#radarFill)"
          stroke="color-mix(in oklch, var(--primary) 50%, transparent)"
          strokeWidth="2"
          className="transition-all duration-1000 ease-out"
        />

        {radarSkills.map((_, i) => {
          const { x, y } = getSkillPoint(i, animated ? radarSkills[i].level : 0)
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="4"
              className="transition-all duration-1000 ease-out"
              fill="color-mix(in oklch, var(--primary) 80%, transparent)"
              stroke="var(--primary)"
              strokeWidth="2"
            />
          )
        })}

        {radarSkills.map((skill, i) => {
          const { x, y } = getPoint(i, levels)
          const labelRadius = radius + 22
          const labelAngle = angleStep * i - Math.PI / 2
          const lx = cx + labelRadius * Math.cos(labelAngle)
          const ly = cy + labelRadius * Math.sin(labelAngle)
          const textAnchor =
            Math.abs(labelAngle % (2 * Math.PI)) < 0.1 || Math.abs(labelAngle % (2 * Math.PI)) > Math.PI - 0.1
              ? "middle"
              : labelAngle > -Math.PI / 2 && labelAngle < Math.PI / 2
                ? "start"
                : "end"
          return (
            <text
              key={i}
              x={lx}
              y={ly}
              textAnchor={textAnchor}
              dominantBaseline="middle"
              className="fill-muted-foreground text-[8px] font-medium transition-all duration-300"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {skill.name}
            </text>
          )
        })}
      </svg>

      {hovered !== null && (
        <p className="mt-2 text-xs font-semibold text-primary">
          {radarSkills[hovered].name}: {radarSkills[hovered].level}%
        </p>
      )}
    </div>
  )
}
