import React, { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'

const SLIDE_MS = 5500

const events = [
  {
    id: 'psm-32',
    tabLabel: 'PSM Congress',
    title: '32nd Regional Annual Congress of the Perinatal Society of Malaysia (PSM)',
    slides: Array.from({ length: 12 }, (_, i) => ({
      type: 'image',
      src: `/activity_${11 + i}.jpeg`,
      alt: 'PSM regional congress'
    }))
  },
  {
    id: 'hospital-demos',
    tabLabel: 'Hospital demos',
    title: 'Hospital demonstrations & on-site activities',
    slides: [
      ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
        type: 'image',
        src: `/activity_${n}.jpeg`,
        alt: 'Hospital demonstration'
      })),
      { type: 'video', src: '/activity_9.mp4', label: 'Demo clip 1' },
      { type: 'video', src: '/activity_10.mp4', label: 'Demo clip 2' }
    ]
  },
  {
    id: 'cme-selayang',
    tabLabel: 'CME (Hospital Selayang)',
    title:
      'Continuous Medical Education (CME) session (Hospital Selayang - Video Laryngoscopy and Vein Finder technology)',
    slides: Array.from({ length: 7 }, (_, i) => ({
      type: 'image',
      src: `/cme_${i + 1}.jpeg`,
      alt: 'CME session Hospital Selayang'
    }))
  }
]

function Events() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [eventIndex, setEventIndex] = useState(0)
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const selected = events[eventIndex]
  const slides = selected.slides
  const n = slides.length

  useEffect(() => {
    setSlide(0)
  }, [eventIndex])

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

  const current = slides[slide]

  useEffect(() => {
    if (paused) return
    if (slides[slide]?.type === 'video') return
    const t = setInterval(goNext, SLIDE_MS)
    return () => clearInterval(t)
  }, [paused, goNext, slide, slides])

  const imageFitClass =
    selected.id === 'hospital-demos' ? 'object-cover' : 'object-contain'

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-8 md:mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Events
          </h2>
        </div>

        <div
          className={`mb-8 transition-all duration-700 delay-75 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mx-auto max-w-md w-full">
            <label htmlFor="events-select" className="block text-sm font-medium text-gray-700 mb-2 text-center">
              Select event
            </label>
            <div className="relative">
              <select
                id="events-select"
                value={eventIndex}
                onChange={(e) => setEventIndex(Number(e.target.value))}
                className="w-full cursor-pointer appearance-none rounded-xl border-2 border-gray-200 bg-white py-3 pl-11 pr-11 text-center text-base text-gray-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {events.map((ev, idx) => (
                  <option key={ev.id} value={idx}>
                    {ev.tabLabel}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center mb-6 md:mb-8 max-w-4xl mx-auto leading-snug px-1">
            {selected.title}
          </h3>

          <div
            className="relative max-w-5xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[min(70vh,640px)] rounded-2xl overflow-hidden bg-gray-100 shadow-lg ring-1 ring-gray-200/80">
              <div className="absolute inset-0">
                {current.type === 'image' ? (
                  <img
                    key={`${selected.id}-${current.src}`}
                    src={current.src}
                    alt={current.alt}
                    loading={slide === 0 ? 'eager' : 'lazy'}
                    className={`h-full w-full ${imageFitClass}`}
                  />
                ) : (
                  <video
                    key={`${selected.id}-${current.src}`}
                    className="h-full w-full object-contain bg-black"
                    controls
                    playsInline
                    preload="metadata"
                    onEnded={goNext}
                  >
                    <source src={current.src} type="video/mp4" />
                  </video>
                )}
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
            <div className="h-7 mt-3 flex items-center justify-center text-sm text-gray-600">
              {current.type === 'video' ? current.label : '\u00a0'}
            </div>
            <div className="mt-1 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
              {slides.map((item, i) => (
                <button
                  key={`${selected.id}-${item.src}-${i}`}
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

export default Events
