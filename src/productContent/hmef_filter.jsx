import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function HMEFFilterPage({ product }) {
  const category = product.category 
    ? Data.productCategories.find(c => c.name === product.category)
    : null
  
  const backLink = category 
    ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Airway Management / Breathing System Filter
            </span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6 text-black'>
              Heat And Moisture Exchanger Filter (HMEF)
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              Advanced filtration technology for optimal patient care in respiratory therapy
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} ($${product.price})`}
                className='px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors'
                target='_blank'
                rel='noopener noreferrer'
              >
                Talk to a Specialist
              </a>
              {category && (
                <Link
                  to={backLink}
                  className='px-6 py-3 border border-gray-300 rounded-lg font-medium hover:border-primary transition-colors text-black'
                >
                  View More Filters
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
              alt='HMEF Filter'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>

          <div>
            <h2 className='text-3xl font-bold mb-6 text-black'>Product Features</h2>
            <div className='space-y-4 text-gray-700'>
              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Good humidification function</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Low respiratory resistance & low dead space</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Types for pediatric, child, and adult</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Breathing filters help eliminate the risk of cross-infection by preventing the transfer of bacteria and viruses to and from the patient</p>
              </div>

              <div className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Protect the patients and ventilators from cross contamination</p>
              </div>
            </div>

            <div className='mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg'>
              <h3 className='text-xl font-bold text-gray-900 mb-2'>Package</h3>
              <p className='text-gray-700'>1pcs/pouch, 100pcs/Carton</p>
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
                  <th className='px-6 py-4 text-left font-semibold'>Reference NO#</th>
                  <th className='px-6 py-4 text-left font-semibold'>Capacity</th>
                  <th className='px-6 py-4 text-left font-semibold'>Connector</th>
                  <th className='px-6 py-4 text-left font-semibold'>Moisturization</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME201</td>
                  <td className='px-6 py-4 text-gray-700'>95ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME202</td>
                  <td className='px-6 py-4 text-gray-700'>95ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME203</td>
                  <td className='px-6 py-4 text-gray-700'>45ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME204</td>
                  <td className='px-6 py-4 text-gray-700'>45ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME205</td>
                  <td className='px-6 py-4 text-gray-700'>45ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME206</td>
                  <td className='px-6 py-4 text-gray-700'>66ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME207</td>
                  <td className='px-6 py-4 text-gray-700'>92ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME208</td>
                  <td className='px-6 py-4 text-gray-700'>92ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME209</td>
                  <td className='px-6 py-4 text-gray-700'>26ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME210</td>
                  <td className='px-6 py-4 text-gray-700'>26ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME211</td>
                  <td className='px-6 py-4 text-gray-700'>99ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME212</td>
                  <td className='px-6 py-4 text-gray-700'>99ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME213</td>
                  <td className='px-6 py-4 text-gray-700'>5ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME214</td>
                  <td className='px-6 py-4 text-gray-700'>5ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME215</td>
                  <td className='px-6 py-4 text-gray-700'>5ml</td>
                  <td className='px-6 py-4 text-gray-700'>15F-15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-white hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME216</td>
                  <td className='px-6 py-4 text-gray-700'>95ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
                <tr className='bg-gray-50 hover:bg-blue-50 transition-colors'>
                  <td className='px-6 py-4 text-gray-900 font-medium'>HME217</td>
                  <td className='px-6 py-4 text-gray-700'>66ml</td>
                  <td className='px-6 py-4 text-gray-700'>22M/15F-22F/15M</td>
                  <td className='px-6 py-4 text-gray-700'>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className='text-sm text-gray-600 mt-4 text-center'>
          Available in various capacities for pediatric, child, and adult patients
        </p>
      </section>


      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Order?</h3>
            <p className='text-gray-700'>
              Contact our specialists for bulk orders, pricing, and technical specifications for HMEF filters.
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

export default HMEFFilterPage

