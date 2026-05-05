import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader } from "./section-header"

export function Contact() {
  return (
    <section id="kontakt" className="relative border-b border-border">
      <div className="relative mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24">
        <SectionHeader index="06" label="CONTACT" />

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-12">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-sans text-balance text-5xl font-medium leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-[8.5vw]">
              Have a <span className="text-accent">project?</span>
              <br />
              Let's hear it.
            </h2>

            <p className="mt-8 max-w-xl text-pretty font-sans text-base leading-relaxed text-foreground/75 md:text-lg">
              We take on a limited number of projects each quarter and reply within
              one day. Share what you want to build and where you want to go - we will get back to you.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="mailto:hello@lumense.xyz"
                className="group inline-flex items-center gap-3 border border-foreground bg-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:border-accent hover:text-accent-foreground hover:shadow-[0_0_24px_rgba(255,77,28,0.22)]"
              >
                hello@lumense.xyz
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="https://t.me/lumense"
                className="group inline-flex items-center gap-3 border border-border px-6 py-4 font-mono text-xs uppercase tracking-[0.22em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-card/50"
              >
                Telegram -&gt; @lumense
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          <aside className="col-span-12 lg:col-span-4">
            <div className="border border-border bg-card/40">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>intake.session</span>
                <span className="flex items-center gap-1.5 text-accent">
                  <span className="size-1 bg-accent blink" /> ACCEPTING
                </span>
              </div>
              <dl className="divide-y divide-border">
                {[
                  { k: "TYPICAL BUDGET", v: "20K - 250K SEK" },
                  { k: "PROJECT LENGTH", v: "2 - 12 weeks" },
                  { k: "RESPONSE TIME", v: "Within 24 hours" },
                  { k: "COLLABORATION MODEL", v: "Sprint · Retainer" },
                  { k: "LANGUAGE", v: "Swedish / English" },
                ].map((r) => (
                  <div key={r.k} className="flex items-center justify-between gap-4 px-4 py-3.5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {r.k}
                    </dt>
                    <dd className="font-sans text-sm text-foreground">{r.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
