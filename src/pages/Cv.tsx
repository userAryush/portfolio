function Cv() {
  return (
    <section className="cv-section page-section" id="cv">
      <div className="cv-heading">
        <p className="eyebrow">A closer look / CV</p>
        <h2>
          Experience, skills, and the <em>work behind it.</em>
        </h2>
      </div>
      <div className="cv-actions">
        <p>
          Designing, building, and maintaining reliable backend APIs and database
          architectures with Python, Django, and PostgreSQL.
        </p>
        <div className="cv-links">
          <a
            className="cv-btn cv-btn-primary"
            href="/CV.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <span>View CV</span>
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="14"
              viewBox="0 0 20 20"
              width="14"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
          <a
            className="cv-btn cv-btn-secondary"
            download="Aryush-Khatri-CV.pdf"
            href="/CV.pdf"
          >
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="14"
              viewBox="0 0 20 20"
              width="14"
            >
              <path
                clipRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                fillRule="evenodd"
              />
            </svg>
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Cv
