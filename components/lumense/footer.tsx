import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background">
      {/* Big wordmark with logo */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-8 md:py-20">
          <div className="flex items-center">
            <div className="opacity-90 w-32 md:w-64">
              <svg viewBox="0 0 2000 2000" className="w-full h-auto fill-foreground" xmlns="http://www.w3.org/2000/svg">
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
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-4 py-12 md:px-8 md:py-16">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-3">
            <svg width="22" height="22" viewBox="0 0 2000 2000" className="fill-foreground" xmlns="http://www.w3.org/2000/svg">
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
            <span className="font-sans text-lg font-medium tracking-tight">Lumense</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              / GRAFISK DESIGNSTUDIO
            </span>
          </div>
          <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-foreground/70">
            Oberoende designstudio baserad i Stockholm. Vi bygger varumärken, identiteter
            och digitala upplevelser för företag som vägrar smälta in.
          </p>
        </div>

        <div className="col-span-6 md:col-span-2">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Studio
          </h4>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            {[
              { l: "Manifest", h: "#manifest" },
              { l: "Tjänster", h: "#tjanster" },
              { l: "Arbeten", h: "#arbeten" },
              { l: "Process", h: "#process" },
            ].map((i) => (
              <li key={i.l}>
                <Link href={i.h} className="text-foreground/80 transition-colors hover:text-accent">
                  {i.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Kontakt
          </h4>
          <ul className="mt-4 space-y-2 font-sans text-sm">
            <li>
              <Link href="mailto:hello@lumense.xyz" className="text-foreground/80 transition-colors hover:text-accent">
                hello@lumense.xyz
              </Link>
            </li>
            <li>
              <Link href="https://t.me/lumense" className="text-foreground/80 transition-colors hover:text-accent">
                Telegram
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/lumense.studio" className="text-foreground/80 transition-colors hover:text-accent">
                Instagram
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3">
          <h4 className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Status
          </h4>
          <div className="mt-4 border border-border p-4">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground">
              <span aria-hidden className="size-1.5 bg-accent blink" />
              TAR EMOT PROJEKT
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Q3 / Q4 2026 — BEGRÄNSAT ANTAL
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:px-8">
          <span>© {new Date().getFullYear()} LUMENSE STUDIO AB · STOCKHOLM</span>
          <span>NO STOCK PHOTOS · NO TEMPLATES · NO AI SLOP</span>
          <span>SITE BUILT IN-HOUSE — V3.2</span>
        </div>
      </div>
    </footer>
  )
}
