import { useLayoutEffect, useRef, useState } from 'react'

type NavbarProps = {
  activePage: string
  theme: 'light' | 'dark'
  onNavigate: (page: any) => void
  onThemeToggle: () => void
}

const pages = ['home', 'about', 'experience', 'projects', 'skills', 'academic', 'cv', 'contact'] as const

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
      <a className="wordmark" href="#home" aria-label="Aryush Khatri home">
        Aryush<span>.py</span>
      </a>

      <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
        {pages.map((page) => (
          <a className={activePage === page ? 'active' : ''}
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

      <div className="nav-actions">
        <a
          className="social-icon"
          href="https://github.com/userAryush"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        <a
          className="social-icon"
          href="https://linkedin.com/in/aryush-khatri"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg viewBox="1 1.5 22 21" width="17" height="17" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-0.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h0.05c0.48-0.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
          </svg>
        </a>

        <button
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="theme-toggle"
          onClick={onThemeToggle}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          type="button"
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
              <path d="M12.3 4.9c.4-.2.6-.7.5-1.1-.1-.4-.6-.8-1.1-.8C6.2 3 2 7.2 2 12.5 2 17.7 6.3 22 11.5 22c4.6 0 8.5-3.3 9.3-7.8.1-.5-.2-1-.6-1.1-.5-.2-1 0-1.3.4-1.5 1.7-3.7 2.6-6 2.4-3.5-.3-6.3-3.2-6.5-6.7-.2-2.8 1.4-5.3 3.9-6.3z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
              <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm0 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm10-9h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zM4 12a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm14.07-7.07a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 1 0 1.41-1.41l-1.41-1.41zM6.93 17.07a1 1 0 0 0-1.41 0l-1.41 1.41a1 1 0 1 0 1.41 1.41l1.41-1.41a1 1 0 0 0 0-1.41zm11.31 0a1 1 0 0 0 0 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 0zm-12.72-12.72a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41l-1.41-1.41z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default Navbar