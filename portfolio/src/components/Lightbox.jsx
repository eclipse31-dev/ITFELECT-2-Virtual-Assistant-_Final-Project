import { useEffect } from 'react'
import './Lightbox.css'

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="lightbox active" role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <span className="lightbox-close" onClick={onClose} aria-label="Close">&times;</span>
      <img src={src} alt="Project Preview" />
    </div>
  )
}
