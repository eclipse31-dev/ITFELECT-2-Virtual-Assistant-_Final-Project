import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-title"><h2>Get In <span>Touch</span></h2><p className="section-sub">Let's work together</p></div>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.</p>
          <div className="contact-details">
            <div className="contact-detail-item"><i className="fa-solid fa-envelope" /><span>kusa_230000002006@uic.edu.ph</span></div>
            <div className="contact-detail-item"><i className="fa-solid fa-location-dot" /><span>Davao City, Philippines</span></div>
          </div>
          <div className="social-links">
            {[['fa-facebook','https://www.facebook.com/kenandrei.duran','Facebook'],['fa-linkedin','https://www.linkedin.com/in/ken-d-usa-9a4561327/','LinkedIn'],['fa-github','https://github.com/eclipse31-dev','GitHub'],['fa-instagram','https://www.instagram.com/si_kenusa/','Instagram']].map(([icon,href,label]) => (
              <a key={icon} href={href} target="_blank" rel="noreferrer" aria-label={label}><i className={`fa-brands ${icon}`} /></a>
            ))}
          </div>
          <a href="/resume/Usa_Resume.pdf" className="btn" download style={{marginTop:'2rem',display:'inline-flex'}}>
            <i className="fa-solid fa-file-pdf" /> Download Resume
          </a>
        </div>
        <form className="contact-form" action="https://formspree.io/f/xgveoywy" method="POST">
          <div className="form-group"><input type="text" name="name" placeholder="Your Name" required /></div>
          <div className="form-group"><input type="email" name="email" placeholder="Your Email" required /></div>
          <div className="form-group"><textarea name="message" placeholder="Your Message" rows="5" required /></div>
          <button type="submit" className="btn btn-full">Send Message <i className="fa-solid fa-paper-plane" /></button>
        </form>
      </div>
    </section>
  )
}
