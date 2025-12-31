import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'
import { useCart } from '@/context/CartContext'

// Based on the official Myco Medic page:
// https://www.mycomedic.com.my/memory-fracture-table-post-pads.html
// Single model: OKL-K01, Size: φ(40~120) mm x 300 mm

function MemoryFractureTablePostPadsPage({ product }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const category = product?.category
    ? Data.productCategories.find((c) => c.name === product.category)
    : null

  const backLink = category
    ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  const handleAddToCart = () => {
    // Attach model info onto the cart item
    const cartProduct = {
      ...product,
      modelCode: 'OKL-K01',
      selectedSize: 'φ(40~120) mm x 300 mm'
    }
    addToCart(cartProduct, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    const cartProduct = {
      ...product,
      modelCode: 'OKL-K01',
      selectedSize: 'φ(40~120) mm x 300 mm'
    }
    addToCart(cartProduct, quantity)
    navigate('/checkout')
  }

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Memory Foam Positioners / Memory Chest and Body Pads
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-4 text-black'>
              Memory Fracture Table Post Pads (OKL-K01)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Memory foam fracture table post pads designed to avoid compression injury on the perineal area by
              cushioning the fracture table post during orthopaedic and trauma procedures.
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Image */}
          <div>
            <img
              src={product?.image}
              alt='Memory Fracture Table Post Pads'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          {/* Info + actions */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-3xl font-bold text-black mb-4'>Clinical use</h2>
              <p className='text-gray-700'>
                The pad is placed over the fracture table post to distribute pressure away from the perineal area. By
                providing a soft, conforming interface, it helps reduce the risk of compression injury and soft-tissue
                damage during procedures that require counter-traction at the perineum.
              </p>
            </div>

            {/* Model & size info */}
            <div className='bg-gray-50 rounded-xl p-6 space-y-3'>
              <h3 className='text-xl font-semibold text-black'>Model &amp; size</h3>
              <div className='flex justify-between'>
                <span className='font-medium text-gray-700'>Model</span>
                <span className='text-gray-900'>OKL-K01</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-medium text-gray-700'>Size</span>
                <span className='text-gray-900'>φ(40~120) mm x 300 mm</span>
              </div>
              <p className='text-sm text-gray-600 mt-2'>
                Designed to accommodate fracture table posts within the stated diameter range, providing circumferential
                cushioning.
              </p>
            </div>

            {/* Quantity */}
            <div className='flex items-center gap-4'>
              <label className='text-gray-700 font-medium'>Quantity:</label>
              <div className='flex items-center border border-gray-300 rounded-lg'>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-4 py-2 hover:bg-gray-100 transition-colors'
                >
                  -
                </button>
                <input
                  type='number'
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className='w-16 text-center border-x border-gray-300 py-2'
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-4 py-2 hover:bg-gray-100 transition-colors'
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                onClick={handleAddToCart}
                className={`${
                  addedToCart ? 'bg-green-600' : 'bg-primary'
                } text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg flex items-center justify-center gap-2`}
              >
                {addedToCart ? (
                  <>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                    Added to Cart
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className='bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg'
              >
                Buy Now
              </button>

              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${
                  product?.name
                } (OKL-K01 - φ(40~120) mm x 300 mm)`}
                target='_blank'
                rel='noopener noreferrer'
                className='border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium text-lg text-center'
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Back navigation */}
        <div className='mt-12 pt-8 border-t border-gray-200'>
          <Link
            to={backLink}
            className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors'
          >
            <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
            Back to Memory Chest and Body Pads
          </Link>
        </div>
      </section>

      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product?.name}`} />
      <Footer />
    </div>
  )
}

export default MemoryFractureTablePostPadsPage


