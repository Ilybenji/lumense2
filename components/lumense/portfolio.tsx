"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeader } from "./section-header"

type Project = {
  id: string
  index: string
  client: string
  title: string
  type: string
  year: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: "safer",
    index: "001",
    client: "Safer",
    title: "Brand identity & e-commerce",
    type: "Identity · Web",
    year: "2025",
    image: "https://i.ibb.co/jcDsHQ1/safermockup.png",
    tags: ["Identity", "Packaging", "Web"],
  },
  {
    id: "solaris",
    index: "002",
    client: "Solaris",
    title: "Editorial system & launch site",
    type: "Web · Editorial",
    year: "2024",
    image: "/work/solaris.jpg",
    tags: ["Web", "Editorial"],
  },
  {
    id: "aura",
    index: "003",
    client: "Aura Studio",
    title: "Print system & brand book",
    type: "Identity · Print",
    year: "2025",
    image: "/work/aura.jpg",
    tags: ["Identity", "Print"],
  },
  {
    id: "nordvik",
    index: "004",
    client: "Nordvik",
    title: "Architectural brand identity",
    type: "Identity · Signage",
    year: "2024",
    image: "/work/nordvik.jpg",
    tags: ["Identity", "Signage"],
  },
]

export function Portfolio() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="arbeten" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeader index="03" label="UTVALDA ARBETEN" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-6">
          <Reveal className="col-span-12 lg:col-span-8">
            <h2 className="font-sans text-balance text-4xl font-medium leading-[1.02] tracking-[-0.02em] md:text-6xl lg:text-7xl">
              Långsiktiga relationer.
              <br />
              <span className="text-muted-foreground">Få utvalda projekt.</span>
            </h2>
          </Reveal>
          <Reveal className="col-span-12 max-w-sm self-end text-pretty font-sans text-sm leading-relaxed text-foreground/70 md:text-base lg:col-span-4">
            Ett urval av nyligen avslutade projekt. Fullständigt case-arkiv lämnas på
            förfrågan — ofta inkluderar det arbete under NDA.
          </Reveal>
        </div>

        {/* Featured grid */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 90}
              className={
                "group relative block bg-background " +
                (i === 0
                  ? "md:col-span-7"
                  : i === 1
                    ? "md:col-span-5"
                    : i === 2
                      ? "md:col-span-5"
                      : "md:col-span-7")
              }
            >
              <Link
                href="#kontakt"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(p.id)}
                onBlur={() => setHovered(null)}
                className="relative block h-full"
              >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={`${p.client} — ${p.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Hover arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                  <span className="grid size-12 place-items-center bg-accent text-accent-foreground">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 px-5 py-5 md:px-6 md:py-6">
                <div>
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span>{p.type}</span>
                    <span className="text-border">|</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-2 font-sans text-2xl font-medium leading-tight tracking-tight md:text-3xl">
                    {p.client}
                    <span className="text-muted-foreground"> — {p.title}</span>
                  </h3>
                </div>
                <span
                  aria-hidden
                  className={
                    "hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] transition-colors md:inline " +
                    (hovered === p.id ? "text-accent" : "text-muted-foreground")
                  }
                >
                  VIEW →
                </span>
              </div>
            </Link>
          </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
