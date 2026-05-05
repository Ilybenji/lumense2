
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { CountUp } from "@/components/ui/count-up"
import { GlyphField } from "./glyph-field"

export function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      {/* Animated glyph canvas — sits behind all hero content */}
      <div
        className="absolute inset-0 z-0"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 50%, transparent 95%)",
        }}
      >
        <GlyphField className="opacity-80" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 px-4 pt-16 md:px-8 md:pt-24">
        {/* Headline */}
        <div className="col-span-12">
          <Reveal>
            <h1 className="font-sans text-balance text-[12vw] font-medium leading-[0.88] tracking-[-0.04em] md:text-[8.5vw] lg:text-[6.5vw]">
              Brands<br />
              built to be<br />
              <span>
                seen in the future
                <span
                  aria-hidden
                  className="ml-[0.18em] inline-flex h-[0.7em] w-[0.7em] translate-y-[0.06em] rounded-sm bg-accent align-baseline text-background"
                >
                  <svg viewBox="0 0 2000 2000" className="h-full w-full fill-current" xmlns="http://www.w3.org/2000/svg">
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
                </span>
              </span>
            </h1>
          </Reveal>
        </div>


        {/* Sub block */}
        <Reveal className="col-span-12 mt-12 grid grid-cols-12 gap-4 border-t border-border pt-10 md:mt-20">
          <p className="col-span-12 max-w-2xl text-pretty font-sans text-base leading-relaxed text-foreground/80 md:col-span-6 md:text-lg">
            Lumense is an independent design studio creating brand identity, visual
            communication, and digital content - designed to make an impact, not to fill
            space.
          </p>

          <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end">
            <Link
              href="#kontakt"
              className="group inline-flex items-center gap-3 rounded-lg border border-foreground bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:text-accent-foreground"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#arbeten"
              className="inline-flex items-center gap-3 rounded-lg border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground"
            >
              See selected work
              <ArrowDown className="size-4" />
            </Link>
          </div>
        </Reveal>

        {/* Bottom data strip */}
        <div className="col-span-12 mt-12 grid grid-cols-2 gap-px border-t border-border bg-border md:mt-20 md:grid-cols-4">
          {[
            { k: "COMPLETED PROJECTS", v: 15, suffix: "+" },
            { k: "HAPPY CLIENTS", v: 15, suffix: "+" },
            { k: "YEARS OF EXPERIENCE", v: 3, suffix: "+" },
            { k: "INDUSTRIES", v: 8, suffix: "" },
          ].map((s) => (
            <div key={s.k} className="group bg-background px-4 py-5 transition-colors duration-300 hover:bg-card/50">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.k}
              </div>
              <div className="mt-2 font-sans text-3xl font-medium tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 md:text-4xl">
                <CountUp to={s.v} suffix={s.suffix} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
