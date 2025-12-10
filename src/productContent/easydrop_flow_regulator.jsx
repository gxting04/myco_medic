import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function EasydropFlowRegulatorPage({ product }) {
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
                e.target.src = 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800'
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
              A single-use disposable flow regulator for highly accurate control of flow rate with IV solutions. A cost-effective alternative to expensive IV pump systems.
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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
            
            {/* Applications */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Applications</h2>
              <ul className='space-y-4 text-gray-600 leading-relaxed'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  Highly accurate flow rate control with IV solutions (single-use disposable).
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  Low-cost alternative to expensive IV pump systems.
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  Easy to use with gravity IV sets; requires "two hands" safety operation for adjustment.
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  Operating principle: "Triple Labyrinth" (GVS patented technology) ensures high stability and accuracy.
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  No electrical power required; lightweight and modern design.
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  Ideal for home infusion; compatible with standard IV lines or extension sets.
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>Specifications</h2>
              <div className='bg-gray-50 rounded-2xl p-6 space-y-4 text-sm text-gray-700'>
                <div className='grid grid-cols-2 border-b border-gray-200 pb-3'>
                  <span className='font-semibold'>Biosafety</span>
                  <span>Materials comply with USP class VI-121°C test and ISO 10993</span>
                </div>
                <div className='grid grid-cols-2 border-b border-gray-200 pb-3'>
                  <span className='font-semibold'>Dimensions</span>
                  <span>Diameter x Height: 32.00 x 34.20mm<br/>Weight: 9.00g</span>
                </div>
                <div className='grid grid-cols-2 border-b border-gray-200 pb-3'>
                  <span className='font-semibold'>Operating Range</span>
                  <span>20 to 250ml/h</span>
                </div>
                <div className='grid grid-cols-2 border-b border-gray-200 pb-3'>
                  <span className='font-semibold'>Connectors</span>
                  <span>Standard IV tubing (Tube 2.7 x 3.5 or 3.0 x 4.1mm)</span>
                </div>
                <div className='grid grid-cols-2 border-b border-gray-200 pb-3'>
                  <span className='font-semibold'>Construction</span>
                  <span>Housing: White ABS<br/>Gasket: SEBS</span>
                </div>
                <div className='grid grid-cols-2 border-b border-gray-200 pb-3'>
                  <span className='font-semibold'>Max Pressure</span>
                  <span>0.5 bar (7psi) static condition</span>
                </div>
                <div className='grid grid-cols-2 border-b border-gray-200 pb-3'>
                  <span className='font-semibold'>Environment</span>
                  <span>Max 40°C (104°F) indoor operation</span>
                </div>
                <div className='grid grid-cols-2'>
                  <span className='font-semibold'>Flow Stability</span>
                  <span>10% fluctuation during 24h infusion</span>
                </div>
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

export default EasydropFlowRegulatorPage

