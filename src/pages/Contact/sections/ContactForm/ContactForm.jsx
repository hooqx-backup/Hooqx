import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Clock, Zap, Star, Globe, ChevronDown, Activity } from 'lucide-react'
import './ContactForm.css'

const SERVICES = [
  'Web Development', 'App Development', 'Software Development',
  'Digital Marketing', 'SEO', 'Social Media Marketing',
  'Performance Marketing', 'Graphic Design', 'UI/UX Design',
]

const STATS = [
  { icon: Clock, label: 'Response', val: '< 24h', color: '#a855f7' },
  { icon: Zap,   label: 'Start In',  val: '48h',   color: '#00e5ff' },
  { icon: Star,  label: 'Rating',    val: '5.0 ★',  color: '#e879f9' },
  { icon: Globe, label: 'Offices',   val: '3+',    color: '#7c3aed' },
]

/* ── Pre-compute EQ bar animation data ── */
const EQ_BARS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  dur:   0.38 + (i % 6) * 0.09,
  delay: (i % 8) * 0.055,
  min:   0.12 + (i % 3) * 0.08,
  max:   0.55 + (i % 4) * 0.12,
}))

/* ── Build SVG sine-wave path ── */
function buildSine(W, H, amp, freq) {
  let d = `M 0 ${H / 2}`
  for (let i = 1; i <= 300; i++) {
    const x = (i / 300) * W
    const y = H / 2 + amp * Math.sin((i / 300) * Math.PI * 2 * freq)
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

/* Oscilloscope paths – 6 even cycles so half-width shift is seamless */
const SCOPE_A = buildSine(600, 80, 22, 6)
const SCOPE_B = buildSine(600, 80,  9, 12)

/* Background floating wave paths – even frequencies for seamless -1440 shift */
const BG_WAVES = [
  { d: buildSine(2880, 80, 26, 4), color: '#a855f7', op: 0.12, dur: 14, delay: 0   },
  { d: buildSine(2880, 80, 18, 6), color: '#00e5ff', op: 0.08, dur:  9, delay: 1.8 },
  { d: buildSine(2880, 80, 32, 2), color: '#e879f9', op: 0.06, dur: 20, delay: 3.5 },
  { d: buildSine(2880, 80, 12, 8), color: '#7c3aed', op: 0.07, dur: 11, delay: 2.2 },
  { d: buildSine(2880, 80, 20, 4), color: '#00e5ff', op: 0.05, dur: 17, delay: 5   },
]
const BG_Y = ['12%', '30%', '50%', '68%', '85%']

/* ── EQ Bars component ── */
function EqBars({ color = '#a855f7', count = 12 }) {
  return (
    <div className="wv-eq" aria-hidden>
      {EQ_BARS.slice(0, count).map(b => (
        <motion.span key={b.id} className="wv-eq__bar"
          style={{ '--c': color }}
          animate={{ scaleY: [b.min, b.max, b.min * 1.4, b.max * 0.7, b.min] }}
          transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

/* ── Oscilloscope panel ── */
function Oscilloscope({ inView }) {
  return (
    <motion.div className="wv-scope"
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="wv-scope__hdr">
        <motion.span className="wv-scope__led"
          animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 0.9, repeat: Infinity }}
        />
        <span className="wv-scope__title">SIGNAL MONITOR</span>
        <EqBars color="#a855f7" count={8} />
      </div>

      <div className="wv-scope__screen">
        {/* Phosphor grid */}
        {[20, 40, 60, 80].map(p => <div key={p} className="wv-scope__gl-h" style={{ top: `${p}%` }} />)}
        {[16.6, 33.3, 50, 66.6, 83.3].map(p => <div key={p} className="wv-scope__gl-v" style={{ left: `${p}%` }} />)}

        <svg viewBox="0 0 300 80" className="wv-scope__svg" preserveAspectRatio="none">
          {/* Primary purple wave */}
          <motion.path d={SCOPE_A} fill="none" stroke="#a855f7" strokeWidth="1.8"
            style={{ filter: 'drop-shadow(0 0 5px #a855f7)' }}
            animate={{ x: [0, -300] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
          />
          {/* Harmonic cyan */}
          <motion.path d={SCOPE_B} fill="none" stroke="#00e5ff" strokeWidth="1"
            strokeOpacity="0.45"
            animate={{ x: [0, -300] }}
            transition={{ duration: 2.0, repeat: Infinity, ease: 'linear' }}
          />
        </svg>

        {/* Blinking cursor */}
        <motion.div className="wv-scope__cursor"
          animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.65, repeat: Infinity }}
        />
        <span className="wv-scope__axis wv-scope__axis--t">+V</span>
        <span className="wv-scope__axis wv-scope__axis--b">−V</span>
      </div>
    </motion.div>
  )
}

/* ── Single form field ── */
function Field({ id, label, type, placeholder, value, onChange, focused, onFocus, required }) {
  const on = focused === id
  return (
    <div className={`wv-field ${on ? 'wv-field--on' : ''}`}>
      <label className="wv-field__label" htmlFor={id}>
        <Activity size={10} className="wv-field__icon" />
        {label}{required && <span className="wv-req">*</span>}
      </label>
      <div className="wv-field__wrap">
        <input id={id} name={id} type={type}
          placeholder={placeholder} value={value} onChange={onChange}
          required={required}
          onFocus={() => onFocus(id)} onBlur={() => onFocus(null)}
        />
        <div className="wv-field__underline" />
      </div>
    </div>
  )
}

/* ── Main component ── */
export default function ContactForm() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  return (
    <section className="wv-section" ref={ref} id="contact-form">

      {/* ── Flowing background waves ── */}
      <div className="wv-waves" aria-hidden>
        {BG_WAVES.map((w, i) => (
          <div key={i} className="wv-waves__row" style={{ top: BG_Y[i] }}>
            <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="wv-waves__svg">
              <motion.path d={w.d} fill="none"
                stroke={w.color} strokeWidth="1.3" strokeOpacity={w.op}
                animate={{ x: [0, -1440] }}
                transition={{ duration: w.dur, delay: w.delay, repeat: Infinity, ease: 'linear' }}
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Grid overlay */}
      <div className="wv-grid" />

      {/* Ambient orbs */}
      <motion.div className="wv-orb wv-orb--l"
        animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="wv-orb wv-orb--r"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* HUD corners */}
      {['tl','tr','bl','br'].map(p => (
        <span key={p} className={`wv-hud wv-hud--${p}`} />
      ))}

      <div className="wv-container">
        <div className="wv-layout">

          {/* ════ LEFT ════ */}
          <div className="wv-left">

            {/* Eyebrow */}
            <motion.div className="wv-eyebrow"
              initial={{ opacity: 0, x: -28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span className="wv-eyebrow__line"
                initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8 }}
              />
              <EqBars color="#a855f7" count={6} />
              Transmit Signal
            </motion.div>

            {/* Heading */}
            <motion.h2 className="wv-heading"
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              Send Us A<span className="wv-heading__acc"> Signal.</span>
            </motion.h2>

            {/* Description */}
            <motion.p className="wv-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              Fill out the form and our team will get back to you within 24 hours.
              We'd love to hear about your project and discuss how we can help.
            </motion.p>

            {/* Oscilloscope */}
            <Oscilloscope inView={inView} />

            {/* Stats 2×2 */}
            <div className="wv-stats">
              {STATS.map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div key={s.label} className="wv-stat"
                    style={{ '--sc': s.color }}
                    initial={{ opacity: 0, scale: 0.82, filter: 'blur(8px)' }}
                    animate={inView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                    transition={{ duration: 0.52, delay: 0.72 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
                  >
                    <div className="wv-stat__icon"><Icon size={14} /></div>
                    <div className="wv-stat__val">{s.val}</div>
                    <div className="wv-stat__lbl">{s.label}</div>
                    <div className="wv-stat__glow" />
                  </motion.div>
                )
              })}
            </div>

            {/* Service chips */}
            <motion.div className="wv-chips"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
            >
              {SERVICES.map((s, i) => (
                <motion.span key={s} className="wv-chip"
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 1.05 + i * 0.05 }}
                >{s}</motion.span>
              ))}
            </motion.div>
          </div>

          {/* ════ RIGHT — Form terminal ════ */}
          <motion.div className="wv-card"
            initial={{ opacity: 0, x: 80, filter: 'blur(16px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.88, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Card HUD corners */}
            {['tl','tr','bl','br'].map(p => (
              <span key={p} className={`wv-card__corner wv-card__corner--${p}`} />
            ))}

            {/* Card header */}
            <div className="wv-card__hdr">
              <div className="wv-card__hdr-top">
                <motion.span className="wv-card__led"
                  animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 1.0, repeat: Infinity }}
                />
                <span className="wv-card__title">TRANSMISSION FORM</span>
              </div>
              <div className="wv-card__hdr-eq">
                <EqBars color="#00e5ff" count={18} />
              </div>
            </div>

            {/* Animated wave divider */}
            <div className="wv-card__wave-bar" aria-hidden>
              <svg viewBox="0 0 600 18" className="wv-card__wave-svg" preserveAspectRatio="none">
                <motion.path
                  d="M0,9 C75,1 150,17 225,9 C300,1 375,17 450,9 C525,1 600,17 600,9"
                  fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.4"
                  animate={{ x: [0, -300] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                <motion.path
                  d="M0,9 C75,1 150,17 225,9 C300,1 375,17 450,9 C525,1 600,17 600,9"
                  fill="none" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.4"
                  animate={{ x: [300, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                <motion.path
                  d="M0,9 C50,17 125,1 200,9 C275,17 350,1 425,9 C500,17 575,1 600,9"
                  fill="none" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.25"
                  animate={{ x: [0, -300] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.path
                  d="M0,9 C50,17 125,1 200,9 C275,17 350,1 425,9 C500,17 575,1 600,9"
                  fill="none" stroke="#00e5ff" strokeWidth="1" strokeOpacity="0.25"
                  animate={{ x: [300, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                />
              </svg>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (

                /* ── Success state ── */
                <motion.div key="ok" className="wv-success"
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Sonar rings */}
                  <div className="wv-sonar">
                    {[0, 1, 2, 3].map(i => (
                      <motion.div key={i} className="wv-sonar__ring"
                        animate={{ scale: [1, 2.8 + i * 0.5], opacity: [0.7, 0] }}
                        transition={{ duration: 2, delay: i * 0.42, repeat: Infinity, ease: 'easeOut' }}
                      />
                    ))}
                    <div className="wv-sonar__core">
                      <CheckCircle size={26} color="#a855f7" />
                    </div>
                  </div>

                  <h3 className="wv-success__title">Signal Transmitted!</h3>
                  <p className="wv-success__desc">
                    Our team received your message and will respond within 24 hours.
                  </p>

                  <div className="wv-success__eq">
                    <EqBars color="#a855f7" count={22} />
                  </div>

                  <motion.button onClick={() => setSubmitted(false)} className="wv-reset"
                    whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  >
                    New Transmission
                  </motion.button>
                </motion.div>

              ) : (

                /* ── Form ── */
                <motion.form key="form" className="wv-form"
                  onSubmit={handleSubmit} noValidate
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="wv-row">
                    <Field id="name"  label="Full Name"     type="text"  placeholder="John Doe"
                      value={form.name}  onChange={handleChange} focused={focused} onFocus={setFocused} required />
                    <Field id="email" label="Email Address" type="email" placeholder="john@example.com"
                      value={form.email} onChange={handleChange} focused={focused} onFocus={setFocused} required />
                  </div>

                  <div className="wv-row">
                    <Field id="phone" label="Phone Number" type="tel" placeholder="+1 (000) 000-0000"
                      value={form.phone} onChange={handleChange} focused={focused} onFocus={setFocused} />

                    <div className={`wv-field ${focused === 'service' ? 'wv-field--on' : ''}`}>
                      <label className="wv-field__label" htmlFor="service">
                        <Activity size={10} className="wv-field__icon" />
                        Service Interested In
                      </label>
                      <div className="wv-field__wrap wv-field__wrap--sel">
                        <select id="service" name="service"
                          value={form.service} onChange={handleChange}
                          onFocus={() => setFocused('service')}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="">Select a service…</option>
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <ChevronDown size={14} className="wv-field__chevron" />
                        <div className="wv-field__underline" />
                      </div>
                    </div>
                  </div>

                  <div className={`wv-field ${focused === 'message' ? 'wv-field--on' : ''}`}>
                    <label className="wv-field__label" htmlFor="message">
                      <Activity size={10} className="wv-field__icon" />
                      Your Message <span className="wv-req">*</span>
                    </label>
                    <div className="wv-field__wrap">
                      <textarea id="message" name="message" rows={5}
                        placeholder="Tell us about your project or question…"
                        value={form.message} onChange={handleChange}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                        required
                      />
                      <div className="wv-field__underline" />
                    </div>
                  </div>

                  <motion.button type="submit" className="wv-submit"
                    whileHover={{ scale: 1.025, y: -3 }} whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  >
                    <span className="wv-submit__wave" />
                    <Send size={16} />
                    Send Transmission
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
