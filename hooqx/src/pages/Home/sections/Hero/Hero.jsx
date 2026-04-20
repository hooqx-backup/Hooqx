import { useState, useEffect, useCallback, useRef } from 'react'
import heroBg1 from '../../../../assets/images/herobannerimage1.jpg'
import heroBg2 from '../../../../assets/images/herobannerimag2.jpg'
import heroBg3 from '../../../../assets/images/herobannerimage3.jpg'

const bgImages = [heroBg1, heroBg2, heroBg3]
import './Hero.css'

const slides = [
  {
    id: 1,
    eyebrow: 'Web & App Development',
    heading: ['Innovative Development', 'Solutions Unleashed'],
    sub: 'We craft scalable, high-performance digital products that push boundaries and deliver measurable results for your business.',
    primary: { label: 'Contact Us', href: '/contact' },
    secondary: { label: 'Read More', href: '/about' },
  },
  {
    id: 2,
    eyebrow: 'Digital Marketing',
    heading: ['Take Your Marketing', 'To The Next Level'],
    sub: 'From SEO to social campaigns, we amplify your brand reach and turn every click into a loyal, long-term customer.',
    primary: { label: 'Get Started', href: '/marketing' },
    secondary: { label: 'Learn More', href: '/about' },
  },
  {
    id: 3,
    eyebrow: 'UI/UX & Branding',
    heading: ['Shaping The Future', 'Together'],
    sub: 'Stunning visuals and intuitive interfaces that captivate your audience and set your business apart from the competition.',
    primary: { label: 'View Portfolio', href: '/design' },
    secondary: { label: 'Contact Us', href: '/contact' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [direction, setDirection] = useState('next')
  const lockRef = useRef(false)

  const goTo = useCallback((index, dir = 'next') => {
    if (lockRef.current || index === current) return
    lockRef.current = true
    setDirection(dir)
    setPrev(current)
    setCurrent(index)
    setTimeout(() => {
      setPrev(null)
      lockRef.current = false
    }, 850)
  }, [current])

  const goPrev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev')
  }, [current, goTo])

  const goNext = useCallback(() => {
    goTo((current + 1) % slides.length, 'next')
  }, [current, goTo])

  useEffect(() => {
    const t = setInterval(goNext, 6000)
    return () => clearInterval(t)
  }, [goNext])

  return (
    <section className="hero">

      {/* BG layers */}
      {slides.map((_, i) => (
        <div
          key={i}
          className={`hero__bg${
            i === current ? ' hero__bg--active' : ''
          }${i === prev ? ` hero__bg--exit hero__bg--exit-${direction}` : ''}`}
          style={{ backgroundImage: `url(${bgImages[i]})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="hero__overlay" />

      {/* Gradient vignette bottom */}
      <div className="hero__vignette" />

      {/* Slides content */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero__slide${
            i === current ? ' hero__slide--active' : ''
          }${i === prev ? ` hero__slide--exit hero__slide--exit-${direction}` : ''}`}
        >
          <div className="hero__inner">
            <span className="hero__eyebrow">
              <span className="hero__eyebrow-line" />
              {slide.eyebrow}
            </span>
            <h1 className="hero__heading">
              {slide.heading.map((line, j) => (
                <span key={j} className="hero__heading-line" style={{ '--i': j }}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="hero__sub">{slide.sub}</p>
            <div className="hero__actions">
              <a href={slide.primary.href} className="hero__btn hero__btn--primary">
                {slide.primary.label}
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={slide.secondary.href} className="hero__btn hero__btn--secondary">
                {slide.secondary.label}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="hero__arrow hero__arrow--prev" onClick={goPrev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={goNext} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
            onClick={() => goTo(i, i > current ? 'next' : 'prev')}
            aria-label={`Slide ${i + 1}`}
          >
            <span className="hero__dot-fill" />
          </button>
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero__progress">
        <div className="hero__progress-fill" key={current} />
      </div>

    </section>
  )
}
