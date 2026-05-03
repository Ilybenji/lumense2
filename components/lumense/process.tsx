import { SectionHeader } from "./section-header"

const steps = [
  {
    index: "01",
    phase: "DISCOVERY",
    title: "Lyssna & kartlägg",
    body:
      "Vi börjar med er — affär, marknad, mål. Workshop, intervjuer och konkurrentanalys ger oss råmaterialet för riktning.",
    output: "Brief · Insiktsdokument · Riktning",
  },
  {
    index: "02",
    phase: "STRATEGY",
    title: "Positionera & forma",
    body:
      "Strategi som översätts till design — varumärkesplattform, tonalitet och de visuella territorier vi ska utforska.",
    output: "Plattform · Moodboards · Territorier",
  },
  {
    index: "03",
    phase: "DESIGN",
    title: "Forma & förfina",
    body:
      "Designarbetet sker iterativt. Vi visar mindre, men oftare — och rör oss snabbt mellan koncept och färdig produktion.",
    output: "Identitet · System · Produktion",
  },
  {
    index: "04",
    phase: "LAUNCH & CARE",
    title: "Lansera & förvalta",
    body:
      "Vi följer med från första touchpoint till lansering — och stannar kvar för det som kommer efter. Designen lever vidare.",
    output: "Rollout · Riktlinjer · Support",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeader index="04" label="PROCESS" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-8">
          <h2 className="col-span-12 font-sans text-balance text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-6xl lg:col-span-8 lg:text-7xl">
            Hur vi arbetar — <span className="text-muted-foreground">utan att förenkla det.</span>
          </h2>
          <p className="col-span-12 max-w-sm self-end text-pretty font-sans text-sm leading-relaxed text-foreground/70 md:text-base lg:col-span-4">
            En transparent process där ni alltid vet var vi är, vart vi är på väg och
            vad nästa steg innebär. Inga svarta lådor.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li key={step.index} className="relative bg-background p-6 md:p-8">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="text-accent">{step.index}</span>
                <span>{step.phase}</span>
              </div>

              <h3 className="mt-8 font-sans text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 text-pretty font-sans text-sm leading-relaxed text-foreground/70">
                {step.body}
              </p>

              <div className="mt-8 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="text-foreground/80">Leverans → </span>
                {step.output}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
