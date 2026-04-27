import { motion } from 'framer-motion'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import img1 from '../../../../assets/images/service_sm_01.jpg'
import img2 from '../../../../assets/images/service_sm_02.jpg'
import img3 from '../../../../assets/images/service_sm_03.jpg'
import img4 from '../../../../assets/images/herobannerimage1.jpg'
import img5 from '../../../../assets/images/herobannerimag2.jpg'
import img6 from '../../../../assets/images/herobannerimage3.jpg'
import './Services.css'

const services = [
  {
    id: '01',
    tag: 'Engineering',
    title: 'Web Development Service',
    desc: 'Our web development team is dedicated to turning your digital dreams into reality. Whether it\'s a sleek landing page or a complex web app, we deliver.',
    img: img1,
    href: '#web',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="si1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        <rect x="2" y="5" width="24" height="16" rx="2" stroke="url(#si1)"/>
        <line x1="2" y1="9" x2="26" y2="9" stroke="url(#si1)"/>
        <circle cx="5" cy="7" r="1" stroke="url(#si1)"/>
        <circle cx="8.5" cy="7" r="1" stroke="url(#si1)"/>
        <line x1="10" y1="21" x2="10" y2="24" stroke="url(#si1)"/>
        <line x1="18" y1="21" x2="18" y2="24" stroke="url(#si1)"/>
        <line x1="7" y1="24" x2="21" y2="24" stroke="url(#si1)"/>
        <polyline points="8,14 11,17 16,12" stroke="url(#si1)"/>
      </svg>
    ),
  },
  {
    id: '02',
    tag: 'Mobile',
    title: 'App Development Service',
    desc: 'At Hooqx, we believe that great design and seamless development are the cornerstones of a successful mobile experience.',
    img: img2,
    href: '#app',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="si2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        <rect x="7" y="2" width="14" height="24" rx="3" stroke="url(#si2)"/>
        <line x1="7" y1="6" x2="21" y2="6" stroke="url(#si2)"/>
        <line x1="7" y1="22" x2="21" y2="22" stroke="url(#si2)"/>
        <circle cx="14" cy="24.5" r="1" stroke="url(#si2)"/>
        <circle cx="14" cy="13" r="4" stroke="url(#si2)"/>
        <polyline points="11,13 13,15 17,11" stroke="url(#si2)"/>
      </svg>
    ),
  },
  {
    id: '03',
    tag: 'Platform',
    title: 'Software Development',
    desc: 'At Hooqx, we believe software development isn\'t just about writing code — it\'s about crafting experiences that power real businesses.',
    img: img3,
    href: '#software',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="si3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        <circle cx="14" cy="14" r="4" stroke="url(#si3)"/>
        <circle cx="14" cy="14" r="8" stroke="url(#si3)" strokeDasharray="3 2"/>
        <line x1="14" y1="2" x2="14" y2="6" stroke="url(#si3)"/>
        <line x1="14" y1="22" x2="14" y2="26" stroke="url(#si3)"/>
        <line x1="2" y1="14" x2="6" y2="14" stroke="url(#si3)"/>
        <line x1="22" y1="14" x2="26" y2="14" stroke="url(#si3)"/>
      </svg>
    ),
  },
  {
    id: '04',
    tag: 'Growth',
    title: 'Digital Marketing Service',
    desc: 'Embark on a journey of digital success with Hooqx Digital Marketing Services. We don\'t just market — we amplify your reach and multiply your ROI.',
    img: img4,
    href: '#marketing',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="si4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        <path d="M4 20 L8 14 L12 17 L17 9 L22 12" stroke="url(#si4)"/>
        <circle cx="22" cy="12" r="2" stroke="url(#si4)"/>
        <line x1="2" y1="23" x2="26" y2="23" stroke="url(#si4)"/>
        <line x1="4" y1="20" x2="4" y2="23" stroke="url(#si4)"/>
        <line x1="8" y1="14" x2="8" y2="23" stroke="url(#si4)"/>
        <line x1="13" y1="16" x2="13" y2="23" stroke="url(#si4)"/>
        <line x1="18" y1="10" x2="18" y2="23" stroke="url(#si4)"/>
      </svg>
    ),
  },
  {
    id: '05',
    tag: 'Design',
    title: 'UI / UX Design Service',
    desc: 'We craft intuitive, beautiful interfaces that captivate users from the first click. Great design isn\'t just aesthetics — it\'s the engine of conversion.',
    img: img5,
    href: '#design',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="si5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        <circle cx="10" cy="10" r="5" stroke="url(#si5)"/>
        <circle cx="19" cy="18" r="5" stroke="url(#si5)"/>
        <line x1="14" y1="10" x2="19" y2="10" stroke="url(#si5)"/>
        <line x1="10" y1="15" x2="10" y2="18" stroke="url(#si5)"/>
        <circle cx="14" cy="10" r="1.2" fill="url(#si5)" stroke="none"/>
        <circle cx="10" cy="15" r="1.2" fill="url(#si5)" stroke="none"/>
      </svg>
    ),
  },
  {
    id: '06',
    tag: 'Infrastructure',
    title: 'IT Services & Support',
    desc: 'End-to-end IT support and infrastructure management to keep your business running at full speed — from setup to 24/7 proactive monitoring.',
    img: img6,
    href: '#it',
    icon: (
      <svg viewBox="0 0 28 28" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <defs><linearGradient id="si6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient></defs>
        <rect x="3" y="5" width="22" height="6" rx="1.5" stroke="url(#si6)"/>
        <rect x="3" y="14" width="22" height="6" rx="1.5" stroke="url(#si6)"/>
        <circle cx="20" cy="8" r="1.2" stroke="url(#si6)"/>
        <circle cx="20" cy="17" r="1.2" stroke="url(#si6)"/>
        <circle cx="23" cy="8" r="1.2" stroke="url(#si6)"/>
        <circle cx="23" cy="17" r="1.2" stroke="url(#si6)"/>
        <line x1="7" y1="8" x2="14" y2="8" stroke="url(#si6)"/>
        <line x1="7" y1="17" x2="14" y2="17" stroke="url(#si6)"/>
      </svg>
    ),
  },
]

