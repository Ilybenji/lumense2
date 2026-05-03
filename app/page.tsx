import { Nav } from "@/components/lumense/nav"
import { Hero } from "@/components/lumense/hero"
import { Ticker } from "@/components/lumense/ticker"
import { Manifest } from "@/components/lumense/manifest"
import { Services } from "@/components/lumense/services"
import { Portfolio } from "@/components/lumense/portfolio"
import { Process } from "@/components/lumense/process"
import { Testimonials } from "@/components/lumense/testimonials"
import { Contact } from "@/components/lumense/contact"
import { Footer } from "@/components/lumense/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Ticker />
      <Manifest />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
