import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function PressureTransducerPage({ product }) {
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
                e.target.src = 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=2069&auto=format&fit=crop'
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
              Disposable Pressure Transducer with sensitive chip for accurate data transfer. Matches all kinds of cables for versatile monitoring.
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
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>Product Features & Benefits</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Left Column */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm'>01</span>
                  Strengths
                </h3>
                <ul className='space-y-3 pl-10'>
                  <li className='text-gray-600 list-disc'>Sensitive chip for accurate data transfer.</li>
                  <li className='text-gray-600 list-disc'>Compatible with all kinds of cables.</li>
                </ul>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-sm'>02</span>
                  Description
                </h3>
                <p className='text-gray-600 pl-10 leading-relaxed'>
                  Disposable Pressure Transducer and accessories are made of medical-grade high polymer material with advanced biological compatibility. Its unique structure ensures safety and reliability.
                </p>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-sm'>03</span>
                  Application
                </h3>
                <ul className='space-y-3 pl-10'>
                  <li className='text-gray-600 list-disc'>Central venous pressure and various physiological pressure monitoring.</li>
                  <li className='text-gray-600 list-disc'>Blood sampling.</li>
                  <li className='text-gray-600 list-disc'>Neonatus pressure monitoring.</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className='space-y-8'>
              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-sm'>04</span>
                  Safety in Use
                </h3>
                <ul className='space-y-3 pl-10'>
                  <li className='text-gray-600 list-disc'>Closed system design reduces operator infection risk.</li>
                  <li className='text-gray-600 list-disc'>Accurate substantial design prevents leaking.</li>
                  <li className='text-gray-600 list-disc'>Needle-free blood sample collecting system avoids stabbing and cross-infection.</li>
                </ul>
              </div>

              <div>
                <h3 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                  <span className='w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm'>05</span>
                  Convenient Operation
                </h3>
                <ul className='space-y-3 pl-10'>
                  <li className='text-gray-600 list-disc'>Simple operation and accurate flow rate control.</li>
                  <li className='text-gray-600 list-disc'>Various connectors available for different monitors.</li>
                  <li className='text-gray-600 list-disc'>Micro constant flow (2-5cc/25-35cc per hour) guarantees continuous flowing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Image Section */}
      <section className='max-w-7xl mx-auto px-6 pb-16'>
        <div className='rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100'>
           <img
            src="https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/published/trans-2.jpg?1642407213"
            alt="Pressure Transducer Usage"
            className='w-full h-[400px] object-contain bg-white hover:scale-105 transition-transform duration-700'
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
            }}
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default PressureTransducerPage

