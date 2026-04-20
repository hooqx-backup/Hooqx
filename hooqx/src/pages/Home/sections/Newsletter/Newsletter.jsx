import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { blurUp, fadeUp, stagger, vp } from '../../../../lib/motion'
import './Newsletter.css'

const benefits = [
  { icon: '⚡', text: 'Weekly digital insights' },
  { icon: '🎯', text: 'Exclusive agency tips' },
  { icon: '🔒', text: 'No spam, ever' },
]

export default function Newsletter() {
  const [email, setEmail]   = useState('')
  const [sent,  setSent]    = useState(false)
  const [focus, setFocus]   = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="nl-section">
      {/* Mesh gradient bg */}
      <div className="nl-bg" aria-hidden="true" />
      <div className="nl-orb nl-orb--l" aria-hidden="true" />
      <div className="nl-orb nl-orb--r" aria-hidden="true" />

      {/* Grid lines decoration */}
      <div className="nl-grid" aria-hidden="true" />

      <motion.div
        className="nl-card"
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={vp}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gradient border line top */}
        <div className="nl-card-topline" aria-hidden="true" />

        <motion.div
          className="nl-content"
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {/* Eyebrow */}
          <motion.span className="nl-eyebrow" variants={fadeUp}>
            Newsletter
          </motion.span>

          {/* Title */}
          <motion.h2 className="nl-title" variants={blurUp}>
            Stay Ahead of the<br />
            <em className="nl-title-em">Digital Curve</em>
          </motion.h2>

          {/* Subtitle */}
          <motion.p className="nl-subtitle" variants={fadeUp}>
            Join 5,000+ founders and marketers who get our weekly breakdown of
            what's moving in web, design, and growth.
          </motion.p>

          {/* Benefit pills */}
          <motion.div className="nl-benefits" variants={stagger(0, 0.1)}>
            {benefits.map((b, i) => (
              <motion.span
                key={i}
                className="nl-benefit"
                variants={fadeUp}
              >
                <span className="nl-benefit-icon">{b.icon}</span>
                {b.text}
              </motion.span>
            ))}
          </motion.div>

          {/* Form — right column */}
          <motion.form
            className="nl-form"
            onSubmit={handleSubmit}
            variants={fadeUp}
          >
            <div className={`nl-input-wrap${focus ? ' nl-input-wrap--focus' : ''}`}>
              <svg className="nl-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="4" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M1 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="email"
                className="nl-input"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                required
              />
            </div>

            <motion.button
              type="submit"
              className={`nl-btn${sent ? ' nl-btn--sent' : ''}`}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(124,58,237,0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.span key="sent" className="nl-btn-inner"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <polyline points="2,8 6,12 14,4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    You're in!
                  </motion.span>
                ) : (
                  <motion.span key="idle" className="nl-btn-inner"
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
                  >
                    Subscribe Free
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          <motion.p className="nl-privacy" variants={fadeUp}>
            No credit card. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
