import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function PillowShapedPadPage({ product }) {
  const category = product?.category
    ? Data.productCategories.find((c) => c.name === product.category)
    : null

  const backLink = category
    ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Lower Limb Pads
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-black'>
              Pillow Shaped Pad (7101)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              A highly versatile pillow-shaped positioner that can replace sandbags and is suitable for a wide
              range of procedures, from tracheotomy and thyroidectomy to tonsil, adenoid and ophthalmic cases.
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name ?? 'Pillow Shaped Pad'}`}
                className='px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              <Link
                to={backLink}
                className='px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-primary transition-colors text-black'
              >
                Back to Lower Limb Pads
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product?.image}
              alt='Pillow Shaped Pad'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Clinical use</h2>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Eliminates the need for sandbags with an extremely versatile pad.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Good for any procedure where additional support and positioning are required.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>
                  Particularly beneficial for tracheotomy, thyroidectomy, tonsil and adenoid cases, and cataract or
                  other ophthalmic procedures.
                </p>
              </div>
            </div>

            <div className='mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-gray-800'>
              <h3 className='text-xl font-bold mb-2 text-black'>Models &amp; sizing</h3>
              <p>Available in multiple pillow-shaped dimensions as per the 7101 series measurement chart.</p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default PillowShapedPadPage


