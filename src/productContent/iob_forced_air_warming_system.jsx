import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function IOBForcedAirWarmingSystemPage({ product }) {
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
              Advanced forced-air warming system designed to maintain normothermia with precision and ease. Includes the IOB Warming Unit and compatible Warming Blankets.
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          
          {/* IOB Warming Unit */}
          <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>IOB Warming Unit</h2>
            
            <div className='space-y-6 text-gray-600'>
              <div>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>Features</h3>
                <ul className='list-disc list-inside space-y-2'>
                  <li>Advanced interface with 4 one-touch temperature selections:
                    <ul className='list-none pl-6 mt-1 text-sm space-y-1'>
                      <li>• Ambient</li>
                      <li>• 32°C</li>
                      <li>• 38°C</li>
                      <li>• 43°C</li>
                    </ul>
                  </li>
                  <li>Large digital readout for easy monitoring.</li>
                  <li>Hose-end temperature sensing ensures accurate air temperature delivery.</li>
                  <li>Compact, lightweight, and quiet operation.</li>
                </ul>
              </div>

              <div className='pt-4 border-t border-gray-100'>
                <h3 className='text-lg font-semibold text-gray-800 mb-2'>Specifications</h3>
                <div className='grid grid-cols-2 gap-4 text-sm'>
                  <div>
                    <span className='block font-medium text-gray-500'>Dimensions</span>
                    <span>H28cm x D22cm x W22cm</span>
                  </div>
                  <div>
                    <span className='block font-medium text-gray-500'>Weight</span>
                    <span>5.4 Kg</span>
                  </div>
                  <div>
                    <span className='block font-medium text-gray-500'>Noise Level</span>
                    <span>&lt;55 dBA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IOB Warming Blankets */}
          <div className='bg-white rounded-3xl p-8 shadow-sm border border-gray-100'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>IOB Warming Blankets</h2>
            <p className='text-gray-600 mb-6'>
              Designed for maximum effectiveness and patient comfort during procedures.
            </p>
            
            <ul className='space-y-4'>
              {[
                'Flexible, easy-to-use designs.',
                'Uniform perforation across the blanket surface ensures even convective warming.',
                'Resealable hose ports (where applicable).',
                'Soft, radiolucent, latex-free materials.',
                'Fully compatible with other brands of warming blankets.'
              ].map((feature, i) => (
                <li key={i} className='flex items-start gap-3 text-gray-600'>
                  <div className='mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Additional Image Section */}
      <section className='max-w-7xl mx-auto px-6 pb-16'>
        <div className='rounded-3xl overflow-hidden shadow-lg bg-white border border-gray-100'>
           <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053"
            alt="Medical care environment"
            className='w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700'
          />
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default IOBForcedAirWarmingSystemPage
