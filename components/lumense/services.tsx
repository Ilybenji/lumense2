import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "./section-header"

const services = [
  {
    index: "01",
    title: "Graphic design",
    tagline: "Systems, not one-offs.",
    body:
      "Print, visual systems, and graphic elements that communicate with precision - from editorial to campaign.",
    deliverables: [
      "Visual systems",
      "Editorial & print",
      "Layout & typesetting",
      "Campaign assets",
    ],
  },
  {
    index: "02",
    title: "Brand identity",
    tagline: "From logo to ecosystem.",
    body:
      "We build identities that work across every format - logo, typography, color, tone of voice, and guidelines that are actually used.",
    deliverables: [
      "Strategy & positioning",
      "Logo & wordmark",
      "Typographic systems",
      "Brand guidelines",
    ],
  },
  {
    index: "03",
    title: "Web design",
    tagline: "Designed for decisions.",
    body:
      "Responsive digital experiences focused on interaction, performance, and visual impact - designed and developed in-house.",
    deliverables: [
      "Websites & landing pages",
      "Design systems",
      "Interaction design",
      "Frontend development",
    ],
  },
  {
    index: "04",
    title: "Motion content",
    tagline: "Motion with meaning.",
    body:
      "Motion graphics, animation, and video production that capture attention - and keep it.",
    deliverables: [
      "Brand reels",
      "Motion graphics",
      "Loops & assets",
      "Social formats",
    ],
  },
]

export function Services() {
  return (
    <section id="tjanster" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeader index="02" label="SERVICES" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-8">
          <Reveal className="col-span-12 lg:col-span-9">
            <h2 className="font-sans text-balance text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-6xl lg:text-7xl">
              What we do - <span className="text-muted-foreground">and what we do not do.</span>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 max-w-md self-end text-pretty font-sans text-sm leading-relaxed text-foreground/70 md:text-base lg:col-span-3">
            Four disciplines. No extras, no AI recipes, no templates.
            Every project is shaped around the goal - not around a process PDF.
          </Reveal>
        </div>

        <ul className="mt-12 border-t border-border">
          {services.map((s, index) => (
            <Reveal
              key={s.index}
              delay={index * 70}
              className="group grid grid-cols-12 gap-4 border-b border-border py-8 transition-colors hover:bg-card/40 md:py-10"
            >
              <div className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent md:col-span-1">
                {s.index}
              </div>

              <div className="col-span-10 md:col-span-5">
                <h3 className="font-sans text-3xl font-medium leading-none tracking-tight md:text-5xl">
                  {s.title}
                </h3>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  {s.tagline}
                </p>
              </div>

              <div className="col-span-12 md:col-span-4">
                <p className="text-pretty font-sans text-sm leading-relaxed text-foreground/75 md:text-base">
                  {s.body}
                </p>
              </div>

              <div className="col-span-12 md:col-span-2">
                <ul className="space-y-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2">
                      <span aria-hidden className="size-1 bg-accent" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
