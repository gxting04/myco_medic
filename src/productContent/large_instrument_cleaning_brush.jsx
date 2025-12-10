import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function LargeInstrumentCleaningBrushPage({ product }) {
  const group = Data.productGroups.find(g => g.id === 6)
  const backLink = group ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}` : '/products'

  return (
    <div className='bg-[#f5f5f7] min-h-screen'>
      <Header />

      <section className='pt-32 pb-16 px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='relative rounded-3xl overflow-hidden shadow-lg aspect-square lg:aspect-auto lg:h-[500px] bg-white p-8 flex items-center justify-center'>
            <img
              src={product.image}
              alt={product.name}
              className='w-full h-full object-contain'
              onError={(e) => {
                e.target.src = 'https://www.mycomedic.com.my/uploads/9/7/1/1/9711883/untitled_23_orig.png'
              }}
            />
          </div>

          <div>
            <span className='text-primary font-semibold tracking-wide uppercase text-sm'>
              {group ? group.name : 'Cleaning Accessories'}
            </span>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6'>
              {product.name}
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Large instrument cleaning brush suited for retractors, specula, and similar devices. Provides effective debris removal for bigger instruments.
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

      <section className='py-16 px-6 max-w-7xl mx-auto'>
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100'>
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>Details</h2>
          <ul className='space-y-3 text-gray-600 leading-relaxed'>
            <li className='flex gap-3'><span className='text-primary font-bold'>•</span><span>Designed for larger surgical instruments.</span></li>
            <li className='flex gap-3'><span className='text-primary font-bold'>•</span><span>Bristles suited to remove debris without damaging surfaces.</span></li>
            <li className='flex gap-3'><span className='text-primary font-bold'>•</span><span>Supports cleaning of retractors, specula, and similar tools.</span></li>
          </ul>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default LargeInstrumentCleaningBrushPage

