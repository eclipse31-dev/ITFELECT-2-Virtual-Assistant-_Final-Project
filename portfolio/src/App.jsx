import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import './App.css'

const techIcons = [
  { icon: 'fa-brands fa-react',   label: 'React',       left: '5%',  top: '8%'  },
  { icon: 'fa-brands fa-laravel', label: 'Laravel',     left: '15%', top: '30%' },
  { icon: 'fa-brands fa-git-alt', label: 'Git',         left: '8%',  top: '55%' },
  { icon: 'fa-brands fa-github',  label: 'GitHub',      left: '20%', top: '75%' },
  { icon: 'fa-solid fa-code',     label: 'VS Code',     left: '3%',  top: '90%' },
  { icon: 'fa-brands fa-java',    label: 'Java',        left: '78%', top: '10%' },
  { icon: 'fa-solid fa-database', label: 'NetBeans',    left: '88%', top: '35%' },
  { icon: 'fa-brands fa-js',      label: 'JavaScript',  left: '82%', top: '60%' },
  { icon: 'fa-brands fa-css3-alt',label: 'CSS3',        left: '92%', top: '80%' },
  { icon: 'fa-brands fa-html5',   label: 'HTML5',       left: '75%', top: '90%' },
  { icon: 'fa-brands fa-php',     label: 'PHP',         left: '45%', top: '5%'  },
  { icon: 'fa-brands fa-node',    label: 'Node',        left: '55%', top: '95%' },
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [color, setColor] = useState(() => localStorage.getItem('colorTheme') || 'cyan')
  const [lightboxSrc, setLightboxSrc] = useState(null)

  useEffect(() => {
    document.body.className = [
      theme === 'light' ? 'light-mode' : '',
      color === 'pink' ? 'pink-theme' : ''
    ].join(' ').trim()
    localStorage.setItem('theme', theme)
    localStorage.setItem('colorTheme', color)
  }, [theme, color])

  return (
    <>
      {/* Global floating tech stack background */}
      <div className="tech-bg-global" aria-hidden="true">
        {techIcons.map((t, i) => (
          <div className="tech-float" key={t.label} style={{ '--i': i, left: t.left, top: t.top }}>
            <i className={t.icon} />
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      <Header theme={theme} setTheme={setTheme} color={color} setColor={setColor} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects onImageClick={setLightboxSrc} />
      <Contact />
      <Footer />
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  )
}

export default App
