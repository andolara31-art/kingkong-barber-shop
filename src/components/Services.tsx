import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/50661703398?text=Hola%20King%20Kong%20Barber%20Shop%2C%20quiero%20reservar%20una%20cita%20%F0%9F%92%88'

const services = [
  {
    id: 'corte',
    name: 'Corte',
    price: '₡5,000',
    desc: 'Fade, taper, clásico o a tu estilo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    bgImage: null,
  },
  {
    id: 'barba',
    name: 'Barba',
    price: '₡3,000',
    desc: 'Delineado, navaja recta y cera.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
        <path d="M3 7V5c0-1.1.9-2 2-2h2" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-3" />
        <path d="M21 7V5c0-1.1-.9-2-2-2h-2" />
        <path d="M17 22h3a2 2 0 0 0 2-2v-3" />
        <path d="M8 12a2 2 0 0 0 2-2V7H7v3a2 2 0 0 0 1 1.73" />
        <path d="M16 12a2 2 0 0 1-2-2V7h3v3a2 2 0 0 1-1 1.73" />
        <path d="M12 12v3" />
        <path d="M9.5 18a2.5 2.5 0 0 0 5 0v-3h-5v3z" />
      </svg>
    ),
    bgImage: '/images/services-beard.jpg',
  },
  {
    id: 'combo',
    name: 'Corte + Barba',
    price: '₡7,000',
    desc: 'El combo completo. La experiencia King Kong.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 1 0-16 0" />
        <path d="M12 13v8" />
        <path d="m15 18-3 3-3-3" />
      </svg>
    ),
    bgImage: null,
    featured: true,
  },
  {
    id: 'cejas',
    name: 'Cejas',
    price: '₡1,500',
    desc: 'Delineado y diseño de cejas preciso.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
        <path d="M2 12c2-4 6-6 10-6s8 2 10 6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    bgImage: null,
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: service.featured ? 'rgba(201,168,76,0.06)' : '#1A1A1A',
        border: `1px solid ${service.featured ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.06)'}`,
        padding: '2rem',
        cursor: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
        minHeight: 220,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      whileHover={{
        borderColor: 'rgba(201,168,76,0.6)',
        boxShadow: '0 0 32px rgba(201,168,76,0.15)',
        y: -4,
      }}
    >
      {/* Background image (barba card) */}
      {service.bgImage && (
        <>
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${service.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(26,26,26,0.9), rgba(26,26,26,0.7))',
          }} />
        </>
      )}

      {/* Featured badge */}
      {service.featured && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: '#C9A84C',
          color: '#0A0A0A',
          fontFamily: 'var(--font-body)',
          fontSize: '0.625rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '0.25rem 0.625rem',
        }}>
          POPULAR
        </div>
      )}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Icon */}
        <div style={{ color: '#C9A84C', marginBottom: '1rem' }}>
          {service.icon}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.75rem',
          letterSpacing: '0.06em',
          color: '#F5F5F5',
          marginBottom: '0.5rem',
          lineHeight: 1,
        }}>
          {service.name}
        </h3>

        {/* Desc */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          color: '#888888',
          lineHeight: 1.5,
          marginBottom: '1.25rem',
        }}>
          {service.desc}
        </p>
      </div>

      {/* Price + CTA */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          color: '#C9A84C',
          letterSpacing: '0.04em',
        }}>
          {service.price}
        </span>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(201,168,76,0.4)',
            paddingBottom: 2,
            cursor: 'none',
            transition: 'color 0.2s ease, border-color 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#E2C06E'
            e.currentTarget.style.borderColor = '#E2C06E'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#C9A84C'
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
          }}
        >
          Reservar →
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section
      id="servicios"
      style={{
        backgroundColor: '#0A0A0A',
        padding: 'clamp(4rem, 8vw, 7rem) 0',
      }}
    >
      <div className="container-site">
        {/* Section header */}
        <div ref={titleRef} style={{ marginBottom: '3.5rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
            style={{ marginBottom: '0.75rem' }}
          >
            Precios
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
            LO QUE<br />
            <span style={{ color: '#C9A84C' }}>HACEMOS</span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1px',
          backgroundColor: 'rgba(255,255,255,0.04)',
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            marginTop: '2rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: '#555555',
            textAlign: 'center',
            letterSpacing: '0.04em',
          }}
        >
          Por cita preferiblemente — walk-ins bienvenidos si hay disponibilidad
        </motion.p>
      </div>
    </section>
  )
}
