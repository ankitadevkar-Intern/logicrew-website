export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 560 360" role="img" aria-label="Warehouse with delivery truck">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CFE6E3" /><stop offset="1" stopColor="#F5F7F6" />
        </linearGradient>
      </defs>
      <rect width="560" height="360" rx="22" fill="url(#sky)" />
      <circle cx="470" cy="70" r="30" fill="#F2B705" opacity=".9" />
      <g fill="#fff" opacity=".9"><ellipse cx="130" cy="60" rx="46" ry="13" /><ellipse cx="160" cy="52" rx="28" ry="11" /><ellipse cx="360" cy="95" rx="38" ry="10" /></g>
      <rect y="300" width="560" height="60" fill="#10222B" opacity=".08" />
      <path d="M0 322h560" stroke="#fff" strokeWidth="3" strokeDasharray="22 16" opacity=".8" />
      <polygon points="30,128 180,72 330,128" fill="#138A8A" />
      <rect x="40" y="128" width="280" height="172" fill="#10222B" />
      <rect x="40" y="128" width="280" height="30" fill="#0b1a21" />
      <text x="180" y="149" textAnchor="middle" fill="#fff" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="17" letterSpacing="3">LOGICREW</text>
      {[62, 142, 222].map((x) => (
        <g key={x}>
          <rect x={x} y="184" width="68" height="116" fill="#1d3b47" />
          {[196, 210, 224, 238, 252, 266, 280].map((y) => <rect key={y} x={x} y={y} width="68" height="2" fill="#10222B" />)}
        </g>
      ))}
      <g>
        <rect x="324" y="262" width="38" height="38" fill="#C9A66B" stroke="#10222B" strokeWidth="2" />
        <rect x="334" y="236" width="30" height="26" fill="#D9B97E" stroke="#10222B" strokeWidth="2" />
        <path d="M324 280h38" stroke="#10222B" strokeWidth="2" />
      </g>
      <g className="truck">
        <rect x="372" y="196" width="130" height="94" rx="6" fill="#fff" stroke="#10222B" strokeWidth="3" />
        <path d="M502 226h30l16 24v40h-46z" fill="#138A8A" stroke="#10222B" strokeWidth="3" strokeLinejoin="round" />
        <path d="M512 234h14l10 15h-24z" fill="#CFE6E3" />
        <rect x="372" y="196" width="130" height="14" fill="#F2B705" />
        <text x="437" y="258" textAnchor="middle" fill="#10222B" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="20">Logicrew</text>
        <g fill="#10222B"><circle cx="410" cy="294" r="15" /><circle cx="520" cy="294" r="15" /></g>
        <g fill="#fff"><circle cx="410" cy="294" r="6" /><circle cx="520" cy="294" r="6" /></g>
      </g>
    </svg>
  )
}
