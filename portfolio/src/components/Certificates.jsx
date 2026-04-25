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
  const [active, setActive] = useState(null)
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
        <p className="section-sub">Click a certificate to see details</p>
      </div>
      <div className="certs-grid" ref={ref}>
        {certs.map((c, i) => (
          <div
            className={`cert-card reveal ${active === i ? 'expanded' : ''}`}
            key={c.title}
            onClick={() => setActive(active === i ? null : i)}
          >
            <img src={c.img} alt={c.title} className="cert-img" />
            <div className="cert-overlay-info">
              <i className="fa-solid fa-certificate" />
              <h3>{c.title}</h3>
              <div className="cert-meta">
                <span><i className="fa-solid fa-building-columns" /> {c.issuer}</span>
                <span><i className="fa-solid fa-calendar" /> {c.date}</span>
              </div>
              <p>{c.desc}</p>
              <span className="cert-close-hint"><i className="fa-solid fa-chevron-down" /> Click to close</span>
            </div>
            {active !== i && (
              <div className="cert-click-hint">
                <i className="fa-solid fa-circle-info" /> Click for details
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
