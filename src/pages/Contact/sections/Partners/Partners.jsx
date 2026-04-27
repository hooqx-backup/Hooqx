import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, TrendingUp, Shield, Radio, Wifi } from 'lucide-react'
import './Partners.css'

const NODES = [
  {
    flag: '🇦🇪',
    city: 'Dubai',
    country: 'UAE',
    desc: 'Strategic digital growth partnerships powering businesses across the Middle East.',
    type: 'STRATEGIC HUB',
    region: 'MIDDLE EAST',
    coords: '25.2048° N, 55.2708° E',
    tz: 'GMT +4',
    color: '#00e5ff',
    Icon: TrendingUp,
    status: 'ACTIVE',
    dir: { x: -90 },
    delay: 0,
  },
  {
    flag: '🇩🇪',
    city: 'Frankfurt',
    country: 'Germany',
    desc: 'Technology and development collaborations driving growth across Europe.',
    type: 'TECH NODE',
    region: 'EUROPE',
    coords: '50.1109° N, 8.6821° E',
    tz: 'GMT +1',
    color: '#e879f9',
    Icon: Shield,
    status: 'ACTIVE',
    dir: { y: -80 },
    delay: 0.15,
  },
  {
    flag: '🇺🇸',
    city: 'Delaware',
    country: 'USA',
    desc: 'Headquartered in the US, serving clients across North America and the globe.',
    type: 'HEADQUARTERS',
    region: 'NORTH AMERICA',
    coords: '39.1582° N, 75.5244° W',
    tz: 'GMT −5',
    color: '#a855f7',
    Icon: Globe,
    status: 'HQ',
    dir: { x: 90 },
    delay: 0.3,
  },
]

const NET_STATS = [
  { label: 'PARTNER NODES',  val: '3',     color: '#a855f7' },
  { label: 'REGIONS ACTIVE', val: '3',     color: '#00e5ff' },
  { label: 'NETWORK UPTIME', val: '99.9%', color: '#e879f9' },
  { label: 'AVG LATENCY',    val: '< 2ms', color: '#7c3aed' },
]

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i, x: Math.random() * 100, y: Math.random() * 100,
  size: 1 + Math.random() * 2, dur: 5 + Math.random() * 7, delay: Math.random() * 6,
}))

/* ── Animated connection network ── */
const ARC_A = 'M 150,50 Q 300,8 450,50'
const ARC_B = 'M 450,50 Q 600,8 750,50'
const ARC_C = 'M 150,50 Q 450,100 750,50'

function NetworkArcs({ inView }) {
  return (
    <motion.div className="pt-net"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg viewBox="0 0 900 110" className="pt-net__svg" preserveAspectRatio="xMidYMid meet">

        {/* Static arc paths */}
        <path d={ARC_A} fill="none" stroke="rgba(0,229,255,0.18)"   strokeWidth="1" strokeDasharray="5 7" />
        <path d={ARC_B} fill="none" stroke="rgba(232,121,249,0.18)" strokeWidth="1" strokeDasharray="5 7" />
        <path d={ARC_C} fill="none" stroke="rgba(168,85,247,0.1)"   strokeWidth="1" strokeDasharray="7 9" />

        {/* Travelling dots — offsetPath */}
        <motion.circle r="3.5" fill="#00e5ff"
          style={{ offsetPath: `path("${ARC_A}")`, offsetDistance: '0%', filter: 'drop-shadow(0 0 6px #00e5ff)' }}
          animate={{ offsetDistance: ['0%', '100%'] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.9 }}
        />
        <motion.circle r="3.5" fill="#e879f9"
          style={{ offsetPath: `path("${ARC_B}")`, offsetDistance: '0%', filter: 'drop-shadow(0 0 6px #e879f9)' }}
          animate={{ offsetDistance: ['0%', '100%'] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.7, delay: 0.6 }}
        />
        <motion.circle r="2.5" fill="#a855f7"
          style={{ offsetPath: `path("${ARC_C}")`, offsetDistance: '0%', filter: 'drop-shadow(0 0 5px #a855f7)' }}
          animate={{ offsetDistance: ['0%', '100%'] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2, delay: 1.1 }}
        />

        {/* Node circles at each hub */}
        {[
          { cx: 150, cy: 50, color: '#00e5ff' },
          { cx: 450, cy: 50, color: '#e879f9' },
          { cx: 750, cy: 50, color: '#a855f7' },
        ].map((n, i) => (
          <g key={i}>
            {[0, 1].map(j => (
              <motion.circle key={j} cx={n.cx} cy={n.cy} r="7"
                fill="none" stroke={n.color} strokeWidth="0.8"
                animate={{ r: [7, 18, 26], opacity: [0.8, 0.3, 0] }}
                transition={{ duration: 2.5, delay: i * 0.5 + j * 1.1, repeat: Infinity, ease: 'easeOut' }}
              />
            ))}
            <circle cx={n.cx} cy={n.cy} r="5.5"
              fill={n.color} style={{ filter: `drop-shadow(0 0 7px ${n.color})` }}
            />
            <circle cx={n.cx} cy={n.cy} r="2.5" fill="#0a0a14" />
          </g>
        ))}
      </svg>
    </motion.div>
  )
}

