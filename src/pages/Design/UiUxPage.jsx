import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import img1 from '../../assets/images/uiux1.jpg'
import img2 from '../../assets/images/uiux2.jpg'
import img3 from '../../assets/images/uiux3.jpg'
import img4 from '../../assets/images/uiux4.jpg'
import vid1 from '../../assets/videos/customer1.webm'
import vid2 from '../../assets/videos/customer2.webm'
import vid3 from '../../assets/videos/customer3.webm'
import './UiUxPage.css'

function useCounter(target, duration = 2200) {
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
          setCount(Math.round((1 - Math.pow(1 - p, 4)) * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])
  return [count, ref]
}

const TICKER = [
  'UX Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Figma',
  'Usability Testing', 'Information Architecture', 'Interaction Design',
  'Mobile UI', 'Web Interface', 'Motion Design', 'Dev Handoff', 'User Flows',
]

const SERVICES = [
  {
    num: '01',
    title: 'UX Research & Strategy',
    desc: 'Before a pixel is placed, we understand your users deeply. Interviews, analytics audits, competitive analysis, and journey mapping give every design decision a data-backed reason to exist.',
    tags: ['User Interviews', 'Journey Mapping', 'Personas', 'Competitive Analysis'],
  },
  {
    num: '02',
    title: 'Wireframing & Prototyping',
    desc: 'From lo-fi sketches to fully interactive click-through prototypes — we validate structure, flow, and logic before committing to high-fidelity design, saving you time and budget.',
    tags: ['Lo-Fi Wireframes', 'Interactive Prototypes', 'User Flows', 'Information Architecture'],
  },
  {
    num: '03',
    title: 'UI Design Systems',
    desc: 'Scalable component libraries, design tokens, and Figma systems that keep every screen consistent and every new feature fast to ship — the backbone of any world-class product.',
    tags: ['Component Libraries', 'Design Tokens', 'Figma Systems', 'Style Guides'],
  },
  {
    num: '04',
    title: 'Mobile App Design',
    desc: 'Native iOS and Android UI that feels intuitive from the first tap. We design for the platform conventions users expect while pushing the experience well beyond the standard.',
    tags: ['iOS Design', 'Android Design', 'Cross-Platform', 'Gesture UX'],
  },
  {
    num: '05',
    title: 'Web Interface Design',
    desc: 'SaaS dashboards, e-commerce flows, landing pages, and admin interfaces designed for conversion, clarity, and delight — every interaction considered, every layout purposeful.',
    tags: ['SaaS Dashboards', 'E-Commerce', 'Landing Pages', 'Admin UI'],
  },
  {
    num: '06',
    title: 'Interaction & Motion Design',
    desc: 'Micro-interactions, state transitions, and animation systems that make your product feel alive. Motion that communicates meaning — not decoration — choreographed with precision.',
    tags: ['Micro-interactions', 'State Transitions', 'Lottie Animations', 'Motion Specs'],
  },
  {
    num: '07',
    title: 'Usability Testing & Audit',
    desc: 'Structured user testing, expert UX audits, and heatmap analysis that surface the friction your users feel but can\'t articulate — so you fix what actually moves the needle.',
    tags: ['Moderated Testing', 'UX Audits', 'Heatmap Analysis', 'Accessibility Review'],
  },
  {
    num: '08',
    title: 'Design-to-Dev Handoff',
    desc: 'Pixel-perfect specs, annotated mockups, asset exports, and Figma Dev Mode setup that eliminates ambiguity and gets your product shipped exactly as it was designed.',
    tags: ['Figma Dev Mode', 'Asset Export', 'Spec Annotations', 'Design Tokens'],
  },
]

const STATS = [
  { num: 300, suffix: '+', label: 'Products Shipped', sub: 'across web and mobile' },
  { num: 4, suffix: '.9★', label: 'Client Rating', sub: 'average across all projects' },
  { num: 60, suffix: '%', label: 'Avg. Conversion Lift', sub: 'after UX redesign' },
  { num: 150, suffix: '+', label: 'Design Systems', sub: 'built and maintained' },
]

const WHY = [
  {
    path: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    title: 'Research Before Pixels',
    desc: 'We don\'t guess what users want — we ask, observe, and analyze. Every design decision is backed by real evidence, not assumption or trend-chasing.',
  },
  {
    path: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
    title: 'Systems Thinking',
    desc: 'Every screen is part of a cohesive system. We build design systems that scale gracefully, not one-off screens that accumulate into unsustainable debt.',
  },
  {
    path: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    title: 'Developer Fluency',
    desc: 'We speak both design and engineering. Our handoffs are known for their clarity and completeness — what\'s designed is precisely what gets built.',
  },
  {
    path: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Outcome-Focused',
    desc: 'We measure success by your metrics: conversion rates, task completion, and retention — not by the volume of screens we delivered.',
  },
]

