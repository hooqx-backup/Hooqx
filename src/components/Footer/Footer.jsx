import { motion } from 'framer-motion'
import logo from '../../assets/images/hooqxfulllogo.png'
import { vp, fadeUp, stagger } from '../../lib/motion'
import EarthCanvas from './EarthCanvas'
import './Footer.css'

const services = [
  { label: 'Web Development', href: '/web-development' },
  { label: 'App Development', href: '/app-development' },
  { label: 'UI/UX Design', href: '/ui-ux-design' },
  { label: 'SEO', href: '/seo' },
  { label: 'SMO', href: '/social-media-marketing' },
  { label: 'Career', href: '/contact' },
  { label: 'Blog', href: '/contact' },
]

const contacts = [
  {
    type: 'address',
    value: '1111B S Governors Ave STE 20262 Dover, DE 19904 US',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
      </svg>
    ),
  },
  { type: 'phone', value: '+1-470-380-9098', flag: '🇺🇸' },
  { type: 'phone', value: '+971 4 509 5919', flag: '🇦🇪' },
  { type: 'phone', value: '+91 70036 34890', flag: '🇮🇳' },
  { type: 'email', value: 'info@hooqx.com' },
  { type: 'web',   value: 'www.hooqx.com' },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/hooqx',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://x.com/HooqxM',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/hooqxllc/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
]

const colVariant = (delay) => ({
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
})

export default function Footer() {
  return (
    <footer className="ft">

      {/* 3D Earth background */}
      <EarthCanvas />

      {/* decorative elements */}
      <div className="ft__grid" />
      <div className="ft__blob ft__blob--left" />
      <div className="ft__blob ft__blob--right" />
      <div className="ft__scan" />

      {/* top divider line */}
      <div className="ft__divider" />

      <div className="ft__body">
        <div className="ft__inner">

          {/* ── Col 1: Brand ── */}
          <motion.div
            className="ft__col ft__col--brand"
            variants={colVariant(0)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <a href="/" className="ft__logo-wrap">
              <img src={logo} alt="Hooqx" className="ft__logo" />
            </a>

            <p className="ft__tagline">
              We globally enhance client businesses with strategic creativity in{' '}
              <span className="ft__tagline-accent">IT solutions</span>, spanning
              development, marketing, design, and problem-solving.
            </p>

            <div className="ft__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="ft__social" aria-label={s.label}>
                  {s.icon}
                  <span className="ft__social-glow" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: Services ── */}
          <motion.div
            className="ft__col"
            variants={colVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <h4 className="ft__heading">
              Services
              <span className="ft__heading-bar" />
            </h4>
            <ul className="ft__list">
              {services.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="ft__link">
                    <span className="ft__link-arrow">
                      <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
                        <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Contact ── */}
          <motion.div
            className="ft__col"
            variants={colVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={vp}
          >
            <h4 className="ft__heading">
              Contact
              <span className="ft__heading-bar" />
            </h4>
            <ul className="ft__contact-list">
              {contacts.map((c, i) => (
                <li key={i} className="ft__contact-item">
                  {c.type === 'address' && (
                    <span className="ft__contact-row">
                      <span className="ft__contact-icon">{c.icon}</span>
                      <span className="ft__contact-text">{c.value}</span>
                    </span>
                  )}
                  {c.type === 'phone' && (
                    <a href={`tel:${c.value}`} className="ft__contact-row ft__contact-row--link">
                      <span className="ft__contact-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </span>
                      <span className="ft__contact-text">{c.value}</span>
                      <span className="ft__flag">{c.flag}</span>
                    </a>
                  )}
                  {c.type === 'email' && (
                    <a href={`mailto:${c.value}`} className="ft__contact-row ft__contact-row--link">
                      <span className="ft__contact-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </span>
                      <span className="ft__contact-text">{c.value}</span>
                    </a>
                  )}
                  {c.type === 'web' && (
                    <a href={`https://${c.value}`} className="ft__contact-row ft__contact-row--link" target="_blank" rel="noreferrer">
                      <span className="ft__contact-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16A8 8 0 0010 2zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                        </svg>
                      </span>
                      <span className="ft__contact-text">{c.value}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <motion.div
        className="ft__bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="ft__bottom-inner">
          <p className="ft__copy">Copyright © Hooqx LLC — All rights reserved.</p>
          <div className="ft__bottom-links">
            <a href="/privacy-policy" className="ft__bottom-link">Privacy Policy</a>
            <span className="ft__bottom-dot" />
            <a href="/terms-and-conditions" className="ft__bottom-link">Terms and Conditions</a>
            <span className="ft__bottom-dot" />
            <a href="/cookie-policy" className="ft__bottom-link">Cookie Policy</a>
          </div>
        </div>
      </motion.div>

    </footer>
  )
}