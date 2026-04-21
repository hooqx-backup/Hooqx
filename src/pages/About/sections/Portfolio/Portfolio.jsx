import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, slideLeft, zoomIn, stagger, vp } from '../../../../lib/motion'
import portfolio1 from '../../../../assets/images/service_sm_01.jpg'
import portfolio2 from '../../../../assets/images/service_sm_02.jpg'
import portfolio3 from '../../../../assets/images/service_sm_03.jpg'
import './Portfolio.css'

const items = [
  { img: portfolio1, label: 'Web Design & Development' },
  { img: portfolio2, label: 'Digital Marketing' },
  { img: portfolio3, label: 'Branding & UI/UX' },
]

export default function Portfolio() {
  return (
    <section className="abt-portfolio">
      <div className="abt-portfolio__blob abt-portfolio__blob--left" />
      <div className="abt-portfolio__blob abt-portfolio__blob--right" />
      <div className="abt-portfolio__grid-bg" />

      <div className="abt-portfolio__container">
        <motion.div
          className="abt-portfolio__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="abt-portfolio__eyebrow" variants={fadeUp}>
            <span className="abt-portfolio__eyebrow-line" />
            Our Work
          </motion.span>

          <motion.h2 className="abt-portfolio__heading" variants={slideLeft}>
            Projects We're Proud Of
          </motion.h2>

          <motion.p className="abt-portfolio__desc" variants={fadeUp}>
            A glimpse into the digital experiences we've crafted for clients worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          className="abt-portfolio__gallery"
          variants={stagger(0.08, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              className="abt-portfolio__item"
              variants={zoomIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="abt-portfolio__img-wrap">
                <img src={item.img} alt={item.label} />
                <div className="abt-portfolio__overlay">
                  <span className="abt-portfolio__label">{item.label}</span>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
