import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './OurServices.css'

const services = [
  {
    num: '01',
    label: ['UI / UX', 'Design'],
    href: '/ui-ux-design',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os01" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Artboard frame */}
        <rect x="4" y="10" width="56" height="44" rx="3" stroke="url(#os01)" opacity="0.6" strokeWidth="1.5" />
        {/* Content blocks */}
        <rect x="10" y="24" width="20" height="10" rx="1.5" stroke="url(#os01)" />
        <rect x="34" y="24" width="20" height="10" rx="1.5" stroke="url(#os01)" />
        <rect x="10" y="38" width="44" height="6" rx="1" stroke="url(#os01)" opacity="0.8" />
        {/* Nav dots */}
        <circle cx="10" cy="16" r="1.5" fill="url(#os01)" />
        <circle cx="16" cy="16" r="1.5" fill="url(#os01)" />
        <circle cx="22" cy="16" r="1.5" fill="url(#os01)" />
        {/* Flow lines */}
        <polyline points="20,29 27,29 27,33" stroke="url(#os01)" strokeWidth="1" />
        <polyline points="34,29 27,29 27,25" stroke="url(#os01)" strokeWidth="1" />
        {/* Cursor */}
        <polygon points="46,12 50,22 54,18 58,24 58,12" stroke="url(#os01)" fill="url(#os01)" fillOpacity="0.15" />
      </svg>
    ),
  },
  {
    num: '02',
    label: ['Brand', 'Identity'],
    href: '/graphics-design',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os02" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Shield body */}
        <path d="M32 6 L54 16 L54 34 C54 46 32 58 32 58 C32 58 10 46 10 34 L10 16 Z" stroke="url(#os02)" />
        {/* Inner star / logo mark */}
        <polygon points="32,22 34.5,28.5 41.5,28.5 36,33 38.5,40 32,36 25.5,40 28,33 22.5,28.5 29.5,28.5" stroke="url(#os02)" strokeWidth="1.2" fill="url(#os02)" fillOpacity="0.12" />
        {/* Accent dots */}
        <circle cx="32" cy="6" r="1.5" fill="url(#os02)" />
        <circle cx="10" cy="16" r="1.5" fill="url(#os02)" />
        <circle cx="54" cy="16" r="1.5" fill="url(#os02)" />
      </svg>
    ),
  },
  {
    num: '03',
    label: ['Social Media', 'Graphics'],
    href: '/graphics-design',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os03" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* 2×2 grid of posts */}
        <rect x="6" y="6" width="24" height="24" rx="3" stroke="url(#os03)" />
        <rect x="34" y="6" width="24" height="24" rx="3" stroke="url(#os03)" />
        <rect x="6" y="34" width="24" height="24" rx="3" stroke="url(#os03)" />
        <rect x="34" y="34" width="24" height="24" rx="3" stroke="url(#os03)" />
        {/* Image placeholder icon in first cell */}
        <circle cx="14" cy="16" r="4" stroke="url(#os03)" strokeWidth="1.2" />
        <polyline points="6,24 12,18 18,22 24,14 30,20" stroke="url(#os03)" strokeWidth="1.2" />
        {/* Like icon */}
        <path d="M40 46 C40 44 42 42 44 44 C46 42 48 44 48 46 C48 49 44 52 44 52 C44 52 40 49 40 46Z" stroke="url(#os03)" strokeWidth="1.2" />
        {/* Corner accent dots */}
        <circle cx="6" cy="6" r="1.5" fill="url(#os03)" />
        <circle cx="58" cy="58" r="1.5" fill="url(#os03)" />
      </svg>
    ),
  },
  {
    num: '04',
    label: ['Motion', 'Graphics'],
    href: '/graphics-design',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os04" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Film frame */}
        <rect x="6" y="10" width="52" height="36" rx="3" stroke="url(#os04)" />
        {/* Sprocket holes */}
        <rect x="6" y="14" width="5" height="5" rx="1" fill="url(#os04)" fillOpacity="0.4" stroke="url(#os04)" strokeWidth="1" />
        <rect x="6" y="26" width="5" height="5" rx="1" fill="url(#os04)" fillOpacity="0.4" stroke="url(#os04)" strokeWidth="1" />
        <rect x="53" y="14" width="5" height="5" rx="1" fill="url(#os04)" fillOpacity="0.4" stroke="url(#os04)" strokeWidth="1" />
        <rect x="53" y="26" width="5" height="5" rx="1" fill="url(#os04)" fillOpacity="0.4" stroke="url(#os04)" strokeWidth="1" />
        {/* Play arrow */}
        <polygon points="26,18 26,38 48,28" stroke="url(#os04)" fill="url(#os04)" fillOpacity="0.15" />
        {/* Bottom motion lines */}
        <line x1="12" y1="52" x2="30" y2="52" stroke="url(#os04)" strokeWidth="2" strokeLinecap="round" />
        <line x1="34" y1="52" x2="44" y2="52" stroke="url(#os04)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="48" y1="52" x2="52" y2="52" stroke="url(#os04)" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      </svg>
    ),
  },
  {
    num: '05',
    label: ['Packaging', 'Design'],
    href: '/graphics-design',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os05" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Box bottom face */}
        <path d="M8 36 L32 48 L56 36 L32 24 Z" stroke="url(#os05)" fill="url(#os05)" fillOpacity="0.06" />
        {/* Box left face */}
        <path d="M8 36 L8 20 L32 8 L32 24 Z" stroke="url(#os05)" fill="url(#os05)" fillOpacity="0.1" />
        {/* Box right face */}
        <path d="M56 36 L56 20 L32 8 L32 24 Z" stroke="url(#os05)" fill="url(#os05)" fillOpacity="0.06" />
        {/* Top open flap lines */}
        <line x1="32" y1="8" x2="32" y2="2" stroke="url(#os05)" strokeDasharray="3 2" />
        <line x1="20" y1="14" x2="14" y2="10" stroke="url(#os05)" strokeDasharray="3 2" opacity="0.6" />
        <line x1="44" y1="14" x2="50" y2="10" stroke="url(#os05)" strokeDasharray="3 2" opacity="0.6" />
        {/* Label stripe on front */}
        <line x1="18" y1="29" x2="30" y2="35" stroke="url(#os05)" strokeWidth="1.2" opacity="0.7" />
        <line x1="18" y1="33" x2="28" y2="38" stroke="url(#os05)" strokeWidth="1.2" opacity="0.5" />
        {/* Accent node */}
        <circle cx="32" cy="24" r="2" fill="url(#os05)" />
      </svg>
    ),
  },
  {
    num: '06',
    label: ['Print', 'Design'],
    href: '/graphics-design',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os06" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        {/* Printer body */}
        <rect x="8" y="22" width="48" height="22" rx="3" stroke="url(#os06)" />
        {/* Paper input slot (top) */}
        <rect x="16" y="8" width="32" height="18" rx="2" stroke="url(#os06)" strokeWidth="1.5" />
        {/* Paper output slot */}
        <rect x="14" y="40" width="36" height="16" rx="2" stroke="url(#os06)" strokeWidth="1.5" />
        {/* Text lines on paper */}
        <line x1="20" y1="46" x2="44" y2="46" stroke="url(#os06)" strokeWidth="1.2" opacity="0.8" />
        <line x1="20" y1="50" x2="38" y2="50" stroke="url(#os06)" strokeWidth="1.2" opacity="0.6" />
        <line x1="20" y1="54" x2="32" y2="54" stroke="url(#os06)" strokeWidth="1.2" opacity="0.4" />
        {/* Status LED */}
        <circle cx="48" cy="31" r="2.5" fill="url(#os06)" />
        {/* Paper in printer line */}
        <line x1="16" y1="34" x2="48" y2="34" stroke="url(#os06)" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        {/* Top corner nodes */}
        <circle cx="8" cy="22" r="1.5" fill="url(#os06)" />
        <circle cx="56" cy="22" r="1.5" fill="url(#os06)" />
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
            <Link key={s.num} to={s.href} className="os__item-link">
              <motion.div
                className="os__item"
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
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
