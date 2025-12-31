import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function LateralPadsPage({ product }) {
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
              Chest and Body Pads
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-black'>
              Lateral Pads (3101)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Lateral positioning pads applicable to all lateral surgeries, helping protect the shoulder and upper
              limbs while alleviating pressure on nerve tissues.
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name ?? 'Lateral Pads'}`}
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
                Back to Chest &amp; Body Pads
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
              alt='Lateral Pads'
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
                <p>Applicable to all lateral position surgeries.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Provides protection for shoulder and upper limbs.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Helps alleviate pressure on nerve tissues.</p>
              </div>
            </div>

            <div className='mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-gray-800'>
              <h3 className='text-xl font-bold mb-2 text-black'>Models &amp; positioning</h3>
              <p className='mb-2'>
                Available in different models and sizes, as illustrated in the original Lateral Pads series.
              </p>
              <p>
                Positioning illustrations demonstrate pad placement around the shoulder, flank and torso to
                maintain stable lateral alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default LateralPadsPage


