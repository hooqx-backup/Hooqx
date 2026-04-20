import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import heroBannerImg from '../../assets/images/softwaredevelopment-banner.jpg'
import netGainsImg from '../../assets/images/softwaredevelopment1.jpg'
import whyImg from '../../assets/images/softwaredevelopment2.jpg'
import processImg from '../../assets/images/softwaredevelopment3.jpg'
import vid1 from '../../assets/videos/customer1.webm'
import vid2 from '../../assets/videos/customer2.webm'
import vid3 from '../../assets/videos/customer3.webm'
import '../Development/DevelopmentPage.css'

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const t0 = Date.now()

        const tick = () => {
          const p = Math.min((Date.now() - t0) / duration, 1)
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
          if (p < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })

    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return [count, ref]
}

function StatItem({ target, suffix, label, delay }) {
  const [count, ref] = useCounter(target)

  return (
    <motion.div
      className="wd-stat"
      initial={{ opacity: 0, rotateY: 90 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      viewport={vp}
      transition={{ type: 'spring', stiffness: 160, damping: 20, delay }}
      style={{ transformPerspective: 700 }}
    >
      <div ref={ref} className="wd-stat__num">{count}{suffix}</div>
      <div className="wd-stat__label">{label}</div>
    </motion.div>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="wd-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" width="14" height="14" fill={i < count ? '#f59e0b' : 'rgba(245,158,11,0.2)'}>
          <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6L8 1z" />
        </svg>
      ))}
    </div>
  )
}

const SERVICES = [
  'Custom Software Solutions',
  'Mobile App Development',
  'Web Application Development',
  'E-commerce Development',
  'API Integration',
  'UX/UI Design',
  'Cloud Solutions',
  'Software Maintenance & Support',
  'Database Design & Management',
  'QA & Testing',
  'DevOps Services',
  'Blockchain Development',
  'Artificial Intelligence & Machine Learning',
  'Internet of Things (IoT) Solutions',
  'Legacy System Modernization',
]

const TESTIMONIALS = [
  {
    name: 'Musa Al Jaber',
    role: 'Verified Customer',
    rating: 5,
    video: vid1,
    quote: 'Hooqx is very good and respond back quickly, their SEO technique make my website come to the top of the search. Very nice service! I will recommend for sure.',
  },
  {
    name: 'Daniel W.',
    role: 'Verified Customer',
    rating: 5,
    video: vid2,
    quote: "Hooqx flawlessly executed our digital campaign, seamlessly translating our brand's identity into success. Their attention to detail surpassed our goals, and we're eager to continue with them.",
  },
  {
    name: 'Lisa Chen',
    role: 'Verified Customer',
    rating: 5,
    video: vid3,
    quote: 'Hooqx shines in the digital crowd with their creativity and expertise. Their visually stunning platforms and engaging digital journeys transformed our brand.',
  },
]

const FAQS = [
  {
    q: 'What kinds of software does Hooqx build?',
    a: 'We build custom business platforms, SaaS products, enterprise software, automation tools, e-commerce systems, and integrated applications tailored to your workflow and growth goals.',
  },
  {
    q: 'Can you modernize our legacy systems?',
    a: 'Yes. We audit legacy architecture, map migration risks, and modernize your platform incrementally so operations continue smoothly while performance, security, and maintainability improve.',
  },
  {
    q: 'Do you handle cloud deployment and DevOps?',
    a: 'Absolutely. Our team sets up CI/CD pipelines, monitoring, infrastructure automation, and secure cloud environments to keep your software fast, stable, and scalable.',
  },
  {
    q: 'How do you ensure software quality?',
    a: 'Quality is built into every sprint with code reviews, test automation, performance checks, manual QA, and release validation to minimize defects and maximize reliability.',
  },
  {
    q: 'Can Hooqx integrate APIs and third-party systems?',
    a: 'Yes. We design robust API layers and connect payment gateways, CRMs, ERPs, analytics platforms, and other tools so your entire digital ecosystem works as one.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. We provide continuous maintenance, feature evolution, security patches, and performance optimization after launch to keep your product future-ready.',
  },
]

