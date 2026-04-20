import { motion } from 'framer-motion'
import { fadeUp, stagger, vp } from '../../../../lib/motion'
import './Blog.css'

const posts = [
  { title: '10 Web Design Trends Dominating 2024', date: 'Apr 10, 2024', tag: 'Design' },
  { title: 'How SEO Can Triple Your Organic Traffic', date: 'Mar 28, 2024', tag: 'Marketing' },
  { title: 'React vs Next.js: Which Should You Choose?', date: 'Mar 15, 2024', tag: 'Development' },
  { title: 'The ROI of Investing in UI/UX Design', date: 'Feb 22, 2024', tag: 'Design' },
]

// Cards slide up from bottom with increasing blur — newspaper-style reveal
const cardVariant = (i) => ({
  hidden: { opacity: 0, y: 60, filter: 'blur(6px)', rotateZ: i % 2 === 0 ? -1.5 : 1.5 },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)', rotateZ: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 },
  },
})

export default function Blog() {
  return (
    <section className="blog">
      <div className="blog__container">

        <motion.div
          className="blog__header"
          variants={stagger(0.06, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          <motion.h2 className="blog__title" variants={fadeUp}>Latest Insights</motion.h2>
          <motion.p className="blog__subtitle" variants={fadeUp}>
            Tips, trends, and ideas from our team.
          </motion.p>
        </motion.div>

        <motion.div
          className="blog__grid"
          initial="hidden"
          whileInView="show"
          viewport={vp}
        >
          {posts.map((post, i) => (
            <motion.div key={post.title} className="blog__card" variants={cardVariant(i)}>
              <div className="blog__thumb" />
              <div className="blog__body">
                <span className="blog__tag">{post.tag}</span>
                <h3 className="blog__card-title">{post.title}</h3>
                <span className="blog__date">{post.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
