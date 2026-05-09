"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { label: "Manifest", href: "#manifest", index: "01" },
  { label: "Services", href: "#tjanster", index: "02" },
  { label: "Work", href: "#arbeten", index: "03" },
  { label: "Process", href: "#process", index: "04" },
  { label: "Contact", href: "#kontakt", index: "05" },
]

const sectionIds = links.map((l) => l.href.slice(1))

export function Nav() {
  const [active, setActive] = useState<string | null>(null)
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  function closeMobileMenu() {
    if (detailsRef.current) detailsRef.current.open = false
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5" aria-label="Lumense — home">
          <svg
            width="28"
            height="28"
            viewBox="0 0 2000 2000"
            className="fill-foreground"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="matrix(5.448014,0,0,5.448014,-1335.055625,-867.480903)">
              <rect x="280.692" y="392.085" width="98.612" height="98.612" />
            </g>
            <g transform="matrix(5.448014,0,0,5.448014,1805.84437,1268.603712)">
              <path d="M0,-197.218L-98.607,-197.218L-197.218,-98.611L-98.607,-98.611L-98.607,0L0,-98.611L0,-197.218Z" />
            </g>
            <g transform="matrix(5.448014,0,0,5.448014,731.395198,1268.603712)">
              <path d="M0,98.612L197.218,98.612L197.218,0L98.607,0L0,98.612Z" />
            </g>
            <g transform="matrix(5.448014,0,0,5.448014,731.395198,731.396288)">
              <path d="M0,0L0,-98.612L-98.612,-98.612L-98.612,98.607L0,0Z" />
            </g>
          </svg>
          <span className="font-sans text-base font-medium tracking-tight">
            Lumense<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((l) => {
            const id = l.href.slice(1)
            const isActive = active === id
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "group relative flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "transition-colors",
                    isActive ? "text-accent" : "text-accent/70 group-hover:text-accent",
                  )}
                >
                  {l.index}
                </span>
                <span>{l.label}</span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute bottom-0 left-3 right-3 h-px origin-left bg-accent transition-transform duration-300",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#kontakt"
            className="group inline-flex items-center gap-2 border border-foreground/90 bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:text-accent-foreground"
          >
            Start project
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <details ref={detailsRef} className="group relative md:hidden">
            <summary
              aria-label="Open menu"
              className="flex size-10 cursor-pointer list-none items-center justify-center border border-border text-foreground transition-colors hover:border-foreground"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex flex-col gap-1">
                <span className="h-px w-4 bg-current transition-transform duration-300 group-open:translate-y-[5px] group-open:rotate-45" />
                <span className="h-px w-4 bg-current transition-opacity duration-300 group-open:opacity-0" />
                <span className="h-px w-4 bg-current transition-transform duration-300 group-open:-translate-y-[5px] group-open:-rotate-45" />
              </span>
            </summary>

            <nav
              aria-label="Mobile navigation"
              className="pointer-events-none absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 origin-top-right translate-y-1 scale-95 border border-border bg-background p-2 opacity-0 shadow-2xl transition-all duration-300 group-open:pointer-events-auto group-open:translate-y-0 group-open:scale-100 group-open:opacity-100"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent"
                >
                  <span className="text-accent/80">{l.index}</span>
                  <span>{l.label}</span>
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
