import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function RechargeableAspiratorPage({ product }) {
  const group = product.groupId && !product.category 
    ? Data.productGroups.find(g => g.id === product.groupId)
    : null
  
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6 text-black'>
              Asu-200 Battery and Rechargeable Aspirator
            </h1>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              {group && (
                <Link
                  to={backLink}
                  className='px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-primary transition-colors text-black'
                >
                  View More Products
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
              alt='Asu-200 Rechargeable Aspirator'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          <div>
            <h2 className='text-3xl font-bold mb-6 text-black'>Details</h2>
            <div className='space-y-4 text-gray-700'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Portable and simple to operate.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Small size, light weight for carrying.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>High power performance with vacuum -80 kPa.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Fully charged battery lasts for up to 60 minutes runtime.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Power supply allows operation on AC 100V - 240V and DC 12V with Acare car charger.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Suction container provide 800-1000 ml, depending on user's requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-8 bg-gray-50'>
        <h2 className='text-3xl font-bold mb-6 text-black'>Standard Accessories</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center gap-3'>
              <svg className='w-8 h-8 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' />
              </svg>
              <p className='font-medium text-gray-900'>Suction container</p>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center gap-3'>
              <svg className='w-8 h-8 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
              <p className='font-medium text-gray-900'>Connection tube</p>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center gap-3'>
              <svg className='w-8 h-8 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
              <p className='font-medium text-gray-900'>Power adaptor</p>
            </div>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center gap-3'>
              <svg className='w-8 h-8 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
              </svg>
              <p className='font-medium text-gray-900'>Carrying bag</p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold mb-6 text-black'>Quick Guide Video: Asu-200</h2>
        <div className='aspect-video w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg'>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/ON10hbHBTjk'
            title='Asu-200 Quick Guide Video'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-full'
          ></iframe>
        </div>
        <p className='text-sm text-gray-600 mt-4 text-center'>
          Watch the complete guide on how to use the Asu-200 Rechargeable Aspirator
        </p>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-gray-700'>
              Contact our specialists to discuss how the Asu-200 Rechargeable Aspirator can enhance your airway management capabilities.
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

export default RechargeableAspiratorPage

