import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import './Partners.css'

const partners = [
  { flag: '🇦🇪', city: 'Dubai, UAE', desc: 'Strategic digital growth partnerships across the Middle East.' },
  { flag: '🇩🇪', city: 'Frankfurt, Germany', desc: 'Technology and development collaborations in the European market.' },
  { flag: '🇺🇸', city: 'Delaware, USA', desc: 'Headquartered in the US serving clients worldwide.' },
]

export default function Partners() {
  return (
    <section className="cnt-partners">
      <div className="cnt-partners__container">
        <motion.div
          className="cnt-partners__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="cnt-partners__eyebrow" variants={fadeUp}>
            <span className="cnt-partners__eyebrow-line" />
            Collaborations
          </motion.span>

          <motion.h2 className="cnt-partners__heading" variants={slideLeft}>
            Our Partners
          </motion.h2>

          <motion.p className="cnt-partners__desc" variants={fadeUp}>
            We work with startups and enterprises across Dubai, Frankfurt, and beyond —
            bringing global expertise to every engagement.
          </motion.p>
        </motion.div>

        <motion.div
          className="cnt-partners__grid"
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {partners.map((p) => (
            <motion.div
              key={p.city}
              className="cnt-partners__card"
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <span className="cnt-partners__flag">{p.flag}</span>
              <h3>{p.city}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
