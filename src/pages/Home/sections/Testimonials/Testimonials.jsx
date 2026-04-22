import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { fadeUp, blurUp, stagger, vp } from '../../../../lib/motion'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    initials: 'SJ',
    quote: 'Hooqx transformed our online presence completely. The results exceeded our expectations.',
    stars: 5,
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, GrowthLab',
    initials: 'ML',
    quote: 'Professional, fast, and incredibly skilled. Our app launched on time and under budget.',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, NovaBrand',
    initials: 'PS',
    quote: 'Their digital marketing team tripled our leads in just three months. Incredible team.',
    stars: 5,
  },
]

const features = [
  'Verified client feedback',
  'Cross-industry success stories',
  'Long-term partnership results',
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4.5 8.2l2.3 2.3 4.7-4.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const cardVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -20, filter: 'blur(4px)', transition: { duration: 0.3 } },
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  const next = useCallback(() => setIdx(i => (i + 1) % testimonials.length), [])
  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  const t = testimonials[idx]

  return (
    <section className="tm-section">
      <div className="tm-blob tm-blob--1" />
      <div className="tm-blob tm-blob--2" />

      <div className="tm-container">

        {/* ── Left: card slider ── */}
        <div className="tm-left">
          <div className="tm-card-track">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                className="tm-card"
                variants={cardVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <span className="tm-quote-mark">&ldquo;</span>
                <p className="tm-quote">{t.quote}</p>

                <div className="tm-author">
                  <div className="tm-avatar">
                    {t.initials}
                    <span className="tm-avatar-dot" />
                  </div>
                  <div>
                    <span className="tm-name">{t.name}</span>
                    <span className="tm-role">{t.role}</span>
                  </div>
                </div>

                <div className="tm-stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="tm-controls">
            <button className="tm-btn" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={18} color="#fff" />
            </button>
            <div className="tm-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`tm-dot${i === idx ? ' tm-dot--active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="tm-btn" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={18} color="#fff" />
            </button>
          </div>
        </div>

        {/* ── Right: heading + features ── */}
        <motion.div
          className="tm-right"
          variants={stagger(0.06, 0.12)}
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
