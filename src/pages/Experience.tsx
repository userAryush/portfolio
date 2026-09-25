function Experience() {
  return (
    <section className="experience-section page-section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Work History / 01</p>
        <h2>
          Hands-on engineering in <em>production environments.</em>
        </h2>
      </div>

      <div className="experience-timeline">
        <article className="experience-card">
          <div className="experience-header">
            <div className="experience-role-group">
              <span className="experience-tag">INTERNSHIP</span>
              <h3 className="experience-title">Backend Development Intern</h3>
              <p className="experience-company">MindRisers Technology</p>
            </div>
            <div className="experience-date-badge">
              <span>Jul 25, 2026 – Sept 25, 2026</span>
              <span className="experience-duration">3 Months</span>
            </div>
          </div>

          <p className="experience-summary">
            Built and maintained production-oriented REST APIs using Django REST Framework, PostgreSQL, and Django ORM for web and mobile applications. Worked on relational data modeling, query optimization, endpoint serialization, and automated testing across multi-module systems while following established project architecture.
          </p>

          <div className="experience-tech-row" aria-label="Internship Technologies">
            <span className="exp-tech-pill">Python</span>
            <span className="exp-tech-pill">Django</span>
            <span className="exp-tech-pill">Django REST Framework</span>
            <span className="exp-tech-pill">PostgreSQL</span>
            <span className="exp-tech-pill">Django ORM</span>
            <span className="exp-tech-pill">Postman</span>
            <span className="exp-tech-pill">Swagger</span>
          </div>

          <div className="experience-systems-grid">
            <div className="system-card">
              <div className="system-card-header">
                <span className="system-tag">MUNICIPAL DIGITAL SERVICES</span>
                <h4 className="system-title">Digital Biratnagar</h4>
                <p className="system-subtitle">Digital Palika Mobile Application</p>
              </div>
              <p className="system-desc">
                Engineered backend modules for administration, revenue, health, legal, judicial committee, welfare, planning, and finance. Designed multi-module REST endpoints, implemented secure file uploads, role permissions, pagination, and optimized database queries using <code>select_related()</code> and <code>prefetch_related()</code>.
              </p>
              <div className="system-footer-tech">
                <span>Django</span>
                <span>•</span>
                <span>DRF</span>
                <span>•</span>
                <span>PostgreSQL</span>
                <span>•</span>
                <span>Query Optimization</span>
              </div>
            </div>

            <div className="system-card">
              <div className="system-card-header">
                <span className="system-tag">E-COMMERCE PLATFORM</span>
                <h4 className="system-title">PrimeX Gym E-commerce</h4>
                <p className="system-subtitle">Gym-Focused Commerce & Events</p>
              </div>
              <p className="system-desc">
                Developed database-driven APIs for product catalog management, gym event scheduling, and checkout services. Implemented relational data filtering, serialization, and collaborated closely with frontend requirements for clean, reliable API integration.
              </p>
              <div className="system-footer-tech">
                <span>Django</span>
                <span>•</span>
                <span>DRF</span>
                <span>•</span>
                <span>PostgreSQL</span>
                <span>•</span>
                <span>API Integration</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience
