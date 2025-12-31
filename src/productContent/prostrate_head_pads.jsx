import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function ProstrateHeadPadsPage({ product }) {
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
              Prostrate Head Pads (1101 Series)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Positioning pads designed to protect and support the head and face during prostrate/prone
              procedures, maintain airway access under general anesthesia, and cushion the chest, hipbone,
              knees, and ankles across prone or lateral positioning.
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name ?? 'Prostrate Head Pads'}`}
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
              alt='Prostrate Head Pads'
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
                <p>Supports head/face while maintaining a clear respiratory passageway during anesthesia.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Protects chest, hipbone, knees, and ankles in prone or re-supine positioning.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Available in reusable bases with disposable pads plus single-use options for flexibility.</p>
              </div>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Eye-restoration design variant (1101-2) for ocular cases.</p>
              </div>
            </div>

            <div className='mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg text-gray-800'>
              <h3 className='text-xl font-bold mb-2 text-black'>Care notes</h3>
              <ul className='list-disc list-inside space-y-2'>
                <li>Single-use pads: keep away from UV/direct sunlight and avoid extreme temperatures.</li>
                <li>Check padding before use to ensure even support and airway clearance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-20'>
        <h2 className='text-3xl font-bold mb-6 text-black'>Models & sizing</h2>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='px-6 py-4 text-left font-semibold'>Model</th>
                  <th className='px-6 py-4 text-left font-semibold'>Type</th>
                  <th className='px-6 py-4 text-left font-semibold'>Size / Adjustment</th>
                  <th className='px-6 py-4 text-left font-semibold'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 font-medium text-gray-900'>1101</td>
                  <td className='px-6 py-4 text-gray-700'>Standard prostrate head pad</td>
                  <td className='px-6 py-4 text-gray-700'>—</td>
                  <td className='px-6 py-4 text-gray-700'>Protects head/face; supports airway during prone surgery.</td>
                </tr>
                <tr className='bg-white'>
                  <td className='px-6 py-4 font-medium text-gray-900'>1101-2</td>
                  <td className='px-6 py-4 text-gray-700'>Eye-restoration design</td>
                  <td className='px-6 py-4 text-gray-700'>—</td>
                  <td className='px-6 py-4 text-gray-700'>Designed for eye patients’ restoration after surgery.</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 font-medium text-gray-900'>1101-14</td>
                  <td className='px-6 py-4 text-gray-700'>Disposable prostrate head pad</td>
                  <td className='px-6 py-4 text-gray-700'>30 cm × 24 cm × 15 cm</td>
                  <td className='px-6 py-4 text-gray-700'>Ergonomic support; acrylic mirror; X-ray through; latex free; single use.</td>
                </tr>
                <tr className='bg-white'>
                  <td className='px-6 py-4 font-medium text-gray-900'>1101-17</td>
                  <td className='px-6 py-4 text-gray-700'>Adjustable (reusable base + disposable foam)</td>
                  <td className='px-6 py-4 text-gray-700'>33 cm × 27.5 cm × 17.5 cm; height adj. ~0.28 mm; pad spacing 15–70 mm</td>
                  <td className='px-6 py-4 text-gray-700'>Height and distance adjustable for patient fit.</td>
                </tr>
                <tr className='bg-gray-50'>
                  <td className='px-6 py-4 font-medium text-gray-900'>1101-18</td>
                  <td className='px-6 py-4 text-gray-700'>Adjustable (reusable base + disposable foam)</td>
                  <td className='px-6 py-4 text-gray-700'>22 cm × 19.5 cm × 11 cm; height adj. ~0.28 mm; pad spacing 15–70 mm</td>
                  <td className='px-6 py-4 text-gray-700'>Compact adjustable option for smaller patients.</td>
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

export default ProstrateHeadPadsPage

