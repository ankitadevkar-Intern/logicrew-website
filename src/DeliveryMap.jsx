import { useEffect, useRef, useState } from 'react'
import { INDIA } from './indiaMap'

const HUBS = {
  Solapur: [75.91, 17.66],
  Pune: [73.86, 18.52],
  Hyderabad: [78.49, 17.39],
  Bengaluru: [77.59, 12.97],
}

const ROUTES = [
  ['Pune', 'Delhi', [77.21, 28.61]],
  ['Solapur', 'Kolkata', [88.36, 22.57]],
  ['Bengaluru', 'Kochi', [76.27, 9.93]],
  ['Hyderabad', 'Lucknow', [80.95, 26.85]],
  ['Pune', 'Ahmedabad', [72.57, 23.02]],
  ['Hyderabad', 'Guwahati', [91.74, 26.14]],
  ['Bengaluru', 'Chennai', [80.27, 13.08]],
  ['Solapur', 'Bhopal', [77.41, 23.26]],
  ['Pune', 'Chandigarh', [76.78, 30.73]],
  ['Hyderabad', 'Bhubaneswar', [85.82, 20.3]],
  ['Solapur', 'Jaipur', [75.79, 26.91]],
  ['Bengaluru', 'Patna', [85.14, 25.59]],
]

const SHORT = {
  'Andaman and Nicobar Islands': 'Andaman & Nicobar',
  'Dadra and Nagar Haveli and Daman and Diu': 'Dadra & Nagar Haveli and Daman & Diu',
  'Jammu and Kashmir': 'Jammu & Kashmir',
}

const RAD = Math.PI / 180
const DOTS = INDIA.rows.flatMap(([row, ...runs]) => {
  const out = []
  for (let i = 0; i < runs.length; i += 2) {
    for (let c = runs[i]; c <= runs[i + 1]; c++) out.push([(c + 0.5) * INDIA.step, (row + 0.5) * INDIA.step])
  }
  return out
})
const DOT_PATH = DOTS.map(([x, y]) => `M${x} ${y}h0`).join('')

// Snap to the nearest land dot so coastal cities never sit in the sea.
function project([lon, lat]) {
  const x = INDIA.tx + INDIA.k * lon * RAD
  const y = INDIA.ty - INDIA.k * Math.log(Math.tan(Math.PI / 4 + (lat * RAD) / 2))
  let best = DOTS[0]
  let bestD = Infinity
  for (const d of DOTS) {
    const dist = (d[0] - x) ** 2 + (d[1] - y) ** 2
    if (dist < bestD) { bestD = dist; best = d }
  }
  return best
}

function arc([x1, y1], [x2, y2]) {
  // Bend perpendicular to the route, always towards the top of the map.
  let nx = -(y2 - y1) * 0.25
  let ny = (x2 - x1) * 0.25
  if (ny > 0) { nx = -nx; ny = -ny }
  return `M${x1},${y1} Q${(x1 + x2) / 2 + nx},${(y1 + y2) / 2 + ny} ${x2},${y2}`
}

const LINES = ROUTES.map(([from, to, at], i) => {
  const end = project(at)
  return { key: `${from}-${to}`, d: arc(project(HUBS[from]), end), end, delay: `${(i * 0.55).toFixed(2)}s` }
})

const HUB_POINTS = Object.entries(HUBS).map(([name, at]) => [name, project(at)])
const HUB_LIST = new Intl.ListFormat('en-IN', { type: 'conjunction' }).format(Object.keys(HUBS))

const GROUPS = [
  ['States', INDIA.states.filter((s) => !s.ut)],
  ['Union territories', INDIA.states.filter((s) => s.ut)],
]

export default function DeliveryMap() {
  const ref = useRef(null)
  const [live, setLive] = useState(false)
  const [active, setActive] = useState(null)

  // Mouse only: touch has no matching leave event, so a tap would leave the highlight stuck.
  const hover = (name) => (e) => { if (e.pointerType === 'mouse') setActive(name) }

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setLive(true); return }
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="reach-copy">
        <h2>We deliver all over India</h2>
        <p className="lead">Orders leave our hubs in {HUB_LIST} every day and reach every state and union territory.</p>
        <ul className="reach-key">
          <li><i className="key-hub" />Logicrew hub</li>
          <li><i className="key-route" />Delivery route</li>
        </ul>
        {GROUPS.map(([title, list]) => (
          <div key={title} className="reach-group">
            <h3>{title} <span>{list.length}</span></h3>
            <ul className="reach-states" onPointerLeave={() => setActive(null)}>
              {list.map((s) => (
                <li key={s.name} title={s.name} className={active === s.name ? 'on' : undefined}
                  onPointerEnter={hover(s.name)}>
                  {SHORT[s.name] ?? s.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <svg ref={ref} className={`india-map${live ? ' live' : ''}`} viewBox={`0 0 ${INDIA.width} ${INDIA.height}`} role="img"
        aria-label={`Map of India with delivery routes from Logicrew hubs in ${HUB_LIST}`}>
        <path d={DOT_PATH} className="dots" />
        <g className="borders" onPointerLeave={() => setActive(null)}>
          {INDIA.states.map((s) => (
            <path key={s.name} d={s.d} className={active === s.name ? 'on' : undefined}
              onPointerEnter={hover(s.name)} />
          ))}
        </g>
        <g className="routes">
          {LINES.map((l) => (
            <g key={l.key} className="route">
              <path d={l.d} pathLength="1" style={{ animationDelay: l.delay }} />
              <circle cx={l.end[0]} cy={l.end[1]} r="4" style={{ animationDelay: l.delay }} />
            </g>
          ))}
          {HUB_POINTS.map(([name, [x, y]]) => (
            <g key={name} className="hub" transform={`translate(${x},${y})`}>
              <circle r="14" className="halo" />
              <circle r="7" />
            </g>
          ))}
        </g>
      </svg>
    </>
  )
}
