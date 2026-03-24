import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_LINK = 'https://wa.me/50661703398?text=Hola%20King%20Kong%20Barber%20Shop%2C%20quiero%20reservar%20una%20cita%20%F0%9F%92%88'
const IG_LINK = 'https://www.instagram.com/kinkongbarber.shop'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const [waHovered, setWaHovered] = useState(false)
  const [igHovered, setIgHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const btnBase: React.CSSProperties = {
    width: 52,
    height: 52,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'none',
    textDecoration: 'none',
    flexShrink: 0,
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            position: 'fixed',
            bottom: '1.75rem',
            right: '1.75rem',
            zIndex: 500,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.625rem',
          }}
        >
          {/* Instagram button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <AnimatePresence>
              {igHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '0.5rem 0.875rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: '#F5F5F5', letterSpacing: '0.04em' }}>
                    @kinkongbarber.shop
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram King Kong Barber Shop"
              onMouseEnter={() => setIgHovered(true)}
              onMouseLeave={() => setIgHovered(false)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                ...btnBase,
                background: 'linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </motion.a>
          </div>

          {/* WhatsApp button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <AnimatePresence>
              {waHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.15)',
                    padding: '0.5rem 0.875rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, color: '#F5F5F5', marginBottom: 2, letterSpacing: '0.04em' }}>
                    Reservar cita
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.6875rem', color: '#888888' }}>
                    +506 6170-3398
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar cita por WhatsApp"
              onMouseEnter={() => setWaHovered(true)}
              onMouseLeave={() => setWaHovered(false)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              style={{
                ...btnBase,
                width: 58,
                height: 58,
                backgroundColor: '#25D366',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              }}
            >
              <svg viewBox="0 0 24 24" fill="white" style={{ width: 28, height: 28 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
