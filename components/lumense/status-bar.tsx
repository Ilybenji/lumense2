"use client"

import { useEffect, useState } from "react"

export function StatusBar() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const hh = String(now.getUTCHours()).padStart(2, "0")
      const mm = String(now.getUTCMinutes()).padStart(2, "0")
      const ss = String(now.getUTCSeconds()).padStart(2, "0")
      setTime(`${hh}:${mm}:${ss} UTC`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-block size-1.5 bg-accent" aria-hidden />
          <span>STUDIO OPEN</span>
          <span className="hidden md:inline">- ACCEPTING PROJECTS FOR Q3 / Q4 2026</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <span>STOCKHOLM, SE · 59.33°N 18.06°E</span>
          <span className="tabular-nums">{time || "00:00:00 UTC"}</span>
        </div>
        <div className="md:hidden tabular-nums">{time || "00:00:00 UTC"}</div>
      </div>
    </div>
  )
}
