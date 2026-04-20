import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function RootLayout() {
  const { pathname } = useLocation()

  /* scroll to top on every route change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
