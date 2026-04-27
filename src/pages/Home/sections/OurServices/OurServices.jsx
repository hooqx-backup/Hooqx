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

      {/* --- The Megaphone --- */}
      {/* Handle */}
      <rect x="14" y="38" width="6" height="12" rx="1.5" transform="rotate(-15 14 38)" stroke="url(#os03)" />
      
      {/* Main Body */}
      <path d="M14 34 L32 24 L32 44 L14 34" stroke="url(#os03)" fill="url(#os03)" fillOpacity="0.1" />
      
      {/* The Cone Front (The big circular part) */}
      <ellipse cx="36" cy="34" rx="6" ry="14" stroke="url(#os03)" strokeWidth="2" />
      
      {/* Internal Grid/Data lines inside the cone */}
      <path d="M34 26 C38 26 40 30 40 34 C40 38 38 42 34 42" stroke="url(#os03)" strokeWidth="1" opacity="0.6" />

      {/* --- Social Media / Digital "Particles" --- */}
      {/* Floating squares representing icons */}
      <rect x="46" y="14" width="6" height="6" rx="1" stroke="url(#os03)" strokeWidth="1.2" />
      <rect x="54" y="24" width="5" height="5" rx="1" stroke="url(#os03)" strokeWidth="1" opacity="0.8" />
      <rect x="48" y="38" width="5" height="5" rx="1" stroke="url(#os03)" strokeWidth="1" />
      <rect x="56" y="44" width="4" height="4" rx="1" stroke="url(#os03)" strokeWidth="1" opacity="0.6" />

      {/* --- Data Growth (Bar chart style inside the blast) --- */}
      <line x1="42" y1="34" x2="52" y2="34" stroke="url(#os03)" strokeWidth="1" strokeDasharray="2 2" />
      <polyline points="42,30 46,26 50,28 54,22" stroke="url(#os03)" strokeWidth="1.5" />

      {/* Tiny "sparkle" dots */}
      <circle cx="58" cy="18" r="1" fill="url(#os03)" />
      <circle cx="42" cy="50" r="1" fill="url(#os03)" />
      <circle cx="52" cy="10" r="0.8" fill="url(#os03)" opacity="0.5" />

      {/* Connection dots */}
      <circle cx="32" cy="24" r="1.5" fill="url(#os03)" />
      <circle cx="32" cy="44" r="1.5" fill="url(#os03)" />
    </svg>
  ),
},
 {
  num: '04',
  label: ['Software', 'Development'],
  icon: (
    <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <defs>
        <linearGradient id="os04" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#00e5ff" />
        </linearGradient>
      </defs>

      {/* Terminal Window Border */}
      <rect x="6" y="10" width="52" height="40" rx="4" stroke="url(#os04)" />
      
      {/* Top bar of the window */}
      <line x1="6" y1="20" x2="58" y2="20" stroke="url(#os04)" strokeWidth="1.5" />
      
      {/* Code Brackets */}
      <polyline points="16,30 10,35 16,40" stroke="url(#os04)" />
      <polyline points="30,30 36,35 30,40" stroke="url(#os04)" />
      <line x1="20" y1="42" x2="26" y2="28" stroke="url(#os04)" />

      {/* Console Cursor / Underscore */}
      <line x1="42" y1="40" x2="50" y2="40" stroke="url(#os04)" strokeWidth="3" opacity="0.8" />

      {/* Connection Nodes (System Logic) */}
      <circle cx="50" cy="28" r="2.5" fill="url(#os04)" />
      <path d="M50 30.5 L50 48 L40 56" stroke="url(#os04)" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="40" cy="56" r="2.5" stroke="url(#os04)" />

      {/* Decorative Binary/Logic dots */}
      <circle cx="12" y="15" r="1" fill="url(#os04)" />
      <circle cx="18" y="15" r="1" fill="url(#os04)" />
      <circle cx="24" y="15" r="1" fill="url(#os04)" />
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

        {/* --- Back Layer: The Screen Structure --- */}
        {/* Main large "container" or artboard */}
        <rect x="4" y="10" width="56" height="44" rx="3" stroke="url(#os05)" opacity="0.6" strokeWidth="1.5"/>
        {/* Content blocks */}
        <rect x="10" y="24" width="20" height="10" rx="1.5" stroke="url(#os05)"/>
        <rect x="34" y="24" width="20" height="10" rx="1.5" stroke="url(#os05)"/>
        {/* Secondary blocks */}
        <rect x="10" y="38" width="44" height="6" rx="1" stroke="url(#os05)" opacity="0.8"/>
        {/* Top/Header navigation dots */}
        <circle cx="10" y="16" r="1.5" stroke="url(#os05)" strokeWidth="1.2"/>
        <circle cx="16" y="16" r="1.5" stroke="url(#os05)" strokeWidth="1.2"/>
        <circle cx="22" y="16" r="1.5" stroke="url(#os05)" strokeWidth="1.2"/>

        {/* --- Middle Layer: UX Logic / Flow --- */}
        {/* Connection flow lines between components */}
        <polyline points="20,29 27,29 27,33" stroke="url(#os05)" strokeWidth="1"/>
        <polyline points="34,29 27,29 27,25" stroke="url(#os05)" strokeWidth="1"/>
        {/* Dashed line representing hierarchy */}
        <line x1="56" y1="20" x2="56" y2="44" stroke="url(#os05)" strokeWidth="1" strokeDasharray="3 3"/>

        {/* --- Front Layer: Interaction --- */}
        {/* Cursor/Pointer (dynamic click arrow) */}
        <polygon points="46,12 50,22 54,18 60,24 60,12" stroke="url(#os05)" fill="url(#os05)" opacity="0.9"/>
        {/* Visual feedback circle (ripple effect) */}
        <circle cx="27" y="29" r="6" stroke="url(#os05)" strokeWidth="1" strokeDasharray="2 2" opacity="0.7"/>

        {/* Final Accent Star - preserved from original as quality mark, integrated into a visual grid spot */}
        <polygon points="56,12 56.6,13.8 58.5,13.8 57,14.9 57.6,16.7 56,15.6 54.4,16.7 55,14.9 53.5,13.8 55.4,13.8" stroke="url(#os05)" strokeWidth="0.8" opacity="0.8"/>

      </svg>
    ),
  },
  {
    num: '06',
    label: ['IT', 'Services'],
    icon: (
      <svg viewBox="0 0 64 64" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="os06" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>

        {/* Server Rack / Main Frame */}
        <rect x="14" y="10" width="36" height="44" rx="3" stroke="url(#os06)" />
        
        {/* Horizontal Server Units */}
        <line x1="20" y1="20" x2="44" y2="20" stroke="url(#os06)" strokeWidth="1.5" />
        <line x1="20" y1="32" x2="44" y2="32" stroke="url(#os06)" strokeWidth="1.5" />
        <line x1="20" y1="44" x2="44" y2="44" stroke="url(#os06)" strokeWidth="1.5" />

        {/* LED Indicators on the server */}
        <circle cx="18" cy="20" r="1" fill="url(#os06)" />
        <circle cx="18" cy="32" r="1" fill="url(#os06)" />
        <circle cx="18" cy="44" r="1" fill="url(#os06)" />

        {/* Outer Connection "Cloud/Network" Lines */}
        {/* Left Side Path */}
        <path d="M14 26 L6 26 L6 38 L14 38" stroke="url(#os06)" strokeWidth="1.5" opacity="0.6" />
        <circle cx="6" cy="32" r="2" stroke="url(#os06)" />

        {/* Right Side Path */}
        <path d="M50 26 L58 26 L58 38 L50 38" stroke="url(#os06)" strokeWidth="1.5" opacity="0.6" />
        <circle cx="58" cy="32" r="2" stroke="url(#os06)" />

        {/* Top Antenna/Signal Pulse */}
        <path d="M26 10 C26 4 38 4 38 10" stroke="url(#os06)" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="32" cy="4" r="1.5" fill="url(#os06)" />

        {/* Security / System Shield element (Center) */}
        <path d="M32 26 L36 28 L36 32 C36 34 32 36 32 36 C32 36 28 34 28 32 L28 28 L32 26Z" stroke="url(#os06)" strokeWidth="1" />
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
