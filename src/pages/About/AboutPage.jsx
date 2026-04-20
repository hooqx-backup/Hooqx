import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, zoomIn, stagger, vp } from '../../lib/motion'
import { Users, Award, Target, Zap, TrendingUp, Monitor, Globe, ArrowUpRight, ExternalLink } from 'lucide-react'
import heroBg from '../../assets/images/herobannerimage1.jpg'
import heroBg2 from '../../assets/images/herobannerimag2.jpg'
import portfolio1 from '../../assets/images/service_sm_01.jpg'
import portfolio2 from '../../assets/images/service_sm_02.jpg'
import portfolio3 from '../../assets/images/service_sm_03.jpg'
import teamImg from '../../assets/images/4-2-scaled-1.jpg'
import './AboutPage.css'

const features = [
  {
    icon: TrendingUp,
    title: 'Business Growth',
    desc: 'We help businesses scale through data-driven strategies, innovative solutions, and measurable results that fuel sustainable growth.',
  },
  {
    icon: Monitor,
    title: 'IT Consultancy',
    desc: 'Our expert consultants guide your digital transformation journey with tailored technology strategies and hands-on implementation support.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Operating across the USA, UAE, and India, we deliver world-class digital solutions to clients on every continent.',
  },
]

const values = [
  {
    title: 'Innovation',
    desc: 'We push boundaries with cutting-edge technology and creative thinking to deliver solutions that drive real change.',
    icon: Zap,
  },
  {
    title: 'Excellence',
    desc: 'Every project reflects our commitment to quality, precision, and delivering beyond expectations.',
    icon: Award,
  },
  {
    title: 'Collaboration',
    desc: 'We believe in strong partnerships, transparent communication, and working hand-in-hand with our clients.',
    icon: Users,
  },
  {
    title: 'Purpose',
    desc: "We're dedicated to creating digital solutions that make a meaningful impact on businesses and their customers.",
    icon: Target,
  },
]

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Happy Clients', value: '96%' },
  { label: 'Team Members', value: '50+' },
  { label: 'Years of Experience', value: '8+' },
]

const technologies = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'Digital Marketing',
  'Cloud Solutions',
  'AI & Automation',
  'SEO / SMO',
  'Branding',
  'Content Creation',
]

const team = [
  { name: 'Fatimah Ahmed', role: 'Co-Founder', img: teamImg },
]

