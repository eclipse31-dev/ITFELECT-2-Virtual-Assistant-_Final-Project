import { useState, useEffect, useRef } from 'react'
import './Certificates.css'

const certs = [
  {
    img: '/certificate/PSITS_ESPORTS TECHNICAL DERICTOR.png',
    title: 'PSITS Festival of Talents 2025',
    issuer: 'PSITS Region XI - University of Immaculate Conception',
    date: 'March 16, 2025',
    desc: 'Certificate of Appreciation awarded for contributions as the Esports Technical Director for the Philippine Society of Information Technology Students (PSITS) Region XI during the "Festival of Talents 2025." Theme: "Future Ready ITE: Shaping the Digital Future of IT Students in Davao Region."',
  },
  {
    img: '/certificate/Certificate of E-Toolkit_ Emerging Educational Technology Tools_page-0001.jpg',
    title: 'E-Toolkit: Emerging Educational Technology Tools',
    issuer: 'University of Southeastern Philippines - EL 229 Instructor',
    date: 'February 26, 2026',
    desc: 'Certificate of Participation given for joining and actively participating in the online event titled "E-Toolkit: Emerging Educational Technology Tools," organized by the University of Southeastern Philippines and held virtually via Microsoft Teams.',
  },
  {
    img: '/certificate/Certificate of Participation.png',
    title: 'VIBE Workshop for Basic Video Editing',
    issuer: 'VIBE Club - UIC Father Selga Campus',
    date: 'April 20, 2024',
    desc: 'Certificate of Appreciation presented as a VIBE Officer for cooperation and contributions toward the success of the "Workshop/Seminar for Basic Video Editing using Adobe Premiere Pro" at ITRC Training Center, University of the Immaculate Conception - Father Selga Campus.',
  },
  {
    img: '/certificate/Certificate_Ken Andrei Usa.png',
    title: 'Git and GitHub Workshop',
    issuer: 'Google Developer Groups (GDG) On Campus - UIC',
    date: 'October 23, 2024',
    desc: 'Certificate of Participation awarded in recognition of valuable contribution and active engagement as a participant in the "Git and GitHub Workshop: Version Control 101."',
  },
]

export default function Certificates() {
  const [flipped, setFlipped] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.cert-card')
    if (!cards) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' })
    const t = setTimeout(() => cards.forEach(el => obs.observe(el)), 100)
    return () => { clearTimeout(t); obs.disconnect() }
  }, [])

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-title">
        <h2>My <span>Certificates</span></h2>
        <p className="section-sub">Click a certificate to flip and see details</p>
      </div>
      <div className="certs-grid" ref={ref}>
        {certs.map((c, i) => (
          <div
            className={`cert-card-container reveal ${flipped === i ? 'flipped' : ''}`}
            key={c.title}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className="cert-card">
              {/* Front Side */}
              <div className="cert-front">
                <img src={c.img} alt={c.title} className="cert-img" />
                <div className="cert-click-hint">
                  <i className="fa-solid fa-circle-info" /> Click to flip
                </div>
              </div>
              
              {/* Back Side */}
              <div className="cert-back">
                <div className="cert-back-content">
                  <i className="fa-solid fa-certificate" />
                  <h3>{c.title}</h3>
                  <div className="cert-meta">
                    <span><i className="fa-solid fa-building-columns" /> {c.issuer}</span>
                    <span><i className="fa-solid fa-calendar" /> {c.date}</span>
                  </div>
                  <p>{c.desc}</p>
                  <span className="cert-close-hint"><i className="fa-solid fa-rotate-left" /> Click to flip back</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
