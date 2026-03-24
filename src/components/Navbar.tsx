import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const WA_LINK = 'https://wa.me/50661703398?text=Hola%20King%20Kong%20Barber%20Shop%2C%20quiero%20reservar%20una%20cita%20%F0%9F%92%88'
const IG_LINK = 'https://www.instagram.com/kingkong_barber_/'
const FB_LINK = 'https://www.facebook.com/share/18Eu5HkkHW/'

const navLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería',   href: '#galeria'   },
  { label: 'Horarios',  href: '#horarios'  },
]

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const linkStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.8125rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#888888',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'none',
    display: 'flex',
    alignItems: 'center',
  }

  const socialLinks = [
    { href: IG_LINK, label: 'Instagram', icon: <InstagramIcon size={17} /> },
    { href: FB_LINK, label: 'Facebook',  icon: <FacebookIcon  size={17} /> },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
        backgroundColor: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="container-site">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', cursor: 'none' }}
          >
            <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(255,255,255,0.2)', flexShrink: 0 }}>
              <img src="https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-21%20at%201.41.46%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0yMSBhdCAxLjQxLjQ2IFBNLmpwZWciLCJpYXQiOjE3NzQzOTE1NTMsImV4cCI6MTgwNTkyNzU1M30.gx2xn4FIxmWA2SGi1CFGpFjlkz5SX6qSdIZx_eYrp1k" alt="King Kong Barber Shop Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'transparent' }} loading="eager" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '0.1em', color: '#F5F5F5', lineHeight: 1 }}>KING KONG</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.25em', color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1, marginTop: 2 }}>BARBER SHOP</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="hidden-mobile">
            {navLinks.map(link => (
              <a key={link.href} href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
              >
                {link.label}
              </a>
            ))}

            {/* Social icons */}
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                style={{ ...linkStyle, gap: 0 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
              >
                {s.icon}
              </a>
            ))}

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: '0.8125rem', padding: '0.625rem 1.5rem' }}>
              Reservar Cita
            </a>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú"
            style={{ background: 'none', border: 'none', padding: '0.5rem', cursor: 'none', display: 'none' }}
            className="show-mobile"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[0, 1, 2].map(i => (
                <motion.span key={i}
                  animate={menuOpen ? {
                    rotate: i === 0 ? 45 : i === 2 ? -45 : 0,
                    y: i === 0 ? 9 : i === 2 ? -9 : 0,
                    opacity: i === 1 ? 0 : 1,
                  } : { rotate: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'block', width: 24, height: 1.5, backgroundColor: '#FFFFFF', transformOrigin: 'center' }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ overflow: 'hidden', backgroundColor: 'rgba(10,10,10,0.98)', borderTop: menuOpen ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
      >
        <div className="container-site" style={{ paddingBlock: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
              style={{ ...linkStyle, fontSize: '0.9375rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {link.label}
            </a>
          ))}

          {/* Social links in mobile menu */}
          <div style={{ display: 'flex', gap: '1.5rem', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ ...linkStyle, gap: '0.4rem', fontSize: '0.9rem' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>

          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold"
            style={{ marginTop: '0.5rem', width: '100%', justifyContent: 'center' }}
          >
            Reservar Cita
          </a>
        </div>
      </motion.div>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px)  { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }
      `}</style>
    </motion.nav>
  )
}
