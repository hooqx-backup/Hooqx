import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import heroBannerImg from '../../assets/images/appdevelopment-banner.jpg'
import impactImg    from '../../assets/images/appdevelopment1.jpg'
import whyImg       from '../../assets/images/appdevelopment2.jpg'
import processImg   from '../../assets/images/appdevelopment3.jpg'
import vid1 from '../../assets/videos/customer1.webm'
import vid2 from '../../assets/videos/customer2.webm'
import vid3 from '../../assets/videos/customer3.webm'
import './AppDevelopmentPage.css'

/* ── Counter ── */
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

/* ── STATS: 3D rotateX flip (different axis from web-dev's rotateY) ── */
function StatItem({ target, suffix, label, delay }) {
  const [count, ref] = useCounter(target)
  return (
    <motion.div
      className="ad-stat"
      initial={{ opacity: 0, rotateX: 90, y: 20 }}
      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
      viewport={vp}
      transition={{ type: 'spring', stiffness: 160, damping: 20, delay }}
      style={{ transformPerspective: 700 }}
    >
      <div ref={ref} className="ad-stat__num">{count}{suffix}</div>
      <div className="ad-stat__label">{label}</div>
    </motion.div>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="ad-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" width="14" height="14" fill={i < count ? '#f59e0b' : 'rgba(245,158,11,0.2)'}>
          <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6L8 1z" />
        </svg>
      ))}
    </div>
  )
}

const SERVICES = [
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>),
    title: 'Android & iOS App',
    desc: 'Native apps for both platforms — built with Swift, Kotlin, and modern frameworks that deliver buttery-smooth performance on every device.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>),
    title: 'Business App',
    desc: 'Powerful business applications with seamless user experiences, secure transactions, real-time data, and personalised features.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>),
    title: 'Payment App',
    desc: 'Secure, PCI-compliant payment solutions with multi-gateway integration, digital wallets, and real-time transaction tracking.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>),
    title: 'Learning Management System',
    desc: 'Feature-rich LMS apps with video courses, progress tracking, quizzes, certifications, and live classroom capabilities.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
    title: 'Custom Requirements',
    desc: 'Fully bespoke app solutions engineered to your exact specifications — no templates, no compromises, no limits.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>),
    title: 'Social Networking App',
    desc: 'Engaging community platforms with real-time feeds, stories, direct messaging, live streaming, and smart content discovery.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
    title: 'Health & Fitness App',
    desc: 'Wellness apps with workout tracking, nutrition logging, wearable sync, AI-powered coaching, and personalised goal setting.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>),
    title: 'Entertainment App',
    desc: 'Immersive media apps for streaming, gaming, podcasts, and interactive content — built for millions of concurrent users.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>),
    title: 'Travel & Tourism App',
    desc: 'End-to-end travel apps with booking engines, itinerary planning, offline maps, real-time alerts, and local discovery features.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>),
    title: 'Productivity App',
    desc: 'Task managers, collaboration tools, and workflow apps that eliminate friction and help teams accomplish more every day.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Musa Al Jaber', role: 'Verified Customer', rating: 5, video: vid1,
    quote: 'Hooqx is very good and respond back quickly, their SEO technique make my website come to the top of the search. Very nice service! I will recommend for sure.',
  },
  {
    name: 'Daniel W.', role: 'Verified Customer', rating: 5, video: vid2,
    quote: "Hooqx flawlessly executed our digital campaign, seamlessly translating our brand's identity into success. Their attention to detail surpassed our goals, and we're eager to continue with them.",
  },
  {
    name: 'Lisa Chen', role: 'Verified Customer', rating: 5, video: vid3,
    quote: 'Hooqx shines in the digital crowd with their creativity and expertise. Their visually stunning apps and engaging campaigns transformed our brand, setting them apart with dedication.',
  },
]

