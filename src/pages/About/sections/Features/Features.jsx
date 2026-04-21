import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TrendingUp, Monitor, Globe } from 'lucide-react'
import './Features.css'

const features = [
  {
    icon: TrendingUp,
    title: 'Business Growth',
    desc: 'We help businesses scale through data-driven strategies, innovative solutions, and measurable results that fuel sustainable growth.',
    accent: '#a855f7',
    glow: 'rgba(168,85,247,0.35)',
    tag: 'Strategy',
    metric: '+340%',
    metricLabel: 'avg. growth',
  },
  {
    icon: Monitor,
    title: 'IT Consultancy',
    desc: 'Our expert consultants guide your digital transformation journey with tailored technology strategies and hands-on implementation support.',
    accent: '#00e5ff',
    glow: 'rgba(0,229,255,0.3)',
    tag: 'Technology',
    metric: '50+',
    metricLabel: 'tech stacks',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Operating across the USA, UAE, and India, we deliver world-class digital solutions to clients on every continent.',
    accent: '#7c3aed',
    glow: 'rgba(124,58,237,0.35)',
    tag: 'Worldwide',
    metric: '3',
    metricLabel: 'continents',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 48, filter: 'blur(10px)' },
  show: (i) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

const scanVariant = {
  hidden: { scaleY: 0, opacity: 0 },
  show: (i) => ({
    scaleY: [0, 1, 1, 0],
    opacity: [0, 0.6, 0.6, 0],
    transition: { delay: i * 0.14 + 0.3, duration: 1.2, ease: 'easeInOut' },
  }),
}

function FeatureCard({ f, index }) {
  const cardRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 150, damping: 22 })
  const sy = useSpring(my, { stiffness: 150, damping: 22 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-10, 10])
  const glowX = useTransform(sx, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(sy, [-0.5, 0.5], [0, 100])

  const Icon = f.icon

  const handleMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      className="abt-features__card"
      custom={index}
      variants={cardVariant}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { mx.set(0); my.set(0); setHovered(false) }}
      whileHover={{ y: -10, transition: { type: 'spring', stiffness: 200, damping: 18 } }}
    >
      {/* Dynamic cursor glow */}
      <motion.div
        className="abt-features__cursor-glow"
        style={{
          background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, ${f.glow} 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scan line on entrance */}
      <motion.div
        className="abt-features__scan"
        custom={index}
        variants={scanVariant}
        style={{ background: `linear-gradient(to bottom, transparent, ${f.accent}, transparent)` }}
      />

      {/* Corner brackets */}
      <span className="abt-features__corner abt-features__corner--tl" style={{ borderColor: f.accent }} />
      <span className="abt-features__corner abt-features__corner--br" style={{ borderColor: f.accent }} />

      {/* Tag pill */}
      <div className="abt-features__tag" style={{ borderColor: f.accent, color: f.accent }}>
        <span className="abt-features__tag-dot" style={{ background: f.accent }} />
        {f.tag}
      </div>

      {/* Icon */}
      <motion.div
        className="abt-features__icon"
        style={{ background: `linear-gradient(135deg, ${f.glow}, rgba(0,0,0,0))`, color: f.accent }}
        animate={hovered
          ? { boxShadow: `0 0 24px ${f.glow}, 0 0 48px ${f.glow}`, scale: 1.15 }
          : { boxShadow: '0 0 0px transparent', scale: 1 }
        }
        transition={{ duration: 0.35 }}
      >
        <Icon size={26} />
      </motion.div>

      {/* Title */}
      <h3 className="abt-features__title" style={{ '--accent': f.accent }}>
        {f.title}
      </h3>

      <p className="abt-features__desc">{f.desc}</p>

      {/* Metric */}
      <div className="abt-features__metric">
        <motion.span
          className="abt-features__metric-value"
          style={{ color: f.accent }}
          animate={hovered ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {f.metric}
        </motion.span>
        <span className="abt-features__metric-label">{f.metricLabel}</span>
      </div>

      {/* Bottom glow border */}
      <motion.div
        className="abt-features__border-glow"
        style={{ background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)` }}
        animate={hovered ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}

export default function Features() {
  return (
    <section className="abt-features">
      {/* Ambient line */}
      <div className="abt-features__ambient" />

      <div className="abt-features__container">
        <motion.div
          className="abt-features__grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
