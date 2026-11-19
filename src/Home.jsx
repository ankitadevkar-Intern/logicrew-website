import { Link } from 'react-router-dom'
import Icon from './Icons'
import HeroArt from './HeroArt'

export const services = [
  ['Warehousing', 'warehouse', 'Secure, climate-aware storage with real-time inventory visibility across all racks.'],
  ['Order fulfilment', 'box', 'Pick, pack and ship from one place, with same-day dispatch on orders before cut-off.'],
  ['Transportation', 'truck', 'Road, rail and air freight booked and tracked through a single partner.'],
  ['Last-mile delivery', 'pin', 'Delivery slots, proof of delivery and customer notifications included.'],
  ['Returns handling', 'returns', 'Inspect, restock or refurbish returned goods within 48 hours.'],
  ['Inventory control', 'chart', 'Cycle counts, batch and expiry tracking, and weekly stock reports.'],
]
const steps = [
  ['Send us your stock', 'warehouse', 'We receive, inspect and shelve your goods.'],
  ['Orders sync in', 'plug', 'Connect your store or ERP. Orders reach the warehouse floor instantly.'],
  ['We pick and pack', 'scan', 'Items are scanned at every step to avoid errors.'],
  ['Delivered and tracked', 'pin', 'You and your customer follow the shipment until it arrives.'],
]
const stats = [['120+', 'Active clients'], ['4', 'Warehouses'], ['99.2%', 'On-time delivery'], ['18', 'States covered']]
const industries = [['E-commerce','cart'],['Pharma','pill'],['Automotive','car'],['FMCG','bag'],['Electronics','chip'],['Apparel','shirt']]

export default function Home() {
  return (
    <>
        <section className="hero">
          <div className="hero-copy">
            <h1>Goods in. Orders out. Nothing lost in between.</h1>
            <p>Logicrew is a third-party logistics partner for growing brands. We store, pack and deliver your products so you can focus on selling them.</p>
            <div className="row">
              <Link to="/contact" className="btn">Get a quote</Link>
              <Link to="/services" className="btn ghost">See our services</Link>
            </div>
          </div>

          <div className="hero-visual">
            <HeroArt />
            <div className="track" aria-label="Sample shipment tracker">
            <div className="track-head"><span>Shipment LC-20481</span><em>In transit</em></div>
            <ol>
              <li className="done"><b>Warehouse, Solapur</b><span>Packed · 09:12</span></li>
              <li className="done"><b>Sorting hub, Pune</b><span>Dispatched · 14:40</span></li>
              <li className="now"><b>On the road</b><span>Arriving tomorrow by 11:00</span></li>
              <li><b>Doorstep, Mumbai</b><span>Pending</span></li>
            </ol>
          </div>
          </div>
        </section>

        <section className="stats">
          {stats.map(([n, l]) => (<div key={l}><strong>{n}</strong><span>{l}</span></div>))}
        </section>

        <section id="services" className="section">
          <h2>Everything between your supplier and your customer</h2>
          <p className="lead">Use one service or the whole chain. Each can be added later.</p>
          <div className="services">
            {services.map(([t, i, d]) => (<article key={t}><span className="ico"><Icon name={i} /></span><h3>{t}</h3><p>{d}</p></article>))}
          </div>
        </section>

        <section id="process" className="section dark">
          <h2>How it works</h2>
          <ol className="steps">
            {steps.map(([t, i, d]) => (<li key={t}><span className="ico"><Icon name={i} /></span><h3>{t}</h3><p>{d}</p></li>))}
          </ol>
        </section>

        <section className="banner">
          <div>
            <h2>Why brands choose Logicrew</h2>
            <ul>
              <li><span className="ico"><Icon name="scan" /></span><div><b>Scanned at every step</b>Fewer errors and a full audit trail.</div></li>
              <li><span className="ico"><Icon name="plug" /></span><div><b>Connects to your store</b>Shopify, WooCommerce or your own ERP.</div></li>
              <li><span className="ico"><Icon name="truck" /></span><div><b>Same-day dispatch</b>Orders placed before cut-off leave today.</div></li>
            </ul>
          </div>
          <div className="grid-art"><HeroArt /></div>
        </section>

        <section id="industries" className="section">
          <h2>Built for the way you ship</h2>
          <div className="chips">{industries.map(([n, i]) => <span key={n}><Icon name={i} size={20} />{n}</span>)}</div>
          <blockquote>
            “Our returns dropped and deliveries got faster within the first month.”
            <cite>Client name, Company (dummy testimonial)</cite>
          </blockquote>
        </section>

        <section className="cta">
          <h2>Ready to move your stock?</h2>
          <p>Tell us what you ship and we will send a plan and a price within one working day.</p>
          <Link to="/contact" className="btn sun">Get a quote</Link>
        </section>
      </>
  )
}
