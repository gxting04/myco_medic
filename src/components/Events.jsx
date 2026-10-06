import React, { useEffect, useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '../lib/motion'

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
  const [eventIndex, setEventIndex] = useState(0)
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)

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

  const current = slides[slide]

  useEffect(() => {
    if (paused) return
    if (slides[slide]?.type === 'video') return
    const t = setInterval(goNext, SLIDE_MS)
    return () => clearInterval(t)
  }, [paused, goNext, slide, slides])

  const imageFitClass = selected.id === 'hospital-demos' ? 'object-cover' : 'object-contain'

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') goPrev()
    if (e.key === 'ArrowRight') goNext()
  }

  return (
    <section className="section border-t border-gray-100 bg-white" aria-labelledby="events-title">
      <div className="container-page">
        <Reveal className="mb-8 flex flex-col justify-between gap-6 md:mb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Events &amp; education</span>
            <h2 id="events-title" className="heading-lg mt-3">
              In the field with clinical teams
            </h2>
            <p className="lead mt-4">Congresses, hospital demonstrations and continuing medical education sessions we have supported.</p>
          </div>

          <div role="tablist" aria-label="Select event" className="flex w-full gap-1 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-1 scrollbar-hide lg:w-auto">
            {events.map((ev, idx) => (
              <button
                key={ev.id}
                role="tab"
                type="button"
                aria-selected={idx === eventIndex}
                onClick={() => setEventIndex(idx)}
                className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  idx === eventIndex ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {ev.tabLabel}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onKeyDown={onKeyDown}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchX.current == null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 40) (dx < 0 ? goNext : goPrev)()
            touchX.current = null
          }}
        >
          <p className="mb-4 text-sm font-medium text-gray-900">{selected.title}</p>
          <div className="relative aspect-[4/3] max-h-[min(70vh,640px)] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 sm:aspect-[16/9]">
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
                className="h-full w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                onEnded={goNext}
              >
                <source src={current.src} type="video/mp4" />
              </video>
            )}
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-800 shadow-sm transition hover:bg-white"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-800 shadow-sm transition hover:bg-white"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {slides.map((item, i) => (
                <button
                  key={`${selected.id}-${item.src}-${i}`}
                  type="button"
                  onClick={() => setSlide(i)}
                  /* before: lifts the 6px dot to a 32px-tall tap area on touch without changing the row's layout */
                  className={`relative h-1.5 rounded-full transition-all before:absolute before:-inset-x-1 before:-inset-y-3 before:content-[''] ${
                    i === slide ? 'w-6 bg-gray-900' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={item.type === 'video' ? `Video: ${item.label}` : `Slide ${i + 1}`}
                  aria-current={i === slide}
                />
              ))}
            </div>
            <span className="shrink-0 text-xs tabular-nums text-gray-500">
              {current.type === 'video' ? `${current.label} · ` : ''}
              {slide + 1} / {n}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
