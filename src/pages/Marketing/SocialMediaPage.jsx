import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { vp } from '../../lib/motion'
import heroBgImg from '../../assets/images/socialmedia4.jpg'
import splitImg from '../../assets/images/socialmedia2.jpg'
import processImg from '../../assets/images/socialmedia3.jpg'
import introImg from '../../assets/images/socialmedia1.jpg'
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
  'Instagram Marketing', 'Facebook Ads', 'LinkedIn Marketing', 'TikTok Growth',
  'YouTube Strategy', 'Twitter/X Marketing', 'Content Creation', 'Community Management',
  'Influencer Outreach', 'Social Media Audits', 'Paid Social Ads', 'Reels & Shorts',
  'Brand Storytelling', 'Engagement Strategy',
]

const SERVICES = [
  {
    num: '01', title: 'Social Media Strategy Development',
    desc: 'Bespoke social media roadmaps built around your brand goals, audience personas, and competitive landscape — covering platform selection, content mix, and KPIs.',
    tags: ['Platform Strategy', 'Audience Research', 'KPI Planning'],
  },
  {
    num: '02', title: 'Content Creation & Curation',
    desc: 'A full in-house creative team producing scroll-stopping graphics, video reels, carousels, and copy that captures your brand voice and drives genuine engagement.',
    tags: ['Graphic Design', 'Copywriting', 'Video Editing', 'Carousels'],
  },
  {
    num: '03', title: 'Social Media Advertising Management',
    desc: 'Precision-targeted paid social campaigns across all platforms with advanced audience segmentation, A/B testing, and continuous bid optimization for maximum ROI.',
    tags: ['Meta Ads', 'TikTok Ads', 'LinkedIn Ads', 'Retargeting'],
  },
  {
    num: '04', title: 'Community Management',
    desc: 'Active monitoring, responding, and engaging with your audience across all platforms to build loyalty, trust, and a thriving brand community around your products.',
    tags: ['Comment Moderation', 'DM Management', 'Brand Voice'],
  },
  {
    num: '05', title: 'Influencer Marketing Campaigns',
    desc: 'Strategic identification, vetting, and management of micro to macro influencer partnerships that deliver authentic reach, cultural relevance, and measurable ROI.',
    tags: ['Micro Influencers', 'UGC Campaigns', 'Brand Deals'],
  },
  {
    num: '06', title: 'Social Media Analytics & Reporting',
    desc: 'In-depth monthly reports tracking follower growth, engagement rate, reach, conversions, and ROI across every platform — with plain-English insight summaries.',
    tags: ['Performance Reports', 'ROI Tracking', 'Competitor Benchmarking'],
  },
  {
    num: '07', title: 'Social Media Listening & Monitoring',
    desc: 'Real-time brand mention tracking and sentiment analysis across social channels so you always know what people are saying and can respond at the right moment.',
    tags: ['Brand Monitoring', 'Sentiment Analysis', 'Trend Alerts'],
  },
  {
    num: '08', title: 'Platform Optimization & Management',
    desc: 'Full bio, profile, and page optimization across Instagram, Facebook, LinkedIn, TikTok, and YouTube — ensuring your presence is discoverable and on-brand.',
    tags: ['Profile SEO', 'Bio Optimization', 'Multi-Platform'],
  },
  {
    num: '09', title: 'Social Media Contests & Giveaways',
    desc: 'Viral contest and giveaway campaigns designed to rapidly expand reach, grow followers, and generate user-generated content that amplifies brand awareness.',
    tags: ['Viral Campaigns', 'UGC', 'Follower Growth'],
  },
  {
    num: '10', title: 'Reputation Management on Social Platforms',
    desc: 'Proactive and reactive reputation management — addressing negative feedback, amplifying positive reviews, and maintaining a trustworthy brand image across all channels.',
    tags: ['Crisis Management', 'Review Response', 'Brand Trust'],
  },
]

const STATS = [
  { num: 2, suffix: 'M+', label: 'Followers Grown', sub: 'across client accounts' },
  { num: 420, suffix: '%', label: 'Avg. Engagement Uplift', sub: 'within 90 days' },
  { num: 150, suffix: '+', label: 'Brands Managed', sub: 'across all platforms' },
  { num: 98, suffix: '%', label: 'Client Retention', sub: 'year over year' },
]

const WHY_POINTS = [
  { title: 'Platform-Native Expertise', desc: 'Our team lives and breathes each platform — what works on TikTok is completely different from LinkedIn, and we know exactly how to play each game.' },
  { title: 'Content That Converts', desc: 'Pretty posts don\'t pay bills. Every piece of content we create is engineered to drive real business outcomes — not just vanity metrics.' },
  { title: 'Real-Time Trend Response', desc: 'We monitor trends daily and move fast — ensuring your brand capitalizes on viral moments before they pass.' },
  { title: 'Full Creative In-House', desc: 'Designers, videographers, copywriters, and strategists all under one roof for seamless, on-brand content at scale.' },
]

const PROCESS = [
  { num: '01', title: 'Brand Audit & Strategy', desc: 'Audit your existing social presence, define your audience personas, and build a platform-by-platform content strategy.' },
  { num: '02', title: 'Content Planning', desc: 'Create a monthly content calendar with themes, formats, and post cadence optimized for each platform\'s algorithm.' },
  { num: '03', title: 'Create & Publish', desc: 'Produce all content in-house, get your approval, and publish at peak engagement times for maximum reach.' },
  { num: '04', title: 'Engage & Analyse', desc: 'Manage community interactions daily and deliver monthly analytics reports with actionable insights for continuous growth.' },
]