const PROCESS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Stakeholder interviews, user research, analytics audits, and competitive benchmarking to map the full opportunity space before any design begins.',
    path: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  },
  {
    num: '02',
    title: 'Define',
    desc: 'Information architecture, user flows, personas, and journey maps that give every screen a clear structural foundation rooted in user goals.',
    path: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Wireframes evolve into interactive prototypes, then pixel-perfect high-fidelity screens built on your brand system and validated with real users.',
    path: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'Developer handoff with Figma Dev Mode specs, annotated assets, design tokens, and a living system ready for continuous iteration post-launch.',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const TESTIMONIALS = [
  { name: 'Marcus T.', role: 'Verified Customer', rating: 5, video: vid1, quote: 'Hooqx redesigned our SaaS dashboard and the results were immediate. User onboarding time dropped by 40% in the first month. Their research process uncovered issues our team had missed for years.' },
  { name: 'Priya S.', role: 'Verified Customer', rating: 5, video: vid2, quote: 'The design system they built for us has transformed how we ship features. What used to take weeks now takes days. Every component is documented, accessible, and pixel-perfect.' },
  { name: 'Oliver N.', role: 'Verified Customer', rating: 5, video: vid3, quote: 'Our app redesign by Hooqx drove a 58% lift in conversion and our App Store rating went from 3.2 to 4.8 within three months. The attention to user experience was extraordinary.' },
]

const FAQS = [
  { q: 'What is the difference between UI and UX design?', a: 'UX (User Experience) is the strategy — research, flows, architecture, and logic that make a product intuitive. UI (User Interface) is the execution — the visual design, components, and polish. We deliver both together as a unified, inseparable practice.' },
  { q: 'Do you work with early-stage startups or established products?', a: 'Both. For startups, we move fast with lean research and rapid iteration to validate ideas early. For established products, we conduct deeper audits, work within existing design systems, and focus on measurable improvements to core user flows.' },
  { q: 'What tools do you use for UI/UX design?', a: 'Figma is our primary tool for UI design, prototyping, and handoff. We also use FigJam for workshops, Maze or Useberry for testing, Hotjar for analytics, and Lottie/After Effects for motion work.' },
  { q: 'How long does a typical UI/UX project take?', a: 'A focused UX audit or landing page redesign can be completed in 1–2 weeks. A full product redesign with research, design system, and complete feature coverage typically runs 6–16 weeks depending on scope and complexity.' },
  { q: 'Do you conduct user research and testing?', a: 'Yes — research is built into every engagement, not treated as optional. We run moderated user testing sessions, unmoderated remote tests, and expert heuristic audits to validate designs before and after development.' },
  { q: 'How does the design handoff work?', a: 'We set up Figma Dev Mode with annotated specs, design tokens, and organized component pages. We also provide an asset export package and a walkthrough session with your dev team to ensure zero ambiguity during implementation.' },
]

function Stars({ count = 5 }) {
  return (
    <div className="ux-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" width="15" height="15" fill={i < count ? 'var(--accent)' : 'rgba(167,139,250,0.2)'}>
          <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6L8 1z" />
        </svg>
      ))}
    </div>
  )
}

function StatBlock({ num, suffix, label, sub, delay }) {
  const [count, ref] = useCounter(num)
  return (
    <motion.div
      className="ux-stat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div ref={ref} className="ux-stat__num">{count}{suffix}</div>
      <div className="ux-stat__label">{label}</div>
      <div className="ux-stat__sub">{sub}</div>
    </motion.div>
  )
}