const metrics = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Avg. Launch Time', value: '3.5 Weeks' },
]

const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: {
      type: 'spring', stiffness: 200, damping: 24,
      delay: Math.floor(i / 3) * 0.1 + (i % 3) * 0.12,
    },
  },
})

function handleCardMove(event) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const rotateX = ((y / rect.height) - 0.5) * -6
  const rotateY = ((x / rect.width) - 0.5) * 8

  card.style.setProperty('--mx', `${x}px`)
  card.style.setProperty('--my', `${y}px`)
  card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`)
  card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`)
}

function resetCardMove(event) {
  const card = event.currentTarget
  card.style.setProperty('--rx', '0deg')
  card.style.setProperty('--ry', '0deg')
}

export default function Services() {
  return (
    <section className="srv">

      {/* decorative layers */}
      <div className="srv__blob srv__blob--left" />
      <div className="srv__blob srv__blob--right" />
      <div className="srv__orb srv__orb--one" />
      <div className="srv__orb srv__orb--two" />
      <div className="srv__noise" />

      {/* background */}
      <div className="srv__grid-bg" />

      {/* giant watermark */}
      <span className="srv__watermark" aria-hidden="true">Services</span>

      <div className="srv__inner">

        {/* header */}
        <motion.div
          className="srv__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="srv__badge" variants={fadeUp}>Our Services</motion.span>
          <motion.h2 className="srv__heading" variants={fadeUp}>
            From Zero to Hero: Our<br />
            <span className="srv__heading-accent">Exclusive IT Services</span>
          </motion.h2>
          <motion.p className="srv__sub" variants={fadeUp}>
            Full-spectrum digital solutions engineered to launch, scale, and sustain your growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="srv__metrics"
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {metrics.map((item) => (
            <motion.div className="srv__metric" key={item.label} variants={fadeUp}>
              <span className="srv__metric-value">{item.value}</span>
              <span className="srv__metric-label">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* card grid */}
        <motion.div
          className="srv__cards"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {services.map((s, i) => (
            <motion.article
              className="srv__card"
              key={s.title}
              variants={cardVariant(i)}
              onMouseMove={handleCardMove}
              onMouseLeave={resetCardMove}
            >

              {/* image */}
              <div className="srv__img-wrap">
                <img src={s.img} alt={s.title} className="srv__img" />
                <div className="srv__img-overlay" />

                {/* hover reveal panel */}
                <div className="srv__reveal">
                  <a href={s.href} className="srv__reveal-btn">
                    View Service
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>

              </div>

              {/* body */}
              <div className="srv__body">
                <div className="srv__meta">
                  <span className="srv__tag">{s.tag}</span>
                  <span className="srv__num">{s.id}</span>
                </div>
                <h3 className="srv__title">{s.title}</h3>
                <p className="srv__desc">{s.desc}</p>
                <a href={s.href} className="srv__link">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Read More
                </a>
              </div>

              {/* corner accent */}
              <span className="srv__card-corner" />

            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
