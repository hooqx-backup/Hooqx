import { motion } from 'framer-motion'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    quote: 'Hooqx transformed our online presence completely. The results exceeded our expectations.',
  },
  {
    name: 'Marcus Lee',
    role: 'Founder, GrowthLab',
    quote: 'Professional, fast, and incredibly skilled. Our app launched on time and under budget.',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, NovaBrand',
    quote: 'Their digital marketing team tripled our leads in just three months. Incredible team.',
  },
]

// Cards cascade in with blur and upward motion, each with increasing delay
const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 56, filter: 'blur(8px)', scale: 0.96 },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)', scale: 1,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
  },
})

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__container">

        <motion.div
          className="testimonials__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.h2 className="testimonials__title" variants={fadeUp}>What Our Clients Say</motion.h2>
          <motion.p className="testimonials__subtitle" variants={fadeUp}>Real results, real stories.</motion.p>
        </motion.div>

        <motion.div
          className="testimonials__grid"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="testimonials__card" variants={cardVariant(i)}>
              <p className="testimonials__quote">"{t.quote}"</p>
              <div className="testimonials__author">
                <div className="testimonials__avatar" />
                <div>
                  <span className="testimonials__name">{t.name}</span>
                  <span className="testimonials__role">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
