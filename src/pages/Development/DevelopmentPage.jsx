import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import heroBannerImg from '../../assets/images/websitedevelopmentbanner.jpg'
import netGainsImg from '../../assets/images/websitedevelopment1.jpg'
import whyImg from '../../assets/images/websitedevelopment2.jpg'
import processImg from '../../assets/images/websitedevelopment3.jpg'
import vid1 from '../../assets/videos/customer1.webm'
import vid2 from '../../assets/videos/customer2.webm'
import vid3 from '../../assets/videos/customer3.webm'
import './DevelopmentPage.css'

/* ── Counter hook ── */
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

/* ── STATS: 3D coin-flip (rotateY) ── */
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
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
    title: 'Custom Website Development',
    desc: 'Tailor-made websites built from scratch to match your unique vision and business goals with scalable architecture.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.95-1.56L23 6H6" /></svg>),
    title: 'E-commerce Website Development',
    desc: 'Powerful online stores with seamless shopping experiences and conversion-optimised funnels.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>),
    title: 'Responsive Website Design',
    desc: 'Pixel-perfect designs that look and perform beautifully on every device and screen size.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>),
    title: 'CMS Development',
    desc: 'Custom content management solutions giving you full control of your digital content and assets.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>),
    title: 'Website Maintenance & Support',
    desc: 'Ongoing support to keep your site secure, updated, and running at peak performance.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
    title: 'Web Application Development',
    desc: 'Complex, scalable web apps engineered for performance, reliability, and seamless user experience.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></svg>),
    title: 'UI/UX Design & Development',
    desc: 'Intuitive interfaces that delight users and drive meaningful engagement and conversions.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /><line x1="12" y1="2" x2="12" y2="22" /></svg>),
    title: 'Front-end Development',
    desc: 'Fast, accessible, pixel-perfect front-ends built with React, Next.js, and modern frameworks.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /></svg>),
    title: 'Back-end Development',
    desc: 'Robust server-side architecture with secure APIs and optimised database management systems.',
  },
  {
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>),
    title: 'API Integration Services',
    desc: 'Seamlessly connect third-party services to extend and enhance your platform capabilities.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Barry John Harwood', role: 'Verified Customer', rating: 5, video: vid1,
    quote: 'Hooqx is very good and respond back quickly, their SEO technique make my website come to the top of the search. Very nice service! I will recommend for sure.',
  },
  {
    name: 'Nurten Kaymakci', role: 'Verified Customer', rating: 5, video: vid2,
    quote: "Hooqx flawlessly executed our digital campaign, seamlessly translating our brand's identity into success. Their attention to detail surpassed our goals, and we're eager to continue with them.",
  },
  {
    name: 'Danish Rizvi', role: 'Verified Customer', rating: 5, video: vid3,
    quote: 'Hooqx shines in the digital crowd with their creativity and expertise. Their visually stunning websites and engaging social campaigns transformed our brand, setting them apart with dedication.',
  },
]

const FAQS = [
  { q: 'What services does Hooqx offer?', a: 'Hooqx specializes in a wide range of web development services including website design, front-end development, back-end development, CMS development, web application development, and website maintenance.' },
  { q: 'How experienced is the team at Hooqx?', a: 'Our team consists of seasoned professionals with over 5 years of combined experience delivering 500+ projects across diverse industries worldwide. Each project is handled by dedicated domain experts who bring precision and passion to every line of code.' },
  { q: 'What technologies does Hooqx work with?', a: 'We work with modern technologies including React, Next.js, Node.js, Python, PHP, WordPress, Shopify, and many more — always selecting the best-fit stack for your specific project requirements and scalability goals.' },
  { q: 'How long does it take to build a website?', a: 'Timelines vary by complexity. A standard website typically takes 2–4 weeks, while complex web applications may take 3–6 months. We provide a detailed project roadmap with clear milestones during our initial consultation.' },
  { q: 'Do you provide website maintenance after launch?', a: 'Yes. We offer comprehensive maintenance and support packages to keep your website updated, secure, and performing optimally long after launch. Our team is available for ongoing improvements and emergency fixes.' },
  { q: 'Can you redesign or upgrade my existing website?', a: 'Absolutely. We handle full redesigns, platform migrations, performance optimization, and feature additions for existing websites and web applications of any scale.' },
]

const PROCESS = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We analyze your goals, audience, and competition to craft a data-driven digital roadmap that sets you up for success.' },
  { num: '02', title: 'Design & Prototype', desc: 'Our designers build stunning wireframes and interactive prototypes perfectly aligned with your brand identity.' },
  { num: '03', title: 'Build & Test', desc: 'Precision engineering with rigorous QA testing ensures a fast, secure, and production-ready product every time.' },
  { num: '04', title: 'Launch & Scale', desc: 'We deploy, monitor, and continuously optimize for performance, growth, and seamless feature delivery.' },
]

