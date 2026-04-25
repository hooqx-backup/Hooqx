import { motion } from 'framer-motion'
import { fadeUp, vp } from '../../lib/motion'
import './LegalPage.css'

const cookieSections = [
  {
    title: 'What Are Cookies',
    body: 'Cookies are small text files stored on your device when you visit a website. They help websites remember user actions, preferences, and technical settings for a better browsing experience.',
  },
  {
    title: 'How Hooqx Uses Cookies',
    body: 'We use cookies to keep the website functional, understand traffic and engagement patterns, improve performance, and provide relevant content. Cookies may also support basic security and session behavior.',
  },
  {
    title: 'Types of Cookies We Use',
    body: 'Essential cookies are required for core website operation. Analytics cookies help us evaluate visitor behavior and improve user experience. Preference cookies remember settings such as language and user interface choices.',
  },
  {
    title: 'Third-Party Cookies',
    body: 'Some cookies may be set by trusted third-party services such as analytics, embedded media, or social platforms linked from our website. These providers control their own cookie behavior and privacy practices.',
  },
  {
    title: 'Managing Cookie Preferences',
    body: 'You can manage or delete cookies through your browser settings. Most browsers allow you to block cookies, clear existing cookies, and control site-specific permissions. Blocking some cookies may impact website functionality.',
  },
  {
    title: 'Policy Updates',
    body: 'We may update this Cookie Policy periodically to reflect legal, technical, or operational changes. The latest version is always published on this page with an updated effective date.',
  },
]

export default function CookiePolicyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <motion.div className="legal-hero__inner" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="legal-kicker">Legal</p>
          <h1>Cookie Policy</h1>
          <p className="legal-subtitle">
            Effective date: April 25, 2026. This policy explains how Hooqx uses cookies and similar technologies.
          </p>
        </motion.div>
      </section>

      <section className="legal-content">
        <div className="legal-card">
          <p className="legal-intro">
            This Cookie Policy applies to users of the Hooqx website and should be read together with our Privacy Policy.
          </p>

          {cookieSections.map((section, index) => (
            <motion.article
              key={section.title}
              className="legal-section"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </motion.article>
          ))}

          <motion.article className="legal-section" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <h2>Contact</h2>
            <p>
              If you have questions about this Cookie Policy, contact us at info@hooqx.com.
            </p>
          </motion.article>
        </div>
      </section>
    </main>
  )
}
