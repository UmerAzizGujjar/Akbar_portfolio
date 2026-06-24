import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Services } from "@/components/portfolio/services"
import { Skills } from "@/components/portfolio/skills"
import { DefectShowcase } from "@/components/portfolio/defect-showcase"
import { QAMethodology } from "@/components/portfolio/qa-methodology"
import { Experience } from "@/components/portfolio/experience"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { BackToTop } from "@/components/portfolio/back-to-top"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <DefectShowcase />
        <QAMethodology />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
