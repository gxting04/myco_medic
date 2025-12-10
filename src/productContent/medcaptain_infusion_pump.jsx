import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function MedcaptainInfusionPumpPage({ product }) {
  const group = Data.productGroups.find(g => g.id === 4)
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
              The SYS-6010 is an accurate, reliable, and user-friendly infusion pump featuring a robust design with multiple infusion modes and advanced safety mechanisms.
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

      {/* Features Section */}
      <section className='py-16 px-6 max-w-7xl mx-auto'>
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100'>
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>Key Features</h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6 bg-gray-50 rounded-2xl'>
              <div className='w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Accurate & Reliable</h3>
              <p className='text-gray-600'>Patented design ensures precise infusion delivery for critical care needs.</p>
            </div>

            <div className='p-6 bg-gray-50 rounded-2xl'>
              <div className='w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4'>
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>User-Friendly</h3>
              <p className='text-gray-600'>Intuitive LED touch-screen interface simplifies operation for medical staff.</p>
            </div>

            <div className='p-6 bg-gray-50 rounded-2xl'>
              <div className='w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4'>
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>Safety Mechanism</h3>
              <p className='text-gray-600'>Automatic pump door mechanism ensures safe infusion at all times.</p>
            </div>
          </div>

          <div className='mt-12 pt-12 border-t border-gray-100'>
            <h3 className='text-xl font-bold text-gray-900 mb-4'>Additional Details</h3>
            <ul className='space-y-3 text-gray-600'>
              <li className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                4 optional directions of pole clamp installation available for versatile clinical setup.
              </li>
              <li className='flex gap-3'>
                <span className='text-primary font-bold'>•</span>
                Multiple infusion modes to meet diverse clinical requirements.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default MedcaptainInfusionPumpPage

