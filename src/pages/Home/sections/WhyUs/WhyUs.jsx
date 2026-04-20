import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BarChart3, Handshake, WalletCards, Headset } from 'lucide-react'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import whyTeamImage from '../../../../assets/images/whyusimage.jpg'
import './WhyUs.css'

const reasons = [
  {
    title: 'Business Growth',
    desc: 'We\'re not just marketers; we\'re dedicated architects of business growth, transforming online strategies into tangible success stories.',
    icon: BarChart3,
  },
  {
    title: 'Skilled Team',
    desc: 'Opt for us and experience digital excellence at an affordable price, where quality meets budget-friendly solutions for your success.',
    icon: Handshake,
  },
  {
    title: 'Affordable Price',
    desc: 'Select us with confidence, as our digital mastery is powered by a skilled team dedicated to sculpting innovative solutions for your victories.',
    icon: WalletCards,
  },
  {
    title: '24/7 Support',
    desc: 'Enjoy unparalleled support around the clock, ensuring your digital success is not bound by time but fueled by our 24/7 commitment.',
    icon: Headset,
  },
]

const metrics = [
  { label: 'Projects Shipped', value: '120+' },
  { label: 'Client Retention', value: '96%' },
  { label: 'Support Response', value: '< 15 min' },
]

const cardVariant = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 22,
      delay: index * 0.07,
    },
  }),
}

function FloatingChip({ className, children, delay = 0 }) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ delay, duration: 0.45 }}
      animate={{ y: [0, -7, 0] }}
      style={{ willChange: 'transform' }}
      whileHover={{ scale: 1.04 }}
    >
      {children}
    </motion.span>
  )
}

export default function WhyUs() {
  const mediaRef = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateY = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 170, damping: 20, mass: 0.45 })
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 170, damping: 20, mass: 0.45 })
  const glowX = useTransform(px, (v) => `${(v * 100).toFixed(1)}%`)
  const glowY = useTransform(py, (v) => `${(v * 100).toFixed(1)}%`)

  const handleMediaMove = (event) => {
    const rect = mediaRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    px.set(Math.max(0, Math.min(1, x)))
    py.set(Math.max(0, Math.min(1, y)))
  }

  const resetMediaMove = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <section className="whyus">
      <div className="whyus__blob whyus__blob--left" />
      <div className="whyus__blob whyus__blob--right" />
      <div className="whyus__grid-bg" />
      <div className="whyus__scanline" />

      <div className="whyus__container">
        <motion.div
          className="whyus__left"
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="whyus__eyebrow" variants={fadeUp}>
            <span className="whyus__eyebrow-line" />
            Pixel Powerhouse
          </motion.span>

          <motion.h2 className="whyus__heading" variants={fadeUp}>
            Why We\'re Your Digital Heroes
          </motion.h2>

          <motion.div className="whyus__metric-rail" variants={stagger(0.06, 0.08)}>
            {metrics.map((item) => (
              <motion.div className="whyus__metric" key={item.label} variants={fadeUp}>
                <span className="whyus__metric-value">{item.value}</span>
                <span className="whyus__metric-label">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="whyus__grid"
            variants={stagger(0.06, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {reasons.map((r, i) => (
              <motion.article
                key={r.title}
                className="whyus__card"
                custom={i}
                variants={cardVariant}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <span className="whyus__card-no">0{i + 1}</span>
                <span className="whyus__icon">
                  <r.icon size={22} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="whyus__card-title">{r.title}</h3>
                <p className="whyus__card-desc">{r.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={mediaRef}
          className="whyus__media"
          initial={{ opacity: 0, x: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={handleMediaMove}
          onMouseLeave={resetMediaMove}
          style={{ rotateX, rotateY }}
        >
          <motion.div
            className="whyus__media-glow"
            style={{ left: glowX, top: glowY }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          />
          <img src={whyTeamImage} alt="Hooqx team planning digital strategy" className="whyus__image" />

          <FloatingChip className="whyus__chip whyus__chip--one" delay={0.2}>AI Workflow</FloatingChip>
          <FloatingChip className="whyus__chip whyus__chip--two" delay={0.3}>Scale Ready</FloatingChip>
          <FloatingChip className="whyus__chip whyus__chip--three" delay={0.4}>Always On</FloatingChip>
        </motion.div>
      </div>
    </section>
  )
}