const FAQS = [
  { q: 'What types of apps does Hooqx build?', a: 'We build native iOS and Android apps, cross-platform apps using React Native and Flutter, Progressive Web Apps (PWA), and enterprise-grade mobile solutions across all major industries.' },
  { q: 'Do you build both iOS and Android apps?', a: 'Yes. We develop for both platforms — either as separate native apps for maximum performance, or as a single cross-platform codebase to optimise your budget and timeline.' },
  { q: 'How long does it take to build a mobile app?', a: 'A standard MVP typically takes 8–14 weeks. Feature-rich consumer apps usually take 4–8 months. We provide a detailed milestone roadmap after our discovery phase so you always know what to expect.' },
  { q: 'Will my app be published on the App Store and Google Play?', a: 'Absolutely. We handle the full submission process — including compliance, metadata, screenshots, and review resolutions — for both the Apple App Store and Google Play Store.' },
  { q: 'Do you provide app maintenance after launch?', a: 'Yes. We offer dedicated maintenance packages covering OS compatibility updates, bug fixes, performance optimisation, security patches, and new feature development.' },
  { q: 'Can you rebuild or modernise my existing app?', a: 'Definitely. We audit your current app, identify bottlenecks and outdated patterns, then rebuild or refactor it using modern frameworks — without disrupting your existing user base.' },
]

const PROCESS = [
  { num: '01', title: 'Discovery & Scoping', desc: 'We map your user journeys, technical requirements, and competitive landscape to define a bulletproof product scope.' },
  { num: '02', title: 'UX Research & Design', desc: 'Our designers prototype every screen, validate with real users, and produce pixel-perfect specs before a single line of code is written.' },
  { num: '03', title: 'Agile Development', desc: 'Two-week sprints with continuous delivery let you see progress, provide feedback, and pivot fast without blowing the budget.' },
  { num: '04', title: 'Launch & Grow', desc: 'We submit to the app stores, monitor crash reports and analytics, and keep shipping improvements after go-live.' },
]

