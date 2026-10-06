import { useEffect } from 'react'

/** Locks page scroll while `active` (modals, drawers, the mobile menu). */
export function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return
    const { overflow, paddingRight } = document.body.style
    // Compensate for the vanished scrollbar so the page does not jump sideways.
    const gap = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (gap > 0) document.body.style.paddingRight = `${gap}px`
    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [active])
}

/** Calls `onEscape` when Escape is pressed while `active`. */
export function useEscapeKey(active, onEscape) {
  useEffect(() => {
    if (!active) return
    const onKey = (e) => {
      if (e.key === 'Escape') onEscape()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, onEscape])
}
