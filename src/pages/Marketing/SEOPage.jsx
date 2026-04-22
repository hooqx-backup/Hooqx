import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import heroBgImg from '../../assets/images/seobanner.jpg'
import splitImg from '../../assets/images/seo2.jpg'
import processImg from '../../assets/images/seo3.jpg'
import introImg from '../../assets/images/seo1.jpg'
import vid1 from '../../assets/videos/customer1.webm'
import vid2 from '../../assets/videos/customer2.webm'
import vid3 from '../../assets/videos/customer3.webm'
import './MarketingPage.css'

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

const TICKER_ITEMS = [
  'On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO',
  'E-commerce SEO', 'Voice Search Optimization', 'Link Building',
  'Keyword Research', 'Schema Markup', 'Core Web Vitals',
  'Content Optimization', 'Competitor Analysis', 'Site Audits', 'Google Business Profile',
]

const SERVICES = [
  {
    num: '01', title: 'Technical SEO',
    desc: 'Deep-dive site audits that uncover crawl issues, index bloat, broken links, and speed bottlenecks — then we fix them so search engines can rank you.',
    tags: ['Site Audit', 'Core Web Vitals', 'Schema Markup'],
  },
  {
    num: '02', title: 'On-Page Optimization',
    desc: 'Every page element — titles, headings, meta descriptions, content, and internal links — crafted around search intent to maximize topical authority.',
    tags: ['Title Tags', 'Content Optimization', 'Internal Linking'],
  },
  {
    num: '03', title: 'Off-Page & Link Building',
    desc: 'Earn high-authority, niche-relevant backlinks through strategic digital PR, guest posting, and editorial outreach that builds lasting domain authority.',
    tags: ['Link Earning', 'Digital PR', 'Guest Posting'],
  },
  {
    num: '04', title: 'Local SEO',
    desc: 'Dominate local search results and Google Maps with optimized business profiles, local citations, and geo-targeted content strategies.',
    tags: ['Google Business', 'Local Citations', 'Maps SEO'],
  },
  {
    num: '05', title: 'E-commerce SEO',
    desc: 'Product and category page optimization, structured data for rich snippets, and site architecture improvements that drive purchase-ready traffic.',
    tags: ['Product SEO', 'Rich Snippets', 'Category Pages'],
  },
  {
    num: '06', title: 'Keyword Research & Strategy',
    desc: 'Comprehensive keyword mapping across the full funnel — from awareness to conversion — prioritized by search volume, competition, and business value.',
    tags: ['Keyword Mapping', 'Competitor Gap Analysis', 'Search Intent'],
  },
  {
    num: '07', title: 'Content SEO',
    desc: 'Topical authority clusters, pillar pages, and long-form content strategies that position your brand as the definitive answer in your niche.',
    tags: ['Pillar Pages', 'Topic Clusters', 'Blog Strategy'],
  },
  {
    num: '08', title: 'Voice Search & AI Optimization',
    desc: 'Future-proof your visibility with conversational keyword targeting and structured data optimized for voice assistants and AI-powered search.',
    tags: ['Voice Search', 'Featured Snippets', 'Conversational SEO'],
  },
]

const STATS = [
  { num: 350, suffix: '+', label: 'Keywords Ranked #1', sub: 'across client websites' },
  { num: 280, suffix: '%', label: 'Avg. Organic Traffic Uplift', sub: 'within 6 months' },
  { num: 180, suffix: '+', label: 'Websites Optimized', sub: 'across 15+ industries' },
  { num: 97, suffix: '%', label: 'Client Retention', sub: 'year over year' },
]

const WHY_POINTS = [
  { title: 'Data-Driven, Not Guesswork', desc: 'Every optimization decision is backed by analytics, search data, and competitor intelligence — no black-hat shortcuts, ever.' },
  { title: 'White-Hat Only', desc: 'We build sustainable rankings through ethical SEO practices that protect your domain authority for the long term.' },
  { title: 'Full Transparency', desc: 'Live ranking dashboards and monthly plain-English reports so you always know exactly what we\'re doing and why.' },
  { title: 'Holistic Approach', desc: 'Technical, on-page, off-page, and content — we cover every SEO pillar so nothing falls through the cracks.' },
]

const PROCESS = [
  { num: '01', title: 'SEO Audit', desc: 'Full technical and content audit to find every opportunity and fix every issue holding your site back.' },
  { num: '02', title: 'Strategy & Roadmap', desc: 'Keyword mapping, competitor gap analysis, and a prioritized 90-day action plan tailored to your goals.' },
  { num: '03', title: 'Implementation', desc: 'Execute on-page fixes, technical improvements, content builds, and outreach campaigns in parallel.' },
  { num: '04', title: 'Monitor & Report', desc: 'Track rankings, traffic, and conversions weekly. Refine continuously as search algorithms evolve.' },
]

