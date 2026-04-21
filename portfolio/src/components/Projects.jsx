import './Projects.css'

const projects = [
  { img: '/projects/comprog2.png', title: 'POS System', desc: 'A Point-of-Sale system built in Java using NetBeans for Computer Programming 2. Features product management, transaction processing, and receipt generation.', tags: ['Java','NetBeans','OOP'], link: 'https://github.com/eclipse31-dev/ComputerProgramming2' },
  { img: '/projects/TinyLearn.png', title: 'TinyLearn', desc: 'A full-stack Learning Management System built with Laravel and React. Features real-time notifications via WebSockets, assignment submissions, grading, and role-based dashboards.', tags: ['Laravel','React','WebSockets','SQLite'], link: 'https://github.com/eclipse31-dev/TinyLearn' },
  { img: '/projects/Orbit.png', title: 'ORBIT', desc: 'A facility booking system developed and deployed at the UIC Library LRSC. Allows users to reserve library facilities online for students and staff at UIC.', tags: ['Booking System','Deployed','UIC Library'], link: 'https://github.com/james-hub21/ORBIT' },
]

export default function Projects({ onImageClick }) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-title"><h2>My <span>Projects</span></h2><p className="section-sub">Things I've built</p></div>
      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card" key={p.title}>
            <div className="project-img">
              <img src={p.img} alt={p.title} className="lightbox-trigger" onClick={() => onImageClick(p.img)} />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            <a href={p.link} className="project-link" target="_blank" rel="noreferrer">View Repo <i className="fa-solid fa-arrow-right" /></a>
          </div>
        ))}
      </div>
    </section>
  )
}
