import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  index: string
  label: string
  className?: string
}

export function SectionHeader({ index, label, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-end justify-between gap-4 border-b border-border pb-4",
        className,
      )}
    >
      <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        <span className="text-accent">{index}</span>
        <span className="text-border">—</span>
        <span className="text-foreground">{label}</span>
      </div>
    </div>
  )
}
