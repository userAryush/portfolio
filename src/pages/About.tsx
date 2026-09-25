function About() {
  return (
    <section className="about-section page-section" id="about">
      <div className="about-intro-grid">
        <div className="about-heading-col">
          <p className="eyebrow">About / Backend Engineering</p>
          <h2>
            Translating requirements into <em>reliable, maintainable systems.</em>
          </h2>
        </div>
        <div className="about-narrative-col">
          <p className="about-lead">
            I am a Computer Science graduate focused on backend engineering, with hands-on experience designing, building, and testing production-oriented REST APIs and database-driven applications.
          </p>
          <p className="about-text">
            My primary stack revolves around Python, Django, Django REST Framework, FastAPI, and PostgreSQL. Through practical work—including developing backend workflows for a municipal digital services platform during my internship—I have built systems handling API design, relational data modeling, secure authentication, and automated testing.
          </p>
          <p className="about-text">
            I enjoy the engineering discipline of taking concrete requirements and turning them into practical, scalable architecture. Beyond core backend logic, I regularly integrate supporting technologies like Docker, Redis, Celery, and React to ensure services are containerized, reliable, and easy to maintain.
          </p>
          <a className="arrow-link" href="#contact">
            Let's discuss a project <span>↘</span>
          </a>
        </div>
      </div>

      <div className="about-highlights-grid" aria-label="Technical Highlights">
        <div className="about-highlight-card">
          <span className="highlight-tag">01 / BACKEND</span>
          <h3>Backend Development</h3>
          <p className="highlight-tech">Django • DRF • FastAPI • Python</p>
          <p className="highlight-desc">RESTful API development, business logic architecture, and clean code principles.</p>
        </div>

        <div className="about-highlight-card">
          <span className="highlight-tag">02 / DATABASE</span>
          <h3>Database & Storage</h3>
          <p className="highlight-tech">PostgreSQL • Django ORM • SQL</p>
          <p className="highlight-desc">Relational schema design, database migrations, indexing, and data integrity.</p>
        </div>

        <div className="about-highlight-card">
          <span className="highlight-tag">03 / ARCHITECTURE</span>
          <h3>API & Systems</h3>
          <p className="highlight-tech">REST APIs • JWT Auth • Pytest • Security</p>
          <p className="highlight-desc">Role-based access control, automated test coverage, and modular system design.</p>
        </div>

        <div className="about-highlight-card">
          <span className="highlight-tag">04 / ECOSYSTEM</span>
          <h3>Tools & Ecosystem</h3>
          <p className="highlight-tech">Docker • Redis • Celery • Git • Postman</p>
          <p className="highlight-desc">Containerized environments, asynchronous task queues, caching, and API testing.</p>
        </div>
      </div>
    </section>
  )
}

export default About