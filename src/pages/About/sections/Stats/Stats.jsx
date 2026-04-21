import { motion } from 'framer-motion'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import './Stats.css'

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Happy Clients', value: '96%' },
  { label: 'Team Members', value: '50+' },
  { label: 'Years of Experience', value: '8+' },
]

export default function Stats() {
  return (
    <section className="abt-stats">
      <div className="abt-stats__container">
        <motion.div
          className="abt-stats__grid"
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} className="abt-stats__item" variants={fadeUp}>
              <div className="abt-stats__value">{stat.value}</div>
              <div className="abt-stats__label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
