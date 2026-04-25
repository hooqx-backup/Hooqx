import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Zap, Radio, Signal } from 'lucide-react'
import './Offices.css'

const OFFICES = [
  {
    flag: '🇺🇸',
    country: 'USA — Headquarters',
    address: '1111B S Governors Ave STE 20297, Dover, DE 19904, USA',
    coords: '39.1582° N, 75.5244° W',
    status: 'HQ',
    color: '#a855f7',
    from: { x: -80, filter: 'blur(12px)' },
  },
  {
    flag: '🇮🇳',
    country: 'India — Register Office',
    address: '3rd Floor, G-18/2, Bangla Bustee Garden Reach, Kolkata, West Bengal, India 700024',
    coords: '22.5726° N, 88.3639° E',
    status: 'REGIONAL',
    color: '#00e5ff',
    from: { y: -70, filter: 'blur(12px)' },
  },
  {
    flag: '🇮🇳',
    country: 'India — Corporate Office',
    address: 'Swapna Neer Apartment, Borobazar Chandannagar Near Swagatam Lodge Kutir Math, Chandannagar, Hooghly 712136',
    coords: '22.8621° N, 88.3876° E',
    status: 'PARTNER',
    color: '#e879f9',
    from: { x: 80, filter: 'blur(12px)' },
  },
]

const PHONES = [
  { flag: '🇺🇸', label: 'USA',     numbers: ['+1 646 693 2337', '+1-470-380-9098'], bars: 5 },
  { flag: '🇦🇪', label: 'UAE',     numbers: ['+971 4 509 5919'],                   bars: 4 },
  { flag: '🇮🇳', label: 'India',   numbers: ['+91 70036 34890'],                   bars: 5 },
  { flag: '🇩🇪', label: 'Germany', numbers: ['+49 69 941 89 171'],                 bars: 4 },
]

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100, y: Math.random() * 100,
  size: 1 + Math.random() * 2,
  dur: 5 + Math.random() * 7,
  delay: Math.random() * 6,
}))

function SignalBars({ count }) {
  return (
    <div className="cnt-off__signal-bars">
      {[1, 2, 3, 4, 5].map(i => (
        <motion.span key={i} className="cnt-off__signal-bar"
          style={{
            height: `${i * 4 + 4}px`,
            background: i <= count ? '#a855f7' : 'rgba(168,85,247,0.14)',
          }}
          animate={i <= count ? { opacity: [0.55, 1, 0.55] } : {}}
          transition={{ duration: 1.5, delay: i * 0.18, repeat: Infinity }}
        />
      ))}
    </div>
  )
}

function OfficeCard({ office, index, inView }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className="cnt-off__card"
      style={{ '--card-color': office.color }}
      initial={{ opacity: 0, ...office.from }}
      animate={inView ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.72, delay: 0.28 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 240, damping: 18 } }}
    >
      {/* HUD corner brackets */}
      <span className="cnt-off__card-corner cnt-off__card-corner--tl" />
      <span className="cnt-off__card-corner cnt-off__card-corner--br" />

      {/* Hover scan sweep */}
      {hovered && (
        <motion.div className="cnt-off__card-scan"
          initial={{ top: 0, opacity: 0.9 }}
          animate={{ top: '100%', opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeIn' }}
        />
      )}

      {/* Header row: icon + meta */}
      <div className="cnt-off__card-header">
        <div className="cnt-off__card-icon-wrap">
          <motion.div className="cnt-off__card-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          />
          <div className="cnt-off__card-icon"><MapPin size={18} /></div>
        </div>
        <div className="cnt-off__card-meta">
          <span className="cnt-off__card-flag">{office.flag}</span>
          <span className="cnt-off__card-status" style={{ color: office.color }}>
            <motion.span className="cnt-off__card-dot" style={{ background: office.color }}
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, delay: index * 0.4 }}
            />
            {office.status}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="cnt-off__card-country">{office.country.toUpperCase()}</h3>

      {/* Animated divider */}
      <motion.div className="cnt-off__card-divider"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.5 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Address */}
      <p className="cnt-off__card-address">{office.address}</p>

      {/* Coordinates tag */}
      <div className="cnt-off__card-coords">
        <Globe size={10} style={{ color: office.color, opacity: 0.65 }} />
        <span>{office.coords}</span>
      </div>

      {/* Bottom edge glow */}
      <div className="cnt-off__card-glow" />
    </motion.div>
  )
}

