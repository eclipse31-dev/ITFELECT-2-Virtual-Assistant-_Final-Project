import { useEffect, useRef } from 'react'
import Lanyard from './Lanyard'
import './Hero.css'

const texts = ['Web Developer', 'UI-UX Designer', 'IT Student', 'Tech Enthusiast']

export default function Hero() {
  const spanRef = useRef(null)
  const state = useRef({ index: 0, charIndex: 0, isDeleting: false })

  useEffect(() => {
    let timeout
    function type() {
      const { index, charIndex, isDeleting } = state.current
      const current = texts[index]
      if (spanRef.current) {
        spanRef.current.textContent = isDeleting ? current.slice(0, charIndex - 1) : current.slice(0, charIndex + 1)
      }
      if (!isDeleting && charIndex + 1 === current.length) {
        state.current = { index, charIndex: charIndex + 1, isDeleting: true }
        timeout = setTimeout(type, 1500)
        return
      }
      if (isDeleting && charIndex - 1 === 0) {
        state.current = { index: (index + 1) % texts.length, charIndex: 0, isDeleting: false }
      } else {
        state.current = { index, charIndex: isDeleting ? charIndex - 1 : charIndex + 1, isDeleting }
      }
      timeout = setTimeout(type, isDeleting ? 80 : 150)
    }
    timeout = setTimeout(type, 150)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className="home">
      <div className="home-img">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
      <div className="home-content">
        <p className="greeting">Hello, I'm</p>
        <h1>Ken Andrei <span>Usa</span></h1>
        <h3 className="typing-text">I'm a <span ref={spanRef}></span></h3>
        <p className="hero-desc">
          A passionate web developer and tech enthusiast specializing in creating responsive, 
          user-focused web applications. Experienced in live streaming production with OBS Studio 
          and multimedia integration, bringing creative solutions to life.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/kenandrei.duran" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook" />
          </a>
          <a href="https://github.com/eclipse31-dev" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href="https://www.linkedin.com/in/ken-d-usa-9a4561327/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="https://www.instagram.com/si_kenusa/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram" />
          </a>
        </div>
        <div className="hero-btns">
          <a href="#contact" className="btn">
            <i className="fa-solid fa-envelope" /> Let's Talk
          </a>
          <a href="/resume/Usa_Resume.pdf" className="btn btn-outline" download>
            <i className="fa-solid fa-download" /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
