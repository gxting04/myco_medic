import React, { useMemo, useState, useEffect } from 'react'
import Data from '@/shared/Data'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal, staggerContainer, fadeUpItem } from '../lib/motion'

function Category() {
  // Get products from localStorage or initial data, excluding Medical Furniture (groupId: 7) and Medical Equipment (groupId: 2)
  const allProducts = useMemo(() => {
    const saved = localStorage.getItem('myco_products')
    const products = saved ? JSON.parse(saved) : Data.initialProducts
    return products.filter(p => p.groupId !== 2 && p.groupId !== 7)
  }, [])

  return (
    <section className="py-16 md:py-28 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Browse by Category
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Our Medical Categories
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto px-4">
            Find the essential medical supplies designed for performance and reliability.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {Data.productGroups
            .filter(group => !['Medical Equipment', 'Safety & Protection'].includes(group.name))
            .filter(group => group.id !== 5 && group.id !== 7)
            .map((group) => {
            const allGroupProducts = allProducts.filter(
              product => product.groupId === group.id
            )

            // Collect multiple product images (up to 6 images)
            const productImages = []
            for (const product of allGroupProducts) {
              if (productImages.length >= 6) break
              
              // Try to get image from product.image or product.images array
              const img = product.image || (product.images && product.images[0])
              if (img && img.trim() !== '') {
                productImages.push(img)
              }
            }
            
            // Fallback to group icon if no product images found
            const images = productImages.length > 0 ? productImages : [group.icon]
            
            return (
              <ProductGroupCard key={group.id} group={group} images={images} />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// Product-style card: image fills the card face; title-only caption below (reference layout)
function ProductGroupCard({ group, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
    <Link
      to={`/products?groupId=${group.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md border border-gray-200/80 transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {/* 4:3 on phones: a portrait face made 570px-tall cards and left the mostly
          landscape product shots floating in dead space */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[4/5] bg-white">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${group.name} - Product ${index + 1}`}
            className={`absolute left-1/2 top-1/2 max-h-[88%] max-w-[88%] -translate-x-1/2 -translate-y-1/2 object-contain transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Light fade so carousel dots read on busy product art */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/95 to-transparent"
          aria-hidden
        />

        <div className="pointer-events-none absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-md">
          <Search className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </div>

        {images.length > 1 && (
          <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 sm:bottom-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'w-6 bg-primary' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-gray-100 bg-white px-4 py-4 text-center sm:px-5 sm:py-5">
        <h3 className="text-base font-semibold leading-snug text-primary sm:text-lg group-hover:underline group-hover:underline-offset-2">
          {group.name}
        </h3>
        <span className="inline-flex rounded-full bg-primary px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-md sm:px-4 sm:py-2 sm:text-xs">
          View products
        </span>
      </div>
    </Link>
    </motion.div>
  )
}

export default Category
