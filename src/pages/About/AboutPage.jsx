import AboutHero from './sections/Hero/Hero'
import Features from './sections/Features/Features'
import Stats from './sections/Stats/Stats'
import MissionVision from './sections/MissionVision/MissionVision'
import Values from './sections/Values/Values'
import Portfolio from './sections/Portfolio/Portfolio'
import Team from './sections/Team/Team'
import Technologies from './sections/Technologies/Technologies'
import CTA from './sections/CTA/CTA'

export default function AboutPage() {
  return (
    <main style={{ background: '#0a0a14' }}>
      <AboutHero />
      <Features />
      <Stats />
      <MissionVision />
      <Values />
      <Portfolio />
      {/* <Team /> */}
      <Technologies />
      <CTA />
    </main>
  )
}
