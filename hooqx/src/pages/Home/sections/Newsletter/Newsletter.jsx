import { motion } from 'framer-motion'
import { vp } from '../../../../lib/motion'
import './Newsletter.css'

// Whole block scales in from center with a spring
const sectionVariant = {
  hidden: { opacity: 0, scale: 0.88, y: 40 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 180, damping: 22 },
  },
}

// Title and sub fade up sequentially
const titleVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
const subVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
}

// Form slides up after copy
const formVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 },
  },
}

export default function Newsletter() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <motion.section
      className="newsletter"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={vp}
    >
      <div className="newsletter__container">
        <motion.h2 className="newsletter__title" variants={titleVariant} initial="hidden" whileInView="show" viewport={vp}>
          Stay in the Loop
        </motion.h2>
        <motion.p className="newsletter__subtitle" variants={subVariant} initial="hidden" whileInView="show" viewport={vp}>
          Get the latest digital insights and Hooqx news delivered to your inbox.
        </motion.p>
        <motion.form
          className="newsletter__form"
          onSubmit={handleSubmit}
          variants={formVariant}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <input
            type="email"
            className="newsletter__input"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="newsletter__btn">Subscribe</button>
        </motion.form>
      </div>
    </motion.section>
  )
}
