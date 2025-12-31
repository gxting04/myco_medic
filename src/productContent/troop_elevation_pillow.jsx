import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function TroopElevationPillowPage({ product }) {
  const category = product?.category
    ? Data.productCategories.find((c) => c.name === product.category)
    : null

  const backLink = category ? `/products/category/${category.name.toLowerCase().replace(/\s+/g, '-')}` : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-20 lg:py-28'>
          <div className='lg:w-3/4'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>
              Positioning Devices
            </span>
            <h1 className='text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-black'>
              Troop Elevation Pillow (10-910-03)
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              A dedicated elevation pillow designed to facilitate airway management and positioning of obese or
              large-framed patients by rapidly achieving the Head-Elevated Laryngoscopy Position (HELP).
            </p>
            <div className='flex flex-wrap gap-4 mt-8'>
              <a
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product?.name ?? 'Troop Elevation Pillow'}`}
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
                Back to Positioning Devices
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16 space-y-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div>
            <img
              src={product?.image}
              alt='Troop Elevation Pillow'
              className='w-full h-auto object-cover rounded-lg shadow-lg'
            />
          </div>
          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Key features</h2>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Designed for intra-operative and post-operative care of obese and large-framed patients.</p>
              </li>
              <li className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>
                  Developed by a practicing anesthesiologist to replace unstable “stacked blanket” solutions with a
                  stable, easy-to-set-up system.
                </p>
              </li>
              <li className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>Quickly achieves the Head-Elevated Laryngoscopy Position (HELP).</p>
              </li>
              <li className='flex items-start gap-3'>
                <svg className='w-6 h-6 text-primary mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
                <p>This position is recommended for airway management of obese patients.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Indications for use</h2>
            <ul className='list-disc list-inside space-y-1'>
              <li>General and regional anesthesia for obese patients.</li>
              <li>Local anesthesia with IV sedation for obese patients.</li>
              <li>Aid to improve mask and spontaneous ventilation.</li>
              <li>Obstetric C-section cases.</li>
              <li>ENT, head &amp; neck, facial surgeries.</li>
              <li>Neurosurgery: positioning for anterior cervical fusion.</li>
              <li>Bariatric surgery.</li>
              <li>X-ray / cath lab procedures.</li>
            </ul>
          </div>

          <div className='space-y-4 text-gray-700'>
            <h2 className='text-3xl font-bold text-black'>Benefits</h2>
            <ul className='list-disc list-inside space-y-1'>
              <li>Aids airway management for obese patients.</li>
              <li>Improves ease of breathing.</li>
              <li>Helps align the upper airway axes.</li>
              <li>Obese patients breathe more comfortably during pre-oxygenation.</li>
              <li>Greatly facilitates mask ventilation.</li>
              <li>Eliminates blanket stacking with easier, faster set-up.</li>
              <li>Maintains stable patient positioning throughout surgery.</li>
              <li>Helps decrease acid reflux and aids in managing GERD.</li>
            </ul>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <Footer />
    </div>
  )
}

export default TroopElevationPillowPage


