import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import './Stats.css'

const stats = [
  { label: 'Projects Delivered', value: 120,  suffix: '+', prefix: '',  color: '#a855f7', ring: 82 },
  { label: 'Client Satisfaction', value: 96,   suffix: '%', prefix: '',  color: '#00e5ff', ring: 96 },
  { label: 'Team Members',        value: 50,   suffix: '+', prefix: '',  color: '#7c3aed', ring: 68 },
  { label: 'Years Experience',    value: 8,    suffix: '+', prefix: '',  color: '#a855f7', ring: 55 },
]

/* Alternating entry directions */
const directions = [
  { x: -160, y: 0 },
  { x: 0,    y: -120 },
  { x: 0,    y: 120 },
  { x: 160,  y: 0 },
]

function CountUp({ target, suffix, prefix, color, inView }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, target, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.3,
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => ctrl.stop()
  }, [inView, target])

  return (
    <span className="abt-stats__value" style={{ '--stat-color': color }}>
      {prefix}{display}{suffix}
    </span>
  )
}

function RingProgress({ pct, color, inView }) {
  const r = 42
  const circ = 2 * Math.PI * r
  const [dash, setDash] = useState(circ)

  useEffect(() => {
    if (!inView) return
    const target = circ - (pct / 100) * circ
    const ctrl = animate(circ, target, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.4,
      onUpdate: (v) => setDash(v),
    })
    return () => ctrl.stop()
  }, [inView, pct, circ])

  return (
    <svg className="abt-stats__ring" viewBox="0 0 96 96" aria-hidden>
      <circle cx="48" cy="48" r={r} className="abt-stats__ring-track" />
      <motion.circle
        cx="48" cy="48" r={r}
        className="abt-stats__ring-fill"
        style={{ stroke: color, strokeDasharray: circ, strokeDashoffset: dash }}
      />
      {/* Rotating glow dot */}
      <motion.circle
        cx="48" cy="48" r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={`4 ${circ - 4}`}
        strokeDashoffset={dash}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  )
}

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const dir = directions[index]

  return (
    <motion.div
      ref={ref}
      className="abt-stats__card"
      style={{ '--stat-color': stat.color }}
      initial={{ opacity: 0, x: dir.x, y: dir.y, filter: 'blur(16px)', scale: 0.88 }}
      animate={inView
        ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)', scale: 1 }
        : {}
      }
      transition={{ duration: 0.85, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.03, transition: { type: 'spring', stiffness: 200, damping: 18 } }}
    >
      {/* Grid lines */}
      <div className="abt-stats__card-grid" />

      {/* Corner brackets */}
      <span className="abt-stats__bracket abt-stats__bracket--tl" />
      <span className="abt-stats__bracket abt-stats__bracket--tr" />
      <span className="abt-stats__bracket abt-stats__bracket--bl" />
      <span className="abt-stats__bracket abt-stats__bracket--br" />

      {/* Scan line on entry */}
      {inView && (
        <motion.div
          className="abt-stats__scanline"
          initial={{ top: '-100%', opacity: 0.8 }}
          animate={{ top: '110%', opacity: 0 }}
          transition={{ duration: 1, delay: index * 0.12, ease: 'easeIn' }}
          style={{ background: `linear-gradient(to bottom, transparent, ${stat.color}, transparent)` }}
        />
      )}

      {/* Ring + number center */}
      <div className="abt-stats__ring-wrap">
        <RingProgress pct={stat.ring} color={stat.color} inView={inView} />
        <div className="abt-stats__ring-inner">
          <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} color={stat.color} inView={inView} />
        </div>
      </div>

      {/* Label */}
      <div className="abt-stats__label">{stat.label}</div>

      {/* Bottom bar fill */}
      <div className="abt-stats__bar-track">
        <motion.div
          className="abt-stats__bar-fill"
          style={{ background: stat.color }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: stat.ring / 100 } : {}}
          transition={{ duration: 1.8, delay: index * 0.12 + 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Hover glow overlay */}
      <div className="abt-stats__hover-glow" />
    </motion.div>
  )
}

export default function Stats() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section className="abt-stats" ref={sectionRef}>
      {/* Background orbs */}
      <motion.div className="abt-stats__orb abt-stats__orb--left"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="abt-stats__orb abt-stats__orb--right"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* HUD header scanner */}
      {inView && (
        <motion.div
          className="abt-stats__section-scan"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      <div className="abt-stats__container">
        {/* HUD eyebrow */}
        <motion.div
          className="abt-stats__hud"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="abt-stats__hud-line" />
          <span className="abt-stats__hud-label">SYSTEM METRICS — LIVE OVERVIEW</span>
          <motion.span
            className="abt-stats__hud-dot"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </motion.div>

        <div className="abt-stats__grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
