export default function Logo({ light = false }) {
  const ink = light ? '#fff' : '#10222B'
  return (
    <span className="logo" aria-label="Logicrew Solutions">
      <svg viewBox="0 0 64 64" width="38" height="38" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={light ? '#138A8A' : '#10222B'} />
        <path d="M20 12v32h24" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 30l9-9" stroke={light ? '#10222B' : '#138A8A'} strokeWidth="5" strokeLinecap="round" />
        <circle cx="46" cy="18" r="6" fill="#F2B705" />
      </svg>
      <span className="logo-text" style={{ color: ink }}>
        <b>Logicrew</b>
        <small>Solutions Pvt Ltd</small>
      </span>
    </span>
  )
}
