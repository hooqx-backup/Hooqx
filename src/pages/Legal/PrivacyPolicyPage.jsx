import { motion } from 'framer-motion'
import { fadeUp, vp } from '../../lib/motion'
import './LegalPage.css'

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you contact Hooqx, subscribe to our newsletter, or request our services, we may collect personal information such as your name, email address, phone number, company details, and project requirements. We may also collect technical information like IP address, browser type, device information, and website usage analytics.',
  },
  {
    title: 'How We Use Information',
    body: 'We use your information to respond to inquiries, provide web, app, design, and marketing services, improve our website experience, share relevant updates, and maintain service quality. We do not sell your personal data to third parties.',
  },
  {
    title: 'Cookies and Tracking',
    body: 'Our website may use cookies and similar technologies to remember preferences, understand user behavior, and improve performance. You can control cookies through your browser settings, but disabling cookies may affect website functionality.',
  },
  {
    title: 'Data Sharing',
    body: 'We may share limited data with trusted partners, service providers, and platforms that help us operate our business, including analytics, communication, and hosting services. These providers are expected to protect your information and use it only for authorized purposes.',
  },
  {
    title: 'Data Security and Retention',
    body: 'We maintain reasonable administrative, technical, and organizational safeguards to protect personal information. Data is retained only as long as required to provide services, fulfill legal obligations, resolve disputes, and enforce agreements.',
  },
  {
    title: 'Your Rights',
    body: 'Depending on your location, you may have rights to request access, correction, deletion, or restriction of your personal information. You may also object to certain processing activities. To exercise these rights, contact us using the details below.',
  },
  {
    title: 'Third-Party Links',
    body: 'Our site may include links to third-party websites, including social platforms. We are not responsible for their content, privacy notices, or practices. Please review their policies before providing information.',
  },
  {
    title: 'Policy Updates',
    body: 'We may update this Privacy Policy from time to time. Any changes become effective when posted on this page. Continued use of our website after updates indicates acceptance of the revised policy.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <motion.div className="legal-hero__inner" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="legal-kicker">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="legal-subtitle">
            Effective date: April 25, 2026. This policy explains how Hooqx collects, uses, and protects your information.
          </p>
        </motion.div>
      </section>

      <section className="legal-content">
        <div className="legal-card">
          <p className="legal-intro">
            Hooqx is committed to transparency and responsible data handling. This policy applies to interactions through
            our website, communication channels, and service engagement process.
          </p>

          {sections.map((section, index) => (
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
            <h2>Contact Us</h2>
            <p>
              For privacy-related questions or requests, contact us at info@hooqx.com. Offices: USA, UAE, India.
            </p>
          </motion.article>
        </div>
      </section>
    </main>
  )
}
