import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const dotX = useSpring(mouseX, { damping: 50, stiffness: 400, mass: 0.2 })
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 400, mass: 0.2 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseDown = () => {
      cursorRef.current?.classList.add('scale-75')
    }
    const handleMouseUp = () => {
      cursorRef.current?.classList.remove('scale-75')
    }

    const handleMouseEnterLink = () => {
      cursorRef.current?.classList.add('cursor-hover')
    }
    const handleMouseLeaveLink = () => {
      cursorRef.current?.classList.remove('cursor-hover')
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    const links = document.querySelectorAll('a, button, [role="button"], .cursor-none')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink)
      link.addEventListener('mouseleave', handleMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Outer ring — lerp cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          width: 36,
          height: 36,
          border: '1.5px solid rgba(201, 168, 76, 0.7)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.15s ease',
        }}
        className="scale-75 cursor-hover:scale-150"
      />
      {/* Inner dot */}
      <motion.div
        ref={dotRef}
        style={{
          position: 'fixed',
          left: dotX,
          top: dotY,
          x: '-50%',
          y: '-50%',
          width: 6,
          height: 6,
          backgroundColor: '#C9A84C',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
      />
    </>
  )
}
