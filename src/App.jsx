import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import LandingPage from './pages/LandingPage/LandingPage'
import AboutPage from './pages/AboutPage/AboutPage'
import PortfolioPage from './pages/PortfolioPage/PortfolioPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ProjectDetailPage from './pages/ProjectDetailPage/ProjectDetailPage'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;