export default function UiUxPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [testiIdx, setTestiIdx] = useState(0)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  useEffect(() => {
    const id = window.setInterval(() => {
      setTestiIdx(i => (i + 1) % TESTIMONIALS.length)
    }, 5200)
    return () => window.clearInterval(id)
  }, [])

  const prev = () => setTestiIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setTestiIdx(i => (i + 1) % TESTIMONIALS.length)

  return (
    <main className="ux">

      {/* ── HERO ── */}
      <section className="ux-hero" ref={heroRef}>
        <motion.div className="ux-hero__bg-wrap" style={{ y: heroBgY }}>
          <div className="ux-hero__bg-img" style={{ backgroundImage: `url(${img1})` }} />
          <div className="ux-hero__bg-overlay" />
          <div className="ux-hero__grid" />
        </motion.div>
        <div className="ux-hero__orb ux-hero__orb--1" />
        <div className="ux-hero__orb ux-hero__orb--2" />

        {/* Floating chips */}
        {[
          { label: 'UX Research',       cls: 'c1' },
          { label: 'Figma Certified',   cls: 'c2' },
          { label: 'Design Systems',    cls: 'c3' },
          { label: '300+ Products',     cls: 'c4' },
          { label: 'Usability Testing', cls: 'c5' },
        ].map((c, i) => (
          <motion.div
            key={i}
            className={`ux-chip ux-chip--${c.cls}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + i * 0.14, type: 'spring', stiffness: 260, damping: 22 }}
          >
            {c.label}
          </motion.div>
        ))}

        <motion.div className="ux-hero__inner" style={{ opacity: heroOpacity }}>
          <motion.div
            className="ux-hero__content"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          >
            <motion.p
              className="ux-eyebrow ux-eyebrow--center"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="ux-eyebrow__dot" />UI / UX Design
            </motion.p>

            <motion.h1
              className="ux-hero__title"
              variants={{ hidden: { opacity: 0, y: 48, filter: 'blur(14px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Products People<br />
              <span className="ux-grad">Love to Use.</span>
            </motion.h1>

            <motion.p
              className="ux-hero__sub"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              We combine deep user research with pixel-perfect execution to design digital products that feel effortless, drive conversion, and keep users coming back.
            </motion.p>

            <motion.div
              className="ux-hero__cta"
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="ux-btn ux-btn--primary">Explore UX Services</a>
              <a href="mailto:hello@hooqx.com" className="ux-btn ux-btn--outline">Get a Free UX Audit</a>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="ux-hero__scroll">
          <div className="ux-hero__scroll-mouse"><div className="ux-hero__scroll-wheel" /></div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ux-ticker">
        <div className="ux-ticker__track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="ux-ticker__item">
              <span className="ux-ticker__dot" />{item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="ux-stats">
        <div className="ux-stats__inner">
          {STATS.map((s, i) => <StatBlock key={i} {...s} delay={i * 0.11} />)}
        </div>
      </section>

      {/* ── SERVICES — editorial 2-col list ── */}
      <section className="ux-services" id="services">
        <div className="ux-services__inner">
          <div className="ux-services__header">
            <motion.p
              className="ux-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.55 }}
            >
              <span className="ux-eyebrow__dot" />What We Design
            </motion.p>
            <motion.h2
              className="ux-section-title"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              UI/UX <span className="ux-grad">Services</span>
            </motion.h2>
          </div>

          <div className="ux-svc-grid">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className="ux-svc-item"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: Math.min((i % 2) * 0.1, 0.2), ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="ux-svc-item__top">
                  <span className="ux-svc-item__num">{s.num}</span>
                  <h3 className="ux-svc-item__title">{s.title}</h3>
                </div>
                <p className="ux-svc-item__desc">{s.desc}</p>
                <div className="ux-svc-item__tags">
                  {s.tags.map((t, j) => <span key={j} className="ux-tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BENTO — uiux2 + uiux3 ── */}
      <section className="ux-bento">
        <div className="ux-bento__inner">
          <motion.div
            className="ux-bento__left"
            initial={{ opacity: 0, x: -48, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={img2} alt="UI/UX Design work" />
            <div className="ux-bento__left-glow" />
            <motion.div
              className="ux-bento__badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="ux-bento__badge-num">60%</div>
              <div className="ux-bento__badge-label">Avg. Conversion Lift</div>
            </motion.div>
          </motion.div>

          <motion.div
            className="ux-bento__right"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={vp}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={img3} alt="UX research and design" />
            <div className="ux-bento__right-glow" />
            <div className="ux-bento__pill">Research-Driven Design</div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY HOOQX — full-bleed uiux4 with frosted grid ── */}
      <section className="ux-why">
        <div className="ux-why__bg" style={{ backgroundImage: `url(${img4})` }} />
        <div className="ux-why__overlay" />
        <div className="ux-why__inner">
          <motion.div
            className="ux-why__header"
            initial={{ opacity: 0, y: -28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65 }}
          >
            <p className="ux-eyebrow ux-eyebrow--center"><span className="ux-eyebrow__dot" />Why Hooqx</p>
            <h2 className="ux-section-title ux-section-title--center">
              Design That <span className="ux-grad">Delivers Results.</span>
            </h2>
          </motion.div>

          <div className="ux-why__grid">
            {WHY.map((p, i) => (
              <motion.div
                key={i}
                className="ux-why__card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 160, damping: 22, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <div className="ux-why__card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d={p.path} />
                  </svg>
                </div>
                <h3 className="ux-why__card-title">{p.title}</h3>
                <p className="ux-why__card-desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="ux-why__cta"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.4, duration: 0.65 }}
          >
            <a href="mailto:hello@hooqx.com" className="ux-btn ux-btn--primary ux-btn--lg">
              Start Your UX Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS — horizontal 4 steps ── */}
      <section className="ux-process">
        <div className="ux-process__inner">
          <motion.div
            className="ux-process__header"
            initial={{ opacity: 0, y: -28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65 }}
          >
            <p className="ux-eyebrow ux-eyebrow--center"><span className="ux-eyebrow__dot" />How We Work</p>
            <h2 className="ux-section-title ux-section-title--center">
              Our Design <span className="ux-grad">Process</span>
            </h2>
          </motion.div>

          <div className="ux-process__steps">
            <div className="ux-process__connector-line" />
            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                className="ux-process__step"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 150, damping: 22, delay: i * 0.15 }}
              >
                <div className="ux-process__icon-wrap">
                  <div className="ux-process__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                      <path d={p.path} />
                    </svg>
                  </div>
                </div>
                <div className="ux-process__num">{p.num}</div>
                <h3 className="ux-process__title">{p.title}</h3>
                <p className="ux-process__desc">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="ux-testi">
        <div className="ux-testi__blob" />
        <div className="ux-testi__inner">
          <motion.div
            className="ux-testi__header"
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65 }}
          >
            <p className="ux-eyebrow ux-eyebrow--center"><span className="ux-eyebrow__dot" />Client Stories</p>
            <h2 className="ux-section-title ux-section-title--center">
              What Our <span className="ux-grad">Clients Say</span>
            </h2>
          </motion.div>

          <div className="ux-testi__carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={testiIdx}
                className="ux-testi__card"
                initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="ux-testi__quote-mark">"</div>
                <p className="ux-testi__quote">{TESTIMONIALS[testiIdx].quote}</p>
                <Stars count={TESTIMONIALS[testiIdx].rating} />
                <div className="ux-testi__author">
                  <div className="ux-testi__avatar">
                    <video src={TESTIMONIALS[testiIdx].video} muted loop playsInline autoPlay />
                  </div>
                  <div>
                    <div className="ux-testi__name">{TESTIMONIALS[testiIdx].name}</div>
                    <div className="ux-testi__role">
                      <svg viewBox="0 0 20 20" fill="#34d399" width="11" height="11">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {TESTIMONIALS[testiIdx].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="ux-testi__nav">
              <button className="ux-testi__nav-btn" onClick={prev}>
                <svg viewBox="0 0 16 16" fill="none" width="18" height="18">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="ux-testi__dots">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} className={`ux-testi__dot${i === testiIdx ? ' ux-testi__dot--active' : ''}`} onClick={() => setTestiIdx(i)} />
                ))}
              </div>
              <button className="ux-testi__nav-btn" onClick={next}>
                <svg viewBox="0 0 16 16" fill="none" width="18" height="18">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="ux-faq">
        <div className="ux-faq__inner">
          <motion.div
            className="ux-faq__header"
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65 }}
          >
            <p className="ux-eyebrow"><span className="ux-eyebrow__dot" />Got Questions?</p>
            <h2 className="ux-section-title">Frequently Asked <span className="ux-grad">Questions</span></h2>
          </motion.div>
          <div className="ux-faq__grid">
            {FAQS.map((f, i) => (
              <motion.div
                key={i}
                className={`ux-faq__item${openFaq === i ? ' ux-faq__item--open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              >
                <button className="ux-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <motion.span className="ux-faq__icon" animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.28 }}>
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="ux-faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, transition: { duration: 0.35 } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.22 } }}
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

      {/* ── CTA ── */}
      <section className="ux-cta">
        <div className="ux-cta__orb ux-cta__orb--1" />
        <div className="ux-cta__orb ux-cta__orb--2" />
        <motion.div
          className="ux-cta__inner"
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.88 }}
        >
          <p className="ux-eyebrow ux-eyebrow--center"><span className="ux-eyebrow__dot" />Ready to Build Better?</p>
          <h2 className="ux-cta__title">
            Users Don't Forgive<br />
            <span className="ux-grad">Bad Experiences.</span>
          </h2>
          <p className="ux-cta__sub">
            Get a free UX audit and find out exactly where your product is losing users — and how to fix it. No commitment needed.
          </p>
          <div className="ux-cta__btns">
            <motion.a
              href="mailto:hello@hooqx.com"
              className="ux-btn ux-btn--primary ux-btn--lg"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 48px rgba(124,58,237,0.5)' }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Free UX Audit
            </motion.a>
            <motion.a
              href="#services"
              className="ux-btn ux-btn--outline ux-btn--lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View All Services
            </motion.a>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
