import './Experience.css'

const items = [
  { date: '2023 – Present', title: 'Esports Technical Director', org: 'PSITS Region 11 (Philippine Society of IT Students)', desc: 'Overseeing technical operations of competitive tournaments across Dota 2, Valorant, CS2, Mobile Legends, and Call of Duty Mobile. Managing live stream production using OBS Studio.' },
  { date: 'Ongoing', title: 'Technical Event Support (Volunteer)', org: 'University Events & Workshops', desc: 'Provide technical support for university events — setting up projectors, microphones, audio-visual equipment, and troubleshooting on-site technical issues.' },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-title"><h2>Experience & <span>Background</span></h2><p className="section-sub">My journey so far</p></div>
      <div className="timeline">
        {items.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.title}</h3>
              <h4>{item.org}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
