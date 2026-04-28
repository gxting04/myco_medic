import React, { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = Array.from({ length: 12 }, (_, i) => ({
  src: `/activity_${11 + i}.jpeg`,
  alt: 'Exhibition'
}))

const SLIDE_MS = 5500

function Exhibition() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const n = slides.length

  const goNext = useCallback(() => {
    setSlide((i) => (i + 1) % n)
  }, [n])

  const goPrev = useCallback(() => {
    setSlide((i) => (i - 1 + n) % n)
  }, [n])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(goNext, SLIDE_MS)
    return () => clearInterval(t)
  }, [paused, goNext])

  const current = slides[slide]

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3 md:mb-4">
            Exhibition
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
            Moments from our exhibitions, trade events, and industry showcases.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[min(70vh,640px)] rounded-2xl overflow-hidden bg-gray-100 shadow-lg ring-1 ring-gray-200/80">
              <div className="absolute inset-0">
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  loading={slide === 0 ? 'eager' : 'lazy'}
                  className="h-full w-full object-contain"
                />
              </div>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow-md transition hover:bg-white"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
              {slides.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === slide
                      ? 'w-7 sm:w-8 bg-primary'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === slide}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exhibition
