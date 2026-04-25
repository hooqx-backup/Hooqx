import { Link } from 'react-router-dom'
import bannerImage from '../../assets/images/uiux1.jpg'
import './DesignPage.css'

export default function DesignPage() {
  return (
    <main className="design-page">
      <section className="design-page__hero" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="design-page__overlay" />
        <div className="design-page__content">
          <p className="design-page__eyebrow">Design Services</p>
          <h1 className="design-page__title">Creative Solutions That Build Memorable Brands</h1>
          <p className="design-page__subtitle">
            From user-centric UI/UX systems to striking visual identities, we craft experiences
            that look exceptional and perform better.
          </p>
          <div className="design-page__actions">
            <Link to="/ui-ux-design" className="design-page__btn design-page__btn--primary">Explore UI/UX Design</Link>
            <Link to="/graphics-design" className="design-page__btn design-page__btn--outline">Explore Graphic Design</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