const TESTIMONIALS = [
  { name: 'Musa Al Jaber', role: 'Verified Customer', rating: 5, video: vid1, quote: 'Hooqx is very good and respond back quickly, their SEO technique make my website come to the top of the search. Very nice service! I will recommend for sure.' },
  { name: 'Daniel W.', role: 'Verified Customer', rating: 5, video: vid2, quote: "Hooqx flawlessly executed our SEO strategy, seamlessly translating our brand's identity into top search rankings. Their attention to detail surpassed our goals." },
  { name: 'Lisa Chen', role: 'Verified Customer', rating: 5, video: vid3, quote: 'Hooqx shines with their SEO expertise. Their keyword strategies and content optimization transformed our organic traffic and set them apart from other agencies.' },
]

const FAQS = [
  { q: 'How long does SEO take to show results?', a: 'SEO is a long-term investment. Most clients see meaningful ranking improvements within 3–6 months, with compounding growth thereafter. Highly competitive niches may take 6–12 months for significant movement.' },
  { q: 'Do you use white-hat SEO techniques only?', a: 'Absolutely. We never use black-hat tactics like PBNs, spammy link schemes, or keyword stuffing. All our methods align with Google\'s guidelines to protect your domain authority long-term.' },
  { q: 'What does a typical SEO engagement include?', a: 'Every engagement includes a full site audit, keyword research, on-page optimization, technical fixes, link building, content strategy, and monthly performance reporting with a live dashboard.' },
  { q: 'Can you help if my site has been penalized by Google?', a: 'Yes. We specialize in penalty recovery including manual action removal, toxic link disavow campaigns, and content clean-up to restore your rankings.' },
  { q: 'Do you offer local SEO for brick-and-mortar businesses?', a: 'Yes. We optimize Google Business Profiles, build local citations, manage reviews, and create geo-targeted content to help local businesses dominate their area.' },
  { q: 'How do you measure SEO success?', a: 'We track keyword rankings, organic traffic, click-through rates, Core Web Vitals scores, backlink growth, and most importantly — organic conversions and revenue attributed to SEO.' },
]

function Stars({ count = 5 }) {
  return (
    <div className="mk-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" width="15" height="15" fill={i < count ? '#f59e0b' : 'rgba(245,158,11,0.18)'}>
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
      className="mk-stat"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={vp}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div ref={ref} className="mk-stat__num">{count}{suffix}</div>
      <div className="mk-stat__label">{label}</div>
      <div className="mk-stat__sub">{sub}</div>
    </motion.div>
  )
}

