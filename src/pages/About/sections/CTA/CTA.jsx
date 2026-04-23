import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, Zap, Globe, Star, Clock } from 'lucide-react'
import './CTA.css'

const WORDS_LINE1 = ['Ready', 'to', 'Transform']
const WORDS_LINE2 = ['Your', 'Digital', 'Future?']

const TRUST = [
  { icon: Clock, text: '24h Response'  },
  { icon: Globe, text: 'Global Team'   },
  { icon: Star,  text: '5-Star Rated'  },
  { icon: Zap,   text: 'Fast Delivery' },
]

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1 + Math.random() * 2.5,
  dur: 4 + Math.random() * 7,
  delay: Math.random() * 5,
  opacity: 0.15 + Math.random() * 0.5,
}))

const wordVariant = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [primaryHovered, setPrimaryHovered] = useState(false)

  return (
    <section id="contact" className="abt-cta" ref={ref}>

      {/* Perspective grid floor */}
      <div className="abt-cta__floor" />

      {/* Ambient orbs */}
      <motion.div className="abt-cta__orb abt-cta__orb--l"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="abt-cta__orb abt-cta__orb--r"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Floating particles */}
      <div className="abt-cta__particles" aria-hidden>
        {PARTICLES.map((p) => (
          <motion.span key={p.id} className="abt-cta__particle"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, opacity: p.opacity }}
            animate={{ y: [-12, 12, -12], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Corner HUD brackets */}
      <span className="abt-cta__hud abt-cta__hud--tl" />
      <span className="abt-cta__hud abt-cta__hud--tr" />
      <span className="abt-cta__hud abt-cta__hud--bl" />
      <span className="abt-cta__hud abt-cta__hud--br" />

      <div className="abt-cta__inner">

        {/* Energy portal orb */}
        <div className="abt-cta__portal">
          {[0, 1, 2, 3].map((i) => (
            <motion.div key={i} className="abt-cta__portal-ring"
              animate={{ scale: [1, 1.4 + i * 0.25, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeOut', delay: i * 0.6 }}
              style={{ '--pr-i': i }}
            />
          ))}
          <motion.div className="abt-cta__portal-core"
            animate={{ boxShadow: [
              '0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.3)',
              '0 0 70px rgba(168,85,247,0.9), 0 0 140px rgba(0,229,255,0.4)',
              '0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.3)',
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div className="abt-cta__portal-inner"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>

        {/* Heading — word by word */}
        <motion.div className="abt-cta__heading-wrap"
          initial="hidden" animate={inView ? 'show' : 'hidden'}
        >
          <h2 className="abt-cta__heading">
            <span className="abt-cta__heading-line">
              {WORDS_LINE1.map((w, i) => (
                <motion.span key={w} custom={i} variants={wordVariant}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}>
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="abt-cta__heading-line abt-cta__heading-line--accent">
              {WORDS_LINE2.map((w, i) => (
                <motion.span key={w} custom={i + WORDS_LINE1.length} variants={wordVariant}
                  style={{ display: 'inline-block', marginRight: '0.25em' }}>
                  {w}
                </motion.span>
              ))}
            </span>
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p className="abt-cta__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          Let's collaborate and create something extraordinary together.
          Your vision, our expertise — unstoppable results.
        </motion.p>

        {/* Buttons */}
        <motion.div className="abt-cta__btns"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a href="/contact" className="abt-cta__btn abt-cta__btn--primary"
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          >
            <span className="abt-cta__btn-shimmer" />
            <ArrowRight size={17} />
            Get in Touch
          </motion.a>

          <motion.a href="tel:+14703809098" className="abt-cta__btn abt-cta__btn--secondary"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
          >
            <Phone size={16} />
            Call Us Now
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div className="abt-cta__trust"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          {TRUST.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div key={t.text} className="abt-cta__trust-item"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 1.05 + i * 0.1 }}
              >
                <Icon size={13} />
                {t.text}
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
