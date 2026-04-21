import ContactHero from './sections/Hero/Hero'
import Offices from './sections/Offices/Offices'
import ContactForm from './sections/ContactForm/ContactForm'
import Partners from './sections/Partners/Partners'

export default function ContactPage() {
  return (
    <main style={{ background: '#0a0a14' }}>
      <ContactHero />
      <Offices />
      <ContactForm />
      <Partners />
    </main>
  )
}
