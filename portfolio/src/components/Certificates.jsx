import { useState } from 'react'
import Lightbox from './Lightbox'
import './Certificates.css'

const certs = [
  {
    img: '/certificate/Certificate of Participation.png',
    title: 'Certificate of Participation',
  },
  {
    img: '/certificate/Certificate_Ken Andrei Usa.png',
    title: 'Certificate — Ken Andrei Usa',
  },
  {
    img: '/certificate/PSITS_ESPORTS TECHNICAL DERICTOR.png',
    title: 'PSITS Esports Technical Director',
  },
]

export default function Certificates() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-title">
        <h2>My <span>Certificates</span></h2>
        <p className="section-sub">Achievements & recognitions</p>
      </div>
      <div className="certs-grid">
        {certs.map((c) => (
          <div className="cert-card" key={c.title} onClick={() => setLightboxSrc(c.img)}>
            <div className="cert-img">
              <img src={c.img} alt={c.title} />
              <div className="cert-overlay"><i className="fa-solid fa-magnifying-glass-plus" /></div>
            </div>
            <p className="cert-title">{c.title}</p>
          </div>
        ))}
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </section>
  )
}
