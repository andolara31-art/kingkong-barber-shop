import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_LINK = 'https://wa.me/50661703398?text=Hola%20King%20Kong%20Barber%20Shop%2C%20quiero%20reservar%20una%20cita%20%F0%9F%92%88'
const IG_LINK = 'https://www.instagram.com/kingkong_barber_/'
const FB_LINK = 'https://www.facebook.com/share/18Eu5HkkHW/'

const socialLinks = [
  {
    label: 'WhatsApp',
    href: WA_LINK,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: IG_LINK,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: FB_LINK,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const linkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-body)',
    fontSize: '0.8125rem',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#666666',
    textDecoration: 'none',
    cursor: 'none',
    transition: 'color 0.2s ease',
  }

  return (
    <footer ref={ref} style={{ position: 'relative', backgroundColor: '#0A0A0A', overflow: 'hidden' }}>
      {/* Sign background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/sign.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.06,
      }} />

      {/* Top line */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />

      <div className="container-site" style={{
        position: 'relative', zIndex: 1,
        paddingBlock: 'clamp(3rem, 6vw, 5rem)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: '2rem', textAlign: 'center',
      }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <div style={{ width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(255,255,255,0.2)' }}>
            <img src="/images/logo.jpg" alt="King Kong Barber Shop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', letterSpacing: '0.08em', color: '#F5F5F5', lineHeight: 0.9, marginBottom: '0.25rem' }}>
              KING KONG
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', letterSpacing: '0.25em', color: '#FFFFFF', textTransform: 'uppercase' }}>
              BARBER SHOP
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontFamily: 'var(--font-accent)', fontSize: '1rem', color: 'rgba(245,245,245,0.4)' }}
        >
          Estilo, presencia y precisión.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ width: '6rem', height: 1, backgroundColor: 'rgba(255,255,255,0.15)', transformOrigin: 'center' }}
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {socialLinks.map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={e => (e.currentTarget.style.color = '#666666')}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.6 }}
          style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.08em' }}
        >
          © 2025 King Kong Barber Shop — Palmares, Alajuela
        </motion.p>
      </div>
    </footer>
  )
}
