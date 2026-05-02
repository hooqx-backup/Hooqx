import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import img1 from '../../assets/images/graphics1.jpg'
import img2 from '../../assets/images/graphics2.jpg'
import vid1 from '../../assets/videos/customer1.webm'
import vid2 from '../../assets/videos/customer2.webm'
import vid3 from '../../assets/videos/customer3.webm'
import './GraphicsDesignPage.css'

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
  'Logo Design', 'Brand Identity', 'Figma', 'Adobe Illustrator', 'Photoshop',
  'Motion Graphics', 'Packaging Design', 'Typography', 'Custom Illustration',
  'After Effects', 'Print Design', 'Social Media Graphics', 'Brand Guidelines',
]

const SERVICES = [
  {
    path: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    title: 'Logo & Brand Identity',
    desc: 'Craft timeless logos and complete brand systems that communicate your vision at a glance — from minimal wordmarks to expressive icons engineered to last decades.',
    tags: ['Logomark', 'Wordmark', 'Brand System', 'Visual Identity'],
  },
  {
    path: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
    title: 'Brand Guidelines',
    desc: 'Define how your brand speaks, looks, and feels across every touchpoint with a comprehensive brand book that keeps identity consistent at scale.',
    tags: ['Style Guide', 'Typography Rules', 'Color Systems', 'Usage Docs'],
  },
  {
    path: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Packaging Design',
    desc: 'Transform products into premium shelf experiences with structural and print-ready packaging artwork that wins retail presence and drives lasting brand loyalty.',
    tags: ['Structural Design', 'Dieline', 'Label Artwork', 'Retail Packaging'],
  },
  {
    path: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    title: 'Social Media Graphics',
    desc: 'Own your feed with scroll-stopping, on-brand visuals. Templated systems and bespoke campaign graphics that drive engagement and keep your brand unmistakable.',
    tags: ['Feed Posts', 'Stories', 'Ad Creatives', 'Reel Covers'],
  },
  {
    path: 'M15 10l4.553-2.069A1 1 0 0121 8.82V15a1 1 0 01-1.553.832L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
    title: 'Motion Graphics',
    desc: 'Bring your brand to life with fluid animations, kinetic typography, and brand films that make your identity impossible to scroll past or forget.',
    tags: ['Logo Animation', 'Brand Films', 'Lottie / GIF', 'After Effects'],
  },
  {
    path: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    title: 'Illustration & Artwork',
    desc: 'Custom illustrations that make your brand uniquely yours — from character design to conceptual editorial art that no stock library can replicate.',
    tags: ['Character Design', 'Infographics', 'Editorial Art', 'Icon Sets'],
  },
  {
    path: 'M4 6h16M4 10h16M4 14h10',
    title: 'Print & Publication',
    desc: 'From business cards to annual reports, we design print-ready materials crafted with precision and artistry that people keep, share, and remember.',
    tags: ['Business Cards', 'Brochures', 'Magazines', 'Annual Reports'],
  },
  {
    path: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    title: 'Presentation Design',
    desc: 'Pitch decks, investor presentations, and slide templates engineered to impress — every slide a visual argument for why you are the right choice.',
    tags: ['Pitch Decks', 'Investor Decks', 'Slide Templates', 'Data Viz'],
  },
]

const STATS = [
  { num: 500, suffix: '+', label: 'Brand Identities', sub: 'across industries worldwide' },
  { num: 12, suffix: '', label: 'Design Awards', sub: 'international recognition' },
  { num: 98, suffix: '%', label: 'Client Satisfaction', sub: 'rated 5 stars by clients' },
  { num: 8, suffix: '+', label: 'Years of Excellence', sub: 'in design and branding' },
]

const WHY_POINTS = [
  { title: 'Pixel-Perfect Precision', desc: 'We sweat every detail. Every curve, kern, and color value is intentional — because design perfection is non-negotiable at Hooqx.' },
  { title: 'Strategy-Led Creativity', desc: 'Great design is purposeful. Every decision is rooted in brand strategy, audience insight, and measurable business goals.' },
  { title: 'Trend-Aware, Brand-True', desc: 'We keep your identity timeless while staying contemporary. Our designs don\'t chase trends — they set them.' },
  { title: 'Rapid, Zero-Compromise Delivery', desc: 'Tight deadlines are our specialty. Our agile process delivers premium creative at speed without sacrificing an ounce of quality.' },
]

