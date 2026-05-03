import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function Hero() {
  return (
    <section className="relative border-b border-border">
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 px-4 pt-16 md:px-8 md:pt-24">
        {/* Headline */}
        <div className="col-span-12 lg:col-span-9">
          <Reveal>
            <h1 className="font-sans text-balance text-[14vw] font-medium leading-[0.88] tracking-[-0.04em] md:text-[10vw] lg:text-[8.5vw]">
              Varumärken<br />
              som syns<br />
              <span className="inline-flex items-center gap-2">
                i framtiden
                <span aria-hidden className="inline-flex h-[0.7em] w-[0.7em] rounded-sm bg-accent text-background">
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

        {/* Right column — image only */}
        <aside className="col-span-12 mt-10 flex flex-col justify-end lg:col-span-3 lg:mt-16">
          <Reveal>
            <div className="aspect-square w-full max-w-xs overflow-hidden border border-border lg:max-w-none transition-transform duration-700 ease-out hover:scale-[1.01]">
              <Image
                src="/hero/object.jpg"
                alt="Sculptural studio object — Lumense brand mark"
                width={800}
                height={800}
                className="h-full w-full object-cover grayscale-[0.15] transition-transform duration-700 ease-out"
                priority
              />
            </div>
          </Reveal>
        </aside>

        {/* Sub block */}
        <Reveal className="col-span-12 mt-12 grid grid-cols-12 gap-4 border-t border-border pt-10 md:mt-20">
          <p className="col-span-12 max-w-2xl text-pretty font-sans text-base leading-relaxed text-foreground/80 md:col-span-6 md:text-lg">
            Lumense är en oberoende designstudio som bygger varumärkesidentitet, visuell
            kommunikation och digitalt innehåll — designat för att göra intryck, inte fylla
            ut utrymme.
          </p>

          <div className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end">
            <Link
              href="#kontakt"
              className="group inline-flex items-center gap-3 rounded-lg border border-foreground bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:text-accent-foreground"
            >
              Starta ett projekt
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="#arbeten"
              className="inline-flex items-center gap-3 rounded-lg border border-border px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground"
            >
              Se utvalda arbeten
              <ArrowDown className="size-4" />
            </Link>
          </div>
        </Reveal>

        {/* Bottom data strip */}
        <div className="col-span-12 mt-12 grid grid-cols-2 gap-px border-t border-border bg-border md:mt-20 md:grid-cols-4">
          {[
            { k: "GENOMFÖRDA PROJEKT", v: "15+" },
            { k: "NÖJDA KUNDER", v: "15+" },
            { k: "ÅRS ERFARENHET", v: "03+" },
            { k: "INDUSTRIER", v: "08" },
          ].map((s) => (
            <div key={s.k} className="bg-background px-4 py-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.k}
              </div>
              <div className="mt-2 font-sans text-3xl font-medium tracking-tight md:text-4xl">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
