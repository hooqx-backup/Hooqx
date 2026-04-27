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
  { label: 'Response Window', value: 'Within 5 Business Days' },
  { label: 'Data Sale', value: 'Never Sold to Third Parties' },
  { label: 'Operating Regions', value: 'USA, UAE, India' },
]

const dataCategories = [
  'Contact Details',
  'Project Requirements',
  'Communication History',
  'Device & Browser Data',
  'Analytics Signals',
  'Cookie Preferences',
]

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: 'When you contact Hooqx, subscribe to our newsletter, or request our services, we may collect personal information such as your name, email address, phone number, company details, and project requirements. We may also collect technical information like IP address, browser type, device information, and website usage analytics.',
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Information',
    body: 'We use your information to respond to inquiries, provide web, app, design, and marketing services, improve our website experience, share relevant updates, and maintain service quality. We do not sell your personal data to third parties.',
  },
  {
    id: 'cookies-and-tracking',
    title: 'Cookies and Tracking',
    body: 'Our website may use cookies and similar technologies to remember preferences, understand user behavior, and improve performance. You can control cookies through your browser settings, but disabling cookies may affect website functionality.',
  },
  {
    id: 'data-sharing',
    title: 'Data Sharing',
    body: 'We may share limited data with trusted partners, service providers, and platforms that help us operate our business, including analytics, communication, and hosting services. These providers are expected to protect your information and use it only for authorized purposes.',
  },
  {
    id: 'data-security-and-retention',
    title: 'Data Security and Retention',
    body: 'We maintain reasonable administrative, technical, and organizational safeguards to protect personal information. Data is retained only as long as required to provide services, fulfill legal obligations, resolve disputes, and enforce agreements.',
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: 'Depending on your location, you may have rights to request access, correction, deletion, or restriction of your personal information. You may also object to certain processing activities. To exercise these rights, contact us using the details below.',
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links',
    body: 'Our site may include links to third-party websites, including social platforms. We are not responsible for their content, privacy notices, or practices. Please review their policies before providing information.',
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    body: 'We may update this Privacy Policy from time to time. Any changes become effective when posted on this page. Continued use of our website after updates indicates acceptance of the revised policy.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page legal-page--privacy">
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
          <motion.h1 variants={heroItem}>Privacy Policy</motion.h1>
          <motion.p className="legal-subtitle" variants={heroItem}>
            Effective date: April 25, 2026. This policy explains how Hooqx collects, uses, and protects your information.
          </motion.p>
        </motion.div>
      </section>

      <section className="legal-content">
        <motion.div
          className="legal-card legal-card--privacy"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.p className="legal-intro" variants={fadeUp}>
            Hooqx is committed to transparency and responsible data handling. This policy applies to interactions through
            our website, communication channels, and service engagement process.
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

          <motion.nav className="legal-toc" variants={fadeUp} aria-label="Privacy policy quick navigation">
            <p className="legal-toc__title">Quick Navigation</p>
            <div className="legal-toc__links">
              {sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`}>
                  {String(index + 1).padStart(2, '0')} {section.title}
                </a>
              ))}
              <a href="#contact-us">09 Contact Us</a>
            </div>
          </motion.nav>

          <motion.div className="legal-data-block" variants={fadeUp}>
            <h3>Data Categories At A Glance</h3>
            <div className="legal-data-chips">
              {dataCategories.map((item) => (
                <span key={item} className="legal-data-chip">{item}</span>
              ))}
            </div>
          </motion.div>

          {sections.map((section, index) => (
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
            id="contact-us"
            className="legal-section legal-section--interactive legal-section--contact"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.998 }}
          >
            <span className="legal-section__index">{String(sections.length + 1).padStart(2, '0')}</span>
            <h2>Contact Us</h2>
            <p>
              For privacy-related questions or requests, contact us at info@hooqx.com. Offices: USA, UAE, India.
            </p>

            <div className="legal-contact-actions">
              <a href="mailto:info@hooqx.com" className="legal-btn legal-btn--primary">Email Privacy Team</a>
              <a href="/cookie-policy" className="legal-btn legal-btn--ghost">Read Cookie Policy</a>
            </div>
          </motion.article>
        </motion.div>
      </section>
    </main>
  )
}
