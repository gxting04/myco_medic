import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'
import { useCart } from '@/context/CartContext'

// Based on the official Myco Medic page:
// https://www.mycomedic.com.my/portable-breathing-oxygen-inhaler.html

function AWELDPortableBreathingOxygenInhalerPage({ product }) {
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
    addToCart(product, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    navigate('/checkout')
  }

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Portable Breathing Oxygen
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-4 text-black'>
              AWELD Portable Breathing Oxygen Inhaler
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              600 ml portable oxygen inhaler with ≥99.5% oxygen purity. Perfect for emergency use, traveling, hiking, and temporary oxygen needs.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-black mb-6'>Product Video</h2>
          <div className='aspect-video max-w-4xl mx-auto'>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wjmqdV_LtuQ"
              title="Portable Breathing Oxygen Inhaler"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className='rounded-lg shadow-lg'
            ></iframe>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className='bg-gray-50 py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-black mb-4'>Product Details</h2>
            <p className='text-lg text-gray-600'>AWELD Portable Oxygen Inhaler (600 ml)</p>
          </div>

          <div className='bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span><strong>600 ml</strong></span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Oxygen purity <strong>more than 99.5%</strong></span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Easy to carry</span>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Easy to use</span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Suitable for traveling</span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Suitable for mountain hiking</span>
                </div>
                <div className='flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                  <span>Can be stored for <strong>2 years</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Image Section */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-black mb-4'>Product Image</h2>
        </div>
        <div className='max-w-2xl mx-auto'>
          <img
            src='https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/u4kvox2b1621523622-1000x1000_orig.jpeg'
            alt='AWELD Portable Oxygen Inhaler'
            className='w-full h-auto object-cover rounded-lg shadow-lg'
          />
        </div>
      </section>

      {/* Second Image Section */}
      <section className='bg-gray-50 py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold text-black mb-4'>Product with Mask</h2>
          </div>
          <div className='max-w-2xl mx-auto'>
            <img
              src='https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/qb5rsksc1624450919-750x1000.jpg?1643958536'
              alt='AWELD Portable Oxygen Inhaler with Mask'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
      </section>

      {/* Shopping Section */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='max-w-2xl mx-auto text-center'>
          <h2 className='text-3xl font-bold text-black mb-8'>Order Now</h2>

          {/* Quantity */}
          <div className='flex items-center justify-center gap-4 mb-8'>
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
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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
              href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name}`}
              target='_blank'
              rel='noopener noreferrer'
              className='border border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium text-lg text-center'
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='bg-gray-50 py-16'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-6 text-black'>Frequently Asked Questions</h2>
          </div>
          <div className='space-y-6 max-w-4xl mx-auto'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='text-xl font-semibold text-black mb-3'>
                Why is the can feels empty while my mosquito spray also have 600ml but feels heavier?
              </h3>
              <p className='text-gray-700'>
                The can consists of ≥ 99.5% Oxygen as its content. Oxygen is extremely light, in the form of 600ml, it has net weight of 0.8574g only 😊. But in other aerosol can like mosquito spray, it consists of chemicals and liquid which is way more heavier than oxygen.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='text-xl font-semibold text-black mb-3'>
                Can i keep this as emergency use?
              </h3>
              <p className='text-gray-700'>
                Yes! It is intended to use when you need oxygen temporarily, like Covid, hiking, exercising, heavy lifting etc.
              </p>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='text-xl font-semibold text-black mb-3'>
                Can Sabah/Sarawak customer place order?
              </h3>
              <p className='text-gray-700'>
                Yes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back navigation */}
      <section className='max-w-6xl mx-auto px-6 py-8'>
        <div className='border-t border-gray-200 pt-8'>
          <Link
            to={backLink}
            className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors'
          >
            <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
            Back to {category?.name ?? 'Products'}
          </Link>
        </div>
      </section>

      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product?.name}`} />
      <Footer />
    </div>
  )
}

export default AWELDPortableBreathingOxygenInhalerPage
