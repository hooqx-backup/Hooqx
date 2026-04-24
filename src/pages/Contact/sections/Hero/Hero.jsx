import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Radio, MapPin, Clock, Zap, ArrowDown } from 'lucide-react'
import './Hero.css'

/* ── Typewriter hook ── */
function useTypewriter(text, speed = 55, startDelay = 400, active = true) {
  const [display, setDisplay] = useState('')
  useEffect(() => {
    if (!active) return
    let i = 0
    const t = setTimeout(() => {
      const id = setInterval(() => {
        setDisplay(text.slice(0, ++i))
        if (i >= text.length) clearInterval(id)
      }, speed)
      return () => clearInterval(id)
    }, startDelay)
    return () => clearTimeout(t)
  }, [text, speed, startDelay, active])
  return display
}

/* ── Office nodes for the signal map ── */
const OFFICES = [
  { id: 'usa', label: 'Delaware, USA',    short: 'USA',  x: 18,  y: 42, color: '#a855f7', status: 'HQ'       },
  { id: 'uae', label: 'Dubai, UAE',       short: 'UAE',  x: 62,  y: 30, color: '#00e5ff', status: 'REGIONAL' },
  { id: 'ind', label: 'Frankfurt, Germany', short: 'GER', x: 52, y: 62, color: '#e879f9', status: 'PARTNER'  },
]
const ARCS = [
  { from: 'usa', to: 'uae', dur: 2.2, delay: 0 },
  { from: 'uae', to: 'ind', dur: 1.8, delay: 0.6 },
  { from: 'usa', to: 'ind', dur: 2.6, delay: 1.1 },
]

const PARTICLES = Array.from({ length: 32 }, (_, i) => ({
  id: i, x: Math.random() * 100, y: Math.random() * 100,
  size: 1 + Math.random() * 2.2, dur: 5 + Math.random() * 8, delay: Math.random() * 6,
}))

/* ── Signal arc travelling dot ── */
function ArcDot({ from, to, dur, delay, offices }) {
  const f = offices.find(o => o.id === from)
  const t = offices.find(o => o.id === to)
  if (!f || !t) return null
  const mx = (f.x + t.x) / 2
  const my = Math.min(f.y, t.y) - 18
  const path = `M${f.x},${f.y} Q${mx},${my} ${t.x},${t.y}`
  return (
    <g>
      <path d={path} fill="none" stroke={f.color} strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="3 4" />
      <motion.circle r="2.5" fill={f.color} style={{ filter: `drop-shadow(0 0 4px ${f.color})` }}
        animate={{ offsetDistance: ['0%', '100%'] }}
        transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
        style={{ offsetPath: `path("${path}")`, offsetDistance: '0%', filter: `drop-shadow(0 0 4px ${f.color})` }}
      />
    </g>
  )
}

/* ── Signal Map (right panel) ── */
function SignalMap({ inView }) {
  return (
    <div className="cnt-hero__map">
      {/* Terminal header */}
      <div className="cnt-hero__map-header">
        <motion.span className="cnt-hero__map-led"
          animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.1, repeat: Infinity }} />
        <span className="cnt-hero__map-title">GLOBAL SIGNAL NETWORK</span>
        <span className="cnt-hero__map-rev">v2024.12</span>
      </div>

      {/* SVG map */}
      <div className="cnt-hero__map-stage">
        <svg viewBox="0 0 80 80" className="cnt-hero__map-svg" aria-hidden>
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(168,85,247,0.06)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="80" height="80" fill="url(#mapGlow)" />

          {/* Grid */}
          {[20,40,60].map(v => (
            <g key={v}>
              <line x1={v} y1="0" x2={v} y2="80" stroke="rgba(168,85,247,0.06)" strokeWidth="0.5" />
              <line x1="0" y1={v} x2="80" y2={v} stroke="rgba(168,85,247,0.06)" strokeWidth="0.5" />
            </g>
          ))}

          {/* Arcs */}
          {ARCS.map((a, i) => (
            <ArcDot key={i} {...a} offices={OFFICES} />
          ))}

          {/* Office nodes */}
          {OFFICES.map((o, i) => (
            <g key={o.id}>
              {/* Pulse rings */}
              {[0,1].map(j => (
                <motion.circle key={j} cx={o.x} cy={o.y} r="4"
                  fill="none" stroke={o.color} strokeWidth="0.8"
                  animate={inView ? { r: [4, 10, 14], opacity: [0.8, 0.3, 0] } : {}}
                  transition={{ duration: 2.5, delay: i * 0.4 + j * 1.1, repeat: Infinity, ease: 'easeOut' }}
                />
              ))}
              {/* Core dot */}
              <motion.circle cx={o.x} cy={o.y} r="3.5"
                fill={o.color}
                style={{ filter: `drop-shadow(0 0 5px ${o.color})` }}
                animate={{ r: [3.5, 4.5, 3.5] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <circle cx={o.x} cy={o.y} r="1.8" fill="#0a0a14" />
            </g>
          ))}
        </svg>

        {/* Office labels positioned over the SVG */}
        {OFFICES.map((o, i) => (
          <motion.div key={o.id} className="cnt-hero__node"
            style={{ left: `${o.x}%`, top: `${o.y}%`, '--nc': o.color }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.6 + i * 0.18 }}
          >
            <div className="cnt-hero__node-badge">
              <span className="cnt-hero__node-dot" style={{ background: o.color }} />
              <span className="cnt-hero__node-short">{o.short}</span>
            </div>
            <span className="cnt-hero__node-status" style={{ color: o.color }}>{o.status}</span>
          </motion.div>
        ))}
      </div>

      {/* Office list */}
      <div className="cnt-hero__map-list">
        {OFFICES.map((o, i) => (
          <motion.div key={o.id} className="cnt-hero__map-item"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 + i * 0.13 }}
          >
            <MapPin size={12} style={{ color: o.color, flexShrink: 0 }} />
            <span className="cnt-hero__map-item-label">{o.label}</span>
            <span className="cnt-hero__map-item-status" style={{ color: o.color }}>●  ONLINE</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom signal bar */}
      <div className="cnt-hero__map-bar">
        <span className="cnt-hero__map-bar-label">SIGNAL STRENGTH</span>
        <div className="cnt-hero__map-bar-track">
          <motion.div className="cnt-hero__map-bar-fill"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          {[...Array(7)].map((_, i) => (
            <motion.div key={i} className="cnt-hero__map-bar-seg"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.2, delay: i * 0.15, repeat: Infinity }}
            />
          ))}
        </div>
        <span className="cnt-hero__map-bar-pct">98%</span>
      </div>
    </div>
  )
}

