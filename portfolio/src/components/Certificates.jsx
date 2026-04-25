import { useState, useEffect, useRef } from 'react'
import Lightbox from './Lightbox'
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
  const [lightboxSrc, setLightboxSrc] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 150)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.cert-card').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-title">
        <h2>My <span>Certificates</span></h2>
        <p className="section-sub">Achievements & recognitions</p>
      </div>
      <div className="certs-grid" ref={ref}>
        {certs.map((c) => (
          <div className="cert-card reveal" key={c.title}>
            <div className="cert-img" onClick={() => setLightboxSrc(c.img)}>
              <img src={c.img} alt={c.title} />
              <div className="cert-overlay"><i className="fa-solid fa-magnifying-glass-plus" /></div>
            </div>
            <div className="cert-body">
              <h3 className="cert-title">{c.title}</h3>
              <div className="cert-meta">
                <span><i className="fa-solid fa-building-columns" /> {c.issuer}</span>
                <span><i className="fa-solid fa-calendar" /> {c.date}</span>
              </div>
              <p className="cert-desc">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </section>
  )
}
