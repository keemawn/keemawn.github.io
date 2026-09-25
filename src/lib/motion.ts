import type { Variants } from 'framer-motion'

export const easeOut = [0.23, 1, 0.32, 1] as const
export const easeInOut = [0.77, 0, 0.175, 1] as const

export const viewportOnce = { once: true, margin: '-80px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: easeOut } },
}

export function stagger(gap = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren } },
  }
}

// Apple's "Designing Fluid Interfaces": critically damped by default, a touch of
// bounce only for momentum-carrying, directly-touched interactions (hover/press).
export const springSettle = { type: 'spring', duration: 0.5, bounce: 0 } as const
export const springTouch = { type: 'spring', duration: 0.45, bounce: 0.22 } as const
