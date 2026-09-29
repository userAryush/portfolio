import '../styles/skills.css'

interface SkillCategory {
  number: string;
  title: string;
  tag: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    number: '01',
    title: 'Backend',
    tag: 'CORE SPECIALIZATION',
    skills: [
      'Python',
      'Django',
      'Django REST Framework (DRF)',
      'FastAPI',
      'REST API Development',
    ],
  },
  {
    number: '02',
    title: 'Frontend',
    tag: 'CLIENT & INTERFACE',
    skills: [
      'React',
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    number: '03',
    title: 'Databases & ORM',
    tag: 'DATA & STORAGE',
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Django ORM',
      'SQLAlchemy',
    ],
  },
  {
    number: '04',
    title: 'Backend Infrastructure',
    tag: 'ASYNC & DEVOPS',
    skills: [
      'Docker',
      'Redis',
      'Celery',
      'Django Channels',
    ],
  },
  {
    number: '05',
    title: 'API & Development Tools',
    tag: 'WORKFLOW & TOOLING',
        skills: [
      'Git And Github',
      'Unity',
      'Figma',
      'Postman and Swagger'
    ],
  },
  {
    number: '06',
    title: 'Data & Python Libraries',
    tag: 'SCIENTIFIC & ANALYSIS',
    skills: [
      'NumPy',
      'Pandas',
      'Matplotlib',
    ],
  },
  {
    number: '07',
    title: 'Certifications',
    tag: 'CERTIFICATIONS',
    skills: [
      'Python with Django - Mindrisers',
      'Database Training - Herald College Kathmandu',
      'Advanced Django - Coursera',
    ],
  },
  {
    number: '08',
    title: 'Programming Language',
    tag: 'Programming Language',
    skills: [
      'Python',
      'C',
      'JavaScript',
      'Java'
    ],
  },
  {
    number: '09',
    title: 'Testing & Quality',
    tag: 'TESTING & QUALITY',
    skills: [
      'Manual Testing',
      'API Testing',
      'Unit Testing',
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section page-section" id="skills">
      <div className="section-heading">
        {/* <p className="eyebrow">Technical Stack / 03</p> */}
        <h2>
          Technical<em> skills.</em>
                             <span aria-hidden="true" className="work-heading-arrow">
            ↗
          </span>
        </h2>
      </div>

      <div className="skills-grid" aria-label="Technical skills overview">
        {skillCategories.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-header">
              <div className="skill-tag-group">
                <span className="skill-tag">
                  {group.number} / {group.tag}
                </span>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <div className="skill-indicator" title="Active Core Competency">
                <span className="skill-dot" aria-hidden="true" />
                <span className="skill-count">{group.skills.length}</span>
              </div>
            </div>

            <ul className="skill-list" aria-label={`${group.title} skills`}>
              {group.skills.map((skill) => (
                <li className="skill-item" key={skill}>
                  <span className="skill-bullet" aria-hidden="true">
                    ▹
                  </span>
                  <span className="skill-name">{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
