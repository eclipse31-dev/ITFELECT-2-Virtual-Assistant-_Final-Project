import { useEffect, useRef } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.about-card').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="section-title"><h2>About <span>Me</span></h2><p className="section-sub">Get to know me better</p></div>
      <div className="about-grid" ref={ref}>
        <div className="about-card reveal">
          <div className="about-card-icon"><i className="fa-solid fa-user" /></div>
          <h3>Background</h3>
          <p>I'm Ken Andrei Usa, born and raised in Davao City, Philippines. I studied at the University of the Immaculate Conception from elementary through senior high school at the Bajada campus, where I graduated under the ABM strand. I am currently a 3rd-year BSIT student at UIC Bankerohan (main campus). I am also an active member of PSITS Region 11, where I serve as Esports Technical Director.</p>
        </div>
        <div className="about-card reveal">
          <div className="about-card-icon"><i className="fa-solid fa-graduation-cap" /></div>
          <h3>Educational Background</h3>
          <ul className="edu-list">
            <li><span className="edu-year">2023 – Present</span><strong>BS Information Technology</strong><em>University of the Immaculate Conception, Davao City</em></li>
            <li><span className="edu-year">2017 – 2023</span><strong>High School – Senior High Graduate (ABM Strand)</strong><em>UIC Basic Education Dept., Bajada Campus</em></li>
            <li><span className="edu-year">2010 – 2016</span><strong>Elementary (Kinder – Grade 6)</strong><em>University of the Immaculate Conception, Bajada Campus</em></li>
          </ul>
        </div>
        <div className="about-card reveal">
          <div className="about-card-icon"><i className="fa-solid fa-bullseye" /></div>
          <h3>Mission & Vision</h3>
          <p><strong>Mission:</strong> To leverage technology to solve real-world problems and continuously grow as a developer who creates value for clients and communities.</p>
          <p style={{marginTop:'1rem'}}><strong>Vision:</strong> To become a well-rounded full-stack developer who bridges technical excellence and user-centered design.</p>
        </div>
        <div className="about-card reveal">
          <div className="about-card-icon"><i className="fa-solid fa-rocket" /></div>
          <h3>Goals & Motivation</h3>
          <p>I am motivated by turning complex problems into elegant solutions. My short-term goal is to complete my BSIT degree with honors and land an internship at a tech company. Long-term, I aim to build my own software products and contribute to open-source communities.</p>
        </div>
        <div className="about-card achievements-card reveal">
          <div className="about-card-icon"><i className="fa-solid fa-trophy" /></div>
          <h3>Key Achievements</h3>
          <div className="achievements-grid">
            {['Completed multiple web development projects as part of coursework','Serving as Esports Technical Director of PSITS Region 11 since 2023','Developed a functional POS System in Computer Programming 2'].map((t,i) => (
              <div className="achievement-item" key={i}><i className="fa-solid fa-star" /><p>{t}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
