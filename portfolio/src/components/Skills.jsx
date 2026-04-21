import { useEffect, useRef } from 'react'
import './Skills.css'

const techSkills = [
  { name: 'HTML / CSS / JavaScript', pct: 75 },
  { name: 'TypeScript', pct: 55 },
  { name: 'PHP (Laravel)', pct: 65 },
  { name: 'Python', pct: 50 },
  { name: 'Java', pct: 50 },
  { name: 'OBS Studio & Streaming', pct: 85 },
]
const softSkills = ['Problem Solving','Team Collaboration','Communication','Time Management','Adaptability','Attention to Detail','Web Security Practices','Responsive Web Development','System Troubleshooting']
const software = ['VS Code','NetBeans','Adobe Premiere','OBS Studio','Microsoft Office','Google Workspace','Figma (Basic)','GitHub Desktop']
const services = [
  { icon: 'fa-globe', title: 'Web Development', desc: 'Responsive websites using HTML, CSS & JavaScript' },
  { icon: 'fa-screwdriver-wrench', title: 'IT Support & Troubleshooting', desc: 'Hardware/software diagnosis and repair' },
  { icon: 'fa-video', title: 'Video Editing', desc: 'Basic video production using Adobe Premiere & OBS' },
  { icon: 'fa-database', title: 'Data Entry & Management', desc: 'Organized spreadsheets and data documentation' },
]

export default function Skills() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-fill').forEach(f => { f.style.width = f.dataset.width + '%' })
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.3 })
    ref.current?.querySelectorAll('.skill-category').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="skills-section">
      <div className="section-title"><h2>Skills & <span>Services</span></h2><p className="section-sub">What I bring to the table</p></div>
      <div className="skills-grid" ref={ref}>
        <div className="skill-category">
          <h3><i className="fa-solid fa-code" /> Technical Skills</h3>
          <div className="skill-bars">
            {techSkills.map(s => (
              <div className="skill-item" key={s.name}>
                <div className="skill-info"><span>{s.name}</span><span>{s.pct}%</span></div>
                <div className="skill-progress"><div className="skill-fill" data-width={s.pct} /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3><i className="fa-solid fa-brain" /> Soft Skills</h3>
          <div className="soft-skills-list">{softSkills.map(s => <span className="tag" key={s}>{s}</span>)}</div>
        </div>
        <div className="skill-category">
          <h3><i className="fa-solid fa-laptop-code" /> Software Proficiencies</h3>
          <div className="soft-skills-list">{software.map(s => <span className="tag" key={s}>{s}</span>)}</div>
        </div>
        <div className="skill-category services-card">
          <h3><i className="fa-solid fa-briefcase" /> Services I Offer</h3>
          <div className="services-list">
            {services.map(s => (
              <div className="service-item" key={s.title}>
                <i className={`fa-solid ${s.icon}`} />
                <div><strong>{s.title}</strong><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
