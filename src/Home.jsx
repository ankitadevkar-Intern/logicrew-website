import { Link } from 'react-router-dom'
import Icon from './Icons'
import HeroArt from './HeroArt'
import heroDock800 from './assets/hero-dock-800.webp'
import heroDock1400 from './assets/hero-dock-1400.webp'
import DeliveryMap from './DeliveryMap'
import Reveal from './Reveal'
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
          {stats.map(([n, l], i) => (<Reveal key={l} delay={i * 100}><strong>{n}</strong><span>{l}</span></Reveal>))}
        </section>

        <section id="coverage" className="section reach">
  <DeliveryMap />
</section>

        <section id="services" className="section">
          <Reveal>
            <h2>Everything between your supplier and your customer</h2>
            <p className="lead">Use one service or the whole chain. Each can be added later.</p>
          </Reveal>
          <div className="services">
            {services.map((s, i) => (
              <Reveal as="article" key={s.id} delay={(i % 3) * 120}>
                <span className="ico"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <Link to={`/services#${s.id}`} className="more">Learn more<Icon name="arrow" size={18} /></Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="process" className="section dark">
          <Reveal><h2>How it works</h2></Reveal>
          <ol className="steps">
            {steps.map(([t, i, d], n) => (
              <Reveal as="li" key={t} delay={n * 130}><span className="ico"><Icon name={i} /></span><h3>{t}</h3><p>{d}</p></Reveal>
            ))}
          </ol>
        </section>

        <section className="section integrations">
          <Reveal>
            <h2>Works with the tools you already use</h2>
            <p className="lead">Orders flow in from your store and stock levels flow back. No spreadsheets in between.</p>
          </Reveal>
          <Reveal delay={150}><ul className="logos">{integrations.map((n) => <li key={n}>{n}</li>)}</ul></Reveal>
        </section>

        <section className="banner">
          <Reveal>
            <h2>Why brands choose Logicrew</h2>
            <ul>
              <li><span className="ico"><Icon name="scan" /></span><div><b>Scanned at every step</b>Fewer errors and a full audit trail.</div></li>
              <li><span className="ico"><Icon name="plug" /></span><div><b>Connects to your store</b>Shopify, WooCommerce or your own ERP.</div></li>
              <li><span className="ico"><Icon name="truck" /></span><div><b>Same-day dispatch</b>Orders placed before cut-off leave today.</div></li>
            </ul>
          </Reveal>
          <Reveal className="grid-art" delay={150}><HeroArt /></Reveal>
        </section>

        <section id="industries" className="section">
          <Reveal>
            <h2>Built for the way you ship</h2>
            <p className="lead">Each industry ships differently. We set up storage, picking and delivery around yours.</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="chips">{industries.map((i) => <span key={i.name}><Icon name={i.icon} size={20} />{i.name}</span>)}</div>
            <Link to="/industries" className="more">See how we work with each industry<Icon name="arrow" size={18} /></Link>
          </Reveal>
        </section>

        <section className="section quotes-section">
          <Reveal><h2>What our clients say</h2></Reveal>
          <Reveal delay={150}><Testimonials /></Reveal>
        </section>

        <section id="faq" className="section faq-section">
          <Reveal>
            <h2>Common questions</h2>
            <p className="lead">Still unsure? <Link to="/contact"><u>Ask us directly</u></Link> and we'll reply within a working day.</p>
          </Reveal>
          <Reveal delay={150}><Faq /></Reveal>
        </section>

        <section className="cta">
          <Reveal>
            <h2>Ready to move your stock?</h2>
            <p>Tell us what you ship and we will send a plan and a price within one working day.</p>
            <Link to="/contact" className="btn sun">Get a quote</Link>
          </Reveal>
        </section>
      </>
  )
}
