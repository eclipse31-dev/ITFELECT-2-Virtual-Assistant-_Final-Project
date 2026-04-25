import { useState, useEffect, useRef } from 'react'
import './Certificates.css'

const certs = [
  {
    img: '/certificate/Certificate of Participation.png',
    title: 'Certificate of Participation',
    issuer: 'University of the Immaculate Conception',
    date: '2024',
    desc: 'Awarded for active participation in a university-organized seminar or event, demonstrating commitment to continuous learning and professional development.',
  },
  {
    img: '/certificate/Certificate_Ken Andrei Usa.png',
    title: 'E-Toolkit: Emerging Educational Technology Tools',
    issuer: 'UIC — Workshop / Seminar',
    date: '2024',
    desc: 'Completed a workshop on emerging educational technology tools, gaining hands-on experience with modern digital tools used in education and e-learning environments.',
  },
  {
    img: '/certificate/PSITS_ESPORTS TECHNICAL DERICTOR.png',
    title: 'PSITS Esports Technical Director',
    issuer: 'PSITS Region 11',
    date: '2023 – Present',
    desc: 'Recognized as the official Esports Technical Director of PSITS Region 11, overseeing live stream production, tournament operations, and broadcast quality for regional IT student competitions.',
  },
]

export default function Certificates() {
  const [flipped, setFlipped] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.cert-card').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-title">
        <h2>My <span>Certificates</span></h2>
        <p className="section-sub">Click a certificate to see details</p>
      </div>
      <div className="certs-grid" ref={ref}>
        {certs.map((c, i) => (
          <div
            className={`cert-card reveal ${flipped === i ? 'flipped' : ''}`}
            key={c.title}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className="cert-inner">
              {/* FRONT — full image */}
              <div className="cert-front">
                <img src={c.img} alt={c.title} />
                <div className="cert-hint"><i className="fa-solid fa-rotate" /> Click to see details</div>
              </div>
              {/* BACK — description */}
              <div className="cert-back">
                <i className="fa-solid fa-certificate cert-back-icon" />
                <h3>{c.title}</h3>
                <div className="cert-meta">
                  <span><i className="fa-solid fa-building-columns" /> {c.issuer}</span>
                  <span><i className="fa-solid fa-calendar" /> {c.date}</span>
                </div>
                <p>{c.desc}</p>
                <button className="cert-close">
                  <i className="fa-solid fa-rotate-left" /> Flip back
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
