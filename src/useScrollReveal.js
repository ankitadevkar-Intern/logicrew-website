import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './reveal.css'

// Fades in headings, cards and sections on every page except Home
// (Home already uses the <Reveal> component).
const SELECTORS = '.page-head > *, .section > *, .services article, .steps li, .banner > *, .cta > *'

export default function useScrollReveal() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (pathname === '/') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll(SELECTORS).forEach((el) => {
      const i = Array.from(el.parentElement.children).indexOf(el)
      el.style.setProperty('--d', `${Math.min(i, 3) * 100}ms`)
      el.classList.add('reveal')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])
}
