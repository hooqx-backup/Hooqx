import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import heroBgImg from '../../assets/images/marketing.jpg'
import splitImg from '../../assets/images/digital1.jpg'
import processImg from '../../assets/images/digital2.jpg'
import introImg from '../../assets/images/digital3.jpg'
import vid1 from '../../assets/videos/customer1.webm'
import vid2 from '../../assets/videos/customer2.webm'
import vid3 from '../../assets/videos/customer3.webm'
import './MarketingPage.css'

/* ── animated counter ── */
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
  'Search Engine Optimization', 'Social Media Marketing', 'Pay-Per-Click Ads',
  'Content Marketing', 'Email Marketing', 'Influencer Marketing',
  'Video Marketing', 'Marketing Automation', 'Affiliate Marketing',
  'Online Reputation Management', 'Display Advertising', 'Remarketing',
  'Voice Search Optimization', 'Local SEO', 'E-commerce Marketing',
]

const SERVICES = [
  {
    num: '01',
    title: 'Search Engine Optimization (SEO)',
    desc: 'Dominate search rankings with data-driven on-page and off-page SEO strategies that drive sustainable organic traffic to your brand.',
    tags: ['Technical SEO', 'Link Building', 'Keyword Research'],
  },
  {
    num: '02',
    title: 'Pay-Per-Click Advertising (PPC)',
    desc: 'Precision-targeted ad campaigns on Google and Bing that maximize ROI and minimize wasted spend with real-time bid optimization.',
    tags: ['Google Ads', 'Bing Ads', 'Retargeting'],
  },
  {
    num: '03',
    title: 'Social Media Marketing (SMM)',
    desc: 'Engage and grow your audience across Instagram, Facebook, LinkedIn, and TikTok with compelling social strategies and content.',
    tags: ['Instagram', 'LinkedIn', 'TikTok', 'Facebook'],
  },
  {
    num: '04',
    title: 'Content Marketing',
    desc: 'High-impact blogs, articles, and multimedia content that build authority, trust, and long-term brand equity in your market.',
    tags: ['Blog Writing', 'Copywriting', 'Infographics'],
  },
  {
    num: '05',
    title: 'Email Marketing',
    desc: 'Automated, personalized email sequences that nurture leads and convert subscribers into loyal, repeat customers at scale.',
    tags: ['Automation', 'Drip Campaigns', 'A/B Testing'],
  },
  {
    num: '06',
    title: 'Influencer Marketing',
    desc: 'Strategic partnerships with niche-relevant influencers to amplify brand awareness and deliver authentic social proof.',
    tags: ['Micro Influencers', 'Brand Deals', 'UGC'],
  },
  {
    num: '07',
    title: 'Video Marketing',
    desc: 'Cinematic brand videos, reels, and YouTube strategies that captivate audiences and skyrocket engagement and conversions.',
    tags: ['YouTube', 'Reels', 'Brand Films'],
  },
  {
    num: '08',
    title: 'Analytics & CRO',
    desc: 'Deep-dive analytics and A/B testing frameworks that turn more of your existing traffic into paying customers efficiently.',
    tags: ['GA4', 'Heatmaps', 'A/B Testing'],
  },
  {
    num: '09',
    title: 'Marketing Automation',
    desc: 'End-to-end automation workflows that scale your marketing efforts and free your team to focus on higher-value tasks.',
    tags: ['HubSpot', 'Zapier', 'CRM Integration'],
  },
  {
    num: '10',
    title: 'Online Reputation Management',
    desc: 'Monitor, protect, and enhance your brand reputation across review platforms and the wider digital landscape proactively.',
    tags: ['Review Management', 'Brand Monitoring', 'PR'],
  },
  {
    num: '11',
    title: 'Geo-targeting & Local SEO',
    desc: 'Hyper-local campaigns and Google Business optimization that put your brand in front of nearby high-intent buyers.',
    tags: ['Google Business', 'Local Citations', 'Maps SEO'],
  },
  {
    num: '12',
    title: 'E-commerce Marketing',
    desc: 'Full-funnel e-commerce growth strategies spanning Google Shopping, Meta ads, and marketplace optimization for maximum revenue.',
    tags: ['Google Shopping', 'Meta Ads', 'Marketplaces'],
  },
  {
    num: '13',
    title: 'Digital PR',
    desc: 'Earn high-authority media placements and backlinks that boost both your brand credibility and SEO rankings simultaneously.',
    tags: ['Press Coverage', 'Link Earning', 'Brand Mentions'],
  },
  {
    num: '14',
    title: 'Remarketing & Retargeting',
    desc: 'Re-engage high-intent visitors with precision-targeted ads that bring them back at exactly the right moment to convert.',
    tags: ['Pixel Tracking', 'Dynamic Ads', 'Audience Lists'],
  },
  {
    num: '15',
    title: 'App Store Optimization (ASO)',
    desc: "Boost your mobile app's visibility and download rate with keyword, creative, and rating strategies for the App Store and Google Play.",
    tags: ['App Store', 'Google Play', 'Keyword Optimization'],
  },
]

