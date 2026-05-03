import { SectionHeader } from "./section-header"
import { Reveal } from "@/components/ui/reveal"

const principles = [
  {
    code: "P.01",
    title: "Strategi före estetik",
    body:
      "Vi börjar med positionering. Vacker design utan riktning är dekoration — och dekoration åldras snabbt.",
  },
  {
    code: "P.02",
    title: "Identitet som håller",
    body:
      "Logotyp, typografi och grafiska system byggs som infrastruktur — för att skala, inte för att räddas i nästa rebrand.",
  },
  {
    code: "P.03",
    title: "Digital med syfte",
    body:
      "Webb och interaktion är inte mockups. Vi designar för prestanda, tillgänglighet och beslutsfattande — inte awards.",
  },
  {
    code: "P.04",
    title: "Rörelse med mening",
    body:
      "Animation används där den höjer förståelse eller känsla. Aldrig som filler. Aldrig som bevis på att något hänt.",
  },
]

export function Manifest() {
  return (
    <section id="manifest" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeader index="01" label="MANIFEST" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <h2 className="font-sans text-balance text-3xl font-medium leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl">
                Design är inte
                <span className="text-muted-foreground"> bara estetik</span> —
                det är hur ett varumärke
                <span className="text-accent"> bygger förtroende</span>,
                skapar igenkänning och får en röst som hörs.
              </h2>

              <p className="mt-8 max-w-xl text-pretty font-sans text-base leading-relaxed text-foreground/75 md:text-lg">
                Lumense arbetar med grundare, kreatörer och företag som vill byta ut det
                generiska mot något specifikt. Vi gör färre projekt, men gör dem hela vägen
                — från positionering till sista pixel i produktion.
              </p>
            </Reveal>
          </div>

          <aside className="col-span-12 lg:col-span-5">
            <Reveal delay={80}>
              <dl className="grid grid-cols-2 gap-px border border-border bg-border">
                {[
                  { k: "BASERAT", v: "Stockholm, SE" },
                  { k: "GRUNDAT", v: "2022" },
                  { k: "TEAM", v: "Independent" },
                  { k: "DISCIPLIN", v: "Brand · Digital" },
                  { k: "SPRÅK", v: "SV / EN" },
                  { k: "STATUS", v: "Q3 / Q4 2026" },
                ].map((row) => (
                  <div key={row.k} className="bg-card px-4 py-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {row.k}
                    </dt>
                    <dd className="mt-1.5 font-sans text-base text-foreground">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>
        </div>

        {/* Principles */}
        <div className="mt-16 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2">
          {principles.map((p, index) => (
            <Reveal key={p.code} delay={index * 80} className="group bg-background p-6 transition-colors hover:bg-card md:p-8">
              <article>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  {p.code}
                </div>
                <h3 className="mt-6 font-sans text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-pretty font-sans text-sm leading-relaxed text-foreground/70 md:text-base">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
