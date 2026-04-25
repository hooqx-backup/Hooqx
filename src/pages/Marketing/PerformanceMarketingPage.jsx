import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import heroBgImg from '../../assets/images/performance1.jpg'
import introImg from '../../assets/images/performance2.jpg'
import splitImg from '../../assets/images/performance3.jpg'
import processImg from '../../assets/images/performance4.jpg'
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
  'Search Engine Marketing', 'Pay-Per-Click Advertising', 'Affiliate Marketing', 'Social Media Advertising',
  'Display Advertising', 'Email Marketing', 'CRO', 'Remarketing & Retargeting',
  'Influencer Marketing', 'Mobile Marketing', 'SEM', 'ROI-Driven Strategies', 'Performance Analytics', 'Conversion Tracking',
]

const SERVICES = [
  {
    num: '01', title: 'Search Engine Marketing (SEM)',
    desc: 'Dominate search results with data-driven SEM campaigns. We craft strategies that place your brand in front of high-intent buyers across all major search engines, maximizing visibility and driving qualified traffic that converts.',
    tags: ['Google Ads', 'Bing Ads', 'Keyword Strategy', 'Ad Copy'],
  },
  {
    num: '02', title: 'Pay-Per-Click Advertising (PPC)',
    desc: 'Get immediate, measurable results with precision PPC campaigns. We manage your ad spend to ensure every click counts — optimizing bids, targeting, and landing pages to deliver the highest ROI for your budget.',
    tags: ['Smart Bidding', 'Quality Score', 'Ad Extensions', 'Budget Management'],
  },
  {
    num: '03', title: 'Affiliate Marketing',
    desc: 'Scale your reach through performance-based affiliate partnerships. We identify, recruit, and manage top affiliates who drive qualified traffic and conversions on a pay-for-results model — zero waste, pure performance.',
    tags: ['Affiliate Networks', 'Partner Recruitment', 'Commission Strategy', 'Tracking'],
  },
  {
    num: '04', title: 'Social Media Advertising',
    desc: 'Connect with your ideal audience across Facebook, Instagram, LinkedIn, TikTok, and more. Our targeted social campaigns are designed to drive engagement, generate leads, and convert followers into paying customers.',
    tags: ['Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'Audience Targeting'],
  },
  {
    num: '05', title: 'Display Advertising',
    desc: 'Build brand awareness and capture attention with visually compelling display ads. We place your creative across premium publisher networks using real-time bidding and audience segmentation to reach your ideal customer.',
    tags: ['Programmatic', 'Display Network', 'Banner Ads', 'Real-Time Bidding'],
  },
  {
    num: '06', title: 'Email Marketing',
    desc: 'Nurture leads and retain customers with personalized, data-driven email campaigns. From automated sequences to broadcast campaigns, we craft messages that drive opens, clicks, and revenue at scale.',
    tags: ['Email Automation', 'Segmentation', 'A/B Testing', 'Deliverability'],
  },
  {
    num: '07', title: 'Conversion Rate Optimization (CRO)',
    desc: 'Turn more of your existing traffic into customers through landing page testing, UX improvements, and funnel analysis that reduce CPA and increase revenue per visitor — without increasing ad spend.',
    tags: ['A/B Testing', 'Landing Pages', 'Heatmaps', 'Funnel Analysis'],
  },
  {
    num: '08', title: 'Remarketing / Retargeting Campaigns',
    desc: 'Re-engage visitors who didn\'t convert with precisely timed ads across Google, Meta, and the open web — bringing high-intent prospects back at exactly the right moment to close the deal.',
    tags: ['Dynamic Retargeting', 'Pixel Tracking', 'Audience Lists', 'Cross-Platform'],
  },
  {
    num: '09', title: 'Influencer Marketing',
    desc: 'Amplify your brand through strategic influencer partnerships. We identify and manage collaborations with influencers whose audiences align with your target market, delivering authentic reach and measurable impact.',
    tags: ['Influencer Outreach', 'Campaign Management', 'ROI Tracking', 'Content Strategy'],
  },
  {
    num: '10', title: 'Mobile Marketing',
    desc: 'Reach your audience wherever they are with mobile-first marketing strategies. From in-app advertising to SMS campaigns, we optimize every touchpoint for mobile users to maximize engagement and conversions.',
    tags: ['In-App Ads', 'SMS Marketing', 'Mobile Optimization', 'App Store Ads'],
  },
]

const STATS = [
  { num: 4, suffix: '.8×', label: 'Average ROAS', sub: 'across all client campaigns' },
  { num: 500, suffix: '+', label: 'Campaigns Managed', sub: 'across Google, Meta & more' },
  { num: 42, suffix: '%', label: 'Avg. CPA Reduction', sub: 'within first 90 days' },
  { num: 97, suffix: '%', label: 'Client Retention', sub: 'year over year' },
]

const WHY_POINTS = [
  { title: 'ROI-First Mindset', desc: 'Every decision we make is tied to your return on ad spend. We don\'t celebrate impressions — we celebrate revenue.' },
  { title: 'Certified Cross-Platform Experts', desc: 'Google Premier Partner and Meta Business Partner certified — we have direct access to advanced tools, betas, and support that others don\'t.' },
  { title: 'Granular Tracking & Attribution', desc: 'We set up proper conversion tracking, GA4, and multi-touch attribution so you always know exactly which campaigns are driving revenue.' },
  { title: 'Continuous Optimization', desc: 'We don\'t "set and forget." Daily monitoring, weekly optimizations, and monthly strategy reviews ensure your campaigns keep improving.' },
]

const PROCESS = [
  { num: '01', title: 'Audit & Research', desc: 'Audit existing campaigns (if any), analyze competitors\' ad strategies, and define your ideal audience segments and conversion goals.' },
  { num: '02', title: 'Strategy & Setup', desc: 'Build campaign architecture, keyword lists, audience segments, ad creative, and landing pages aligned to each funnel stage.' },
  { num: '03', title: 'Launch & Monitor', desc: 'Go live with disciplined budget controls and daily monitoring — catching issues fast and capturing every optimization opportunity.' },
  { num: '04', title: 'Optimize & Scale', desc: 'A/B test creatives and audiences, cut waste, reallocate budget to winners, and systematically scale what\'s working to grow revenue.' },
]

const TESTIMONIALS = [
  { name: 'Daniel W.', role: 'Verified Customer', rating: 5, video: vid2, quote: "Hooqx flawlessly executed our paid campaigns, delivering a 4.9× ROAS that far exceeded our expectations. Their attention to detail and optimization cadence surpassed our goals." },
  { name: 'Musa Al Jaber', role: 'Verified Customer', rating: 5, video: vid1, quote: 'Our Google Ads were burning money before Hooqx. They restructured everything and cut our CPA by 38% in the first two months while tripling our conversions. Incredible results.' },
  { name: 'Lisa Chen', role: 'Verified Customer', rating: 5, video: vid3, quote: 'Hooqx runs our Meta and Google campaigns with precision. The reporting is transparent, the results are real, and their team is always available to explain strategy.' },
]

const FAQS = [
  { q: 'What is performance marketing and how is it different from regular advertising?', a: 'Performance marketing means you pay for measurable results — clicks, leads, or sales — rather than just impressions. Every dollar is tracked and tied to a specific outcome, making it far more accountable than traditional advertising.' },
  { q: 'What ad platforms do you manage?', a: 'We manage campaigns across Google Ads (Search, Shopping, Display, YouTube, Performance Max), Meta Ads (Facebook & Instagram), LinkedIn Ads, TikTok Ads, Microsoft Ads (Bing), and programmatic display networks.' },
  { q: 'What is a good ROAS and what can I realistically expect?', a: 'A good ROAS varies by industry, margins, and business model. Our client average is 4.8×, but we set realistic expectations in the audit phase based on your specific situation, CPCs, and conversion rates.' },
  { q: 'Do you require a minimum ad budget?', a: 'We recommend a minimum monthly ad spend of $3,000 USD to generate meaningful data for optimization. However, we can work with smaller budgets for specific campaigns — discuss your goals with us and we\'ll advise.' },
  { q: 'How do you handle conversion tracking and attribution?', a: 'We set up Google Analytics 4, Google Tag Manager, Meta Pixel, and where needed, server-side tracking to ensure accurate conversion data. We also configure multi-touch attribution to understand each channel\'s true contribution.' },
  { q: 'How quickly can I expect to see results from paid ads?', a: 'Paid search and social ads can drive traffic and conversions within days of launch. However, campaigns typically need 4–8 weeks of data collection and optimization before reaching peak efficiency.' },
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

export default function PerformanceMarketingPage() {
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
            { label: '4.8× Avg. ROAS',      cls: 'c1' },
            { label: '↓ 42% CPA Reduction', cls: 'c2' },
            { label: '500+ Campaigns',       cls: 'c3' },
            { label: 'Google Partner',       cls: 'c4' },
            { label: 'Meta Partner',         cls: 'c5' },
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
              <span className="mk-eyebrow__dot" />Performance Marketing
            </motion.p>

            <motion.h1
              className="mk-hero__title"
              variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(12px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Maximum ROI on<br />
              <span className="mk-grad">Every Ad Dollar</span>
            </motion.h1>

            <motion.p
              className="mk-hero__sub"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              At Hooqx, we redefine success by focusing on measurable outcomes. Our expert team combines strategic precision with data-driven insights to craft campaigns that not only engage but convert — because your success is our metric of excellence.
            </motion.p>

            <motion.div
              className="mk-hero__cta"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="mk-btn mk-btn--primary">Explore Ad Services</a>
              <a href="mailto:hello@hooqx.com" className="mk-btn mk-btn--outline">Get a Free Ad Audit</a>
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
            <p className="mk-eyebrow"><span className="mk-eyebrow__dot" />The Importance of Performance Marketing</p>
            <h2 className="mk-intro__heading">
              Hook, Line,<br />
              and <span className="mk-grad">Metrics.</span>
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
              Engaging in performance marketing is pivotal now, as it allows businesses to precisely target their audience, optimize ad spend, and achieve measurable results — ensuring a strategic and efficient approach to digital advertising in today's competitive landscape.
            </p>
            <p>
              From targeted advertisements to ROI-driven strategies, we're dedicated to maximising your marketing investments. We don't just run campaigns; we engineer performance that propels your brand to new heights.
            </p>
            <div className="mk-intro__pills">
              {['SEM', 'PPC', 'Affiliate Marketing', 'CRO', 'Influencer Marketing'].map((p, i) => (
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
            <img src={introImg} alt="Performance marketing" />
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
              Performance Marketing <span className="mk-grad">Services</span>
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
            alt="Why Hooqx for performance marketing"
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
            <div className="mk-why__img-badge-num">4.8×</div>
            <div className="mk-why__img-badge-label">Average ROAS Delivered</div>
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
            <span className="mk-eyebrow__dot" />Performance Marketing Mastery
          </motion.p>
          <motion.h2
            className="mk-why__heading"
            initial={{ opacity: 0, x: 50, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Hook More Success<br />
            with <span className="mk-grad">Hooqx</span>
          </motion.h2>
          <motion.p
            className="mk-why__sub"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            We take pride in being the finest in performance marketing, utilizing data-driven strategies to maximize your ROI, precisely target your audience, and achieve unparalleled results in the digital advertising space — ensuring your campaigns stand out and succeed in today's competitive landscape.
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
            Launch My Campaigns
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
            <h2 className="mk-section-title">Our Campaign <span className="mk-grad">Process</span></h2>
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
            <img src={processImg} alt="Performance marketing process" />
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
          <p className="mk-eyebrow mk-eyebrow--center"><span className="mk-eyebrow__dot" />Ready to Scale?</p>
          <h2 className="mk-cta__title">
            Stop Wasting Ad Spend.<br />
            Start <span className="mk-grad">Scaling Revenue.</span>
          </h2>
          <p className="mk-cta__sub">
            Get a free paid media audit and find out exactly where your budget is leaking — and how to fix it. No commitment, no fluff, just clarity.
          </p>
          <div className="mk-cta__btns">
            <motion.a
              href="mailto:hello@hooqx.com"
              className="mk-btn mk-btn--primary mk-btn--lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124,58,237,0.7)' }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Free Ad Audit
            </motion.a>
            <motion.a
              href="#services"
              className="mk-btn mk-btn--outline mk-btn--lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View All Ad Services
            </motion.a>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
