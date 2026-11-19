import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icons'
import { services } from './Home'

const Head = ({ title, text }) => (
  <section className="page-head"><h1>{title}</h1><p>{text}</p></section>
)

export function Services() {
  return (
    <>
      <Head title="Our services" text="Use one service or the whole chain. Each can be added later." />
      <section className="section">
        <div className="services">
          {services.map(([t, i, d]) => (
            <article key={t}><span className="ico"><Icon name={i} /></span><h3>{t}</h3><p>{d}</p></article>
          ))}
        </div>
      </section>
    </>
  )
}

export function About() {
  const values = [['scan', 'Accuracy', 'Every item is scanned in and out.'], ['truck', 'Speed', 'Same-day dispatch before cut-off.'], ['plug', 'Openness', 'You see your stock and orders live.']]
  return (
    <>
      <Head title="About Logicrew" text="A logistics team that treats your customers' orders like its own." />
      <section className="section about">
        <div>
          <h2>Our story</h2>
          <p>Logicrew Solutions Pvt Ltd was started to give growing brands the logistics of a large company without the cost. This is dummy text: replace it with the real company history, founders and mission.</p>
          <p>Today we run warehouses, fleets and delivery partners across the country from one simple platform.</p>
        </div>
        <div className="values">
          {values.map(([i, t, d]) => (
            <div key={t}><span className="ico"><Icon name={i} /></span><div><b>{t}</b><p>{d}</p></div></div>
          ))}
        </div>
      </section>
    </>
  )
}

const SHIPMENTS = {
  'LC-20481': { to: 'Mumbai', eta: 'Tomorrow, 11:00', stops: [['Warehouse, Solapur', 'Packed · 09:12', 'done'], ['Sorting hub, Pune', 'Dispatched · 14:40', 'done'], ['On the road', 'Arriving tomorrow by 11:00', 'now'], ['Doorstep, Mumbai', 'Pending', '']] },
  'LC-20390': { to: 'Hyderabad', eta: 'Delivered', stops: [['Warehouse, Solapur', 'Packed · 2 days ago', 'done'], ['Sorting hub, Hyderabad', 'Sorted · yesterday', 'done'], ['Doorstep, Hyderabad', 'Delivered · today 10:05', 'done']] },
  'LC-20502': { to: 'Bengaluru', eta: 'In 3 days', stops: [['Order received', 'Today · 08:30', 'now'], ['Warehouse, Solapur', 'Waiting to be packed', ''], ['Doorstep, Bengaluru', 'Pending', '']] },
}

export function Track() {
  const [q, setQ] = useState('')
  const [id, setId] = useState(null)
  const s = id && SHIPMENTS[id]
  return (
    <>
      <Head title="Track your shipment" text="Enter your shipment number to see where it is." />
      <section className="section trackpage">
        <form onSubmit={(e) => { e.preventDefault(); setId(q.trim().toUpperCase()) }} className="trackform">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. LC-20481" aria-label="Shipment number" required />
          <button className="btn">Track</button>
        </form>
        <p className="hint">Try: LC-20481, LC-20390 or LC-20502</p>
        {id && !s && <p className="notfound">We could not find shipment {id}. Check the number and try again.</p>}
        {s && (
          <div className="track result">
            <div className="track-head"><span>Shipment {id} to {s.to}</span><em>{s.eta}</em></div>
            <ol>{s.stops.map(([t, d, c]) => (<li key={t} className={c}><b>{t}</b><span>{d}</span></li>))}</ol>
          </div>
        )}
      </section>
    </>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <Head title="Get a quote" text="We reply within one working day with a plan and a price." />
      <section className="section contact">
        <div>
          <h2>Contact details</h2>
          <p>info@logicrew.example<br />+91 00000 00000<br />Solapur, Maharashtra</p>
          <p>Prefer to check a delivery? <Link to="/track"><u>Track a shipment</u></Link></p>
        </div>
        {sent ? (
          <p className="thanks">Thanks. We have your details and will reply within one working day.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <label>Name<input required /></label>
            <label>Work email<input type="email" required /></label>
            <label>Monthly order volume
              <select><option>Under 500</option><option>500 – 5,000</option><option>Over 5,000</option></select>
            </label>
            <label>What do you need?<textarea rows="3" /></label>
            <button className="btn">Send request</button>
          </form>
        )}
      </section>
    </>
  )
}
