import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/Header.png',
    '/airway_management.png',
    '/rota_trach_hero.png'
  ]

  // Auto-slide through images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    
    return () => clearInterval(timer)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className='relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden mt-24 md:mt-28'>
      {/* Images - Fill the entire section */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Myco Medic ${index + 1}`}
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Hero
