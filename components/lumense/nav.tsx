import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const links = [
  { label: "Manifest", href: "#manifest", index: "01" },
  { label: "Services", href: "#tjanster", index: "02" },
  { label: "Work", href: "#arbeten", index: "03" },
  { label: "Process", href: "#process", index: "04" },
  { label: "Contact", href: "#kontakt", index: "05" },
]

export function Nav() {
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
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-accent/70 group-hover:text-accent">{l.index}</span>
              <span>{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#kontakt"
            className="group inline-flex items-center gap-2 border border-foreground/90 bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:text-accent-foreground"
          >
            Start project
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <details className="relative md:hidden">
            <summary
              aria-label="Open menu"
              className="flex size-10 cursor-pointer list-none items-center justify-center border border-border text-foreground transition-colors hover:border-foreground"
            >
              <span className="sr-only">Menu</span>
              <span aria-hidden className="flex flex-col gap-1">
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
                <span className="h-px w-4 bg-current" />
              </span>
            </summary>

            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 border border-border bg-background p-2 shadow-2xl"
            >
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
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
