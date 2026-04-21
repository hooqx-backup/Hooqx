import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, stagger, vp } from '../../lib/motion'
import {
  MapPin, Phone, Mail, Globe, Send, CheckCircle,
  Building2, Smartphone,
} from 'lucide-react'
import './ContactPage.css'


const offices = [
  {
    flag: '🇺🇸',
    country: 'USA — Headquarters',
    address: '1111B S Governors Ave STE 20297, Dover, DE 19904, USA',
    icon: Building2,
  },
  {
    flag: '🇮🇳',
    country: 'India — Register Office',
    address: '3rd Floor, G-18/2, Bangla Bustee Garden Reach, Kolkata, West Bengal, India 700024',
    icon: Building2,
  },
  {
    flag: '🇮🇳',
    country: 'India — Corporate Office',
    address: 'Swapna Neer Apartment, Borobazar Chandannagar Near Swagatam Lodge Kutir Math, Chandannagar, Hooghly 712136',
    icon: Building2,
  },
]

const phones = [
  { flag: '🇺🇸', label: 'USA', numbers: ['+1 646 693 2337', '+1-470-380-9098'] },
  { flag: '🇦🇪', label: 'UAE', numbers: ['+971 4 509 5919'] },
  { flag: '🇮🇳', label: 'India', numbers: ['+91 70036 34890'] },
  { flag: '🇩🇪', label: 'Germany', numbers: ['+49 69 941 89 171'] },
]

