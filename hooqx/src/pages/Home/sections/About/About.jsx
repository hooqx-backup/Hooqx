import { motion } from 'framer-motion'
import { slideLeft, slideRight, fadeUp, stagger, blurUp, vp } from '../../../../lib/motion'
import img1 from '../../../../assets/images/herobannerimage1.jpg'
import img2 from '../../../../assets/images/herobannerimage3.jpg'
import './About.css'

const features = [
  {
    title: 'IT Consultancy',
    desc: 'Our seasoned consultants work closely with you to assess, optimise, and seamlessly integrate cutting-edge technologies.',
  },
  {
    title: 'Digital Strategy',
    desc: 'From comprehensive market analysis to pinpointing the most impactful digital channels, our team is dedicated to driving results.',
  },
  {
    title: 'Custom Requirements',
    desc: 'We take a personalised approach to every client, developing strategies that align with your specific goals and objectives.',
  },
  {
    title: 'Using Latest Technology',
    desc: 'Our team relentlessly navigates the dynamic digital landscape, pioneering new technologies and trends to propel your brand past the competition.',
  },
]

// Feature cards: alternate left/right per row
const featureVariant = (i) => ({
  hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 },
  show: {
    opacity: 1, x: 0, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  },
})

// Image wrappers: top slides from right, bottom from left
const imgTop = {
  hidden: { opacity: 0, x: 60, y: -20, rotate: 2 },
  show: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
}
const imgBottom = {
  hidden: { opacity: 0, x: -60, y: 20, rotate: -2 },
  show: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
}
const badgeVariant = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 22, delay: 0.4 } },
}

export default function About() {
  return (
    <section className="abt">
      <div className="abt__blob abt__blob--left" />
      <div className="abt__blob abt__blob--right" />
      <div className="abt__grid" />

      <div className="abt__inner">

        {/* ── LEFT: content slides from left ── */}
        <motion.div
          className="abt__content"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="abt__eyebrow" variants={fadeUp}>
            <span className="abt__eyebrow-line" />
            Beyond the Hook: Discovering the Depths of Hooqx's Mission
          </motion.span>

          <motion.h2 className="abt__heading" variants={slideLeft}>
            Digital Alchemy<br />
            <span className="abt__heading-accent">Transforming Tech</span>
            {' '}Troubles<br />into Triumphs
          </motion.h2>

          <motion.p className="abt__desc" variants={fadeUp}>
            We strive to add value to our client's businesses across the globe with strategic
            thinking alongside creative approaches when it comes to development, marketing,
            design, and problem-solving.
          </motion.p>

          {/* Feature cards with alternating slide direction */}
          <motion.div
            className="abt__features"
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {features.map((f, i) => (
              <motion.div
                className="abt__feature"
                key={f.title}
                variants={featureVariant(i)}
              >
                <span className="abt__feature-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <defs>
                      <linearGradient id={`fg-${f.title.replace(/\s/g,'')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#00e5ff" />
                      </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10" stroke={`url(#fg-${f.title.replace(/\s/g,'')})`} strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" stroke={`url(#fg-${f.title.replace(/\s/g,'')})`} strokeWidth="1.5" />
                    <line x1="12" y1="2" x2="12" y2="6" stroke={`url(#fg-${f.title.replace(/\s/g,'')})`} strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="12" y1="18" x2="12" y2="22" stroke={`url(#fg-${f.title.replace(/\s/g,'')})`} strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="2" y1="12" x2="6" y2="12" stroke={`url(#fg-${f.title.replace(/\s/g,'')})`} strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="18" y1="12" x2="22" y2="12" stroke={`url(#fg-${f.title.replace(/\s/g,'')})`} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <div className="abt__feature-body">
                  <h4 className="abt__feature-title">{f.title}</h4>
                  <p className="abt__feature-desc">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="abt__ctas" variants={blurUp}>
            <a className="abt__btn abt__btn--primary" href="#contact">
              Read More
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <button className="abt__btn abt__btn--icon" aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: images slide from right with rotation ── */}
        <motion.div
          className="abt__visual"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <span className="abt__corner abt__corner--tl" />
          <span className="abt__corner abt__corner--br" />
          <div className="abt__visual-glow" />

          <motion.div className="abt__img-wrap abt__img-wrap--top" variants={imgTop}>
            <img src={img1} alt="Team collaborating" className="abt__img" />
            <div className="abt__img-overlay" />
          </motion.div>

          <motion.div className="abt__img-wrap abt__img-wrap--bottom" variants={imgBottom}>
            <img src={img2} alt="Team working" className="abt__img" />
            <div className="abt__img-overlay" />
          </motion.div>

          <motion.div className="abt__badge" variants={badgeVariant}>
            <span className="abt__badge-value">12+</span>
            <span className="abt__badge-label">Years of Excellence</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
