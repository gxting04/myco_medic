import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function BVFFilterPage({ product }) {
  const category = product.category 
    ? Data.productCategories.find(c => c.name === product.category)
    : null
  
  const backLink = category 
    ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Airway Management / Breathing System Filter
            </span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6 text-black'>
              Bacterial Virus Filter (BVF)
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              Superior protection against airborne pathogens in respiratory care
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              {category && (
                <Link
                  to={backLink}
                  className='px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-primary transition-colors text-black'
                >
                  View More Filters
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product.image}
              alt='Bacterial Virus Filter'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          <div>
            <h2 className='text-3xl font-bold mb-6 text-black'>Product Overview</h2>
            <p className='text-gray-700 mb-6'>
              Our Bacterial Virus Filter (BVF) provides high-efficiency filtration to protect patients and healthcare workers from cross-contamination during mechanical ventilation and anesthesia procedures.
            </p>

            <h3 className='text-2xl font-bold mb-4 text-black'>Key Features</h3>
            <div className='space-y-4 text-gray-700'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
                <p><strong>High Filtration Efficiency:</strong> >99.999% bacterial and viral filtration</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
                <p><strong>Bidirectional Protection:</strong> Protects both patient and equipment</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
                <p><strong>Low Resistance:</strong> Minimal impact on breathing mechanics</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
                <p><strong>Hydrophobic Media:</strong> Resistant to moisture and secretions</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                </svg>
                <p><strong>Universal Compatibility:</strong> Fits standard breathing circuit connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 bg-gray-50'>
        <h2 className='text-3xl font-bold mb-8 text-black text-center'>Clinical Applications</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' />
              </svg>
            </div>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>ICU</h3>
            <p className='text-sm text-gray-600'>
              Critical care ventilation
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
              </svg>
            </div>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>Operating Room</h3>
            <p className='text-sm text-gray-600'>
              Anesthesia procedures
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
            </div>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>Emergency</h3>
            <p className='text-sm text-gray-600'>
              Transport ventilation
            </p>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
              <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
              </svg>
            </div>
            <h3 className='text-lg font-bold text-gray-900 mb-2'>Respiratory</h3>
            <p className='text-sm text-gray-600'>
              Pulmonary function testing
            </p>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 md:p-12'>
          <h2 className='text-3xl font-bold mb-6 text-black'>Infection Control Benefits</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Patient Safety</h3>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Prevents cross-contamination
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Reduces infection risk
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Protects vulnerable patients
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Equipment Protection</h3>
              <ul className='space-y-2 text-gray-700'>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Extends equipment lifespan
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Reduces maintenance costs
                </li>
                <li className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                  Prevents contamination buildup
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Order?</h3>
            <p className='text-gray-700'>
              Contact our specialists for bulk orders, pricing, and technical specifications for BVF filters.
            </p>
          </div>
          <a 
            href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
            className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default BVFFilterPage

