import { type PointerEvent } from 'react';
import hospitalImage from '../assets/Hospital.png';
import sociallyImage from '../assets/Socially.png';

const projects = [
  {
    number: '01',
    title: 'Hospital Management System',
    type: 'MERN application / Healthcare',
    description:
      'A full-stack healthcare platform designed to simplify hospital operations through patient management, appointment booking, medical records, prescriptions, and an admin dashboard.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux Toolkit', 'RTK Query'],
    image: hospitalImage,
    link: 'https://hospital-one-lemon.vercel.app/',
  },
  {
    number: '02',
    title: 'Socially',
    type: 'MERN application / Social Networking',
    description:
      'A full-stack social networking application that allows users to share photos, like and comment on posts, follow other users, and manage their personal profiles.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux Toolkit', 'RTK Query'],
    image: sociallyImage,
    link: 'https://frontend-socially.vercel.app/',
  },
];
function Work() {
  const handleProjectMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.transform = `perspective(700px) rotateX(${vertical * -8}deg) rotateY(${horizontal * 8}deg)`
  }

  const resetProject = (event: PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section className="work-section page-section" id="work">
      <div className="section-heading">
        <p className="eyebrow">MERN projects / 02</p>
        <h2>Full stack I have made <span aria-hidden="true" className="work-heading-arrow">↗</span></h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <a
              className="project-art"
              href={project.link || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              onPointerEnter={handleProjectMove}
              onPointerLeave={resetProject}
              onPointerMove={handleProjectMove}
            >
              <img alt={`${project.title} project preview`} className="project-image" src={project.image} />
              <span className="project-number">{project.number}</span>
            </a>
            <div className="project-info">
              <div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul className="tag-list">
                {project.tags.map((tag) => <li key={tag} tabIndex={0}><span>{tag}</span></li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work