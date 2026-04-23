import { useState } from 'react'
import { motion } from 'framer-motion'
import './OurServices.css'

const services = [
  {
    num: '01',
    label: ['Web', 'Development'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os01" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Monitor body */}
        <rect x="4" y="8" width="56" height="38" rx="3" stroke="url(#os01)" />
        {/* Top bar */}
        <line x1="4" y1="18" x2="60" y2="18" stroke="url(#os01)" />
        {/* Window dots */}
        <circle cx="11" cy="13" r="2" fill="url(#os01)" />
        <circle cx="19" cy="13" r="2" fill="url(#os01)" />
        <circle cx="27" cy="13" r="2" fill="url(#os01)" />
        {/* Stand */}
        <line x1="24" y1="46" x2="24" y2="56" stroke="url(#os01)" />
        <line x1="40" y1="46" x2="40" y2="56" stroke="url(#os01)" />
        <line x1="16" y1="56" x2="48" y2="56" stroke="url(#os01)" />
        {/* Screen content blocks */}
        <rect x="10" y="24" width="18" height="13" rx="1.5" stroke="url(#os01)" />
        <line x1="34" y1="24" x2="54" y2="24" stroke="url(#os01)" />
        <line x1="34" y1="30" x2="54" y2="30" stroke="url(#os01)" />
        <line x1="34" y1="36" x2="46" y2="36" stroke="url(#os01)" />
        {/* Circuit dots */}
        <circle cx="10" cy="24" r="1.5" fill="url(#os01)" />
        <circle cx="28" cy="37" r="1.5" fill="url(#os01)" />
      </svg>
    ),
  },
  {
    num: '02',
    label: ['App', 'Development'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os02" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Phone body */}
        <rect x="14" y="4" width="28" height="48" rx="4" stroke="url(#os02)" />
        {/* Speaker */}
        <line x1="26" y1="9" x2="34" y2="9" stroke="url(#os02)" strokeWidth="2.5" />
        {/* Top & bottom dividers */}
        <line x1="14" y1="14" x2="42" y2="14" stroke="url(#os02)" />
        <line x1="14" y1="46" x2="42" y2="46" stroke="url(#os02)" />
        {/* Home button */}
        <circle cx="28" cy="51" r="2" stroke="url(#os02)" />
        {/* Gear icon on screen */}
        <circle cx="28" cy="29" r="7" stroke="url(#os02)" />
        <circle cx="28" cy="29" r="3" stroke="url(#os02)" />
        {/* Gear teeth */}
        <line x1="28" y1="20" x2="28" y2="22" stroke="url(#os02)" />
        <line x1="28" y1="36" x2="28" y2="38" stroke="url(#os02)" />
        <line x1="19" y1="29" x2="21" y2="29" stroke="url(#os02)" />
        <line x1="35" y1="29" x2="37" y2="29" stroke="url(#os02)" />
        {/* Corner circuit nodes */}
        <circle cx="14" cy="14" r="1.5" fill="url(#os02)" />
        <circle cx="42" cy="46" r="1.5" fill="url(#os02)" />
      </svg>
    ),
  },
  {
    num: '03',
    label: ['Digital', 'Marketing'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os03" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Pie chart circle */}
        <path d="M28 8 A20 20 0 1 1 8 28" stroke="url(#os03)" />
        <path d="M28 8 L28 28 L8 28" stroke="url(#os03)" />
        <circle cx="28" cy="28" r="3" fill="url(#os03)" />
        {/* Trend line */}
        <polyline points="6,56 16,46 26,50 38,38 52,42" stroke="url(#os03)" />
        <circle cx="52" cy="42" r="2.5" fill="url(#os03)" />
        {/* Bar chart */}
        <rect x="42" y="22" width="6" height="14" rx="1" stroke="url(#os03)" />
        <rect x="50" y="16" width="6" height="20" rx="1" stroke="url(#os03)" />
        {/* Baseline */}
        <line x1="4" y1="58" x2="60" y2="58" stroke="url(#os03)" />
        {/* Circuit dot */}
        <circle cx="8" cy="28" r="1.5" fill="url(#os03)" />
      </svg>
    ),
  },
  {
    num: '04',
    label: ['Software', 'Development'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os04" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Head */}
        <circle cx="32" cy="14" r="8" stroke="url(#os04)" />
        {/* Visor / glasses */}
        <rect x="26" y="11" width="12" height="6" rx="2" stroke="url(#os04)" />
        {/* Body */}
        <path d="M16 54 C16 42 48 42 48 54" stroke="url(#os04)" />
        {/* Code symbol left */}
        <polyline points="10,30 6,34 10,38" stroke="url(#os04)" />
        {/* Code symbol right */}
        <polyline points="22,30 26,34 22,38" stroke="url(#os04)" />
        {/* Slash */}
        <line x1="14" y1="38" x2="18" y2="30" stroke="url(#os04)" />
        {/* Connector */}
        <line x1="32" y1="22" x2="32" y2="30" stroke="url(#os04)" />
        <rect x="26" y="30" width="12" height="10" rx="1.5" stroke="url(#os04)" />
        {/* Nodes */}
        <circle cx="32" cy="30" r="1.5" fill="url(#os04)" />
        <circle cx="32" cy="40" r="1.5" fill="url(#os04)" />
      </svg>
    ),
  },
  {
    num: '05',
    label: ['UI / UX', 'Design'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os05" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Left person */}
        <circle cx="16" cy="18" r="7" stroke="url(#os05)" />
        <path d="M4 52 C4 40 28 40 28 52" stroke="url(#os05)" />
        {/* Right person */}
        <circle cx="48" cy="18" r="7" stroke="url(#os05)" />
        <path d="M36 52 C36 40 60 40 60 52" stroke="url(#os05)" />
        {/* Center person (slightly larger, in front) */}
        <circle cx="32" cy="16" r="8" stroke="url(#os05)" />
        <path d="M18 54 C18 42 46 42 46 54" stroke="url(#os05)" />
        {/* Star rating */}
        <polygon points="32,4 33.2,7.6 37,7.6 34,9.8 35.2,13.4 32,11.2 28.8,13.4 30,9.8 27,7.6 30.8,7.6" stroke="url(#os05)" strokeWidth="1" />
        {/* Connection lines between people */}
        <line x1="22" y1="26" x2="26" y2="24" stroke="url(#os05)" strokeWidth="1" />
        <line x1="38" y1="24" x2="42" y2="26" stroke="url(#os05)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: '06',
    label: ['IT', 'Services'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os06" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* CPU chip body */}
        <rect x="18" y="18" width="28" height="28" rx="2" stroke="url(#os06)" />
        {/* Inner core */}
        <rect x="24" y="24" width="16" height="16" rx="1" stroke="url(#os06)" />
        <circle cx="32" cy="32" r="4" stroke="url(#os06)" />
        {/* Top pins */}
        <line x1="24" y1="18" x2="24" y2="10" stroke="url(#os06)" />
        <line x1="32" y1="18" x2="32" y2="10" stroke="url(#os06)" />
        <line x1="40" y1="18" x2="40" y2="10" stroke="url(#os06)" />
        <rect x="21" y="6" width="6" height="4" rx="1" stroke="url(#os06)" />
        <rect x="29" y="6" width="6" height="4" rx="1" stroke="url(#os06)" />
        <rect x="37" y="6" width="6" height="4" rx="1" stroke="url(#os06)" />
        {/* Bottom pins */}
        <line x1="24" y1="46" x2="24" y2="54" stroke="url(#os06)" />
        <line x1="32" y1="46" x2="32" y2="54" stroke="url(#os06)" />
        <line x1="40" y1="46" x2="40" y2="54" stroke="url(#os06)" />
        <rect x="21" y="54" width="6" height="4" rx="1" stroke="url(#os06)" />
        <rect x="29" y="54" width="6" height="4" rx="1" stroke="url(#os06)" />
        <rect x="37" y="54" width="6" height="4" rx="1" stroke="url(#os06)" />
        {/* Left pins */}
        <line x1="18" y1="24" x2="10" y2="24" stroke="url(#os06)" />
        <line x1="18" y1="32" x2="10" y2="32" stroke="url(#os06)" />
        <line x1="18" y1="40" x2="10" y2="40" stroke="url(#os06)" />
        <rect x="6" y="21" width="4" height="6" rx="1" stroke="url(#os06)" />
        <rect x="6" y="29" width="4" height="6" rx="1" stroke="url(#os06)" />
        <rect x="6" y="37" width="4" height="6" rx="1" stroke="url(#os06)" />
        {/* Right pins */}
        <line x1="46" y1="24" x2="54" y2="24" stroke="url(#os06)" />
        <line x1="46" y1="32" x2="54" y2="32" stroke="url(#os06)" />
        <line x1="46" y1="40" x2="54" y2="40" stroke="url(#os06)" />
        <rect x="54" y="21" width="4" height="6" rx="1" stroke="url(#os06)" />
        <rect x="54" y="29" width="4" height="6" rx="1" stroke="url(#os06)" />
        <rect x="54" y="37" width="4" height="6" rx="1" stroke="url(#os06)" />
      </svg>
    ),
  },
]

const itemVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 22 },
  },
}

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export default function OurServices() {
  const [activeIdx, setActiveIdx] = useState(-1)

  const lineWidth = activeIdx >= 0
    ? `${((activeIdx + 1) / services.length) * 100}%`
    : '0%'

  return (
    <section className="os">
      {/* Single top line — grows from left to hovered card */}
      <div className="os__topline" style={{ width: lineWidth }} />

      <div className="os__inner">
        <motion.div
          className="os__grid"
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((s, i) => (
            <motion.div
              className="os__item"
              key={s.num}
              variants={itemVariant}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(-1)}
            >
              <span className="os__num">{s.num}</span>
              <div className="os__icon">{s.icon}</div>
              <p className="os__label">
                {s.label.map((line, j) => <span key={j}>{line}</span>)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
