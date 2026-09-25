function Cv() {
  return (
    <section className="cv-section page-section" id="cv">
      <div className="cv-heading">
        <p className="eyebrow">A closer look / CV</p>
        <h2>Experience, skills, and the work behind it.</h2>
      </div>
      <div className="cv-actions">
        <p>
          I build thoughtful full-stack products with the MERN stack, from clear interfaces
          to reliable backend systems.
        </p>
        <div className="cv-links">
          <a className="arrow-link" href="/CV.pdf" rel="noreferrer" target="_blank">
            View CV <span>↗</span>
          </a>
          <a className="cv-download" download="Ronit-Khadka-CV.pdf" href="/CV.pdf">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cv
