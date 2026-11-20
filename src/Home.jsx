import { Link } from 'react-router-dom'
import Icon from './Icons'
import HeroArt from './HeroArt'
import heroDock800 from './assets/hero-dock-800.webp'
import heroDock1400 from './assets/hero-dock-1400.webp'
import DeliveryMap from './DeliveryMap'
import { Faq, Testimonials } from './Blocks'
import { industries, integrations, services, stats, steps } from './content'

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
            <img
              className="hero-illus"
              src={heroDock1400}
              srcSet={`${heroDock800} 800w, ${heroDock1400} 1400w`}
              sizes="(max-width: 800px) 90vw, 45vw"
              width="1400"
              height="876"
              alt="Warehouse team loading parcels into a delivery truck at the dock while a colleague scans a box"
              fetchPriority="high"
            />
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

        <section id="coverage" className="section reach">
          <DeliveryMap />
        </section>

        <section id="services" className="section">
          <h2>Everything between your supplier and your customer</h2>
          <p className="lead">Use one service or the whole chain. Each can be added later.</p>
          <div className="services">
            {services.map((s) => (
              <article key={s.id}>
                <span className="ico"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link to={`/services#${s.id}`} className="more">Learn more<Icon name="arrow" size={18} /></Link>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="section dark">
          <h2>How it works</h2>
          <ol className="steps">
            {steps.map(([t, i, d]) => (<li key={t}><span className="ico"><Icon name={i} /></span><h3>{t}</h3><p>{d}</p></li>))}
          </ol>
        </section>

        <section className="section integrations">
          <h2>Works with the tools you already use</h2>
          <p className="lead">Orders flow in from your store and stock levels flow back. No spreadsheets in between.</p>
          <ul className="logos">{integrations.map((n) => <li key={n}>{n}</li>)}</ul>
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
          <p className="lead">Each industry ships differently. We set up storage, picking and delivery around yours.</p>
          <div className="chips">{industries.map((i) => <span key={i.name}><Icon name={i.icon} size={20} />{i.name}</span>)}</div>
          <Link to="/industries" className="more">See how we work with each industry<Icon name="arrow" size={18} /></Link>
        </section>

        <section className="section quotes-section">
          <h2>What our clients say</h2>
          <Testimonials />
        </section>

        <section id="faq" className="section faq-section">
          <div>
            <h2>Common questions</h2>
            <p className="lead">Still unsure? <Link to="/contact"><u>Ask us directly</u></Link> and we'll reply within a working day.</p>
          </div>
          <Faq />
        </section>

        <section className="cta">
          <h2>Ready to move your stock?</h2>
          <p>Tell us what you ship and we will send a plan and a price within one working day.</p>
          <Link to="/contact" className="btn sun">Get a quote</Link>
        </section>
      </>
  )
}
