import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroBg from '../../../../assets/images/herobannerimage1.jpg'
import heroBg2 from '../../../../assets/images/herobannerimag2.jpg'
import './Hero.css'

const HEADING_WORDS = [
  { text: 'Beyond', accent: false },
  { text: 'the', accent: false },
  { text: 'Hook:', accent: false },
  { text: 'Discovering', accent: true },
  { text: 'the', accent: true },
  { text: 'Depths', accent: true },
  { text: 'of', accent: false },
  { text: "Hooqx's", accent: false },
  { text: 'Mission', accent: false },
]

const wordVariant = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
}

const lineVariant = {
  hidden: { scaleX: 0, originX: 0 },
  show: { scaleX: 1, originX: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const eyebrowVariant = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeUpItem = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
})

const clipReveal = (delay = 0) => ({
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  show: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
})

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 1.5 + Math.random() * 2.5,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 4,
}))

function ImageTiltCard({ className, src, alt, clipDelay, badge }) {
  const cardRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 120, damping: 20 })
  const springY = useSpring(my, { stiffness: 120, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const handleMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      className={className}
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: clipDelay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMove}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
    >
      <img src={src} alt={alt} />
      {badge && <div className="abt-hero__img-badge">{badge}</div>}
      <div className="abt-hero__img-shine" />
    </motion.div>
  )
}

export default function AboutHero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const imagesY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section className="abt-hero" ref={sectionRef}>
      {/* Animated blobs */}
      <motion.div className="abt-hero__blob abt-hero__blob--left" style={{ y: blobY1 }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="abt-hero__blob abt-hero__blob--right" style={{ y: blobY2 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Grid */}
      <div className="abt-hero__grid" />

      {/* Floating particles */}
      <div className="abt-hero__particles" aria-hidden>
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="abt-hero__particle"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [-10, 10, -10], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content + Images */}
      <div className="abt-hero__container">
      <div className="abt-hero__content">
        <motion.span
          className="abt-hero__eyebrow"
          variants={eyebrowVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span
            className="abt-hero__eyebrow-line"
            variants={lineVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <Sparkles size={12} style={{ opacity: 0.8 }} />
          Who We Are
        </motion.span>

        <h1 className="abt-hero__heading">
          {HEADING_WORDS.map((w, i) => (
            <motion.span
              key={i}
              className={w.accent ? 'abt-hero__heading-accent' : ''}
              custom={i}
              variants={wordVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {w.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="abt-hero__sub"
          variants={fadeUpItem(0.55)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          We Provide the best IT Solutions services
        </motion.p>

        <motion.p
          className="abt-hero__desc"
          variants={fadeUpItem(0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          We globally enhance client businesses with strategic creativity in IT solutions,
          spanning development, marketing, design, and problem-solving. As a full-service
          digital agency based in the USA with over decades of experience, we transform
          ideas into scalable, impactful digital experiences that captivate, connect, and conquer.
        </motion.p>

        <motion.div
          className="abt-hero__cta"
          variants={fadeUpItem(0.85)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            className="abt-hero__btn abt-hero__btn--primary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            Let's Work Together
            <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#expertise"
            className="abt-hero__btn abt-hero__btn--secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          className="abt-hero__stats"
          variants={fadeUpItem(1.0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '3', label: 'Global Offices' },
          ].map((s) => (
            <div key={s.label} className="abt-hero__stat">
              <span className="abt-hero__stat-value">{s.value}</span>
              <span className="abt-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Images */}
      <motion.div className="abt-hero__images" style={{ y: imagesY }}>
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: '0 60px 80px 0' }}
        >
          <ImageTiltCard
            className="abt-hero__img-primary"
            src={heroBg}
            alt="Hooqx Team at Work"
            clipDelay={0.2}
            badge="🚀 Innovating Since 2014"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          style={{ position: 'absolute', bottom: 0, right: 0, width: '55%', height: '260px', zIndex: 2 }}
        >
          <ImageTiltCard
            className="abt-hero__img-secondary"
            src={heroBg2}
            alt="Hooqx Digital Solutions"
            clipDelay={0.5}
            badge="🌍 Global Reach"
          />
        </motion.div>

        {/* Decorative ring */}
        <motion.div
          className="abt-hero__img-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>
      </div>
    </section>
  )
}
