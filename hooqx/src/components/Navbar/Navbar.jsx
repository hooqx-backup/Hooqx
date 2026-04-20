import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import hooqxfulllogo from '../../assets/images/hooqxfulllogo.png'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/', hasDropdown: false },
  {
    label: 'Development', to: '/web-development', hasDropdown: true,
    dropdown: [
      { label: 'Web Development',  to: '/web-development' },
      { label: 'App Development',  to: '/app-development' },
      { label: 'Software Development', to: '/software-development' },
    ],
  },
  {
    label: 'Marketing', to: '/marketing', hasDropdown: true,
    dropdown: [
      { label: 'Digital Marketing',     to: '/marketing' },
      { label: 'Search Engine Optimization', to: '#' },
      { label: 'Social Media Marketing',     to: '#' },
      { label: 'Performance Marketing',      to: '#' },
    ],
  },
  {
    label: 'Design', to: '/design', hasDropdown: true,
    dropdown: [
      { label: 'Graphic Design', to: '/design' },
      { label: 'UI/UX Design',   to: '#' },
    ],
  },
  { label: 'About',   to: '/about',   hasDropdown: false },
  { label: 'Contact', to: '/contact', hasDropdown: false },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const navRef = useRef(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()

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

  useEffect(() => {
    if (pathname.startsWith('/web-development') || pathname.startsWith('/app-development') || pathname.startsWith('/software-development')) {
      setMobileAccordion('Development')
      return
    }
    if (pathname.startsWith('/marketing')) {
      setMobileAccordion('Marketing')
      return
    }
    if (pathname.startsWith('/design')) {
      setMobileAccordion('Design')
      return
    }
    setMobileAccordion(null)
  }, [pathname])

  const closeMenu = () => {
    setMenuOpen(false)
    setMobileAccordion(null)
  }

  const toggleDropdown = (label) => setOpenDropdown(prev => prev === label ? null : label)
  const toggleMobileAccordion = (label) => setMobileAccordion(prev => prev === label ? null : label)

  const handleDropdownNav = (to) => {
    setOpenDropdown(null)
    if (to !== '#') navigate(to)
  }

  return (
    <>
      {/* Overlay backdrop */}
      <div
        className={`mobile-overlay${menuOpen ? ' mobile-overlay--visible' : ''}`}
        onClick={closeMenu}
      />

      <nav ref={navRef} className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__container">

          <Link to="/" className="navbar__logo">
            <img src={hooqxfulllogo} alt="Hooqx" />
          </Link>

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
                        item.to === '#'
                          ? (
                            <span key={item.label} className="navbar__dropdown-item navbar__dropdown-item--soon">
                              {item.label}
                              <span className="navbar__dropdown-badge">Soon</span>
                            </span>
                          ) : (
                            <NavLink
                              key={item.label}
                              to={item.to}
                              className={({ isActive }) =>
                                `navbar__dropdown-item${isActive ? ' navbar__dropdown-item--active' : ''}`
                              }
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.label}
                            </NavLink>
                          )
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar__link${isActive ? ' navbar__link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
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

          <Link to="/contact" className="navbar__cta navbar__cta--desktop">Let's Build</Link>

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
          <Link to="/" className="mobile-menu__logo" onClick={closeMenu}>
            <img src={hooqxfulllogo} alt="Hooqx" />
          </Link>
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
                        item.to === '#'
                          ? (
                            <span key={item.label} className="mobile-menu__sub-item mobile-menu__sub-item--soon">
                              <span className="mobile-menu__sub-dot" />
                              {item.label}
                              <span className="navbar__dropdown-badge">Soon</span>
                            </span>
                          ) : (
                            <NavLink
                              key={item.label}
                              to={item.to}
                              className={({ isActive }) =>
                                `mobile-menu__sub-item${isActive ? ' mobile-menu__sub-item--active' : ''}`
                              }
                              onClick={closeMenu}
                            >
                              <span className="mobile-menu__sub-dot" />
                              {item.label}
                            </NavLink>
                          )
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `mobile-menu__link${isActive ? ' mobile-menu__link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                </NavLink>
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
          <Link to="/contact" className="navbar__cta mobile-menu__cta" onClick={closeMenu}>
            Let's Build
          </Link>
        </div>
      </div>
    </>
  )
}
