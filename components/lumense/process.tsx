import { SectionHeader } from "./section-header"

const steps = [
  {
    index: "01",
    phase: "DISCOVERY",
    title: "Listen & map",
    body:
      "We start with you - business, market, goals. Workshops, interviews, and competitor analysis give us the raw material for direction.",
    output: "Brief · Insights document · Direction",
  },
  {
    index: "02",
    phase: "STRATEGY",
    title: "Position & shape",
    body:
      "Strategy translated into design - brand platform, tone of voice, and the visual territories we will explore.",
    output: "Platform · Moodboards · Territories",
  },
  {
    index: "03",
    phase: "DESIGN",
    title: "Craft & refine",
    body:
      "The design work is iterative. We show less, but more often - and move quickly between concept and final production.",
    output: "Identity · System · Production",
  },
  {
    index: "04",
    phase: "LAUNCH & CARE",
    title: "Launch & support",
    body:
      "We stay with you from first touchpoint to launch - and remain for what comes after. The design keeps evolving.",
    output: "Rollout · Guidelines · Support",
  },
]

export function Process() {
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeader index="04" label="PROCESS" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-8">
          <h2 className="col-span-12 font-sans text-balance text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-6xl lg:col-span-8 lg:text-7xl">
            How we work - <span className="text-muted-foreground">without oversimplifying it.</span>
          </h2>
          <p className="col-span-12 max-w-sm self-end text-pretty font-sans text-sm leading-relaxed text-foreground/70 md:text-base lg:col-span-4">
            A transparent process where you always know where we are, where we are
            headed, and what the next step means. No black boxes.
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
                <span className="text-foreground/80">Output -&gt; </span>
                {step.output}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
