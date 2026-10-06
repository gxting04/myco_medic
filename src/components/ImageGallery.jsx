import React, { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, ImageOff, X } from 'lucide-react'
import { useEscapeKey, useLockBodyScroll } from '@/lib/hooks'

/**
 * Product image gallery: main image + thumbnails, arrow navigation, and a
 * full-screen lightbox (click the image; ←/→ to move, Esc to close).
 */
function ImageGallery({ images, alt }) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [failed, setFailed] = useState(() => new Set())
  const count = images.length
  const markFailed = (src) => setFailed((prev) => new Set(prev).add(src))

  useEffect(() => setIndex(0), [images])

  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])

  useLockBodyScroll(lightbox)
  useEscapeKey(lightbox, () => setLightbox(false))

  useEffect(() => {
    if (!lightbox || count < 2) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, count, prev, next])

  if (!count) return null

  return (
    <div>
      <div className="group relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-gray-50/60">
        {failed.has(images[index]) ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400">
            <ImageOff className="h-8 w-8" strokeWidth={1.5} />
            <span className="text-sm">Image coming soon</span>
          </div>
        ) : (
          <button type="button" onClick={() => setLightbox(true)} className="absolute inset-0 cursor-zoom-in" aria-label="Open image full screen">
            <img
              key={images[index]}
              src={images[index]}
              alt={count > 1 ? `${alt} — view ${index + 1}` : alt}
              onError={() => markFailed(images[index])}
              className="h-full w-full object-contain p-6 sm:p-10"
            />
          </button>
        )}
        <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-gray-500 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          <Expand className="h-4 w-4" />
        </span>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-sm transition hover:text-gray-900 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-700 shadow-sm transition hover:text-gray-900 sm:opacity-0 sm:group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-600 shadow-sm">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setIndex(i)}
              className={`aspect-square overflow-hidden rounded-lg border bg-gray-50/60 transition ${
                i === index ? 'border-primary ring-1 ring-primary' : 'border-gray-200 hover:border-gray-400'
              }`}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-contain p-1.5" />
            </button>
          ))}
        </div>
      )}

      {createPortal(
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-[250] flex items-center justify-center bg-gray-950/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Image viewer"
            >
              <img
                src={images[index]}
                alt={alt}
                className="max-h-[88vh] max-w-[92vw] rounded-lg bg-white object-contain p-4"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                type="button"
                onClick={() => setLightbox(false)}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
                aria-label="Close image viewer"
              >
                <X className="h-6 w-6" />
              </button>
              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      prev()
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      next()
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-white/70">
                    {index + 1} / {count}
                  </span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  )
}

export default ImageGallery