/* ── Partner card ── */
function PartnerCard({ node, index, inView }) {
  const [hov, setHov] = useState(false)
  const { flag, city, country, desc, type, region, coords, tz, color, Icon, status } = node

  return (
    <motion.div className="pt-card" style={{ '--cc': color }}
      initial={{ opacity: 0, ...node.dir, filter: 'blur(12px)' }}
      animate={inView ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.75, delay: 0.32 + node.delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileHover={{ y: -12, transition: { type: 'spring', stiffness: 240, damping: 18 } }}
    >
      {/* HUD corner brackets */}
      <span className="pt-card__c pt-card__c--tl" />
      <span className="pt-card__c pt-card__c--br" />

      {/* Scan on hover */}
      {hov && (
        <motion.div className="pt-card__scan"
          initial={{ top: 0, opacity: 0.9 }}
          animate={{ top: '100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeIn' }}
        />
      )}

      {/* Header row: type + status */}
      <div className="pt-card__hdr">
        <div className="pt-card__icon-box">
          <Icon size={15} />
        </div>
        <span className="pt-card__type">{type}</span>
        <span className="pt-card__status" style={{ color }}>
          <motion.span className="pt-card__dot" style={{ background: color }}
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: index * 0.45 }}
          />
          {status}
        </span>
      </div>

      {/* Orbital flag display */}
      <div className="pt-card__orbital">
        {[0, 1].map(j => (
          <motion.div key={j} className="pt-card__ring" style={{ '--rj': j }}
            animate={{ rotate: j % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 12 + j * 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}
        {[0, 1].map(j => (
          <motion.div key={`p${j}`} className="pt-card__pulse"
            animate={{ scale: [1, 2.2 + j * 0.6], opacity: [0.55, 0] }}
            transition={{ duration: 2.2, delay: j * 0.9, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
        <div className="pt-card__flag-core">
          <span className="pt-card__flag">{flag}</span>
        </div>
      </div>

      {/* City + country */}
      <h3 className="pt-card__city">{city}</h3>
      <p className="pt-card__country-name">{country}</p>

      {/* Animated draw-in divider */}
      <motion.div className="pt-card__div"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.55 + node.delay, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Data table */}
      <div className="pt-card__data">
        {[
          { k: 'REGION',   v: region },
          { k: 'TIMEZONE', v: tz },
          { k: 'COORDS',   v: coords, mono: true },
        ].map(row => (
          <div key={row.k} className="pt-card__data-row">
            <span className="pt-card__data-key">{row.k}</span>
            <span className={`pt-card__data-val ${row.mono ? 'pt-card__data-val--mono' : ''}`}
              style={{ color }}>
              {row.v}
            </span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="pt-card__desc">{desc}</p>

      {/* Signal strength footer */}
      <div className="pt-card__signal">
        <Wifi size={11} style={{ color, opacity: 0.85 }} />
        <div className="pt-card__sig-bars">
          {[1, 2, 3, 4, 5].map(i => (
            <motion.span key={i} className="pt-card__sig-bar"
              style={{ height: `${i * 3 + 4}px`, background: color }}
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.3, delay: i * 0.16, repeat: Infinity }}
            />
          ))}
        </div>
        <span className="pt-card__sig-label">SIGNAL STRONG</span>
      </div>

      {/* Bottom edge glow */}
      <div className="pt-card__glow" />
    </motion.div>
  )
}

/* ── Main export ── */
export default function Partners() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="pt-section" ref={ref}>

      {/* Background */}
      <div className="pt-grid" />
      <motion.div className="pt-orb pt-orb--l"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="pt-orb pt-orb--r"
        animate={{ scale: [1, 1.14, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Particles */}
      <div className="pt-particles" aria-hidden>
        {PARTICLES.map(p => (
          <motion.span key={p.id} className="pt-particle"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [-10, 13, -10], opacity: [0.1, 0.45, 0.1] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Section HUD corners */}
      {['tl','tr','bl','br'].map(pos => (
        <span key={pos} className={`pt-hud pt-hud--${pos}`} />
      ))}

      <div className="pt-container">

        {/* ── Header ── */}
        <motion.div className="pt-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pt-eyebrow">
            <motion.span className="pt-eyebrow__line"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            <Radio size={12} style={{ opacity: 0.8 }} />
            <motion.span animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }}>●</motion.span>
            Global Network
          </div>

          <h2 className="pt-heading">
            Our <span className="pt-heading__acc">Partner</span> Alliance
          </h2>

          <p className="pt-desc">
            We work with startups and enterprises across Dubai, Frankfurt, and beyond —
            bringing global expertise to every engagement.
          </p>
        </motion.div>

        {/* ── Network stats bar ── */}
        <motion.div className="pt-statsbar"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {NET_STATS.map((s, i) => (
            <motion.div key={s.label} className="pt-statsbar__item"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
            >
              <span className="pt-statsbar__val" style={{ color: s.color }}>{s.val}</span>
              <span className="pt-statsbar__lbl">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Partner cards ── */}
        <div className="pt-grid-cards">
          {NODES.map((node, i) => (
            <PartnerCard key={node.city} node={node} index={i} inView={inView} />
          ))}
        </div>

        {/* ── Animated connection network ── */}
        <NetworkArcs inView={inView} />

      </div>
    </section>
  )
}
