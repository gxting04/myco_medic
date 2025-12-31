import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  const images = [
    '/header_2.png',
    '/header_3.jpg',
    '/header_4.jpg',
  ]

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Reveal on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (rect) {
        const progress = Math.min(Math.max(0, 1 - rect.top / window.innerHeight), 1)
        setScrollY(progress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const next = () => setCurrentImageIndex((p) => (p + 1) % images.length)
  const prev = () => setCurrentImageIndex((p) => (p - 1 + images.length) % images.length)

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Subtle background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 blur-3xl rounded-full"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-primary/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* ===== Left Image Section ===== */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative group rounded-3xl overflow-hidden shadow-xl">
            <div
              className="relative h-[420px] lg:h-[550px]"
              style={{
                transform: `translateY(${scrollY * -30}px) scale(${1 + scrollY * 0.03})`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    i === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img src={img} alt={`About ${i}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* ===== Right Text Section ===== */}
        <div
          className={`space-y-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Transforming <span className="text-primary">Healthcare Solutions</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Since <strong>2010</strong>, <span className="text-primary font-semibold">Myco Medic</span>{' '}
            has been at the forefront of delivering high-quality medical devices and surgical
            equipment across Malaysia. Our dedication ensures that every hospital and clinic we
            serve receives dependable, innovative tools that enhance patient outcomes and clinical
            efficiency.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            With over a decade of expertise, we continue to push boundaries in medical technology —
            from critical care to operating theatres — providing trusted solutions for modern
            healthcare professionals.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center text-primary font-medium group hover:text-primary/80 transition-all"
          >
            Learn more about us
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
