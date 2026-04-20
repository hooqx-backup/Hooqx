import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, zoomIn, stagger, vp } from '../../../../lib/motion'
import hooqxVideo from '../../../../assets/videos/hooqxvideo.webm'
import './VideoSection.css'

const stats = [
  { value: '250+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years Experience' },
  { value: '40+', label: 'Expert Team Members' },
]

// Video wrapper: scale up from slight shrink + fade
const videoWrap = {
  hidden: { opacity: 0, scale: 0.88, y: 32 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
}

// Stat item pops in with spring
const statItem = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 22 },
  },
}

export default function VideoSection() {
  const videoRef = useRef(null)

  return (
    <section className="vsec">
      <div className="vsec__blob vsec__blob--left" />
      <div className="vsec__blob vsec__blob--right" />

      <div className="vsec__inner">

        {/* header — words cascade up */}
        <motion.div
          className="vsec__header"
          variants={stagger(0.05, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="vsec__eyebrow" variants={fadeUp}>
            <span className="vsec__eyebrow-line" />
            Who We Are
            <span className="vsec__eyebrow-line" />
          </motion.span>

          <motion.h2 className="vsec__heading" variants={fadeUp}>
            We Build Digital Experiences<br />
            <span className="vsec__heading-accent">That Drive Real Results</span>
          </motion.h2>

          <motion.p className="vsec__sub" variants={fadeUp}>
            Watch how Hooqx transforms ideas into powerful products — from concept to launch,
            we're your end-to-end technology partner.
          </motion.p>
        </motion.div>

        {/* video — scales in from centre */}
        <motion.div
          className="vsec__video-wrap"
          variants={videoWrap}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <span className="vsec__corner vsec__corner--tl" />
          <span className="vsec__corner vsec__corner--tr" />
          <span className="vsec__corner vsec__corner--bl" />
          <span className="vsec__corner vsec__corner--br" />

          <video
            ref={videoRef}
            className="vsec__video vsec__video--visible"
            src={hooqxVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </motion.div>

        {/* stats — pop in with stagger */}
        <motion.div
          className="vsec__stats"
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {stats.map((s) => (
            <motion.div className="vsec__stat" key={s.label} variants={statItem}>
              <span className="vsec__stat-value">{s.value}</span>
              <span className="vsec__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
