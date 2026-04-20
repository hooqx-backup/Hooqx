// Shared viewport config — trigger once, 100px before entering
export const vp = { once: true, margin: '-100px' }

// ── Fade up (default text/header reveal) ──
export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// ── Fade in (simple opacity) ──
export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

// ── Slide from left ──
export const slideLeft = {
  hidden: { opacity: 0, x: -72 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

// ── Slide from right ──
export const slideRight = {
  hidden: { opacity: 0, x: 72 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

// ── Scale zoom in ──
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.82 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

// ── 3D flip card (rotateX) ──
export const flipUp = {
  hidden: { opacity: 0, rotateX: 30, y: 32, transformPerspective: 900 },
  show:   { opacity: 1, rotateX: 0,  y: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

// ── Pop (spring) ──
export const popIn = {
  hidden: { opacity: 0, scale: 0.72 },
  show:   { opacity: 1, scale: 1,    transition: { type: 'spring', stiffness: 260, damping: 20 } },
}

// ── Blur up ──
export const blurUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(10px)' },
  show:   { opacity: 1, y: 0,  filter: 'blur(0px)',  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

// ── Stagger container ──
export const stagger = (delayChildren = 0.1, staggerChildren = 0.1) => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
})

// ── Item with custom delay override ──
export const withDelay = (variant, delay) => ({
  hidden: variant.hidden,
  show:   { ...variant.show, transition: { ...variant.show.transition, delay } },
})