const PROCESS = [
  { num: '01', title: 'Discover & Brief', desc: 'Deep-dive into your brand, audience, competitors, and goals. We build a creative brief that aligns vision with strategy before a single pixel is placed.' },
  { num: '02', title: 'Conceive & Sketch', desc: 'Exploration phase — rough concepts, moodboards, and directional sketches that map possible creative territories for your approval and feedback.' },
  { num: '03', title: 'Design & Refine', desc: 'Bring approved concepts to pixel-perfect life in Figma and Adobe Creative Suite, iterating through structured feedback rounds until it\'s flawless.' },
  { num: '04', title: 'Deliver & Scale', desc: 'Export all final assets in every format you\'ll ever need — print, digital, web, social — packaged alongside brand guidelines for consistent future use.' },
]

const TESTIMONIALS = [
  { name: 'Barry John Harwood', role: 'Verified Customer', rating: 5, video: vid1, quote: 'Hooqx redesigned our complete brand identity and the result was breathtaking. Our customers instantly noticed — sales conversations became easier because people trusted us more.' },
  { name: 'Nurten Kaymakci', role: 'Verified Customer', rating: 5, video: vid2, quote: 'The packaging they designed for us went viral on Instagram before we even launched. Three competitors reached out asking who our designer was. Incredible work, impeccable professionalism.' },
  { name: 'Danish Rizvi', role: 'Verified Customer', rating: 5, video: vid3, quote: 'From logo to brand guidelines and social templates — everything was delivered ahead of schedule and exceeded what I thought was possible. A truly world-class creative team.' },
]

const FAQS = [
  { q: 'What graphic design services do you offer?', a: 'We cover the full visual design spectrum: logo and brand identity, packaging, print, social media graphics, motion graphics, illustration, presentation design, and brand guidelines. If it needs to look exceptional, we handle it.' },
  { q: 'Do you provide brand guidelines after a logo project?', a: 'Yes — always. Every logo project includes brand guidelines covering logo usage, color systems, typography, spacing rules, and do/don\'t examples to keep your identity consistent across all applications.' },
  { q: 'What file formats do I receive at the end of the project?', a: 'You receive everything you could need: print-ready PDFs, vector files (AI, EPS, SVG), web files (PNG, JPG, WebP), and working files (Figma, PSD, AI) — full ownership, every format.' },
  { q: 'How long does a brand identity project typically take?', a: 'A standard logo + brand identity project takes 2–4 weeks. Complex projects with full asset suites and multiple concept rounds typically run 4–8 weeks. Express timelines are available for urgent needs.' },
  { q: 'Can you redesign or refresh an existing brand?', a: 'Absolutely — brand evolution is one of our specialties. We do anything from a subtle visual refresh to a complete rebrand, always preserving the brand equity you\'ve built while elevating the design.' },
  { q: 'Do you offer ongoing design retainers?', a: 'Yes. Many clients work with us on monthly design retainers for continuous creative support — social graphics, campaign assets, presentation updates, and new marketing materials on an ongoing basis.' },
]

function Stars({ count = 5 }) {
  return (
    <div className="gd-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" width="15" height="15" fill={i < count ? '#ec4899' : 'rgba(236,72,153,0.18)'}>
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
      className="gd-stat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div ref={ref} className="gd-stat__num">{count}{suffix}</div>
      <div className="gd-stat__label">{label}</div>
      <div className="gd-stat__sub">{sub}</div>
    </motion.div>
  )
}

