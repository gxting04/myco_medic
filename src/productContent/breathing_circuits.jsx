import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function BreathingCircuitsPage({ product }) {
  const group = product.groupId && !product.category 
    ? Data.productGroups.find(g => g.id === product.groupId)
    : null
  
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  const circuitSpecs = [
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0112E', originalLength: '0.43m', expandableLength: '1.2m' },
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0115E', originalLength: '0.54m', expandableLength: '1.5m' },
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0115C', originalLength: '0.54m', expandableLength: '1.5m' },
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0118C', originalLength: '0.65m', expandableLength: '1.8m' },
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0212E', originalLength: '1.2m', expandableLength: '/' },
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0215E', originalLength: '1.5m', expandableLength: '/' },
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0215C', originalLength: '1.5m', expandableLength: '/' },
    { type: 'Anesthesia Circuits(M)', refNo: 'BTM0218C', originalLength: '1.8m', expandableLength: '/' },
    { type: 'Breathing Circuits(H)', refNo: 'BTH0212E', originalLength: '1.2m', expandableLength: '/' },
    { type: 'Breathing Circuits(H)', refNo: 'BTH0215E', originalLength: '1.5m', expandableLength: '/' },
    { type: 'Breathing Circuits(H)', refNo: 'BTH0215C', originalLength: '1.5m', expandableLength: '/' },
    { type: 'Breathing Circuits(H)', refNo: 'BTH0218C', originalLength: '1.8m', expandableLength: '/' }
  ]

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6 text-black'>
              Breathing Circuits
            </h1>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              {group && (
                <Link
                  to={backLink}
                  className='px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-primary transition-colors text-black'
                >
                  View More Products
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product.image}
              alt='Breathing Circuits'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          <div>
            <h2 className='text-3xl font-bold mb-6 text-black'>Product Overview</h2>
            <div className='space-y-4 text-gray-700'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Circuits for breathing machine (with water traps, pediatric & adult).</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Circuits for anesthesia machine (1.2m, 1.5m, 1.8m, expandable & unexpandable, pediatric & adult).</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>All of our circuits are made with only premium-quality materials and have proven reliable during use.</p>
              </div>
            </div>

            <div className='mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg'>
              <h3 className='text-xl font-bold text-gray-900 mb-3'>Quality Assurance</h3>
              <p className='text-gray-700'>
                Our breathing circuits meet international standards and are trusted by healthcare professionals worldwide for their durability and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 bg-gray-50'>
        <h2 className='text-3xl font-bold mb-8 text-black'>Product Specifications</h2>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='px-6 py-4 text-left font-semibold'>Type</th>
                  <th className='px-6 py-4 text-left font-semibold'>Reference NO#</th>
                  <th className='px-6 py-4 text-left font-semibold'>Original Length</th>
                  <th className='px-6 py-4 text-left font-semibold'>Expandable Length</th>
                </tr>
              </thead>
              <tbody>
                {circuitSpecs.map((spec, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
                  >
                    <td className='px-6 py-4 text-gray-900 font-medium'>{spec.type}</td>
                    <td className='px-6 py-4 text-gray-700'>{spec.refNo}</td>
                    <td className='px-6 py-4 text-gray-700'>{spec.originalLength}</td>
                    <td className='px-6 py-4 text-gray-700'>{spec.expandableLength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className='text-sm text-gray-600 mt-4 text-center'>
          Contact us for bulk orders and custom specifications
        </p>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold mb-8 text-black text-center'>Available Options</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>Anesthesia Circuits</h3>
            </div>
            <p className='text-gray-700 mb-4'>
              Available in multiple lengths (1.2m, 1.5m, 1.8m) with both expandable and unexpandable options for pediatric and adult use.
            </p>
            <ul className='space-y-2 text-gray-700'>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-primary rounded-full'></span>
                Expandable: 0.43m to 1.8m
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-primary rounded-full'></span>
                Fixed lengths: 1.2m, 1.5m, 1.8m
              </li>
            </ul>
          </div>

          <div className='bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-md'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-12 bg-green-600 rounded-full flex items-center justify-center'>
                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-900'>Breathing Circuits</h3>
            </div>
            <p className='text-gray-700 mb-4'>
              High-quality circuits with water traps, designed for breathing machines in pediatric and adult applications.
            </p>
            <ul className='space-y-2 text-gray-700'>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                With water traps included
              </li>
              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-600 rounded-full'></span>
                Fixed lengths: 1.2m, 1.5m, 1.8m
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Need Help Choosing?</h3>
            <p className='text-gray-700'>
              Contact our specialists to discuss which breathing circuit configuration best suits your clinical needs.
            </p>
          </div>
          <a 
            href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
            className='px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default BreathingCircuitsPage

