import { motion } from 'framer-motion'
import { fadeUp, vp } from '../../lib/motion'
import './LegalPage.css'

const terms = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using the Hooqx website and services, you agree to these Terms and Conditions. If you do not agree, please do not use our website or engage our services.',
  },
  {
    title: 'Services',
    body: 'Hooqx provides digital services including web development, app development, software development, UI/UX and graphic design, SEO, and digital marketing. Service scope, timelines, and deliverables are finalized through individual proposals or agreements.',
  },
  {
    title: 'Client Responsibilities',
    body: 'Clients are responsible for providing accurate information, timely feedback, required access credentials, and approvals needed to execute projects. Delays in client responses may impact timelines and delivery schedules.',
  },
  {
    title: 'Payments and Commercial Terms',
    body: 'Fees, milestones, and payment schedules are defined in project-specific agreements. Unless otherwise stated, invoices are payable by the agreed due date. Late payments may result in project pause, delayed delivery, or additional charges as allowed by law.',
  },
  {
    title: 'Intellectual Property',
    body: 'Upon full payment and unless otherwise agreed in writing, final approved deliverables are assigned or licensed to the client per the contract terms. Hooqx retains ownership of pre-existing tools, frameworks, methodologies, and reusable components.',
  },
  {
    title: 'Confidentiality',
    body: 'Both parties agree to protect confidential information shared during a project and not disclose it to unauthorized parties, except as required for project execution or by law.',
  },
  {
    title: 'Warranties and Liability',
    body: 'Services are provided in good faith and with professional care. Except where legally required, Hooqx provides services on an as-available basis and is not liable for indirect, incidental, or consequential losses, including loss of revenue or data.',
  },
  {
    title: 'Third-Party Platforms and Tools',
    body: 'Projects may depend on third-party platforms, APIs, hosting providers, plugins, or advertising tools. Hooqx is not responsible for outages, policy changes, or pricing updates imposed by these third parties.',
  },
  {
    title: 'Termination',
    body: 'Either party may terminate an engagement according to the governing agreement. On termination, completed work and outstanding payments remain due as specified in the contract.',
  },
  {
    title: 'Governing Law and Updates',
    body: 'These terms are governed by the applicable law defined in the project agreement. We may revise these terms periodically, and updated terms become effective when published on this page.',
  },
]

export default function TermsConditionsPage() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <motion.div className="legal-hero__inner" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp}>
          <p className="legal-kicker">Legal</p>
          <h1>Terms and Conditions</h1>
          <p className="legal-subtitle">
            Effective date: April 25, 2026. These terms govern the use of our website and engagement with Hooqx services.
          </p>
        </motion.div>
      </section>

      <section className="legal-content">
        <div className="legal-card">
          <p className="legal-intro">
            Please read these Terms and Conditions carefully before using our website or requesting project services.
          </p>

          {terms.map((term, index) => (
            <motion.article
              key={term.title}
              className="legal-section"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={vp}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2>{term.title}</h2>
              <p>{term.body}</p>
            </motion.article>
          ))}

          <motion.article className="legal-section" variants={fadeUp} initial="hidden" whileInView="show" viewport={vp} transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to info@hooqx.com. Offices: USA, UAE, India.
            </p>
          </motion.article>
        </div>
      </section>
    </main>
  )
}
