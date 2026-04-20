import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, blurUp, stagger, vp } from '../../../../lib/motion'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    quote: 'Hooqx transformed our online presence completely. The results exceeded our expectations.',
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, GrowthLab',
    quote: 'Professional, fast, and incredibly skilled. Our app launched on time and under budget.',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, NovaBrand',
    quote: 'Their digital marketing team tripled our leads in just three months. Incredible team.',
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

// Cards cascade in with blur and upward motion, each with increasing delay
const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 56, filter: 'blur(8px)', scale: 0.96 },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)', scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  },
})

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">

        <motion.div
          className="testimonials__header"
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
