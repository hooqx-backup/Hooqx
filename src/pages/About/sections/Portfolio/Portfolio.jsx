import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import portfolio1 from '../../../../assets/images/service_sm_01.jpg'
import portfolio2 from '../../../../assets/images/service_sm_02.jpg'
import portfolio3 from '../../../../assets/images/service_sm_03.jpg'
import './Portfolio.css'

const projects = [
  {
    img: portfolio1,
    title: 'Nexus Dashboard',
    category: 'Web Development',
    tag: 'UI/UX · React',
    desc: 'A real-time analytics platform built for a Fortune 500 fintech company.',
    color: '#a855f7',
    year: '2024',
  },
  {
    img: portfolio2,
    title: 'Quantum Campaign',
    category: 'Digital Marketing',
    tag: 'SEO · Performance',
    desc: '340% traffic growth in 90 days for a Dubai-based e-commerce brand.',
    color: '#00e5ff',
    year: '2024',
  },
  {
    img: portfolio3,
    title: 'Orbit Identity',
    category: 'Branding & UI/UX',
    tag: 'Brand · Motion',
    desc: 'Full brand identity and design system for a SaaS startup in Frankfurt.',
    color: '#e879f9',
    year: '2023',
  },
]

const INTERVAL = 4000

function SlideCard({ project, position, onClick }) {
  // position: -1 (left), 0 (center), 1 (right), 2+ (hidden)
  const isCenter = position === 0
  const isVisible = Math.abs(position) <= 1

  const transforms = {
    [-1]: { x: '-68%', scale: 0.78, rotateY: 18, z: -120, opacity: 0.55 },
    [0]:  { x: '0%',   scale: 1,    rotateY: 0,  z: 0,    opacity: 1    },
    [1]:  { x: '68%',  scale: 0.78, rotateY: -18, z: -120, opacity: 0.55 },
  }

  const t = transforms[position] || { x: position < 0 ? '-110%' : '110%', scale: 0.6, rotateY: position < 0 ? 30 : -30, z: -200, opacity: 0 }

  return (
    <motion.div
      className={`abt-pf-card ${isCenter ? 'abt-pf-card--active' : ''}`}
      style={{ '--card-color': project.color }}
      animate={{ x: t.x, scale: t.scale, rotateY: t.rotateY, z: t.z, opacity: t.opacity }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => !isCenter && onClick()}
      whileHover={isCenter ? { y: -6, transition: { type: 'spring', stiffness: 200, damping: 20 } } : {}}
    >
      {/* Image */}
      <div className="abt-pf-card__img-wrap">
        <motion.img
          src={project.img}
          alt={project.title}
          animate={isCenter ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.65 }}
        />

        {/* Overlay — only on active */}
        {isCenter && (
          <div className="abt-pf-card__overlay">
            <div className="abt-pf-card__overlay-top">
              <span className="abt-pf-card__tag" style={{ borderColor: `${project.color}60`, color: project.color }}>
                {project.tag}
              </span>
              <span className="abt-pf-card__year">{project.year}</span>
            </div>
            <div className="abt-pf-card__overlay-bottom">
              <div>
                <p className="abt-pf-card__category">{project.category}</p>
                <h3 className="abt-pf-card__title">{project.title}</h3>
                <p className="abt-pf-card__desc">{project.desc}</p>
              </div>
              <motion.button
                className="abt-pf-card__cta"
                style={{ background: project.color }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
                View Project
              </motion.button>
            </div>
          </div>
        )}

        {/* Glow border on active */}
        {isCenter && (
          <motion.div
            className="abt-pf-card__glow-border"
            style={{ borderColor: project.color, boxShadow: `0 0 30px ${project.color}40, inset 0 0 30px ${project.color}08` }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef(null)
  const progRef = useRef(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const total = projects.length

  const next = useCallback(() => {
    setActive((a) => (a + 1) % total)
    setProgress(0)
  }, [total])

  const prev = useCallback(() => {
    setActive((a) => (a - 1 + total) % total)
    setProgress(0)
  }, [total])

  // Auto-play
  useEffect(() => {
    if (paused) return
    progRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { next(); return 0 }
        return p + 100 / (INTERVAL / 50)
      })
    }, 50)
    return () => clearInterval(progRef.current)
  }, [paused, next])

  // Keyboard nav
  useEffect(() => {
    const handle = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [next, prev])

  return (
    <section className="abt-portfolio" ref={ref}>
      <motion.div className="abt-portfolio__orb abt-portfolio__orb--l"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="abt-portfolio__orb abt-portfolio__orb--r"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <div className="abt-portfolio__grid-bg" />

      <div className="abt-portfolio__container">

        {/* Header */}
        <motion.div
          className="abt-portfolio__header"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="abt-portfolio__eyebrow">
            <motion.span className="abt-portfolio__eyebrow-line"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            Our Work
          </span>
          <h2 className="abt-portfolio__heading">
            Projects We're <span className="abt-portfolio__heading-acc">Proud Of</span>
          </h2>
          <p className="abt-portfolio__sub">
            A glimpse into the digital experiences we've crafted for clients worldwide.
          </p>
        </motion.div>

        {/* Carousel stage */}
        <motion.div
          className="abt-portfolio__stage"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ perspective: 1200 }}
        >
          <div className="abt-portfolio__track">
            {projects.map((p, i) => {
              const pos = ((i - active + total) % total <= total / 2)
                ? (i - active + total) % total
                : (i - active + total) % total - total
              return (
                <SlideCard
                  key={p.title}
                  project={p}
                  position={pos}
                  onClick={() => setActive(i)}
                />
              )
            })}
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="abt-portfolio__controls"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Prev */}
          <motion.button className="abt-portfolio__btn" onClick={prev}
            whileHover={{ scale: 1.1, x: -3 }} whileTap={{ scale: 0.93 }}
          >
            <ArrowLeft size={18} />
          </motion.button>

          {/* Dot indicators + progress */}
          <div className="abt-portfolio__dots">
            {projects.map((p, i) => (
              <button
                key={i}
                className={`abt-portfolio__dot ${i === active ? 'abt-portfolio__dot--active' : ''}`}
                onClick={() => { setActive(i); setProgress(0) }}
                style={{ '--dot-color': p.color }}
              >
                {i === active && (
                  <motion.span
                    className="abt-portfolio__dot-fill"
                    style={{ background: p.color }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: progress / 100 }}
                    transition={{ duration: 0, ease: 'linear' }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Next */}
          <motion.button className="abt-portfolio__btn" onClick={next}
            whileHover={{ scale: 1.1, x: 3 }} whileTap={{ scale: 0.93 }}
          >
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>

        {/* Project counter */}
        <div className="abt-portfolio__counter">
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              className="abt-portfolio__counter-num"
              style={{ color: projects[active].color }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {String(active + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <span className="abt-portfolio__counter-sep">/</span>
          <span className="abt-portfolio__counter-total">{String(total).padStart(2, '0')}</span>
        </div>

      </div>
    </section>
  )
}
