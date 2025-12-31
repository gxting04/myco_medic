import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function HorseshoeHeadPadsPage({ product }) {
  const category = product?.category
    ? Data.productCategories.find((c) => c.name === product.category)
    : null

  const backLink = category
    ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Positioning Devices / Head and Neck Pads
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-black'>
              Horseshoe Head Pads (1103 Series)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Horseshoe-shaped supports that keep the airway clear while allowing anesthetic tubing access for
              prone or lateral procedures.
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name ?? 'Horseshoe Head Pads'}`}
                className='px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              <Link
                to={backLink}
                className='px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-primary transition-colors text-black'
              >
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product?.image}
              alt='Horseshoe Head Pads'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Key benefits</h2>
            <div className='space-y-3'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Open horseshoe design keeps a clear passageway for respiration.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Allows anesthetic pipes/tubing access during prone or lateral surgery.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Cushions and stabilizes the head while reducing pressure points.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-20'>
        <h2 className='text-3xl font-bold mb-6 text-black'>Models</h2>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='px-6 py-4 text-left font-semibold'>Model</th>
                  <th className='px-6 py-4 text-left font-semibold'>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 font-medium text-gray-900'>1103 Series</td>
                  <td className='px-6 py-4 text-gray-700'>
                    Horseshoe head pads that provide clear airway access and tubing space for prone/lateral cases.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default HorseshoeHeadPadsPage

