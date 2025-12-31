import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function ORTablePadsPage({ product }) {
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
              Lower Limb Pads
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-black'>
              O.R. Table Pads, Full Size Table Pads &amp; ICU Bed Pads (5101 Series)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              A comprehensive range of operating room and ICU bed pads designed to work with the table surface to
              protect the skin from pressure sores and nerve injury across a wide variety of procedures.
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name ?? 'O.R. Table Pads / Bed Pads'}`}
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
                Back to Lower Limb Pads
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 space-y-12'>
        {/* O.R. Table Pads */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product?.image}
              alt='O.R. Table Pads'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>O.R. Table Pads (5101)</h2>
            <p>
              Used in combination with the operating table, these pads help protect skin from pressure sores and
              nerve injury during perioperative care.
            </p>
          </div>
        </div>

        {/* Full Size Table Pads */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Full Size Table Pads</h2>
            <p>
              Full-size surface pads that cover the entire table, offering continuous pressure redistribution for
              long procedures.
            </p>
          </div>
          <div>
            <img
              src={product?.image}
              alt='Full Size Table Pads'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
        </div>

        {/* ICU Bed Pads */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product?.image}
              alt='ICU Bed Pads'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>ICU Bed Pads</h2>
            <p>
              ICU bed pads extend the same protective benefits to critically ill patients requiring prolonged bed
              rest, with multiple model sizes available.
            </p>
          </div>
        </div>

        <div className='mt-4 p-6 bg-blue-50 border border-blue-200 rounded-lg text-gray-800'>
          <h3 className='text-xl font-bold mb-2 text-black'>Models &amp; sizing</h3>
          <p>
            The 5101 series includes models with and without cutouts, as well as full-size and ICU bed pad
            variations, each with dedicated measurement charts.
          </p>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default ORTablePadsPage


