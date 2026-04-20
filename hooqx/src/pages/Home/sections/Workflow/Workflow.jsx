import { motion } from 'framer-motion'
import { fadeUp, blurUp, stagger, vp } from '../../../../lib/motion'
import './Workflow.css'

/* ── Step SVG icons (unchanged) ── */
const IconAnalysis = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="40" rx="4" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="20" x2="32" y2="20" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="27" x2="32" y2="27" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="34" x2="26" y2="34" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="46" cy="46" r="8" stroke="#7c3aed" strokeWidth="2"/>
    <line x1="51.5" y1="51.5" x2="57" y2="57" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)
const IconDesigning = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="52" height="52" rx="6" stroke="#a78bfa" strokeWidth="2"/>
    <circle cx="20" cy="20" r="5" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="44" cy="20" r="5" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="20" cy="44" r="5" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="44" cy="44" r="5" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M25 20 Q32 26 39 20" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M20 25 Q26 32 20 39" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M44 25 Q38 32 44 39" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M25 44 Q32 38 39 44" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <circle cx="32" cy="32" r="4" fill="#7c3aed" opacity="0.6"/>
  </svg>
)
const IconDevelopment = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="56" height="40" rx="5" stroke="#a78bfa" strokeWidth="2"/>
    <line x1="4" y1="22" x2="60" y2="22" stroke="#a78bfa" strokeWidth="2"/>
    <circle cx="12" cy="16" r="2" fill="#7c3aed"/>
    <circle cx="20" cy="16" r="2" fill="#a78bfa"/>
    <circle cx="28" cy="16" r="2" fill="#6d28d9"/>
    <polyline points="14,32 20,38 14,44" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="26" y1="44" x2="40" y2="44" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round"/>
    <rect x="44" y="29" width="10" height="6" rx="2" stroke="#a78bfa" strokeWidth="1.5"/>
    <rect x="44" y="39" width="10" height="6" rx="2" stroke="#a78bfa" strokeWidth="1.5"/>
  </svg>
)
const IconDelivery = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 C32 8 50 18 50 36 L32 56 L14 36 C14 18 32 8 32 8Z" stroke="#a78bfa" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="30" r="7" stroke="#7c3aed" strokeWidth="2"/>
    <circle cx="32" cy="30" r="2.5" fill="#7c3aed"/>
    <path d="M10 46 L4 56 L14 52Z" fill="#7c3aed" opacity="0.7"/>
    <path d="M54 46 L60 56 L50 52Z" fill="#7c3aed" opacity="0.7"/>
    <path d="M26 56 L20 62 L32 59Z" fill="#a78bfa" opacity="0.5"/>
    <path d="M38 56 L44 62 L32 59Z" fill="#a78bfa" opacity="0.5"/>
  </svg>
)

/* ── Stats icons (unchanged) ── */
const IconDiamond = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <polygon points="20,4 36,16 20,36 4,16" stroke="#7c3aed" strokeWidth="2" fill="none"/>
    <polygon points="20,4 36,16 20,20 4,16" fill="#7c3aed" opacity="0.2"/>
  </svg>
)
const IconSmile = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="16" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M13 24 Q20 30 27 24" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="15" cy="17" r="2" fill="#7c3aed"/>
    <circle cx="25" cy="17" r="2" fill="#7c3aed"/>
  </svg>
)
const IconDocument = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <rect x="8" y="4" width="24" height="32" rx="3" stroke="#7c3aed" strokeWidth="2"/>
    <line x1="13" y1="13" x2="27" y2="13" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="13" y1="19" x2="27" y2="19" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="13" y1="25" x2="21" y2="25" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)
const IconTeam = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="13" r="5" stroke="#7c3aed" strokeWidth="2"/>
    <path d="M10 34 C10 26 30 26 30 34" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <circle cx="8" cy="15" r="3.5" stroke="#7c3aed" strokeWidth="1.5" opacity="0.7"/>
    <path d="M2 34 C2 28 14 28 14 34" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
    <circle cx="32" cy="15" r="3.5" stroke="#7c3aed" strokeWidth="1.5" opacity="0.7"/>
    <path d="M26 34 C26 28 38 28 38 34" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
  </svg>
)

/* ── Data ── */
const steps = [
  { number: '01', title: 'Analysis',    Icon: IconAnalysis    },
  { number: '02', title: 'Designing',   Icon: IconDesigning   },
  { number: '03', title: 'Development', Icon: IconDevelopment },
  { number: '04', title: 'Delivery',    Icon: IconDelivery    },
]

const stats = [
  { Icon: IconDiamond,  label: 'Decades of\nExperience'         },
  { Icon: IconSmile,    label: 'Several Projects\nCompleted'     },
  { Icon: IconDocument, label: 'A Multitude of\nSkilled Experts' },
  { Icon: IconTeam,     label: 'Abundantly\nSatified Clients'   },
]

/* ── Float durations/delays per card for variety ── */
const FLOATS = [
  { dur: 3.0, delay: 0.0 },
  { dur: 3.6, delay: 0.6 },
  { dur: 2.8, delay: 1.1 },
  { dur: 3.3, delay: 0.3 },
]