export default function GraphicsDesignPage() {
  const [openFaq, setOpenFaq] = useState(null)
  const [testiIdx, setTestiIdx] = useState(0)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  const prev = () => setTestiIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setTestiIdx(i => (i + 1) % TESTIMONIALS.length)

  return (
    <main className="gd">

      {/* ── HERO ── */}
      <section className="gd-hero" ref={heroRef}>
        <div className="gd-hero__bg">
          <div className="gd-hero__dots" />
          <div className="gd-hero__orb gd-hero__orb--a" />
          <div className="gd-hero__orb gd-hero__orb--b" />
          <div className="gd-hero__orb gd-hero__orb--c" />
        </div>

        <motion.div className="gd-hero__inner" style={{ opacity: heroOpacity }}>

          {/* Left — text */}
          <motion.div
            className="gd-hero__left"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } } }}
          >
            <motion.p
              className="gd-eyebrow"
              variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="gd-eyebrow__dot" />Graphics & Brand Design
            </motion.p>

            <motion.h1
              className="gd-hero__title"
              variants={{ hidden: { opacity: 0, y: 52, filter: 'blur(14px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Design That<br />
              Speaks Before<br />
              You <span className="gd-grad">Do.</span>
            </motion.h1>

            <motion.p
              className="gd-hero__sub"
              variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              We craft visual identities that don't just look beautiful — they convert, connect, and command attention in every space they inhabit.
            </motion.p>

            <motion.div
              className="gd-hero__cta"
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="gd-btn gd-btn--primary">Explore Design Services</a>
            </motion.div>

            <motion.div
              className="gd-hero__badges"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            >
              {['500+ Brands Built', '12 Design Awards', 'Figma Certified'].map((b, i) => (
                <motion.span
                  key={i}
                  className="gd-hero__badge"
                  variants={{ hidden: { opacity: 0, scale: 0.72 }, show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } } }}
                >
                  <span className="gd-hero__badge-dot" />{b}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            className="gd-hero__right"
            initial={{ opacity: 0, x: 70, scale: 0.93 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.15, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="gd-hero__img-wrap" style={{ y: heroImgY }}>
              <img src={img1} alt="Graphics Design" className="gd-hero__img" />
              <div className="gd-hero__img-shine" />
              <div className="gd-hero__img-border" />
            </motion.div>
            <div className="gd-hero__img-glow" />

            {/* Floating: satisfaction badge */}
            <motion.div
              className="gd-hero__float gd-hero__float--stat"
              initial={{ opacity: 0, y: 24, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="gd-hero__float-icon">✦</div>
              <div>
                <div className="gd-hero__float-num">98%</div>
                <div className="gd-hero__float-lbl">Satisfaction Rate</div>
              </div>
            </motion.div>

            {/* Floating: color palette */}
            <motion.div
              className="gd-hero__float gd-hero__float--palette"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.45, type: 'spring', stiffness: 240, damping: 18 }}
            >
              <span className="gd-swatch gd-swatch--1" />
              <span className="gd-swatch gd-swatch--2" />
              <span className="gd-swatch gd-swatch--3" />
              <span className="gd-swatch gd-swatch--4" />
              <span className="gd-swatch gd-swatch--5" />
            </motion.div>

            {/* Floating: tool chip */}
            <motion.div
              className="gd-hero__float gd-hero__float--tool"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Figma • Ai • Ps
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="gd-hero__scroll">
          <div className="gd-hero__scroll-mouse">
            <div className="gd-hero__scroll-wheel" />
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="gd-ticker">
        <div className="gd-ticker__track">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="gd-ticker__item">
              <span className="gd-ticker__dot" />{item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="gd-stats">
        <div className="gd-stats__inner">
          {STATS.map((s, i) => <StatBlock key={i} {...s} delay={i * 0.11} />)}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="gd-services" id="services">
        <div className="gd-services__inner">
          <div className="gd-services__header">
            <motion.p
              className="gd-eyebrow"
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55 }}
            >
              <span className="gd-eyebrow__dot" />What We Create
            </motion.p>
            <motion.h2
              className="gd-section-title"
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              Design <span className="gd-grad">Services</span>
            </motion.h2>
            <motion.p
              className="gd-services__sub"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.14 }}
            >
              From brand genesis to full visual ecosystems — we handle every dimension of design.
            </motion.p>
          </div>

          <div className="gd-cards">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                className="gd-card"
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.52, delay: Math.min(i * 0.07, 0.45), ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -7, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
              >
                <div className="gd-card__glow" />
                <div className="gd-card__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
                    <path d={s.path} />
                  </svg>
                </div>
                <h3 className="gd-card__title">{s.title}</h3>
                <p className="gd-card__desc">{s.desc}</p>
                <div className="gd-card__tags">
                  {s.tags.map((t, j) => <span key={j} className="gd-card__tag">{t}</span>)}
                </div>
                <div className="gd-card__arrow">
                  <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWCASE ── */}
      <section className="gd-showcase">
        <motion.div
          className="gd-showcase__bg"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={vp}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div className="gd-showcase__overlay" />

        <div className="gd-showcase__content">
          <motion.p
            className="gd-eyebrow gd-eyebrow--center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6 }}
          >
            <span className="gd-eyebrow__dot" />Our Work in the World
          </motion.p>
          <motion.h2
            className="gd-showcase__title"
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            Brands That<br /><span className="gd-grad">Define Industries.</span>
          </motion.h2>
          <motion.div
            className="gd-showcase__pills"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            {['Brand Identity', 'Logo Design', 'Social Media', 'Motion Graphics', 'Packaging', 'Print Design'].map((p, i) => (
              <span key={i} className="gd-pill">{p}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY HOOQX ── */}
      <section className="gd-why">
        <div className="gd-why__inner">
          <motion.div
            className="gd-why__left"
            initial={{ opacity: 0, x: -52 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="gd-eyebrow"><span className="gd-eyebrow__dot" />Why Work With Us</p>
            <h2 className="gd-why__heading">
              Design That<br />Moves the <span className="gd-grad">Needle.</span>
            </h2>
            <p className="gd-why__sub">
              We're not decorators — we're visual strategists. Every brand we build is engineered to achieve a specific outcome, and we don't stop until it does.
            </p>
            <motion.a
              href="mailto:hello@hooqx.com"
              className="gd-btn gd-btn--primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Start Your Brand Journey
            </motion.a>
          </motion.div>

          <div className="gd-why__right">
            {WHY_POINTS.map((p, i) => (
              <motion.div
                key={i}
                className="gd-why__point"
                initial={{ opacity: 0, x: 52 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 170, damping: 24, delay: 0.1 + i * 0.1 }}
              >
                <div className="gd-why__point-num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div className="gd-why__point-title">{p.title}</div>
                  <div className="gd-why__point-desc">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="gd-process">
        <div className="gd-process__inner">
          <motion.div
            className="gd-process__header"
            initial={{ opacity: 0, y: -28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65 }}
          >
            <p className="gd-eyebrow gd-eyebrow--center"><span className="gd-eyebrow__dot" />How We Work</p>
            <h2 className="gd-section-title gd-section-title--center">
              Our Design <span className="gd-grad">Process</span>
            </h2>
          </motion.div>

          <div className="gd-timeline">
            <div className="gd-timeline__spine" />
            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                className="gd-timeline__step"
                initial={{ opacity: 0, x: -44 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 160, damping: 22, delay: i * 0.14 }}
              >
                <div className="gd-timeline__node">
                  <span className="gd-timeline__num">{p.num}</span>
                  <div className="gd-timeline__ring" />
                </div>
                <div className="gd-timeline__content">
                  <h3 className="gd-timeline__title">{p.title}</h3>
                  <p className="gd-timeline__desc">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="gd-testi">
        <div className="gd-testi__blob" />
        <div className="gd-testi__inner">
          <motion.div
            className="gd-testi__header"
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65 }}
          >
            <p className="gd-eyebrow gd-eyebrow--center"><span className="gd-eyebrow__dot" />Client Stories</p>
            <h2 className="gd-section-title gd-section-title--center">
              What Our <span className="gd-grad">Clients Say</span>
            </h2>
          </motion.div>

          <div className="gd-testi__carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={testiIdx}
                className="gd-testi__card"
                initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="gd-testi__quote-mark">"</div>
                <p className="gd-testi__quote">{TESTIMONIALS[testiIdx].quote}</p>
                <Stars count={TESTIMONIALS[testiIdx].rating} />
                <div className="gd-testi__author">
                  <div className="gd-testi__avatar">
                    <video src={TESTIMONIALS[testiIdx].video} muted loop playsInline autoPlay />
                  </div>
                  <div>
                    <div className="gd-testi__name">{TESTIMONIALS[testiIdx].name}</div>
                    <div className="gd-testi__role">
                      <svg viewBox="0 0 20 20" fill="#34d399" width="11" height="11">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {TESTIMONIALS[testiIdx].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="gd-testi__nav">
              <button className="gd-testi__nav-btn" onClick={prev}>
                <svg viewBox="0 0 16 16" fill="none" width="18" height="18">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="gd-testi__dots">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} className={`gd-testi__dot${i === testiIdx ? ' gd-testi__dot--active' : ''}`} onClick={() => setTestiIdx(i)} />
                ))}
              </div>
              <button className="gd-testi__nav-btn" onClick={next}>
                <svg viewBox="0 0 16 16" fill="none" width="18" height="18">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="gd-faq">
        <div className="gd-faq__inner">
          <motion.div
            className="gd-faq__header"
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65 }}
          >
            <p className="gd-eyebrow"><span className="gd-eyebrow__dot" />Got Questions?</p>
            <h2 className="gd-section-title">Frequently Asked <span className="gd-grad">Questions</span></h2>
          </motion.div>

          <div className="gd-faq__grid">
            {FAQS.map((f, i) => (
              <motion.div
                key={i}
                className={`gd-faq__item${openFaq === i ? ' gd-faq__item--open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
              >
                <button className="gd-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <motion.span
                    className="gd-faq__icon"
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="gd-faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
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
      <section className="gd-cta">
        <div className="gd-cta__orb gd-cta__orb--1" />
        <div className="gd-cta__orb gd-cta__orb--2" />
        <div className="gd-cta__noise" />
        <motion.div
          className="gd-cta__inner"
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="gd-eyebrow gd-eyebrow--center"><span className="gd-eyebrow__dot" />Ready to Elevate Your Brand?</p>
          <h2 className="gd-cta__title">
            Great Brands Start<br />With <span className="gd-grad">Great Design.</span>
          </h2>
          <p className="gd-cta__sub">
            Tell us about your brand and let's build something unforgettable together. Free consultation, no strings attached.
          </p>
          <div className="gd-cta__btns">
            <motion.a
              href="#services"
              className="gd-btn gd-btn--primary gd-btn--lg"
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
