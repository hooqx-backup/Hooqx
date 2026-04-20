import { motion } from 'framer-motion'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import './Workflow.css'

const steps = [
  { number: '01', title: 'Analysis', desc: 'We dig deep into your business, market, and goals.' },
  { number: '02', title: 'Designing', desc: 'We craft wireframes and visual concepts for your approval.' },
  { number: '03', title: 'Development', desc: 'Our engineers build your solution with precision.' },
  { number: '04', title: 'Delivery', desc: 'We launch, test, and hand over — with ongoing support.' },
]

// Steps cascade in left → right, each slightly delayed
const stepVariant = (i) => ({
  hidden: { opacity: 0, x: -32, y: 24 },
  show: {
    opacity: 1, x: 0, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 },
  },
})

// Connector line expands width from 0
const connectorVariant = (i) => ({
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 + 0.3 },
  },
})

// Number label drops in from above
const numVariant = {
  hidden: { opacity: 0, y: -20, scale: 0.7 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
}

export default function Workflow() {
  return (
    <section className="workflow">
      <div className="workflow__container">

        <motion.div
          className="workflow__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.h2 className="workflow__title" variants={fadeUp}>How We Work</motion.h2>
          <motion.p className="workflow__subtitle" variants={fadeUp}>
            A proven four-step process that delivers results.
          </motion.p>
        </motion.div>

        <motion.div
          className="workflow__steps"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} className="workflow__step" variants={stepVariant(i)}>
              <motion.span className="workflow__number" variants={numVariant}>
                {step.number}
              </motion.span>
              <h3 className="workflow__step-title">{step.title}</h3>
              <p className="workflow__step-desc">{step.desc}</p>
              {i < steps.length - 1 && (
                <motion.div
                  className="workflow__connector"
                  variants={connectorVariant(i)}
                  style={{ transformOrigin: 'left center' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
