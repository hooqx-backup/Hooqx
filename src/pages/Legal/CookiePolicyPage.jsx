import { motion } from 'framer-motion'
import { fadeUp, vp } from '../../lib/motion'
import './LegalPage.css'

const heroStagger = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 26, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const sectionStagger = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
}

const quickHighlights = [
  { label: 'Cookie Types', value: 'Essential, Analytics, Preference' },
  { label: 'User Control', value: 'Managed via Browser Settings' },
  { label: 'Third-Party Use', value: 'Only Trusted Service Providers' },
]

const cookieCategories = [
  'Essential Cookies',
  'Analytics Cookies',
  'Preference Cookies',
  'Session Cookies',
  'Security Cookies',
  'Performance Cookies',
]

const cookieSections = [
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies',
    body: 'Cookies are small text files stored on your device when you visit a website. They help websites remember user actions, preferences, and technical settings for a better browsing experience.',
  },
  {
    id: 'how-hooqx-uses-cookies',
    title: 'How Hooqx Uses Cookies',
    body: 'We use cookies to keep the website functional, understand traffic and engagement patterns, improve performance, and provide relevant content. Cookies may also support basic security and session behavior.',
  },
  {
    id: 'types-of-cookies-we-use',
    title: 'Types of Cookies We Use',
    body: 'Essential cookies are required for core website operation. Analytics cookies help us evaluate visitor behavior and improve user experience. Preference cookies remember settings such as language and user interface choices.',
  },
  {
    id: 'third-party-cookies',
    title: 'Third-Party Cookies',
    body: 'Some cookies may be set by trusted third-party services such as analytics, embedded media, or social platforms linked from our website. These providers control their own cookie behavior and privacy practices.',
  },
  {
    id: 'managing-cookie-preferences',
    title: 'Managing Cookie Preferences',
    body: 'You can manage or delete cookies through your browser settings. Most browsers allow you to block cookies, clear existing cookies, and control site-specific permissions. Blocking some cookies may impact website functionality.',
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    body: 'We may update this Cookie Policy periodically to reflect legal, technical, or operational changes. The latest version is always published on this page with an updated effective date.',
  },
]

export default function CookiePolicyPage() {
  return (
    <main className="legal-page legal-page--cookie">
      <div className="legal-ambient legal-ambient--one" aria-hidden="true" />
      <div className="legal-ambient legal-ambient--two" aria-hidden="true" />

      <section className="legal-hero">
        <motion.div
          className="legal-hero__inner"
          variants={heroStagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.p className="legal-kicker" variants={heroItem}>Legal</motion.p>
          <motion.h1 variants={heroItem}>Cookie Policy</motion.h1>
          <motion.p className="legal-subtitle" variants={heroItem}>
            Effective date: April 25, 2026. This policy explains how Hooqx uses cookies and similar technologies.
          </motion.p>
        </motion.div>
      </section>

      <section className="legal-content">
        <motion.div
          className="legal-card legal-card--cookie"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.p className="legal-intro" variants={fadeUp}>
            This Cookie Policy applies to users of the Hooqx website and should be read together with our Privacy Policy.
          </motion.p>

          <motion.div className="legal-quick-grid" variants={fadeUp}>
            {quickHighlights.map((item) => (
              <motion.div
                key={item.label}
                className="legal-quick-card"
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.995 }}
              >
                <p className="legal-quick-card__label">{item.label}</p>
                <p className="legal-quick-card__value">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.nav className="legal-toc" variants={fadeUp} aria-label="Cookie policy quick navigation">
            <p className="legal-toc__title">Quick Navigation</p>
            <div className="legal-toc__links">
              {cookieSections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  {String(index + 1).padStart(2, '0')} {section.title}
                </a>
              ))}
              <a href="#cookie-contact">07 Contact</a>
            </div>
          </motion.nav>

          <motion.div className="legal-data-block" variants={fadeUp}>
            <h3>Cookie Categories At A Glance</h3>
            <div className="legal-data-chips">
              {cookieCategories.map((item) => (
                <span key={item} className="legal-data-chip">{item}</span>
              ))}
            </div>
          </motion.div>

          {cookieSections.map((section, index) => (
            <motion.article
              key={section.title}
              id={section.id}
              className="legal-section legal-section--interactive"
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.998 }}
            >
              <span className="legal-section__index">{String(index + 1).padStart(2, '0')}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </motion.article>
          ))}

          <motion.article
            id="cookie-contact"
            className="legal-section legal-section--interactive legal-section--contact"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.998 }}
          >
            <span className="legal-section__index">07</span>
            <h2>Contact</h2>
            <p>
              If you have questions about this Cookie Policy, contact us at info@hooqx.com.
            </p>

            <div className="legal-contact-actions">
              <a href="mailto:info@hooqx.com" className="legal-btn legal-btn--primary">Email Cookie Support</a>
              <a href="/privacy-policy" className="legal-btn legal-btn--ghost">Read Privacy Policy</a>
            </div>
          </motion.article>
        </motion.div>
      </section>
    </main>
  )
}
