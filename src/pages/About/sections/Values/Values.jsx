import { motion } from 'framer-motion'
import { Users, Award, Target, Zap } from 'lucide-react'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import './Values.css'

const values = [
  { title: 'Innovation', desc: 'We push boundaries with cutting-edge technology and creative thinking to deliver solutions that drive real change.', icon: Zap },
  { title: 'Excellence', desc: 'Every project reflects our commitment to quality, precision, and delivering beyond expectations.', icon: Award },
  { title: 'Collaboration', desc: 'We believe in strong partnerships, transparent communication, and working hand-in-hand with our clients.', icon: Users },
  { title: 'Purpose', desc: "We're dedicated to creating digital solutions that make a meaningful impact on businesses and their customers.", icon: Target },
]

export default function Values() {
  return (
    <section className="abt-values">
      <div className="abt-values__container">
        <motion.div
          className="abt-values__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="abt-values__eyebrow" variants={fadeUp}>
            <span className="abt-values__eyebrow-line" />
            What Drives Us
          </motion.span>

          <motion.h2 className="abt-values__heading" variants={slideLeft}>
            Our Core Values
          </motion.h2>
        </motion.div>

        <motion.div
          className="abt-values__grid"
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {values.map((value) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                className="abt-values__card"
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="abt-values__icon">
                  <Icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
