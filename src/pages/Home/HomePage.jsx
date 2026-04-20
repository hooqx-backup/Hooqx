import Hero from './sections/Hero/Hero'
import ServicesStrip from './sections/ServicesStrip/ServicesStrip'
import VideoSection from './sections/VideoSection/VideoSection'
import Services from './sections/Services/Services'
import About from './sections/About/About'
import WhyUs from './sections/WhyUs/WhyUs'
import Workflow from './sections/Workflow/Workflow'
import Portfolio from './sections/Portfolio/Portfolio'
import Testimonials from './sections/Testimonials/Testimonials'
import Blog from './sections/Blog/Blog'
import Newsletter from './sections/Newsletter/Newsletter'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <div className="container">
      <ServicesStrip />
      <VideoSection />
        <About />
        <Services />
        <WhyUs />
        <Workflow />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Newsletter />
      </div>
    </main>
  )
}
