import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Home from './Home'
import { Services, About, Track, Contact } from './Pages'
import './App.css'
import './visuals.css'
import './pages.css'

export default function App() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0); setOpen(false) }, [pathname])

  return (
    <>
      <header className="nav">
        <Link to="/"><Logo /></Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">☰</button>
        <nav className={open ? 'open' : ''}>
  <NavLink to="/" end>Home</NavLink>
  <NavLink to="/services">Services</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/track">Track shipment</NavLink>
  <NavLink to="/contact" className="btn small">Get a quote</NavLink>
</nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/track" element={<Track />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<section className="section"><h2>Page not found</h2><p className="lead"><Link to="/">Go back home</Link></p></section>} />
      </Routes>

      <footer>
        <Logo light />
        <p>© 2026 Logicrew Solutions Pvt Ltd. Dummy content for internship project.</p>
      </footer>
    </>
  )
}
