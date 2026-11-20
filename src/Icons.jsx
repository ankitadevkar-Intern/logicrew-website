const P = {
  warehouse: 'M3 21V9l9-5 9 5v12M7 21v-7h10v7M7 17.5h10',
  box: 'M12 3l9 5v8l-9 5-9-5V8l9-5zM3 8l9 5 9-5M12 13v8',
  truck: 'M2 6h12v10H2zM14 9h4l4 4v3h-8M6 19.5a2 2 0 100-4 2 2 0 000 4zM18 19.5a2 2 0 100-4 2 2 0 000 4z',
  pin: 'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
  returns: 'M4 4v5h5M4.5 9A8 8 0 112 14',
  chart: 'M4 20V10M10 20V4M16 20v-8M22 20H2',
  cart: 'M3 4h3l2 11h10l2-8H7M9 20.5a1 1 0 100-2 1 1 0 000 2zM17 20.5a1 1 0 100-2 1 1 0 000 2z',
  pill: 'M10.5 3.5a4.2 4.2 0 016 6l-7 7a4.2 4.2 0 01-6-6l7-7zM8 8l8 8',
  car: 'M4 16v-4l2-5h12l2 5v4M4 16h16M7 19.5a1 1 0 100-2 1 1 0 000 2zM17 19.5a1 1 0 100-2 1 1 0 000 2z',
  bag: 'M5 8h14l-1 13H6L5 8zM9 8a3 3 0 016 0',
  chip: 'M7 7h10v10H7zM10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4',
  shirt: 'M8 3L3 7l3 3 2-1v12h8V9l2 1 3-3-5-4a4 4 0 01-8 0z',
  scan: 'M4 8V5a1 1 0 011-1h3M16 4h3a1 1 0 011 1v3M20 16v3a1 1 0 01-1 1h-3M8 20H5a1 1 0 01-1-1v-3M4 12h16',
  plug: 'M9 3v5M15 3v5M6 8h12v3a6 6 0 01-12 0V8zM12 17v4',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  menu: 'M4 7h16M4 12h16M4 17h16',
  clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z',
  plus: 'M12 5v14M5 12h14',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z',
}
export default function Icon({ name, size = 26 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name]} />
    </svg>
  )
}
