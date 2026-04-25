import { useState, useEffect } from 'react'
import './Header.css'

const navItems = ['home','about','skills','experience','projects','certificates','contact']

export default function Header({ theme, setTheme, color, setColor }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY
      document.querySelectorAll('section[id]').forEach(sec => {
        if (scrollY >= sec.offsetTop - 120 && scrollY < sec.offsetTop - 120 + sec.offsetHeight)
          setActive(sec.id)
      })
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={theme === 'light' ? 'light' : ''}>
      <a href="#home" className="logo">Ken<span>.</span></a>
      <nav className={menuOpen ? 'active' : ''}>
        <div className="nav-links">
          {navItems.map(id => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <div className="close-icon" onClick={() => setMenuOpen(false)} />
      </nav>
      <div className="header-right">
        <div className="color-picker">
          {['cyan','pink'].map(c => (
            <button key={c} className={`color-dot ${c} ${color === c ? 'active' : ''}`}
              onClick={() => setColor(c)} aria-label={`${c} theme`} />
          ))}
        </div>
        <button className="theme-toggle" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
          <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} />
        </button>
        <div className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <div className="line" /><div className="line" /><div className="line" />
        </div>
      </div>
    </header>
  )
}