export default function Offices() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="cnt-off" ref={ref}>
      {/* Background */}
      <div className="cnt-off__grid" />
      <motion.div className="cnt-off__orb cnt-off__orb--l"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="cnt-off__orb cnt-off__orb--r"
        animate={{ scale: [1, 1.13, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Particles */}
      <div className="cnt-off__particles" aria-hidden>
        {PARTICLES.map(p => (
          <motion.span key={p.id} className="cnt-off__particle"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [-10, 13, -10], opacity: [0.1, 0.45, 0.1] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Section HUD corners */}
      {['tl','tr','bl','br'].map(pos => (
        <span key={pos} className={`cnt-off__hud cnt-off__hud--${pos}`} />
      ))}

      <div className="cnt-off__container">

        {/* ── Header ── */}
        <motion.div className="cnt-off__header"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cnt-off__eyebrow">
            <motion.span className="cnt-off__eyebrow-line"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            <Radio size={12} style={{ opacity: 0.8 }} />
            <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>●</motion.span>
            Global Presence
          </div>
          <h2 className="cnt-off__heading">
            Find Us <span className="cnt-off__heading-acc">Around the Globe</span>
          </h2>
          <p className="cnt-off__desc">
            Strategically positioned worldwide to serve you across every timezone.
          </p>
        </motion.div>

        {/* ── Office address cards ── */}
        <div className="cnt-off__cards">
          {OFFICES.map((office, i) => (
            <OfficeCard key={office.country} office={office} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Bottom row: Phones / Email / CTA ── */}
        <div className="cnt-off__reach">

          {/* COMM CHANNELS */}
          <motion.div className="cnt-off__panel"
            initial={{ opacity: 0, x: -60, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cnt-off__panel-header">
              <div className="cnt-off__panel-icon"><Phone size={15} /></div>
              <span className="cnt-off__panel-title">COMM CHANNELS</span>
              <motion.span className="cnt-off__panel-led"
                animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 1.1, repeat: Infinity }}
              />
            </div>
            <div className="cnt-off__phone-list">
              {PHONES.map((p, i) => (
                <motion.div key={p.label} className="cnt-off__phone-row"
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.65 + i * 0.1 }}
                >
                  <div className="cnt-off__phone-info">
                    <span className="cnt-off__phone-flag">{p.flag}</span>
                    <span className="cnt-off__phone-lbl">{p.label}</span>
                  </div>
                  <div className="cnt-off__phone-nums">
                    {p.numbers.map(n => (
                      <a key={n} href={`tel:${n.replace(/[\s-]/g, '')}`}>{n}</a>
                    ))}
                  </div>
                  <SignalBars count={p.bars} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DATA RELAY */}
          <motion.div className="cnt-off__panel cnt-off__panel--email"
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cnt-off__panel-header">
              <div className="cnt-off__panel-icon cnt-off__panel-icon--cyan"><Mail size={15} /></div>
              <span className="cnt-off__panel-title">DATA RELAY</span>
              <motion.span className="cnt-off__panel-led cnt-off__panel-led--cyan"
                animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 0.9, repeat: Infinity, delay: 0.3 }}
              />
            </div>
            <div className="cnt-off__email-list">
              {[
                { tag: 'INFO',    addr: 'info@hooqx.com'    },
                { tag: 'SUPPORT', addr: 'support@hooqx.com' },
              ].map((e, i) => (
                <motion.div key={e.addr} className="cnt-off__email-row"
                  initial={{ opacity: 0, x: 18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.75 + i * 0.13 }}
                >
                  <span className="cnt-off__email-tag">{e.tag}</span>
                  <a href={`mailto:${e.addr}`} className="cnt-off__email-addr">{e.addr}</a>
                </motion.div>
              ))}
              <div className="cnt-off__website-row">
                <Globe size={12} />
                <a href="https://www.hooqx.com" target="_blank" rel="noreferrer">www.hooqx.com</a>
              </div>
            </div>
          </motion.div>

          {/* FREE CONSULTATION */}
          <motion.div className="cnt-off__panel cnt-off__panel--cta"
            initial={{ opacity: 0, x: 60, filter: 'blur(10px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 0.74, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Orbiting pulse rings */}
            {[0, 1, 2].map(i => (
              <motion.div key={i} className="cnt-off__cta-ring"
                style={{ '--ri': i }}
                animate={{ scale: [1, 1.7 + i * 0.3, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, delay: i * 0.75, repeat: Infinity, ease: 'easeOut' }}
              />
            ))}

            <div className="cnt-off__panel-header">
              <div className="cnt-off__panel-icon cnt-off__panel-icon--violet"><Zap size={15} /></div>
              <span className="cnt-off__panel-title">FREE CONSULTATION</span>
            </div>
            <p className="cnt-off__cta-desc">
              Call us now for a free consultation with our experts.
            </p>
            <motion.a href="tel:+16466932337" className="cnt-off__cta-btn"
              whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            >
              <span className="cnt-off__cta-shimmer" />
              <Phone size={15} />
              +1 646 693 2337
            </motion.a>
            <div className="cnt-off__cta-note">
              <Signal size={11} />
              Available 24/7 across all timezones
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
