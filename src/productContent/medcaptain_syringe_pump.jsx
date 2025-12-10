import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function MedcaptainSyringePumpPage({ product }) {
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
                e.target.src = 'https://images.unsplash.com/photo-1583912267670-6575ad43263d?q=80&w=2070&auto=format&fit=crop'
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
              The SYS-50 is a smart, safe, and innovative syringe pump designed for precise fluid delivery. Features a clear touch screen, extensive safety certifications, and smart connectivity.
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

      {/* Features & Specs */}
      <section className='py-16 px-6 max-w-7xl mx-auto'>
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100'>
          
          {/* Feature Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Simple & Comfortable</h3>
              <ul className='space-y-4 text-gray-600'>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>3.5" Touch screen for pleasant visual experience and easy operation.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>Tube management with standard side clamp prevents entanglement.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Innovative & Safe</h3>
              <ul className='space-y-4 text-gray-600'>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>Certified by EN1789 for ambulances.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>Internal Li-ion battery provides up to 20 hours continuous power.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>Occlusion pre-alarm system recognizes risk before real occlusion.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Smart & Convenient</h3>
              <ul className='space-y-4 text-gray-600'>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>Continuous titration allows rate change without stopping infusion.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>8 infusion modes adapted for various clinical departments.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>Connectivity</h3>
              <ul className='space-y-4 text-gray-600'>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>Optional built-in Wi-Fi module.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary'>•</span>
                  <span>Connects to HIS/CIS via WLAN or LAN.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Specifications Table */}
          <div className='bg-gray-50 rounded-2xl p-8'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Technical Specifications</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm'>
              <div className='flex justify-between border-b border-gray-200 pb-2'>
                <span className='font-semibold text-gray-700'>Dimension</span>
                <span className='text-gray-600'>362(L) x 126(W) x 151(H) mm</span>
              </div>
              <div className='flex justify-between border-b border-gray-200 pb-2'>
                <span className='font-semibold text-gray-700'>Weight</span>
                <span className='text-gray-600'>1.8 kg (including battery)</span>
              </div>
              <div className='flex justify-between border-b border-gray-200 pb-2'>
                <span className='font-semibold text-gray-700'>Screen</span>
                <span className='text-gray-600'>3.5 inch LCD touch screen</span>
              </div>
              <div className='flex justify-between border-b border-gray-200 pb-2'>
                <span className='font-semibold text-gray-700'>Classification</span>
                <span className='text-gray-600'>Defibrillation proof type CF, IP34</span>
              </div>
              <div className='flex justify-between border-b border-gray-200 pb-2 md:col-span-2'>
                <span className='font-semibold text-gray-700'>Syringe Type</span>
                <span className='text-gray-600'>Standard 5ml, 10ml, 20ml, 30ml, 50ml, 60ml</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default MedcaptainSyringePumpPage

