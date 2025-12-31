import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function FaceCradleProneSupportSystemPage({ product }) {
  const category = product?.category
    ? Data.productCategories.find((c) => c.name === product.category)
    : null

  const backLink = category ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}` : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Positioning Devices
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-black'>
              Face-Cradle® Prone Support System
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              A dedicated prone support system that provides quick setup, fully adjustable head support, and
              improved visibility of the patient’s eyes and ET tube for safer prone positioning.
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name ?? 'Face-Cradle Prone Support System'}`}
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
                Back to Positioning Devices
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 space-y-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product?.image}
              alt='Face-Cradle Prone Support System'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Key benefits</h2>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-6 h-6 text-primary mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Simple set-up with a “no waiting” workflow for faster room turnaround.</p>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-6 h-6 text-primary mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Fully adjustable cushion set accommodates most adult head sizes.</p>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-6 h-6 text-primary mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Provides greater patient stability in the prone position.</p>
              </li>
              <li className='flex items-start gap-3'>
                <svg
                  className='w-6 h-6 text-primary mt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Improves visibility of patient’s eyes and ET tube for continuous safety monitoring.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Clinical applications</h2>
            <p>
              Ideal for prone spinal procedures, prone ventilation, and other surgeries where the patient’s head,
              face and airway must be carefully supported and monitored over an extended period.
            </p>
          </div>
          <div>
            <img
              src={product?.image}
              alt='Face-Cradle clinical positioning'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default FaceCradleProneSupportSystemPage


