import Hero from './sections/Hero/Hero'
import OurServices from './sections/OurServices/OurServices'
import VideoSection from './sections/VideoSection/VideoSection'
import Services from './sections/Services/Services'
import About from './sections/About/About'
import WhyUs from './sections/WhyUs/WhyUs'
import TechMarquee from './sections/TechMarquee/TechMarquee'
import Workflow from './sections/Workflow/Workflow'
import Testimonials from './sections/Testimonials/Testimonials'
import ContactSection from './sections/ContactSection/ContactSection'
import PartnersStrip from './sections/PartnersStrip/PartnersStrip'
import CustomerVideos from './sections/CustomerVideos/CustomerVideos'
import Blog from './sections/Blog/Blog'
import Newsletter from './sections/Newsletter/Newsletter'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OurServices />
      <div className="container">
        <VideoSection />
        <About />
        <Services />
        <WhyUs />
        <Workflow />
      </div>

      {/* Full-bleed sections — outside container */}
      <TechMarquee />
      <Testimonials />
      <ContactSection />
      <PartnersStrip />

      <div className="container">
        <CustomerVideos />
        <Newsletter />
      </div>
    </main>
  )
}
