import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icons'
import { Avatar, Faq, Hubs } from './Blocks'
import { contact, industries, leaders, milestones, perks, plans, roles, serviceFaqs, services } from './content'
import aboutTeam600 from './assets/about-team-600.webp'
import aboutTeam1100 from './assets/about-team-1100.webp'
import trackDoorstep600 from './assets/track-doorstep-600.webp'
import trackDoorstep1100 from './assets/track-doorstep-1100.webp'
import contactSupport600 from './assets/contact-support-600.webp'
import contactSupport1100 from './assets/contact-support-1100.webp'

const Illustration = ({ small, large, width, height, alt }) => (
  <img className="illus" src={large} srcSet={`${small} 600w, ${large} 1100w`}
    sizes="(max-width: 800px) 90vw, 40vw" width={width} height={height} alt={alt} />
)

const Head = ({ title, text }) => (
  <section className="page-head"><h1>{title}</h1><p>{text}</p></section>
)

export function Services() {
  return (
    <>
      <Head title="Our services" text="Use one service or the whole chain. Each can be added later." />
      <nav className="jump" aria-label="Services on this page">
        {services.map((x) => <a key={x.id} href={`#${x.id}`}>{x.title}</a>)}
        <a href="#pricing">Pricing</a>
      </nav>
      <section className="section service-list">
        {services.map((x) => (
          <article key={x.id} id={x.id} className="service-row">
            <span className="ico"><Icon name={x.icon} /></span>
            <div>
              <h2>{x.title}</h2>
              <p>{x.detail}</p>
            </div>
            <ul className="ticks">
              {x.includes.map((item) => <li key={item}><Icon name="check" size={20} />{item}</li>)}
            </ul>
          </article>
        ))}
      </section>

      <section id="pricing" className="section pricing-section">
        <h2>Simple per-order pricing</h2>
        <p className="lead">Pay for what you ship. Move between plans any month as your volume changes.</p>
        <div className="plans">
          {plans.map((p) => (
            <article key={p.name} className={p.featured ? 'featured' : undefined}>
              {p.featured && <span className="plan-tag">Most chosen</span>}
              <h3>{p.name}</h3>
              <p className="plan-fit">{p.fit}</p>
              <p className="plan-price"><strong>{p.price}</strong> {p.unit}</p>
              <ul className="ticks">
                {p.features.map((f) => <li key={f}><Icon name="check" size={20} />{f}</li>)}
              </ul>
              <Link to="/contact" className={`btn${p.featured ? ' sun' : ' ghost'}`}>{p.custom ? 'Talk to us' : 'Get started'}</Link>
            </article>
          ))}
        </div>
        <p className="fineprint">Storage is billed separately at ₹450 per pallet per month. All prices exclude GST.</p>
      </section>

      <section className="section faq-section">
        <div><h2>Questions about our services</h2></div>
        <Faq items={serviceFaqs} />
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
          <p>Logicrew started in 2019 in a single Solapur warehouse, packing orders for six local brands. The idea was simple: give growing brands the kind of logistics big companies get, without big-company prices or slow, error-prone service.</p>
          <p>Today we run four warehouses, a fleet of 60 vehicles and delivery partners that reach every state, all from one dashboard our clients log into.</p>
          <div className="values">
            {values.map(([i, t, d]) => (
              <div key={t}><span className="ico"><Icon name={i} /></span><div><b>{t}</b><p>{d}</p></div></div>
            ))}
          </div>
        </div>
        <Illustration small={aboutTeam600} large={aboutTeam1100} width={1100} height={1375}
          alt="The Logicrew team standing in front of a warehouse with a delivery truck" />
      </section>

      <section className="section dark">
        <h2>How we got here</h2>
        <ol className="timeline">
          {milestones.map(([year, title, text]) => (
            <li key={year}><span className="year">{year}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2>Our founders</h2>
        <p className="lead">More than 50 years of experience between them, across business, technology and sales.</p>
        <div className="people">
          {leaders.map((l) => (
            <article key={l.name}>
              <Avatar name={l.name} large />
              <h3>{l.name}</h3>
              <p className="role">{l.role}</p>
              <p>{l.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tinted">
        <h2>Our warehouses</h2>
        <p className="lead">Four sites, 3,10,000 sq ft of racked storage between them.</p>
        <Hubs />
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
        <div>
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
        </div>
        <Illustration small={trackDoorstep600} large={trackDoorstep1100} width={1100} height={1100}
          alt="A Logicrew delivery partner handing a parcel to a customer at their door" />
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
          <ul className="contact-lines">
            <li><Icon name="mail" size={20} /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><Icon name="phone" size={20} /><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></li>
            {contact.hours.map(([k, v]) => <li key={k}><Icon name="clock" size={20} /><span><b>{k}</b>{v}</span></li>)}
          </ul>
          <p>Prefer to check a delivery? <Link to="/track"><u>Track a shipment</u></Link></p>
          <Illustration small={contactSupport600} large={contactSupport1100} width={1100} height={1100}
            alt="A Logicrew support agent with a headset answering a customer query" />
        </div>
        {sent ? (
          <p className="thanks">Thanks. We have your details and will reply within one working day.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <label>Name<input required /></label>
            <label>Work email<input type="email" required /></label>
            <label>Monthly order volume
              <select>{plans.map((p) => <option key={p.name}>{p.fit}</option>)}</select>
            </label>
            <label>What do you need?<textarea rows="3" /></label>
            <button className="btn">Send request</button>
          </form>
        )}
      </section>

      <section className="section tinted">
        <h2>Visit a warehouse</h2>
        <p className="lead">Want to see where your stock will live? Book a walkthrough at any of our sites.</p>
        <Hubs />
      </section>
    </>
  )
}

export function Industries() {
  return (
    <>
      <Head title="Industries we serve" text="Different products need different handling. Here is how we set up for each." />
      <section className="section">
        <div className="industry-grid">
          {industries.map((i) => (
            <article key={i.name}>
              <span className="ico"><Icon name={i.icon} /></span>
              <h2>{i.name}</h2>
              <p>{i.text}</p>
              <span className="metric">{i.metric}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="cta">
        <h2>Not on the list?</h2>
        <p>We also handle books, home decor, sports goods and more. Tell us what you sell.</p>
        <Link to="/contact" className="btn sun">Get a quote</Link>
      </section>
    </>
  )
}

export function Careers() {
  return (
    <>
      <Head title="Careers at Logicrew" text="We are a team of 340 people across four cities. Come and help us move things." />
      <section className="section">
        <h2>Why people stay</h2>
        <div className="values perks">
          {perks.map(([i, t, d]) => (
            <div key={t}><span className="ico"><Icon name={i} /></span><div><b>{t}</b><p>{d}</p></div></div>
          ))}
        </div>
      </section>
      <section className="section tinted">
        <h2>Open roles</h2>
        <ul className="roles">
          {roles.map((r) => (
            <li key={r.title}>
              <div><h3>{r.title}</h3><p>{r.team} · {r.city} · {r.type}</p></div>
              <a className="btn small ghost" href={`mailto:${contact.careersEmail}?subject=${encodeURIComponent(`Application: ${r.title}, ${r.city}`)}`}>Apply</a>
            </li>
          ))}
        </ul>
        <p className="fineprint">No role that fits? Send your CV to <a href={`mailto:${contact.careersEmail}`}><u>{contact.careersEmail}</u></a>.</p>
      </section>
    </>
  )
}