const services = [
  'Web Development', 'App Development', 'Software Development',
  'Digital Marketing', 'SEO', 'Social Media Marketing',
  'Performance Marketing', 'Graphic Design', 'UI/UX Design',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero__blob contact-hero__blob--left" />
        <div className="contact-hero__blob contact-hero__blob--right" />
        <div className="contact-hero__grid" />

        <motion.div
          className="contact-hero__content"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="contact-hero__eyebrow" variants={fadeUp}>
            <span className="contact-hero__eyebrow-line" />
            Get In Touch
          </motion.span>

          <motion.h1 className="contact-hero__heading" variants={slideLeft}>
            Contact <span>Hooqx LLC</span> for<br />Expert Solutions
          </motion.h1>

          <motion.p className="contact-hero__desc" variants={fadeUp}>
            We globally enhance client businesses with strategic creativity in IT solutions,
            spanning development, marketing, design, and problem-solving. Let's talk about
            how we can help you grow.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="contact-info">
        <div className="contact-info__blob contact-info__blob--left" />
        <div className="contact-info__blob contact-info__blob--right" />
        <div className="contact-info__grid-bg" />

        <div className="contact-info__container">

          {/* Office addresses */}
          <motion.div
            className="contact-info__header"
            variants={stagger(0.06, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="contact-info__eyebrow" variants={fadeUp}>
              <span className="contact-info__eyebrow-line" />
              Our Offices
            </motion.span>
            <motion.h2 className="contact-info__heading" variants={slideLeft}>
              Find Us Around the Globe
            </motion.h2>
          </motion.div>

          <motion.div
            className="contact-info__offices"
            variants={stagger(0.08, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {offices.map((office) => (
              <motion.div
                key={office.country}
                className="contact-info__office-card"
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="contact-info__office-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-info__office-body">
                  <span className="contact-info__office-flag">{office.flag}</span>
                  <h3>{office.country}</h3>
                  <p>{office.address}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone & email row */}
          <motion.div
            className="contact-info__reach"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {/* Phones */}
            <motion.div className="contact-info__reach-card" variants={fadeUp}>
              <div className="contact-info__reach-icon">
                <Phone size={22} />
              </div>
              <div className="contact-info__reach-body">
                <h3>Phone Numbers</h3>
                <div className="contact-info__phones">
                  {phones.map((p) => (
                    <div key={p.label} className="contact-info__phone-row">
                      <span className="contact-info__phone-flag">{p.flag} {p.label}</span>
                      <div className="contact-info__phone-nums">
                        {p.numbers.map((n) => (
                          <a key={n} href={`tel:${n.replace(/[\s-]/g, '')}`}>{n}</a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="contact-info__reach-card" variants={fadeUp}>
              <div className="contact-info__reach-icon">
                <Mail size={22} />
              </div>
              <div className="contact-info__reach-body">
                <h3>Email Addresses</h3>
                <div className="contact-info__emails">
                  <a href="mailto:info@hooqx.com">info@hooqx.com</a>
                  <a href="mailto:support@hooqx.com">support@hooqx.com</a>
                </div>
                <div className="contact-info__website">
                  <Globe size={16} />
                  <a href="https://www.hooqx.com" target="_blank" rel="noreferrer">www.hooqx.com</a>
                </div>
              </div>
            </motion.div>

            {/* Mobile CTA */}
            <motion.div className="contact-info__reach-card contact-info__reach-card--cta" variants={fadeUp}>
              <div className="contact-info__reach-icon">
                <Smartphone size={22} />
              </div>
              <div className="contact-info__reach-body">
                <h3>Free Consultation</h3>
                <p>Call us now for a free consultation with our experts.</p>
                <a href="tel:+16466932337" className="contact-info__call-btn">
                  <Phone size={16} />
                  +1 646 693 2337
                </a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section className="contact-form-section">
        <div className="contact-form-section__blob contact-form-section__blob--left" />
        <div className="contact-form-section__blob contact-form-section__blob--right" />

        <div className="contact-form-section__container">
          <div className="contact-form-section__layout">

            {/* Left — info */}
            <motion.div
              className="contact-form-section__left"
              variants={stagger(0.06, 0.12)}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              <motion.span className="contact-form-section__eyebrow" variants={fadeUp}>
                <span className="contact-form-section__eyebrow-line" />
                Contact Us
              </motion.span>

              <motion.h2 className="contact-form-section__heading" variants={slideLeft}>
                Have Any<br /><span>Questions?</span>
              </motion.h2>

              <motion.p className="contact-form-section__desc" variants={fadeUp}>
                Fill out the form and our team will get back to you within 24 hours.
                We'd love to hear about your project and discuss how we can help.
              </motion.p>

              <motion.div className="contact-form-section__services" variants={fadeUp}>
                <p className="contact-form-section__services-label">Services we offer:</p>
                <div className="contact-form-section__service-tags">
                  {services.map((s) => (
                    <span key={s} className="contact-form-section__service-tag">{s}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              className="contact-form-section__right"
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={vp}
            >
              {submitted ? (
                <div className="contact-form__success">
                  <CheckCircle size={56} />
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="contact-form__reset">
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (000) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="contact-form__field">
                      <label htmlFor="service">Service Interested In</label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project or question…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="contact-form__submit">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="contact-partners">
        <div className="contact-partners__container">
          <motion.div
            className="contact-partners__header"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="contact-partners__eyebrow" variants={fadeUp}>
              <span className="contact-partners__eyebrow-line" />
              Collaborations
            </motion.span>
            <motion.h2 className="contact-partners__heading" variants={slideLeft}>
              Our Partners
            </motion.h2>
            <motion.p className="contact-partners__desc" variants={fadeUp}>
              We work with startups and enterprises across Dubai, Frankfurt, and beyond —
              bringing global expertise to every engagement.
            </motion.p>
          </motion.div>

          <motion.div
            className="contact-partners__grid"
            variants={stagger(0.08, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {[
              { flag: '🇦🇪', city: 'Dubai, UAE', desc: 'Strategic digital growth partnerships across the Middle East.' },
              { flag: '🇩🇪', city: 'Frankfurt, Germany', desc: 'Technology and development collaborations in the European market.' },
              { flag: '🇺🇸', city: 'Delaware, USA', desc: 'Headquartered in the US serving clients worldwide.' },
            ].map((p) => (
              <motion.div
                key={p.city}
                className="contact-partners__card"
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <span className="contact-partners__flag">{p.flag}</span>
                <h3>{p.city}</h3>
                <p>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  )
}
