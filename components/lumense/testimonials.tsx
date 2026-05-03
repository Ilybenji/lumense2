import { SectionHeader } from "./section-header"

const quotes = [
  {
    body: "Lumense levererade inte bara en fantastisk design — utan en strategi som faktiskt fångade vår vision och som hela teamet kunde stå bakom.",
    name: "John Doe",
    role: "Grundare",
    company: "Nordvik Solutions",
    code: "T.01",
  },
  {
    body: "Samarbetet var en game-changer för vårt varumärke. Den kreativa processen och uppmärksamheten på detaljer resulterade i en identitet som verkligen sticker ut.",
    name: "Jane Doe",
    role: "Creative Director",
    company: "Ether Studio",
    code: "T.02",
  },
  {
    body: "Snabba, ärliga, opretentiösa. De levererade en visuell plattform vi fortfarande använder — fyra rebrands hade varit billigare än att köpa något annat.",
    name: "Mikael Lind",
    role: "CMO",
    company: "Halden Co.",
    code: "T.03",
  },
]

export function Testimonials() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-4 border-b border-background/15 pb-4">
          <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
            <span className="text-accent">05</span>
            <span className="text-background/30">—</span>
            <span className="text-background">OMDÖMEN</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px bg-background/15 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.code} className="bg-foreground p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                {q.code}
              </div>
              <blockquote className="mt-8 text-pretty font-sans text-xl leading-snug tracking-tight md:text-2xl">
                <span className="text-accent">"</span>
                {q.body}
                <span className="text-accent">"</span>
              </blockquote>
              <figcaption className="mt-10 flex items-end justify-between border-t border-background/15 pt-4">
                <div>
                  <div className="font-sans text-base font-medium tracking-tight">{q.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/60">
                    {q.role} · {q.company}
                  </div>
                </div>
                <span className="grid size-9 place-items-center border border-background/30 font-mono text-[10px] uppercase text-background/70">
                  {q.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