const portfolio = [
  { img: portfolio1, label: 'Web Design & Development' },
  { img: portfolio2, label: 'Digital Marketing' },
  { img: portfolio3, label: 'Branding & UI/UX' },
]

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero__blob about-hero__blob--left" />
        <div className="about-hero__blob about-hero__blob--right" />
        <div className="about-hero__grid" />

        <div className="about-hero__content">
          <motion.span
            className="about-hero__eyebrow"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <span className="about-hero__eyebrow-line" />
            Who We Are
          </motion.span>

          <motion.h1
            className="about-hero__heading"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            Beyond the Hook:{' '}
            <span className="about-hero__heading-accent">Discovering the Depths</span>
            {' '}of Hooqx's Mission
          </motion.h1>

          <motion.p
            className="about-hero__sub"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            We Provide the best IT Solutions services
          </motion.p>

          <motion.p
            className="about-hero__desc"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            We globally enhance client businesses with strategic creativity in IT solutions,
            spanning development, marketing, design, and problem-solving. As a full-service
            digital agency based in the USA with over decades of experience, we transform
            ideas into scalable, impactful digital experiences that captivate, connect, and conquer.
          </motion.p>

          <motion.div
            className="about-hero__cta"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <a href="/contact" className="about-hero__btn about-hero__btn--primary">
              Let's Work Together
            </a>
            <a href="#expertise" className="about-hero__btn about-hero__btn--secondary">
              Learn More
            </a>
          </motion.div>
        </div>

        <motion.div
          className="about-hero__images"
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <div className="about-hero__img-primary">
            <img src={heroBg} alt="Hooqx Team at Work" />
          </div>
          <div className="about-hero__img-secondary">
            <img src={heroBg2} alt="Hooqx Digital Solutions" />
          </div>
        </motion.div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="about-features">
        <div className="about-features__container">
          <motion.div
            className="about-features__grid"
            variants={stagger(0.08, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {features.map((f) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  className="about-features__card"
                  variants={fadeUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="about-features__icon">
                    <Icon size={28} />
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats">
        <div className="about-stats__container">
          <motion.div
            className="about-stats__grid"
            variants={stagger(0.08, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} className="about-stats__item" variants={fadeUp}>
                <div className="about-stats__value">{stat.value}</div>
                <div className="about-stats__label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="about-mission">
        <div className="about-mission__blob about-mission__blob--left" />
        <div className="about-mission__blob about-mission__blob--right" />
        <div className="about-mission__grid" />

        <div className="about-mission__container">
          <motion.div
            className="about-mission__content"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="about-mission__eyebrow" variants={fadeUp}>
              <span className="about-mission__eyebrow-line" />
              Our Foundation
            </motion.span>

            <motion.h2 className="about-mission__heading" variants={slideLeft}>
              Mission & Vision
            </motion.h2>

            <div className="about-mission__grid-content">
              <motion.div className="about-mission__box" variants={fadeUp}>
                <h3>Mission</h3>
                <p>
                  To empower businesses through creativity, technology, and data-driven insights.
                  We're committed to delivering measurable growth by building digital solutions
                  that solve real problems and unlock new opportunities for every client we serve.
                </p>
              </motion.div>

              <motion.div className="about-mission__box" variants={fadeUp}>
                <h3>Vision</h3>
                <p>
                  To be a catalyst for transformative digital experiences that enable brands to
                  captivate, connect, and conquer digitally. We aspire to be the most trusted
                  global digital partner, recognized for excellence and lasting impact.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="about-values">
        <div className="about-values__container">
          <motion.div
            className="about-values__header"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="about-values__eyebrow" variants={fadeUp}>
              <span className="about-values__eyebrow-line" />
              What Drives Us
            </motion.span>

            <motion.h2 className="about-values__heading" variants={slideLeft}>
              Our Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            className="about-values__grid"
            variants={stagger(0.08, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {values.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="about-values__card"
                  variants={fadeUp}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="about-values__icon">
                    <Icon size={32} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PORTFOLIO GALLERY ── */}
      <section className="about-portfolio">
        <div className="about-portfolio__blob about-portfolio__blob--left" />
        <div className="about-portfolio__blob about-portfolio__blob--right" />
        <div className="about-portfolio__grid-bg" />

        <div className="about-portfolio__container">
          <motion.div
            className="about-portfolio__header"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="about-portfolio__eyebrow" variants={fadeUp}>
              <span className="about-portfolio__eyebrow-line" />
              Our Work
            </motion.span>

            <motion.h2 className="about-portfolio__heading" variants={slideLeft}>
              Projects We're Proud Of
            </motion.h2>

            <motion.p className="about-portfolio__desc" variants={fadeUp}>
              A glimpse into the digital experiences we've crafted for clients worldwide.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-portfolio__gallery"
            variants={stagger(0.08, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {portfolio.map((item) => (
              <motion.div
                key={item.label}
                className="about-portfolio__item"
                variants={zoomIn}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="about-portfolio__img-wrap">
                  <img src={item.img} alt={item.label} />
                  <div className="about-portfolio__overlay">
                    <span className="about-portfolio__label">{item.label}</span>
                    <ArrowUpRight size={20} className="about-portfolio__arrow" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="about-team">
        <div className="about-team__container">
          <motion.div
            className="about-team__header"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="about-team__eyebrow" variants={fadeUp}>
              <span className="about-team__eyebrow-line" />
              The People
            </motion.span>

            <motion.h2 className="about-team__heading" variants={slideLeft}>
              Meet Our Team
            </motion.h2>

            <motion.p className="about-team__desc" variants={fadeUp}>
              Passionate professionals dedicated to crafting digital excellence for every client.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-team__grid"
            variants={stagger(0.08, 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                className="about-team__card"
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="about-team__img-wrap">
                  <img src={member.img} alt={member.name} />
                  <div className="about-team__img-overlay" />
                </div>
                <div className="about-team__info">
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                  <div className="about-team__socials">
                    <a href="#" aria-label="LinkedIn" className="about-team__social">
                      <ExternalLink size={16} />
                    </a>
                    <a href="#" aria-label="Twitter" className="about-team__social">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Join card */}
            <motion.div
              className="about-team__card about-team__card--join"
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="about-team__join-inner">
                <div className="about-team__join-icon">
                  <Users size={40} />
                </div>
                <h3>Join Our Team</h3>
                <p>We're always looking for talented people to help us build the future of digital.</p>
                <a href="/contact" className="about-team__join-btn">
                  Get in Touch <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TECHNOLOGIES WE DEAL ── */}
      <section id="expertise" className="about-expertise">
        <div className="about-expertise__blob about-expertise__blob--left" />
        <div className="about-expertise__blob about-expertise__blob--right" />
        <div className="about-expertise__grid" />

        <div className="about-expertise__container">
          <motion.div
            className="about-expertise__header"
            variants={stagger(0.06, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <motion.span className="about-expertise__eyebrow" variants={fadeUp}>
              <span className="about-expertise__eyebrow-line" />
              Our Capabilities
            </motion.span>

            <motion.h2 className="about-expertise__heading" variants={slideLeft}>
              Technologies We Deal
            </motion.h2>

            <motion.p className="about-expertise__desc" variants={fadeUp}>
              From cutting-edge web technologies to mobile development, cloud solutions, and
              AI-powered systems, we leverage the latest tools to deliver exceptional results.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-expertise__tags"
            variants={stagger(0.08, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                className="about-expertise__tag"
                variants={fadeUp}
                whileHover={{ scale: 1.08, transition: { duration: 0.25 } }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="about-cta">
        <div className="about-cta__blob about-cta__blob--left" />
        <div className="about-cta__blob about-cta__blob--right" />

        <motion.div
          className="about-cta__content"
          variants={stagger(0.08, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.h2 className="about-cta__heading" variants={slideLeft}>
            Ready to Transform Your<br />
            <span>Digital Future?</span>
          </motion.h2>

          <motion.p className="about-cta__desc" variants={fadeUp}>
            Let's collaborate and create something extraordinary together.
          </motion.p>

          <motion.div className="about-cta__buttons" variants={fadeUp}>
            <a href="/contact" className="about-cta__btn about-cta__btn--primary">
              Get in Touch
            </a>
            <a href="tel:+14703809098" className="about-cta__btn about-cta__btn--secondary">
              Call Us Now
            </a>
          </motion.div>
        </motion.div>
      </section>

    </main>
  )
}