const STATS = [
  { num: 500, suffix: '+', label: 'Campaigns Launched', sub: 'across 20+ industries' },
  { num: 312, suffix: '%', label: 'Avg. Traffic Uplift', sub: 'within 6 months' },
  { num: 200, suffix: '+', label: 'Brands Grown', sub: 'worldwide' },
  { num: 98,  suffix: '%', label: 'Client Retention', sub: 'year over year' },
]

const WHY_POINTS = [
  { title: 'Creativity Meets Analytics', desc: 'Every campaign blends bold creative with rigorous data science for maximum impact and measurable ROI.' },
  { title: 'Full-Funnel Strategy', desc: 'From awareness to retention — we own every stage of your customer journey without gaps.' },
  { title: 'Transparent Reporting', desc: 'Real-time dashboards and plain-English monthly reports. Zero vanity metrics, only what moves the needle.' },
  { title: 'Industry-Agnostic Expertise', desc: 'We have grown brands across e-commerce, SaaS, finance, hospitality, healthcare, and beyond.' },
]

const PROCESS = [
  { num: '01', title: 'Research & Strategy', desc: 'Audit your brand, competitors, and market to build a data-backed growth roadmap.' },
  { num: '02', title: 'Content & Creative', desc: 'Produce compelling copy, visuals, and ad assets tuned to your exact audience.' },
  { num: '03', title: 'Launch & Distribute', desc: 'Deploy across the right channels at the right time for maximum reach and relevance.' },
  { num: '04', title: 'Analyse & Optimise', desc: 'Continuously monitor, A/B test, and refine to compound results and reduce CPA.' },
]

const TESTIMONIALS = [
  { name: 'Musa Al Jaber', role: 'Verified Customer', rating: 5, video: vid1, quote: 'Hooqx is very good and respond back quickly, their SEO technique make my website come to the top of the search. Very nice service! I will recommend for sure.' },
  { name: 'Daniel W.', role: 'Verified Customer', rating: 5, video: vid2, quote: "Hooqx flawlessly executed our digital campaign, seamlessly translating our brand's identity into success. Their attention to detail surpassed our goals." },
  { name: 'Lisa Chen', role: 'Verified Customer', rating: 5, video: vid3, quote: 'Hooqx shines in the digital crowd with their creativity and expertise. Their engaging social campaigns transformed our brand and set them apart.' },
]

