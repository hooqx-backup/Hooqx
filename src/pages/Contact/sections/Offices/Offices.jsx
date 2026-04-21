import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Globe, Smartphone } from 'lucide-react'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import './Offices.css'

const offices = [
  {
    flag: '🇺🇸',
    country: 'USA — Headquarters',
    address: '1111B S Governors Ave STE 20297, Dover, DE 19904, USA',
  },
  {
    flag: '🇮🇳',
    country: 'India — Register Office',
    address: '3rd Floor, G-18/2, Bangla Bustee Garden Reach, Kolkata, West Bengal, India 700024',
  },
  {
    flag: '🇮🇳',
    country: 'India — Corporate Office',
    address: 'Swapna Neer Apartment, Borobazar Chandannagar Near Swagatam Lodge Kutir Math, Chandannagar, Hooghly 712136',
  },
]

const phones = [
  { flag: '🇺🇸', label: 'USA', numbers: ['+1 646 693 2337', '+1-470-380-9098'] },
  { flag: '🇦🇪', label: 'UAE', numbers: ['+971 4 509 5919'] },
  { flag: '🇮🇳', label: 'India', numbers: ['+91 70036 34890'] },
  { flag: '🇩🇪', label: 'Germany', numbers: ['+49 69 941 89 171'] },
]

export default function Offices() {
  return (
    <section className="cnt-offices">
      <div className="cnt-offices__blob cnt-offices__blob--left" />
      <div className="cnt-offices__blob cnt-offices__blob--right" />
      <div className="cnt-offices__grid-bg" />

      <div className="cnt-offices__container">
        <motion.div
          className="cnt-offices__header"
          variants={stagger(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="cnt-offices__eyebrow" variants={fadeUp}>
            <span className="cnt-offices__eyebrow-line" />
            Our Offices
          </motion.span>
          <motion.h2 className="cnt-offices__heading" variants={slideLeft}>
            Find Us Around the Globe
          </motion.h2>
        </motion.div>

        {/* Office address cards */}
        <motion.div
          className="cnt-offices__cards"
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {offices.map((office) => (
            <motion.div
              key={office.country}
              className="cnt-offices__card"
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="cnt-offices__card-icon">
                <MapPin size={22} />
              </div>
              <div className="cnt-offices__card-body">
                <span className="cnt-offices__flag">{office.flag}</span>
                <h3>{office.country}</h3>
                <p>{office.address}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Phone / Email / CTA row */}
        <motion.div
          className="cnt-offices__reach"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {/* Phones */}
          <motion.div className="cnt-offices__reach-card" variants={fadeUp}>
            <div className="cnt-offices__reach-icon"><Phone size={22} /></div>
            <div className="cnt-offices__reach-body">
              <h3>Phone Numbers</h3>
              <div className="cnt-offices__phones">
                {phones.map((p) => (
                  <div key={p.label} className="cnt-offices__phone-row">
                    <span className="cnt-offices__phone-label">{p.flag} {p.label}</span>
                    <div className="cnt-offices__phone-nums">
                      {p.numbers.map((n) => (
                        <a key={n} href={`tel:${n.replace(/[\s-]/g, '')}`}>{n}</a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div className="cnt-offices__reach-card" variants={fadeUp}>
            <div className="cnt-offices__reach-icon"><Mail size={22} /></div>
            <div className="cnt-offices__reach-body">
              <h3>Email Addresses</h3>
              <div className="cnt-offices__emails">
                <a href="mailto:info@hooqx.com">info@hooqx.com</a>
                <a href="mailto:support@hooqx.com">support@hooqx.com</a>
              </div>
              <div className="cnt-offices__website">
                <Globe size={16} />
                <a href="https://www.hooqx.com" target="_blank" rel="noreferrer">www.hooqx.com</a>
              </div>
            </div>
          </motion.div>

          {/* Free consultation CTA */}
          <motion.div className="cnt-offices__reach-card cnt-offices__reach-card--cta" variants={fadeUp}>
            <div className="cnt-offices__reach-icon"><Smartphone size={22} /></div>
            <div className="cnt-offices__reach-body">
              <h3>Free Consultation</h3>
              <p>Call us now for a free consultation with our experts.</p>
              <a href="tel:+16466932337" className="cnt-offices__call-btn">
                <Phone size={16} />
                +1 646 693 2337
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
