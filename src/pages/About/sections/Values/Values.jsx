import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Award, Users, Target } from 'lucide-react'
import './Values.css'

const values = [
  {
    num: '01',
    title: 'Innovation',
    desc: 'We push boundaries with cutting-edge technology and creative thinking to deliver solutions that drive real change.',
    icon: Zap,
    color: '#a855f7',
    keyword: 'FUTURE-FIRST',
  },
  {
    num: '02',
    title: 'Excellence',
    desc: 'Every project reflects our commitment to quality, precision, and delivering beyond expectations every single time.',
    icon: Award,
    color: '#00e5ff',
    keyword: 'ZERO-COMPROMISE',
  },
  {
    num: '03',
    title: 'Collaboration',
    desc: 'We believe in strong partnerships, transparent communication, and working hand-in-hand with our clients.',
    icon: Users,
    color: '#e879f9',
    keyword: 'CLIENT-CENTRIC',
  },
  {
    num: '04',
    title: 'Purpose',
    desc: 'We create digital solutions that make a meaningful impact on businesses and the people they serve globally.',
    icon: Target,
    color: '#7c3aed',
    keyword: 'IMPACT-DRIVEN',
  },
]

function ValueRow({ v, index, inView }) {
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      className="val-row"
      style={{ '--val-color': v.color }}
      initial={{ opacity: 0, x: isEven ? -80 : 80, filter: 'blur(12px)' }}
      animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Separator line that draws in */}
      <motion.div
        className="val-row__sep"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Hover glow strip */}
      <motion.div
        className="val-row__glow"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `linear-gradient(90deg, ${v.color}12, ${v.color}06, transparent)` }}
      />

      {/* ── Big Number ── */}
      <div className="val-row__num" style={{ color: v.color }}>
        {v.num}
      </div>

      {/* ── Icon diamond ── */}
      <div className="val-row__icon-wrap">
        <motion.div
          className="val-row__diamond"
          style={{ borderColor: `${v.color}50` }}
          animate={hovered
            ? { boxShadow: `0 0 24px ${v.color}60, 0 0 60px ${v.color}30`, borderColor: v.color }
            : { boxShadow: 'none' }
          }
          transition={{ duration: 0.35 }}
        >
          {React.createElement(v.icon, { size: 22, strokeWidth: 1.6, color: v.color })}
        </motion.div>

        {/* Rotating dashes around diamond */}
        <motion.div
          className="val-row__diamond-ring"
          style={{ borderColor: `${v.color}25` }}
          animate={{ rotate: hovered ? 90 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </div>

      {/* ── Title + keyword ── */}
      <div className="val-row__title-block">
        <motion.h3
          className="val-row__title"
          animate={hovered
            ? { background: `linear-gradient(90deg, ${v.color}, #fff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
            : {}
          }
        >
          {v.title}
        </motion.h3>
        <span className="val-row__keyword" style={{ color: v.color }}>
          <motion.span
            className="val-row__keyword-dot"
            style={{ background: v.color }}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
          {v.keyword}
        </span>
      </div>

      {/* ── Description ── */}
      <p className="val-row__desc">{v.desc}</p>

      {/* ── Arrow indicator ── */}
      <motion.div
        className="val-row__arrow"
        style={{ color: v.color }}
        animate={hovered ? { x: 6, opacity: 1 } : { x: 0, opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        →
      </motion.div>

      {/* Active left bar */}
      <motion.div
        className="val-row__left-bar"
        style={{ background: v.color }}
        animate={hovered ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  )
}

// Need React for createElement
import React from 'react'

export default function Values() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="abt-values" ref={ref}>
      <motion.div className="abt-values__orb abt-values__orb--l"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="abt-values__grid-bg" />

      <div className="abt-values__container">

        {/* Header — left aligned, editorial style */}
        <div className="abt-values__header">
          <motion.span className="abt-values__eyebrow"
            initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span className="abt-values__eyebrow-line"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            What Drives Us
          </motion.span>

          <div className="abt-values__header-row">
            <motion.h2 className="abt-values__heading"
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Our <span className="abt-values__acc">Core</span> Values
            </motion.h2>

            <motion.p className="abt-values__sub"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Four principles encoded into every project, every team member, every decision we make.
            </motion.p>
          </div>
        </div>

        {/* Rows */}
        <div className="abt-values__rows">
          {values.map((v, i) => (
            <ValueRow key={v.title} v={v} index={i} inView={inView} />
          ))}

          {/* Final closing line */}
          <motion.div className="val-row__sep"
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: values.length * 0.14 }}
          />
        </div>
      </div>
    </section>
  )
}
