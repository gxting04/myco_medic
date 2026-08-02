import React from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

// Shared easing — a smooth, slightly overshooting curve used across the site
export const EASE = [0.22, 1, 0.36, 1]

// Variants for a staggered container (use with <motion.* variants={staggerContainer()}>)
export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

// A single fade-up child item, pairs with staggerContainer
export const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/**
 * Reveal — fades + slides its children in when scrolled into view.
 * Respects prefers-reduced-motion (fades only, no movement).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  as = 'div',
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}

/**
 * ScrollProgress — a thin bar pinned to the very top that fills as the
 * page is scrolled. Subtle, modern, and unobtrusive.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[120] h-[3px] origin-left bg-primary"
      aria-hidden="true"
    />
  )
}
