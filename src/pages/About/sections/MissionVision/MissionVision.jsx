import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Eye, Zap, Globe, Shield, Rocket, Star, TrendingUp } from 'lucide-react'
import './MissionVision.css'

const missionPillars = [
  { icon: Zap,       label: 'Creativity' },
  { icon: TrendingUp, label: 'Growth'    },
  { icon: Shield,    label: 'Integrity'  },
]

const visionPillars = [
  { icon: Globe,  label: 'Global Impact' },
  { icon: Star,   label: 'Excellence'    },
  { icon: Rocket, label: 'Innovation'    },
]

const wordReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}
const wordItem = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function PanelIcon({ Icon, color, delay }) {
  return (
    <div className="mv-icon-wrap">
      {/* Outer orbit ring */}
      <motion.div
        className="mv-icon__orbit mv-icon__orbit--outer"
        style={{ borderColor: `${color}30` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear', delay }}
      >
        <motion.span
          className="mv-icon__orbit-dot"
          style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        />
      </motion.div>

      {/* Inner orbit ring */}
      <motion.div
        className="mv-icon__orbit mv-icon__orbit--inner"
        style={{ borderColor: `${color}20` }}
        animate={{ rotate: -360 }}
        transition={{ duration: 9, repeat: Infinity, ease: 'linear', delay: delay + 1 }}
      >
        <motion.span
          className="mv-icon__orbit-dot mv-icon__orbit-dot--small"
          style={{ background: color }}
        />
      </motion.div>

      {/* Pulse rings */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="mv-icon__pulse"
          style={{ borderColor: color }}
          animate={{ scale: [1, 1.8, 2.2], opacity: [0.6, 0.2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 1.25, ease: 'easeOut' }}
        />
      ))}

      {/* Core */}
      <motion.div
        className="mv-icon__core"
        style={{ background: `radial-gradient(circle, ${color}22, ${color}08)`, borderColor: `${color}40` }}
        animate={{ boxShadow: [`0 0 20px ${color}30`, `0 0 40px ${color}60`, `0 0 20px ${color}30`] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon size={30} style={{ color }} strokeWidth={1.5} />
      </motion.div>
    </div>
  )
}

function Panel({ side, icon: Icon, color, title, body, pillars, inView }) {
  const fromX = side === 'left' ? -280 : 280
  const words = title.split(' ')

  return (
    <motion.div
      className={`mv-panel mv-panel--${side}`}
      style={{ '--panel-color': color }}
      initial={{ opacity: 0, x: fromX, filter: 'blur(20px)' }}
      animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: side === 'left' ? 0.1 : 0.25 }}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 180, damping: 20 } }}
    >
      {/* Corner brackets */}
      <span className="mv-panel__corner mv-panel__corner--tl" />
      <span className="mv-panel__corner mv-panel__corner--br" />

      {/* Scan line on entry */}
      {inView && (
        <motion.div
          className="mv-panel__scan"
          style={{ background: `linear-gradient(180deg, transparent, ${color}60, transparent)` }}
          initial={{ top: '-100%' }}
          animate={{ top: '120%' }}
          transition={{ duration: 1.1, delay: side === 'left' ? 0.3 : 0.45, ease: 'easeOut' }}
        />
      )}

      {/* Grid texture */}
      <div className="mv-panel__grid" />

      {/* Icon */}
      <PanelIcon Icon={Icon} color={color} delay={side === 'left' ? 0 : 0.5} />

      {/* Title word by word */}
      <motion.h3
        className="mv-panel__title"
        variants={wordReveal}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        style={{ '--panel-color': color }}
      >
        {words.map((w, i) => (
          <motion.span key={i} variants={wordItem} style={{ display: 'inline-block', marginRight: '0.3em' }}>
            {w}
          </motion.span>
        ))}
      </motion.h3>

      {/* Body */}
      <motion.p
        className="mv-panel__body"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: side === 'left' ? 0.55 : 0.7, ease: 'easeOut' }}
      >
        {body}
      </motion.p>

      {/* Pillars */}
      <div className="mv-panel__pillars">
        {pillars.map((p, i) => {
          const PIcon = p.icon
          return (
            <motion.div
              key={p.label}
              className="mv-panel__pillar"
              initial={{ opacity: 0, scale: 0.7, x: side === 'left' ? -20 : 20 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: (side === 'left' ? 0.7 : 0.85) + i * 0.1, type: 'spring', stiffness: 220 }}
            >
              <PIcon size={13} style={{ color }} />
              {p.label}
            </motion.div>
          )
        })}
      </div>

      {/* Bottom glow bar */}
      <motion.div
        className="mv-panel__bar"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: side === 'left' ? 0.4 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}

export default function MissionVision() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="abt-mv" ref={ref}>
      {/* Ambient orbs */}
      <motion.div className="abt-mv__orb abt-mv__orb--l"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="abt-mv__orb abt-mv__orb--r"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <div className="abt-mv__grid-bg" />

      <div className="abt-mv__container">

        {/* Header */}
        <motion.div
          className="abt-mv__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="abt-mv__eyebrow">
            <motion.span
              className="abt-mv__eyebrow-line"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            Our Foundation
          </span>
          <h2 className="abt-mv__heading">
            Where <span className="abt-mv__heading-accent">Purpose</span> Meets <span className="abt-mv__heading-accent2">Direction</span>
          </h2>
          <p className="abt-mv__sub">
            Two pillars that define everything we build, every decision we make, and every client we serve.
          </p>
        </motion.div>

        {/* Dual panel layout */}
        <div className="abt-mv__duel">
          <Panel
            side="left"
            icon={Target}
            color="#a855f7"
            title="Our Mission"
            body="To empower businesses through creativity, technology, and data-driven insights. We're committed to delivering measurable growth by building digital solutions that solve real problems and unlock new opportunities for every client we serve."
            pillars={missionPillars}
            inView={inView}
          />

          {/* Center energy connector */}
          <div className="abt-mv__connector">
            <motion.div
              className="abt-mv__connector-line"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Travelling dot on the line */}
            {inView && (
              <motion.div
                className="abt-mv__connector-traveller"
                animate={{ top: ['10%', '88%', '10%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              />
            )}

            <motion.div
              className="abt-mv__connector-badge"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.9 }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ display: 'block', fontSize: '1.2rem' }}
              >
                ✦
              </motion.span>
            </motion.div>
          </div>

          <Panel
            side="right"
            icon={Eye}
            color="#00e5ff"
            title="Our Vision"
            body="To be a catalyst for transformative digital experiences that enable brands to captivate, connect, and conquer digitally. We aspire to be the most trusted global digital partner, recognized for excellence and lasting impact."
            pillars={visionPillars}
            inView={inView}
          />
        </div>
      </div>
    </section>
  )
}