export default function DevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const heroRef = useRef(null)

  /* ── HERO: useScroll parallax for background ── */
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroBgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <main className="wd">

      {/* ══════════════════════════════════════
          HERO — parallax scroll + stagger reveal
          Unique: useScroll/useTransform parallax bg,
          content staggered upward, code card 3D slide-in
      ══════════════════════════════════════ */}
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
          {/* Left: stagger children upward */}
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
              <span className="wd-eyebrow__line" />Web Development Services
            </motion.p>
            <motion.h1
              className="wd-hero__title"
              variants={{ hidden: { opacity: 0, y: 36, filter: 'blur(10px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Turning Your Digital<br />
              <span className="wd-grad-text">Dreams Into Reality</span>
            </motion.h1>
            <motion.p
              className="wd-hero__sub"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Our web development team is dedicated to crafting scalable, efficient, and future-proof solutions.
              We don't just write code — we build digital experiences that elevate your business.
            </motion.p>
            <motion.div
              className="wd-hero__cta"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="wd-btn wd-btn--primary">Explore Services</a>
              <a href="mailto:hello@hooqx.com" className="wd-btn wd-btn--ghost">Let's Talk</a>
            </motion.div>
          </motion.div>

          {/* Right: 3D perspective slide-in */}
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
                <span className="wd-code-card__file">hooqx.config.js</span>
              </div>
              <pre className="wd-code-card__code"><span className="wd-c-kw">const</span> hooqx = {`{`}
  mission: <span className="wd-c-str">"Build the future"</span>,
  stack: [<span className="wd-c-str">"React"</span>, <span className="wd-c-str">"Node.js"</span>,
          <span className="wd-c-str">"Python"</span>, <span className="wd-c-str">"AWS"</span>],
  guarantee: <span className="wd-c-str">"100% Satisfaction"</span>,
  delivery:  <span className="wd-c-str">"On time, every time"</span>,
  clients:   <span className="wd-c-num">200</span><span className="wd-c-str">+</span>,
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
              <span>500+ Projects Delivered</span>
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
              <span>5-Star Rated Agency</span>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="wd-hero__scroll">
          <div className="wd-hero__scroll-line" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS — 3D rotateY coin-flip
          Unique: each card flips in on Y-axis like a coin
      ══════════════════════════════════════ */}
      <section className="wd-stats">
        <div className="wd-stats__inner">
          <StatItem target={500} suffix="+" label="Projects Delivered" delay={0} />
          <StatItem target={200} suffix="+" label="Happy Clients"       delay={0.12} />
          <StatItem target={5}   suffix="+" label="Years Experience"    delay={0.24} />
          <StatItem target={99}  suffix="%" label="Client Satisfaction" delay={0.36} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          NET GAINS — diagonal skew slide (text) + 3D rotateY (image)
          Unique: text items skew-slide from left, image does perspective Y-axis reveal
      ══════════════════════════════════════ */}
      <section className="wd-netgains">
        <div className="wd-netgains__inner">
          {/* Text: stagger with skew-slide */}
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
              <span className="wd-eyebrow__line" />Why It Matters
            </motion.p>
            <motion.h2
              className="wd-section-title"
              variants={{ hidden: { opacity: 0, x: -50, skewX: -8 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            >
              The Importance of<br />
              <span className="wd-grad-text">Web Development</span><br />
              in the Digital Age
            </motion.h2>
            <motion.p
              className="wd-section-body"
              variants={{ hidden: { opacity: 0, x: -40, skewX: -6 }, show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Investing in web development is crucial now more than ever. An optimized and visually
              captivating online presence is the key to standing out in today's competitive digital
              landscape and capturing your audience's attention.
            </motion.p>
            <motion.div
              className="wd-bullets"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
              {[
                'Dominate search rankings with performance-optimised code',
                'Convert visitors into loyal customers with seamless UX',
                'Scale effortlessly as your business grows globally',
                'Stay ahead with cutting-edge technology and innovation',
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

          {/* Image: 3D rotateY perspective reveal */}
          <motion.div
            className="wd-netgains__image"
            initial={{ opacity: 0, rotateY: -18, scale: 0.88 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 900 }}
          >
            <img src={netGainsImg} alt="Web development importance" />
            <div className="wd-netgains__glow" />
            <motion.div
              className="wd-netgains__badge"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ delay: 0.5, type: 'spring', stiffness: 280, damping: 20 }}
            >
              <span className="wd-netgains__badge-emoji">🚀</span>
              <div>
                <div className="wd-netgains__badge-num">3×</div>
                <div className="wd-netgains__badge-label">Faster Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES — zigzag alternating left/right + whileHover scale
          Unique: even cards slide from left, odd from right; spring bounce
      ══════════════════════════════════════ */}
      <section className="wd-services" id="services">
        <div className="wd-services__blob" />
        <div className="wd-services__inner">
          {/* Header: drop from top */}
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
              A full spectrum of web development services crafted to elevate your digital presence.
            </p>
          </motion.div>

          <div className="wd-services__grid">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className="wd-service-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 180, damping: 22, delay: Math.floor(i / 2) * 0.1 }}
                whileHover={{ scale: 1.025, y: -5, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="wd-service-card__icon">{s.icon}</div>
                <div className="wd-service-card__body">
                  <h3 className="wd-service-card__title">{s.title}</h3>
                  <p className="wd-service-card__desc">{s.desc}</p>
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

      {/* ══════════════════════════════════════
          WHY HOOQX — rotate+scale (image) + cascade spring from right (features)
          Unique: image rotates in from slight tilt, features bounce in from right with spring
      ══════════════════════════════════════ */}
      <section className="wd-why">
        <div className="wd-why__inner">
          {/* Image: rotate + scale entrance */}
          <motion.div
            className="wd-why__image"
            initial={{ opacity: 0, scale: 0.82, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={vp}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={whyImg} alt="Why Hooqx for web development" />
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
              <span>200+ Happy Clients</span>
            </motion.div>
          </motion.div>

          {/* Text: elements slide from right with spring */}
          <div className="wd-why__text">
            <motion.p
              className="wd-eyebrow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
            >
              <span className="wd-eyebrow__line" />Our Advantage
            </motion.p>
            <motion.h2
              className="wd-section-title"
              initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={vp}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Why Hooqx is Your<br />
              <span className="wd-grad-text">Best Catch</span> for Web Dev
            </motion.h2>
            <motion.p
              className="wd-section-body"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 0.15 }}
            >
              We stand out by seamlessly blending innovation, functionality, and user-centric design —
              ensuring your digital footprint not only meets industry standards but exceeds expectations,
              delivering an unparalleled online experience for your audience.
            </motion.p>
            <div className="wd-why__features">
              {[
                { label: 'Innovation-First Approach', desc: 'Cutting-edge tech stacks that outperform and outpace competitors.' },
                { label: 'User-Centric Design', desc: 'Every pixel serves a purpose — built around real user needs and behaviours.' },
                { label: 'Scalable Architecture', desc: 'Future-proof systems that grow seamlessly alongside your business.' },
                { label: 'Dedicated Ongoing Support', desc: 'A committed team behind your product from discovery to post-launch.' },
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
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS — alternating left/right steps (spring) + y-rise + tilt image
          Unique: odd steps slide from left, even from right; image rises with slight rotation
      ══════════════════════════════════════ */}
      <section className="wd-process">
        <div className="wd-process__inner">
          {/* Header: zoom-blur from centre */}
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
            {/* Image: rise from below with tilt */}
            <motion.div
              className="wd-process__image"
              initial={{ opacity: 0, y: 80, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={vp}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={processImg} alt="Our development process" />
              <div className="wd-process__image-glow" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS — 3D rotateX flip from above (like cards dealt on a table)
          Unique: cards flip in along X-axis with perspective, header does scale+blur
      ══════════════════════════════════════ */}
      <section className="wd-testi">
        <div className="wd-testi__blob wd-testi__blob--1" />
        <div className="wd-testi__blob wd-testi__blob--2" />
        <div className="wd-testi__inner">
          {/* Header: scale + blur zoom-in */}
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

          {/* Cards: rotateX flip from above */}
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

      {/* ══════════════════════════════════════
          FAQ — diagonal skewY slide-in per item
          Unique: items slide from left with vertical skew, unskew on arrival
      ══════════════════════════════════════ */}
      <section className="wd-faq">
        <div className="wd-faq__inner">
          {/* Header: y drop from top */}
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

      {/* ══════════════════════════════════════
          CTA — dramatic zoom-blur entrance for whole block
          Unique: entire inner block scales up from 0.82 with blur dissolve
      ══════════════════════════════════════ */}
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
            Ready to Build Something{' '}
            <span className="wd-grad-text">Extraordinary?</span>
          </h2>
          <p className="wd-cta__sub">
            Let's elevate your online capabilities and redefine what's possible together.
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
