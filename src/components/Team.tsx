import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const WA_LINK = 'https://wa.me/50661703398?text=Hola%20King%20Kong%20Barber%20Shop%2C%20quiero%20reservar%20una%20cita%20%F0%9F%92%88'

const barbers = [
  {
    id: 1,
    name: 'THE ARTIST',
    role: 'Maestro Barbero',
    years: '8+ años de experiencia',
    spec: 'Especialista en diseños y fades',
    image: '/images/team-1.jpg',
    quote: 'Cada corte es una firma.',
  },
  {
    id: 2,
    name: 'THE CRAFTSMAN',
    role: 'Barbero de Autor',
    years: 'Estilo urbano',
    spec: 'Fades y cortes de autor',
    image: '/images/team-2.jpg',
    quote: 'El arte vive en los detalles.',
  },
]

function BarberCard({ barber, index }: { barber: typeof barbers[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Photo */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '3/4',
        backgroundColor: '#1A1A1A',
        marginBottom: '1.5rem',
      }}>
        <motion.img
          src={barber.image}
          alt={barber.name}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: '-8%',
            width: '116%',
            height: '116%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'grayscale(100%) contrast(1.1)',
            y: imgY,
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 60%, transparent 100%)',
        }} />

        {/* Quote */}
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-accent)',
            fontSize: '1rem',
            color: 'rgba(245,245,245,0.7)',
            lineHeight: 1.4,
            marginBottom: '0.75rem',
          }}>
            "{barber.quote}"
          </p>
          <div style={{ width: '2.5rem', height: '1.5px', backgroundColor: '#FFFFFF', opacity: 0.4 }} />
        </div>

        {/* Number */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontFamily: 'var(--font-display)',
          fontSize: '5rem',
          color: 'rgba(255,255,255,0.05)',
          lineHeight: 1,
          userSelect: 'none',
        }}>
          0{barber.id}
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          letterSpacing: '0.06em',
          color: '#FFFFFF',
          marginBottom: '0.25rem',
          lineHeight: 1,
        }}>
          {barber.name}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#AAAAAA',
          marginBottom: '0.5rem',
        }}>
          {barber.role}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          color: '#666666',
          lineHeight: 1.5,
        }}>
          {barber.years} | {barber.spec}
        </p>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' })

  return (
    <section id="equipo" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
      <div className="container-site">
        <div ref={titleRef} style={{ marginBottom: '4rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label"
            style={{ marginBottom: '0.75rem' }}
          >
            El Equipo
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
            LOS<br />
            <span style={{ color: '#FFFFFF' }}>ARTISTAS</span>
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', maxWidth: 800 }}>
          {barbers.map((b, i) => <BarberCard key={b.id} barber={b} index={i} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ marginTop: '3rem' }}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
            Reservar con tu barbero →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
