import { useLayoutEffect, useRef, useState } from 'react'
import type { Route } from '../hooks/useRoute'

type NavbarProps = {
  activePage: string
  theme: 'light' | 'dark'
  onNavigate: (page: Route) => void
  onThemeToggle: () => void
}

const pages = ['home', 'work', 'about', 'cv', 'contact'] as const

function Navbar({ activePage, theme, onNavigate, onThemeToggle }: NavbarProps) {
  const navRef = useRef<HTMLElement>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const nav = navRef.current
      const activeLink = nav?.querySelector<HTMLAnchorElement>('.active')
      if (!nav || !activeLink) return

      setIndicator({ left: activeLink.offsetLeft, width: activeLink.offsetWidth })
    }

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activePage])

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Ronit Khadka home">
        RK<span>.</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
        {pages.map((page) => (
          <a
            className={activePage === page ? 'active' : ''}
            href={`#${page}`}
            key={page}
            onClick={() => onNavigate(page)}
          >
            {page}
          </a>
        ))}
        <span
          aria-hidden="true"
          className="nav-indicator"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </nav>
      <a className="availability" href="#contact">
        <span className="status-dot" /> Available for work
      </a>
      <button
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        className="theme-toggle"
        onClick={onThemeToggle}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        type="button"
      >
        <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
      </button>
    </header>
  )
}

export default Navbar