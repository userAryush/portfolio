import '../styles/about.css'

function About() {
  return (
    <section className="about-section page-section" id="about">
      <div className="about-copy">
        <h2>
          About<em> me.</em>
        </h2>
        <p className="about-lead">
          I am a Computer Science graduate and backend-oriented full-stack developer, building web applications with Python, Django, Django REST Framework, and React. My primary focus is backend development, while I also work across the frontend to build complete, practical applications.
        </p>
        <p className="about-text">
          My primary stack includes Python, Django, Django REST Framework, FastAPI, PostgreSQL, and React. During my internship, I worked on backend systems for a municipal digital services platform, gaining practical experience with API design, relational data modeling, authentication, and testing.
        </p>
        <p className="about-text">
          I enjoy turning real requirements into practical, maintainable software. I also work with technologies such as Docker, Redis, and Celery to build and support reliable applications.
        </p>
        <a className="arrow-link" href="#contact">
          Let's discuss a project <span>↘</span>
        </a>

        <div className="cv-links about-cv-links">
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

      <p className="steps-heading">How I build systems</p>
      <div className="steps-row">
        <div className="step">
          <span className="step-num">01</span>
          <h4>Understand the requirement</h4>
        </div>
        <div className="step">
          <span className="step-num">02</span>
          <h4>Design the system</h4>
        </div>
        <div className="step">
          <span className="step-num">03</span>
          <h4>Build with Django &amp; DRF</h4>
        </div>
        <div className="step">
          <span className="step-num">04</span>
          <h4>Test relentlessly</h4>
        </div>
        <div className="step">
          <span className="step-num">05</span>
          <h4>Ship &amp; maintain</h4>
        </div>
      </div>
    </section>
  )
}

export default About