/* ── Main Hero ── */
export default function ContactHero() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const typed = useTypewriter('Contact Hooqx', 60, 300, inView)

  return (
    <section className="cnt-hero" ref={ref}>
      {/* Full-section scan beam */}
      {inView && (
        <motion.div className="cnt-hero__scanbeam"
          initial={{ top: '-4px', opacity: 0.9 }}
          animate={{ top: '105%', opacity: 0 }}
          transition={{ duration: 2.2, ease: 'easeIn', delay: 0.2 }}
        />
      )}

      {/* Background layers */}
      <div className="cnt-hero__grid" />
      <motion.div className="cnt-hero__blob cnt-hero__blob--l"
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="cnt-hero__blob cnt-hero__blob--r"
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Floating particles */}
      <div className="cnt-hero__particles" aria-hidden>
        {PARTICLES.map(p => (
          <motion.span key={p.id} className="cnt-hero__particle"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [-12, 14, -12], opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Corner brackets */}
      {['tl','tr','bl','br'].map(pos => (
        <span key={pos} className={`cnt-hero__corner cnt-hero__corner--${pos}`} />
      ))}

      {/* Ghost watermark */}
      <div className="cnt-hero__watermark" aria-hidden>CONNECT</div>

      <div className="cnt-hero__layout">

        {/* ══ LEFT — Text ══ */}
        <div className="cnt-hero__left">
          {/* Eyebrow */}
          <motion.div className="cnt-hero__eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span className="cnt-hero__eyebrow-line"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            <Radio size={12} style={{ opacity: 0.8 }} />
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>
              ●
            </motion.span>
            Get In Touch
          </motion.div>

          {/* Typewriter heading */}
          <h1 className="cnt-hero__heading">
            <span className="cnt-hero__typed">
              {typed}
              <motion.span className="cnt-hero__cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              >|</motion.span>
            </span>
            <motion.span className="cnt-hero__heading-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.5 }}
            >
              for Expert Solutions
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p className="cnt-hero__desc"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.8 }}
          >
            We globally enhance client businesses with strategic creativity in IT solutions,
            spanning development, marketing, design, and problem-solving.
          </motion.p>

          {/* Quick stats */}
          <motion.div className="cnt-hero__stats"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            {[
              { icon: Clock, label: '24h Response', val: 'Guaranteed' },
              { icon: Zap,   label: 'Project Start', val: 'Within 48h' },
            ].map(s => {
              const Icon = s.icon
              return (
                <div key={s.label} className="cnt-hero__stat">
                  <div className="cnt-hero__stat-icon"><Icon size={14} /></div>
                  <div>
                    <div className="cnt-hero__stat-val">{s.val}</div>
                    <div className="cnt-hero__stat-label">{s.label}</div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div className="cnt-hero__cta"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.1 }}
          >
            <motion.a href="#contact-form" className="cnt-hero__btn cnt-hero__btn--primary"
              whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            >
              Start a Project
              <span className="cnt-hero__btn-shimmer" />
            </motion.a>
            <motion.a href="tel:+14703809098" className="cnt-hero__btn cnt-hero__btn--ghost"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            >
              Call Us Now
            </motion.a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div className="cnt-hero__scroll"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 2.4 }}
          >
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown size={14} />
            </motion.div>
            <span>Scroll to explore</span>
          </motion.div>
        </div>

        {/* ══ RIGHT — Signal Map ══ */}
        <motion.div className="cnt-hero__right"
          initial={{ opacity: 0, x: 80, filter: 'blur(16px)' }}
          animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <SignalMap inView={inView} />
        </motion.div>

      </div>
    </section>
  )
}
