import React, { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/Header.png',
  '/airway_management.png',
  '/rota_trach_hero.png',
]

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const reduce = useReducedMotion()

  // Auto-slide through images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  const goToNext = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length)

  return (
    // Phones get the artwork's own 1600x912 ratio so object-cover crops nothing —
    // these banners have their headlines baked into the pixels.
    <section className="relative aspect-[1600/912] sm:aspect-auto sm:h-[70vh] md:h-[80vh] w-full overflow-hidden mt-24 md:mt-28">
      {/* Background images with a slow Ken-Burns zoom */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <motion.img
            src={image}
            alt={`Myco Medic medical supplies ${index + 1}`}
            className="w-full h-full object-cover"
            initial={false}
            animate={
              index === currentImageIndex && !reduce
                ? { scale: 1.06 }
                : { scale: 1 }
            }
            transition={{ duration: 7, ease: 'linear' }}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}

      {/* Image Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              /* before: gives each dot a ~40px transparent tap area on touch */
              className={`relative h-2 rounded-full transition-all duration-300 before:absolute before:content-[''] before:-inset-y-4 before:-inset-x-2 sm:before:hidden ${
                index === currentImageIndex
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Hero
