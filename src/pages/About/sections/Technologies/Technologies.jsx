import { motion } from 'framer-motion'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import './Technologies.css'

const technologies = [
  'Web Development', 'App Development', 'UI/UX Design',
  'Digital Marketing', 'Cloud Solutions', 'AI & Automation',
  'SEO / SMO', 'Branding', 'Content Creation',
]

export default function Technologies() {
  return (
    <section id="expertise" className="abt-tech">
      <div className="abt-tech__blob abt-tech__blob--left" />
      <div className="abt-tech__blob abt-tech__blob--right" />
      <div className="abt-tech__grid" />

      <div className="abt-tech__container">
        <motion.div
          className="abt-tech__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="abt-tech__eyebrow" variants={fadeUp}>
            <span className="abt-tech__eyebrow-line" />
            Our Capabilities
          </motion.span>

          <motion.h2 className="abt-tech__heading" variants={slideLeft}>
            Technologies We Deal
          </motion.h2>

          <motion.p className="abt-tech__desc" variants={fadeUp}>
            From cutting-edge web technologies to mobile development, cloud solutions, and
            AI-powered systems, we leverage the latest tools to deliver exceptional results.
          </motion.p>
        </motion.div>

        <motion.div
          className="abt-tech__tags"
          variants={stagger(0.08, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className="abt-tech__tag"
              variants={fadeUp}
              whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
