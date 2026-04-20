import { motion } from 'framer-motion'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import './ServicesStrip.css'

const services = [
  {
    num: '01',
    label: ['Web', 'Development'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="sg01" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <rect x="4" y="10" width="56" height="38" rx="3" stroke="url(#sg01)" />
        <line x1="4" y1="20" x2="60" y2="20" stroke="url(#sg01)" />
        <circle cx="11" cy="15" r="2" stroke="url(#sg01)" />
        <circle cx="19" cy="15" r="2" stroke="url(#sg01)" />
        <circle cx="27" cy="15" r="2" stroke="url(#sg01)" />
        <line x1="22" y1="48" x2="22" y2="56" stroke="url(#sg01)" />
        <line x1="42" y1="48" x2="42" y2="56" stroke="url(#sg01)" />
        <line x1="14" y1="56" x2="50" y2="56" stroke="url(#sg01)" />
        <rect x="14" y="28" width="16" height="12" rx="1" stroke="url(#sg01)" />
        <line x1="36" y1="28" x2="52" y2="28" stroke="url(#sg01)" />
        <line x1="36" y1="34" x2="52" y2="34" stroke="url(#sg01)" />
        <line x1="36" y1="40" x2="46" y2="40" stroke="url(#sg01)" />
      </svg>
    ),
  },
  {
    num: '02',
    label: ['App', 'Development'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="sg02" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <rect x="14" y="4" width="28" height="48" rx="4" stroke="url(#sg02)" />
        <line x1="14" y1="12" x2="42" y2="12" stroke="url(#sg02)" />
        <line x1="14" y1="44" x2="42" y2="44" stroke="url(#sg02)" />
        <circle cx="28" cy="50" r="1.5" stroke="url(#sg02)" />
        <circle cx="28" cy="26" r="10" stroke="url(#sg02)" />
        <polyline points="22,26 27,31 36,20" stroke="url(#sg02)" />
      </svg>
    ),
  },
  {
    num: '03',
    label: ['Digital', 'Marketing'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="sg03" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <path d="M32 8 A24 24 0 1 1 8 32" stroke="url(#sg03)" />
        <path d="M32 8 L32 32 L8 32" stroke="url(#sg03)" />
        <line x1="8" y1="52" x2="20" y2="40" stroke="url(#sg03)" />
        <line x1="22" y1="52" x2="28" y2="44" stroke="url(#sg03)" />
        <line x1="36" y1="52" x2="36" y2="42" stroke="url(#sg03)" />
        <line x1="50" y1="52" x2="44" y2="38" stroke="url(#sg03)" />
        <line x1="4" y1="54" x2="60" y2="54" stroke="url(#sg03)" />
      </svg>
    ),
  },
  {
    num: '04',
    label: ['Software', 'Development'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="sg04" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="20" r="10" stroke="url(#sg04)" />
        <circle cx="32" cy="20" r="3" stroke="url(#sg04)" />
        <path d="M14 54 C14 42 50 42 50 54" stroke="url(#sg04)" />
        <rect x="24" y="30" width="16" height="10" rx="1" stroke="url(#sg04)" />
        <line x1="30" y1="16" x2="30" y2="24" stroke="url(#sg04)" />
        <line x1="34" y1="16" x2="34" y2="24" stroke="url(#sg04)" />
        <polyline points="26,18 22,20 26,22" stroke="url(#sg04)" />
        <polyline points="38,18 42,20 38,22" stroke="url(#sg04)" />
      </svg>
    ),
  },
  {
    num: '05',
    label: ['UI / UX', 'Design'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="sg05" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="22" r="8" stroke="url(#sg05)" />
        <circle cx="44" cy="22" r="8" stroke="url(#sg05)" />
        <circle cx="32" cy="22" r="5" stroke="url(#sg05)" />
        <path d="M6 52 C6 40 34 40 34 52" stroke="url(#sg05)" />
        <path d="M30 52 C30 40 58 40 58 52" stroke="url(#sg05)" />
        <line x1="20" y1="30" x2="20" y2="34" stroke="url(#sg05)" />
        <line x1="44" y1="30" x2="44" y2="34" stroke="url(#sg05)" />
      </svg>
    ),
  },
  {
    num: '06',
    label: ['IT', 'Services'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="sg06" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="24" height="24" rx="2" stroke="url(#sg06)" />
        <circle cx="32" cy="32" r="6" stroke="url(#sg06)" />
        <line x1="32" y1="4" x2="32" y2="14" stroke="url(#sg06)" />
        <line x1="32" y1="50" x2="32" y2="60" stroke="url(#sg06)" />
        <line x1="4" y1="32" x2="14" y2="32" stroke="url(#sg06)" />
        <line x1="50" y1="32" x2="60" y2="32" stroke="url(#sg06)" />
        <line x1="10" y1="10" x2="18" y2="18" stroke="url(#sg06)" />
        <line x1="46" y1="46" x2="54" y2="54" stroke="url(#sg06)" />
        <line x1="54" y1="10" x2="46" y2="18" stroke="url(#sg06)" />
        <line x1="18" y1="46" x2="10" y2="54" stroke="url(#sg06)" />
      </svg>
    ),
  },
]

// Each item fans in from below with a slight upward arc + tiny rotation
const itemVariant = {
  hidden: { opacity: 0, y: 40, rotate: -4, scale: 0.92 },
  show: {
    opacity: 1, y: 0, rotate: 0, scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 22 },
  },
}

export default function ServicesStrip() {
  return (
    <section className="sstrip">
      <div className="sstrip__inner">
        <motion.div
          className="sstrip__inner"
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
          style={{ display: 'contents' }}
        >
          {services.map((s) => (
            <motion.div className="sstrip__item" key={s.num} variants={itemVariant}>
              <span className="sstrip__num">{s.num}</span>
              <div className="sstrip__icon">{s.icon}</div>
              <p className="sstrip__label">
                {s.label.map((line, i) => <span key={i}>{line}</span>)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
