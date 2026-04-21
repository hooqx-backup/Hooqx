import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="abt-cta">
      <div className="abt-cta__blob abt-cta__blob--left" />
      <div className="abt-cta__blob abt-cta__blob--right" />

      <motion.div
        className="abt-cta__content"
        variants={stagger(0.08, 0.15)}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <motion.h2 className="abt-cta__heading" variants={slideLeft}>
          Ready to Transform Your<br />
          <span>Digital Future?</span>
        </motion.h2>

        <motion.p className="abt-cta__desc" variants={fadeUp}>
          Let's collaborate and create something extraordinary together.
        </motion.p>

        <motion.div className="abt-cta__buttons" variants={fadeUp}>
          <a href="/contact" className="abt-cta__btn abt-cta__btn--primary">
            Get in Touch
          </a>
          <a href="tel:+14703809098" className="abt-cta__btn abt-cta__btn--secondary">
            Call Us Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
