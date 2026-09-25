import { type PointerEvent, useRef } from 'react'
import profileImage from '../assets/WMCW4374.JPG'

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
        <p className="eyebrow">MERN stack developer</p>
        <h1 aria-label="I aim to create secure and scalable projects.">
          <span aria-hidden="true">
            {Array.from('I aim to create secure and scalable ').map((letter, index) => <span className="hero-letter" key={`${letter}-${index}`}>{letter}</span>)}
            <em>{Array.from('projects.').map((letter, index) => <span className="hero-letter" key={`${letter}-em-${index}`}>{letter}</span>)}</em>
          </span>
        </h1>
        <p className="hero-summary">
          I&apos;m Ronit Khadka, a MERN stack developer building clear, useful, and quietly memorable
          full-stack web experiences for the people and teams I believe in.
        </p>
        <a className="arrow-link" href="#work">See selected work <span>↘</span></a>
      </div>
      <div
        className="hero-mark"
        onPointerEnter={handlePortraitMove}
        onPointerLeave={resetPortrait}
        onPointerMove={handlePortraitMove}
        ref={portraitStageRef}
      >
        <div className="portrait-wave" aria-hidden="true">
        </div>
        <div
          aria-label="Ronit Khadka profile photo"
          className="portrait-frame"
          role="img"
          style={{ backgroundImage: `url(${profileImage})` }}
        />
      </div>
    </section>
  )
}

export default Home