const PROCESS = [
  {
    num: '01',
    title: 'Discovery & Product Blueprint',
    desc: 'We translate your goals into a clear architecture, feature roadmap, and technical strategy with measurable outcomes.',
  },
  {
    num: '02',
    title: 'UX, Flows & System Design',
    desc: 'From user journeys to database planning, we craft intuitive experiences and robust foundations before development begins.',
  },
  {
    num: '03',
    title: 'Agile Build, Test & Integrate',
    desc: 'We develop in focused sprints, run continuous QA, and integrate critical services to deliver reliable software faster.',
  },
  {
    num: '04',
    title: 'Launch, Scale & Evolve',
    desc: 'After release, we monitor usage, optimize performance, and continuously ship enhancements as your business grows.',
  },
]

export default function SoftwareDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <main className="wd">
      <section className="wd-hero" ref={heroRef}>
        <motion.div
          className="wd-hero__bg"
          style={{ backgroundImage: `url(${heroBannerImg})`, y: heroBgY }}
        />
        <div className="wd-hero__grid" />
        <div className="wd-hero__blob wd-hero__blob--1" />
        <div className="wd-hero__blob wd-hero__blob--2" />
        <div className="wd-hero__blob wd-hero__blob--3" />
        <div className="wd-hero__particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="wd-hero__particle" style={{ '--i': i }} />
          ))}
        </div>

        <motion.div className="wd-hero__inner" style={{ opacity: heroOpacity }}>
          <motion.div
            className="wd-hero__content"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
          >
            <motion.p
              className="wd-eyebrow"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="wd-eyebrow__line" />Software Development Services
            </motion.p>
            <motion.h1
              className="wd-hero__title"
              variants={{ hidden: { opacity: 0, y: 36, filter: 'blur(10px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Crafting Powerful Software<br />
              <span className="wd-grad-text">That Hooks Users</span>
            </motion.h1>
            <motion.p
              className="wd-hero__sub"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              At Hooqx, we believe software development is not just writing code. It is about
              crafting experiences where every feature becomes a meaningful connection between
              your brand and your audience.
            </motion.p>
            <motion.div
              className="wd-hero__cta"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="wd-btn wd-btn--primary">Explore Services</a>
              <a href="mailto:hello@hooqx.com" className="wd-btn wd-btn--ghost">Let's Talk</a>
            </motion.div>
          </motion.div>

          <motion.div
            className="wd-hero__visual"
            initial={{ opacity: 0, x: 80, rotateY: -14 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
          >
            <div className="wd-code-card">
              <div className="wd-code-card__bar">
                <span className="wd-code-card__dot wd-code-card__dot--r" />
                <span className="wd-code-card__dot wd-code-card__dot--y" />
                <span className="wd-code-card__dot wd-code-card__dot--g" />
                <span className="wd-code-card__file">software.hooqx.js</span>
              </div>
              <pre className="wd-code-card__code"><span className="wd-c-kw">const</span> software = {`{`}
  approach: <span className="wd-c-str">"Experience-first engineering"</span>,
  outcomes: [<span className="wd-c-str">"Scale"</span>, <span className="wd-c-str">"Speed"</span>, <span className="wd-c-str">"Reliability"</span>],
  quality: <span className="wd-c-str">"QA + DevOps + Support"</span>,
  delivery: <span className="wd-c-str">"Built for growth"</span>
{`}`}</pre>
            </div>
            <motion.div
              className="wd-hero__badge wd-hero__badge--1"
              initial={{ opacity: 0, scale: 0.6, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 300, damping: 18 }}
            >
              <svg viewBox="0 0 20 20" fill="#34d399" width="18" height="18">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Experience-Driven Builds</span>
            </motion.div>
            <motion.div
              className="wd-hero__badge wd-hero__badge--2"
              initial={{ opacity: 0, scale: 0.6, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 300, damping: 18 }}
            >
              <svg viewBox="0 0 20 20" fill="#f59e0b" width="18" height="18">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Built to Delight & Retain</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="wd-hero__scroll">
          <div className="wd-hero__scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="wd-stats">
        <div className="wd-stats__inner">
          <StatItem target={500} suffix="+" label="Projects Delivered" delay={0} />
          <StatItem target={200} suffix="+" label="Happy Clients" delay={0.12} />
          <StatItem target={15} suffix="+" label="Service Verticals" delay={0.24} />
          <StatItem target={99} suffix="%" label="Client Satisfaction" delay={0.36} />
        </div>
      </section>

      <section className="wd-netgains">
        <div className="wd-netgains__inner">
          <motion.div
            className="wd-netgains__text"
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
          >
            <motion.p
              className="wd-eyebrow"
              variants={{ hidden: { opacity: 0, x: -40, skewX: -10 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="wd-eyebrow__line" />Hooqx Hacks
            </motion.p>
            <motion.h2
              className="wd-section-title"
              variants={{ hidden: { opacity: 0, x: -50, skewX: -8 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Why Software Development is the<br />
              <span className="wd-grad-text">Real MVP</span>
            </motion.h2>
            <motion.p
              className="wd-section-body"
              variants={{ hidden: { opacity: 0, x: -40, skewX: -6 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              In a digital world filled with competition, the right software is your secret bait for
              success. At Hooqx, we create tools that hook your audience and keep them coming back.
            </motion.p>
            <motion.div
              className="wd-bullets"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                'Reel in efficiency with software built around your workflows',
                'Hook users with intuitive journeys and frictionless interactions',
                'Scale with confidence through cloud-ready architecture',
                'Deliver innovation that drives measurable growth',
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="wd-bullet"
                  variants={{ hidden: { opacity: 0, x: -60, skewX: -8 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  <span className="wd-bullet__check">
                    <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                      <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="wd-netgains__image"
            initial={{ opacity: 0, rotateY: -18, scale: 0.88 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
          >
            <img src={netGainsImg} alt="Software development outcomes" />
            <div className="wd-netgains__glow" />
            <motion.div
              className="wd-netgains__badge"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.5, type: 'spring', stiffness: 280, damping: 20 }}
            >
              <span className="wd-netgains__badge-emoji">MVP</span>
              <div>
                <div className="wd-netgains__badge-num">High</div>
                <div className="wd-netgains__badge-label">Business Impact</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="wd-services" id="services">
        <div className="wd-services__blob" />
        <div className="wd-services__inner">
          <motion.div
            className="wd-services__header"
            initial={{ opacity: 0, y: -44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="wd-eyebrow"><span className="wd-eyebrow__line" />What We Offer</p>
            <h2 className="wd-section-title">Services <span className="wd-grad-text">Included</span></h2>
            <p className="wd-section-body wd-section-body--center">
              Team Hooqx does not just build software. We engineer experiences from pixels to profit.
            </p>
          </motion.div>

          <div className="wd-services__grid">
            {SERVICES.map((title, i) => (
              <motion.div
                key={title}
                className="wd-service-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 180, damping: 22, delay: Math.floor(i / 2) * 0.1 }}
                whileHover={{ scale: 1.025, y: -5, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="wd-service-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="wd-service-card__body">
                  <h3 className="wd-service-card__title">{title}</h3>
                  <p className="wd-service-card__desc">Built with a strategy-first approach tailored to your product goals.</p>
                </div>
                <div className="wd-service-card__arrow">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="wd-service-card__glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-why">
        <div className="wd-why__inner">
          <motion.div
            className="wd-why__image"
            initial={{ opacity: 0, scale: 0.82, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={whyImg} alt="Software development at Hooqx" />
            <div className="wd-why__img-border" />
            <motion.div
              className="wd-why__img-pill"
              initial={{ opacity: 0, y: -16, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
            >
              <svg viewBox="0 0 20 20" fill="#7c3aed" width="16" height="16">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Built by Tech-Savvy Enthusiasts</span>
            </motion.div>
          </motion.div>

          <div className="wd-why__text">
            <motion.p
              className="wd-eyebrow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            >
              <span className="wd-eyebrow__line" />From Pixels to Profit
            </motion.p>
            <motion.h2
              className="wd-section-title"
              initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={vp}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              The Magic of <span className="wd-grad-text">Software Development</span><br />
              at Hooqx
            </motion.h2>
            <motion.p
              className="wd-section-body"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.15 }}
            >
              We engineer experiences that hook users from the first click. With creativity, precision,
              and a strong innovation mindset, your digital product does not just stay afloat. It sails.
            </motion.p>
            <div className="wd-why__features">
              {[
                { label: 'Creativity Meets Precision', desc: 'Every solution balances elegant design with strong engineering rigor.' },
                { label: 'Innovation-Driven Culture', desc: 'We continuously adopt practical new technologies that deliver impact.' },
                { label: 'Performance-Focused Delivery', desc: 'Fast, stable, and scalable software tuned for real-world usage.' },
                { label: 'Partnership Beyond Launch', desc: 'From roadmap to support, we stay invested in your long-term growth.' },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="wd-why__feature"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ type: 'spring', stiffness: 200, damping: 24, delay: 0.25 + i * 0.1 }}
                >
                  <div className="wd-why__feature-check">
                    <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                      <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="wd-why__feature-label">{f.label}</div>
                    <div className="wd-why__feature-desc">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="mailto:hello@hooqx.com"
              className="wd-btn wd-btn--primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.65, type: 'spring', stiffness: 240, damping: 20 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Start Your Project
            </motion.a>
          </div>
        </div>
      </section>

      <section className="wd-process">
        <div className="wd-process__inner">
          <motion.div
            className="wd-process__header"
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="wd-eyebrow"><span className="wd-eyebrow__line" />How We Work</p>
            <h2 className="wd-section-title">Our <span className="wd-grad-text">Process</span></h2>
          </motion.div>

          <div className="wd-process__body">
            <div className="wd-process__steps">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={i}
                  className="wd-process__step"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ type: 'spring', stiffness: 170, damping: 22, delay: i * 0.14 }}
                >
                  <div className="wd-process__num">{p.num}</div>
                  <div className="wd-process__content">
                    <h3 className="wd-process__title">{p.title}</h3>
                    <p className="wd-process__desc">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="wd-process__image"
              initial={{ opacity: 0, y: 80, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={vp}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={processImg} alt="Software development process" />
              <div className="wd-process__image-glow" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="wd-testi">
        <div className="wd-testi__blob wd-testi__blob--1" />
        <div className="wd-testi__blob wd-testi__blob--2" />
        <div className="wd-testi__inner">
          <motion.div
            className="wd-testi__header"
            initial={{ opacity: 0, scale: 0.78, filter: 'blur(14px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="wd-eyebrow"><span className="wd-eyebrow__line" />Client Stories</p>
            <h2 className="wd-section-title">What Our <span className="wd-grad-text">Clients Say</span></h2>
            <p className="wd-section-body wd-section-body--center">Real results. Real people. Real satisfaction.</p>
          </motion.div>

          <div className="wd-testi__grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="wd-testi-card"
                initial={{ opacity: 0, rotateX: 42, y: 60 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 160, damping: 22, delay: i * 0.16 }}
                style={{ transformPerspective: 1000 }}
                whileHover={{ y: -10, rotateX: -3, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
              >
                <Stars count={t.rating} />
                <p className="wd-testi-card__quote">"{t.quote}"</p>
                <div className="wd-testi-card__author">
                  <div className="wd-testi-card__avatar">
                    <video src={t.video} muted loop playsInline autoPlay />
                  </div>
                  <div>
                    <div className="wd-testi-card__name">{t.name}</div>
                    <div className="wd-testi-card__role">
                      <svg viewBox="0 0 20 20" fill="#34d399" width="11" height="11">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="wd-testi-card__glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-faq">
        <div className="wd-faq__inner">
          <motion.div
            className="wd-faq__header"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="wd-eyebrow"><span className="wd-eyebrow__line" />Got Questions?</p>
            <h2 className="wd-section-title">Frequently Asked <span className="wd-grad-text">Questions</span></h2>
          </motion.div>

          <div className="wd-faq__list">
            {FAQS.map((f, i) => (
              <motion.div
                key={i}
                className={`wd-faq-item${openFaq === i ? ' wd-faq-item--open' : ''}`}
                initial={{ opacity: 0, x: -50, skewY: 3 }}
                whileInView={{ opacity: 1, x: 0, skewY: 0 }}
                viewport={vp}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  className="wd-faq-item__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="wd-faq-item__icon">
                    <motion.svg
                      viewBox="0 0 16 16" fill="none" width="16" height="16"
                      animate={{ rotate: openFaq === i ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </motion.svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="wd-faq-item__a"
                      initial={{ height: 0, opacity: 0, y: -8 }}
                      animate={{ height: 'auto', opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}
                      exit={{ height: 0, opacity: 0, y: -8, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="wd-cta">
        <div className="wd-cta__blob" />
        <div className="wd-cta__grid" />
        <motion.div
          className="wd-cta__inner"
          initial={{ opacity: 0, scale: 0.82, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={vp}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="wd-cta__title">
            Ready to Build Software That <span className="wd-grad-text">Hooks and Scales?</span>
          </h2>
          <p className="wd-cta__sub">
            Dive in with Hooqx where software excellence is not just a goal, it is our favorite catch.
          </p>
          <motion.div
            className="wd-cta__btns"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 22 }}
          >
            <motion.a
              href="mailto:hello@hooqx.com"
              className="wd-btn wd-btn--primary wd-btn--lg"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(124,58,237,0.65)' }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Free Quote
            </motion.a>
            <motion.a
              href="#"
              className="wd-btn wd-btn--ghost wd-btn--lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
