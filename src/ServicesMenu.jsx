import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icons'
import './megamenu.css'

const items = [
  ['warehouse', 'Warehousing', 'Secure storage with live inventory.'],
  ['box', 'Order fulfilment', 'Pick, pack and ship from one place.'],
  ['truck', 'Transportation', 'Road, rail and air freight.'],
  ['pin', 'Last-mile delivery', 'Slots, proof of delivery and alerts.'],
  ['returns', 'Returns handling', 'Inspect and restock within 48 hours.'],
  ['chart', 'Inventory control', 'Cycle counts and stock reports.'],
]

export default function ServicesMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const out = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    const esc = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', out)
    document.addEventListener('keydown', esc)
    return () => { document.removeEventListener('mousedown', out); document.removeEventListener('keydown', esc) }
  }, [])

  return (
    <div className="mega" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={'mega-btn' + (open ? ' on' : '')} aria-expanded={open} onClick={() => setOpen(!open)}>
        Services <span className="chev">▾</span>
      </button>
      <div className={'mega-panel' + (open ? ' show' : '')}>
        <div className="mega-inner">
          <div className="mega-feature">
            <span className="ico"><Icon name="box" /></span>
            <b>All services</b>
            <p>Six services on one accountable chain, from dock to doorstep.</p>
            <Link to="/services" className="btn small sun">See all services →</Link>
          </div>
          <div className="mega-grid">
            {items.map(([i, t, d]) => (
              <Link to="/services" key={t}>
                <span className="ico"><Icon name={i} size={22} /></span>
                <span><b>{t}</b><span className="d">{d}</span></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
