import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import './Hero.css'

export default function ContactHero() {
  return (
    <section className="cnt-hero">
      <div className="cnt-hero__blob cnt-hero__blob--left" />
      <div className="cnt-hero__blob cnt-hero__blob--right" />
      <div className="cnt-hero__grid" />

      <motion.div
        className="cnt-hero__content"
        variants={stagger(0.06, 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={vp}
      >
        <motion.span className="cnt-hero__eyebrow" variants={fadeUp}>
          <span className="cnt-hero__eyebrow-line" />
          Get In Touch
        </motion.span>

        <motion.h1 className="cnt-hero__heading" variants={slideLeft}>
          Contact <span>Hooqx LLC</span> for<br />Expert Solutions
        </motion.h1>

        <motion.p className="cnt-hero__desc" variants={fadeUp}>
          We globally enhance client businesses with strategic creativity in IT solutions,
          spanning development, marketing, design, and problem-solving. Let's talk about
          how we can help you grow.
        </motion.p>
      </motion.div>
    </section>
  )
}