const TESTIMONIALS = [
  { name: 'Lisa Chen', role: 'Verified Customer', rating: 5, video: vid3, quote: 'Hooqx shines in the digital crowd with their creativity and expertise. Their engaging social campaigns transformed our brand and set them apart from everyone else.' },
  { name: 'Musa Al Jaber', role: 'Verified Customer', rating: 5, video: vid1, quote: 'Their social media team is incredible. Our Instagram following tripled in just four months and the engagement quality is outstanding. Highly recommend Hooqx!' },
  { name: 'Daniel W.', role: 'Verified Customer', rating: 5, video: vid2, quote: "Hooqx flawlessly executed our social strategy, seamlessly translating our brand's identity into viral content that surpassed all our engagement goals." },
]

const FAQS = [
  { q: 'Which social media platforms do you manage?', a: 'We manage all major platforms including Instagram, Facebook, LinkedIn, TikTok, YouTube, Twitter/X, and Pinterest. We recommend focusing on the platforms most relevant to your target audience.' },
  { q: 'Do you create the content or do we need to provide it?', a: 'We handle everything in-house — strategy, copywriting, design, video editing, and scheduling. You simply review and approve before we publish. Some clients provide brand assets and we do the rest.' },
  { q: 'How often will you post on our accounts?', a: 'Post frequency is determined by your strategy and package. Typically we post 3–7 times per week per platform, adjusted based on what the data shows works best for your audience.' },
  { q: 'Can you run paid social media ads alongside organic content?', a: 'Yes. We offer integrated paid + organic strategies for maximum impact. Our paid social specialists manage campaigns across Meta, TikTok, LinkedIn, and YouTube with full budget transparency.' },
  { q: 'How do you measure social media success?', a: 'We track follower growth, reach, impressions, engagement rate, click-through rate, and — most importantly — conversions and leads generated from social channels.' },
  { q: 'Do you manage influencer partnerships too?', a: 'Yes. We handle the full influencer lifecycle: identifying the right creators for your brand, negotiating deals, briefing, content review, campaign execution, and performance reporting.' },
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

export default function SocialMediaPage() {
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
            { label: '↑ 420% Engagement',   cls: 'c1' },
            { label: '2M+ Followers Grown', cls: 'c2' },
            { label: '150+ Brands',         cls: 'c3' },
            { label: '8 Platforms',         cls: 'c4' },
            { label: '98% Retention',       cls: 'c5' },
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
              <span className="mk-eyebrow__dot" />Social Media Marketing
            </motion.p>

            <motion.h1
              className="mk-hero__title"
              variants={{ hidden: { opacity: 0, y: 40, filter: 'blur(12px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
            >
              Build a Brand People<br />
              <span className="mk-grad">Actually Follow</span>
            </motion.h1>

            <motion.p
              className="mk-hero__sub"
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
            >
              We craft social media strategies that turn scrollers into followers, followers into fans, and fans into paying customers — across every platform that matters.
            </motion.p>

            <motion.div
              className="mk-hero__cta"
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 22 } } }}
            >
              <a href="#services" className="mk-btn mk-btn--primary">Explore SMM Services</a>
              <a href="mailto:hello@hooqx.com" className="mk-btn mk-btn--outline">Get a Free Social Audit</a>
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
            <p className="mk-eyebrow"><span className="mk-eyebrow__dot" />Fishing for Attention? Social Media is Your Best Bait</p>
            <h2 className="mk-intro__heading">
              Where Your<br />
              Audience <span className="mk-grad">Lives</span>
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
              As a premier digital agency, we blend creativity with strategy to shape compelling online narratives for your brand. Our dynamic team of digital enthusiasts specializes in SEO, social media management, content creation, and beyond. At Hooqx, we don't just navigate the digital landscape; we redefine it.
            </p>
            <p>
              Embracing social media marketing is more important than ever now — it enables businesses to foster authentic connections, amplify brand awareness, and stay relevant in the rapidly evolving digital landscape, ultimately driving engagement and growth.
            </p>
            <div className="mk-intro__pills">
              {['Instagram', 'TikTok', 'LinkedIn', 'YouTube', 'Facebook'].map((p, i) => (
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
            <img src={introImg} alt="Social media marketing strategy" />
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
              Social Media <span className="mk-grad">Services</span>
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
            alt="Why Hooqx for social media"
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
            <div className="mk-why__img-badge-num">2M+</div>
            <div className="mk-why__img-badge-label">Followers Grown Worldwide</div>
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
            Get Hooked: The Power of<br />
            Social Media <span className="mk-grad">with Hooqx</span>
          </motion.h2>
          <motion.p
            className="mk-why__sub"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            As the most unparalleled in social media marketing, we excel in creating dynamic campaigns that resonate with your audience, leveraging trends and analytics to maximize engagement, foster genuine connections, and propel your brand ahead in the ever-evolving landscape of digital conversations.
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
            Grow My Social Presence
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
            <h2 className="mk-section-title">Our SMM <span className="mk-grad">Process</span></h2>
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
            <img src={processImg} alt="Social media process" />
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
          <p className="mk-eyebrow mk-eyebrow--center"><span className="mk-eyebrow__dot" />Ready to Go Viral?</p>
          <h2 className="mk-cta__title">
            Turn Your Social Media into<br />
            a <span className="mk-grad">Growth Engine</span>
          </h2>
          <p className="mk-cta__sub">
            Stop posting into the void. Let Hooqx build a social presence that attracts the right audience and converts them into loyal customers.
          </p>
          <div className="mk-cta__btns">
            <motion.a
              href="mailto:hello@hooqx.com"
              className="mk-btn mk-btn--primary mk-btn--lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(124,58,237,0.7)' }}
              whileTap={{ scale: 0.96 }}
            >
              Get a Free Social Audit
            </motion.a>
            <motion.a
              href="#services"
              className="mk-btn mk-btn--outline mk-btn--lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              View All SMM Services
            </motion.a>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
