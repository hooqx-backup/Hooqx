import { motion } from 'framer-motion'
import { blurUp, fadeUp, stagger, vp } from '../../../../lib/motion'

import p1 from '../../../../assets/logos/partner1.png'
import p2 from '../../../../assets/logos/partner2.png'
import p3 from '../../../../assets/logos/partner3.png'
import p4 from '../../../../assets/logos/partner4.png'
import p5 from '../../../../assets/logos/partner5.png'
import p6 from '../../../../assets/logos/partner6.png'

import './PartnersStrip.css'

const partners = [p1, p2, p3, p4, p5, p6]
// 4× duplication so the seam never shows at any viewport width
const track = [...partners, ...partners, ...partners, ...partners]

const STATS = [
  { value: '50+', label: 'Global Partners'        },
  { value: '12+', label: 'Years of Collaboration' },
  { value: '99%', label: 'Partner Satisfaction'   },
  { value: '30+', label: 'Countries Reached'      },
]

export default function PartnersStrip() {
  return (
    <section className="ps-section">
      <div className="ps-divider"            aria-hidden="true" />
      <div className="ps-glow ps-glow--l"   aria-hidden="true" />
      <div className="ps-glow ps-glow--r"   aria-hidden="true" />

      <div className="ps-container">

        {/* ── Header ── */}
        <motion.div
          className="ps-header"
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.p className="ps-eyebrow" variants={fadeUp}>
            Ecosystem &amp; Alliances
          </motion.p>
          <motion.h2 className="ps-title" variants={blurUp}>
            Trusted By <em className="ps-title-em">Industry</em> Leaders
          </motion.h2>
          <motion.p className="ps-subtitle" variants={fadeUp}>
            We partner with the world's leading platforms to deliver solutions that scale.
          </motion.p>
        </motion.div>

      </div>

      {/* ── Infinite marquee — full-bleed, outside container ── */}
      <div className="ps-rail" aria-hidden="true">
        <div className="ps-track">
          {track.map((src, i) => (
            <div key={i} className="ps-card">
              <div className="ps-card-inner">
                <img src={src} alt="" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ps-container">

        {/* ── Stats bar ── */}
        <motion.div
          className="ps-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          {STATS.map((s, i) => (
            <div key={i} className="ps-stat">
              <strong className="ps-stat-value">{s.value}</strong>
              <span className="ps-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <div className="ps-divider ps-divider--bottom" aria-hidden="true" />
    </section>
  )
}
