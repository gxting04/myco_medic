import React, { useMemo, useState, useEffect } from 'react'
import Data from '@/shared/Data'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import slugify from '@/utils/slugify'

function Category() {
  // Get products from localStorage or initial data, excluding Medical Furniture (groupId: 7) and Medical Equipment (groupId: 2)
  const allProducts = useMemo(() => {
    const saved = localStorage.getItem('myco_products')
    const products = saved ? JSON.parse(saved) : Data.initialProducts
    return products.filter(p => p.groupId !== 2 && p.groupId !== 7)
  }, [])

  return (
    <section className="py-16 md:py-32 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4 md:mb-6">
            Our Medical Categories
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto px-4">
            Find the essential medical supplies designed for performance and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {Data.productGroups
            .filter(group => !['Medical Equipment', 'Safety & Protection'].includes(group.name))
            .filter(group => group.id !== 5 && group.id !== 7)
            .map((group) => {
            const categoriesCount = Data.productCategories.filter(
              category => category.groupId === group.id
            ).length
            
            // Get ALL products for this group (both with and without categories)
            const allGroupProducts = allProducts.filter(
              product => product.groupId === group.id
            )
            
            // Get direct products (without category) for display count
            const directProducts = allGroupProducts.filter(
              product => !product.category || product.category === null
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
              <ProductGroupCard
                key={group.id}
                group={group}
                categoriesCount={categoriesCount}
                allGroupProducts={allGroupProducts}
                images={images}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Product Group Card Component with Auto-Sliding Images
function ProductGroupCard({ group, categoriesCount, allGroupProducts, images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-slide through images every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <Link
      to="/products"
      className="group relative p-6 sm:p-8 h-auto sm:h-[400px] flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 bg-white rounded-lg border border-gray-200"
    >
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {group.name}
        </h3>
        <p className="text-gray-500 font-medium mb-4 text-sm">
          {categoriesCount > 0 && allGroupProducts.length > 0 ? (
            <>
              {categoriesCount} {categoriesCount === 1 ? 'Category' : 'Categories'} • {allGroupProducts.length} {allGroupProducts.length === 1 ? 'Product' : 'Products'}
            </>
          ) : categoriesCount > 0 ? (
            <>{categoriesCount} {categoriesCount === 1 ? 'Category' : 'Categories'}</>
          ) : (
            <>{allGroupProducts.length} {allGroupProducts.length === 1 ? 'Product' : 'Products'}</>
          )}
        </p>
        <p className="text-gray-600 leading-relaxed">
          {group.description}
        </p>
      </div>

      {/* Image Carousel Area */}
      <div className="relative h-32 w-full flex items-center justify-center overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${group.name} - Product ${index + 1}`}
            className={`absolute w-32 h-32 object-contain transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 flex gap-1.5">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'w-6 bg-primary'
                    : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* Floating Arrow */}
      <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        <ArrowRight className="w-6 h-6 text-primary" />
      </div>
    </Link>
  )
}

export default Category
