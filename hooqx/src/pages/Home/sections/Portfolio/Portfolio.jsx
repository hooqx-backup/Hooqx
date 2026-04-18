import { motion } from 'framer-motion'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import './Portfolio.css'

const projects = [
  { title: 'Project Alpha', category: 'Web Development' },
  { title: 'Project Beta', category: 'App Development' },
  { title: 'Project Gamma', category: 'UI/UX Design' },
  { title: 'Project Delta', category: 'Digital Marketing' },
  { title: 'Project Epsilon', category: 'Software Development' },
  { title: 'Project Zeta', category: 'Web Development' },
]

// Odd cards slide from left, even from right — masonry-style entrance
const cardVariant = (i) => ({
  hidden: {
    opacity: 0,
    x: i % 2 === 0 ? -50 : 50,
    y: 30,
    scale: 0.93,
  },
  show: {
    opacity: 1, x: 0, y: 0, scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: (i % 3) * 0.1,
    },
  },
})

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">

        <motion.div
          className="portfolio__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.h2 className="portfolio__title" variants={fadeUp}>Our Work</motion.h2>
          <motion.p className="portfolio__subtitle" variants={fadeUp}>
            A selection of projects we're proud of.
          </motion.p>
        </motion.div>

        <motion.div
          className="portfolio__grid"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="portfolio__card"
              variants={cardVariant(i)}
            >
              <div className="portfolio__thumb" />
              <div className="portfolio__info">
                <span className="portfolio__category">{project.category}</span>
                <h3 className="portfolio__card-title">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
