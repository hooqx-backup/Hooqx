import { useState, useEffect, useRef } from 'react'
import hooqxfulllogo from '../../assets/images/hooqxfulllogo.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '/', hasDropdown: false },
  {
    label: 'Development', href: '/development', hasDropdown: true,
    dropdown: [
      { label: 'Web Development Service', href: '/web-development' },
      { label: 'App Development Service', href: '/app-development' },
      { label: 'Software Development', href: '/software-development' },
    ],
  },
  {
    label: 'Marketing', href: '/marketing', hasDropdown: true,
    dropdown: [
      { label: 'Digital Marketing Service', href: '/marketing' },
      { label: 'Search Engine Optimization', href: '/seo' },
      { label: 'Social Media Marketing', href: '/social-media-marketing' },
      { label: 'Performance Marketing', href: '/performance-marketing' },
    ],
  },
  {
    label: 'Design', href: '/design', hasDropdown: true,
    dropdown: [
      { label: 'Graphic Design Service', href: '/design' },
      { label: 'UI/UX Design', href: '/design' },
    ],
  },
  { label: 'About', href: '/about', hasDropdown: false },
  { label: 'Contact', href: '/contact', hasDropdown: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
    setMobileAccordion(null)
  }

  const toggleDropdown = (label) => setOpenDropdown(prev => prev === label ? null : label)
  const toggleMobileAccordion = (label) => setMobileAccordion(prev => prev === label ? null : label)

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`mobile-overlay${menuOpen ? ' mobile-overlay--visible' : ''}`}
        onClick={closeMenu}
      />

      <nav ref={navRef} className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          <a href="/" className="navbar__logo">
            <img src={hooqxfulllogo} alt="Hooqx" />
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label} className={`navbar__item${link.hasDropdown ? ' navbar__item--has-dropdown' : ''}`}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className={`navbar__link navbar__link--btn${openDropdown === link.label ? ' navbar__link--active' : ''}`}
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <span className={`navbar__plus${openDropdown === link.label ? ' navbar__plus--open' : ''}`}>+</span>
                    </button>
                    <div className={`navbar__dropdown${openDropdown === link.label ? ' navbar__dropdown--open' : ''}`}>
                      {link.dropdown.map((item) => (
                        <a key={item.label} href={item.href} className="navbar__dropdown-item" onClick={() => setOpenDropdown(null)}>
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={link.href} className="navbar__link">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <a href="tel:+14703809098" className="navbar__phone" aria-label="Call Hooqx now">
            <span className="navbar__phone-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.99 2.2 2 2 0 012.98 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
            </span>
            <span className="navbar__phone-number">+1 (470) 380-9098</span>
          </a>

          <a href="/contact" className="navbar__cta navbar__cta--desktop">Let's Build</a>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="navbar__hamburger-ring" />
            <span className="navbar__bar navbar__bar--1" />
            <span className="navbar__bar navbar__bar--2" />
            <span className="navbar__bar navbar__bar--3" />
          </button>
        </div>
      </nav>

      {/* Mobile slide-in panel */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
          <a href="/" className="mobile-menu__logo" onClick={closeMenu}>
            <img src={hooqxfulllogo} alt="Hooqx" />
          </a>
        </div>

        <nav className="mobile-menu__nav">
          {navLinks.map((link, i) => (
            <div key={link.label} className="mobile-menu__item" style={{ '--i': i }}>
              {link.hasDropdown ? (
                <>
                  <button
                    className={`mobile-menu__link mobile-menu__link--accordion${mobileAccordion === link.label ? ' mobile-menu__link--open' : ''}`}
                    onClick={() => toggleMobileAccordion(link.label)}
                  >
                    <span>{link.label}</span>
                    <svg className="mobile-menu__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`mobile-menu__accordion${mobileAccordion === link.label ? ' mobile-menu__accordion--open' : ''}`}>
                    <div className="mobile-menu__accordion-inner">
                      {link.dropdown.map((item) => (
                        <a key={item.label} href={item.href} className="mobile-menu__sub-item" onClick={closeMenu}>
                          <span className="mobile-menu__sub-dot" />
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={link.href} className="mobile-menu__link" onClick={closeMenu}>
                  <span>{link.label}</span>
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <a href="tel:+14703809098" className="mobile-menu__phone">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.99 2.2 2 2 0 012.98 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
            </svg>
            +1 (470) 380-9098
          </a>
          <a href="/contact" className="navbar__cta mobile-menu__cta" onClick={closeMenu}>
            Let's Build
          </a>
        </div>
      </div>
    </>
  )
}
