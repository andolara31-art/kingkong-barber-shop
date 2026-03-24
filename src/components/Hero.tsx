import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/50661703398?text=Hola%20King%20Kong%20Barber%20Shop%2C%20quiero%20reservar%20una%20cita%20%F0%9F%92%88'

function AnimatedText({ text, delay = 0, style }: { text: string; delay?: number; style?: React.CSSProperties }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden', ...style }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

function Particle({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: 2,
        height: 2,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.5)',
        pointerEvents: 'none',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0], y: [0, -40, -80] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: 30 + Math.random() * 60,
  delay: Math.random() * 4,
}))

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true)
  }, [])

  const scrollToGallery = () => {
    document.querySelector('#galeria')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A',
      }}
    >
      <img
        ref={imgRef}
        src="/images/hero-barber.jpg"
        alt="Barbero King Kong trabajando en diseño complejo"
        onLoad={() => setLoaded(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          transition: 'opacity 1s ease',
          opacity: loaded ? 1 : 0,
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.62) 50%, rgba(10,10,10,0.88) 100%)',
      }} />

      {PARTICLES.map(p => <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} />)}

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1.25rem',
        width: '100%',
        maxWidth: 900,
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            border: '1px solid rgba(255,255,255,0.25)',
            padding: '0.375rem 1rem',
            marginBottom: '1.5rem',
            backgroundColor: 'rgba(255,255,255,0.04)',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#FFFFFF', flexShrink: 0, display: 'inline-block' }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
          }}>PALMARES, ALAJUELA</span>
        </motion.div>

        {/* H1 */}
        <div style={{
          overflow: 'hidden',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(72px, 14vw, 140px)',
          lineHeight: 0.9,
          color: '#F5F5F5',
          marginBottom: '0.25rem',
        }}>
          <AnimatedText text="KING KONG" delay={0.4} />
        </div>

        {/* H2 */}
        <div style={{
          overflow: 'hidden',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 7vw, 72px)',
          lineHeight: 1,
          color: '#FFFFFF',
          marginBottom: '1.5rem',
          letterSpacing: '0.08em',
        }}>
          <AnimatedText text="BARBER SHOP" delay={0.9} />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-accent)',
            fontSize: 'clamp(1rem, 2.5vw, 1.375rem)',
            color: 'rgba(245,245,245,0.8)',
            marginBottom: '2.5rem',
            lineHeight: 1.5,
          }}
        >
          No vendemos cortes. Creamos identidad.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', padding: '0.875rem 2.25rem' }}
          >
            RESERVAR AHORA
          </a>
          <button
            onClick={scrollToGallery}
            className="btn-outline-gold"
            style={{ background: 'none', cursor: 'none' }}
          >
            Ver trabajos ↓
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
