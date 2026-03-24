import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const MAPS_LINK = 'https://www.google.com/maps/search/King+Kong+Barber+Shop+Palmares+Alajuela+Costa+Rica'

export default function ThePlace() {
  const ref = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      id="lugar"
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: 600,
        backgroundColor: '#0A0A0A',
      }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          y: bgY,
        }}
      >
        <img
          src="/images/interior.jpg"
          alt="Interior King Kong Barber Shop — pared de mármol blanco y dorado"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.75) 100%)',
      }} />

      {/* Content */}
      <div
        ref={titleRef}
        className="container-site"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingBlock: 'clamp(5rem, 10vw, 9rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.5rem',
        }}
      >
        <motion.p
          initial={{ opacity: 0, x: -24 }}
          animate={titleInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          El Lugar
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 0.95,
            color: '#F5F5F5',
            maxWidth: 600,
          }}
        >
          BIENVENIDO<br />
          <span style={{ color: '#C9A84C' }}>AL REINO</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxWidth: 480,
          }}
        >
          {[
            { icon: '📍', text: 'Palmares, Alajuela, Costa Rica' },
            { icon: '🏢', text: 'Contiguo a Mundo Cosmético' },
            { icon: '🏬', text: 'Segundo piso, tienda Bambú' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div style={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: '#C9A84C',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'rgba(245,245,245,0.8)',
                lineHeight: 1.5,
              }}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ marginTop: '0.5rem' }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ width: 16, height: 16 }}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          ¿Cómo llegar?
        </motion.a>
      </div>

      {/* Decorative gold line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)',
      }} />
    </section>
  )
}
