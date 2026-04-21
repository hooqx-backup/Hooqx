import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import DevelopmentPage from "./pages/Development/DevelopmentPage";
import MarketingPage from "./pages/Marketing/MarketingPage";
import DesignPage from "./pages/Design/DesignPage";
import ContactPage from "./pages/Contact/ContactPage";
import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}
// Router is handled via src/router/index.jsx + RootLayout
// main.jsx uses RouterProvider directly — this file is kept for reference only
