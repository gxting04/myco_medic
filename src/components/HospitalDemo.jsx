import React, { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  { src: '/activity_1.jpeg', alt: 'Hospital demonstration' },
  { src: '/activity_2.jpeg', alt: 'Hospital demonstration' },
  { src: '/activity_3.jpeg', alt: 'Hospital demonstration' },
  { src: '/activity_4.jpeg', alt: 'Hospital demonstration' },
  { src: '/activity_5.jpeg', alt: 'Hospital demonstration' },
  { src: '/activity_6.jpeg', alt: 'Hospital demonstration' },
  { src: '/activity_7.jpeg', alt: 'Hospital demonstration' },
  { src: '/activity_8.jpeg', alt: 'Hospital demonstration' }
]

const videos = [
  { src: '/activity_9.mp4', label: 'Demo clip 1' },
  { src: '/activity_10.mp4', label: 'Demo clip 2' }
]

const slides = [
  ...photos.map((p) => ({ type: 'image', ...p })),
  ...videos.map((v) => ({ type: 'video', ...v }))
]

const SLIDE_MS = 5500

function HospitalDemo() {
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
    if (slides[slide].type === 'video') return
    const t = setInterval(goNext, SLIDE_MS)
    return () => clearInterval(t)
  }, [paused, goNext, slide])

  const current = slides[slide]

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3 md:mb-4">
            Hospital Demo
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
            Highlights from our hospital visits, product walkthroughs, and on-site activities.
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
            <div className="relative aspect-[4/3] sm:aspect-[16/10] max-h-[min(70vh,640px)] rounded-2xl overflow-hidden bg-black shadow-lg ring-1 ring-gray-200/80">
              <div className="absolute inset-0">
                {current.type === 'image' ? (
                  <img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    loading={slide === 0 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video
                    key={current.src}
                    className="h-full w-full object-contain"
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
                  key={item.type === 'image' ? `img-${item.src}` : `vid-${item.src}`}
                  type="button"
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === slide
                      ? 'w-7 sm:w-8 bg-primary'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={item.type === 'image' ? `Photo ${i + 1}` : `Video: ${item.label}`}
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

export default HospitalDemo
