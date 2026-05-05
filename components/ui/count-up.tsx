"use client"

import { useEffect, useState, useRef } from "react"

interface CountUpProps {
  to: number
  from?: number
  duration?: number
  suffix?: string
  className?: string
}

export function CountUp({ to, from = 0, duration = 2, suffix = "", className }: CountUpProps) {
  const [count, setCount] = useState(from)
  const countRef = useRef(from)
  const startTime = useRef<number | null>(null)

  useEffect(() => {
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = Math.min((timestamp - startTime.current) / (duration * 1000), 1)
      
      // Ease out cubic for a natural feel
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeOutCubic * (to - from) + from)
      
      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [to, from, duration])

  return <span className={className}>{count}{suffix}</span>
}