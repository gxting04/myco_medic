import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function CBonaClosedSuctionSystemsPage({ product }) {
  // Get group information if product has no category
  const group = Data.productGroups.find(g => g.id === 4) // ID 4 is Critical Care/ Day Care
  
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-[#f5f5f7] min-h-screen'>
      <Header />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative rounded-3xl overflow-hidden shadow-lg aspect-square lg:aspect-auto lg:h-[500px] bg-white p-8 flex items-center justify-center'>
             <img
              src={product.image}
              alt={product.name}
              className='w-full h-full object-contain'
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop'
              }}
            />
          </div>
          
          <div>
            <span className='text-primary font-semibold tracking-wide uppercase text-sm'>
              {group ? group.name : 'Medical Equipment'}
            </span>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6'>
              {product.name}
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Designed for mechanically ventilated patients with endotracheal or tracheotomy tubes. Allows suctioning without disconnecting the ventilator or oxygen source, reducing risks of infection and oxygen desaturation.
            </p>
            
            <div className='flex flex-col sm:flex-row gap-4'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30'
                target='_blank'
                rel='noopener noreferrer'
              >
                Enquire Now
              </a>
              <Link
                to={backLink}
                className='inline-flex justify-center items-center px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-all'
              >
                View More Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className='py-16 px-6 max-w-7xl mx-auto'>
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100'>
          <h2 className='text-3xl font-bold text-gray-900 mb-8'>Key Features</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>Irrigation Port</h3>
                  <p className='text-gray-600'>Equipped with an irrigation port featuring a one-way valve for safety and efficiency.</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>MDI Port</h3>
                  <p className='text-gray-600'>Includes a Metered Dose Inhaler (MDI) port for medication administration.</p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>Double Swivel Connector</h3>
                  <p className='text-gray-600'>Features a double swivel connector to minimize torque and patient discomfort.</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0'>
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900'>Extended Use</h3>
                  <p className='text-gray-600'>Available for 24-hour and 72-hour continuous use options.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Context Section */}
      <section className='max-w-7xl mx-auto px-6 pb-16'>
        <div className='bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden'>
          <div className='relative z-10 max-w-2xl'>
            <h2 className='text-3xl font-bold mb-6'>Why Choose Closed Suction?</h2>
            <p className='text-lg text-gray-300 leading-relaxed mb-8'>
              Closed suction systems are critical for maintaining lung volume and oxygenation in mechanically ventilated patients. By preventing the loss of PEEP (positive end-expiratory pressure), they support better patient outcomes and reduce the risk of VAP (Ventilator-Associated Pneumonia).
            </p>
            <a 
              href="https://wa.me/60196649622"
              target="_blank"
              rel="noopener noreferrer"
              className='inline-flex items-center gap-2 text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all'
            >
              Consult with an Expert
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Decorative background elements */}
          <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent'></div>
          <div className='absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl'></div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default CBonaClosedSuctionSystemsPage

