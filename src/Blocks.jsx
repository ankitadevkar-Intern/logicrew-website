import Icon from './Icons'
import { faqs, hubs, testimonials } from './content'

export function Faq({ items = faqs }) {
  return (
    <div className="faq">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}<span className="faq-icon"><Icon name="plus" size={20} /></span></summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <div className="quotes">
      {testimonials.map((t) => (
        <figure key={t.name}>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <Avatar name={t.name} />
            <span><b>{t.name}</b>{t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

export function Hubs() {
  return (
    <div className="hubs">
      {hubs.map((h) => (
        <article key={h.city}>
          <span className="ico"><Icon name="warehouse" /></span>
          <h3>{h.city}</h3>
          <p className="hub-type">{h.type} · {h.area}</p>
          <address>{h.address}</address>
        </article>
      ))}
    </div>
  )
}

export function Avatar({ name, large = false }) {
  const letters = name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return <span className={`avatar${large ? ' large' : ''}`} aria-hidden="true">{letters}</span>
}
