import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { blurUp, fadeUp, stagger, vp } from '../../../../lib/motion'

// Your video imports
import v1 from '../../../../assets/videos/customer1.webm'
import v2 from '../../../../assets/videos/customer2.webm'
import v3 from '../../../../assets/videos/customer3.webm'
import v4 from '../../../../assets/videos/customer4.webm'

// Add your poster image imports here! (Fallback thumbnails)
import p1 from '../../../../assets/images/poster1.png' 
import p2 from '../../../../assets/images/poster2.png'
import p3 from '../../../../assets/images/poster3.png'
import p4 from '../../../../assets/images/poster4.png'

import './CustomerVideos.css'

// Added the poster property to the data array
const customers = [
  { src: v1, poster: p1, name: 'Barry John Harwood',  role: 'CEO, TechVentures',        rating: 5 },
  { src: v2, poster: p2, name: 'Nurten Kaymakci',     role: 'Founder, GrowthLab',       rating: 5 },
  { src: v3, poster: p3, name: 'Danish Rizvi',   role: 'Marketing Dir, NovaBrand', rating: 5 },
  { src: v4, poster: p4, name: 'Shaadi AbdelAziz',  role: 'Brand Manager, PixelEdge', rating: 5 },
]

const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="#f59e0b">
    <path d="M8 1l1.8 3.6 4 .6-2.9 2.8.7 4L8 10l-3.6 1.9.7-4L2.2 5.2l4-.6L8 1z"/>
  </svg>
)

// Play & Pause Icons
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
)

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
  </svg>
)

const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 48, scale: 0.94 },
  show:   { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.13 } },
})

function VideoCard({ src, poster, name, role, rating, index }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      className={`cv-card ${isPlaying ? 'is-playing' : ''}`} 
      variants={cardVariant(index)}
      onClick={togglePlay} // Clicking anywhere on the card toggles it
    >
      <video
        ref={videoRef}
        className="cv-video"
        src={src}
        poster={poster} // This stops the black screen!
        loop
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="cv-overlay" />

      {/* Play/Pause Button */}
      <button 
        className="cv-play-btn" 
        aria-label={isPlaying ? "Pause video" : "Play video"}
        onClick={(e) => {
          e.stopPropagation(); // Prevents double firing from the card click
          togglePlay();
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <div className="cv-info">
        <div className="cv-stars">
          {Array.from({ length: rating }).map((_, i) => <StarIcon key={i} />)}
        </div>
        <p className="cv-quote-hint">"Absolutely outstanding experience!"</p>
        <div className="cv-author">
          <div className="cv-avatar">{name.charAt(0)}</div>
          <div>
            <strong className="cv-name">{name}</strong>
            <span className="cv-role">{role}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CustomerVideos() {
  return (
    <section className="cv-section">
      <div className="cv-orb cv-orb--tl" aria-hidden="true" />
      <div className="cv-orb cv-orb--br" aria-hidden="true" />

      <div className="cv-container">
        <motion.div
          className="cv-header"
          variants={stagger(0, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="cv-eyebrow" variants={fadeUp}>Real Stories</motion.span>
          <motion.h2 className="cv-title" variants={blurUp}>
            What Our <em className="cv-title-em">Customers</em> Say
          </motion.h2>
          <motion.p className="cv-subtitle" variants={fadeUp}>
            Don't take our word for it — hear it directly from the people we've worked with.
          </motion.p>
        </motion.div>

        <motion.div
          className="cv-grid"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {customers.map((c, i) => (
            <VideoCard key={i} {...c} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}