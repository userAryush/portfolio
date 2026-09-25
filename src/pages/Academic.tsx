import { useState } from 'react';

interface AcademicEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  major: string;
  gpa?: string;
  details: string[];
}

interface CertificationEntry {
  id: string;
  name: string;
  institution: string;
  period: string;
  duration: string;
  certificateUrl?: string;
  topics?: string[];
}

const academicHistory: AcademicEntry[] = [
  {
    id: 'bcs',
    degree: "Bachelor's in Computer Science (BCS)",
    institution: 'Herald College Kathmandu',
    location: 'Naxal, Kathmandu',
    period: '2023 – 2026',
    major: 'Computer Science',
    details: [
      'Bachelor’s in Computer Science',
      'Location: Naxal, Kathmandu',
    ],
  },
  {
    id: 'plus-two',
    degree: '+2 in Computer Science',
    institution: 'Bal Kalyan Vidya Mandir (B.K.V.M.)',
    location: 'Biratnagar',
    period: '2021 – 2023',
    major: 'Computer Science',
    gpa: '3.56',
    details: [
      'Computer Science',
      'Location: Biratnagar',
    ],
  },
];

const certificationsList: CertificationEntry[] = [
  {
    id: 'db-training',
    name: 'Database Training',
    institution: 'Herald College Kathmandu',
    period: '2024',
    duration: '1 month',
    topics: ['Database Design', 'SQL Queries', 'Relational Schemas'],
  },
  {
    id: 'django-training',
    name: 'Python with Django',
    institution: 'MindRisers',
    period: '2024',
    duration: '2 months',
    topics: ['Python OOP', 'Django & DRF', 'Backend API Architecture'],
  },
];

function Academic() {
  const [activeCertificate, setActiveCertificate] = useState<CertificationEntry | null>(null);

  const closeModal = () => {
    setActiveCertificate(null);
  };

  return (
    <section className="academic-section page-section" id="academic">
      <div className="section-heading">
        <p className="eyebrow">Education & Credentials / 04</p>
        <h2>
          Academic background & <em>certifications.</em>
        </h2>
      </div>

      <div className="academic-layout">
        {/* Academic Column */}
        <div className="academic-col">
          <div className="academic-col-header">
            <div className="col-header-left">
              <span className="academic-col-badge">ACADEMIC JOURNEY</span>
              <h3 className="academic-col-title">Education</h3>
            </div>
            <span className="academic-col-count">{academicHistory.length} Degrees</span>
          </div>

          <div className="academic-cards-list">
            {academicHistory.map((item) => (
              <article className="academic-card" key={item.id}>
                <div className="academic-card-top">
                  <div className="academic-degree-group">
                    <span className="academic-stream-tag">{item.major}</span>
                    <h4 className="academic-degree-title">{item.degree}</h4>
                    <p className="academic-institution">{item.institution}</p>
                  </div>
                  <div className="academic-date-group">
                    <span className="academic-date-badge">{item.period}</span>
                    {item.gpa && (
                      <span className="academic-gpa-badge">
                        GPA <strong>{item.gpa}</strong>
                      </span>
                    )}
                  </div>
                </div>

                <div className="academic-card-footer">
                  <div className="academic-meta-items">
                    {item.details.map((detail, idx) => (
                      <span className="academic-meta-pill" key={idx}>
                        <span className="academic-meta-dot" aria-hidden="true" />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="cert-col">
          <div className="academic-col-header">
            <div className="col-header-left">
              <span className="academic-col-badge">CREDENTIALS</span>
              <h3 className="academic-col-title">Certifications</h3>
            </div>
            <span className="academic-col-count">{certificationsList.length} Completed</span>
          </div>

          <div className="cert-cards-list">
            {certificationsList.map((cert) => (
              <article className="cert-card" key={cert.id}>
                <div className="cert-card-header">
                  <div className="cert-title-group">
                    <span className="cert-badge">CERTIFICATION</span>
                    <h4 className="cert-name">{cert.name}</h4>
                    <p className="cert-institution">{cert.institution}</p>
                  </div>
                  <div className="cert-duration-badge">
                    <span className="cert-year">{cert.period}</span>
                    <span className="cert-time">· {cert.duration}</span>
                  </div>
                </div>

                {cert.topics && (
                  <div className="cert-topics-row">
                    {cert.topics.map((topic, i) => (
                      <span className="cert-topic-chip" key={i}>
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {cert.certificateUrl && (
                  <div className="cert-card-action">
                    <button
                      className="view-cert-btn"
                      onClick={() => setActiveCertificate(cert)}
                      type="button"
                    >
                      <span>View Certificate</span>
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        height="12"
                        viewBox="0 0 20 20"
                        width="12"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {activeCertificate && (
        <div
          aria-labelledby="cert-modal-title"
          aria-modal="true"
          className="cert-modal-backdrop"
          onClick={closeModal}
          role="dialog"
        >
          <div
            className="cert-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div>
                <span className="cert-modal-tag">CERTIFICATE PREVIEW</span>
                <h4 className="cert-modal-title" id="cert-modal-title">
                  {activeCertificate.name}
                </h4>
                <p className="cert-modal-inst">
                  {activeCertificate.institution} · {activeCertificate.period}
                </p>
              </div>
              <button
                aria-label="Close certificate preview"
                className="cert-modal-close"
                onClick={closeModal}
                type="button"
              >
                ✕
              </button>
            </div>
            <div className="cert-modal-body">
              {activeCertificate.certificateUrl && (
                <img
                  alt={`${activeCertificate.name} Certificate`}
                  className="cert-modal-image"
                  src={activeCertificate.certificateUrl}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Academic;
