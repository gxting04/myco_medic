import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function DisposableEmergencySuturePackPage({ product }) {
  const group = Data.productGroups.find(g => g.id === 5)
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
                e.target.src = 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800'
              }}
            />
          </div>

          <div>
            <span className='text-primary font-semibold tracking-wide uppercase text-sm'>
              {group ? group.name : 'Disposable Pack'}
            </span>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6'>
              {product.name}
            </h1>
            <p className='text-xl text-gray-600 leading-relaxed mb-8'>
              Ready-to-use EO sterilized pack for everyday wound management and suturing. Designed to minimize infection risk and deliver a reliable single-use stitching procedure.
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
          <h2 className='text-3xl font-bold text-gray-900 mb-10'>Key Details</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-gray-900'>Benefits</h3>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  <span>Single-use pack minimizes cross infection risk.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  <span>Reliable for a full stitching procedure in emergencies.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  <span>EO sterilized and ready to use.</span>
                </li>
              </ul>
            </div>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-gray-900'>Use Cases</h3>
              <ul className='space-y-3 text-gray-600'>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  <span>Everyday wound management and suturing.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  <span>Emergency department use.</span>
                </li>
                <li className='flex gap-3'>
                  <span className='text-primary font-bold'>•</span>
                  <span>Ideal when sterilization turnaround is a constraint.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default DisposableEmergencySuturePackPage

