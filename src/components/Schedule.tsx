import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/50661703398?text=Hola%20King%20Kong%20Barber%20Shop%2C%20quiero%20reservar%20una%20cita%20%F0%9F%92%88'

const schedule = [
  { days: 'Lunes — Viernes', hours: '9:00 AM – 8:00 PM' },
  { days: 'Sábados',         hours: '8:00 AM – 8:00 PM' },
  { days: 'Domingos',        hours: '9:00 AM – 3:00 PM' },
]

export default function Schedule() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="horarios"
      ref={ref}
      style={{
        backgroundColor: '#111111',
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `repeating-linear-gradient(
          45deg, transparent, transparent 60px,
          rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px
        )`,
        pointerEvents: 'none',
      }} />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>

          {/* Left: Schedule */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label"
              style={{ marginBottom: '0.75rem' }}
            >
              Horarios
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                lineHeight: 0.95,
                color: '#F5F5F5',
                marginBottom: '2rem',
              }}
            >
              ABIERTO<br />
              <span style={{ color: '#FFFFFF' }}>PARA TI</span>
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {schedule.map((item, i) => (
                <motion.div
                  key={item.days}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    borderBottom: i < schedule.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    gap: '1rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: '#AAAAAA',
                  }}>
                    {item.days}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    letterSpacing: '0.04em',
                    color: '#F5F5F5',
                    textAlign: 'right',
                  }}>
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                marginTop: '1.25rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                color: '#555555',
                lineHeight: 1.5,
              }}
            >
              * También atendemos walk-ins si hay barbero disponible
            </motion.p>
          </div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '0.75rem',
              }}>
                Reservas
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                lineHeight: 0.95,
                color: '#F5F5F5',
                marginBottom: '1rem',
              }}>
                RESERVÁ<br />TU CITA
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: '#888888',
                lineHeight: 1.6,
              }}>
                Asegurá tu turno por WhatsApp. Rápido, fácil y sin complicaciones.
              </p>
            </div>

            {/* Phone */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem',
              border: '1px solid rgba(255,255,255,0.1)',
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <svg viewBox="0 0 24 24" fill="white" style={{ width: 20, height: 20 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.6875rem',
                  color: '#666666',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 2,
                }}>WhatsApp</p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  color: '#F5F5F5',
                  letterSpacing: '0.06em',
                }}>+506 6170-3398</p>
              </div>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              RESERVAR POR WHATSAPP
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
