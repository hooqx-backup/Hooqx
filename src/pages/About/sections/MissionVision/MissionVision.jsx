import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import './MissionVision.css'

export default function MissionVision() {
  return (
    <section className="abt-mission">
      <div className="abt-mission__blob abt-mission__blob--left" />
      <div className="abt-mission__blob abt-mission__blob--right" />
      <div className="abt-mission__grid" />

      <div className="abt-mission__container">
        <motion.div
          className="abt-mission__content"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="abt-mission__eyebrow" variants={fadeUp}>
            <span className="abt-mission__eyebrow-line" />
            Our Foundation
          </motion.span>

          <motion.h2 className="abt-mission__heading" variants={slideLeft}>
            Mission & Vision
          </motion.h2>

          <div className="abt-mission__grid-content">
            <motion.div className="abt-mission__box" variants={fadeUp}>
              <h3>Mission</h3>
              <p>
                To empower businesses through creativity, technology, and data-driven insights.
                We're committed to delivering measurable growth by building digital solutions
                that solve real problems and unlock new opportunities for every client we serve.
              </p>
            </motion.div>

            <motion.div className="abt-mission__box" variants={fadeUp}>
              <h3>Vision</h3>
              <p>
                To be a catalyst for transformative digital experiences that enable brands to
                captivate, connect, and conquer digitally. We aspire to be the most trusted
                global digital partner, recognized for excellence and lasting impact.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
