import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const slides = [
    {
      id: 1,
      image: '/public/Header.png',
      title: 'Advanced Respiratory Care',
      subtitle: 'Precision engineered for critical moments.',
      cta: 'View Products',
      link: '/products',
      darkText: false
    },
    {
      id: 2,
      image: '/public/header_2.png',
      title: 'Medical Consumables',
      subtitle: 'High-quality essentials for every procedure.',
      cta: 'Browse Catalog',
      link: '/products',
      darkText: true
    },
    {
      id: 3,
      image: '/public/header_3.jpg',
      title: 'Trusted Solutions',
      subtitle: 'Reliability when it matters most.',
      cta: 'Learn More',
      link: '/about',
      darkText: false
    },
    {
      id: 4,
      image: '/public/header_4.jpg',
      title: 'Innovation in Healthcare',
      subtitle: 'Leading the way in medical technology.',
      cta: 'Contact Us',
      link: '/contact',
      darkText: false
    }
  ]

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [paused, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div
      className='relative h-[85vh] w-full overflow-hidden bg-black'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image Background */}
          <div className="absolute inset-0">
             <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
            <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${
               index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 ${
                slide.darkText ? 'text-gray-900' : 'text-white'
              }`}>
                {slide.title}
              </h1>
              <p className={`text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto ${
                 slide.darkText ? 'text-gray-700' : 'text-white/90'
              }`}>
                {slide.subtitle}
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to={slide.link}
                  className={`inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    slide.darkText 
                      ? 'bg-black text-white hover:bg-gray-800' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {slide.cta}
                </Link>
                <Link
                  to="/contact"
                  className={`inline-flex items-center px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md ${
                    slide.darkText
                      ? 'bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900/10'
                      : 'bg-white/20 border border-white/40 text-white hover:bg-white/30'
                  }`}
                >
                  Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className='absolute z-20 left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100'
        aria-label='Previous slide'
      >
        <ChevronLeft className='w-6 h-6' />
      </button>
      
      <button
        onClick={nextSlide}
        className='absolute z-20 right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100'
        aria-label='Next slide'
      >
        <ChevronRight className='w-6 h-6' />
      </button>

      {/* Indicators */}
      <div className='absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex space-x-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