/* ── Background particles ── */
const PARTICLES = [
  { x: '6%',  y: '12%', s: 3, dur: 3.4, d: 0.0  },
  { x: '91%', y: '20%', s: 4, dur: 4.1, d: 0.7  },
  { x: '18%', y: '72%', s: 2, dur: 3.7, d: 1.2  },
  { x: '82%', y: '68%', s: 5, dur: 4.6, d: 0.4  },
  { x: '47%', y: '6%',  s: 3, dur: 3.9, d: 0.9  },
  { x: '53%', y: '90%', s: 2, dur: 3.1, d: 1.5  },
  { x: '28%', y: '44%', s: 4, dur: 4.3, d: 0.2  },
  { x: '72%', y: '50%', s: 3, dur: 3.5, d: 1.0  },
]

/* ── Variants ── */
const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 56, scale: 0.92 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.16 } },
})

const badgeVariant = (i) => ({
  hidden: { scale: 0, rotate: -25, opacity: 0 },
  show:   { scale: 1, rotate: 0, opacity: 1,
    transition: { type: 'spring', stiffness: 420, damping: 16, delay: i * 0.16 + 0.35 } },
})

const titleWordVariant = (i) => ({
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.16 + 0.25 } },
})

const statVariant = (i) => ({
  hidden: { opacity: 0, y: 28, x: -8 },
  show:   { opacity: 1, y: 0, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 } },
})

const CONNECTOR_PATH = 'M112,45 C165,10 215,80 337,45 C460,10 510,80 562,45 C614,10 664,80 787,45'

export default function Workflow() {
  return (
    <section className="wf-section">

      {/* Floating background particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="wf-particle"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.d }}
        />
      ))}

      {/* Watermark — slow ambient drift */}
      <motion.span
        className="wf-watermark"
        aria-hidden="true"
        animate={{ x: [-6, 6, -6] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      >
        Working
      </motion.span>

      {/* Decorative swirl — paths draw in */}
      <svg className="wf-swirl" viewBox="0 0 260 200" fill="none" aria-hidden="true">
        <motion.path
          d="M240 10 C180 40 100 20 80 80 C60 140 120 160 100 200"
          stroke="#7c3aed" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        <motion.path
          d="M260 30 C200 60 120 40 100 100 C80 160 140 180 120 220"
          stroke="#a78bfa" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.25"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        />
        <motion.path
          d="M220 0 C160 30 90 15 70 70 C50 125 105 148 85 190"
          stroke="#6d28d9" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.2"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        />
      </svg>

      <div className="wf-container">

        {/* Header */}
        <motion.div
          className="wf-header"
          variants={stagger(0, 0.13)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span
            className="wf-eyebrow"
            variants={{
              hidden: { opacity: 0, scale: 0.75, y: 10 },
              show:   { opacity: 1, scale: 1,    y: 0,
                transition: { type: 'spring', stiffness: 300, damping: 20 } },
            }}
          >
            How We Works
          </motion.span>

          {/* Title — word-by-word clip reveal */}
          <motion.h2
            className="wf-title"
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {'Step into the Digital Groove: Our Workflow Rhythm'.split(' ').map((word, i) => (
              <span key={i} className="wf-title-clip">
                <motion.span variants={titleWordVariant(i)} style={{ display: 'inline-block' }}>
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <div className="wf-steps-wrap">

          {/* Connector SVG — dashed guide + animated draw path */}
          <svg className="wf-connector-svg" viewBox="0 0 900 90" preserveAspectRatio="none" aria-hidden="true">
            {/* Static dashed guide track */}
            <path
              d={CONNECTOR_PATH}
              stroke="rgba(124,58,237,0.18)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
            {/* Animated draw path — solid purple */}
            <motion.path
              d={CONNECTOR_PATH}
              stroke="#7c3aed"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            />
            {/* Glowing dot at the tip (appears after draw) */}
            <motion.circle
              cx="787" cy="45" r="5"
              fill="#7c3aed"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 14, delay: 2.3 }}
              style={{ filter: 'drop-shadow(0 0 6px #7c3aed)' }}
            />
          </svg>

          {/* Step cards */}
          <motion.div
            className="wf-steps"
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {steps.map((step, i) => (
              <motion.div key={step.number} className="wf-step" variants={cardVariant(i)}>
                <div className="wf-icon-wrap">

                  {/* Continuously floating icon box */}
                  <motion.div
                    className="wf-icon-box"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: FLOATS[i].dur,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: FLOATS[i].delay,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 8,
                      rotateX: -4,
                      boxShadow: '0 0 40px rgba(124,58,237,0.45), 0 0 80px rgba(124,58,237,0.15)',
                    }}
                    whileTap={{ scale: 0.96 }}
                    style={{ perspective: 800 }}
                  >
                    <step.Icon />
                  </motion.div>

                  {/* Badge — spring pop */}
                  <motion.span
                    className="wf-badge"
                    variants={badgeVariant(i)}
                  >
                    {step.number}
                  </motion.span>
                </div>

                {/* Step title — slides up after card */}
                <motion.h3
                  className="wf-step-title"
                  variants={titleWordVariant(i)}
                >
                  {step.title}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Divider — scaleX reveal */}
        <motion.div
          className="wf-divider"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ transformOrigin: 'left center' }}
        />

        {/* Stats bar */}
        <motion.div
          className="wf-stats"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {stats.map((s, i) => (
            <motion.div key={i} className="wf-stat" variants={statVariant(i)} whileHover={{ y: -3 }}>
              <motion.div
                className="wf-stat-icon"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              >
                <s.Icon />
              </motion.div>
              <p className="wf-stat-label">
                {s.label.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
