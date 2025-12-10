import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Data from '@/shared/Data'

function InfantTPieceResuscitatorPage({ product }) {
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
              Neo-Tee® Infant T-Piece Resuscitator
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

      {/* Introduction Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
          <p>
            Neo-tee introducing a better way to deliver positive pressure ventilation to your infant patients with convenient in-line viewing and liable easy-to-read airway pressure dial.
          </p>
          <p>
            Mercury Medical® is pleased to announce the first single-patient-use infant T-piece Resuscitation device.
          </p>
          <p>
            The Neo-Tee is flow-controlled and pressure limited. It offers he ability to measure a more consistent, targeted Peak Inspiratory Pressure (PIP) and Positive End-Expiratory Pressure (PEEP).
          </p>
          <p>
            With the new Neo-Tee, there's absolutely NO capital equipment to purchase and it is completely disposable. Even Better... No fatigue from squeezing a bag since there is no bag to squeeze!
          </p>
        </div>
      </section>

      {/* NICU Bed Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <h2 className='text-3xl font-bold text-black mb-6'>
          Providing affordable T-Piece Resuscitation for every NICU Bed
        </h2>
        <p className='text-lg text-gray-700 leading-relaxed mb-8'>
          Undoubtedly an industry first, Neo-Tee is the only disposable T-Piece device on the market today that offers a built-in monitor "on the Tee" for convenient, in-line viewing of delivered airway pressure. While budget constraints may prevent having capital equipment for the best patient care where its needed the most, just imagine having an affordable device like the Neo-Tee at every NICU bedside.
        </p>

        {/* Two Images Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Neo-Tee Infant T-Piece Resuscitator'
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Neo-Tee Infant T-Piece Resuscitator Features'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Pressure Relief Valve Section */}
      <section className='max-w-6xl mx-auto px-6 py-16 lg:py-24'>
        <p className='text-lg text-gray-700 leading-relaxed mb-8'>
          Neo-Tee® includes a built-in pressure relief valve as an added safety measure, limiting ventilatory pressures to 40cm of H2O and the stay-put PEEP valve allows for quick and easy PEEP presure adjustments as needed
        </p>

        {/* Two Images Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-12'>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Neo-Tee Pressure Relief Valve'
              className='w-full h-auto object-cover'
            />
          </div>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <img
              src={product.image || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600'}
              alt='Neo-Tee PEEP Valve'
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='max-w-6xl mx-auto px-6 pb-16'>
        <div className='bg-primary/10 border border-primary/30 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8'>
          <div className='lg:w-2/3 space-y-4'>
            <h3 className='text-2xl font-semibold text-black'>Ready to Learn More?</h3>
            <p className='text-gray-700'>
              Contact our specialists to discuss how the Neo-Tee® Infant T-Piece Resuscitator can enhance your NICU's respiratory care capabilities.
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

export default InfantTPieceResuscitatorPage

