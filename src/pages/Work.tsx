import { type PointerEvent } from 'react';

const projects = [
  {
    number: '01',
    title: 'HCKonnect',
    type: 'Full-Stack Community Platform / AI-Powered ATS',
    previewBadge: 'FULL-STACK PLATFORM • LIVE',
    previewUrl: 'hckonnect.vercel.app',
    previewStatus: 'LIVE APPLICATION',
    description:
      "A centralized web platform for Herald College Kathmandu's student communities, replacing scattered tools with a unified hub for community management, events, discussions, and resource sharing. Integrates Google Gemini AI for automated candidate ATS scoring and content generation.",
    highlights: [
      'Role-Based Access Control (RBAC) & JWT multi-role authentication',
      'Google Gemini AI integration for member applicant ATS scoring and post drafting',
      'Community analytics dashboard, event registrations, and Redis caching',
    ],
    tags: ['React', 'Django', 'Django REST Framework', 'PostgreSQL', 'Google Gemini AI', 'Redis', 'JWT'],
    github: 'https://github.com/userAryush/HCKonnect-CommunityManagementSystem',
    live: 'https://hckonnect.vercel.app/',
    architectureNotes: [
      'React Client ↔ Django REST Framework API',
      'Gemini AI ATS Evaluation & Content Engine',
      'PostgreSQL Relational DB & Redis Cache',
    ],
  },
  {
    number: '02',
    title: 'Electronics ERP Backend',
    type: 'Enterprise Backend / Service-Layer Architecture',
    previewBadge: 'ENTERPRISE BACKEND • PRODUCTION ARCHITECTURE',
    previewUrl: 'github.com/userAryush/erp-backend-drf',
    previewStatus: 'PRODUCTION REPOSITORY',
    description:
      'A production-oriented ERP backend for an electronics company, architected to manage products, suppliers, inventory, purchasing, sales, invoicing, payments, and role-based business operations using a strict service-layer pattern.',
    highlights: [
      'Multi-role RBAC & object-level permissions across 5 distinct operational roles',
      'Warehouse stock tracking with database-level locking to prevent overselling',
      'Celery & Redis async pipelines, Django Channels for real-time notifications, and drf-spectacular docs',
    ],
    tags: ['Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Django Channels', 'Docker'],
    github: 'https://github.com/userAryush/erp-backend-drf',
    live: null,
    architectureNotes: [
      'Service-Layer Pattern (Separating Logic & Views)',
      'Warehouse DB-Level Concurrency Locking',
      'Celery Tasks, Redis & Django Channels',
    ],
  },
  {
    number: '03',
    title: 'Voteहाल — Online Voting System',
    type: 'Digital Election Platform / 6-Person Team Project',
    previewBadge: 'SECURE VOTING SYSTEM • TEAM PROJECT',
    previewUrl: 'project-5cs024.onrender.com',
    previewStatus: 'RENDER CLOUD DEPLOYMENT',
    description:
      'A full-stack Django election and survey platform engineered as part of a 6-person team following professional Jira Agile workflows. Designed for verified multi-step digital voting with one-vote-per-poll security enforcement.',
    highlights: [
      'Designed backend architecture and REST API layer using Django and PostgreSQL',
      'Strict one-vote-per-poll enforcement with multi-step OTP authentication',
      'Real-time poll result visualization APIs and admin election management',
    ],
    tags: ['Django', 'PostgreSQL', 'REST API', 'OTP Authentication', 'Jira'],
    github: 'https://github.com/Mandip698/Project_5CS024',
    live: 'https://project-5cs024.onrender.com/',
    architectureNotes: [
      'Multi-Step OTP User Verification Flow',
      'One-Vote-Per-Poll Database Constraints',
      'Real-Time Visualization Data Endpoints',
    ],
  },
];

function Work() {
  const handleProjectMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.transform = `perspective(700px) rotateX(${vertical * -8}deg) rotateY(${horizontal * 8}deg)`;
  };

  const resetProject = (event: PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <section className="work-section page-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Featured Work / 02</p>
        <h2>
          Featured projects & <em>backend systems.</em>{' '}
          <span aria-hidden="true" className="work-heading-arrow">
            ↗
          </span>
        </h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <a
              className="project-art"
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              onPointerEnter={handleProjectMove}
              onPointerLeave={resetProject}
              onPointerMove={handleProjectMove}
            >
              <div className="project-preview">
                <div className="preview-window-bar">
                  <div className="preview-dots" aria-hidden="true">
                    <span className="preview-dot preview-dot-red" />
                    <span className="preview-dot preview-dot-yellow" />
                    <span className="preview-dot preview-dot-green" />
                  </div>
                  <span className="preview-url">{project.previewUrl}</span>
                </div>

                <div className="preview-content">
                  <div>
                    <span className="preview-badge">{project.previewBadge}</span>
                    <h4 className="preview-title">{project.title}</h4>
                  </div>

                  <div className="preview-chips">
                    {project.architectureNotes.map((note, index) => (
                      <div className="preview-chip" key={index}>
                        <span className="preview-chip-dot" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>

                  <div className="preview-footer">
                    <span className="preview-status">{project.previewStatus}</span>
                    <span className="preview-cta">
                      {project.live ? 'Open Live ↗' : 'View Code ↗'}
                    </span>
                  </div>
                </div>
              </div>
              <span className="project-number">{project.number}</span>
            </a>

            <div className="project-info">
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-features" aria-label="Key highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.live && (
                    <a
                      className="project-btn project-btn-primary"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Live Demo</span>
                      <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                  {project.github && (
                    <a
                      className="project-btn project-btn-secondary"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag} tabIndex={0}>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;