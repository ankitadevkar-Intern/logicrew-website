import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icons'
import Home from './Home'
import { Services, About, Track, Contact, Industries, Careers } from './Pages'
import { contact, hubs, services } from './content'
import './App.css'
import './visuals.css'
import './pages.css'

export default function App() {
  const [open, setOpen] = useState(false)
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    setOpen(false)
    let id = hash.slice(1)
    try { id = decodeURIComponent(id) } catch { /* keep the raw hash */ }
    const target = id && document.getElementById(id)
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return (
    <>
      <header className="nav">
        <Link to="/"><Logo /></Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu"><Icon name="menu" size={26} /></button>
        <nav className={open ? 'open' : ''}>
  <NavLink to="/" end>Home</NavLink>
  <NavLink to="/services">Services</NavLink>
  <NavLink to="/industries">Industries</NavLink>
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
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<section className="section"><h2>Page not found</h2><p className="lead"><Link to="/">Go back home</Link></p></section>} />
      </Routes>

      <footer>
        <div className="foot-cols">
          <div className="foot-brand">
            <Logo light />
            <p>Warehousing, fulfilment and delivery for growing brands across India.</p>
            <address>{hubs[0].address}</address>
          </div>
          <div>
            <h2>Services</h2>
            <ul>{services.map((x) => <li key={x.id}><Link to={`/services#${x.id}`}>{x.title}</Link></li>)}</ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/services#pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h2>Support</h2>
            <ul>
              <li><Link to="/track">Track a shipment</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
              <li><Link to="/contact">Get a quote</Link></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            </ul>
          </div>
        </div>
        <p className="foot-note">© 2026 Logicrew Solutions Pvt Ltd. Dummy content for internship project.</p>
      </footer>
    </>
  )
}