const FAQS = [
  { q: 'What digital marketing services does Hooqx offer?', a: 'Hooqx provides 15+ digital marketing services including SEO, PPC, SMM, Content Marketing, Email Marketing, Influencer Marketing, Video Marketing, Marketing Automation, ORM, and more — all tailored to your business goals.' },
  { q: 'How does Hooqx measure campaign success?', a: 'We track KPIs specific to each channel — organic rankings and traffic for SEO, ROAS and CPA for paid ads, engagement rates for social, and open/click rates for email. Every campaign comes with real-time dashboards and monthly performance reports.' },
  { q: 'How soon can I expect results?', a: 'Paid channels like PPC and social ads can drive results within days. SEO typically takes 3–6 months for significant organic movement. We set realistic timelines upfront with clear milestones.' },
  { q: 'Do you manage social media accounts entirely?', a: 'Yes. Our team handles full-service social media management including strategy, content creation, scheduling, community management, and performance reporting across all major platforms.' },
  { q: 'Can you work with an existing marketing strategy?', a: 'Absolutely. We can audit, refine, and build on your current efforts or start fresh. Our approach is collaborative — we align with your brand voice and business objectives from day one.' },
  { q: 'Is there a minimum contract period?', a: 'We offer flexible engagement models from one-off campaigns to ongoing retainers. We recommend a minimum of 3 months for most services to allow sufficient time for testing and optimisation.' },
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

export default function MarketingPage() {
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

      {/* ══════════════════════════════════
          HERO — centered, floating chips
      ══════════════════════════════════ */}
      <section className="mk-hero" ref={heroRef}>
        <motion.div className="mk-hero__bg-wrap" style={{ y: heroY }}>
          <div className="mk-hero__bg-img" style={{ backgroundImage: `url(${heroBgImg})` }} />
          <div className="mk-hero__orb mk-hero__orb--1" />
          <div className="mk-hero__orb mk-hero__orb--2" />
          <div className="mk-hero__orb mk-hero__orb--3" />
          <div className="mk-hero__grid" />
        </motion.div>

        <motion.div className="mk-hero__inner" style={{ opacity: heroOpacity }}>
          {/* floating chips */}
          {[
            { label: '↑ 312% Organic Traffic', cls: 'c1' },
            { label: '4.8× ROAS',              cls: 'c2' },
            { label: '500+ Campaigns',          cls: 'c3' },
            { label: '98% Retention',           cls: 'c4' },
            { label: '200+ Brands',             cls: 'c5' },
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
              <span className="mk-eyebrow__dot" />Digital Marketing Services
            </motion.p>

            <motion.h1
              className="mk-hero__title"
              variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(12px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Embark on a Journey of<br />
              <span className="mk-grad">Digital Success</span>
            </motion.h1>

            <motion.p
              className="mk-hero__sub"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              We don't just craft campaigns — we engineer strategies that resonate with your audience, spark engagement, and drive tangible results for your brand.
            </motion.p>

            <motion.div
              className="mk-hero__cta"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="mk-btn mk-btn--primary">Explore Services</a>
              <a href="mailto:hello@hooqx.com" className="mk-btn mk-btn--outline">Get a Free Audit</a>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="mk-hero__scroll-hint">
          <div className="mk-hero__scroll-mouse">
            <div className="mk-hero__scroll-wheel" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════════ */}
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

      {/* ══════════════════════════════════
          INTRO PARAGRAPH
      ══════════════════════════════════ */}
      <section className="mk-intro">
        <div className="mk-intro__inner">
          <motion.div
            className="mk-intro__left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mk-eyebrow"><span className="mk-eyebrow__dot" />Why It Matters</p>
            <h2 className="mk-intro__heading">
              Catch the Digital<br />
              Marketing <span className="mk-grad">Wave</span>
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
              Maximizing your digital presence with strategic marketing initiatives is more crucial now than ever before. As consumer behavior continues to shift towards online platforms, businesses must adapt and thrive in the digital landscape to stay relevant.
            </p>
            <p>
              Hooqx Digital Marketing Services provide the competitive edge needed to navigate this dynamic environment, ensuring your brand remains visible, engaging, and influential amidst a sea of digital noise.
            </p>
            <div className="mk-intro__pills">
              {['Data-Driven', 'Creative-First', 'ROI-Focused', 'Transparent'].map((p, i) => (
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
            <img src={introImg} alt="Digital marketing strategy" />
            <div className="mk-intro__image-glow" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS — editorial large numbers
      ══════════════════════════════════ */}
      <section className="mk-stats">
        <div className="mk-stats__inner">
          {STATS.map((s, i) => (
            <StatBlock key={i} {...s} delay={i * 0.12} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          SERVICES — accordion list
      ══════════════════════════════════ */}
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
              Services <span className="mk-grad">Included</span>
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
                  <button
                    className="mk-acc__trigger"
                    onClick={() => setOpenService(isOpen ? null : i)}
                  >
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

      {/* ══════════════════════════════════
          WHY HOOQX — full-bleed split panel
      ══════════════════════════════════ */}
      <section className="mk-why">
        <div className="mk-why__image-col">
          <motion.img
            src={splitImg}
            alt="Why Hooqx reigns in digital marketing"
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
            <div className="mk-why__img-badge-num">200+</div>
            <div className="mk-why__img-badge-label">Brands Grown Worldwide</div>
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
            Hooked on Results:<br />
            Why Hooqx <span className="mk-grad">Reigns</span>
          </motion.h2>
          <motion.p
            className="mk-why__sub"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Our holistic approach combines cutting-edge technology with unparalleled creativity, delivering tailored solutions that drive real, measurable results for our clients.
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
            Start Your Campaign
          </motion.a>
        </div>
      </section>

      {/* ══════════════════════════════════
          PROCESS — horizontal timeline
      ══════════════════════════════════ */}
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
            <h2 className="mk-section-title">Our <span className="mk-grad">Process</span></h2>
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
                <div className="mk-process__node">
                  <span>{p.num}</span>
                </div>
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
            <img src={processImg} alt="Marketing process" />
            <div className="mk-process__img-glow" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          TESTIMONIALS — carousel
      ══════════════════════════════════ */}
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
                  <button
                    key={i}
                    className={`mk-testi__dot${i === testiIdx ? ' mk-testi__dot--active' : ''}`}
                    onClick={() => setTestiIdx(i)}
                  />
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

      {/* ══════════════════════════════════
          FAQ — two column
      ══════════════════════════════════ */}
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
                <button
                  className="mk-faq__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <motion.span
                    className="mk-faq__icon"
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

      {/* ══════════════════════════════════
          CTA
      ══════════════════════════════════ */}
      <section className="mk-cta">
        <div className="mk-cta__orb" />
        <motion.div
          className="mk-cta__inner"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mk-eyebrow mk-eyebrow--center"><span className="mk-eyebrow__dot" />Ready to Grow?</p>
          <h2 className="mk-cta__title">
            Amplify Your <span className="mk-grad">Online Presence</span><br />
            with Hooqx
          </h2>
          <p className="mk-cta__sub">
            Join us in unlocking the full potential of your brand. In the digital age, every click counts — let's make them all work for you.
          </p>
          <div className="mk-cta__btns">
            <motion.a
              href="mailto:hello@hooqx.com"
              className="mk-btn mk-btn--primary mk-btn--lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124,58,237,0.7)' }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Free Strategy Call
            </motion.a>
            <motion.a
              href="#services"
              className="mk-btn mk-btn--outline mk-btn--lg"
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