export default function AppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const heroRef = useRef(null)

  /* Parallax background */
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroBgY     = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <main className="ad">

      {/* ══════════════════════════════════════
          HERO — parallax bg + y-rise stagger (different from web-dev's x-based hero)
      ══════════════════════════════════════ */}
      <section className="ad-hero" ref={heroRef}>
        <motion.div className="ad-hero__bg" style={{ backgroundImage: `url(${heroBannerImg})`, y: heroBgY }} />
        <div className="ad-hero__grid" />
        <div className="ad-hero__blob ad-hero__blob--1" />
        <div className="ad-hero__blob ad-hero__blob--2" />
        <div className="ad-hero__blob ad-hero__blob--3" />
        <div className="ad-hero__particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="ad-hero__particle" style={{ '--i': i }} />
          ))}
        </div>

        <motion.div className="ad-hero__inner" style={{ opacity: heroOpacity }}>
          {/* Left: stagger children rising from below */}
          <motion.div
            className="ad-hero__content"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } } }}
          >
            <motion.p
              className="ad-eyebrow"
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="ad-eyebrow__line" />App Development Services
            </motion.p>
            <motion.h1
              className="ad-hero__title"
              variants={{ hidden: { opacity: 0, y: 48, filter: 'blur(12px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Great Design Meets<br />
              <span className="ad-grad-text">Seamless Development</span>
            </motion.h1>
            <motion.p
              className="ad-hero__sub"
              variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              At Hooqx, we believe great design and seamless development are the cornerstones of a
              powerful digital presence. From captivating app designs to robust backend development —
              aesthetics meet functionality, and user experience takes centre stage.
            </motion.p>
            <motion.div
              className="ad-hero__cta"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="ad-btn ad-btn--primary">Explore Services</a>
              <a href="mailto:hello@hooqx.com" className="ad-btn ad-btn--ghost">Let's Talk</a>
            </motion.div>
          </motion.div>

          {/* Right: phone mockup visual — scale+rotateX entrance */}
          <motion.div
            className="ad-hero__visual"
            initial={{ opacity: 0, y: 80, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
          >
            <div className="ad-phone">
              <div className="ad-phone__frame">
                <div className="ad-phone__notch" />
                <div className="ad-phone__screen">
                  <div className="ad-phone__header">
                    <span className="ad-phone__avatar" />
                    <div className="ad-phone__header-text">
                      <div className="ad-phone__name">Hooqx App</div>
                      <div className="ad-phone__status">● Active</div>
                    </div>
                  </div>
                  <div className="ad-phone__metric">
                    <div className="ad-phone__metric-num">98%</div>
                    <div className="ad-phone__metric-label">App Store Rating</div>
                    <div className="ad-phone__bar"><div className="ad-phone__bar-fill" /></div>
                  </div>
                  <div className="ad-phone__tags">
                    <span>iOS</span><span>Android</span><span>Flutter</span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="ad-hero__badge ad-hero__badge--1"
              initial={{ opacity: 0, scale: 0.6, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 300, damping: 18 }}
            >
              <svg viewBox="0 0 20 20" fill="#34d399" width="18" height="18">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>300+ Apps Shipped</span>
            </motion.div>
            <motion.div
              className="ad-hero__badge ad-hero__badge--2"
              initial={{ opacity: 0, scale: 0.6, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 300, damping: 18 }}
            >
              <svg viewBox="0 0 20 20" fill="#f59e0b" width="18" height="18">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9★ App Store Average</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="ad-hero__scroll">
          <div className="ad-hero__scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS — rotateX flip (forward tumble, vs web-dev's side flip)
      ══════════════════════════════════════ */}
      <section className="ad-stats">
        <div className="ad-stats__inner">
          <StatItem target={300} suffix="+" label="Apps Shipped"          delay={0} />
          <StatItem target={200} suffix="+" label="Happy Clients"         delay={0.12} />
          <StatItem target={5}   suffix="+"  label="Years Experience"     delay={0.24} />
          <StatItem target={99}  suffix="%" label="App Store Approval"    delay={0.36} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          APP IMPACT — text slides from RIGHT, image clips in from left (reversed vs web-dev)
      ══════════════════════════════════════ */}
      <section className="ad-impact">
        <div className="ad-impact__inner">
          {/* Image: clip-path wipe from left + subtle rotation */}
          <motion.div
            className="ad-impact__image"
            initial={{ opacity: 0, x: -80, rotate: 4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={impactImg} alt="App development impact" />
            <div className="ad-impact__glow" />
            <motion.div
              className="ad-impact__badge"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.6, type: 'spring', stiffness: 280, damping: 20 }}
            >
              <span className="ad-impact__badge-emoji">📱</span>
              <div>
                <div className="ad-impact__badge-num">5B+</div>
                <div className="ad-impact__badge-label">App Store Downloads</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text: stagger from right */}
          <motion.div
            className="ad-impact__text"
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
          >
            <motion.p
              className="ad-eyebrow"
              variants={{ hidden: { opacity: 0, x: 50, skewX: 10 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="ad-eyebrow__line" />Get Hooked
            </motion.p>
            <motion.h2
              className="ad-section-title"
              variants={{ hidden: { opacity: 0, x: 60, skewX: 8 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            >
              The Urgency of App<br />
              Development <span className="ad-grad-text">Today</span>
            </motion.h2>
            <motion.p
              className="ad-section-body"
              variants={{ hidden: { opacity: 0, x: 50, skewX: 6 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              As the mobile landscape continues to evolve rapidly, embarking on app development now
              is paramount. Having a seamlessly functional and innovative app is instrumental in
              reaching and engaging your target audience in today's dynamic digital environment.
            </motion.p>
            <motion.div
              className="ad-bullets"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                'Reach users anywhere, anytime — even offline',
                'Push notifications drive 7× higher engagement',
                'Native gestures and hardware create unmatched UX',
                'In-app purchases unlock direct monetisation channels',
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className="ad-bullet"
                  variants={{ hidden: { opacity: 0, x: 55, skewX: 8 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  <span className="ad-bullet__check">
                    <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                      <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — waterfall top-to-bottom stagger (vs web-dev's zigzag)
      ══════════════════════════════════════ */}
      <section className="ad-services" id="services">
        <div className="ad-services__blob" />
        <div className="ad-services__inner">
          {/* Header: wipe from centre (scale + blur) */}
          <motion.div
            className="ad-services__header"
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="ad-eyebrow"><span className="ad-eyebrow__line" />What We Build</p>
            <h2 className="ad-section-title">Services <span className="ad-grad-text">Included</span></h2>
            <p className="ad-section-body ad-section-body--center">
              From Android & iOS to niche verticals — comprehensive mobile solutions engineered for every industry.
            </p>
          </motion.div>

          {/* Cards: waterfall — pure top-to-bottom index delay, no alternating */}
          <div className="ad-services__grid">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className="ad-service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, y: -6, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="ad-service-card__icon">{s.icon}</div>
                <div className="ad-service-card__body">
                  <h3 className="ad-service-card__title">{s.title}</h3>
                  <p className="ad-service-card__desc">{s.desc}</p>
                </div>
                <div className="ad-service-card__arrow">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="ad-service-card__glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY HOOQX — image scale+blur from right, features pop-in with spring from left
      ══════════════════════════════════════ */}
      <section className="ad-why">
        <div className="ad-why__inner">
          <div className="ad-why__text">
            <motion.p
              className="ad-eyebrow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            >
              <span className="ad-eyebrow__line" />App-solutely Essential
            </motion.p>
            <motion.h2
              className="ad-section-title"
              initial={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={vp}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Hooqx's Take on<br />
              <span className="ad-grad-text">Modern App Development</span>
            </motion.h2>
            <motion.p
              className="ad-section-body"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.15 }}
            >
              We pride ourselves as the greatest in app development, crafting cutting-edge solutions
              that marry technology with user experience. Your app will not only meet industry
              benchmarks but stand out in the competitive digital landscape — providing a seamless
              and engaging mobile experience your users will love.
            </motion.p>
            <div className="ad-why__features">
              {[
                { label: 'Performance-First Engineering', desc: '60fps animations, sub-second load times, and battery-efficient code as standard.' },
                { label: 'App Store Expertise', desc: "We know Apple's and Google's guidelines inside-out, ensuring first-try approval." },
                { label: 'Post-Launch Growth', desc: 'ASO, push strategy, and analytics built in from day one — not bolted on after.' },
                { label: 'Dedicated Mobile Team', desc: 'iOS, Android, and cross-platform specialists — not generalists — on every project.' },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  className="ad-why__feature"
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ type: 'spring', stiffness: 200, damping: 24, delay: 0.25 + i * 0.1 }}
                >
                  <div className="ad-why__feature-check">
                    <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
                      <polyline points="2,6 5,9 10,3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="ad-why__feature-label">{f.label}</div>
                    <div className="ad-why__feature-desc">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.a
              href="mailto:hello@hooqx.com"
              className="ad-btn ad-btn--primary"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.65, type: 'spring', stiffness: 240, damping: 20 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Start Your App
            </motion.a>
          </div>

          {/* Image: scale+blur from right (inverted vs web-dev's left image) */}
          <motion.div
            className="ad-why__image"
            initial={{ opacity: 0, scale: 0.82, x: 60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={whyImg} alt="Why Hooqx for app development" />
            <div className="ad-why__img-border" />
            <motion.div
              className="ad-why__img-pill"
              initial={{ opacity: 0, y: 16, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
            >
              <svg viewBox="0 0 20 20" fill="#7c3aed" width="16" height="16">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>200+ Happy Clients</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS — radial pop (scale from 0) per step + image parallax-style reveal
      ══════════════════════════════════════ */}
      <section className="ad-process">
        <div className="ad-process__inner">
          <motion.div
            className="ad-process__header"
            initial={{ opacity: 0, y: -44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="ad-eyebrow"><span className="ad-eyebrow__line" />How We Build</p>
            <h2 className="ad-section-title">Our <span className="ad-grad-text">Process</span></h2>
          </motion.div>

          <div className="ad-process__body">
            <div className="ad-process__steps">
              {PROCESS.map((p, i) => (
                <motion.div
                  key={i}
                  className="ad-process__step"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={vp}
                  transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.14 }}
                >
                  <div className="ad-process__num">{p.num}</div>
                  <div className="ad-process__content">
                    <h3 className="ad-process__title">{p.title}</h3>
                    <p className="ad-process__desc">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="ad-process__image"
              initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={vp}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={processImg} alt="Our app development process" />
              <div className="ad-process__image-glow" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS — alternating x-slide left/right per card (vs web-dev's rotateX flip)
      ══════════════════════════════════════ */}
      <section className="ad-testi">
        <div className="ad-testi__blob ad-testi__blob--1" />
        <div className="ad-testi__blob ad-testi__blob--2" />
        <div className="ad-testi__inner">
          <motion.div
            className="ad-testi__header"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="ad-eyebrow"><span className="ad-eyebrow__line" />Client Stories</p>
            <h2 className="ad-section-title">What Our <span className="ad-grad-text">Clients Say</span></h2>
            <p className="ad-section-body ad-section-body--center">Real apps. Real users. Real satisfaction.</p>
          </motion.div>

          <div className="ad-testi__grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="ad-testi-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 170, damping: 22, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
              >
                <Stars count={t.rating} />
                <p className="ad-testi-card__quote">"{t.quote}"</p>
                <div className="ad-testi-card__author">
                  <div className="ad-testi-card__avatar">
                    <video src={t.video} muted loop playsInline autoPlay />
                  </div>
                  <div>
                    <div className="ad-testi-card__name">{t.name}</div>
                    <div className="ad-testi-card__role">
                      <svg viewBox="0 0 20 20" fill="#34d399" width="11" height="11">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {t.role}
                    </div>
                  </div>
                </div>
                <div className="ad-testi-card__glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ — right-to-left slide with skewX (vs web-dev's left skewY)
      ══════════════════════════════════════ */}
      <section className="ad-faq">
        <div className="ad-faq__inner">
          <motion.div
            className="ad-faq__header"
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="ad-eyebrow"><span className="ad-eyebrow__line" />Got Questions?</p>
            <h2 className="ad-section-title">Frequently Asked <span className="ad-grad-text">Questions</span></h2>
          </motion.div>

          <div className="ad-faq__list">
            {FAQS.map((f, i) => (
              <motion.div
                key={i}
                className={`ad-faq-item${openFaq === i ? ' ad-faq-item--open' : ''}`}
                initial={{ opacity: 0, x: 55, skewX: -4 }}
                whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                viewport={vp}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <button className="ad-faq-item__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="ad-faq-item__icon">
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
                      className="ad-faq-item__a"
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

      {/* ══════════════════════════════════════
          CTA — y-rise from below (vs web-dev's scale+blur zoom)
      ══════════════════════════════════════ */}
      <section className="ad-cta">
        <div className="ad-cta__blob" />
        <div className="ad-cta__grid" />
        <div className="ad-cta__inner">
          <motion.h2
            className="ad-cta__title"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to Ship Your<br />
            <span className="ad-grad-text">Dream App?</span>
          </motion.h2>
          <motion.p
            className="ad-cta__sub"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            From idea to App Store in weeks. Let's build something your users will love.
          </motion.p>
          <motion.div
            className="ad-cta__btns"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 22 }}
          >
            <motion.a
              href="mailto:hello@hooqx.com"
              className="ad-btn ad-btn--primary ad-btn--lg"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(124,58,237,0.65)' }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Free Quote
            </motion.a>
            <motion.a
              href="#"
              className="ad-btn ad-btn--ghost ad-btn--lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
