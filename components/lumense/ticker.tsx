const items = [
  "GRAFISK DESIGN",
  "VARUMÄRKESIDENTITET",
  "WEBBDESIGN",
  "RÖRLIGT INNEHÅLL",
]

export function Ticker() {
  const loop = [...items, ...items, ...items]
  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-border bg-foreground text-background"
    >
      <div className="flex whitespace-nowrap py-4 ticker will-change-transform">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 flex items-center gap-8 font-sans text-2xl font-medium tracking-tight md:text-3xl"
          >
            {item}
            <span aria-hidden className="size-2 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </section>
  )
}
