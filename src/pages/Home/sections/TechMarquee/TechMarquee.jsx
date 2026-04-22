import { motion } from 'framer-motion'
import { fadeUp, blurUp, stagger, vp } from '../../../../lib/motion'

import t1 from '../../../../assets/logos/technology1.png'
import t2 from '../../../../assets/logos/technology2.png'
import t3 from '../../../../assets/logos/technology3.png'
import t4 from '../../../../assets/logos/technology4.png'
import t5 from '../../../../assets/logos/technology5.png'
import t6 from '../../../../assets/logos/technology6.png'

import './TechMarquee.css'

const logos = [t1, t2, t3, t4, t5, t6]
const track  = [...logos, ...logos, ...logos, ...logos]

export default function TechMarquee() {
  return (
    <section className="tmq-section">
      {/* Ambient glow orbs */}
      <div className="tmq-orb tmq-orb--left"  aria-hidden="true" />
      <div className="tmq-orb tmq-orb--right" aria-hidden="true" />

      {/* Header */}
      <motion.div
        className="tmq-header"
        variants={stagger(0, 0.13)}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <motion.span className="tmq-eyebrow" variants={fadeUp}>
          Our Tech Stack
        </motion.span>
        <motion.h2 className="tmq-title" variants={blurUp}>
          Technologies We&nbsp;Deal&nbsp;In
        </motion.h2>
        <motion.p className="tmq-subtitle" variants={fadeUp}>
          We harness the best tools the industry has to offer —<br className="tmq-br" />
          so your product is always built on solid ground.
        </motion.p>
      </motion.div>

      {/* Single infinite marquee */}
      <div className="tmq-rail" aria-hidden="true">
        <div className="tmq-track">
          {track.map((src, i) => (
            <div key={i} className="tmq-card">
              <div className="tmq-card-inner">
                <img src={src} alt="" draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
