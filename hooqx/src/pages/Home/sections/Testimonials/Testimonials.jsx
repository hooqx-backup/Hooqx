import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, blurUp, stagger, vp } from '../../../../lib/motion'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Daniel W.',
    role: 'Brand Manager, PixelEdge',
    initials: 'DW',
    quote:
      'Hooqx flawlessly executed our digital campaign, seamlessly translating our brand\'s identity into success. Their attention to detail surpassed our goals, and we\'re eager to continue with them.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    initials: 'SJ',
    quote:
      'From concept to launch the team was exceptional. They delivered a product that exceeded every benchmark we set — on time, on budget, and beyond expectation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcus Lee',
    role: 'Founder, GrowthLab',
    initials: 'ML',
    quote:
      'Professional, fast, and incredibly skilled. Our app launched ahead of schedule. Communication was seamless throughout and the quality speaks for itself.',
    rating: 5,
  },
]

const features = [
  'Customer Satisfaction Survey Results',
  'Customer Reviews: What They\'re Saying',
  'Feedback From Our Valued Customers',
  'Customer Voices Guiding Our Success',
]

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="10" fill="rgba(52,211,153,0.15)" />
    <circle cx="10" cy="10" r="9" stroke="#34d399" strokeWidth="1" />
    <polyline points="6,10 9,13 14,7" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
)

const StarIcon = ({ filled }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6L8 1z"
      fill={filled ? '#f59e0b' : 'rgba(245,158,11,0.25)'}
    />
  </svg>
)

export default function Testimonials() {
  const [idx, setIdx]   = useState(0)
  const [dir, setDir]   = useState(1)
  const [pause, setPause] = useState(false)

  const next = useCallback(() => {
    setDir(1)
    setIdx(i => (i + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDir(-1)
    setIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (pause) return
    const t = setTimeout(next, 5000)
    return () => clearTimeout(t)
  }, [idx, pause, next])

  const slide = {
    enter:  (d) => ({ x: d * 70, opacity: 0, filter: 'blur(8px)' }),
    center: { x: 0, opacity: 1, filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit:   (d) => ({ x: d * -70, opacity: 0, filter: 'blur(8px)',
      transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }),
  }

  const current = testimonials[idx]

  return (
    <section
      className="tm-section"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* bg blobs */}
      <div className="tm-blob tm-blob--1" aria-hidden="true" />
      <div className="tm-blob tm-blob--2" aria-hidden="true" />

      <div className="tm-container">

        {/* ── Left: slider ── */}
        <div className="tm-left">
          <div className="tm-card-track">
            <AnimatePresence custom={dir} mode="wait">
              <motion.div
                key={current.id}
                className="tm-card"
                custom={dir}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* quote mark */}
                <span className="tm-quote-mark" aria-hidden="true">"</span>

                <p className="tm-quote">{current.quote}</p>

                <div className="tm-author">
                  <div className="tm-avatar">
                    <span>{current.initials}</span>
                    <span className="tm-avatar-dot" />
                  </div>
                  <div className="tm-author-info">
                    <strong className="tm-name">{current.name}</strong>
                    <span className="tm-role">{current.role}</span>
                  </div>
                </div>

                <div className="tm-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < current.rating} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="tm-controls">
            <button className="tm-btn" onClick={prev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <polyline points="11,4 6,9 11,14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="tm-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`tm-dot${i === idx ? ' tm-dot--active' : ''}`}
                  onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i) }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="tm-btn" onClick={next} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <polyline points="7,4 12,9 7,14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* ── Right: header + features ── */}
        <motion.div
          className="tm-right"
          variants={stagger(0, 0.13)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.p className="tm-eyebrow" variants={fadeUp}>
            <span className="tm-eyebrow-line" />
            Word on the (Digital) Street
          </motion.p>

          <motion.h2 className="tm-title" variants={blurUp}>
            Byte-Sized Love:<br />
            <em className="tm-title-accent">Testimonials</em> Edition
          </motion.h2>

          <motion.ul className="tm-features" variants={stagger(0, 0.1)}>
            {features.map((f, i) => (
              <motion.li key={i} className="tm-feature" variants={fadeUp}>
                <CheckIcon />
                <span>{f}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

      </div>
    </section>
  )
}
