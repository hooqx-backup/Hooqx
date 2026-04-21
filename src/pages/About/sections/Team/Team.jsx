import { motion } from 'framer-motion'
import { Users, ArrowUpRight, ExternalLink } from 'lucide-react'
import { fadeUp, slideLeft, stagger, vp } from '../../../../lib/motion'
import teamImg from '../../../../assets/images/4-2-scaled-1.jpg'
import './Team.css'

const members = [
  { name: 'Fatimah Ahmed', role: 'Co-Founder', img: teamImg },
]

export default function Team() {
  return (
    <section className="abt-team">
      <div className="abt-team__container">
        <motion.div
          className="abt-team__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.span className="abt-team__eyebrow" variants={fadeUp}>
            <span className="abt-team__eyebrow-line" />
            The People
          </motion.span>

          <motion.h2 className="abt-team__heading" variants={slideLeft}>
            Meet Our Team
          </motion.h2>

          <motion.p className="abt-team__desc" variants={fadeUp}>
            Passionate professionals dedicated to crafting digital excellence for every client.
          </motion.p>
        </motion.div>

        <motion.div
          className="abt-team__grid"
          variants={stagger(0.08, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              className="abt-team__card"
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="abt-team__img-wrap">
                <img src={member.img} alt={member.name} />
                <div className="abt-team__img-overlay" />
              </div>
              <div className="abt-team__info">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <div className="abt-team__socials">
                  <a href="#" aria-label="LinkedIn" className="abt-team__social">
                    <ExternalLink size={16} />
                  </a>
                  <a href="#" aria-label="Twitter" className="abt-team__social">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Join card */}
          <motion.div
            className="abt-team__card abt-team__card--join"
            variants={fadeUp}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="abt-team__join-inner">
              <div className="abt-team__join-icon">
                <Users size={40} />
              </div>
              <h3>Join Our Team</h3>
              <p>We're always looking for talented people to help us build the future of digital.</p>
              <a href="/contact" className="abt-team__join-btn">
                Get in Touch <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
