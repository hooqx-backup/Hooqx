import { useRef, useEffect, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import {
  Globe, Smartphone, Layers, BarChart2, Cloud,
  Cpu, Search, Sparkles, FileText, Code2,
  Zap, ShieldCheck, Rocket, Activity, CheckCircle2,
} from 'lucide-react'
import './Technologies.css'

const row1 = [
  { name: 'Web Development',   icon: Globe,       color: '#a855f7', cat: 'Development' },
  { name: 'App Development',   icon: Smartphone,  color: '#00e5ff', cat: 'Mobile'      },
  { name: 'UI/UX Design',      icon: Layers,      color: '#e879f9', cat: 'Design'      },
  { name: 'Digital Marketing', icon: BarChart2,   color: '#7c3aed', cat: 'Growth'      },
  { name: 'Cloud Solutions',   icon: Cloud,       color: '#38bdf8', cat: 'Infrastructure' },
  { name: 'AI & Automation',   icon: Cpu,         color: '#a855f7', cat: 'Intelligence'  },
]

const row2 = [
  { name: 'SEO / SMO',         icon: Search,      color: '#00e5ff', cat: 'Visibility'  },
  { name: 'Branding',          icon: Sparkles,    color: '#e879f9', cat: 'Identity'    },
  { name: 'Content Creation',  icon: FileText,    color: '#a855f7', cat: 'Storytelling'},
  { name: 'Custom Software',   icon: Code2,       color: '#7c3aed', cat: 'Engineering' },
  { name: 'Performance Ads',   icon: Zap,         color: '#38bdf8', cat: 'Marketing'   },
  { name: 'Cybersecurity',     icon: ShieldCheck, color: '#e879f9', cat: 'Security'    },
]

function TechCard({ item }) {
  const Icon = item.icon
  return (
    <motion.div
      className="tech-card"
      style={{ '--tc-color': item.color }}
      whileHover={{ y: -6, scale: 1.04, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
    >
      <motion.div
        className="tech-card__icon"
        whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
      >
        <Icon size={22} strokeWidth={1.5} />
      </motion.div>
      <div className="tech-card__text">
        <span className="tech-card__name">{item.name}</span>
        <span className="tech-card__cat">{item.cat}</span>
      </div>
      <div className="tech-card__glow" />
    </motion.div>
  )
}

function Marquee({ items, reverse }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div className={`tech-marquee ${reverse ? 'tech-marquee--reverse' : ''}`}>
      <div className="tech-marquee__track">
        {doubled.map((item, i) => (
          <TechCard key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

const hudStats = [
  { icon: Globe,       label: 'Service Areas',    value: 9,   suffix: '+',  color: '#a855f7', bar: 72, status: 'ACTIVE'  },
  { icon: Code2,       label: 'Tech Stacks',       value: 50,  suffix: '+',  color: '#00e5ff', bar: 88, status: 'LIVE'    },
  { icon: CheckCircle2, label: 'Projects Shipped', value: 200, suffix: '+',  color: '#e879f9', bar: 95, status: 'SHIPPED' },
  { icon: Activity,    label: 'Client Focused',    value: 100, suffix: '%',  color: '#7c3aed', bar: 100, status: 'ALWAYS' },
]

function CountUp({ target, suffix, color, inView }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const ctrl = animate(0, target, {
      duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.4,
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => ctrl.stop()
  }, [inView, target])
  return <span style={{ color }}>{val}{suffix}</span>
}

function HudDashboard({ inView }) {
  return (
    <motion.div
      className="abt-tech__hud"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top scan line */}
      {inView && (
        <motion.div className="abt-tech__hud-scan"
          initial={{ scaleX: 0, opacity: 1 }} animate={{ scaleX: 1, opacity: [1, 1, 0] }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {/* Header row */}
      <div className="abt-tech__hud-header">
        <span className="abt-tech__hud-label">
          <motion.span className="abt-tech__hud-led"
            animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.2, repeat: Infinity }}
          />
          SYSTEM STATUS — OPERATIONAL
        </span>
        <span className="abt-tech__hud-label abt-tech__hud-label--right">REV 2024.12</span>
      </div>

      {/* Stat modules */}
      <div className="abt-tech__hud-grid">
        {hudStats.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.label}
              className="abt-tech__hud-module"
              style={{ '--mod-color': s.color }}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.65, delay: 0.55 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 240, damping: 18 } }}
            >
              {/* Module top bar */}
              <div className="abt-tech__hud-mod-top">
                <div className="abt-tech__hud-mod-icon">
                  <Icon size={16} strokeWidth={1.6} />
                </div>
                <span className="abt-tech__hud-mod-status" style={{ color: s.color }}>
                  <motion.span className="abt-tech__hud-mod-dot" style={{ background: s.color }}
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.3 }}
                  />
                  {s.status}
                </span>
              </div>

              {/* Big number */}
              <div className="abt-tech__hud-mod-num">
                <CountUp target={s.value} suffix={s.suffix} color={s.color} inView={inView} />
              </div>

              {/* Label */}
              <div className="abt-tech__hud-mod-label">{s.label}</div>

              {/* Activity bar */}
              <div className="abt-tech__hud-mod-bar-track">
                <motion.div
                  className="abt-tech__hud-mod-bar-fill"
                  style={{ background: `linear-gradient(90deg, ${s.color}88, ${s.color})` }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: s.bar / 100 } : {}}
                  transition={{ duration: 1.6, delay: 0.7 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="abt-tech__hud-mod-bar-pct" style={{ color: s.color }}>{s.bar}%</div>

              {/* Bottom glow */}
              <motion.div className="abt-tech__hud-mod-glow"
                animate={inView ? { opacity: [0.3, 0.7, 0.3] } : {}}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${s.color}30 0%, transparent 70%)` }}
              />
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default function Technologies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="expertise" className="abt-tech" ref={ref}>
      {/* Ambient */}
      <motion.div className="abt-tech__orb abt-tech__orb--l"
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="abt-tech__orb abt-tech__orb--r"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <div className="abt-tech__grid" />

      {/* Header */}
      <div className="abt-tech__container">
        <motion.div
          className="abt-tech__header"
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Orbital hub */}
          <div className="abt-tech__hub">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="abt-tech__hub-ring"
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 10 + i * 4, repeat: Infinity, ease: 'linear' }}
                style={{ '--ring-i': i }}
              >
                <span className="abt-tech__hub-dot" />
              </motion.div>
            ))}
            <motion.div
              className="abt-tech__hub-core"
              animate={{ boxShadow: ['0 0 20px rgba(168,85,247,0.4)', '0 0 50px rgba(168,85,247,0.8)', '0 0 20px rgba(168,85,247,0.4)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Rocket size={20} strokeWidth={1.5} color="#a855f7" />
            </motion.div>
          </div>

          <span className="abt-tech__eyebrow">
            <motion.span className="abt-tech__eyebrow-line"
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
            Our Capabilities
          </span>

          <h2 className="abt-tech__heading">
            Technologies <span className="abt-tech__heading-acc">We Deal</span>
          </h2>

          <p className="abt-tech__desc">
            From cutting-edge web technologies to mobile development, cloud solutions,
            and AI-powered systems — we leverage the latest tools to deliver exceptional results.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        className="abt-tech__marquees"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Edge fades */}
        <div className="abt-tech__fade abt-tech__fade--l" />
        <div className="abt-tech__fade abt-tech__fade--r" />

        <Marquee items={row1} reverse={false} />
        <Marquee items={row2} reverse={true} />
      </motion.div>

      {/* HUD Dashboard */}
      <HudDashboard inView={inView} />
    </section>
  )
}
