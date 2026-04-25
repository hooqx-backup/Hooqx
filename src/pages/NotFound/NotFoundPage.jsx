import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './NotFoundPage.css'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'UI/UX Design', to: '/ui-ux-design' },
  { label: 'Graphic Design', to: '/graphics-design' },
  { label: 'Contact', to: '/contact' },
]

const statusCards = [
  { label: 'Core Status', value: 'ONLINE' },
  { label: 'Route Table', value: 'SYNCED' },
  { label: 'Fallback AI', value: 'ACTIVE' },
]

const particles = Array.from({ length: 18 }, (_, i) => i)

export default function NotFoundPage() {
  return (
    <main className="nf-page">
      <div className="nf-page__noise" />
      <div className="nf-page__grid" />
      <div className="nf-page__scanline" />

      <div className="nf-page__orbs" aria-hidden="true">
        <span className="nf-orb nf-orb--a" />
        <span className="nf-orb nf-orb--b" />
        <span className="nf-orb nf-orb--c" />
      </div>

      <div className="nf-tech-rings" aria-hidden="true">
        <span className="nf-tech-rings__ring nf-tech-rings__ring--1" />
        <span className="nf-tech-rings__ring nf-tech-rings__ring--2" />
      </div>

      <motion.aside
        className="nf-hud nf-hud--left"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.18 }}
      >
        {statusCards.map((card, index) => (
          <div key={card.label} className="nf-hud__card" style={{ '--card-delay': `${index * 0.2}s` }}>
            <p className="nf-hud__label">{card.label}</p>
            <p className="nf-hud__value">{card.value}</p>
            <span className="nf-hud__pulse" />
          </div>
        ))}
      </motion.aside>

      <motion.aside
        className="nf-hud nf-hud--right"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.24 }}
      >
        <div className="nf-radar">
          <span className="nf-radar__ring nf-radar__ring--1" />
          <span className="nf-radar__ring nf-radar__ring--2" />
          <span className="nf-radar__ring nf-radar__ring--3" />
          <span className="nf-radar__dot" />
        </div>
        <div className="nf-signal">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </motion.aside>

      <div className="nf-particles" aria-hidden="true">
        {particles.map((item) => (
          <span
            key={item}
            className="nf-particle"
            style={{
              '--x': `${(item * 37) % 100}%`,
              '--delay': `${(item % 7) * 0.45}s`,
              '--dur': `${4 + (item % 5) * 1.1}s`,
            }}
          />
        ))}
      </div>

      <section className="nf-shell">
        <motion.p
          className="nf-eyebrow"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          Error 404 - Page Not Found
        </motion.p>

        <motion.h1
          className="nf-code"
          data-text="404"
          initial={{ opacity: 0, scale: 0.92, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          404
        </motion.h1>

        <motion.h2
          className="nf-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Lost In The Network Layer
        </motion.h2>

        <motion.p
          className="nf-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The route you requested does not exist or was moved. Let&apos;s route you back to active nodes.
        </motion.p>

        <motion.div
          className="nf-terminal"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          <div className="nf-terminal__head">
            <span />
            <span />
            <span />
          </div>
          <div className="nf-terminal__body">
            <p>$ resolve --route /requested/path</p>
            <p className="nf-terminal__error">ERROR: route_not_found (404)</p>
            <p>$ suggest --fallback</p>
            <p className="nf-terminal__ok">OK: use navigation shortcuts below<span className="nf-cursor">_</span></p>
          </div>
        </motion.div>

        <motion.div
          className="nf-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link to="/" className="nf-btn nf-btn--primary">Return Home</Link>
          <Link to="/contact" className="nf-btn nf-btn--ghost">Talk To Team</Link>
        </motion.div>

        <motion.div
          className="nf-links"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          {quickLinks.map((link) => (
            <Link key={link.to} to={link.to} className="nf-chip">
              <span className="nf-chip__dot" />
              {link.label}
            </Link>
          ))}
        </motion.div>

        <motion.div
          className="nf-progress"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="nf-progress__text">Rebuilding navigation map...</span>
          <div className="nf-progress__track">
            <span className="nf-progress__bar" />
          </div>
        </motion.div>
      </section>
    </main>
  )
}