export default function SEOPage() {
  const [openService, setOpenService] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [testiIdx, setTestiIdx] = useState(0)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const prev = () => setTestiIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setTestiIdx(i => (i + 1) % TESTIMONIALS.length)

  return (
    <main className="mk">

      <section className="mk-hero" ref={heroRef}>
        <motion.div className="mk-hero__bg-wrap" style={{ y: heroY }}>
          <div className="mk-hero__bg-img" style={{ backgroundImage: `url(${heroBgImg})` }} />
          <div className="mk-hero__orb mk-hero__orb--1" />
          <div className="mk-hero__orb mk-hero__orb--2" />
          <div className="mk-hero__orb mk-hero__orb--3" />
          <div className="mk-hero__grid" />
        </motion.div>

        <motion.div className="mk-hero__inner" style={{ opacity: heroOpacity }}>
          {[
            { label: '↑ 280% Organic Traffic', cls: 'c1' },
            { label: '350+ #1 Rankings',        cls: 'c2' },
            { label: '180+ Sites Optimized',    cls: 'c3' },
            { label: '97% Retention',           cls: 'c4' },
            { label: 'White-Hat Only',          cls: 'c5' },
          ].map((c, i) => (
            <motion.div
              key={i}
              className={`mk-chip mk-chip--${c.cls}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15, type: 'spring', stiffness: 260, damping: 22 }}
            >
              {c.label}
            </motion.div>
          ))}

          <motion.div
            className="mk-hero__content"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } } }}
          >
            <motion.p
              className="mk-eyebrow"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
            >
              <span className="mk-eyebrow__dot" />Search Engine Optimization
            </motion.p>

            <motion.h1
              className="mk-hero__title"
              variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(12px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Dominate Search Rankings<br />
              <span className="mk-grad">Drive Organic Growth</span>
            </motion.h1>

            <motion.p
              className="mk-hero__sub"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              We don't just chase rankings — we build sustainable search authority through technical excellence, content strategy, and ethical link building that compounds over time.
            </motion.p>

            <motion.div
              className="mk-hero__cta"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="mk-btn mk-btn--primary">Explore SEO Services</a>
              <a href="mailto:hello@hooqx.com" className="mk-btn mk-btn--outline">Get a Free SEO Audit</a>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mk-hero__scroll-hint">
          <div className="mk-hero__scroll-mouse">
            <div className="mk-hero__scroll-wheel" />
          </div>
        </div>
      </section>

      <div className="mk-ticker">
        <div className="mk-ticker__track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="mk-ticker__item">
              <span className="mk-ticker__dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="mk-intro">
        <div className="mk-intro__inner">
          <motion.div
            className="mk-intro__left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mk-eyebrow"><span className="mk-eyebrow__dot" />SEO: The Hook that Catches It All</p>
            <h2 className="mk-intro__heading">
              Own Page One.<br />
              Own Your <span className="mk-grad">Market.</span>
            </h2>
          </motion.div>
          <motion.div
            className="mk-intro__right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              Prioritising SEO is especially vital now, as the online landscape becomes increasingly competitive, and a well-optimized website is essential for ensuring visibility, attracting organic traffic, and staying ahead in search engine rankings to drive business growth.
            </p>
            <p>
              In a digital landscape saturated with noise, our SEO experts cut through the clutter to amplify your brand's voice. From meticulous keyword research to strategic on-page optimization, we engineer a roadmap to catapult your website to the top of search engine rankings — because being on top is where you belong.
            </p>
            <div className="mk-intro__pills">
              {['Technical', 'On-Page', 'Off-Page', 'Local', 'E-commerce'].map((p, i) => (
                <span key={i} className="mk-pill">{p}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mk-intro__image"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={introImg} alt="SEO strategy" />
            <div className="mk-intro__image-glow" />
          </motion.div>
        </div>
      </section>

      <section className="mk-stats">
        <div className="mk-stats__inner">
          {STATS.map((s, i) => (
            <StatBlock key={i} {...s} delay={i * 0.12} />
          ))}
        </div>
      </section>

      <section className="mk-services" id="services">
        <div className="mk-services__inner">
          <div className="mk-services__header">
            <motion.p
              className="mk-eyebrow"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="mk-eyebrow__dot" />What We Offer
            </motion.p>
            <motion.h2
              className="mk-section-title"
              initial={{ opacity: 0, y: -28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              SEO <span className="mk-grad">Services</span>
            </motion.h2>
          </div>

          <div className="mk-acc">
            {SERVICES.map((s, i) => {
              const isOpen = openService === i
              return (
                <motion.div
                  key={i}
                  className={`mk-acc__item${isOpen ? ' mk-acc__item--open' : ''}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
                >
                  <button className="mk-acc__trigger" onClick={() => setOpenService(isOpen ? null : i)}>
                    <span className="mk-acc__num">{s.num}</span>
                    <span className="mk-acc__title">{s.title}</span>
                    <motion.span
                      className="mk-acc__icon"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                        <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="mk-acc__body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.26, ease: [0.22, 1, 0.36, 1] } }}
                      >
                        <p className="mk-acc__desc">{s.desc}</p>
                        <div className="mk-acc__tags">
                          {s.tags.map((t, j) => <span key={j} className="mk-acc__tag">{t}</span>)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mk-why">
        <div className="mk-why__image-col">
          <motion.img
            src={splitImg}
            alt="Why Hooqx for SEO"
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="mk-why__img-overlay" />
          <motion.div
            className="mk-why__img-badge"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mk-why__img-badge-num">350+</div>
            <div className="mk-why__img-badge-label">Keywords Ranked #1</div>
          </motion.div>
        </div>

        <div className="mk-why__text-col">
          <motion.p
            className="mk-eyebrow mk-eyebrow--light"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mk-eyebrow__dot" />Our Advantage
          </motion.p>
          <motion.h2
            className="mk-why__heading"
            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Hook Your Audience:<br />
            The Hooqx <span className="mk-grad">SEO Advantage</span>
          </motion.h2>
          <motion.p
            className="mk-why__sub"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            We distinguish ourselves as leaders in SEO by employing strategic expertise, staying ahead of algorithmic shifts, and delivering tangible results that propel your website to the forefront of search engine rankings — ensuring your brand's visibility and success in the competitive digital marketplace.
          </motion.p>

          <div className="mk-why__points">
            {WHY_POINTS.map((p, i) => (
              <motion.div
                key={i}
                className="mk-why__point"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 180, damping: 24, delay: 0.2 + i * 0.1 }}
              >
                <div className="mk-why__point-line" />
                <div>
                  <div className="mk-why__point-title">{p.title}</div>
                  <div className="mk-why__point-desc">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="mailto:hello@hooqx.com"
            className="mk-btn mk-btn--primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: 0.6, type: 'spring', stiffness: 220, damping: 22 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Start Growing Organically
          </motion.a>
        </div>
      </section>

      <section className="mk-process">
        <div className="mk-process__inner">
          <motion.div
            className="mk-process__header"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mk-eyebrow"><span className="mk-eyebrow__dot" />How We Work</p>
            <h2 className="mk-section-title">Our SEO <span className="mk-grad">Process</span></h2>
          </motion.div>

          <div className="mk-process__track">
            <div className="mk-process__line" />
            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                className="mk-process__step"
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ type: 'spring', stiffness: 160, damping: 22, delay: i * 0.16 }}
              >
                <div className="mk-process__node"><span>{p.num}</span></div>
                <div className="mk-process__content">
                  <h3 className="mk-process__title">{p.title}</h3>
                  <p className="mk-process__desc">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mk-process__image"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={processImg} alt="SEO process" />
            <div className="mk-process__img-glow" />
          </motion.div>
        </div>
      </section>

      <section className="mk-testi">
        <div className="mk-testi__blob" />
        <div className="mk-testi__inner">
          <motion.div
            className="mk-testi__header"
            initial={{ opacity: 0, y: -28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mk-eyebrow mk-eyebrow--center"><span className="mk-eyebrow__dot" />Client Stories</p>
            <h2 className="mk-section-title mk-section-title--center">
              What Our <span className="mk-grad">Clients Say</span>
            </h2>
          </motion.div>

          <div className="mk-testi__carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={testiIdx}
                className="mk-testi__card"
                initial={{ opacity: 0, x: 60, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -60, filter: 'blur(8px)' }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mk-testi__quote-mark">"</div>
                <p className="mk-testi__quote">{TESTIMONIALS[testiIdx].quote}</p>
                <Stars count={TESTIMONIALS[testiIdx].rating} />
                <div className="mk-testi__author">
                  <div className="mk-testi__avatar">
                    <video src={TESTIMONIALS[testiIdx].video} muted loop playsInline autoPlay />
                  </div>
                  <div>
                    <div className="mk-testi__name">{TESTIMONIALS[testiIdx].name}</div>
                    <div className="mk-testi__role">
                      <svg viewBox="0 0 20 20" fill="#34d399" width="11" height="11">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {TESTIMONIALS[testiIdx].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mk-testi__nav">
              <button className="mk-testi__nav-btn" onClick={prev}>
                <svg viewBox="0 0 16 16" fill="none" width="18" height="18">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="mk-testi__dots">
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} className={`mk-testi__dot${i === testiIdx ? ' mk-testi__dot--active' : ''}`} onClick={() => setTestiIdx(i)} />
                ))}
              </div>
              <button className="mk-testi__nav-btn" onClick={next}>
                <svg viewBox="0 0 16 16" fill="none" width="18" height="18">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mk-faq">
        <div className="mk-faq__inner">
          <motion.div
            className="mk-faq__header"
            initial={{ opacity: 0, y: -28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mk-eyebrow"><span className="mk-eyebrow__dot" />Got Questions?</p>
            <h2 className="mk-section-title">Frequently Asked <span className="mk-grad">Questions</span></h2>
          </motion.div>

          <div className="mk-faq__grid">
            {FAQS.map((f, i) => (
              <motion.div
                key={i}
                className={`mk-faq__item${openFaq === i ? ' mk-faq__item--open' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <button className="mk-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <motion.span className="mk-faq__icon" animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.28 }}>
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14">
                      <line x1="8" y1="2" x2="8" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="mk-faq__a"
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

      <section className="mk-cta">
        <div className="mk-cta__orb" />
        <motion.div
          className="mk-cta__inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mk-eyebrow mk-eyebrow--center"><span className="mk-eyebrow__dot" />Ready to Rank?</p>
          <h2 className="mk-cta__title">
            Claim Your Position at<br />
            <span className="mk-grad">The Top of Search</span>
          </h2>
          <p className="mk-cta__sub">
            Every day you're not on page one, your competitors are capturing the customers you should have. Let's change that — starting now.
          </p>
          <div className="mk-cta__btns">
            <motion.a
              href="mailto:hello@hooqx.com"
              className="mk-btn mk-btn--primary mk-btn--lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124,58,237,0.7)' }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Free SEO Audit
            </motion.a>
            <motion.a
              href="#services"
              className="mk-btn mk-btn--outline mk-btn--lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View SEO Services
            </motion.a>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
