import { SectionHeader } from "./section-header"
import { Reveal } from "@/components/ui/reveal"

const principles = [
  {
    code: "P.01",
    title: "Strategy before aesthetics",
    body:
      "We start with positioning. Beautiful design without direction is decoration - and decoration ages quickly.",
  },
  {
    code: "P.02",
    title: "Identity that lasts",
    body:
      "Logos, typography, and graphic systems are built as infrastructure - to scale, not to be rescued in the next rebrand.",
  },
  {
    code: "P.03",
    title: "Digital with purpose",
    body:
      "Web and interaction are not mockups. We design for performance, accessibility, and decision-making - not awards.",
  },
  {
    code: "P.04",
    title: "Motion with intent",
    body:
      "Animation is used where it improves understanding or emotion. Never as filler. Never as proof that something happened.",
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
                Design is not
                <span className="text-muted-foreground"> just aesthetics</span> -
                it is how a brand
                <span className="text-accent"> builds trust</span>,
                creates recognition, and develops a voice that gets heard.
              </h2>

              <p className="mt-8 max-w-xl text-pretty font-sans text-base leading-relaxed text-foreground/75 md:text-lg">
                Lumense works with founders, creators, and companies that want to replace
                generic with specific. We do fewer projects, but we take them all the way -
                from positioning to the final pixel in production.
              </p>
            </Reveal>
          </div>

          <aside className="col-span-12 lg:col-span-5">
            <Reveal delay={80}>
              <dl className="grid grid-cols-2 gap-px border border-border bg-border">
                {[
                  { k: "BASED", v: "Stockholm, SE" },
                  { k: "FOUNDED", v: "2022" },
                  { k: "TEAM", v: "Independent" },
                  { k: "DISCIPLINE", v: "Brand · Digital" },
                  { k: "LANGUAGE", v: "EN / SV" },
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
            <Reveal key={p.code} delay={index * 80} className="group relative bg-background p-6 transition-colors hover:bg-card md:p-8">
              <span aria-hidden className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-accent transition-transform duration-400 group-hover:scale-y-100" />
              <article>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  {p.code}
                </div>
                <h3 className="mt-6 font-sans text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 hidden max-w-md text-pretty font-sans text-sm leading-relaxed text-foreground/70 md:block md:text-base">
                  {p.body}
                </p>
                <details className="mt-4 md:hidden">
                  <summary className="cursor-pointer list-none font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">
                    Read more <span className="text-accent">▸</span>
                  </summary>
                  <p className="mt-3 max-w-md text-pretty font-sans text-sm leading-relaxed text-foreground/70">
                    {p.body}
                  </p>
                </details>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
