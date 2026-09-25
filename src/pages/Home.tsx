import { type PointerEvent, useRef } from 'react'
import profileImage from '../assets/aryush.png'

function Home() {
  const portraitStageRef = useRef<HTMLDivElement>(null)

  const handlePortraitMove = (event: PointerEvent<HTMLDivElement>) => {
    const portraitStage = portraitStageRef.current
    if (!portraitStage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const bounds = portraitStage.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
    portraitStage.style.transform = `perspective(700px) rotateX(${vertical * -8}deg) rotateY(${horizontal * 8}deg)`
  }

  const resetPortrait = () => {
    if (portraitStageRef.current) portraitStageRef.current.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Python FullStack Developer</p>
        <h1 className="hero-title" aria-label="From Requirements To Working Systems.">
          <span className="hero-title-line" aria-hidden="true">
            {Array.from('From requirements').map((letter, index) => (
              <span className="hero-letter" key={`line1-${letter}-${index}`}>
                {letter}
              </span>
            ))}
          </span>
          <span className="hero-title-line" aria-hidden="true">
            {Array.from('to ').map((letter, index) => (
              <span className="hero-letter" key={`line2-${letter}-${index}`}>
                {letter}
              </span>
            ))}
            <em>
              {Array.from('working systems.').map((letter, index) => (
                <span className="hero-letter" key={`line2-em-${letter}-${index}`}>
                  {letter}
                </span>
              ))}
            </em>
          </span>
        </h1>
        <p className="hero-summary">
          A Python developer working with Django, Django REST Framework, PostgreSQL, and<br className="hero-summary-break" />
          React to build practical, maintainable APIs and web applications for real-world use.
        </p>
        <div className="hero-cta-group">
          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#projects">
              <span>View Projects</span>
              <svg className="hero-btn-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              className="hero-btn hero-btn-secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span>View Resume</span>
              <svg className="hero-btn-icon" viewBox="0 0 20 20" fill="currentColor" width="15" height="15" aria-hidden="true">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          <div className="hero-social-links" aria-label="Social links">
            <a
              className="hero-social-btn"
              href="https://linkedin.com/in/aryush-khatri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <svg viewBox="1 1.5 22 21" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-0.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h0.05c0.48-0.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
              </svg>
            </a>
            <a
              className="hero-social-btn"
              href="https://github.com/userAryush"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className="hero-mark"
        onPointerEnter={handlePortraitMove}
        onPointerLeave={resetPortrait}
        onPointerMove={handlePortraitMove}
        ref={portraitStageRef}
      >
        <div className="portrait-wave" aria-hidden="true" />
        <div
          aria-label="Aryush Khatri profile photo"
          className="portrait-frame"
          role="img"
          style={{ backgroundImage: `url(${profileImage})` }}
        />
      </div>
    </section>
  )
}

export default Home