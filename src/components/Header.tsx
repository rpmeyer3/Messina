import { useEffect, useRef, useState } from 'react'

const NAV_ITEMS = [
  { href: '#architecture', label: 'Architecture' },
  { href: '#security', label: 'Security' },
  { href: '#infrastructure', label: 'Infrastructure' },
  { href: '#cost', label: 'Cost' },
]

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = 0
    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 80)
        setHidden(y > last && y > 300)
        last = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute('href')
    if (!href) return
    const target = document.querySelector(href)
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const cls = [
    'site-header',
    scrolled ? 'is-scrolled' : '',
    hidden ? 'is-hidden' : '',
  ].filter(Boolean).join(' ')

  return (
    <header className={cls} ref={headerRef} role="banner">
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#hero" className="nav-logo" aria-label="AI-PIP, back to top" onClick={handleClick}>
          AI-PIP
        </a>
        <ul className="nav-links" role="list">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={handleClick}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
