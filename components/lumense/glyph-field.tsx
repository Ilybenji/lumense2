"use client"

import { useEffect, useRef } from "react"

/**
 * GlyphField
 * A canvas-based animated character field. Inspired by the COMPUTE reference's
 * dense glyph backdrop, but tuned to feel like a live perception sensor —
 * concentric pulses radiating outward, occasional scan-lines, with characters
 * pulled from a small set so the noise reads as "data" not "static".
 *
 * Performance: respects prefers-reduced-motion, downsamples on small screens,
 * and uses a single 2D canvas with no per-frame allocations.
 */

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  hex = hex.trim().replace("#", "")
  if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]
  const num = parseInt(hex, 16)
  if (isNaN(num)) return null
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 }
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

export function GlyphField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Glyph palette — sparse, technical
    const glyphs = [".", "·", "+", "•", "/", "—"]

    let dpr = 1
    let cols = 0
    let rows = 0
    const cell = 12 // px per cell at 1x

    function resize() {
      if (!canvas || !ctx) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(rect.width / cell)
      rows = Math.ceil(rect.height / cell)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Read theme colors from CSS — these are hex values
    const styles = getComputedStyle(document.documentElement)
    const fgHex = styles.getPropertyValue("--foreground").trim() || "#ebe4d0"
    const accentHex = styles.getPropertyValue("--accent").trim() || "#ff4d1c"

    const fgRgb = hexToRgb(fgHex) || { r: 235, g: 228, b: 208 }
    const accentRgb = hexToRgb(accentHex) || { r: 255, g: 77, b: 28 }

    function draw(now: number) {
      if (!ctx || !canvas) return
      if (!startRef.current) startRef.current = now
      const t = (now - startRef.current) / 1000

      const w = canvas.width / dpr
      const h = canvas.height / dpr
      ctx.clearRect(0, 0, w, h)

      ctx.font = `11px ${getComputedStyle(document.body).getPropertyValue("--font-mono") || "ui-monospace"}`
      ctx.textBaseline = "middle"
      ctx.textAlign = "center"

      // Two slow-moving radial pulse centers — feels like sensor sweeps.
      const cx1 = w * (0.5 + 0.18 * Math.sin(t * 0.18))
      const cy1 = h * (0.5 + 0.12 * Math.cos(t * 0.22))
      const cx2 = w * (0.5 + 0.26 * Math.cos(t * 0.11 + 1.4))
      const cy2 = h * (0.5 + 0.18 * Math.sin(t * 0.14 + 0.7))

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cell + cell / 2
          const y = r * cell + cell / 2

          const d1 = Math.hypot(x - cx1, y - cy1)
          const d2 = Math.hypot(x - cx2, y - cy2)

          // Two concentric ring fields, summed
          const ring1 = Math.sin(d1 * 0.04 - t * 1.4)
          const ring2 = Math.sin(d2 * 0.05 - t * 0.9 + 1.2)
          const v = (ring1 + ring2) * 0.5 // -1..1

          // Stable per-cell noise so glyphs don't strobe
          const seed = (c * 131 + r * 977) % 997
          const jitter = ((seed % 100) / 100 - 0.5) * 0.4

          const energy = Math.max(0, v + jitter) // 0..~1.4

          // Smooth ramp instead of hard threshold to avoid popping/flicker.
          const strength = smoothstep(0.16, 0.98, energy)
          if (strength < 0.03) continue
          const alpha = Math.min(0.82, strength * 0.82)
          const isAccent = energy > 0.92 && (seed % 5 === 0)

          if (isAccent) {
            ctx.fillStyle = `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, ${alpha})`
          } else {
            ctx.fillStyle = `rgba(${fgRgb.r}, ${fgRgb.g}, ${fgRgb.b}, ${alpha * 0.75})`
          }

          // Keep glyph identity stable per-cell; motion comes from alpha waves.
          const g = glyphs[(seed + r) % glyphs.length]
          ctx.fillText(g, x, y)
        }
      }

      // Continuous scan glow with sinusoidal motion (no hard reset/cut).
      const scanY = h * (0.45 + 0.35 * Math.sin(t * 0.28))
      const grad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60)
      grad.addColorStop(0, "transparent")
      grad.addColorStop(0.5, `rgba(${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}, 0.09)`)
      grad.addColorStop(1, "transparent")
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 60, w, 120)

      if (!reduced) {
        rafRef.current = requestAnimationFrame(draw)
      }
    }

    if (reduced) {
      // Render a single static frame
      draw(0)
    } else {
      rafRef.current = requestAnimationFrame(draw)
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none h-full w-full ${className}`}
    />
  )
}
