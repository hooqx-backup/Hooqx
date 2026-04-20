import Hero from './sections/Hero/Hero'
import ServicesStrip from './sections/ServicesStrip/ServicesStrip'
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
      <div className="container">
        <ServicesStrip />
        <VideoSection />
        <About />
        <Services />
        <WhyUs />
        <TechMarquee />
        <Workflow />
      </div>

      {/* Full-bleed sections — outside container */}
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
