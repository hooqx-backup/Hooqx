import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import HomePage from '../pages/Home/HomePage'
import DevelopmentPage from '../pages/Development/DevelopmentPage'
import AppDevelopmentPage from '../pages/AppDevelopment/AppDevelopmentPage'
import SoftwareDevelopmentPage from '../pages/SoftwareDevelopment/SoftwareDevelopmentPage'
import AboutPage from '../pages/About/AboutPage'
import DesignPage from '../pages/Design/DesignPage'
import GraphicsDesignPage from '../pages/Design/GraphicsDesignPage'
import UiUxPage from '../pages/Design/UiUxPage'
import MarketingPage from '../pages/Marketing/MarketingPage'
import SEOPage from '../pages/Marketing/SEOPage'
import SocialMediaPage from '../pages/Marketing/SocialMediaPage'
import PerformanceMarketingPage from '../pages/Marketing/PerformanceMarketingPage'
import ContactPage from '../pages/Contact/ContactPage'
import PrivacyPolicyPage from '../pages/Legal/PrivacyPolicyPage'
import TermsConditionsPage from '../pages/Legal/TermsConditionsPage'
import CookiePolicyPage from '../pages/Legal/CookiePolicyPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,                        element: <HomePage /> },
      { path: 'web-development',            element: <DevelopmentPage /> },
      { path: 'app-development',            element: <AppDevelopmentPage /> },
      { path: 'software-development',       element: <SoftwareDevelopmentPage /> },
      { path: 'about',                      element: <AboutPage /> },
      { path: 'design',                     element: <DesignPage /> },
      { path: 'graphics-design',            element: <GraphicsDesignPage /> },
      { path: 'ui-ux-design',               element: <UiUxPage /> },
      { path: 'marketing',                  element: <MarketingPage /> },
      { path: 'seo',                        element: <SEOPage /> },
      { path: 'social-media-marketing',     element: <SocialMediaPage /> },
      { path: 'performance-marketing',      element: <PerformanceMarketingPage /> },
      { path: 'contact',                    element: <ContactPage /> },
      { path: 'privacy-policy',             element: <PrivacyPolicyPage /> },
      { path: 'terms-and-conditions',       element: <TermsConditionsPage /> },
      { path: 'cookie-policy',              element: <CookiePolicyPage /> },
      { path: '*',                          element: <NotFoundPage /> },
    ],
  },
])

export default router
