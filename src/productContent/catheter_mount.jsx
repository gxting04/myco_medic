import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function CatheterMountPage({ product }) {
  const group = product.groupId && !product.category 
    ? Data.productGroups.find(g => g.id === product.groupId)
    : null
  
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6 text-black'>
              Catheter Mount
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

      {/* Product Overview Section with Image */}
      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800'}
              alt='Catheter Mount'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          <div>
            <h2 className='text-3xl font-bold mb-6 text-black'>Product Overview</h2>
            <div className='space-y-4 text-gray-700'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Disposable Catheter Mount Double Swivel Elbow.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Including standard and collapsible tube.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Providing convenience for surgery or other clinical process.</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>A variety of connectors for airway management options.</p>
              </div>
            </div>

            <div className='mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Quality Assurance</h3>
              <p className='text-gray-700'>
                Our catheter mounts meet international standards and provide reliable performance for critical airway management procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 bg-gray-50'>
        <h2 className='text-3xl font-bold mb-8 text-black text-center'>Key Features</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>Double Swivel Design</h3>
            </div>
            <p className='text-gray-700'>
              Features a double swivel elbow design that provides maximum flexibility and ease of positioning during procedures.
            </p>
          </div>

          <div className='bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-md'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>Versatile Options</h3>
            </div>
            <p className='text-gray-700'>
              Available with standard and collapsible tube configurations to suit different clinical requirements and patient needs.
            </p>
          </div>

          <div className='bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-md'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>Multiple Connectors</h3>
            </div>
            <p className='text-gray-700'>
              Comes with a variety of connectors compatible with different airway management equipment and ventilation systems.
            </p>
          </div>

          <div className='bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-md'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>Disposable Design</h3>
            </div>
            <p className='text-gray-700'>
              Single-use disposable design ensures optimal hygiene and eliminates the risk of cross-contamination between patients.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Need More Information?</h3>
            <p className='text-gray-700'>
              Contact our specialists to learn more about our Catheter Mount options and how they can meet your clinical needs.
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

export default CatheterMountPage

