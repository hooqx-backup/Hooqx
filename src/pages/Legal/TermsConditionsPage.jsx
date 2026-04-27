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
  { label: 'Agreement Status', value: 'Applicable on Service Use' },
  { label: 'Commercial Model', value: 'Defined Per Proposal/Contract' },
  { label: 'Global Presence', value: 'USA, UAE, India' },
]

const termsCategories = [
  'Service Scope',
  'Timeline Commitments',
  'Payment Milestones',
  'IP Ownership',
  'Confidential Data',
  'Termination Clauses',
]

const terms = [
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    body: 'By accessing or using the Hooqx website and services, you agree to these Terms and Conditions. If you do not agree, please do not use our website or engage our services.',
  },
  {
    id: 'services',
    title: 'Services',
    body: 'Hooqx provides digital services including web development, app development, software development, UI/UX and graphic design, SEO, and digital marketing. Service scope, timelines, and deliverables are finalized through individual proposals or agreements.',
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    body: 'Clients are responsible for providing accurate information, timely feedback, required access credentials, and approvals needed to execute projects. Delays in client responses may impact timelines and delivery schedules.',
  },
  {
    id: 'payments-and-commercial-terms',
    title: 'Payments and Commercial Terms',
    body: 'Fees, milestones, and payment schedules are defined in project-specific agreements. Unless otherwise stated, invoices are payable by the agreed due date. Late payments may result in project pause, delayed delivery, or additional charges as allowed by law.',
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: 'Upon full payment and unless otherwise agreed in writing, final approved deliverables are assigned or licensed to the client per the contract terms. Hooqx retains ownership of pre-existing tools, frameworks, methodologies, and reusable components.',
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    body: 'Both parties agree to protect confidential information shared during a project and not disclose it to unauthorized parties, except as required for project execution or by law.',
  },
  {
    id: 'warranties-and-liability',
    title: 'Warranties and Liability',
    body: 'Services are provided in good faith and with professional care. Except where legally required, Hooqx provides services on an as-available basis and is not liable for indirect, incidental, or consequential losses, including loss of revenue or data.',
  },
  {
    id: 'third-party-platforms-and-tools',
    title: 'Third-Party Platforms and Tools',
    body: 'Projects may depend on third-party platforms, APIs, hosting providers, plugins, or advertising tools. Hooqx is not responsible for outages, policy changes, or pricing updates imposed by these third parties.',
  },
  {
    id: 'termination',
    title: 'Termination',
    body: 'Either party may terminate an engagement according to the governing agreement. On termination, completed work and outstanding payments remain due as specified in the contract.',
  },
  {
    id: 'governing-law-and-updates',
    title: 'Governing Law and Updates',
    body: 'These terms are governed by the applicable law defined in the project agreement. We may revise these terms periodically, and updated terms become effective when published on this page.',
  },
]

export default function TermsConditionsPage() {
  return (
    <main className="legal-page legal-page--terms">
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
          <motion.h1 variants={heroItem}>Terms and Conditions</motion.h1>
          <motion.p className="legal-subtitle" variants={heroItem}>
            Effective date: April 25, 2026. These terms govern the use of our website and engagement with Hooqx services.
          </motion.p>
        </motion.div>
      </section>

      <section className="legal-content">
        <motion.div
          className="legal-card legal-card--terms"
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.p className="legal-intro" variants={fadeUp}>
            Please read these Terms and Conditions carefully before using our website or requesting project services.
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

          <motion.nav className="legal-toc" variants={fadeUp} aria-label="Terms quick navigation">
            <p className="legal-toc__title">Quick Navigation</p>
            <div className="legal-toc__links">
              {terms.map((term, index) => (
                <a key={term.id} href={`#${term.id}`}>
                  {String(index + 1).padStart(2, '0')} {term.title}
                </a>
              ))}
              <a href="#terms-contact">11 Contact</a>
            </div>
          </motion.nav>

          <motion.div className="legal-data-block" variants={fadeUp}>
            <h3>Terms Coverage Snapshot</h3>
            <div className="legal-data-chips">
              {termsCategories.map((item) => (
                <span key={item} className="legal-data-chip">{item}</span>
              ))}
            </div>
          </motion.div>

          {terms.map((term, index) => (
            <motion.article
              key={term.title}
              id={term.id}
              className="legal-section legal-section--interactive"
              variants={fadeUp}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              whileTap={{ scale: 0.998 }}
            >
              <span className="legal-section__index">{String(index + 1).padStart(2, '0')}</span>
              <h2>{term.title}</h2>
              <p>{term.body}</p>
            </motion.article>
          ))}

          <motion.article
            id="terms-contact"
            className="legal-section legal-section--interactive legal-section--contact"
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.998 }}
          >
            <span className="legal-section__index">11</span>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to info@hooqx.com. Offices: USA, UAE, India.
            </p>

            <div className="legal-contact-actions">
              <a href="mailto:info@hooqx.com" className="legal-btn legal-btn--primary">Contact Legal Team</a>
              <a href="/privacy-policy" className="legal-btn legal-btn--ghost">Read Privacy Policy</a>
            </div>
          </motion.article>
        </motion.div>
      </section>
    </main>
  )
}
