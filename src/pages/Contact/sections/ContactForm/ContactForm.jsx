import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { fadeUp, slideLeft, slideRight, stagger, vp } from '../../../../lib/motion'
import './ContactForm.css'

const services = [
  'Web Development', 'App Development', 'Software Development',
  'Digital Marketing', 'SEO', 'Social Media Marketing',
  'Performance Marketing', 'Graphic Design', 'UI/UX Design',
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="cnt-form-section">
      <div className="cnt-form-section__blob cnt-form-section__blob--left" />
      <div className="cnt-form-section__blob cnt-form-section__blob--right" />

      <div className="cnt-form-section__container">
        <div className="cnt-form-section__layout">

          {/* Left — info */}
          <motion.div
            className="cnt-form-section__left"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="cnt-form-section__eyebrow" variants={fadeUp}>
              <span className="cnt-form-section__eyebrow-line" />
              Contact Us
            </motion.span>

            <motion.h2 className="cnt-form-section__heading" variants={slideLeft}>
              Have Any<br /><span>Questions?</span>
            </motion.h2>

            <motion.p className="cnt-form-section__desc" variants={fadeUp}>
              Fill out the form and our team will get back to you within 24 hours.
              We'd love to hear about your project and discuss how we can help.
            </motion.p>

            <motion.div className="cnt-form-section__services" variants={fadeUp}>
              <p className="cnt-form-section__services-label">Services we offer:</p>
              <div className="cnt-form-section__service-tags">
                {services.map((s) => (
                  <span key={s} className="cnt-form-section__service-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="cnt-form-section__right"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {submitted ? (
              <div className="cnt-form__success">
                <CheckCircle size={56} />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="cnt-form__reset">
                  Send Another
                </button>
              </div>
            ) : (
              <form className="cnt-form" onSubmit={handleSubmit} noValidate>
                <div className="cnt-form__row">
                  <div className="cnt-form__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="John Doe"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="cnt-form__field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="john@example.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>

                <div className="cnt-form__row">
                  <div className="cnt-form__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+1 (000) 000-0000"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="cnt-form__field">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="cnt-form__field">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell us about your project or question…"
                    value={form.message} onChange={handleChange} required
                  />
                </div>

                <button type="submit" className="cnt-form__submit">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
