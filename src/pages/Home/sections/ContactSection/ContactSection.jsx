import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, blurUp, stagger, vp } from '../../../../lib/motion'
import contactImg from '../../../../assets/images/contactsection.jpg'
import './ContactSection.css'

const services = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Brand Identity',
  'SEO & Growth',
]

const fieldVariant = (i) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 } },
})

export default function ContactSection() {
  const [form, setForm]   = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [focus, setFocus] = useState(null)

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <section className="cs-section">
      <div className="cs-inner">

        {/* ── Left: image panel ── */}
        <motion.div
          className="cs-image-col"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={vp}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={contactImg} alt="Our team" className="cs-img" />
          <div className="cs-img-overlay" />

          {/* Floating info badge */}
          <motion.div
            className="cs-badge"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200, damping: 18 }}
          >
            <span className="cs-badge-dot" />
            <span>Available for new projects</span>
          </motion.div>
        </motion.div>

        {/* ── Right: form ── */}
        <motion.div
          className="cs-form-col"
          variants={stagger(0, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.p className="cs-eyebrow" variants={fadeUp}>Get In Touch</motion.p>
          <motion.h2 className="cs-title" variants={blurUp}>
            Hit Us Up! Let's Talk<br />
            <span className="cs-title-accent">Pixels & Strategies!</span>
          </motion.h2>

          <form className="cs-form" onSubmit={submit} noValidate>
            {/* Row 1 */}
            <motion.div className="cs-row" variants={stagger(0, 0.08)}>
              <motion.div className={`cs-field${focus === 'name' ? ' cs-field--focus' : ''}`} variants={fieldVariant(0)}>
                <input
                  type="text" name="name" placeholder="Name"
                  value={form.name} onChange={handle}
                  onFocus={() => setFocus('name')} onBlur={() => setFocus(null)}
                  required
                />
              </motion.div>
              <motion.div className={`cs-field${focus === 'phone' ? ' cs-field--focus' : ''}`} variants={fieldVariant(1)}>
                <input
                  type="tel" name="phone" placeholder="Phone"
                  value={form.phone} onChange={handle}
                  onFocus={() => setFocus('phone')} onBlur={() => setFocus(null)}
                />
              </motion.div>
            </motion.div>

            {/* Row 2 */}
            <motion.div className="cs-row" variants={stagger(0, 0.08)}>
              <motion.div className={`cs-field${focus === 'email' ? ' cs-field--focus' : ''}`} variants={fieldVariant(2)}>
                <input
                  type="email" name="email" placeholder="Email"
                  value={form.email} onChange={handle}
                  onFocus={() => setFocus('email')} onBlur={() => setFocus(null)}
                  required
                />
              </motion.div>
              <motion.div className={`cs-field${focus === 'service' ? ' cs-field--focus' : ''}`} variants={fieldVariant(3)}>
                <select
                  name="service" value={form.service} onChange={handle}
                  onFocus={() => setFocus('service')} onBlur={() => setFocus(null)}
                >
                  <option value="" disabled>Select Service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </motion.div>
            </motion.div>

            {/* Textarea */}
            <motion.div className={`cs-field cs-field--full${focus === 'message' ? ' cs-field--focus' : ''}`} variants={fieldVariant(4)}>
              <textarea
                name="message" placeholder="Messages" rows={4}
                value={form.message} onChange={handle}
                onFocus={() => setFocus('message')} onBlur={() => setFocus(null)}
              />
            </motion.div>

            {/* Submit */}
            <motion.div variants={fieldVariant(5)}>
              <motion.button
                className={`cs-submit${sent ? ' cs-submit--sent' : ''}`}
                type="submit"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(59,130,246,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                {sent ? (
                  <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <polyline points="3,9 7,13 15,5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message Sent!
                  </>
                ) : 'Submit Now'}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
