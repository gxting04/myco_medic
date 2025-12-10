import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function ReusableCPRResuscitationPage({ product }) {
  // Get group information if product has no category
  const group = product.groupId && !product.category 
    ? Data.productGroups.find(g => g.id === product.groupId)
    : null
  
  const backLink = group 
    ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}`
    : '/products'

  return (
    <div className='bg-white text-black'>
      <Header />

      {/* Hero Section */}
      <section className='relative overflow-hidden bg-gray-50'>
        <div className='max-w-6xl mx-auto px-6 py-24 lg:py-32'>
          <div className='lg:w-2/3'>
            <span className='text-primary uppercase tracking-widest text-sm font-semibold'>Airway Management</span>
            <h1 className='text-4xl lg:text-6xl font-extrabold mt-4 mb-6 text-black'>
              Reusable CPR Resuscitation System
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

      {/* Image Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='rounded-2xl overflow-hidden shadow-xl'>
          <img
            src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
            alt='Reusable CPR Resuscitation System'
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Product Description Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-3xl font-bold text-black mb-8'>Product Description</h2>
        <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
          The Reusable CPR Resuscitation System is a full line of resuscitators manufactured with Silicone and Polysulfone material providing superior lung compliance "feel" with exceptional responsiveness.
        </p>
        <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
          Designed to be fully autoclavable, with the exception of certain accessories and replacement items such as the reservoir bag, oxygen tubing and accessories.
        </p>

        <h3 className='text-2xl font-semibold text-black mb-6 mt-12'>Benefits:</h3>
        <ol className='space-y-4 text-gray-700 list-decimal list-inside'>
          <li className='leading-relaxed'>
            Optional Colour-Coded Manometer, accuracy is ± 3 cm H₂O between 0 - 15cm H₂O.
          </li>
          <li className='leading-relaxed'>
            Monitors both Airway and PEEP Pressure.
          </li>
          <li className='leading-relaxed'>
            Fast re-expansion/high breath-per-minute capability.
          </li>
          <li className='leading-relaxed'>
            Medical-grade Silicone and Polysulfone material.
          </li>
          <li className='leading-relaxed'>
            Autoclavable temperature 132°C (except reservoir bag, oxygen tubing and disposable accessories).
          </li>
          <li className='leading-relaxed'>
            Optional CO₂ detector accessory.
          </li>
          <li className='leading-relaxed'>
            Patient valve detaches to add Omni-Link tubing that provides greater reach capability. Ideal for neonatal and MRI needs.
          </li>
          <li className='leading-relaxed'>
            Optional Exhalation Filter and MR Conditional Peep Valve accessory.
          </li>
        </ol>
      </section>

      {/* Second Image Section */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='rounded-2xl overflow-hidden shadow-xl'>
          <img
            src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
            alt='Reusable CPR Resuscitation System'
            className='w-full h-auto object-cover'
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-gray-700'>
              Contact our specialists to discuss how the Reusable CPR Resuscitation System can enhance your respiratory care protocols and emergency response capabilities.
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

export default ReusableCPRResuscitationPage

