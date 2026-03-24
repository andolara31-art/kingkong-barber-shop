import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/images/gallery-fade-tattoo.jpg', alt: 'Fade limpio con tattoo en cuello', aspect: 'portrait' },
  { src: '/images/hero-barber.jpg',          alt: 'Barbero trabajando diseño complejo', aspect: 'landscape' },
  { src: '/images/gallery-fade-lateral.jpg', alt: 'Fade lateral con textura arriba', aspect: 'portrait' },
  { src: '/images/services-beard.jpg',        alt: 'Afeitado con navaja recta', aspect: 'portrait' },
  { src: '/images/gallery-fade-alto.jpg',     alt: 'Fade alto en progreso', aspect: 'portrait' },
  { src: '/images/team-2.jpg',                alt: 'Barbero artesano trabajando', aspect: 'landscape' },
]

function PhotoCard({ photo, index, onClick }: {
  photo: typeof photos[0]
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'none',
        backgroundColor: '#1A1A1A',
        aspectRatio: photo.aspect === 'landscape' ? '4/3' : '3/4',
      }}
      whileHover={{ scale: 1.01 }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(10,10,10,0.55)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          width: 48,
          height: 48,
          border: '1.5px solid rgba(255,255,255,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={1.5} style={{ width: 20, height: 20 }}>
            <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
            <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
            <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
            <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
          </svg>
        </div>
      </motion.div>

      {/* White bottom accent */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '40%',
        height: 1,
        background: 'linear-gradient(90deg, rgba(255,255,255,0.4), transparent)',
      }} />
    </motion.div>
  )
}

function Lightbox({ photo, onClose, onPrev, onNext }: {
  photo: typeof photos[0]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    document.body.classList.add('lightbox-open')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('lightbox-open')
    }
  }, [onClose, onPrev, onNext])

  const btnStyle: React.CSSProperties = {
    background: 'rgba(10,10,10,0.7)',
    border: '1px solid rgba(255,255,255,0.2)',
    color: '#FFFFFF',
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'none',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.94)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <motion.img
        key={photo.src}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        src={photo.src}
        alt={photo.alt}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', boxShadow: '0 0 80px rgba(0,0,0,0.8)' }}
      />

      {/* Close */}
      <button onClick={onClose} aria-label="Cerrar" style={{ ...btnStyle, position: 'absolute', top: '1rem', right: '1rem' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 18, height: 18 }}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button onClick={e => { e.stopPropagation(); onPrev() }} aria-label="Anterior"
        style={{ ...btnStyle, position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 18, height: 18 }}>
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Next */}
      <button onClick={e => { e.stopPropagation(); onNext() }} aria-label="Siguiente"
        style={{ ...btnStyle, position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} style={{ width: 18, height: 18 }}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.8125rem',
        color: 'rgba(245,245,245,0.5)',
        letterSpacing: '0.06em',
        whiteSpace: 'nowrap',
      }}>
        {photo.alt}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="galeria" style={{ backgroundColor: '#111111', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
      <div className="container-site">
        <div ref={titleRef} style={{ marginBottom: '3rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
            style={{ marginBottom: '0.75rem' }}
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 0.95,
              color: '#F5F5F5',
            }}
          >
            NUESTRO TRABAJO<br />
            <span style={{ color: '#FFFFFF' }}>HABLA SOLO</span>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }} className="gallery-grid">
          {photos.map((photo, i) => (
            <PhotoCard key={photo.src} photo={photo} index={i} onClick={() => setLightboxIdx(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            photo={photos[lightboxIdx]}
            onClose={() => setLightboxIdx(null)}
            onPrev={() => setLightboxIdx(i => i !== null ? (i - 1 + photos.length) % photos.length : 0)}
            onNext={() => setLightboxIdx(i => i !== null ? (i + 1) % photos.length : 0)}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
